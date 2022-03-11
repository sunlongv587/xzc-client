package xzc.client;

import com.alibaba.fastjson.JSON;
import com.google.protobuf.Any;
import lombok.AllArgsConstructor;
import xzc.server.proto.*;

import java.util.Map;

@AllArgsConstructor
public class SignalEventListener {

    private ClientContext clientContext;

    private ClientInfo clientInfo;

    public void listen(XZCSignal signal) throws Exception {

        XZCCommand command = signal.getCommand();
        Any body = signal.getBody();
        switch(command) {
            case LOGIN_RESPONSE:
                if (body.is(LoginResponse.class)) {
                    println(">>>>>>>>>>>Received login response<<<<<<<<<<<");
                    LoginResponse loginResponse = body.unpack(LoginResponse.class);
                    boolean success = loginResponse.getSuccess();
                    println(success);
                    UserInfo userInfo = loginResponse.getUserInfo();
                    println(userInfo.toString());
                }
                break;
            case QUICK_JOIN_ROOM_RESPONSE:
                if (body.is(QuickJoinRoomResponse.class)) {
                    println(">>>>>>>>>>>Received quick join response<<<<<<<<<<<");
                    QuickJoinRoomResponse quickJoinRoomResponse = body.unpack(QuickJoinRoomResponse.class);
                    long roomId = quickJoinRoomResponse.getRoomId();
                    println("roomId: " + roomId);
                    clientContext
                            .setRoomId(roomId)
                            .setParticipantState(ParticipantState.IDLE);
                    Map<Long, Participant> participantsMap = quickJoinRoomResponse.getParticipantsMap();
//                    println(JSON.toJSONString(participantsMap));
                }
                break;
            case READY_RESPONSE:
                if (body.is(ReadyResponse.class)) {
                    println(">>>>>>>>>>>Received ready response<<<<<<<<<<<");
                    ReadyResponse readyResponse = body.unpack(ReadyResponse.class);
                    long roomId = readyResponse.getRoomId();
                    println("roomId: " + roomId);
                    clientContext.setParticipantState(ParticipantState.PLAYING);
                }
                break;
            case START_RESPONSE:
                if (body.is(StartResponse.class)) {
                    println(">>>>>>>>>>>Received start response<<<<<<<<<<<");
                    StartResponse startResponse = body.unpack(StartResponse.class);
                    long roomId = startResponse.getRoomId();
                    long gameId = startResponse.getGameId();
                    println("roomId: " + roomId);
                    println("gameId: " + gameId);
                    clientContext.setGameId(gameId);
                    clientContext.setParticipantState(ParticipantState.IN_PLAY);
                }
                break;
            default:
                break;
        }
    }

    private void println(Object log) {
        System.out.println(clientInfo.getUsername() + ":-----" + log);
    }
}
