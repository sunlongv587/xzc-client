package xzc.client;

import com.google.protobuf.Any;
import xzc.server.proto.*;

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
        ClientActionService.quickJoin(webSocketClientA);
        ClientActionService.quickJoin(webSocketClientB);
        ClientActionService.quickJoin(webSocketClientC);
        // 准备
        ClientActionService.ready(webSocketClientA);
        ClientActionService.ready(webSocketClientB);
        ClientActionService.ready(webSocketClientC);
        // 开始游戏
        ClientActionService.start(webSocketClientA);
        ClientActionService.start(webSocketClientB);
        ClientActionService.start(webSocketClientC);


    }



}
