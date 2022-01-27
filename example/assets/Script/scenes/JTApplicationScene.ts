import ApplicationUI from "../ui/IMPakcageUI/ApplicationUI";
import ContactSceneUI from "../ui/IMPakcageUI/ContactSceneUI";
import DisconverSceneUI from "../ui/IMPakcageUI/DisconverSceneUI";
import ExporerSceneUI from "../ui/IMPakcageUI/ExporerSceneUI";
import MessageSceneUI from "../ui/IMPakcageUI/MessageSceneUI";
import ProfileSceneUI from "../ui/IMPakcageUI/ProfileSceneUI";
import SceneLoaderUI from "../ui/IMPakcageUI/SceneLoaderUI";
import JTMessageComponent from "../components/JTMessageComponent";
import JTContactComponent from "../components/JTContactComponent";
import JTDisconverComponent from "../components/JTDisconverComponent";
import JTExplorerComponent from "../components/JTExplorerComponent";
import JTProfileComponent from "../components/JTProfileComponent";
import JTIMPackageBinder from "../binders/JTIMPackageBinder";
import { info } from "../common/JTFunctionUtils";

export default class JTApplicationScene extends c.JTScene<ApplicationUI>
{

    public constructor() 
    {
        super();
        this.loadAsset("UI/IMPakcageUI", "ApplicationUI", JTIMPackageBinder);
    }


    private components:c.JTUIComponent<fgui.GComponent>[] = [];
    protected notifyComplete(): void 
    {
        super.notifyComplete();
        this.components.push(new JTMessageComponent())
        this.components.push(new JTContactComponent())
        this.components.push(new JTExplorerComponent())
        this.components.push(new JTDisconverComponent())
        this.components.push(new JTProfileComponent())
        let mc_list:fgui.GList = this.componentUI.mc_scenes;
        // mc_list.itemProvider = this.itemProvider.bind(this);
        mc_list.itemRenderer = this.onUpdateRender.bind(this);
        // mc_list.setVirtual();
        mc_list.numItems = 5;
 
        mc_list.scrollPane.mouseWheelEnabled = false;
        mc_list.scrollPane.touchEffect = false;
    }

    protected onUpdateRender(index:number, itemRender:fgui.GObject):void
    {
        let sceneLoaderUI:SceneLoaderUI = itemRender as SceneLoaderUI;
        let mc_scenes:fgui.GList = this.componentUI.mc_scenes;
        sceneLoaderUI.setSize(mc_scenes.width, mc_scenes.height);
        sceneLoaderUI.addRelation(mc_scenes, fgui.RelationType.Height);
        let loaderUI:fgui.GLoader = sceneLoaderUI.mc_loader;
        let content:c.JTUIComponent<fgui.GComponent> = loaderUI["_content2"];
        if (content)
        {
            loaderUI["_container"].removeChild(content.node);
            loaderUI["_content2"] = null;
        }
        content = loaderUI["_content2"] = this.components[index];
        content.bindRelation(content, sceneLoaderUI, fgui.RelationType.Height);
        loaderUI["_container"].addChild(content.node);
        loaderUI["updateLayout"]();
        info("sceneLoader height: " + sceneLoaderUI.height, 
                                   "  loaderUI  height: " + loaderUI.height, "   content height: " + content.height);
    }

    protected itemProvider(index:number):string
    {
        let url:string= null;
        switch(index)
        {
            case 0:
            {
                url = MessageSceneUI.URL;
                break;
            }
            case 1:
            {
                url = ContactSceneUI.URL;
                break;
            }
            case 2:
            {
                url = ExporerSceneUI.URL;
                break;
            }
            case 3:
            {
                url = DisconverSceneUI.URL;
                break;
            }
            case 4:
            {
                url = ProfileSceneUI.URL;
                break;
            }
        }
        return url;
    }

    protected onMouseClickHandler(target: fairygui.GComponent, targetName: string):void 
    {
        var pageController:fgui.Controller = this.componentUI.pageController;
        switch (targetName) 
        {
            case "btn_message":
            {
                pageController.selectedIndex = 0;
                break;
            }
            case "btn_contact":
            {
                pageController.selectedIndex = 1;
                break;
            }
            case "btn_explorer":
            {
                pageController.selectedIndex = 2;
                break;
            }
            case "btn_disconver":
            {
                pageController.selectedIndex = 3;
                break;
            }
            case "btn_profile":
            {
                pageController.selectedIndex = 4;
                break;
            }
        }

        
    }

}
