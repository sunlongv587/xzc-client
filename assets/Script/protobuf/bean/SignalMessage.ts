import SignalHeader from "./SignalHeader";

export default class SignalMessage {

    header: SignalHeader;//消息头

    body: Uint8Array;//消息体

    messageBuf: ArrayBuffer;//完整的传输用的消息体(消息头+消息体)

    constructor(header, body, messageBuf) {
        this.header = header;
        this.body = body;
        this.messageBuf = messageBuf;
    }

}
