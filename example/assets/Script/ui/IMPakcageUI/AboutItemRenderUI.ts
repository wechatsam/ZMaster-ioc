/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class AboutItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public static URL:string = "ui://cyg1nxypf3bc1u";

	public static createInstance():AboutItemRenderUI {
		return <AboutItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "AboutItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
	}
}