import Card from "./Card";


export class GamerModel {

    public id: number;

    public nickname: string;

    public coins: number = 4;

    public avatar: string;

    public disCard: Card;

    public state: string;

    constructor(id: number, nickname: string) {
        this.id = id;
        this.nickname = nickname;
    }
}