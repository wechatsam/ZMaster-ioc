/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import ProfileItemRenderUI from "./ProfileItemRenderUI";
import WalletItemRenderUI from "./WalletItemRenderUI";
import SginItemRenderUI from "./SginItemRenderUI";
import SeurityItemRenderUI from "./SeurityItemRenderUI";
import FeedbackItemRenderUI from "./FeedbackItemRenderUI";
import AboutItemRenderUI from "./AboutItemRenderUI";
import SettingtemRenderUI from "./SettingtemRenderUI";

export default class mc_profile_content extends fgui.GComponent {

	public mc_profile:ProfileItemRenderUI;
	public mc_wallet:WalletItemRenderUI;
	public mc_sgin:SginItemRenderUI;
	public mc_seurity:SeurityItemRenderUI;
	public mc_feedback:FeedbackItemRenderUI;
	public mc_about:AboutItemRenderUI;
	public mc_settings:SettingtemRenderUI;
	public static URL:string = "ui://cyg1nxypf3bc2j";

	public static createInstance():mc_profile_content {
		return <mc_profile_content>(fgui.UIPackage.createObject("IMPakcageUI", "mc_profile_content"));
	}

	protected onConstruct():void {
		this.mc_profile = <ProfileItemRenderUI>(this.getChild("mc_profile"));
		this.mc_wallet = <WalletItemRenderUI>(this.getChild("mc_wallet"));
		this.mc_sgin = <SginItemRenderUI>(this.getChild("mc_sgin"));
		this.mc_seurity = <SeurityItemRenderUI>(this.getChild("mc_seurity"));
		this.mc_feedback = <FeedbackItemRenderUI>(this.getChild("mc_feedback"));
		this.mc_about = <AboutItemRenderUI>(this.getChild("mc_about"));
		this.mc_settings = <SettingtemRenderUI>(this.getChild("mc_settings"));
	}
}