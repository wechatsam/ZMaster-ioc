import { info } from "./common/JTFunctionUtils";
import JTGlobalDef from "./common/JTGlobalDef";
import JTWaitingBar from "./components/JTWaitingBar";
import JTSceneManager from "./managers/JTSceneManager";

export default class JTApplication extends c.JTApplicationBootstrap
{
    constructor()
    {
        super();
    }

    protected launchSucceed():void 
    {
        JTWaitingBar.initialize();
        let sceneManager:JTSceneManager = this.getContext(c.JTApplicationBootstrap.CONTEXT_SCENE);
        sceneManager.changeScene(JTGlobalDef.SCENE_LOGIN);
    }
    
}
 
