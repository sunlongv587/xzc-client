import Poker from "./poker/Poker";
import PokerUI from "./poker/PokerUI";


export default class GameManager {

    private pokerPrefab: cc.Prefab = null;

    private pokerContainer: cc.Node = null;

    private pokers: Poker[] = new Array(52);

    public init(pokerContainer: cc.Node, pokerPrefab: cc.Prefab) {
        this.pokerContainer = pokerContainer;
        this.pokerPrefab = pokerPrefab;
    }

    // 开始游戏
    public start() {
        this.createPokers();
        console.log(this.pokers);
        this.pokers.forEach(poker => {
            let pokerUI = this.createPokerUI(poker);
            this.pokerContainer.addChild(pokerUI.node);
        })



    }

    // 创建一幅扑克牌
    private createPokers() {
        for (let s = 1; s <= 4; s++) {
            for (let p = 1; p <= 13; p++) {
                let card = new Poker(p, s);
                this.pokers[card.id] = card;
            }
        }
    }

    private createPokerUI(poker:Poker) {
        let pokerNode = cc.instantiate(this.pokerPrefab);
        let pokerUI = pokerNode.getComponent(PokerUI);
        pokerUI.init(poker)
        // 随机分布
        pokerUI.node.setPosition(Math.random() * 500 - 200, Math.random() * 500 - 200)
        return pokerUI;
    }
}