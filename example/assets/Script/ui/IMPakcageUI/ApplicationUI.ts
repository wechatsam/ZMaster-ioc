/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import IMMenuUI from "./IMMenuUI";

export default class ApplicationUI extends fgui.GComponent {

	public pageController:fgui.Controller;
	public img_background:fgui.GGraph;
	public mc_scenes:fgui.GList;
	public mc_menus:IMMenuUI;
	public static URL:string = "ui://cyg1nxypf3bc21";

	public static createInstance():ApplicationUI {
		return <ApplicationUI>(fgui.UIPackage.createObject("IMPakcageUI", "ApplicationUI"));
	}

	protected onConstruct():void {
		this.pageController = this.getController("pageController");
		this.img_background = <fgui.GGraph>(this.getChild("img_background"));
		this.mc_scenes = <fgui.GList>(this.getChild("mc_scenes"));
		this.mc_menus = <IMMenuUI>(this.getChild("mc_menus"));
	}
}