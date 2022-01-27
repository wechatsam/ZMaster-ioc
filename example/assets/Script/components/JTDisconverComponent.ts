import JTPage from "../base/JTPage";
import DisconverSceneUI from "../ui/IMPakcageUI/DisconverSceneUI";

export default class JTDisconverComponent extends c.JTUIComponent<DisconverSceneUI>
{
    public constructor() 
    {
        super();
        this.loadAsset("UI/IMPakcageUI", "DisconverSceneUI");
    }
}
