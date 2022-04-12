const {ccclass, property} = cc._decorator;

@ccclass
export default class OperateButton extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    public init(label: string) {
        this.label.string = label;
    }

    // update (dt) {}
}
