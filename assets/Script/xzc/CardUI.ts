import Card from "./Card";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardUI extends cc.Component {

    @property(cc.Label)
    pointLabel: cc.Label = null;

    @property(cc.Label)
    bigPointLabel: cc.Label = null;

    @property(cc.Sprite)
    iconSprite: cc.Sprite = null;

    @property([cc.SpriteFrame])
    private iconSprites: cc.SpriteFrame[] = [];

    // 字体颜色
    @property(cc.Color)
    private orangeTextColor: cc.Color = cc.Color.ORANGE;
    @property(cc.Color)
    private bigTextColor: cc.Color = cc.Color.WHITE;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start() {
    //     this.label.string = "这是Poker UI。。。"
    // }

    public init(card: Card) {
        this.pointLabel.string = card.point.toString();
        this.bigPointLabel.string = card.point.toString();
        this.iconSprite.spriteFrame = this.iconSprites[card.id]
    }

    // update (dt) {}
}
