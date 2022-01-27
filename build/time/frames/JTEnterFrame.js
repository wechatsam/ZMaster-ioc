"use strict";
var com;
(function (com) {
    //传统帧事件
    class JTEnterFrame extends com.JTTaskTimer {
        constructor() {
            super(0, 0);
            this._frameRate = 0;
            this._loop = 0;
            this._loopTimes = 0;
        }
        get loop() {
            return this._loop;
        }
        get frameRate() {
            return this._frameRate;
        }
        setup(totalFrames, loop = 0, frameRate = 60) {
            this._loopTimes = 0;
            this._loop = loop;
            this._frameRate = frameRate;
            this._totalTimes = totalFrames;
            this._interval = 1000 / frameRate;
        }
        play(totalFrames, loop = 0, frameRate = 60) {
            this._running = true;
            this.setup(totalFrames, loop, frameRate);
            com.JTTimerTool.animationTimer.addTask(this); //加入到动画对列里
        }
        gotoAndPlay(frameRate, loop = 1) {
        }
        gotoAndStop() {
        }
        stop() {
            this._running = false;
        }
        pause() {
            this._running = false;
        }
        get currentLoop() {
            return this._loopTimes;
        }
        get currentFrame() {
            return this._currentTimes;
        }
        get totalFrame() {
            return this._totalTimes;
        }
        updateTick(tick) {
            this._currentTick += tick; //叠加时间
            let count = Math.floor(this._currentTick / this._interval); //取最小延迟次数
            if (count > 0) //延迟次数
             {
                for (let i = 0; i < count; i++) {
                    this._currentTimes++;
                    this._currentTick -= this._interval;
                    this.dispatchEvent(com.JTTimeEvent.ENTER_FRAME, this);
                    if (this._currentTimes >= this._totalTimes) {
                        this._loopTimes++;
                        if (this._loop == 0)
                            this._currentTimes = 0;
                        else {
                            if (this._loopTimes >= this._loop && this._loop != 0) {
                                this._running = false;
                                this.dispatchEvent(com.JTTimeEvent.ENTER_COMPLETE, this);
                                break;
                            }
                            else {
                                this._currentTimes = 0;
                                this.dispatchEvent(com.JTTimeEvent.ENTER_LAST_FRAME, this);
                            }
                        }
                    }
                }
            }
        }
        static create() {
            let timer = com.JTPool.instance(JTEnterFrame).get();
            return timer;
        }
        static put(timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTEnterFrame).put(timer);
        }
    }
    com.JTEnterFrame = JTEnterFrame;
})(com || (com = {}));
