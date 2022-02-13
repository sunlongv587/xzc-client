package xzc.client;

import com.google.protobuf.Any;
import com.google.protobuf.MessageLite;
import com.google.protobuf.MessageLiteOrBuilder;
import com.google.protobuf.StringValue;
import io.netty.bootstrap.Bootstrap;
import io.netty.buffer.ByteBuf;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.MessageToMessageDecoder;
import io.netty.handler.codec.MessageToMessageEncoder;
import io.netty.handler.codec.http.DefaultHttpHeaders;
import io.netty.handler.codec.http.HttpClientCodec;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketClientHandshakerFactory;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketVersion;
import io.netty.handler.codec.http.websocketx.extensions.compression.WebSocketClientCompressionHandler;
import io.netty.handler.codec.protobuf.ProtobufDecoder;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import io.netty.handler.ssl.util.InsecureTrustManagerFactory;
import xzc.server.proto.*;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static io.netty.buffer.Unpooled.wrappedBuffer;

public final class WebSocketClient {

    static final String URL = System.getProperty("url", "ws://127.0.0.1:8800/ws");

    public static void main(String[] args) throws Exception {
        URI uri = new URI(URL);
        String scheme = uri.getScheme() == null ? "ws" : uri.getScheme();
        final String host = uri.getHost() == null ? "127.0.0.1" : uri.getHost();
        final int port;
        if (uri.getPort() == -1) {
            if ("ws".equalsIgnoreCase(scheme)) {
                port = 80;
            } else if ("wss".equalsIgnoreCase(scheme)) {
                port = 443;
            } else {
                port = -1;
            }
        } else {
            port = uri.getPort();
        }

        if (!"ws".equalsIgnoreCase(scheme) && !"wss".equalsIgnoreCase(scheme)) {
            System.err.println("Only WS(S) is supported.");
            return;
        }

        final boolean ssl = "wss".equalsIgnoreCase(scheme);
        final SslContext sslCtx;
        if (ssl) {
            sslCtx = SslContextBuilder.forClient()
                    .trustManager(InsecureTrustManagerFactory.INSTANCE).build();
        } else {
            sslCtx = null;
        }

        EventLoopGroup group = new NioEventLoopGroup();
        try {
            // Connect with V13 (RFC 6455 aka HyBi-17). You can change it to V08 or V00.
            // If you change it to V00, ping is not supported and remember to change
            // HttpResponseDecoder to WebSocketHttpResponseDecoder in the pipeline.
            final WebSocketClientHandler handler =
                    new WebSocketClientHandler(
                            WebSocketClientHandshakerFactory.newHandshaker(
                                    uri, WebSocketVersion.V13, null, true, new DefaultHttpHeaders()));

            Bootstrap b = new Bootstrap();
            b.group(group)
                    .channel(NioSocketChannel.class)
                    .handler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        protected void initChannel(SocketChannel ch) {
                            ChannelPipeline p = ch.pipeline();
                            if (sslCtx != null) {
                                p.addLast(sslCtx.newHandler(ch.alloc(), host, port));
                            }
                            p.addLast(
                                    new HttpClientCodec(),
                                    new HttpObjectAggregator(8192),
                                    WebSocketClientCompressionHandler.INSTANCE);
                            // 协议包解码
                            p.addLast(new MessageToMessageDecoder<WebSocketFrame>() {
                                @Override
                                protected void decode(ChannelHandlerContext ctx, WebSocketFrame frame, List<Object> objs) throws Exception {
                                    ByteBuf buf = ((BinaryWebSocketFrame) frame).content();
                                    objs.add(buf);
                                    buf.retain();
                                }
                            });
                            // 协议包编码
                            p.addLast(new MessageToMessageEncoder<MessageLiteOrBuilder>() {
                                @Override
                                protected void encode(ChannelHandlerContext ctx, MessageLiteOrBuilder msg, List<Object> out) throws Exception {
                                    ByteBuf result = null;
                                    if (msg instanceof MessageLite) {
                                        result = wrappedBuffer(((MessageLite) msg).toByteArray());
                                    }
                                    if (msg instanceof MessageLite.Builder) {
                                        result = wrappedBuffer(((MessageLite.Builder) msg).build().toByteArray());
                                    }

                                    // ==== 上面代码片段是拷贝自TCP ProtobufEncoder 源码 ====
                                    // 然后下面再转成websocket二进制流，因为客户端不能直接解析protobuf编码生成的

                                    WebSocketFrame frame = new BinaryWebSocketFrame(result);
                                    out.add(frame);
                                }
                            });

                            // 协议包解码时指定Protobuf字节数实例化为CommonProtocol类型
                            p.addLast(new ProtobufDecoder(SignalMessage.getDefaultInstance()));
                            p.addLast(handler);
                        }
                    });

            Channel ch = b.connect(uri.getHost(), port).sync().channel();
            handler.handshakeFuture().sync();
            echo(ch);
        } finally {
//            group.shutdownGracefully();
        }
    }

    private static void echo(Channel ch) {
        // 构建body
        Any sunlong = Any.pack(StringValue.newBuilder().setValue("sunlong").build());
//        String unpack = sunlong.unpack(String.class);
        XZCSignal loginSignal = XZCSignal
                .newBuilder()
                .setCommand(XZCCommand.LOGIN_REQUEST)
                .setBody(Any.pack(LoginRequestBody.newBuilder()
                        .setUsername("username")
                        .setToken("XXXXX")
                        .build()))
                .build();
        // 构建 payload
        Map<String, Any> payload = new HashMap<>();
        Any.pack(StringValue.newBuilder().setValue("login").build());
        payload.put("command", Any.pack(StringValue.newBuilder().setValue("login").build()));
        payload.put("body", Any.pack(loginSignal));
        String uuid = UUID.randomUUID().toString();
        System.out.println("uuid: " + uuid);
        SignalMessage signalMessage = SignalMessage.newBuilder()
                .setGameId(1)
                .setTimestamp(System.currentTimeMillis())
                .setMessageId(uuid)
                .setType(MessageType.ECHO)
                .setVersion("1.0")
                .setPayload(Any.pack(loginSignal))
                .build();
        ch.writeAndFlush(signalMessage);
    }
}
