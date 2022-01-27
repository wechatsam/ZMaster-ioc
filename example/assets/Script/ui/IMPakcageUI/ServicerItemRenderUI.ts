/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import mc_notice from "./mc_notice";

export default class ServicerItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public mc_notice:mc_notice;
	public static URL:string = "ui://cyg1nxypf3bc2f";

	public static createInstance():ServicerItemRenderUI {
		return <ServicerItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "ServicerItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
		this.mc_notice = <mc_notice>(this.getChild("mc_notice"));
	}
}