import Card from "./Card";
import CardUI from "./CardUI";
import {GamerModel} from "./GamerModel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GamerAreaUI extends cc.Component {

    @property(cc.Prefab)
    private cardPrefab: cc.Prefab = null;

    @property(cc.Label)
    nicknameLabel: cc.Label = null;

    @property(cc.Label)
    coinCountLabel: cc.Label = null;

    @property(cc.Label)
    stateLabel: cc.Label = null;

    @property(cc.Node)
    avatarNode: cc.Node = null;

    @property(cc.Node)
    disCardNode: cc.Node = null;

    public initByGamer(gamer: GamerModel) {
        this.nicknameLabel.string = gamer.nickname;
        this.coinCountLabel.string = `硬币：${gamer.coins}`;
        if (gamer.avatar) {
            // todo 放入头像
        }
        if (gamer.discarded) {
            this.putDiscarded(gamer.discarded);
        }
    }

    public updateState(state: string, coins: string, discard: Card) {
        this.stateLabel.string = this.getStateText(state);
        this.coinCountLabel.string = coins;
        this.putDiscarded(discard);
    }

    private putDiscarded(discard: Card) {
        let cardNode = cc.instantiate(this.cardPrefab);
        let cardUI = cardNode.getComponent(CardUI);
        cardUI.init(discard);
        this.disCardNode.addChild(cardUI.node);
        this.disCardNode.opacity = 255;
    }

    public getStateText(state: string): string {
        let map = {
            "WAIT": "等待中",
            "ACTION": "行动中",
            "DISCARD": "选择弃牌",
            "WAIT_BET": "等待下注",
            "BET": "下注中",
            "IN_BET": "已下注"
        }
        return map[state];
    }

}
