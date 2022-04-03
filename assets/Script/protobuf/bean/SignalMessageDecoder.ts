import SignalHeader from "./SignalHeader";
import SignalMessage from "./SignalMessage";

export default class SignalMessageDecoder {

    public decode(eventData) {

        let flag = ""; // 包头起始标志，固定为“SL”
        let gameId = 0; // 游戏ID
        let signal = 0; // 消息类型
        let formatType = 0;//协议格式类型，0是Protobuf格式，1是Json
        let protoVersion = 0;// 协议版本，用于迭代兼容, 目前填0
        let clientVersion = 0;// 协议版本，用于迭代兼容, 目前填0
        let serverVersion = 0;// 协议版本，用于迭代兼容, 目前填0
        let timestamp = 0;// 包序列号，用于对应请求包和回包, 要求递增或时间戳
        let bodySize = 0;// 包长度
        let md5 = "";// 包体原始数据(解密后)的SHA1哈希值
        let exts = "";// 预留的20字节

        let header = eventData.slice(0, 69);
        // 按照协议字节，分割！！
        let flagBytes = header.slice(0, 2);
        let gameIdBytes = header.slice(2, 4);
        let signalBytes = header.slice(4, 8);
        let formatTypeBytes = header.slice(8, 9);
        let protoVersionBytes = header.slice(9, 13);
        let clientVersionBytes = header.slice(13, 17);
        let serverVersionBytes = header.slice(17, 21);
        let timestampBytes = header.slice(21, 29);
        let bodySizeBytes = header.slice(29, 33);
        let md5SizeBytes = header.slice(33, 49);
        let extsBytes = header.slice(49, 69);

        // 按照协议规定的类型，转换成明文
        flag = this._decode(new Uint8Array(flagBytes));

        gameId = new DataView(gameIdBytes).getInt16(0);
        signal = new DataView(signalBytes).getInt32(0);
        formatType = new DataView(formatTypeBytes).getInt8(0);

        protoVersion = new DataView(protoVersionBytes).getInt32(0);
        clientVersion = new DataView(clientVersionBytes).getInt32(0);
        serverVersion = new DataView(serverVersionBytes).getInt32(0);
        timestamp = this._getUInt64(timestampBytes, 0, false);
        bodySize = new DataView(bodySizeBytes).getInt32(0);
        md5 = this._decode(new Uint8Array(md5SizeBytes));
        exts = this._decode(new Uint8Array(extsBytes));
        // 69后面的全是body
        let body = new Uint8Array(eventData.slice(69));

        //截止到这里消息解析完毕，现在开始封装fcmsg

        let signalHeader = new SignalHeader(flag, gameId, signal, formatType, protoVersion, clientVersion, serverVersion, timestamp, bodySize, md5, exts);
        return new SignalMessage(signalHeader, body, eventData);
    }

    private _decode(array) {
        var string = "";
        for (var index = 0; index < array.length; index++) {
            string += String.fromCharCode(array[index]);
        }
        return decodeURIComponent(string);
    }

    private _getUInt64(data, offset, littleEndian) {
        var left = new DataView(data).getUint32(offset, littleEndian);
        var right = new DataView(data).getUint32(offset + 4, littleEndian);
        return littleEndian ? left + 2 ** 32 * right : 2 ** 32 * left + right;
    }
}
