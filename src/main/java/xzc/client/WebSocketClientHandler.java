package xzc.client;

import com.alibaba.fastjson.JSON;
import com.google.protobuf.Any;
import io.netty.buffer.ByteBuf;
import io.netty.channel.*;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.websocketx.*;
import io.netty.handler.codec.protobuf.ProtobufDecoder;
import io.netty.util.AttributeKey;
import io.netty.util.CharsetUtil;
import xzc.server.proto.*;

import java.util.Map;

public class WebSocketClientHandler extends SimpleChannelInboundHandler<Object> {

    private final WebSocketClientHandshaker handshaker;
    private ChannelPromise handshakeFuture;

    public WebSocketClientHandler(WebSocketClientHandshaker handshaker) {
        this.handshaker = handshaker;
    }

    public ChannelFuture handshakeFuture() {
        return handshakeFuture;
    }

    @Override
    public void handlerAdded(ChannelHandlerContext ctx) {
        handshakeFuture = ctx.newPromise();
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) {
        handshaker.handshake(ctx.channel());
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) {
        System.out.println("WebSocket Client disconnected!");
    }

    @Override
    public void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
        Channel ch = ctx.channel();
        if (!handshaker.isHandshakeComplete()) {
            try {
                handshaker.finishHandshake(ch, (FullHttpResponse) msg);
                System.out.println("WebSocket Client connected!");
                handshakeFuture.setSuccess();
            } catch (WebSocketHandshakeException e) {
                System.out.println("WebSocket Client failed to connect");
                handshakeFuture.setFailure(e);
            }
            return;
        }

        if (msg instanceof FullHttpResponse) {
            FullHttpResponse response = (FullHttpResponse) msg;
            throw new IllegalStateException(
                    "Unexpected FullHttpResponse (getStatus=" + response.status() +
                            ", content=" + response.content().toString(CharsetUtil.UTF_8) + ')');
        }

        if (msg instanceof SignalMessage) {
            SignalMessage signalMessage = (SignalMessage) msg;
            String messageId = signalMessage.getMessageId();
            int gameId = signalMessage.getGameId();
            MessageType type = signalMessage.getType();
            long timestamp = signalMessage.getTimestamp();
            Any payload = signalMessage.getPayload();
            System.out.println("messageId: " + messageId);
            System.out.println("gameId: " + gameId);
            System.out.println("type: " + type);
            System.out.println("timestamp: " + timestamp);
            if (type == MessageType.SIGNAL) {
                if (payload.is(XZCSignal.class)) {
                    XZCSignal signal = payload.unpack(XZCSignal.class);
                    XZCCommand command = signal.getCommand();
                    Any body = signal.getBody();
                    switch(command) {
                        case LOGIN_RESPONSE:
                            if (body.is(LoginResponse.class)) {
                                System.out.println(">>>>>>>>>>>Received login response<<<<<<<<<<<");
                                LoginResponse loginResponse = body.unpack(LoginResponse.class);
                                boolean success = loginResponse.getSuccess();
                                System.out.println(success);
                                UserInfo userInfo = loginResponse.getUserInfo();
                                System.out.println(userInfo.toString());
                            }
                            break;
                        case QUICK_JOIN_ROOM_RESPONSE:
                            if (body.is(QuickJoinRoomResponse.class)) {
                                System.out.println(">>>>>>>>>>>Received quick join response<<<<<<<<<<<");
                                QuickJoinRoomResponse quickJoinRoomResponse = body.unpack(QuickJoinRoomResponse.class);
                                long roomId = quickJoinRoomResponse.getRoomId();
                                System.out.println("roomId: " + roomId);
                                Map<Long, Participant> participantsMap = quickJoinRoomResponse.getParticipantsMap();
                                System.out.println(JSON.toJSONString(participantsMap));
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            System.out.println("\n<<<<<<<<<<<<收到服务端协议:" + messageId + "<<<<<<<<<<<<");
            return;
        }

        WebSocketFrame frame = (WebSocketFrame) msg;
        if (frame instanceof TextWebSocketFrame) {
            TextWebSocketFrame textFrame = (TextWebSocketFrame) frame;
            System.out.println("WebSocket Client received message: " + textFrame.text());
        } else if (frame instanceof PongWebSocketFrame) {
            System.out.println("WebSocket Client received pong");
        } else if (frame instanceof CloseWebSocketFrame) {
            System.out.println("WebSocket Client received closing");
            ch.close();
        } else if (frame instanceof BinaryWebSocketFrame) {
            BinaryWebSocketFrame binaryFrame = (BinaryWebSocketFrame) frame;

        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        if (!handshakeFuture.isDone()) {
            handshakeFuture.setFailure(cause);
        }
        ctx.close();
    }
}
