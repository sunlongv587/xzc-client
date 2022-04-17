import Card from "./xzc/Card";
import CardUI from "./xzc/CardUI";
import OperateButton from "./xzc/OperateButton";
import {GamerModel} from "./xzc/GamerModel";
import GamerAreaUI from "./xzc/GamerAreaUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class XzcGameView extends cc.Component {

    @property(cc.Prefab)
    private cardPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    private operateButton: cc.Prefab = null;
    @property(cc.Prefab)
    private gamerArea: cc.Prefab = null;

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
    // 我的行动区域
    @property(cc.Node)
    private myOperateArea: cc.Node = null;

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

    // 其余玩家显示区域
    @property(cc.Node)
    private topGamerArea: cc.Node = null;
    // 其余玩家显示区域
    @property(cc.Node)
    private leftTopGamerArea: cc.Node = null;
    // 其余玩家显示区域
    @property(cc.Node)
    private leftGamerArea: cc.Node = null;
    // 其余玩家显示区域
    @property(cc.Node)
    private rightGamerArea: cc.Node = null;
    // 其余玩家显示区域
    @property(cc.Node)
    private rightTopGamerArea: cc.Node = null;
    // 玩家人数对应的布局
    private countGamerAreaMap: Map<number, cc.Node[]> = new Map<number, cc.Node[]>();

    // 玩家id对应的区域
    private gamerAreaMap: Map<number, GamerAreaUI> = new Map<number, GamerAreaUI>();

    public init(xzcCard: Card, myCard: Card, cardCount: number, myId: number, gamerMap: Map<number, GamerModel>, orderlyGamerIds: number[]) {
        this.initGamerAreaMap();
        this.updateXzcView(xzcCard, cardCount, 8);
        this.initMyArea(myCard);
        this.initGamersArea(orderlyGamerIds, gamerMap, myId)
    }

    public initGamerAreaMap() {
        // 从我的右侧下位开始排布
        this.countGamerAreaMap.set(2, [this.rightTopGamerArea, this.leftTopGamerArea]);
        this.countGamerAreaMap.set(3, [this.rightGamerArea, this.topGamerArea, this.leftGamerArea]);
        this.countGamerAreaMap.set(4, [this.rightGamerArea, this.rightTopGamerArea, this.leftTopGamerArea, this.leftGamerArea]);
        this.countGamerAreaMap.set(5, [this.rightGamerArea, this.rightTopGamerArea, this.topGamerArea, this.leftTopGamerArea, this.leftGamerArea]);
    }

    public initXzcArea(xzcCard: Card, cardCount: number) {
        // 设置小早川牌
        this.putXzcCard(xzcCard);
        // 设置牌堆剩余牌数量
        this.cardCountLabel.string = `剩余牌：${cardCount}`
    }

    public initMyArea(myCard: Card) {
        this.putMyCard(myCard);
    }

    public initGamersArea(gamerIds: number[], gamerMap: Map<number, GamerModel>, myId: number) {
        let gamerAreas = this.countGamerAreaMap.get(gamerIds.length - 1);
        let leftIds = [];
        let findMe: boolean = false;
        let gamerAreasIndex = 0;
        for (let i = 0; i < gamerIds.length; i++) {
            let gamerId = gamerIds[i];
            if (!findMe) {
                if (gamerId == myId) {
                    findMe = true;
                } else {
                    leftIds.push(gamerId);
                }
            } else {
                this.putGamerArea(gamerAreas[gamerAreasIndex], gamerMap.get(gamerId));
                gamerAreasIndex++;
            }
        }
        for (let i = 0; i < leftIds.length; i++) {
            let gamerId = leftIds[i];
            this.putGamerArea(gamerAreas[gamerAreasIndex], gamerMap.get(gamerId));
            gamerAreasIndex++;
        }
    }

    public putGamerArea(gamerArea: cc.Node, gamer: GamerModel) {
        let gamerAreaNode = cc.instantiate(this.gamerArea);
        let gamerAreaUI = gamerAreaNode.getComponent(GamerAreaUI);
        gamerAreaUI.initByGamer(gamer);
        gamerArea.addChild(gamerAreaUI.node);
        this.gamerAreaMap.set(gamer.id, gamerAreaUI);
    }

    public putXzcCard(card: Card) {
        let cardNode = cc.instantiate(this.cardPrefab);
        let cardUI = cardNode.getComponent(CardUI);
        cardUI.init(card);
        this.xzcCardArea.addChild(cardUI.node);
        this.xzcCardArea.opacity = 255;
    }

    public putMyCard(card: Card) {
        let cardNode = cc.instantiate(this.cardPrefab);
        let cardUI = cardNode.getComponent(CardUI);
        cardUI.init(card);
        this.myCardArea.addChild(cardUI.node);
        this.myCardArea.opacity = 255;
    }

    public removeMyTakeCard() {
        this.myTakeCardArea.removeAllChildren(true);
        this.myTakeCardArea.opacity = 0;
    }

    public putMyTakeCard(card: Card) {
        let cardNode = cc.instantiate(this.cardPrefab);
        let cardUI = cardNode.getComponent(CardUI);
        cardUI.init(card);
        this.myTakeCardArea.addChild(cardUI.node);
        this.myTakeCardArea.opacity = 255;
    }

    public putMyDisCard(card: Card) {
        let cardNode = cc.instantiate(this.cardPrefab);
        let cardUI = cardNode.getComponent(CardUI);
        cardUI.init(card);
        this.myDisCardArea.addChild(cardUI.node);
        this.myDisCardArea.opacity = 255;
    }

    public updateCardCount(count: number) {
        this.cardCountLabel.string = `剩余牌：${count}`;
    }

    public createOperateButton(): OperateButton {
        let operateButtonNode = cc.instantiate(this.operateButton);
        let operateButton = operateButtonNode.getComponent(OperateButton);
        return operateButton;
    }

    public updateOperateArea(leftText: string, leftListener, rightText: string, rightListener) {
        let leftOperateButton = this.createOperateButton();
        leftOperateButton.init(leftText);
        leftOperateButton.node.on('click', leftListener);
        let leftButtonArea = this.myOperateArea.getChildByName('LeftButtonArea');
        // 先移除原来的按钮
        leftButtonArea.removeAllChildren();
        leftButtonArea.addChild(leftOperateButton.node);
        leftButtonArea.opacity = 255;

        let rightOperateButton = this.createOperateButton();
        rightOperateButton.init(rightText);
        rightOperateButton.node.off('click');
        rightOperateButton.node.on('click', rightListener);
        let rightButtonArea = this.myOperateArea.getChildByName('RightButtonArea');
        // 先移除原来的按钮
        rightButtonArea.removeAllChildren();
        rightButtonArea.addChild(rightOperateButton.node);
        rightButtonArea.opacity = 255;
    }

    public cleanOperateArea() {
        let leftButtonArea = this.myOperateArea.getChildByName('LeftButtonArea');
        leftButtonArea.removeAllChildren();
        // 变透明
        leftButtonArea.opacity = 0;

        let rightButtonArea = this.myOperateArea.getChildByName('RightButtonArea');
        rightButtonArea.removeAllChildren();
        rightButtonArea.opacity = 0;
    }

    public updateGamerView(gamer: GamerModel) {
        let gamerArea = this.gamerAreaMap.get(gamer.id);
        gamerArea.updateState(gamer.state, `硬币：${gamer.coins}`, gamer.discarded);
    }

    public updateXzcView(xzcCard: Card, cardCount: number, coinCount: number) {
        // 设置小早川牌
        this.putXzcCard(xzcCard);
        // 设置牌堆剩余牌数量
        this.cardCountLabel.string = `剩余牌：${cardCount}`;
        // 设置小早川剩余硬币数量
        this.coinCountLabel.string = `硬币：${coinCount}`;
    }

    public viewRoundResult() {}

}