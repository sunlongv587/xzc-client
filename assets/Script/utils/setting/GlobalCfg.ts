// program:
// description:
// author: fangqing.fan@hotmail.com
// date:

class GlobalCfg {
    public static readonly httpUrl = "http://localhost:3000/";
    public static readonly wsUrl = "ws://127.0.01:8800/ws";
}

(<any>window).GlobalCfg = GlobalCfg;