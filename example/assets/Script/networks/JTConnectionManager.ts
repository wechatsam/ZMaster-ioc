import JTWaitingBar from "../components/JTWaitingBar";
import JTUserInfo from "../gamedatas/JTUserInfo";

// @c.Scene
// @c.Services("Class")
export default class JTConnectionManager extends c.JTChannelGroup 
{
    // @c.Scene
    // @c.Services("Property")
    private connnection:JTConnectionManager;
    constructor() 
    {
        super();
    }

    public initialize():void 
    {
        let socketPipeline:c.JTIChannelPipeline = this.setupChannel(c.JTChannelGroup.WEBSOCKET_CHANNEL, c.JTWebSocketChannel);
        socketPipeline.childOption(c.JTChannelContext.IDLE, new c.JTIdleStateAdapter());
        socketPipeline.childOption(c.JTChannelContext.ENCODE, new c.JTEncodeToJSONAdapter());
        socketPipeline.childOption(c.JTChannelContext.DECODE, new c.JTDecoderToJSONAdapter());
        socketPipeline.config("10.10.73.3", 8088).mark();

        let httpPipeline:c.JTIChannelPipeline = this.setupChannel(c.JTChannelGroup.HTTP_CHANNEL, c.JTHttpChannel);
        httpPipeline.childOption(c.JTChannelContext.ENCODE, new c.JTEncodeToJSONAdapter());
        httpPipeline.childOption(c.JTChannelContext.DECODE, new c.JTDecoderToJSONAdapter());
        httpPipeline.config("http://10.10.73.3", 8087).mark();
    }


    // @c.Scene
    // @c.Services("Method")
    public test()
    {

    }
}

function JTWebsocketChannel(JTWebsocketChannel: any, ENCODE: string, arg2: c.JTEncodeToJSONAdapter)
 {
 
}

