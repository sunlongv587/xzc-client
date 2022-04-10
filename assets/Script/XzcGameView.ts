import Card from "./xzc/Card";
import CardUI from "./xzc/CardUI";
const {ccclass, property} = cc._decorator;

@ccclass
export default class XzcGameView extends cc.Component {

    @property(cc.Prefab)
    private cardPrefab: cc.Prefab = null;
    @property(cc.Node)
    private cardContainer: cc.Node = null;

    // 初始的透明度是0，放入卡片时调到255，移除卡片时再修改为0
    // 我的手牌区域
    @property(cc.Node)
    private myCardArea: cc.Node = null;
    // 我的抓牌区域
    @property(cc.Node)
    private myTakeCardArea: cc.Node = null;
    // 我的弃牌区域
    @property(cc.Node)
    private myDisCardArea: cc.Node = null;
    // 我的硬币显示区域
    @property(cc.Label)
    private myCoinCountLabel: cc.Label = null;
    // 总轮数显示区域
    @property(cc.Label)
    private totalRoundLabel: cc.Label = null;
    // 当前轮数显示区域
    @property(cc.Label)
    private currentRoundLabel: cc.Label = null;

    // 抓牌按钮
    @property(cc.Button)
    private takeCardButton: cc.Button = null;

    // 翻小早川牌按钮
    @property(cc.Button)
    private changeXzcCardButton: cc.Button = null;


    // 小早川牌显示区域
    @property(cc.Node)
    private xzcCardArea: cc.Node = null;
    // 牌堆区域
    @property(cc.Node)
    private cardHouseArea: cc.Node = null;
    // 小早川剩余硬币数量显示
    @property(cc.Label)
    private coinCountLabel: cc.Label = null;
    // 牌堆剩余牌数量
    @property(cc.Label)
    private cardCountLabel: cc.Label = null;

    public init(xzcCard: Card, myCard: Card, cardCount: number, myTakeCard: Card, myDisCard: Card) {
        this.initXzcArea(xzcCard, cardCount);
        this.initMyArea(myCard, myTakeCard, myDisCard);
    }

    public createCardUIs(cards: Card[]) {
        cards.forEach(card => {
            let cardUI = this.createCardUI(card);
            this.cardContainer.addChild(cardUI.node);
        })
    }

    public createCardUI(card: Card) {
        let pokerNode = cc.instantiate(this.cardPrefab);
        let cardUI = pokerNode.getComponent(CardUI);
        cardUI.init(card);
        // 随机分布
        cardUI.node.setPosition(Math.random() * 500 - 200, Math.random() * 500 - 200)
        return cardUI;
    }

    public initXzcArea(xzcCard: Card, cardCount: number) {
        // 设置小早川牌
        this.putXzcCard(xzcCard);
        // 设置牌堆剩余牌数量
        this.cardCountLabel.string = `剩余牌：${cardCount}`
    }

    public initMyArea(myCard: Card, myTakeCard: Card, myDisCard: Card) {
        this.putMyCard(myCard);
        if (myTakeCard) {
            this.putMyTakeCard(myTakeCard);
        }
        if (myDisCard) {
            this.putMyDisCard(myDisCard);
        }
    }

    public putXzcCard(card: Card) {
        let pokerNode = cc.instantiate(this.cardPrefab);
        let cardUI = pokerNode.getComponent(CardUI);
        cardUI.init(card);
        this.xzcCardArea.addChild(cardUI.node);
        this.xzcCardArea.opacity = 255;
    }

    public putMyCard(card: Card) {
        let pokerNode = cc.instantiate(this.cardPrefab);
        let cardUI = pokerNode.getComponent(CardUI);
        cardUI.init(card);
        this.myCardArea.addChild(cardUI.node);
        this.myTakeCardArea.opacity = 255;
    }

    public putMyTakeCard(card: Card) {
        let pokerNode = cc.instantiate(this.cardPrefab);
        let cardUI = pokerNode.getComponent(CardUI);
        cardUI.init(card);
        this.myTakeCardArea.addChild(cardUI.node);
        this.myTakeCardArea.opacity = 255;
    }

    public putMyDisCard(card: Card) {
        let pokerNode = cc.instantiate(this.cardPrefab);
        let cardUI = pokerNode.getComponent(CardUI);
        cardUI.init(card);
        this.myDisCardArea.addChild(cardUI.node);
        this.myDisCardArea.opacity = 255;
    }

    public updateCardCount(count: number) {
        this.cardCountLabel.string = `剩余牌：${count}`;
    }

    public updateTakeButton(text: string, listener: Function) {
        this.takeCardButton.node.on('click', listener);
        this.takeCardButton.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = text;
        // this.takeCardButton.name = text;
    }

    public updateChangeXzcCardButton(text: string, listener: Function) {
        this.changeXzcCardButton.node.on('click', listener);
        this.changeXzcCardButton.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = text;
    }


}