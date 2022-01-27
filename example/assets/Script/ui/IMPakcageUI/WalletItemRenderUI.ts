/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class WalletItemRenderUI extends fgui.GComponent {

	public txt_name:fgui.GTextField;
	public static URL:string = "ui://cyg1nxypf3bc2b";

	public static createInstance():WalletItemRenderUI {
		return <WalletItemRenderUI>(fgui.UIPackage.createObject("IMPakcageUI", "WalletItemRenderUI"));
	}

	protected onConstruct():void {
		this.txt_name = <fgui.GTextField>(this.getChild("txt_name"));
	}
}