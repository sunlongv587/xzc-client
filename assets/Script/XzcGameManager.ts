import Card from "./xzc/Card";
import XzcGameView from "./XzcGameView";


export default class XzcGameManager {

    // 牌堆
    private cards: Card[] = new Array(15);
    // 牌堆指针
    private cardIndex: number = 0;

    private xzcGameView: XzcGameView = null;

    public init(xzcGameView: XzcGameView) {
        this.xzcGameView = xzcGameView
    }

    // 开始游戏
    public startGame() {
        this.createCardHouse();
        console.log(this.cards);
        this.xzcGameView.init(this.pullCard(), this.pullCard(), this.cards.length - this.cardIndex, null, null);
        // 绑定按钮点击事件
        this.xzcGameView.updateTakeButton("抓牌", this.takeCard.bind(this))
        this.xzcGameView.updateChangeXzcCardButton("翻小早川牌", this.changeXzcCard.bind(this))
    }

    // 创建全部卡片
    private createCardHouse() {
        // 目前还没加洗牌
        for (let s = 1; s <= 15; s++) {
            let card = new Card(s);
            this.cards[card.id] = card;
        }
    }
    // 从牌堆抓一张牌
    public pullCard(): Card {
        if (this.cardIndex >= this.cards.length) {
            return null;
        }
        let card = this.cards[this.cardIndex];
        this.cardIndex++;
        // 修改显示 剩余牌数
        this.xzcGameView.updateCardCount(this.cards.length - this.cardIndex);
        return card;
    }

    // 抓牌
    public takeCard(button) {
        // 抓一张牌
        let card = this.pullCard();
        // 显示到指定区域
        this.xzcGameView.putMyTakeCard(card);
    }

    public changeXzcCard(button) {
        let card = this.pullCard();
        this.xzcGameView.putXzcCard(card);
    }

}