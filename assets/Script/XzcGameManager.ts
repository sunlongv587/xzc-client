import Card from "./xzc/Card";
import XzcGameView from "./XzcGameView";
import {StateMachine} from "./StateMachine";
import {GamerModel} from "./xzc/GamerModel";
import {StandAloneService} from "./StandAloneService";
import {GameStep} from "./poker/Constant";


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
        this.gameService = new StandAloneService(this.me, this.stateMachine);
    }

    // 开始游戏
    public startGame() {
        this.gameService.createNewGameByGamersCount(3);
        let xzcCard = this.gameService.getXzcCard();
        let me = this.gameService.getGamerMap().get(this.myId);
        let handCard = me.handCard;
        let cardCount = this.gameService.getCardCount();
        this.xzcGameView.init(xzcCard,
            handCard, cardCount, this.myId,
            this.gameService.getGamerMap(),
            this.gameService.getOrderlyGamers());
        // 初始化状态机
        let afterAction = function (event, from, to, msg) {
            // 弃牌之后，变为等待状态
            msg.xzcGameView.cleanOperateArea();
            // 开始调用机器人操作，直到所有的机器人都操作完毕
            let hasNext = msg.gameService.hasNext();
            while (hasNext) {
                try {
                    let robot = msg.gameService.nextRobotAction();
                    console.log('robot action')
                    console.log(robot);
                    msg.xzcGameView.updateGamerView(robot);
                    msg.xzcGameView.updateXzcView(msg.gameService.getXzcCard(), msg.gameService.getCardCount(), msg.gameService.getXzcCoinCount());
                    hasNext = msg.gameService.hasNext();
                } catch (e) {
                    if (msg.gameService.getStep() == GameStep.Action) {
                        // 触发状态机
                        msg.stateMachine.recvAction(msg);
                    } else if (msg.gameService.getStep() == GameStep.Bet) {
                        msg.stateMachine.recvBet(msg);
                    }
                    hasNext = false;
                }
                // 故意加一点延迟
                msg.sleep(5000);
            }
            if (msg.gameService.getStep() == GameStep.Action) {
                // 触发状态机
                msg.stateMachine.recvAction(msg);
            } else if (msg.gameService.getStep() == GameStep.Bet) {
                msg.stateMachine.recvBet(msg);
            } else if (msg.gameService.getStep() == GameStep.Settle) {
                // 触发结算
                msg.gameService.settleRound();
                msg.roundEnd();
            }
        };
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
                {name: 'discard', from: 'DISCARD', to: 'WAIT_BET'},
                // 更换小早川牌，从 action 直接变回等待
                {name: 'changeXzcCard', from: 'ACTION', to: 'WAIT_BET'},
                // 接收到下注指令，从 wait 转到 bet
                {name: 'recvBet', from: 'WAIT_BET', to: 'BET'},
                // 下注后，进入下注状态
                {name: 'betting', from: 'BET', to: 'IN_BET'},
                // 跳过下注后，进入等待状态
                {name: 'pass', from: 'BET', to: 'WAIT'},
                // 本轮结束
                {name: 'roundEnd', from: ['BET', 'WAIT', 'WAIT_BET', 'ACTION', 'DISCARD', 'BET', 'IN_BET'], to: 'WAIT'},
            ],
            callbacks: {
                ondiscard: afterAction,
                ontakeCard: function (event, from, to, msg) {
                    // 抓完牌之后，将按钮更改为弃牌
                    msg.xzcGameView.updateOperateArea("弃手牌", msg.disHandCard.bind(msg), "弃新牌", msg.disTakenCard.bind(msg));
                },
                onrecvAction: function (event, from, to, msg) {
                    // 接收到行动指令之后，将按钮更改为抓牌
                    msg.xzcGameView.updateOperateArea("抓牌", msg.takeCard.bind(msg), "翻小早川牌", msg.changeXzcCard.bind(msg));
                },
                onrecvBet: function (event, from, to, msg) {
                    // 接收到行动指令之后，将按钮更改为下注
                    msg.xzcGameView.updateOperateArea("下注", msg.bet.bind(msg), "不下注", msg.pass.bind(msg));
                },
                onchangeXzcCard: afterAction,
                onbetting: afterAction,
                onpass: afterAction
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

    public sleep(delay) {
        var start = (new Date()).getTime();
        while ((new Date()).getTime() - start < delay) {
            continue;
        }
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
        this.gameService.incrOrderedGamersIndex();
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
        this.gameService.incrOrderedGamersIndex();
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
        this.gameService.incrOrderedGamersIndex();
        // 触发状态机
        this.stateMachine.discard(this);
        console.log(this.stateMachine.current);
    }

    // 下注
    public bet(button) {
        if (this.me.coins == 0) {
            return;
        }
        // 扣除硬币到奖池
        this.gameService.betOrPass(this.me, true);
        // 显示下注标识
        // this.xzcGameView.putMyDisCard(this.me.discarded);
        this.gameService.incrOrderedGamersIndex();
        // 触发状态机
        this.stateMachine.betting(this);
        console.log(this.stateMachine.current);
    }

    // 下注
    public pass(button) {
        // 扣除硬币到奖池
        this.gameService.betOrPass(this.me, false);
        // 显示下注标识
        // this.xzcGameView.putMyDisCard(this.me.discarded);
        this.gameService.incrOrderedGamersIndex();
        // 触发状态机
        this.stateMachine.pass(this);
        console.log(this.stateMachine.current);
    }

    public roundEnd() {
        let gambler = this.gameService.getGamblers();
        this.stateMachine.roundEnd(this);
        // 显示结算结果
        console.log("显示结算结果");
        // this.xzcGameView.
    }

    public roundStart() {

    }

}