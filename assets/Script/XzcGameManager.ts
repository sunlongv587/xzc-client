import Card from "./xzc/Card";
import XzcGameView from "./XzcGameView";
import {StateMachine} from "./StateMachine";
import {GamerModel} from "./xzc/GamerModel";


export default class XzcGameManager {

    // 当前轮次排序玩家ID
    private orderlyGamers: number[] = [];
    // 所有玩家信息
    private gamerMap: Map<number, GamerModel>;
    // 当前行动的玩家 id
    private orderedGamersIndex: number = 0;
    // 牌堆
    private cards: Card[] = new Array(15);
    // 牌堆指针
    private cardIndex: number = 0;

    private me: GamerModel = null;

    private xzcGameView: XzcGameView = null;

    private stateMachine = null;
    // 小早川牌
    private xzcCard: Card = null;
    // 手牌
    private handCard: Card = null;
    // 新摸得牌
    private takenCard: Card = null;
    // 丢弃的牌
    private discarded: Card = null;

    public init(xzcGameView: XzcGameView, gamer: GamerModel) {
        this.xzcGameView = xzcGameView
        this.me = gamer;
    }

    // 开始游戏
    public startGame() {
        // todo 连接服务器的话，不需要牌堆
        this.createCardHouse();
        console.log(this.cards);
        // 创建玩家队列
        this.createGamers();
        this.xzcCard = this.pullCard();
        // 给玩家发手牌
        this.handCard = this.pullCard();
        this.xzcGameView.init(this.xzcCard, this.handCard, this.cards.length - this.cardIndex, this.me, this.gamerMap, this.orderlyGamers);
        // 初始化状态机
        this.stateMachine = StateMachine.create({
            initial: 'WAIT',
            error: function (eventName, from, to, args, errorCode, errorMessage) {
                alert('event ' + eventName + ' was naughty :- ' + errorMessage);
            },
            events: [
                // 接收到行动指令，从 wait 转为 action
                {name: 'recvAction', from: 'WAIT', to: 'ACTION'},
                // 抓牌之后，变为弃牌状态
                {name: 'takeCard', from: 'ACTION', to: 'DISCARD'},
                // 弃牌之后 变回等待
                {name: 'discard', from: 'DISCARD', to: 'WAIT'},
                // 更换小早川牌，从 action 直接变回等待
                {name: 'changeXzcCard', from: 'ACTION', to: 'WAIT'},
                // 接收到下注指令，从 wait 转到 bet
                {name: 'recvBet', from: 'WAIT', to: 'BET'},
                // 下注后，进入下注状态
                {name: 'betting', from: 'BET', to: 'IN_BET'},
                // 本轮结束
                {name: 'roundEnd', from: ['BET', 'WAIT', 'ACTION', 'DISCARD', 'BET', 'IN_BET'], to: 'WAIT'},
            ],
            callbacks: {
                ondiscard: function (event, from, to, msg) {
                    // 弃牌之后，变为等待状态
                    msg.xzcGameView.cleanOperateArea();
                },
                ontakeCard: function (event, from, to, msg) {
                    // 抓完牌之后，将按钮更改为弃牌
                    msg.xzcGameView.updateOperateArea("弃手牌", msg.disHandCard.bind(msg), "弃新牌", msg.disTakenCard.bind(msg));
                },
                onrecvAction: function (event, from, to, msg) {
                    // 接收到行动指令之后，将按钮更改为抓牌
                    msg.xzcGameView.updateOperateArea("抓牌", msg.takeCard.bind(msg), "翻小早川牌", msg.changeXzcCard.bind(msg));
                },
                changeXzcCard: function (event, from, to, msg) {
                    // 变为等待状态
                    msg.xzcGameView.cleanOperateArea();
                },
                //     onyellow: function (event, from, to) {
                //         document.body.className = 'yellow';
                //     },
                //     onred: function (event, from, to) {
                //         document.body.className = 'red';
                //     },
            }
        }, null);
        // 模拟收到行动指令
        this.stateMachine.recvAction(this);
        console.log("recv_action");
        console.log(this.stateMachine.current);
    }

    // 创建全部卡片
    private createCardHouse() {
        // 目前还没加洗牌
        for (let s = 1; s <= 15; s++) {
            let card = new Card(s);
            this.cards[card.id] = card;
        }
    }

    // 模拟创建玩家队列
    public createGamers() {
        this.orderlyGamers = [2,3,1,4];
        this.gamerMap = new Map<number, GamerModel>();
        this.gamerMap.set(1, this.me);
        this.gamerMap.set(2, new GamerModel(2, "玩家二"));
        this.gamerMap.set(3, new GamerModel(3, "玩家三"));
        this.gamerMap.set(4, new GamerModel(4, "玩家四"));
        this.gamerMap.set(5, new GamerModel(5, "玩家五"));
        this.gamerMap.set(6, new GamerModel(6, "玩家六"));
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
        this.takenCard = this.pullCard();
        // 显示到指定区域
        this.xzcGameView.putMyTakeCard(this.takenCard);
        // 触发状态机
        this.stateMachine.takeCard(this);
        console.log(this.stateMachine.current);
    }

    public changeXzcCard(button) {
        this.xzcCard = this.pullCard();
        this.xzcGameView.putXzcCard(this.xzcCard);
        // 触发状态机
        this.stateMachine.changeXzcCard(this);
        console.log(this.stateMachine.current);
    }

    // 弃手牌
    public disHandCard(button) {
        this.discarded = this.handCard;
        this.handCard = this.takenCard;
        // 将新牌显示到手牌区域
        this.xzcGameView.putMyCard(this.handCard);
        // 将新牌区域置空
        this.xzcGameView.removeMyTakeCard();
        // 手牌显示到弃牌区域
        this.xzcGameView.putMyDisCard(this.discarded);
        // 触发状态机
        this.stateMachine.discard(this);
        console.log(this.stateMachine.current);
    }

    // 弃新牌
    public disTakenCard(button) {
        this.discarded = this.takenCard;
        // 将新牌区域置空
        this.xzcGameView.removeMyTakeCard();
        // 手牌显示到弃牌区域
        this.xzcGameView.putMyDisCard(this.discarded);
        // 触发状态机
        this.stateMachine.discard(this);
        console.log(this.stateMachine.current);
    }

}