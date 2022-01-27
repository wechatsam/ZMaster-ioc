"use strict";
var com;
(function (com) {
    class JTTaskTimer extends com.JTEventDispatcher {
        constructor(interval = 0, loop = 0) {
            super();
            this._currentTick = 0;
            this._interval = 0;
            this._totalTimes = 0;
            this._currentTimes = 0;
            this._running = false;
            this._interval = interval;
            this._totalTimes = loop;
        }
        reset() {
            this._currentTimes = 0;
        }
        updateTick(tick) {
            this._currentTick += tick; //叠加时间
            let count = Math.floor(this._currentTick / this._interval); //取最小延迟次数
            if (count > 0) //延迟次数
             {
                let nowCount = this._currentTimes + count;
                if (nowCount >= this._totalTimes && this._totalTimes != 0) {
                    count = this._totalTimes - this._currentTimes;
                }
                for (let i = 0; i < count; i++) {
                    this._currentTimes++;
                    this._currentTick -= this._interval;
                    this.dispatchEvent(com.JTTimeEvent.TIMER, this);
                }
            }
            if (this._currentTimes >= this._totalTimes && this._totalTimes != 0) {
                this._running = false;
                this.dispatchEvent(com.JTTimeEvent.TIMER_COMPLETE, this);
            }
        }
        get running() {
            return this._running;
        }
        recycle() {
            this.removes();
            this._currentTimes = this._currentTick = this._interval = this._totalTimes = 0;
            this._running = false;
        }
    }
    com.JTTaskTimer = JTTaskTimer;
})(com || (com = {}));
