declare namespace com {
    /***
     * 跳帧-又称帧同步
     * 不管系统是否出现延迟，使用JTSyncFrame都将算出最新动画帧数索引
        let gotoFrame:c.JTGotoFrame = c.JTGotoFrame.create();
        gotoFrame.addEventListener(c.JTTimeEvent.ENTER_FRAME, this.onEnterFrameHandler, this);
        gotoFrame.addEventListener(c.JTTimeEvent.SYNC_FRAME, this.onSyncFrame, this);
        gotoFrame.addEventListener(c.JTTimeEvent.ENTER_LAST_FRAME, this.onEnterFrameHandler, this);
        gotoFrame.addEventListener(c.JTTimeEvent.ENTER_COMPLETE, this.onEnterFrameHandler, this);
        gotoFrame.play(10, 10, 0);
   }

   protected onSyncFrame(gotoFrame:c.JTGotoFrame): void
   {
       c.JTLogger.info("jumpFrame for : " + enterFrame.jumpFrame);
   }
    

    protected onEnterFrameHandler(gotoFrame:c.JTIEnterFrame): void
    {
        c.JTLogger.info("currentFrame for : " + enterFrame.currentFrame);
    }

        
     ***/
    class JTJumpFrame extends JTEnterFrame implements JTIJumpFrame {
        private _jumpFrames;
        constructor();
        /**
         * 获取当前跳了多帧数
         */
        get jumpFrames(): number;
        updateTick(tick: number): void;
        static create(): JTIJumpFrame;
        static put(timer: JTIJumpFrame): void;
    }
}
