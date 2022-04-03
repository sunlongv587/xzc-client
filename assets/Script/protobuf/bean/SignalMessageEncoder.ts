import SignalHeader from "./SignalHeader";
import SignalMessage from "./SignalMessage";

export default class SignalMessageEncoder {

    public encode(messageType, content) {

        let flag = "SL"; //包头起始标志，固定为“SL”
        let gameId = 1; // 游戏ID
        // 消息类型
        let signal = messageType;
        let formatType = 0;// 协议格式类型，0是Protobuf格式，1是Json
        let protoVersion = 0;// 协议版本，用于迭代兼容, 目前填0
        let clientVersion = 0;// 客户端版本，用于迭代兼容, 目前填0
        let serverVersion = 0;// 服务器版本，用于迭代兼容, 目前填0
        // 时间戳
        let timestamp = new Date().getTime();
        let bodySize = content.length;// 包长度
        let md5 = "2cef026959a7f224";// 包体原始数据(解密后)的Md5哈希值
        let exts = "a234567890123456789z";// 预留的20字节

        //开始构建消息头
        let headerBytes = new Uint8Array(69);

        // 添加flag 2
        let flagBytes = this._encode(flag);
        headerBytes.set(flagBytes, 0);

        // 2
        let gameIdBuf = new DataView(new ArrayBuffer(2));
        gameIdBuf.setInt16(0, gameId);
        let gameIdBytes = new Uint8Array(gameIdBuf.buffer);
        headerBytes.set(gameIdBytes, flagBytes.length);

        // 4
        let signalBuf = new DataView(new ArrayBuffer(4));
        signalBuf.setInt32(0, signal);
        let signalBytes = new Uint8Array(signalBuf.buffer);
        headerBytes.set(signalBytes, flagBytes.length + gameIdBytes.length);

        // 1
        let formatTypeBuf = new DataView(new ArrayBuffer(1));
        formatTypeBuf.setInt8(0, formatType);
        let formatTypeBytes = new Uint8Array(formatTypeBuf.buffer);
        headerBytes.set(formatTypeBytes, flagBytes.length + gameIdBytes.length + signalBytes.length);

        // 4
        let protoVersionBuf = new DataView(new ArrayBuffer(4));
        protoVersionBuf.setInt32(0, protoVersion);
        let protoVersionBytes = new Uint8Array(protoVersionBuf.buffer);
        headerBytes.set(protoVersionBytes, flagBytes.length + gameIdBytes.length + signalBytes.length + formatTypeBytes.length);

        // 4
        let clientVersionBuf = new DataView(new ArrayBuffer(4));
        clientVersionBuf.setInt32(0, clientVersion);
        let clientVersionBytes = new Uint8Array(clientVersionBuf.buffer);
        headerBytes.set(clientVersionBytes, flagBytes.length + gameIdBytes.length + signalBytes.length + formatTypeBytes.length + protoVersionBytes.length);
        // 4
        let serverVersionBuf = new DataView(new ArrayBuffer(4));
        serverVersionBuf.setInt32(0, serverVersion);
        let serverVersionBytes = new Uint8Array(serverVersionBuf.buffer);
        headerBytes.set(serverVersionBytes, flagBytes.length + gameIdBytes.length + signalBytes.length + formatTypeBytes.length + protoVersionBytes.length + clientVersionBytes.length);

        // 8
        let timestampBuf = new DataView(new ArrayBuffer(8));
        timestampBuf.setBigInt64(0, BigInt(timestamp));
        let timestampBytes = new Uint8Array(timestampBuf.buffer);
        headerBytes.set(timestampBytes, flagBytes.length + gameIdBytes.length + signalBytes.length + formatTypeBytes.length + protoVersionBytes.length + clientVersionBytes.length + serverVersionBytes.length);

        // 4
        let bodySizeBuf = new DataView(new ArrayBuffer(4));
        bodySizeBuf.setInt32(0, bodySize);
        let bodySizeBytes = new Uint8Array(bodySizeBuf.buffer);
        headerBytes.set(bodySizeBytes, flagBytes.length + gameIdBytes.length + signalBytes.length + formatTypeBytes.length + protoVersionBytes.length + clientVersionBytes.length + serverVersionBytes.length + timestampBytes.length);

        // 16
        //let strSha1 = md5;// hex_sha1(JSON.stringify(jsonObj));
        // console.log("ProtoClient, Sha1 >>> ", strSha1);
        let md5Bytes = this._encode(md5);//this._encode(/*"2cef026959a7f224bbf001874e2d955a3863a2fe"*/strSha1);
        headerBytes.set(md5Bytes, flagBytes.length + gameIdBytes.length + signalBytes.length + formatTypeBytes.length + protoVersionBytes.length + clientVersionBytes.length + serverVersionBytes.length + timestampBytes.length + bodySizeBytes.length);

        // 预留的20字节
        let extsBytes = this._encode(exts);
        headerBytes.set(extsBytes, flagBytes.length + gameIdBytes.length + signalBytes.length + formatTypeBytes.length + protoVersionBytes.length + clientVersionBytes.length + serverVersionBytes.length + timestampBytes.length + bodySizeBytes.length + md5Bytes.length);

        //截止到这里69位消息头构造完成

        //开始构造消息体
        let reqMsg = new Uint8Array(69 + content.length);
        reqMsg.set(headerBytes, 0);//消息头
        reqMsg.set(content, 69);//消息体

        let header = new SignalHeader(flag, gameId, signal, formatType, protoVersion, clientVersion, serverVersion, timestamp, bodySize, md5, exts);
        return new SignalMessage(header, content, reqMsg.buffer);
    }

    private _encode(string) {
        var bytes = [];
        for (var index = 0; index < string.length; index++) {
            var code = string.charCodeAt(index);
            var byte = code & 0xff;
            bytes.push(byte);
        }
        return bytes;
    }

}
