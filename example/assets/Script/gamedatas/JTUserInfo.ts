import JTAbstractUserInfo from "./JTAbstractUserInfo";
import JTFriendInfo from "./JTFriendInfo";

 

export  default class JTUserInfo extends JTAbstractUserInfo
{
        public groupInfos:any[] = null;
        public dialogChats:any[] = null;
        public friendInfos:JTFriendInfo[] = null;
        
        @c.Qualifier("__userInfo")
        @c.Autowired 
        static instance:JTUserInfo = null;
        constructor()
        {
                super();
                this.friendInfos = [];
        }

        @c.Qualifier("__userInfo")
        @c.Bean
        public userInfo():JTUserInfo
        {
            return new JTUserInfo();
        }
}
