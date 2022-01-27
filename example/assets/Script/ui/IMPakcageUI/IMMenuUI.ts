/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class IMMenuUI extends fgui.GComponent {

	public menu:fgui.Controller;
	public img_menu_background:fgui.GGraph;
	public btn_disconver:fgui.GButton;
	public btn_contact:fgui.GButton;
	public btn_message:fgui.GButton;
	public btn_explorer:fgui.GButton;
	public btn_profile:fgui.GButton;
	public static URL:string = "ui://cyg1nxypsz980";

	public static createInstance():IMMenuUI {
		return <IMMenuUI>(fgui.UIPackage.createObject("IMPakcageUI", "IMMenuUI"));
	}

	protected onConstruct():void {
		this.menu = this.getController("menu");
		this.img_menu_background = <fgui.GGraph>(this.getChild("img_menu_background"));
		this.btn_disconver = <fgui.GButton>(this.getChild("btn_disconver"));
		this.btn_contact = <fgui.GButton>(this.getChild("btn_contact"));
		this.btn_message = <fgui.GButton>(this.getChild("btn_message"));
		this.btn_explorer = <fgui.GButton>(this.getChild("btn_explorer"));
		this.btn_profile = <fgui.GButton>(this.getChild("btn_profile"));
	}
}