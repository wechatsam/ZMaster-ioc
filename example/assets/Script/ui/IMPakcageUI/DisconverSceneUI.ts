/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class DisconverSceneUI extends fgui.GComponent {

	public img_background:fgui.GGraph;
	public static URL:string = "ui://cyg1nxypf3bc1l";

	public static createInstance():DisconverSceneUI {
		return <DisconverSceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "DisconverSceneUI"));
	}

	protected onConstruct():void {
		this.img_background = <fgui.GGraph>(this.getChild("img_background"));
	}
}