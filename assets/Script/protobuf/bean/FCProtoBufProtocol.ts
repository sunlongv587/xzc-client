// program:
// description:
// author: fangqing.fan@hotmail.com
// date:

import SignalMessageEncoder from "./SignalMessageEncoder";
import SignalMessageDecoder from "./SignalMessageDecoder";
import * as protobuf from "../xzc-proto";

import { NetData, IProtocolHelper } from "../../network/NetInterface";
import {protocol} from "../xzc-proto";
import LoginRequest = protocol.LoginRequest;

export class FCProtoBufProtocol implements IProtocolHelper{
    getHeadlen(): number {
        return 86;
    }
    getHearbeat(): NetData {
        let signalType = protobuf.protocol.SignalType.SIGNAL_TYPE_LOGIN_REQUEST;
        //消息体构造
        let loginRequest = new LoginRequest();
        loginRequest.username = "user001";
        loginRequest.token = "xxzxzxz";
        let bodyBuffer = LoginRequest.encode(loginRequest).finish();

        //消息体封装
        let signalMessage = new SignalMessageEncoder().encode(signalType.valueOf(), bodyBuffer);
        return signalMessage.messageBuf;
    }
    getPackageLen(msg: NetData): number
    {
        return msg.toString().length;
    }
    checkPackage(msg: NetData): boolean {
        return true;
    }
    getPackageId(msg: NetData): number {
        let fcMsg = new SignalMessageDecoder().decode(msg);
        return fcMsg.header.gameId;
    }
}
