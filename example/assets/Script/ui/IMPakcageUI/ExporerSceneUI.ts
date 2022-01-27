/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ExporerSceneUI extends fgui.GComponent {

	public img_background:fgui.GGraph;
	public static URL:string = "ui://cyg1nxypf3bc1m";

	public static createInstance():ExporerSceneUI {
		return <ExporerSceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "ExporerSceneUI"));
	}

	protected onConstruct():void {
		this.img_background = <fgui.GGraph>(this.getChild("img_background"));
	}
}