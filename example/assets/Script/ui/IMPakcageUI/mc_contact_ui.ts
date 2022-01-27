/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class mc_contact_ui extends fgui.GComponent {

	public btn_add:fgui.GButton;
	public static URL:string = "ui://cyg1nxypf3bc1k";

	public static createInstance():mc_contact_ui {
		return <mc_contact_ui>(fgui.UIPackage.createObject("IMPakcageUI", "mc_contact_ui"));
	}

	protected onConstruct():void {
		this.btn_add = <fgui.GButton>(this.getChild("btn_add"));
	}
}