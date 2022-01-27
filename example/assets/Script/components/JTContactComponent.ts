import ContactSceneUI from "../ui/IMPakcageUI/ContactSceneUI";

export default class JTContactComponent extends c.JTUIComponent<ContactSceneUI>
{
    public constructor() 
    {
        super();
        this.loadAsset("UI/IMPakcageUI", "ContactSceneUI");
    }
}
