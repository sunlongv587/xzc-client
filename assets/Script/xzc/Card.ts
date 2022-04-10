
const BigPoints = '一,二,三,四,五,六,七,八,九,十,十一,十二,十三,十四,十五'.split(',');
export default class Card {

    public id: number = 0;

    public point: number = -1;

    public bigPoint: string = null;

    constructor(point: number) {
        this.point = point;
        this.id = this.point - 1;
    }

    public getBigPointName(): string {
        return BigPoints[this.id];
    }

}