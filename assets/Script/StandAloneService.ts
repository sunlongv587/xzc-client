import {GamerModel} from "./xzc/GamerModel";
import Card from "./xzc/Card";
import {GameStep} from "./poker/Constant";

export class StandAloneService {

    constructor(me: GamerModel, stateMachine: any) {
        this.me = me;
        this.stateMachine = stateMachine;
    }

// 本轮玩家的行动顺序，每到新的一轮都会更换起始玩家
    private orderlyGamers: number[] = [];

    private me: GamerModel = null;
    private winner: number = null;
    private stateMachine = null;

    private gamerMap: Map<number, GamerModel>;

    // 当前轮次，第几轮（0-6）
    private currentRound: number = 0;
    // 当前轮次，下注总数
    private currentRoundBetIn: number = 1;
    // 总轮数
    private totalRound: number = 7;
    // 牌库 每轮游戏自动洗牌
    private cardLibrary: Card[] = new Array(15);
    // 牌库指针
    private cardLibraryIndex: number = 0;
    // 当前行动的玩家 索引
    private orderedGamersIndex = 0;
    // 本轮加入赌局的玩家
    private gamblers: Object[] = [];
    // 小早川牌
    private xzcCard: Card;
    // 小早川硬币数
    private xzcCoinCount: number = 8;
    // 当前进行的阶段
    private step: GameStep = GameStep.Initial;

    private actionCallback: Function = null;

    private betCallback: Function = null;

    private stateChangeCallback: Function = null;

