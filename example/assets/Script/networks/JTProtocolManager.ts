import JTDownProtocol from "./JTDownProtocol";
import JTUpProtocol from "./JTUpProtocol";

export default class JTProtocolManager extends c.JTAbstractProtocolManager
{
        buildComplete(): void 
        {
        }
        
        public build():void 
        {
            this.bind(JTUpProtocol, JTDownProtocol);

            this.protocolUp.registerProtocol(JTUpProtocol.LOGIN, true);
            this.protocolUp.registerProtocol(JTUpProtocol.REGISTER, true);
            this.protocolUp.registerProtocol(JTUpProtocol.USER_REGISTER, true);
            this.protocolUp.registerProtocol(JTUpProtocol.SEARCH_FRIEND, true);
            this.protocolUp.registerProtocol(JTUpProtocol.REQUEST_ADD_FRIEND, true);
            this.protocolUp.registerProtocol(JTUpProtocol.AGREE_WITH_FRIENDS, true);

            this.registerDownProtocol(JTDownProtocol.LOGIN, true);
            this.registerDownProtocol(JTDownProtocol.REGISTER, true);
            this.registerDownProtocol(JTUpProtocol.USER_REGISTER, true);
            this.registerDownProtocol(JTUpProtocol.SEARCH_FRIEND, true);
            this.registerDownProtocol(JTUpProtocol.REQUEST_ADD_FRIEND, true);
            this.registerDownProtocol(JTUpProtocol.AGREE_WITH_FRIENDS, true);

         
            
        }
}
 
