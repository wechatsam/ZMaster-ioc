/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import mc_notice from "./mc_notice";

export default class PhoneItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public mc_notice:mc_notice;
	public static URL:string = "ui://cyg1nxypf3bc2e";

	public static createInstance():PhoneItemRenderUI {
		return <PhoneItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "PhoneItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
		this.mc_notice = <mc_notice>(this.getChild("mc_notice"));
	}
}