"use strict";
var com;
(function (com) {
    class JTOptimizeFrame extends com.JTEnterFrame {
        constructor() {
            super();
            this.MAX_DELAY_TIME = 500;
        }
        updateTick(tick) {
            this._currentTick += tick;
            if (tick >= this.MAX_DELAY_TIME) {
                this.adjustFrameRate(com.JTTimerTool.SLOWY_FRAME_RATE);
            }
        }
        adjustFrameRate(frameRate) {
            this._frameRate = frameRate;
            this._interval = 1000 / this._frameRate;
        }
    }
    com.JTOptimizeFrame = JTOptimizeFrame;
})(com || (com = {}));
