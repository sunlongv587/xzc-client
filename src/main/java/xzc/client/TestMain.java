package xzc.client;

import java.util.concurrent.atomic.AtomicBoolean;

public class TestMain {

    static final String URL = System.getProperty("url", "ws://127.0.0.1:8800/ws");

    public static void main(String[] args) throws Exception {
        // 初始化客户端
        WebSocketClient webSocketClientA = new WebSocketClient(new ClientInfo()
                .setUsername("userA")
                .setToken("XXXXXX"));
        WebSocketClient webSocketClientB = new WebSocketClient(new ClientInfo()
                .setUsername("userB")
                .setToken("XXXXXX"));
        WebSocketClient webSocketClientC = new WebSocketClient(new ClientInfo()
                .setUsername("userC")
                .setToken("XXXXXX"));
        // 建立连接
        webSocketClientA.connect(URL);
        webSocketClientB.connect(URL);
        webSocketClientC.connect(URL);
        // 快速加入房间
//        synchronized (webSocketClientA.clientContext()) {
        AtomicBoolean joinedA = new AtomicBoolean(false);
        ClientActionService.quickJoin(webSocketClientA, response -> joinedA.set(true));
        AtomicBoolean joinedB = new AtomicBoolean(false);
        ClientActionService.quickJoin(webSocketClientB, quickJoinRoomResponse -> joinedB.set(true));
        AtomicBoolean joinedC = new AtomicBoolean(false);
        ClientActionService.quickJoin(webSocketClientC, quickJoinRoomResponse -> joinedC.set(true));

        // 准备, todo 加入房间之后在发送准备指令，需要同步多个用户的状态之后处理
        ClientActionService.ready(webSocketClientA);
        ClientActionService.ready(webSocketClientB);
        ClientActionService.ready(webSocketClientC);
        // 开始游戏, todo 准备之后在发送开始游戏指令
        ClientActionService.start(webSocketClientA);
        ClientActionService.start(webSocketClientB);
        ClientActionService.start(webSocketClientC);


    }


}
