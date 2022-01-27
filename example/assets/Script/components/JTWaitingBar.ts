import LoadingSceneUI from "../ui/IMPakcageUI/LoadingSceneUI";
import { info } from "../common/JTFunctionUtils";
import JTLayerManager from "../managers/JTLayerManager";
import JTIMPackageBinder from "../binders/JTIMPackageBinder";


export default class JTWaitingBar extends c.JTPanel<LoadingSceneUI> 
{
    public static _instance:JTWaitingBar = null;

    private _enterFrame:c.JTIEnterFrame = null;
    public constructor() 
    {
        super()
        this.loadAsset("UI/IMPakcageUI", "LoadingSceneUI", JTIMPackageBinder, false);
        this._enterFrame = c.JTEnterFrame.create();
        this._enterFrame.addEventListener(c.JTTimeEvent.ENTER_FRAME, this.update, this);
    }


    public start():void
    {
        this._enterFrame.play(99999, 0, 60);
        info("running!")
    }

    public stop():void
    {
        // this.scheduler.isTargetPaused(this);
        // this.scheduler.unschedule(this.update, this);
        this._enterFrame.stop();
        info("stop!")
    }

    protected notifyComplete(): void 
    {
        JTLayerManager.addToLayer(this.componentUI, JTLayerManager.LAYER_MASK);
        // this.componentUI.visible = false;
    }

    public update(e:c.JTIEnterFrame):void
    {
        if (this._____ui) 
        {
            console.log("正在运行");
            this._____ui.img_loading.rotation += 10;
        }
    }

    public static initialize():void
    {
        if (!this._instance)
        {
            // this._instance = new JTWaitingBar();
        }
    }

    public static show():void
    {
        if (!this._instance) return;
        if (this._instance._____ui) 
        {
            // this._instance._____ui.visible = true;
            this._instance.start();
        }
    }

    public static hide():void 
    {
        if (!this._instance) return;
        if (this._instance._____ui) 
        {
            // this._instance._____ui.visible = false;    
            this._instance.stop();
        }
    }
}
