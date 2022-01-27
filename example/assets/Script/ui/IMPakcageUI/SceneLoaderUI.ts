/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class SceneLoaderUI extends fgui.GComponent {

	public mc_loader:fgui.GLoader;
	public static URL:string = "ui://cyg1nxyprrrq2o";

	public static createInstance():SceneLoaderUI {
		return <SceneLoaderUI>(fgui.UIPackage.createObject("IMPakcageUI", "SceneLoaderUI"));
	}

	protected onConstruct():void {
		this.mc_loader = <fgui.GLoader>(this.getChild("mc_loader"));
	}
}