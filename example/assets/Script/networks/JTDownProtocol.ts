import JTWaitingBar from "../components/JTWaitingBar";
import JTUserInfo from "../gamedatas/JTUserInfo";

export default class JTDownProtocol extends com.JTProtocol {

    public static LOGIN: number = 10000;

    public static REGISTER: number = 10001;

    public static SEARCH_FRIEND: number = 10002;//搜索好友

    public static REQUEST_ADD_FRIEND: number = 10003;//申请添加好友

    public static NOTIFY_RECCEIVE_ADD_FRIEND = 10004; //服务端主动推送 申请好友对象

    public static AGREE_WITH_FRIENDS = 10005;//是否同意好友请求

    public static NOTIFY_RECEIV_FRIEND_ANSWER = 10006;//收到好友请求回复

    public static NOTIFY_RECEIV_NEW_FRIEND = 10007;//收到新的好友


    
    constructor() 
    {
        super();
    }

    execute(message: any):void
    {
        JTWaitingBar.hide();
    }
}



