/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class mc_notice extends fgui.GComponent {

	public txt_msg_count:fgui.GTextField;
	public static URL:string = "ui://cyg1nxyptp67y";

	public static createInstance():mc_notice {
		return <mc_notice>(fgui.UIPackage.createObject("IMPakcageUI", "mc_notice"));
	}

	protected onConstruct():void {
		this.txt_msg_count = <fgui.GTextField>(this.getChild("txt_msg_count"));
	}
}