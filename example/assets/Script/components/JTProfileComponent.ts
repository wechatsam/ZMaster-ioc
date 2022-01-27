import JTIMPackageBinder from "../binders/JTIMPackageBinder";
import ProfileSceneUI from "../ui/IMPakcageUI/ProfileSceneUI";

export default class JTProfileComponent extends c.JTUIComponent<ProfileSceneUI>
{
    public constructor() 
    {
        super();
        this.loadAsset("UI/IMPakcageUI", "ProfileSceneUI");
    }
}
