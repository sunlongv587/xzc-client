// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameScene extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Prefab)
    pokerPrefab: cc.Prefab = null;

    @property(cc.Node)
    pokerContainer: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.label.string = "这是游戏场景。。。"
        let gameManager = new GameManager();
        gameManager.init(this.pokerContainer, this.pokerPrefab);
        gameManager.start()

    }

    // update (dt) {}
}
