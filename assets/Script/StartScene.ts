// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import * as protobuf from "./protobuf/xzc-proto";
import {NetNode} from "./network/NetNode";
import {WebSock} from "./network/WebSock";
import {FCProtoBufProtocol} from "./protobuf/bean/FCProtoBufProtocol";
import {NetManager} from "./network/NetManager";
import {google, protocol} from "./protobuf/xzc-proto";
import LoginRequest = protocol.LoginRequest;
import SignalMessageEncoder from "./protobuf/bean/SignalMessageEncoder";
import {INetworkTips} from "./network/NetInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {

    @property(cc.Button)
    playBtn: cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        let fcNetNode = new NetNode();//实例化一个网络节点
        fcNetNode.init(new WebSock(), new FCProtoBufProtocol(), new NetTips());//初始化
        //创建连接
        NetManager.getInstance().setNetNode(fcNetNode);
        NetManager.getInstance().connect({url: GlobalCfg.wsUrl});

        let signalType = protobuf.protocol.SignalType.SIGNAL_TYPE_LOGIN_REQUEST;
        //消息体构造
        let loginRequest = new LoginRequest();
        loginRequest.username = "user001";
        loginRequest.token = "xxzxzxz";
        let bodyBuffer = LoginRequest.encode(loginRequest).finish();

        //消息体封装
        let signalMessage = new SignalMessageEncoder().encode(signalType.valueOf(), bodyBuffer);
        // return signalMessage.messageBuf;

        //发送消息
        let buf = signalMessage.messageBuf;
        console.log(buf);
        NetManager.getInstance().send(buf);

        this.playBtn.node.on('click', this.onPlayBtnClick.bind(this))
        // setTimeout(() => {
        //     cc.director.loadScene('GameScene', () => {
        //         console.log("加载完毕！！！")
        //     })
        // }, 2000)
    }

    onPlayBtnClick(button) {
        cc.director.loadScene('GameScene', () => {
            console.log("加载完毕！！！")
        })
    }

    // update (dt) {}


}

class NetTips implements INetworkTips {
    private getLabel(): cc.Label {
        let label = null;
        let node = cc.director.getScene().getChildByName("@net_tip_label");
        if (node) {
            label = node.getComponent(cc.Label);
        } else {
            node = new cc.Node("@net_tip_label");
            label = node.addComponent(cc.Label);
            node.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
        }
        return label;
    }

    connectTips(isShow: boolean): void {
        LogUtil.debug("connectTips Connecting...");
        if (isShow) {
            this.getLabel().string = "Connecting";
            this.getLabel().node.active = true;
        } else {
            this.getLabel().node.active = false;
        }
    }

    reconnectTips(isShow: boolean): void {
        LogUtil.debug("reconnectTips Reconnecting...");
        if (isShow) {
            this.getLabel().string = "Reconnecting";
            this.getLabel().node.active = true;
        } else {
            this.getLabel().node.active = false;
        }
    }

    requestTips(isShow: boolean): void {
        LogUtil.debug("requestTips Requesting...");
        if (isShow) {
            this.getLabel().string = "Requesting";
            this.getLabel().node.active = true;
        } else {
            this.getLabel().node.active = false;
        }
    }
}
