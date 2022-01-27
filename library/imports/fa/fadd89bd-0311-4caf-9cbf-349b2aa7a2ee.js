"use strict";
cc._RF.push(module, 'fadd8m9AxFMr5y/NJsqp6Lu', 'JTScheduleFrame');
// Script/src/time/frames/JTScheduleFrame.ts

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
        var JTScheduleFrame = (function (_super) {
            __extends(JTScheduleFrame, _super);
            function JTScheduleFrame() {
                var _this = _super.call(this) || this;
                _this._frames = null;
                _this._createFrames = null;
                return _this;
            }
            Object.defineProperty(JTScheduleFrame.prototype, "currentItem", {
                get: function () {
                    return this._frames[this._currentTimes - 1 < 0 ? 0 : this._currentTimes - 1];
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTScheduleFrame.prototype, "frames", {
                get: function () {
                    return this._frames;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTScheduleFrame.prototype, "createFrames", {
                set: function (value) {
                    this._createFrames = value;
                },
                enumerable: false,
                configurable: true
            });
            JTScheduleFrame.prototype.play = function (totalFrames, loop, frameRate) {
                if (loop === void 0) { loop = 0; }
                if (frameRate === void 0) { frameRate = 60; }
                this._running = true;
                this.setup(totalFrames, loop, frameRate);
                this._frames = this._createFrames.runWith(totalFrames);
                JTTimerTool.animationTimer.addTask(this);
            };
            JTScheduleFrame.prototype.recycle = function () {
                _super.prototype.recycle.call(this);
                this._frames = null;
            };
            JTScheduleFrame.create = function () {
                var frame = JTPool.instance(JTScheduleFrame).get();
                return frame;
            };
            JTScheduleFrame.put = function (timer) {
                JTTimerTool.defaultTimer.removeTask(timer);
                JTPool.instance(JTScheduleFrame).put(timer);
            };
            return JTScheduleFrame;
        }(JTEnterFrame));
        com.JTScheduleFrame = JTScheduleFrame;
    })(com || (com = {}));
});

cc._RF.pop();