import { info } from "../common/JTFunctionUtils";
import MessageSceneUI from "../ui/IMPakcageUI/MessageSceneUI";
@c.ResizeEvent()
export default class JTMessageComponent extends c.JTUIComponent<MessageSceneUI>
{
    public constructor() 
    {
        super();
        this.loadAsset("UI/IMPakcageUI", "MessageSceneUI");
    }

    public onResizeHandler():void
    {
        info(this.height,   "    componentUI height:  " + this.componentUI.height);
        info("component parent    :" + this.componentUI.parent);
        info("x: " + this.x, "            y:" + this.y);
    }
}
