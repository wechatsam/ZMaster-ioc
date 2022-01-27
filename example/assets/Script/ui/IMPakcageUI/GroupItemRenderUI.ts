/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import mc_notice from "./mc_notice";

export default class GroupItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public txt_message:fgui.GTextField;
	public txt_time:fgui.GTextField;
	public mc_notice:mc_notice;
	public static URL:string = "ui://cyg1nxyptp67x";

	public static createInstance():GroupItemRenderUI {
		return <GroupItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "GroupItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
		this.txt_message = <fgui.GTextField>(this.getChild("txt_message"));
		this.txt_time = <fgui.GTextField>(this.getChild("txt_time"));
		this.mc_notice = <mc_notice>(this.getChild("mc_notice"));
	}
}