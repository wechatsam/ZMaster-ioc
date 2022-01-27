/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class MessageSceneUI extends fgui.GComponent {

	public mc_message_list:fgui.GList;
	public btn_add:fgui.GButton;
	public static URL:string = "ui://cyg1nxyptp67p";

	public static createInstance():MessageSceneUI {
		return <MessageSceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "MessageSceneUI"));
	}

	protected onConstruct():void {
		this.mc_message_list = <fgui.GList>(this.getChild("mc_message_list"));
		this.btn_add = <fgui.GButton>(this.getChild("btn_add"));
	}
}