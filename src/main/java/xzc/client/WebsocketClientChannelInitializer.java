package xzc.client;

import com.google.protobuf.MessageLite;
import com.google.protobuf.MessageLiteOrBuilder;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;
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
import xzc.server.proto.SignalMessage;

import java.net.URI;
import java.util.List;

import static io.netty.buffer.Unpooled.wrappedBuffer;

public class WebsocketClientChannelInitializer extends ChannelInitializer<SocketChannel> {

    private URI uri;

    private SslContext sslCtx;

    private WebSocketClientHandler handler;

    public WebsocketClientChannelInitializer(URI uri, SslContext sslCtx, WebSocketClientHandler handler) {
        this.uri = uri;
        this.sslCtx = sslCtx;
        this.handler = handler;
    }

    @Override
    protected void initChannel(SocketChannel ch) {
        ChannelPipeline p = ch.pipeline();
        if (sslCtx != null) {
            p.addLast(sslCtx.newHandler(ch.alloc(), uri.getHost(), uri.getPort()));
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
}
