import JTGlobalDef from "../common/JTGlobalDef";
 

export default class JTPage<T extends fgui.GComponent> extends fgui.GComponent
{
    protected _componentId:string = null;
    protected _cls:any = null;
    protected _componentUI:T = null;
    private _functionMap:Object = {};
    private _eventMap:Object = {};
    public constructor()
    {
        super();
        this.registerFunction(JTGlobalDef.RISIZE, this.onResizeHandler, this);
        // com.JTFunctionManager.registerFunction(JTGlobalDef.RISIZE, this.onResizeHandler, this);
    }

    protected loadAsset(componentId:string):void
    {
        this._componentId = componentId;
        // this._cls = cls;
        fgui.UIPackage.loadPackage("UI/IMPakcageUI", this.onloadComplete.bind(this));
    }

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
       this._componentUI = fgui.UIPackage.createObject("IMPakcageUI", this._componentId) as T;
       this.addChild(this._componentUI);
       this._componentUI.makeFullScreen();
       this.notifyComplete();
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

    recycle() 
    {
            this.removeEvents();
            this.removeFunctions();
    }

    public addEventListener(key:any, method:Function, caller:any, once?:boolean):void
    {
            let flag:Boolean = key in this._eventMap;
            if (!flag)
            {
                    this._eventMap[key] = method;
                    c.JTEventManager.addEventListener(key, method, caller, once);
            }       
    }

    public dispatchEvent(key:any, args?:any):void
    {
            key in this._eventMap &&  c.JTEventManager.dispatchEvent(key, args);
    }

    public removeEventListener(key:any, method:Function, caller:any):void
    {
            let fun:Function = this._eventMap[key]
            fun = null;
            this._eventMap[key] = null;
            delete this._eventMap[key]
            c.JTEventManager.removeEventListener(key, method, caller);
    }

    protected removeEvents() 
    {
            var caller:any = this;
            for (var key in this._eventMap)
            {
                    this.removeFunction(key, this._eventMap[key], caller)
            }
            this._eventMap = {};
    }

    public registerFunction(key:any, method:Function, caller:any, once?:boolean):void
    {
            let flag:Boolean = key in this._functionMap;
            if (!flag)
            {
                    this._functionMap[key] = method;
                    c.JTFunctionManager.registerFunction(key, method, caller, once);
            }       
    }

    public execute(key:any, args?:any):void
    {
            key in this._functionMap &&  c.JTFunctionManager.execute(key, args);
    }

    public removeFunction(key:any, method:Function, caller:any):void
    {
            let fun:Function = this._functionMap[key]
            fun = null;
            this._functionMap[key] = null;
            delete this._functionMap[key]
            c.JTFunctionManager.removeFunction(key, method, caller);
    }

    protected removeFunctions() 
    {
            var caller:any = this;
            for (var key in this._functionMap)
            {
                    this.removeFunction(key, this._functionMap[key], caller)
            }
            this._functionMap = {};
    }
}
