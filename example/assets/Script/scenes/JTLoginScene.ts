import JTIMPackageBinder from "../binders/JTIMPackageBinder";
import { info } from "../common/JTFunctionUtils";
import JTGlobalDef from "../common/JTGlobalDef";
import JTTools from "../common/JTTools";
import JTWaitingBar from "../components/JTWaitingBar";
import JTUserInfo from "../gamedatas/JTUserInfo";
import JTSceneManager from "../managers/JTSceneManager";
import JTSingletonManager from "../managers/JTSingletonManager";
import LoginSceneUI from "../ui/IMPakcageUI/LoginSceneUI";


export default class JTLoginScene extends c.JTScene<LoginSceneUI>
{
    reg: RegExp;

    public constructor() 
    {
        super();
        this.loadAsset("UI/IMPakcageUI", "LoginSceneUI", JTIMPackageBinder);
    }

    protected notifyComplete(): void {
        super.notifyComplete();


        JTUserInfo.instance.rqcode = "FDSAFSAFDSAFDSAFDSAFDASFDSA"
        info(JTSingletonManager.instance.userInfoManager.userInfo.rqcode);
        info(JTSingletonManager.instance.friendInfoManager.userInfo.rqcode);

   
        var txt_account: fgui.GTextInput = this.componentUI.txt_account;
        let loginScene = this;
        JTTools.repairRegOnChangeInputText(txt_account, JTTools.alphabetNRegExp, function (content) {
            if (content.length == 0) {
                loginScene.componentUI.txt_tip.text = "账号不能为空";
            }
            else if (content.length < 6) {
                loginScene.componentUI.txt_tip.text = "请输入6-20位账号";
            } else {
                loginScene.componentUI.txt_tip.text = "";
            }
        });
        let txt_pwd: fgui.GTextInput = this.componentUI.txt_pwd;
        JTTools.repairRegOnChangeInputText(txt_pwd, JTTools.alphabetNRegExp, function (content) {
            if (content.length == 0) {
                loginScene.componentUI.txt_tip.text = "密码不能为空";
            }
            else if (content.length < 6) {
                loginScene.componentUI.txt_tip.text = "请输入6-20位密码";
            } else {
                loginScene.componentUI.txt_tip.text = "";
            }
        });
        txt_account.text="test001";
        // txt_account.text="Sam555";
        txt_pwd.text="123456";
    }

    protected onMouseClickHandler(target: fairygui.GComponent, targetName: string): void {
        switch (targetName) {
            case "btn_login":
                {
                    //登录逻辑
                    let error = this.componentUI.txt_tip.text = this.checkErrLoginInput();
                    if (error.length == 0) {
                        let account: string = this.componentUI.txt_account.text;
                        let pwd: string = this.componentUI.txt_pwd.text;
                        JTWaitingBar.show();
                        JTSingletonManager.instance.loginInfoManager.login(account, pwd);
                    }
                    break;
                }
            case "btn_register":
                {
                    JTSceneManager.changeScene(JTGlobalDef.SCENE_REGISTER);
                    break;
                }
        }
    }

    private checkErrLoginInput(): string {
        let account: string = this.componentUI.txt_account.text;
        let pwd: string = this.componentUI.txt_pwd.text;
        var tip = "";
        if (account.length === 0) {
            tip = "账号不能为空";
        }
        else if (!(account.length >= 6 && account.length <= 20)) {
            tip = "请输入6-20位账号";
        }
        else if (pwd.length == 0) {
            tip = "密码不能为空";
        }
        else if (!(pwd.length >= 6 && pwd.length <= 20)) {
            tip = "请输入6-20位密码";
        }
        return tip
    }

 

}

