/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class SettingtemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public static URL:string = "ui://cyg1nxypf3bc28";

	public static createInstance():SettingtemRenderUI {
		return <SettingtemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "SettingtemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
	}
}