    public createNewGameByGamersCount(count: number) {
        this.createCardLibrary();
        this.createGamers(this.me, count);
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
        // 牌库指针归零
        this.cardLibraryIndex = 0;
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

    public changeXzcCard(): Card {
        this.xzcCard = this.pullCard();
        return this.xzcCard;
    }

    public getCardCount(): number {
        return this.cardLibrary.length - this.cardLibraryIndex;
    }


    public getXzcCoinCount(): number {
        return this.xzcCoinCount;
    }

    public getXzcCard(): Card {
        return this.xzcCard;
    }

    public getGamblers(): Object[] {
        return this.gamblers;
    }

    public getGamerMap(): Map<number, GamerModel> {
        return this.gamerMap;
    }

    public getOrderlyGamers(): number[] {
        return this.orderlyGamers;
    }

    public getStep(): GameStep {
        return this.step;
    }

    public incrOrderedGamersIndex() {
        let isLastGamer = this.orderlyGamers.length - 1 == this.orderedGamersIndex;
        if (isLastGamer) {
            this.orderedGamersIndex = 0;
            this.incrStep();
        } else {
            this.orderedGamersIndex++;
        }
    }

    public nextRobotAction(): GamerModel {
        let curId = this.orderlyGamers[this.orderedGamersIndex];
        if (curId == this.me.id) {
            throw new Error("current not is robot.")
        }
        // 当前玩家
        let curGamer = this.gamerMap.get(curId);
        // 开始行动
        if (this.step == GameStep.Action) {
            this.robotAction(curGamer);
        } else if (this.step == GameStep.Bet) {
            this.robotBet(curGamer);
        }
        this.incrOrderedGamersIndex();
        return curGamer;
        // return this.orderlyGamers[this.orderedGamersIndex] != this.me.id;
    }

    public hasNext():boolean {
        return this.orderlyGamers[this.orderedGamersIndex] != this.me.id;
    }

    // 机器人行动
    public robotAction(gamer: GamerModel) {
        // 比较自己的牌和小早川牌，如果自己是 13 14 15 ，就翻小早川
        if (gamer.handCard.point > 13) {
            this.changeXzcCard();
            return;
        }
        gamer.takenCard = this.pullCard();
        if (this.xzcCard.point > 13) {
            // 摸牌，弃大
            if (gamer.takenCard.point > gamer.handCard.point) {
                gamer.discarded = gamer.takenCard;
            } else {
                gamer.discarded = gamer.handCard;
                gamer.handCard = gamer.takenCard;
            }
        } else {
            // 就摸牌，弃小
            if (gamer.takenCard.point > gamer.handCard.point) {
                gamer.discarded = gamer.handCard;
                gamer.handCard = gamer.takenCard;
            } else {
                gamer.discarded = gamer.takenCard;
            }
        }
    }

    // 机器人下注
    public robotBet(gamer: GamerModel) {
        if (gamer.coins < 1) {
            this.betOrPass(gamer, false);
            return;
        }
        // 比较自己的牌和小早川牌，如果自己是 13 14 15 ，就下注
        if (gamer.handCard.point > 13) {
            this.betOrPass(gamer, true);
            return;
        }
        if (this.xzcCard.point > 13) {
            // 摸牌，弃大
            if (gamer.handCard.point < 4) {
                this.betOrPass(gamer, true);
            }
        }
        this.betOrPass(gamer, false);
    }

    // 进行下个阶段
    public incrStep() {
        if (this.step == GameStep.Initial) {
            this.step = GameStep.Action;
        } else if (this.step == GameStep.Action) {
            this.step = GameStep.Bet;
        } else if (this.step == GameStep.Bet) {
            this.step = GameStep.Settle;
            // 触发结算
            // this.settleRound();
        } else if (this.step == GameStep.Settle) {
            this.step = GameStep.Initial;
        }
    }

    public betOrPass(gamer: GamerModel, isBet: boolean) {
        if (isBet) {
            let betIn = 1;
            if (this.currentRound == 7) {
                if (gamer.coins < 2) {
                    gamer.coins -= 1;
                } else {
                    gamer.coins -= 2;
                    betIn = 2
                }
            } else {
                gamer.coins -= 1;
            }
            // 加入到下注队列
            this.gamblers.push({"id": gamer.id, "betIn": betIn});
            this.currentRoundBetIn += betIn;
            gamer.state = 'IN_BET';
        } else {
            // 不下注，直接进入等待状态
            gamer.state = 'WAIT';
        }
    }

    // 结算本轮
    public settleRound() {
        let isLastRound = this.currentRound == this.totalRound - 1;
        let firstGamer = this.gamerMap.get(this.gamblers[0]["id"]);
        if (this.gamblers.length == 1) {
            // 只有一个人的情况，自己赢
            this.win(firstGamer);
        } else {
            // 找出分数最小的玩家，应该在下注的时候就把这个找出来
            let minPointGamer = firstGamer;
            for (let i = 1; i < this.gamblers.length; i++) {
                let gamer = this.gamerMap.get(this.gamblers[i]["id"]);
                if (firstGamer.handCard.point > gamer.handCard.point) {
                    minPointGamer = gamer;
                }
            }
            // 最小分数的玩家要加上小早川的分数
            // let finalPoints = [];
            for (let gambler of this.gamblers) {
                if (gambler['id'] == minPointGamer.id) {
                    gambler["point"] = minPointGamer.handCard.point;
                    gambler["finalPoint"] = minPointGamer.handCard.point + this.xzcCard.point;
                } else {
                    let gamer = this.gamerMap.get(gambler['id']);
                    gamer["point"] = gamer.handCard.point;
                    gamer["finalPoint"] = gamer.handCard.point;
                }
            }
            let winner = this.gamblers[0];
            for (let i = 1; i < this.gamblers.length; i++) {
                if (this.gamblers[i]['finalPoint'] > winner['finalPoint']) {
                    winner = this.gamblers[i];
                }
            }
            winner['isWin'] = true;
            // 发奖
            this.win(this.gamerMap.get(winner['id']));
        }
        // 回合结束
        if (isLastRound) {
            // todo 游戏结束
            console.log("游戏结束");
            this.gameOver();
        } else {
            this.currentRound++;
            // todo 初始化新的一轮
            console.log("初始化新的一轮");
            this.initRound();
        }
    }

    public win(gamer: GamerModel) {
        gamer.coins += this.currentRoundBetIn;
        if (this.currentRound == this.totalRound - 1) {
            // 最后一轮的 小早川奖励是2
            this.xzcCoinCount -= 2;
        } else {
            this.xzcCoinCount -= 1;
        }
    }

    public initRound() {
        this.currentRound++;
        // 洗牌
        this.createCardLibrary();
        // 发牌
        this.sendCard();
        this.xzcCard = this.pullCard();
        this.orderedGamersIndex = 0;
        // todo 重新选取起始玩家
        this.orderlyGamers = [];
        if (this.currentRound == this.totalRound - 1) {
            // 最后一轮的 小早川奖励是2
            this.currentRoundBetIn = 2;
        } else {
            this.currentRoundBetIn = 1;
        }
        this.winner = null;
        this.gamblers = [];
    }

    public gameOver() {

    }

    public isLastStep() {
        if (this.step == GameStep.Bet) {
            if (this.orderedGamersIndex == this.orderlyGamers.length) {
                return true;
            }
        }
        return false;
    }

}