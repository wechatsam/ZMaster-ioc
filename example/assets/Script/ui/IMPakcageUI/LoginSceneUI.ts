/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LoginSceneUI extends fgui.GComponent {

	public img_background:fgui.GGraph;
	public txt_account:fgui.GTextInput;
	public txt_pwd:fgui.GTextInput;
	public btn_login:fgui.GButton;
	public btn_register:fgui.GButton;
	public txt_tip:fgui.GTextField;
	public static URL:string = "ui://cyg1nxypaoxp2m";

	public static createInstance():LoginSceneUI {
		return <LoginSceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "LoginSceneUI"));
	}

	protected onConstruct():void {
		this.img_background = <fgui.GGraph>(this.getChild("img_background"));
		this.txt_account = <fgui.GTextInput>(this.getChild("txt_account"));
		this.txt_pwd = <fgui.GTextInput>(this.getChild("txt_pwd"));
		this.btn_login = <fgui.GButton>(this.getChild("btn_login"));
		this.btn_register = <fgui.GButton>(this.getChild("btn_register"));
		this.txt_tip = <fgui.GTextField>(this.getChild("txt_tip"));
	}
}