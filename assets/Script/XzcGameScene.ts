import XzcGameManager from "./XzcGameManager";
import XzcGameView from "./XzcGameView";
import {GamerModel} from "./xzc/GamerModel";
import game = cc.game;

const {ccclass, property} = cc._decorator;

@ccclass
export default class XzcGameScene extends cc.Component {

    @property(cc.Prefab)
    xzcGameViewPrefab: cc.Prefab = null;

    xzcGameView: XzcGameView = null;

    gameManager: XzcGameManager = null;

    // onLoad () {}

    start () {
        // 这是游戏场景。。。
        this.xzcGameView = cc.instantiate(this.xzcGameViewPrefab).getComponent(XzcGameView);
        this.node.addChild(this.xzcGameView.node);
        // 通过服务器获得
        let gamer = new GamerModel();
        gamer.nickname = "快如子弹";
        gamer.id = 1;
        gamer.coins = 4;
        // gamer.state =

        this.gameManager = new XzcGameManager();
        this.gameManager.init(this.xzcGameView, gamer);
        this.gameManager.startGame();
    }

    // update (dt) {}
}
