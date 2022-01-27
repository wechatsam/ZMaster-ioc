/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class mc_contact_panel extends fgui.GComponent {

	public mc_friends:fgui.GList;
	public static URL:string = "ui://cyg1nxypf3bc2i";

	public static createInstance():mc_contact_panel {
		return <mc_contact_panel>(fgui.UIPackage.createObject("IMPakcageUI", "mc_contact_panel"));
	}

	protected onConstruct():void {
		this.mc_friends = <fgui.GList>(this.getChild("mc_friends"));
	}
}