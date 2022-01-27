import JTGroupMemeberInfo from "./JTGroupMemeberInfo";

export default abstract class JTAbstractUserInfo extends JTGroupMemeberInfo
{
        public phone:number = 0;
        public email:string = null;
        public sgin:string = null;
        public male:string = null;
        public rqcode:string = null;
        constructor()
        {
                super();
        }
}
