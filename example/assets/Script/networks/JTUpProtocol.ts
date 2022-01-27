import JTWaitingBar from "../components/JTWaitingBar";
import JTUserInfo from "../gamedatas/JTUserInfo";

export default class JTUpProtocol extends com.JTProtocol {

    public static LOGIN: number = 10000;

    public static REGISTER: number = 10001;

    public static SEARCH_FRIEND: number = 10002;//搜索好友

    public static REQUEST_ADD_FRIEND: number = 10003;//申请添加好友

    public static AGREE_WITH_FRIENDS = 10005;//是否同意好友请求

    public static USER_REGISTER:string = "/imChat/register"

    constructor() {
        super();
    }

    public execute(message: any): void {
        JTWaitingBar.show();
    }
}

