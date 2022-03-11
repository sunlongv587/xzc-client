package xzc.client;

import com.google.protobuf.Any;
import xzc.server.proto.*;

public class ClientActionService {


    public static void quickJoin(WebSocketClient client) {
        client.sender()
                .sendSignal(XZCSignal.newBuilder()
                        .setCommand(XZCCommand.QUICK_JOIN_ROOM_REQUEST)
                        .setBody(Any.pack(QuickJoinRoomRequest.newBuilder()
                                .setRoomType(RoomType.CLASSIC_3_6)
                                .build()))
                        .build());
    }

    public static void ready(WebSocketClient client) throws InterruptedException {
        Long roomId = client.clientContext().getRoomId();
        int time = 0;

        while (roomId == null && time < 10) {
            Thread.sleep(50);
            roomId = client.clientContext().getRoomId();
            time++;
        }
        if (roomId == null) {
            System.out.println("ready failed, room id is null");
            return;
        }
        client.sender()
                .sendSignal(XZCSignal.newBuilder()
                        .setCommand(XZCCommand.READY_REQUEST)
                        .setBody(Any.pack(ReadyRequest.newBuilder()
                                .setRoomId(roomId)
                                .setReadyOrCancel(true)
                                .build()))
                        .build());
    }

    public static void start(WebSocketClient client) throws InterruptedException {
        ParticipantState state = client.clientContext().getParticipantState();
        int time = 0;
        while (ParticipantState.PLAYING == state && time < 10) {
            Thread.sleep(50);
            state = client.clientContext().getParticipantState();
            time++;
        }
        if (state == null) {
            System.out.println("start failed, state is not playing.");
            return;
        }
        client.sender()
                .sendSignal(XZCSignal.newBuilder()
                        .setCommand(XZCCommand.START_REQUEST)
                        .setBody(Any.pack(StartRequest.newBuilder()
                                .setRoomId(client.clientContext().getRoomId())
                                .build()))
                        .build());
    }

}
