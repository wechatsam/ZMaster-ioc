"use strict";
cc._RF.push(module, '769dcaptIVNVqT5iULveIJ1', 'JTTimer');
// Script/src/time/base/JTTimer.ts

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
        var JTTimer = (function (_super) {
            __extends(JTTimer, _super);
            function JTTimer(interval, loop) {
                if (interval === void 0) { interval = 0; }
                if (loop === void 0) { loop = 0; }
                return _super.call(this, interval, loop) || this;
            }
            JTTimer.prototype.setup = function (interval, loop) {
                if (loop === void 0) { loop = 0; }
                this.reset();
                this._totalTimes = loop;
                this._interval = interval;
            };
            JTTimer.prototype.start = function () {
                this._running = true;
                JTTimerTool.defaultTimer.addTask(this);
            };
            JTTimer.prototype.stop = function () {
                this._running = false;
            };
            Object.defineProperty(JTTimer.prototype, "totalCount", {
                get: function () {
                    return this._totalTimes;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTTimer.prototype, "currentCount", {
                get: function () {
                    return this._currentTimes;
                },
                set: function (value) {
                    this._currentTimes = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTTimer.prototype, "interval", {
                get: function () {
                    return this._interval;
                },
                set: function (value) {
                    this._interval = value;
                },
                enumerable: false,
                configurable: true
            });
            JTTimer.create = function (interval, loop) {
                var timer = JTPool.instance(JTTimer).get();
                timer.setup(interval, loop);
                return timer;
            };
            JTTimer.put = function (timer) {
                JTTimerTool.defaultTimer.removeTask(timer);
                JTPool.instance(JTTimer).put(timer);
            };
            return JTTimer;
        }(JTTimerTask));
        com.JTTimer = JTTimer;
    })(com || (com = {}));
});

cc._RF.pop();