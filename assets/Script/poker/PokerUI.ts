import Poker from "./Poker";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PokerUI extends cc.Component {

    @property(cc.Label)
    pointLabel: cc.Label = null;
    @property(cc.Sprite)
    bigSuitSprite: cc.Sprite = null;
    @property(cc.Sprite)
    smallSuitSprite: cc.Sprite = null;

    @property(cc.SpriteFrame)
    private texFrontBG: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    private texBackBG: cc.SpriteFrame = null;

    @property([cc.SpriteFrame])
    private bigSuits: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    private smallSuits: cc.SpriteFrame[] = [];
    @property([cc.SpriteFrame])
    private texFaces: cc.SpriteFrame[] = [];

    // resources
    @property(cc.Color)
    private redTextColor: cc.Color = cc.Color.WHITE;
    @property(cc.Color)
    private blackTextColor: cc.Color = cc.Color.WHITE;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start() {
    //     this.label.string = "这是Poker UI。。。"
    // }

    public init(poker: Poker) {
        this.pointLabel.string = poker.getPointName();
        this.smallSuitSprite.spriteFrame = this.smallSuits[poker.suit -1]
        // 有人像
        var isFaceCard = poker.point > 10;
        if (isFaceCard) {
            this.bigSuitSprite.spriteFrame = this.texFaces[poker.point - 10 - 1];
        } else {
            this.bigSuitSprite.spriteFrame = this.bigSuits[poker.suit - 1]
        }
        if (poker.isRedSuit()) {
            this.pointLabel.node.color = this.redTextColor;
        } else {
            this.pointLabel.node.color = this.blackTextColor;
        }

    }

    // update (dt) {}
}
