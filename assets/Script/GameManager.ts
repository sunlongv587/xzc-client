import Poker from "./poker/Poker";


export default class GameManager {

    private pokers: Poker[] = new Array(52);

    // 开始游戏
    public start() {


        this.createPokers()


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
}