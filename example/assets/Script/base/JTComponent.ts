import JTGlobalDef from "../common/JTGlobalDef";
import JTSceneManager from "../managers/JTSceneManager";

export default class JTComponent<T extends fgui.GComponent> extends com.JTEventSignaler
{
    protected _componentUI:T = null;
    protected _componentId:string = null;
    protected _layerType:string = null;

    public constructor()
    {
        super();
        this.registerFunction(JTGlobalDef.RISIZE, this.onResizeHandler, this);
        // com.JTFunctionManager.registerFunction(JTGlobalDef.RISIZE, this.onResizeHandler, this);
    }

    protected loadAsset(componentId:string):void
    {
        this._componentId = componentId;
        fgui.UIPackage.loadPackage("UI/IMPakcageUI", this.onloadComplete.bind(this));
    }

    // protected get layerType():string
    // {
    //     this._layerType = JTSceneManager.LAYER_SCENE
    //     return this._layerType;
    // }

    protected onResizeHandler(data?:any):void
    {
        
    }

    private build(runCls:any):void
    {
        fgui.UIObjectFactory.setExtension(runCls.URL, this.uiClass);
    }

    protected get uiClass():any
    {
        return this.constructor;
    }

    protected onloadComplete():void
    {
    //    this._componentUI = fgui.UIPackage.createObject("IMPakcageUI", this._componentId) as T;
    //    let sceneLayer:fgui.GComponent = JTSceneManager.getLayer(this.layerType);
    //    this._componentUI.x = this._componentUI.y = 0;
    //    sceneLayer.addChild(this._componentUI);
    //    this._componentUI.makeFullScreen();
    //    this.notifyComplete();
    }

    public set x(value:number)
    {
        this._componentUI.x = value;
    }

    public set y(value:number)
    {
        this._componentUI.y = value;
    }
    
    protected notifyComplete() 
    {
     
    }

    protected registerListener():void
    {
        this._componentUI.onClick(this.onMouseClickHandler, this);
    }

    protected onMouseClickHandler(e):void
    {
        var target: fgui.GComponent = e.target["$gobj"];
        var targetName: string = target.name;
        if (!targetName) return;
        this.onClickHandler(target, targetName)
    }

    protected onClickHandler(target: fairygui.GComponent, targetName: string):void
    {

    }
     
    public get componentUI():T
    {
        return this._componentUI as T;
    }
}
