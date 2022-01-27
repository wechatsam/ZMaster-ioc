/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class mc_searchs extends fgui.GComponent {

	public txt_search:fgui.GTextInput;
	public static URL:string = "ui://cyg1nxyptp6711";

	public static createInstance():mc_searchs {
		return <mc_searchs>(fgui.UIPackage.createObject("IMPakcageUI", "mc_searchs"));
	}

	protected onConstruct():void {
		this.txt_search = <fgui.GTextInput>(this.getChild("txt_search"));
	}
}