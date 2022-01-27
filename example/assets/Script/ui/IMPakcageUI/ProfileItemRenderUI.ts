/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ProfileItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public txt_moment:fgui.GTextField;
	public static URL:string = "ui://cyg1nxypf3bc20";

	public static createInstance():ProfileItemRenderUI {
		return <ProfileItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "ProfileItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
		this.txt_moment = <fgui.GTextField>(this.getChild("txt_moment"));
	}
}