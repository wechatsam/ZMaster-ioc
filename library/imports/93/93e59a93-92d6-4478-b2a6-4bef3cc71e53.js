"use strict";
cc._RF.push(module, '93e59qTktZEeLKmS+88xx5T', 'JTTimerTask');
// Script/src/time/base/JTTimerTask.ts

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
        var JTTimerTask = (function (_super) {
            __extends(JTTimerTask, _super);
            function JTTimerTask(interval, loop) {
                if (interval === void 0) { interval = 0; }
                if (loop === void 0) { loop = 0; }
                var _this = _super.call(this) || this;
                _this._currentTick = 0;
                _this._interval = 0;
                _this._totalTimes = 0;
                _this._currentTimes = 0;
                _this._running = false;
                _this._interval = interval;
                _this._totalTimes = loop;
                return _this;
            }
            JTTimerTask.prototype.reset = function () {
                this._currentTimes = 0;
            };
            JTTimerTask.prototype.updateTick = function (tick) {
                this._currentTick += tick;
                var count = Math.floor(this._currentTick / this._interval);
                if (count > 0) {
                    var nowCount = this._currentTimes + count;
                    if (nowCount >= this._totalTimes && this._totalTimes != 0) {
                        count = this._totalTimes - this._currentTimes;
                    }
                    for (var i = 0; i < count; i++) {
                        this._currentTimes++;
                        this._currentTick -= this._interval;
                        this.dispatchEvent(JTTimeEvent.TIMER, this);
                    }
                }
                if (this._currentTimes >= this._totalTimes && this._totalTimes != 0) {
                    this._running = false;
                    this.dispatchEvent(JTTimeEvent.TIMER_COMPLETE, this);
                }
            };
            Object.defineProperty(JTTimerTask.prototype, "running", {
                get: function () {
                    return this._running;
                },
                enumerable: false,
                configurable: true
            });
            JTTimerTask.prototype.recycle = function () {
                this.removes();
                this._currentTimes = this._currentTick = this._interval = this._totalTimes = 0;
                this._running = false;
            };
            return JTTimerTask;
        }(JTEventDispatcher));
        com.JTTimerTask = JTTimerTask;
    })(com || (com = {}));
});

cc._RF.pop();