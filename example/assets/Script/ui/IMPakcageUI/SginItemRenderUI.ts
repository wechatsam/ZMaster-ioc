/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class SginItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public static URL:string = "ui://cyg1nxypf3bc2a";

	public static createInstance():SginItemRenderUI {
		return <SginItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "SginItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
	}
}