package xzc.client;

import com.google.protobuf.Any;
import xzc.server.proto.QuickJoinRoomRequest;
import xzc.server.proto.RoomType;
import xzc.server.proto.XZCCommand;
import xzc.server.proto.XZCSignal;

public class TestMain {

    static final String URL = System.getProperty("url", "ws://127.0.0.1:8800/ws");

    public static void main(String[] args) throws Exception {
        ClientInfo clientInfo = new ClientInfo()
                .setUsername("sl")
                .setToken("XXXXXX");
        WebSocketClient webSocketClient = new WebSocketClient(clientInfo);
        webSocketClient.connect(URL);
        webSocketClient
                .sender()
                .sendSignal(XZCSignal.newBuilder()
                .setCommand(XZCCommand.QUICK_JOIN_ROOM_REQUEST)
                .setBody(Any.pack(QuickJoinRoomRequest.newBuilder().setRoomType(RoomType.CLASSIC_3_6).build()))
                .build());
    }
}
