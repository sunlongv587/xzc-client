import {Suit} from './Constant'

const A2_10JQK = 'NAN,A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',');
export default class Poker {

    public id: number = 0;

    public point: number = -1;

    public suit: Suit = null;


    constructor(point: number, suit: Suit) {
        this.point = point;
        this.suit = suit;
        this.id = (this.suit - 1) * 13 + (this.point - 1)
    }

    public getPointName(): string {
        return A2_10JQK[this.point];
    }

    public getSuitName(): string {
        return Suit[this.suit];
    }

    public isBlackSuit(): boolean {
        return this.suit === Suit.Spade || this.suit === Suit.Club;
    }

    public isRedSuit(): boolean {
        return this.suit === Suit.Heart || this.suit === Suit.Diamond;
    }
}