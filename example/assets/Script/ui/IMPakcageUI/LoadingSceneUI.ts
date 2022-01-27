/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LoadingSceneUI extends fgui.GComponent {

	public img_loading:fgui.GImage;
	public static URL:string = "ui://cyg1nxypev0z2t";

	public static createInstance():LoadingSceneUI {
		return <LoadingSceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "LoadingSceneUI"));
	}

	protected onConstruct():void {
		this.img_loading = <fgui.GImage>(this.getChild("img_loading"));
	}
}