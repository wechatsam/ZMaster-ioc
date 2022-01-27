import JTFriendInfoManager from "./JTFriendInfoManager";
import JTLoginInfoManager from "./JTLoginInfoManager";
import JTUserInfoManager from "./JTUserInfoManager";

export default class JTSingletonManager 
{
    @c.SingletonClass(JTSingletonManager)
    public static instance: JTSingletonManager = null;

    @c.SingletonClass(JTUserInfoManager)
    public userInfoManager: JTUserInfoManager = null;

    @c.SingletonClass(JTLoginInfoManager)
    public loginInfoManager: JTLoginInfoManager = null;
    
    @c.SingletonClass(JTFriendInfoManager)
    public friendInfoManager: JTFriendInfoManager = null;

    constructor() 
    {
 
    }

   
}
