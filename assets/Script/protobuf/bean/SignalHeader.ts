export default class SignalHeader {

    public flag: string = 'SL';// 包头起始标志，固定为“SL”
    public gameId: number = 1;// 游戏ID
    public signal: number;//协议格式类型，0是Protobuf格式，1是Json
    public formatType: number = 0;//协议格式类型，0是Protobuf格式，1是Json
    public protoVersion: number = 0;// 协议版本，用于迭代兼容, 目前填0
    public clientVersion: number = 0;// 协议版本，用于迭代兼容, 目前填0
    public serverVersion: number = 0;// 协议版本，用于迭代兼容, 目前填0
    public timestamp: number = 0;// 包序列号，用于对应请求包和回包, 要求递增或时间戳
    public bodySize: number;// 包体长度
    public md5: string;// 包体原始数据(解密后)的SHA1哈希值
    public exts: string;// 预留的20字节

    constructor(flag, gameId, signal, formatType, protoVersion, clientVersion, serverVersion, timestamp, bodySize, md5, exts) {
        this.flag = flag;
        this.gameId = gameId;
        this.signal = signal;
        this.formatType = formatType;
        this.protoVersion = protoVersion;
        this.clientVersion = clientVersion;
        this.serverVersion = serverVersion;
        this.timestamp = timestamp;
        this.bodySize = bodySize;
        this.md5 = md5;
        this.exts = exts;
    }

}
