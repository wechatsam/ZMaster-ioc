/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class SeurityItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public static URL:string = "ui://cyg1nxypf3bc29";

	public static createInstance():SeurityItemRenderUI {
		return <SeurityItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "SeurityItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
	}
}