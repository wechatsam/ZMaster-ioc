import JTUserInfo from "../gamedatas/JTUserInfo";

export default class JTProcotolErrorCode
{
    //帐号未注册
	public static ACCOUNT_UNREGISTER:number = 1001;
	//帐号或密码错误
	public static PASSWROD_ERROR:number = 1002;
	//帐号冻结
	public static ACCOUNT_FREEZE:number = 1003;
	//帐号或密码不符合规则 ---》》服务端直接强制性中断连接（非法操作）
	//public static ACCOUNT_PASSWORD_INVALID :number = 1004;
	//帐号已注册
	public static ACCOUNT_REGISTERED :number = 1005;
}
 
