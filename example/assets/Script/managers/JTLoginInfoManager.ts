import JTGlobalDef from "../common/JTGlobalDef";
import JTWaitingBar from "../components/JTWaitingBar";
import JTUserInfo from "../gamedatas/JTUserInfo";
import JTDownProtocol from "../networks/JTDownProtocol";
import JTUpProtocol from "../networks/JTUpProtocol";
import JTSceneManager from "./JTSceneManager";
import JTSingletonManager from "./JTSingletonManager";
export default class JTLoginInfoManager extends com.JTDataInfoManager 
{

    public constructor() {
        super();
  
    }

    public login(account: string, password: string): void 
    {
        var sendPackage: c.JTSendPackage = c.JTSendPackage.begin();
        sendPackage.write("account", account);
        sendPackage.write("pwd", password);
        sendPackage.writeProtocol(JTUpProtocol.LOGIN);
        sendPackage.send();
    }

    public register(account?: string, nickName?: string, password?: string): void 
    {
        var sendPackage: c.JTSendPackage = c.JTSendPackage.begin();
        sendPackage.write("account", account);
        sendPackage.write("nickName", nickName);
        sendPackage.write("password", password);
        sendPackage.writeProtocol(JTUpProtocol.USER_REGISTER);
        sendPackage.send();
    }

    @c.ResponseMapping(JTDownProtocol.LOGIN, JTUserInfo, false)
    public loginResponse(result: JTUserInfo): void {
        JTSingletonManager.instance.userInfoManager.userInfo.update(result);
        console.log("用户信息:"+JSON.stringify(result["user"]));
        JTSingletonManager.instance.friendInfoManager.requestAddFriend("38b913f092d499e47d719e9fb0d3b7bf");
        JTSceneManager.changeScene(JTGlobalDef.SCENE_APPLICATION)
    }

    @c.Response(JTDownProtocol.REGISTER)
    public registerResponse(result: Object): void {
        JTSceneManager.changeScene(JTGlobalDef.SCENE_LOGIN)
    }

}

