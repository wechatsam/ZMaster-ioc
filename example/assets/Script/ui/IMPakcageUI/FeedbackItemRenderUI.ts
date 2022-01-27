/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class FeedbackItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public static URL:string = "ui://cyg1nxypf3bc22";

	public static createInstance():FeedbackItemRenderUI {
		return <FeedbackItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "FeedbackItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
	}
}