import Card from "./Card";


export class GamerModel {

    public id: number;

    public nickname: string;

    public coins: number = 4;

    public avatar: string;
    // 弃牌
    public discarded: Card;
    // 手牌
    public handCard: Card;
    // 抓的牌
    public takenCard: Card;

    public state: string;

    constructor(id: number, nickname: string) {
        this.id = id;
        this.nickname = nickname;
    }
}