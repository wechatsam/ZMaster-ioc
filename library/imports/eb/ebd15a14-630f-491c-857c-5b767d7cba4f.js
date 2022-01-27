"use strict";
cc._RF.push(module, 'ebd15oUYw9JHIV8W3Z9fLpP', 'JTJumpFrame');
// Script/src/time/frames/JTJumpFrame.ts

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTJumpFrame = (function (_super) {
            __extends(JTJumpFrame, _super);
            function JTJumpFrame() {
                var _this = _super.call(this) || this;
                _this._jumpFrames = 0;
                return _this;
            }
            Object.defineProperty(JTJumpFrame.prototype, "jumpFrames", {
                get: function () {
                    return this._jumpFrames;
                },
                enumerable: false,
                configurable: true
            });
            JTJumpFrame.prototype.updateTick = function (tick) {
                this._currentTick += tick;
                var times = Math.floor(this._currentTick / this._interval);
                this._jumpFrames = 0;
                if (times > 1) {
                    this._jumpFrames = times - 1;
                    var nowTimes = this._currentTimes + times;
                    var delayLoops = Math.floor(nowTimes / this._totalTimes);
                    this._loopTimes += delayLoops;
                    if (this._loop == 0) {
                        this._currentTimes = nowTimes % this._totalTimes;
                    }
                    else {
                        if (this._loopTimes >= this._loop) {
                            this._loopTimes = this._loop;
                            this._currentTimes = this._totalTimes;
                        }
                        else
                            this._currentTimes = nowTimes % this._totalTimes;
                    }
                    this.dispatchEvent(JTTimeEvent.JUMP_FRAME, this);
                    this.dispatchEvent(JTTimeEvent.ENTER_FRAME, this);
                    delayLoops >= 1 && this.dispatchEvent(JTTimeEvent.ENTER_LAST_FRAME, this);
                    if (this._loopTimes >= this._loop && this._loop != 0) {
                        this._currentTick = 0;
                        this._running = false;
                        this.dispatchEvent(JTTimeEvent.ENTER_COMPLETE, this);
                    }
                    else {
                        this._currentTick = this._currentTick % this._interval;
                    }
                }
                else if (times == 1) {
                    _super.prototype.updateTick.call(this, tick);
                }
            };
            JTJumpFrame.create = function () {
                var timer = JTPool.instance(JTJumpFrame).get();
                return timer;
            };
            JTJumpFrame.put = function (timer) {
                JTTimerTool.defaultTimer.removeTask(timer);
                JTPool.instance(JTJumpFrame).put(timer);
            };
            return JTJumpFrame;
        }(JTEnterFrame));
        com.JTJumpFrame = JTJumpFrame;
    })(com || (com = {}));
});

cc._RF.pop();