

export enum Suit {
    Spade = 1,   // 黑桃
    Heart = 2,   // 红桃
    Club = 3,    // 梅花(黑)
    Diamond = 4, // 方块(红)
}

export enum GameStep {
    Initial = 0,
    Action = 1, // 行动阶段
    bet = 2, // 下注阶段
    settle = 3, // 结算阶段
}

export enum GamerState {
    WAIT = 1,
    ACTION = 2,
    DISCARD = 3,
    BET = 4,
}

export enum GamerEvent {
    recvAction = 1,
    takeCard = 2,
    discard = 3,
    changeXzcCard = 4,
    recvBet = 5,
    betting = 6,
    roundEnd = 7,
}