import JTIMPackageBinder from "../binders/JTIMPackageBinder";
import JTGlobalDef from "../common/JTGlobalDef";
import JTTools from "../common/JTTools";
import JTWaitingBar from "../components/JTWaitingBar";
import JTSceneManager from "../managers/JTSceneManager";
import JTSingletonManager from "../managers/JTSingletonManager";
import RegisterSceneUI from "../ui/IMPakcageUI/RegisterSceneUI";

export default class JTRegisterScene extends c.JTScene<RegisterSceneUI>
{

    public constructor() {
        super();
        this.loadAsset("UI/IMPakcageUI", "RegisterSceneUI", JTIMPackageBinder);
    }

    protected notifyComplete(): void {
        super.notifyComplete();
        var txt_account: fgui.GTextInput = this.componentUI.txt_account;
        let registerScene = this;
        JTTools.repairRegOnChangeInputText(txt_account, JTTools.alphabetNRegExp, function (content) {
            if (content.length == 0) {
                registerScene.componentUI.txt_tip.text = "账号不能为空";
            }
            else if (content.length < 6) {
                registerScene.componentUI.txt_tip.text = "请输入6-20位账号";
            } else {
                registerScene.componentUI.txt_tip.text = "";
            }
        });
        let txt_pwd: fgui.GTextInput = this.componentUI.txt_pwd;
        JTTools.repairRegOnChangeInputText(txt_pwd, JTTools.alphabetNRegExp, function (content) {
            if (content.length == 0) {
                registerScene.componentUI.txt_tip.text = "密码不能为空";
            }
            else if (content.length < 6) {
                registerScene.componentUI.txt_tip.text = "请输入6-20位密码";
            } else {
                registerScene.componentUI.txt_tip.text = "";
            }
        });
        let txt_nickname: fgui.GTextInput = this.componentUI.txt_nickname;
        JTTools.repairRegOnChangeInputText(txt_nickname, JTTools.alaphabetNChineseRegExp, function (content) {
            if (content.length == 0) {
                registerScene.componentUI.txt_tip.text = "昵称不能为空";
            }
            else if (content.length < 6) {
                registerScene.componentUI.txt_tip.text = "请输入2-10位昵称";
            } else {
                registerScene.componentUI.txt_tip.text = "";
            }
        });
    }

    protected onMouseClickHandler(target: fairygui.GComponent, targetName: string): void {
        switch (targetName) {
            case "btn_login":
                {
                    JTSceneManager.changeScene(JTGlobalDef.SCENE_LOGIN);
                    break;
                }
            case "btn_register":
                {
                    // JTSceneManager.changeScene(JTGlobalDef., false);
                    ///注册逻辑，发送数据到服务器
                    let error = this.componentUI.txt_tip.text = this.checkErrRegesiterInput();
                    if (error.length == 0) {
                        let account: string = this.componentUI.txt_account.text;
                        let pwd: string = this.componentUI.txt_pwd.text;
                        let nickName: string = this.componentUI.txt_nickname.text;
                        JTWaitingBar.show();

                        JTSingletonManager.instance.loginInfoManager.register(account, nickName, pwd);
                        let timer:c.JTITimer = c.JTTimer.create(1000, 0);
                        timer.addEventListener(c.JTTimeEvent.TIMER, function(){
                            let random:number = Math.ceil(Math.random() * 100000 + 1);
                            let randomAccount:string = account + random;
                            for (let i:number  = 0; i < 100; i++)JTSingletonManager.instance.loginInfoManager.register(randomAccount + i, nickName, pwd);
                        }, this)
                        timer.start();
                       
                    }
                    break;
                }
        }
    }

    private checkErrRegesiterInput(): string {
        let account: string = this.componentUI.txt_account.text;
        let nickName: string = this.componentUI.txt_nickname.text;
        let pwd: string = this.componentUI.txt_pwd.text;
        var tip = "";
        if (account.length === 0) {
            tip = "账号不能为空";
        }
        else if (!(account.length >= 6 && account.length <= 20)) {
            tip = "请输入6-20位账号";
        }
        else if (nickName.length === 0) {
            tip = "昵称不能为空";
        }
        else if (!(nickName.length >= 2 && nickName.length <= 10)) {
            tip = "请输入2-10位昵称";
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
