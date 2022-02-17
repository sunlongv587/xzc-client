package xzc.client;

import com.google.protobuf.Any;
import io.netty.bootstrap.Bootstrap;
import io.netty.channel.Channel;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.http.DefaultHttpHeaders;
import io.netty.handler.codec.http.websocketx.WebSocketClientHandshakerFactory;
import io.netty.handler.codec.http.websocketx.WebSocketVersion;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.SslContextBuilder;
import io.netty.handler.ssl.util.InsecureTrustManagerFactory;
import xzc.server.proto.*;

import java.net.URI;
import java.util.UUID;

public final class WebSocketClient {

    private Sender sender;

    private ClientInfo clientInfo;

    public WebSocketClient(ClientInfo clientInfo) {
        this.clientInfo = clientInfo;
    }

    public Sender sender() {
        return this.sender;
    }

    public void connect(String url) throws Exception {
        URI uri = new URI(url);
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
                    .handler(new WebsocketClientChannelInitializer(uri, sslCtx, handler));
            Channel ch = b.connect(uri.getHost(), port).sync().channel();
            handler.handshakeFuture().sync();
            // 连接成功
            this.sender = new Sender(ch);
            // 登录
            sender.login(LoginRequest.newBuilder()
                    .setUsername(clientInfo.getUsername())
                    .setToken(clientInfo.getToken())
                    .build());
        } finally {
//            group.shutdownGracefully();
        }
    }

    private static void echo(Channel ch) {
        // 构建body
        XZCSignal loginSignal = XZCSignal
                .newBuilder()
                .setCommand(XZCCommand.LOGIN_REQUEST)
                .setBody(Any.pack(LoginRequest.newBuilder()
                        .setUsername("username")
                        .setToken("XXXXX")
                        .build()))
                .build();
        // 构建 payload
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
