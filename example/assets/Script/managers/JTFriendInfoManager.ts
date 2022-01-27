import JTUserInfo from "../gamedatas/JTUserInfo";
import JTDownProtocol from "../networks/JTDownProtocol";
import JTUpProtocol from "../networks/JTUpProtocol";

export default class JTFriendInfoManager extends com.JTDataInfoManager {

    @c.Qualifier("__userInfo")
    @c.Autowired
    public userInfo:JTUserInfo = null;
    public constructor() 
    {
        super();
    }

    public searchFriend(account: string, type: string): void {
        var sendPackage: com.JTSendPackage = com.JTSendPackage.begin();
        sendPackage.write("account", account);
        sendPackage.write("type", type);
        sendPackage.writeProtocol(JTUpProtocol.SEARCH_FRIEND);
        sendPackage.send();
    }

    public requestAddFriend(uid: string): void {
        var sendPackage: com.JTSendPackage = com.JTSendPackage.begin();
        sendPackage.write("uid", uid);
        sendPackage.writeProtocol(JTUpProtocol.REQUEST_ADD_FRIEND);
        sendPackage.send();
    }

    public agreeWithFriend(uid:string,isAgree:string): void {
        var sendPackage: com.JTSendPackage = com.JTSendPackage.begin();
        sendPackage.write("uid", uid);
        sendPackage.write("isAgree", isAgree);
        sendPackage.writeProtocol(JTUpProtocol.AGREE_WITH_FRIENDS);
        sendPackage.send();
    }

    @c.Response(JTDownProtocol.SEARCH_FRIEND)
    protected searchFriendResponse(result: Object): void {
        console.log("接收好友查询Down消息:" + result);

    }

    @c.Response(JTDownProtocol.REQUEST_ADD_FRIEND)
    protected requestAddFriendResponse(result: Object): void {
        console.log("接收好友添加Down消息:" + result);

    }

    @c.Response(JTDownProtocol.NOTIFY_RECCEIVE_ADD_FRIEND)
    protected receiveAddFriendResponse(result: Object): void {
        console.log("接收好友对象Down消息:" + result);

        this.searchFriend("Sam555", "1")
        this.agreeWithFriend(result[0]["uid"],"1");

    }
    @c.Response(JTDownProtocol.AGREE_WITH_FRIENDS)
    protected agreeWithFriendResponse(result: Object): void {
        console.log("接收同意好友请求Down消息:" + result);

    }
    @c.Response(JTDownProtocol.NOTIFY_RECEIV_FRIEND_ANSWER)
    protected receiveFriendAnswerResponse(result: Object): void {
        console.log("接收好友请求回复Down消息:" + result);
    }

    @c.Response(JTDownProtocol.NOTIFY_RECEIV_NEW_FRIEND)
    protected receiveNotifyFriendAnswerResponse(result: Object): void {
        console.log("服务器通知好友请求回复Down消息:" + result);
    }
    
}

