// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { error, info } from "./common/JTFunctionUtils";
import JTLoadTask from "./common/JTLoadTask";
import JTUserInfo from "./gamedatas/JTUserInfo";
import JTApplication from "./JTApplication";
import JTFriendInfoManager from "./managers/JTFriendInfoManager";
import JTLayerManager from "./managers/JTLayerManager";
import JTResponseMapping from "./managers/JTResponseMapping";
import JTSceneManager from "./managers/JTSceneManager";
import JTTemplateManager from "./managers/JTTemplateManager";
import JTUserInfoManager from "./managers/JTUserInfoManager";
import JTConnectionManager from "./networks/JTConnectionManager";
import JTProtocolErrorMessage from "./networks/JTProtocolErrorMessage";
import JTProtocolManager from "./networks/JTProtocolManager";

const {ccclass, property} = cc._decorator;

@ccclass

// @c.SingletonClass(Mains)
export default class Mains extends cc.Component 
{
 
    @c.SingletonPool(c.JTPool, c.JTDataInfo)
    private pool:c.JTIPool;
    start ()
    {
 
        c.JTApplicationContext.run(Mains);
        c.JTTimerTool.launch();
        cc.loader.loadResDir("settings/", cc.TextAsset, this.loadTextComplete.bind(this)); //
    }

    protected update(dt: number): void 
    {
        c.JTTimerTool.actives();
    }

    @c.Qualifier("dddddd")
    @c.Autowired
    protected cccccccccc:c.JTIPool
  
    

    
    private async loadTextComplete(err:any, resources:any)
    {
        if (err)
        {
                error("load text error!");
        }


        info(this.cccccccccc);
        let application:JTApplication = new JTApplication();
        // application.preloadAssets();
        // await application.load();
        // application.preloadAssets();
        // await application.load();

        application.option(c.JTApplicationBootstrap.CONTEXT_PROTOCOL, new JTProtocolManager());
        application.option(c.JTApplicationBootstrap.CONTEXT_ERROR_MESSAGE, new JTProtocolErrorMessage());
        application.option(c.JTApplicationBootstrap.CONTEXT_LAYER, new JTLayerManager());
        application.option(c.JTApplicationBootstrap.CONTEXT_MAPPING, new JTResponseMapping());
        application.option(c.JTApplicationBootstrap.CONTEXT_SCENE, new JTSceneManager());
        application.layout(c.JTLayout.LAYOUT_VERTICAL);
        application.option(c.JTApplicationBootstrap.CONTEXT_TEMPLATE, JTTemplateManager.instance); //注入单例
        application.updateConfigs(resources);
        application.configServerTemaplete(JTTemplateManager.instance.serverLoader,  "httpServer");
        application.channelGroup(new JTConnectionManager());
        // application.channel(new c.JTHttpChannel(c.JTHttpRequest));
        // application.channel(new c.JTWebSocketChannel(c.JTWebSocket));
        // application.childOption(c.JTChannelContext.IDLE, new c.JTIdleStateAdapter());
        // application.childOption(c.JTChannelContext.ENCODE, new c.JTEncodeToJSONAdapter());
        // application.childOption(c.JTChannelContext.DECODE, new c.JTDecoderToJSONAdapter());
        application.connect();
        application.launch();

   

        // await application.test2();
        // application.test3();

        
        // let localServerConfig:JTServerConfigTemplate = JTTemplateManager.instance.serverLoader.toValue("testServer");//测试服务器地址
        // application.connect(localServerConfig.host, localServerConfig.port);
       


        // JTApplicationBoot.launch();
        // let locker:c.JTLocker = new c.JTLocker();
        // for (let i:number = 0; i < 500; i++)
        // {
        //     if (i >= 20)
        //     {
        //         info("start lock_________________________")
        //        await locker.lock();
        //     }
        //     info("start counter: " + i)
        // }


        // //注册全局函数
        // c.JTFunctionManager.registerFunction("10000", test, this)

        
        // function test(result:any):void
        // {
        //     console.info(result)
        // }

        // //执行全局函数
        // c.JTFunctionManager.execute("10000", "hello world!")

        // let taskPipeline:c.JTFuturePipeline = new c.JTFuturePipeline([1000, 200, 111, 2222, 1111, 23333]);
        // taskPipeline.itemRender = c.JTCommand.create(this,  createTaskHandler);
        // taskPipeline.addEventListener(c.JTTaskEvent.TASK_PROGRESS, onTaskProgress, this);
        // taskPipeline.addEventListener(c.JTTaskEvent.TASK_COMPLETE, onTaskComplete, this);
        // taskPipeline.run();

        // function onTaskProgress(task:c.JTFuturePipeline):void
        // {
        //     let counter:c.JTTaskCounter = task.counter;
        //     info("完成任务数量" + counter.lockedCount + "           当前进度为 :" + counter.progress + "%")
        // }

        // function onTaskComplete(task:c.JTFuturePipeline):void
        // {
        //     let counter:c.JTTaskCounter = task.counter;
        //     info("完成任务数量" + counter.lockedCount + "           当前进度为 :" + counter.progress + "%")
        // }

        // function createTaskHandler(index:number, data:any):c.JTITaskExecutor
        // {
        //     return new JTLoadTask();
        // }

        
        // JTLanguageTemplate.registerAliasLanguage(JTLanguageTemplate.)//国际化
        // JTTemplateInfoManager.instance.languageLoader = JTTemplateInfoManager.putConfigs("txt_language", JTLanguageTemplate, resources);
        // JTTemplateInfoManager.instance.serverLoader = JTTemplateInfoManager.putConfigs("txt_server", JTServerConfigTemplate, resources);
        

        // let localServerConfig:JTServerConfigTemplate = JTTemplateInfoManager.instance.serverLoader.toValue("localServer");//默认服务器地址
        JTTemplateManager.instance.languageLoader.toValues();
        // let channelPipeline:c.JTChannelPipeline = new c.JTChannelPipeline();
        // channelPipeline.bind(new c.JTWebSocketChannel(com.JTWebSocket))  as c.JTWebSocketChannel;
        // channelPipeline.addAdapter(c.JTChannelAdapter.ENCODE, new c.JTEncodeToJSONAdapter());
        // channelPipeline.addAdapter(c.JTChannelAdapter.DECODE, new c.JTDecoderToJSONAdapter());
        // channelPipeline.launch(localServerConfig.host, localServerConfig.port);

    
        // let timerA:c.JTITimer = c.JTTimer.create(1000, 0);
        // timerA.addEventListener(c.JTTimeEvent.TIMER, this.onTimerHandler, this);
        // timerA.addEventListener(c.JTTimeEvent.TIMER_COMPLETE, this.onTimerComplete, this);
        // timerA.start();

        // let timer:c.JTITimer = c.JTTimer.create(500, 99999999);
        // timer.addEventListener(c.JTTimeEvent.TIMER, this.onTimerHandler, this);
        // timer.addEventListener(c.JTTimeEvent.TIMER_COMPLETE, this.onTimerComplete, this);
        // timer.start();
        

        // let scheduleFrame:c.JTIScheduleFrame = c.JTScheduleFrame.create();
        // scheduleFrame.createFrames = c.JTCommand.create(this, this.onCreateFrames);
        // scheduleFrame.addEventListener(c.JTTimeEvent.ENTER_FRAME, this.onEnterFrameHandler, this);
        // scheduleFrame.addEventListener(c.JTTimeEvent.ENTER_COMPLETE, this.onEnterFrameHandler, this);
        // scheduleFrame.play(1000, 10, 60);
   }

