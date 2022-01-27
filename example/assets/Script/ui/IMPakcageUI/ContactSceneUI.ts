/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import mc_contact_ui from "./mc_contact_ui";
import mc_contact_panel from "./mc_contact_panel";

export default class ContactSceneUI extends fgui.GComponent {

	public mc_contact_ui:mc_contact_ui;
	public mc_friends:mc_contact_panel;
	public static URL:string = "ui://cyg1nxypf3bc13";

	public static createInstance():ContactSceneUI {
		return <ContactSceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "ContactSceneUI"));
	}

	protected onConstruct():void {
		this.mc_contact_ui = <mc_contact_ui>(this.getChild("mc_contact_ui"));
		this.mc_friends = <mc_contact_panel>(this.getChild("mc_friends"));
	}
}