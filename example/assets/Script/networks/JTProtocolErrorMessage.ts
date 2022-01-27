import { info } from "../common/JTFunctionUtils";
import JTUserInfo from "../gamedatas/JTUserInfo";
import JTProcotolErrorCode from "./JTProcotolErrorCode";
 
export default class JTProtocolErrorMessage extends c.JTAbstractProtocolErrorMessage
{
    buildComplete(): void 
    {
    }
    
    public checkPackageStatus(receivePackage:com.JTIReceivePackage):boolean
    {
        return receivePackage.status == com.JTProtocol.NORMAL;
    }

    public showErrorMessage(receivePackage:com.JTIReceivePackage):void
    {
            let errorCode:number = receivePackage.errorCode;
            switch(errorCode)
            {
                case JTProcotolErrorCode.PASSWROD_ERROR:
                {
                    info("帐号或密码错误!");
                    break;
                }
                case JTProcotolErrorCode.ACCOUNT_UNREGISTER:
                {
                    info("帐号未注册!");
                    break;
                }
                case JTProcotolErrorCode.ACCOUNT_REGISTERED:
                {
                    info("该帐号已经被注册了!");
                    break;
                }
                case JTProcotolErrorCode.ACCOUNT_FREEZE:
                {
                    info("帐号被冻结了!");
                    break;
                }
            }
         
    }
}
 
