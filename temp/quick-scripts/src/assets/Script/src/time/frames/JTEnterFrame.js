"use strict";
cc._RF.push(module, 'c6c7eUMw2JKjJ87X/MV8bL1', 'JTEnterFrame');
// Script/src/time/frames/JTEnterFrame.ts

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
        var JTEnterFrame = (function (_super) {
            __extends(JTEnterFrame, _super);
            function JTEnterFrame() {
                var _this = _super.call(this, 0, 0) || this;
                _this._frameRate = 0;
                _this._loop = 0;
                _this._loopTimes = 0;
                _this.SECOND_INTERVAL = 1000;
                _this.DEFAULT_FRAME_RATE = 60;
                _this.DEFAULT_FRAME_RATE_TIME = 16;
                return _this;
            }
            Object.defineProperty(JTEnterFrame.prototype, "loop", {
                get: function () {
                    return this._loop;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTEnterFrame.prototype, "frameRate", {
                get: function () {
                    return this._frameRate;
                },
                enumerable: false,
                configurable: true
            });
            JTEnterFrame.prototype.setup = function (totalFrames, loop, frameRate) {
                if (loop === void 0) { loop = 0; }
                if (frameRate === void 0) { frameRate = 60; }
                this._loopTimes = 0;
                this._loop = loop;
                this._totalTimes = totalFrames;
                this.adjustFrameRate(frameRate);
            };
            JTEnterFrame.prototype.play = function (totalFrames, loop, frameRate) {
                if (loop === void 0) { loop = 0; }
                if (frameRate === void 0) { frameRate = 60; }
                this._running = true;
                this.setup(totalFrames, loop, frameRate);
                JTTimerTool.animationTimer.addTask(this);
            };
            JTEnterFrame.prototype.adjustFrameRate = function (value) {
                this._interval = value == this.DEFAULT_FRAME_RATE ? this.DEFAULT_FRAME_RATE_TIME : this.SECOND_INTERVAL / value;
                this._frameRate = value;
            };
            JTEnterFrame.prototype.stop = function () {
                this._running = false;
            };
            JTEnterFrame.prototype.pause = function () {
                this._running = false;
            };
            Object.defineProperty(JTEnterFrame.prototype, "currentLoop", {
                get: function () {
                    return this._loopTimes;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTEnterFrame.prototype, "currentFrame", {
                get: function () {
                    return this._currentTimes;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTEnterFrame.prototype, "totalFrame", {
                get: function () {
                    return this._totalTimes;
                },
                enumerable: false,
                configurable: true
            });
            JTEnterFrame.prototype.updateTick = function (tick) {
                this._currentTick += tick;
                var count = Math.floor(this._currentTick / this._interval);
                if (count > 0) {
                    for (var i = 0; i < count; i++) {
                        this._currentTimes++;
                        this._currentTick -= this._interval;
                        this.dispatchEvent(JTTimeEvent.ENTER_FRAME, this);
                        if (this._currentTimes >= this._totalTimes) {
                            this._loopTimes++;
                            if (this._loop == 0)
                                this._currentTimes = 0;
                            else {
                                if (this._loopTimes >= this._loop && this._loop != 0) {
                                    this._running = false;
                                    this.dispatchEvent(JTTimeEvent.ENTER_COMPLETE, this);
                                    break;
                                }
                                else {
                                    this._currentTimes = 0;
                                    this.dispatchEvent(JTTimeEvent.ENTER_LAST_FRAME, this);
                                }
                            }
                        }
                    }
                }
            };
            JTEnterFrame.create = function () {
                var timer = JTPool.instance(JTEnterFrame).get();
                return timer;
            };
            JTEnterFrame.put = function (timer) {
                JTTimerTool.defaultTimer.removeTask(timer);
                JTPool.instance(JTEnterFrame).put(timer);
            };
            return JTEnterFrame;
        }(JTTimerTask));
        com.JTEnterFrame = JTEnterFrame;
    })(com || (com = {}));
});

cc._RF.pop();