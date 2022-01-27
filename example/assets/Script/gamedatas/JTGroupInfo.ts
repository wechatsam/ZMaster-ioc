import JTAbstractUserInfo from "./JTAbstractUserInfo";

export  default  class JTFriendInfo extends JTAbstractUserInfo
{
        public uid:string = null;
        public nickName:string = null;
        public avatar:string = null;
        constructor()
        {
                super();
        }

        @c.Qualifier("dddddd")
        @c.Bean
        public  eventPool():c.JTIPool
        {
            return c.JTPool.instance(c.JTCommand)
        }
}