   protected onCreateFrames(frameCount:number):any[]
   {
        let list:any[] = [];
        for (let i:number = 0; i < frameCount; i++)
        {
            list.push(i)
        }
        return list;
   }


   protected onEnterFrameHandler(enterFrame:c.JTIScheduleFrame): void
   {
    //   c.JTLogger.info("scheduleFrame for : " + enterFrame.currentItem);
   }

//    protected onSyncFrame(enterFrame:c.JTIScheduleFrame): void
//    {
//        c.JTLogger.info("scheduleFrame for : " + enterFrame.currentItem);
//    }
    

    // protected onEnterFrameHandler(enterFrame:c.JTIScheduleFrame): void
    // {
    //     c.JTLogger.info("scheduleFrame for : " + enterFrame.currentFrame);
    // }
     
    protected onTimerHandler(timer:c.JTTimer):void
    {
        if (timer.totalCount == 0)
        {
            c.JTLogger.info("currentTime     Timer A    : " +   timer.currentCount);
        }
        else
        {
            c.JTLogger.info("currentTime     Timer B    : " +   timer.currentCount);
        }

    }

    protected onTimerComplete(timer:c.JTTimer): void
    {
        if (timer.totalCount != 0)
        {
            // c.JTLogger.info("currentTime     Timer B    : " +   timer.currentCount);
            // timer.reset();
            // timer.start();
        }
    }
 
    // @c.Response(JTDownProtocol.LOGIN)
    protected onConnectSucceed(): void
    {
        
    }
}
