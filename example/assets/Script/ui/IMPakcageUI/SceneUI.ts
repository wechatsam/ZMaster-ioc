/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class SceneUI extends fgui.GComponent {

	public img_background:fgui.GGraph;
	public static URL:string = "ui://cyg1nxypai6j2p";

	public static createInstance():SceneUI {
		return <SceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "SceneUI"));
	}

	protected onConstruct():void {
		this.img_background = <fgui.GGraph>(this.getChild("img_background"));
	}
}