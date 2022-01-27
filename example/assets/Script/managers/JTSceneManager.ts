import JTGlobalDef from "../common/JTGlobalDef";
import JTLoginScene from "../scenes/JTLoginScene";
import JTRegisterScene from "../scenes/JTRegisterScene";
import JTApplicationScene from "../scenes/JTApplicationScene";

export default class JTSceneManager extends c.JTAbstractSceneManager
{
    constructor()
    {
        super();
    }    

    public buildComplete(): void 
    {
        this.registerSceneClassAlias(JTGlobalDef.SCENE_LOGIN, JTLoginScene);
        this.registerSceneClassAlias(JTGlobalDef.SCENE_REGISTER, JTRegisterScene);
        this.registerSceneClassAlias(JTGlobalDef.SCENE_APPLICATION, JTApplicationScene);
    }

}
