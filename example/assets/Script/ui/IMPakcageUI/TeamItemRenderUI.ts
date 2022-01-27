/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import mc_notice from "./mc_notice";

export default class TeamItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public mc_notice:mc_notice;
	public static URL:string = "ui://cyg1nxypf3bc2g";

	public static createInstance():TeamItemRenderUI {
		return <TeamItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "TeamItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
		this.mc_notice = <mc_notice>(this.getChild("mc_notice"));
	}
}