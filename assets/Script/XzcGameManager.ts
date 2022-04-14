import Card from "./xzc/Card";
import XzcGameView from "./XzcGameView";
import {StateMachine} from "./StateMachine";
import {GamerModel} from "./xzc/GamerModel";
import {StandAloneService} from "./StandAloneService";


export default class XzcGameManager {

    private me: GamerModel = null;

    private myId: number = null;

    private xzcGameView: XzcGameView = null;

    private stateMachine = null;
    // todo 应该定义个接口，没有网的时候使用单机，有网的时候用另一个
    private gameService: StandAloneService = null;

    public init(xzcGameView: XzcGameView, gamer: GamerModel) {
        this.xzcGameView = xzcGameView
        this.me = gamer;
        this.myId = gamer.id;
        this.gameService = new StandAloneService();
    }

    // 开始游戏
    public startGame() {
        this.gameService.createNewGameByGamersCount(this.me, 3)
        let xzcCard = this.gameService.getXzcCard();
        let me = this.gameService.getGamerMap().get(this.myId);
        let handCard = me.handCard;
        let cardCount = this.gameService.getCardCount();
        this.xzcGameView.init(xzcCard,
            handCard, cardCount, this.myId,
            this.gameService.getGamerMap(),
            this.gameService.getOrderlyGamers());
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
        console.log(this.stateMachine.current);
    }

    // 从牌堆抓一张牌
    public pullCard(): Card {
        let card = this.gameService.pullCard();
        // 修改显示 剩余牌数
        this.xzcGameView.updateCardCount(this.gameService.getCardCount());
        return card;
    }

    // 抓牌
    public takeCard(button) {
        // 抓一张牌
        this.me.takenCard = this.pullCard();
        // 显示到指定区域
        this.xzcGameView.putMyTakeCard(this.me.takenCard);
        // 触发状态机
        this.stateMachine.takeCard(this);
        console.log(this.stateMachine.current);
    }

    public changeXzcCard(button) {
        let xzcCard = this.gameService.changeXzcCard();
        this.xzcGameView.putXzcCard(xzcCard);
        this.xzcGameView.updateCardCount(this.gameService.getCardCount());
        // 触发状态机
        this.stateMachine.changeXzcCard(this);
        console.log(this.stateMachine.current);
    }

    // 弃手牌
    public disHandCard(button) {
        this.me.discarded = this.me.handCard;
        this.me.handCard = this.me.takenCard;
        // 将新牌显示到手牌区域
        this.xzcGameView.putMyCard(this.me.handCard);
        // 将新牌区域置空
        this.xzcGameView.removeMyTakeCard();
        // 手牌显示到弃牌区域
        this.xzcGameView.putMyDisCard(this.me.discarded);
        // 触发状态机
        this.stateMachine.discard(this);
        console.log(this.stateMachine.current);
    }

    // 弃新牌
    public disTakenCard(button) {
        this.me.discarded = this.me.takenCard;
        // 将新牌区域置空
        this.xzcGameView.removeMyTakeCard();
        // 手牌显示到弃牌区域
        this.xzcGameView.putMyDisCard(this.me.discarded);
        // 触发状态机
        this.stateMachine.discard(this);
        console.log(this.stateMachine.current);
    }

}