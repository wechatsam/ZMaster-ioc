"use strict";
var com;
(function (com) {
    /**
     * 帧均摊--利用帧频间隔来进行渲染图像/或者计算数据
     *
     */
    class JTScheduleFrame extends com.JTEnterFrame {
        constructor() {
            super();
            this._frames = null;
            this._createFrames = null;
        }
        get currentItem() {
            return this._frames[this._currentTimes - 1 < 0 ? 0 : this._currentTimes - 1];
        }
        get frames() {
            return this._frames;
        }
        set createFrames(value) {
            this._createFrames = value;
        }
        play(totalFrames, loop = 0, frameRate = 60) {
            this._running = true;
            this.setup(totalFrames, loop, frameRate);
            this._frames = this._createFrames.runWith(totalFrames);
            com.JTTimerTool.animationTimer.addTask(this); //加入到动画对列里
        }
        recycle() {
            super.recycle();
            this._frames = null;
        }
        static create() {
            let frame = com.JTPool.instance(JTScheduleFrame).get();
            return frame;
        }
        static put(timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTScheduleFrame).put(timer);
        }
    }
    com.JTScheduleFrame = JTScheduleFrame;
})(com || (com = {}));
