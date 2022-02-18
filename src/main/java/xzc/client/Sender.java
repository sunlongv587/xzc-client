package xzc.client;

import com.google.protobuf.Any;
import io.netty.channel.Channel;
import xzc.server.proto.*;

import java.util.UUID;

public class Sender {

    private Channel channel;

    public Sender(Channel channel) {
        this.channel = channel;
    }

    public void login(LoginRequest loginRequest) {
        XZCSignal loginSignal = XZCSignal
                .newBuilder()
                .setCommand(XZCCommand.LOGIN_REQUEST)
                .setBody(Any.pack(loginRequest))
                .build();
        sendSignal(loginSignal);
    }

    public void sendSignal(XZCSignal signal) {
        send(MessageType.SIGNAL, signal);
    }

    public void send(MessageType messageType, XZCSignal signal) {
        String uuid = UUID.randomUUID().toString();
        System.out.println("uuid: " + uuid);
        SignalMessage signalMessage = SignalMessage.newBuilder()
                .setGameId(1)
                .setTimestamp(System.currentTimeMillis())
                .setMessageId(uuid)
                .setType(messageType)
                .setVersion("1.0")
                .setPayload(Any.pack(signal))
                .build();
        channel.writeAndFlush(signalMessage);
    }

}
