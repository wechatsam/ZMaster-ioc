import { info } from "../common/JTFunctionUtils";
import JTUserInfo from "../gamedatas/JTUserInfo";

export default class JTUserInfoManager extends com.JTDataInfoManager
{
    @c.Qualifier("__userInfo")
    @c.Autowired
    public userInfo:JTUserInfo = null;
    constructor()
    {
        super();
    }
}
 
