"use strict";
cc._RF.push(module, '58b6bJkCvVK3JDVS9WImHVI', 'JTScheduleTimer');
// Script/src/time/timers/JTScheduleTimer.ts

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
        var JTScheduleTimer = (function (_super) {
            __extends(JTScheduleTimer, _super);
            function JTScheduleTimer(interval, dataList) {
                if (interval === void 0) { interval = 0; }
                var _this = _super.call(this, interval, dataList.length) || this;
                _this._dataList = null;
                _this._dataList = dataList;
                return _this;
            }
            JTScheduleTimer.prototype.setup = function (interval) {
                this.reset();
                this._totalTimes = this._dataList.length;
                this._interval = interval;
            };
            Object.defineProperty(JTScheduleTimer.prototype, "currentItem", {
                get: function () {
                    return this._dataList[this.currentCount - 1];
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTScheduleTimer.prototype, "dataList", {
                get: function () {
                    return this._dataList;
                },
                enumerable: false,
                configurable: true
            });
            JTScheduleTimer.prototype.recycle = function () {
                _super.prototype.recycle.call(this);
                this._dataList = null;
            };
            JTScheduleTimer.create = function (interval, loop) {
                var timer = JTPool.instance(JTScheduleTimer).get();
                timer.setup(interval, loop);
                return timer;
            };
            JTScheduleTimer.put = function (timer) {
                JTTimerTool.defaultTimer.removeTask(timer);
                JTPool.instance(JTScheduleTimer).put(timer);
            };
            return JTScheduleTimer;
        }(JTTimer));
        com.JTScheduleTimer = JTScheduleTimer;
    })(com || (com = {}));
});

cc._RF.pop();