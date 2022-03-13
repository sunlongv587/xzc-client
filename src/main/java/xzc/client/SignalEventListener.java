package xzc.client;

import com.google.protobuf.Any;
import lombok.AllArgsConstructor;
import xzc.server.proto.*;

import java.util.HashMap;
import java.util.Map;

public class SignalEventListener {

    private final ClientContext clientContext;

    private ClientInfo clientInfo;

    public SignalEventListener(ClientContext clientContext, ClientInfo clientInfo) {
        this.clientContext = clientContext;
        this.clientInfo = clientInfo;
    }

    private Map<XZCCommand, ResponseCallback<?>> callbackMap = new HashMap<>();

    public void setCallback(XZCCommand command, ResponseCallback<?> callback) {
        callbackMap.put(command, callback);
    }

    public void listen(XZCSignal signal) throws Exception {

        XZCCommand command = signal.getCommand();
        ResponseCallback<?> responseCallback = callbackMap.get(command);
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
                    if (responseCallback != null) {
                        ResponseCallback<LoginResponse> callback = (ResponseCallback<LoginResponse>) responseCallback;
                        callback.callback(loginResponse);
                    }
                }
                break;
            case QUICK_JOIN_ROOM_RESPONSE:
                if (body.is(QuickJoinRoomResponse.class)) {
                    println(">>>>>>>>>>>Received quick join response<<<<<<<<<<<");
                    synchronized (clientContext) {
                        QuickJoinRoomResponse quickJoinRoomResponse = body.unpack(QuickJoinRoomResponse.class);
                        long roomId = quickJoinRoomResponse.getRoomId();
                        println("roomId: " + roomId);
                        clientContext
                                .setRoomId(roomId)
                                .setParticipantState(ParticipantState.IDLE);
                        // 唤醒主线程
//                        clientContext.notifyAll();
                        Map<Long, Participant> participantsMap = quickJoinRoomResponse.getParticipantsMap();
//                    println(JSON.toJSONString(participantsMap));
                        if (responseCallback != null) {
                            ResponseCallback<QuickJoinRoomResponse> callback = (ResponseCallback<QuickJoinRoomResponse>) responseCallback;
                            callback.callback(quickJoinRoomResponse);
                        }
                    }
                }
                break;
            case READY_RESPONSE:
                if (body.is(ReadyResponse.class)) {
                    println(">>>>>>>>>>>Received ready response<<<<<<<<<<<");
                    ReadyResponse readyResponse = body.unpack(ReadyResponse.class);
                    long roomId = readyResponse.getRoomId();
                    println("roomId: " + roomId);
                    clientContext.setParticipantState(ParticipantState.PLAYING);

                    if (responseCallback != null) {
                        ResponseCallback<ReadyResponse> callback = (ResponseCallback<ReadyResponse>) responseCallback;
                        callback.callback(readyResponse);
                    }
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
                    if (responseCallback != null) {
                        ResponseCallback<StartResponse> callback = (ResponseCallback<StartResponse>) responseCallback;
                        callback.callback(startResponse);
                    }
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
