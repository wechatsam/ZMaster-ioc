import { info } from "../common/JTFunctionUtils";
import JTSession from "../common/JTSession";
import JTUserInfo from "../gamedatas/JTUserInfo";

export default class JTLayerManager extends com.JTAbstractLayerManager
{
    constructor()
    {
        super();
    }

    public build():void 
    {
        cc.macro.CLEANUP_IMAGE_CACHE = false;
        cc.dynamicAtlasManager.enabled = true;
        cc.view.setDesignResolutionSize(JTSession.designWidth, JTSession.designHeight, cc.ResolutionPolicy.FIXED_WIDTH);
        super.build();
        info(this.stage.pivotX, this.stage.pivotY);
        var size:cc.Size = cc.view.getVisibleSize();
        JTSession.stageWidth = size.width;
        JTSession.stageHeight = size.height;
        // this.stage.//setContentScaleFactor(1136，640，ScreenMatchMode.MatchWidthOrHeight);
    }

    public buildComplete():void
    {
       
    }
}
 
