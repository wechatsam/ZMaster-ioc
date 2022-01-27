"use strict";
var com;
(function (com) {
    class JTTimer extends com.JTTaskTimer {
        constructor(interval = 0, loop = 0) {
            super(interval, loop);
        }
        setup(interval, loop = 0) {
            this.reset();
            this._totalTimes = loop;
            this._interval = interval;
        }
        start() {
            this._running = true;
            com.JTTimerTool.defaultTimer.addTask(this);
        }
        stop() {
            this._running = false;
        }
        get totalCount() {
            return this._totalTimes;
        }
        get currentCount() {
            return this._currentTimes;
        }
        set currentCount(value) {
            this._currentTimes = value;
        }
        get interval() {
            return this._interval;
        }
        set interval(value) {
            this._interval = value;
        }
        static create(interval, loop) {
            let timer = com.JTPool.instance(JTTimer).get();
            timer.setup(interval, loop);
            return timer;
        }
        static put(timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTTimer).put(timer);
        }
    }
    com.JTTimer = JTTimer;
})(com || (com = {}));
