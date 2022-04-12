const {ccclass, property} = cc._decorator;

@ccclass
export default class GamerAreaUI extends cc.Component {

    @property(cc.Label)
    nicknameLabel: cc.Label = null;

    @property(cc.Label)
    coinCountLabel: cc.Label = null;

    @property(cc.Node)
    avatarNode: cc.Node = null;

    @property(cc.Node)
    disCardNode: cc.Node = null;

    public init(nickName: string, coinCount: string, avatar: string) {
        this.nicknameLabel.string = nickName;
        this.coinCountLabel.string = coinCount;
        if (avatar) {
            // 放入头像
        }
    }

    // update (dt) {}
}
