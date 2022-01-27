"use strict";
var com;
(function (com) {
    class JTScheduleTimer extends com.JTTimer {
        constructor(interval = 0, dataList) {
            super(interval, dataList.length);
            this._dataList = null;
            this._dataList = dataList;
        }
        setup(interval) {
            this.reset();
            this._totalTimes = this._dataList.length;
            this._interval = interval;
        }
        get currentItem() {
            return this._dataList[this.currentCount - 1];
        }
        get dataList() {
            return this._dataList;
        }
        recycle() {
            super.recycle();
            this._dataList = null;
        }
        static create(interval, loop) {
            let timer = com.JTPool.instance(JTScheduleTimer).get();
            timer.setup(interval, loop);
            return timer;
        }
        static put(timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTScheduleTimer).put(timer);
        }
    }
    com.JTScheduleTimer = JTScheduleTimer;
})(com || (com = {}));
