import JTPage from "../base/JTPage";
import ExporerSceneUI from "../ui/IMPakcageUI/ExporerSceneUI";

export default class JTExplorerComponent extends c.JTUIComponent<ExporerSceneUI>
{
    public constructor() 
    {
        super();
        this.loadAsset("UI/IMPakcageUI", "ExporerSceneUI");
    }
}
