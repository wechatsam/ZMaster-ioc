import JTSceneManager from "../managers/JTSceneManager";
import JTComponent from "./JTComponent";

export default class JTScene<T extends fgui.GComponent> extends JTComponent<T>
{
    public constructor()
    {
        super();
    }

    // protected override get layerType():string
    // {
    //     this._layerType = JTSceneManager.LAYER_SCENE;
    //     return this._layerType;
    // }

    protected notifyComplete(): void 
    {
        super.notifyComplete();
        this.registerListener();
        // this.x  = this.y = 0;
    }
}
