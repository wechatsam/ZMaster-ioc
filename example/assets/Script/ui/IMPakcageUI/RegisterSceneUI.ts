/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class RegisterSceneUI extends fgui.GComponent {

	public img_background:fgui.GGraph;
	public btn_register:fgui.GButton;
	public txt_nickname:fgui.GTextInput;
	public txt_pwd:fgui.GTextInput;
	public txt_tip:fgui.GTextField;
	public txt_account:fgui.GTextInput;
	public btn_login:fgui.GButton;
	public static URL:string = "ui://cyg1nxypaoxp2k";

	public static createInstance():RegisterSceneUI {
		return <RegisterSceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "RegisterSceneUI"));
	}

	protected onConstruct():void {
		this.img_background = <fgui.GGraph>(this.getChild("img_background"));
		this.btn_register = <fgui.GButton>(this.getChild("btn_register"));
		this.txt_nickname = <fgui.GTextInput>(this.getChild("txt_nickname"));
		this.txt_pwd = <fgui.GTextInput>(this.getChild("txt_pwd"));
		this.txt_tip = <fgui.GTextField>(this.getChild("txt_tip"));
		this.txt_account = <fgui.GTextInput>(this.getChild("txt_account"));
		this.btn_login = <fgui.GButton>(this.getChild("btn_login"));
	}
}