/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import mc_profile_content from "./mc_profile_content";

export default class ProfileSceneUI extends fgui.GComponent {

	public mc_profile:mc_profile_content;
	public static URL:string = "ui://cyg1nxypf3bc2c";

	public static createInstance():ProfileSceneUI {
		return <ProfileSceneUI>(fgui.UIPackage.createObject("IMPakcageUI", "ProfileSceneUI"));
	}

	protected onConstruct():void {
		this.mc_profile = <mc_profile_content>(this.getChild("mc_profile"));
	}
}