import {GamerModel} from "./xzc/GamerModel";
import Card from "./xzc/Card";
import {GameStep} from "./poker/Constant";

export class StandAloneService {
    // 本轮玩家的行动顺序，每到新的一轮都会更换起始玩家
    private orderlyGamers: number[] = [];

    private gamerMap: Map<number, GamerModel>;

    // 当前轮次，第几轮（0-6）
    private currentRound: number = 0;
    // 总轮数
    private totalRound: number = 7;
    // 牌库 每轮游戏自动洗牌
    private cardLibrary: Card[] = new Array(15);
    // 牌库指针
    private cardLibraryIndex: number = 0;
    // 当前行动的玩家 索引
    private orderedGamersIndex = 0;
    // 本轮加入赌局的玩家
    private gambler: number[];
    // 小早川牌
    private xzcCard: Card;
    // 当前进行的阶段
    private step: GameStep = GameStep.Initial;

    public createNewGameByGamersCount(me: GamerModel, count: number) {
        this.createCardLibrary();
        this.createGamers(me, count);
        // 为每一位玩家发牌
        this.sendCard();
        this.xzcCard = this.pullCard();
        // 进入到行动阶段
        this.step = GameStep.Action;
    }

    public sendCard() {
        // 轮流发牌
        for (let gid of this.orderlyGamers) {
            this.gamerMap.get(gid).handCard = this.pullCard();
        }
    }

    // 创建全部卡片
    private createCardLibrary() {
        // todo 目前还没加洗牌
        for (let s = 1; s <= 15; s++) {
            let card = new Card(s);
            this.cardLibrary[card.id] = card;
        }
    }

    // 模拟创建玩家队列
    public createGamers(me: GamerModel, count: number) {
        let sixIds = [1, 2, 3, 4, 5, 6];
        this.orderlyGamers = sixIds.slice(0, count);
        this.gamerMap = new Map<number, GamerModel>();
        this.gamerMap.set(me.id, me);
        this.gamerMap.set(2, new GamerModel(2, "玩家二"));
        this.gamerMap.set(3, new GamerModel(3, "玩家三"));
        this.gamerMap.set(4, new GamerModel(4, "玩家四"));
        this.gamerMap.set(5, new GamerModel(5, "玩家五"));
        this.gamerMap.set(6, new GamerModel(6, "玩家六"));
    }

    // 从牌堆抓一张牌
    public pullCard(): Card {
        if (this.cardLibraryIndex >= this.cardLibrary.length) {
            return null;
        }
        let card = this.cardLibrary[this.cardLibraryIndex];
        this.cardLibraryIndex++;
        return card;
    }

    public changeXzcCard():Card {
        this.xzcCard = this.pullCard();
        return this.xzcCard;
    }

    public getCardCount(): number {
        return this.cardLibrary.length - this.cardLibraryIndex;
    }

    public getXzcCard(): Card {
        return this.xzcCard;
    }

    public getGamerMap(): Map<number, GamerModel> {
        return this.gamerMap;
    }

    public getOrderlyGamers(): number[] {
        return this.orderlyGamers;
    }
}