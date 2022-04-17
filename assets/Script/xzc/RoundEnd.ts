import Card from "./Card";
import CardUI from "./CardUI";
import {GamerModel} from "./GamerModel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RoundEnd extends cc.Component {

    @property(cc.Label)
    titleLabel: cc.Label = null;

    @property(cc.Button)
    confirmButton: cc.Button = null;

    @property(cc.ScrollView)
    settleInfoView: cc.ScrollView = null;

    public init(gamlers: Object[], gamerMap: Map<number, GamerModel>) {
        // 显示结算信息到对应区域
        // this.settleInfoView.
        // 绑定确认按钮点击事件

        // this.nicknameLabel.string = gamer.nickname;
        // this.coinCountLabel.string = `硬币：${gamer.coins}`;
        // if (gamer.avatar) {
        //     // todo 放入头像
        // }
        // if (gamer.discarded) {//     this.putDiscarded(gamer.discarded);
        // }
    }

    public getStateText(state: string): string {
        let map = {
            "WAIT": "等待中",
            "ACTION": "行动中",
            "DISCARD": "选择弃牌",
            "WAIT_BET": "等待下注",
            "BET": "下注中",
            "IN_BET": "已下注"
        }
        return map[state];
    }

}
