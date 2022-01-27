
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/frames/JTEnterFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXGZyYW1lc1xcSlRFbnRlckZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQXVIWjtJQXZIRCxXQUFVLEdBQUc7UUFHVDtZQUFrQyxnQ0FBVztZQVF6QztnQkFBQSxZQUVJLGtCQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsU0FDZDtnQkFUUyxnQkFBVSxHQUFVLENBQUMsQ0FBQztnQkFDdEIsV0FBSyxHQUFVLENBQUMsQ0FBQztnQkFDakIsZ0JBQVUsR0FBVSxDQUFDLENBQUM7Z0JBQ3RCLHFCQUFlLEdBQVUsSUFBSSxDQUFDO2dCQUM5Qix3QkFBa0IsR0FBVSxFQUFFLENBQUM7Z0JBQy9CLDZCQUF1QixHQUFVLEVBQUUsQ0FBQzs7WUFJOUMsQ0FBQztZQUVELHNCQUFXLDhCQUFJO3FCQUFmO29CQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBVyxtQ0FBUztxQkFBcEI7b0JBRUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQixDQUFDOzs7ZUFBQTtZQUVNLDRCQUFLLEdBQVosVUFBYSxXQUFrQixFQUFFLElBQWUsRUFBRSxTQUFxQjtnQkFBdEMscUJBQUEsRUFBQSxRQUFlO2dCQUFFLDBCQUFBLEVBQUEsY0FBcUI7Z0JBRW5FLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUVNLDJCQUFJLEdBQVgsVUFBWSxXQUFrQixFQUFFLElBQWUsRUFBRSxTQUFxQjtnQkFBdEMscUJBQUEsRUFBQSxRQUFlO2dCQUFFLDBCQUFBLEVBQUEsY0FBcUI7Z0JBRWxFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFFUyxzQ0FBZSxHQUF6QixVQUEwQixLQUFZO2dCQUVsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQ2pILElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUM7WUFFTSwyQkFBSSxHQUFYO2dCQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUM7WUFFTSw0QkFBSyxHQUFaO2dCQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUM7WUFFRCxzQkFBVyxxQ0FBVztxQkFBdEI7b0JBRUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQixDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLHNDQUFZO3FCQUF2QjtvQkFFSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzlCLENBQUM7OztlQUFBO1lBRUQsc0JBQVcsb0NBQVU7cUJBQXJCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDNUIsQ0FBQzs7O2VBQUE7WUFFTSxpQ0FBVSxHQUFqQixVQUFrQixJQUFXO2dCQUV6QixJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQztnQkFDMUIsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUNiO29CQUNJLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ3JDO3dCQUNJLElBQUksQ0FBQyxhQUFhLEVBQUcsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2xELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUMxQzs0QkFDSSxJQUFJLENBQUMsVUFBVSxFQUFHLENBQUM7NEJBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO2dDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2lDQUUzQztnQ0FDSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFDcEQ7b0NBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0NBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQ0FDckQsTUFBTTtpQ0FDVDtxQ0FFRDtvQ0FDSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQ0FDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7aUNBQzFEOzZCQUNKO3lCQUNKO3FCQUNKO2lCQUNKO1lBQ0wsQ0FBQztZQUVhLG1CQUFNLEdBQXBCO2dCQUVJLElBQUksS0FBSyxHQUFpQixNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBbUIsQ0FBQztnQkFDL0UsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUVhLGdCQUFHLEdBQWpCLFVBQWtCLEtBQW1CO2dCQUVqQyxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFZLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBc0IsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFDTCxtQkFBQztRQUFELENBbEhBLEFBa0hDLENBbEhpQyxXQUFXLEdBa0g1QztRQWxIWSxnQkFBWSxlQWtIeEIsQ0FBQTtJQUVMLENBQUMsRUF2SFMsR0FBRyxLQUFILEdBQUcsUUF1SFoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICAvL+S8oOe7n+W4p+S6i+S7tlxyXG4gICAgZXhwb3J0IGNsYXNzIEpURW50ZXJGcmFtZSBleHRlbmRzIEpUVGltZXJUYXNrIGltcGxlbWVudHMgSlRJRW50ZXJGcmFtZVxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBfZnJhbWVSYXRlOm51bWJlciA9IDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9sb29wOm51bWJlciA9IDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9sb29wVGltZXM6bnVtYmVyID0gMDtcclxuICAgICAgICBwcm90ZWN0ZWQgU0VDT05EX0lOVEVSVkFMOm51bWJlciA9IDEwMDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIERFRkFVTFRfRlJBTUVfUkFURTpudW1iZXIgPSA2MDtcclxuICAgICAgICBwcm90ZWN0ZWQgREVGQVVMVF9GUkFNRV9SQVRFX1RJTUU6bnVtYmVyID0gMTY7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoMCwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGxvb3AoKTpudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb29wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBmcmFtZVJhdGUoKTpudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcmFtZVJhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0dXAodG90YWxGcmFtZXM6bnVtYmVyLCBsb29wOm51bWJlciA9IDAsIGZyYW1lUmF0ZTpudW1iZXIgPSA2MCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9vcFRpbWVzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fbG9vcCA9IGxvb3A7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsVGltZXMgPSB0b3RhbEZyYW1lcztcclxuICAgICAgICAgICAgdGhpcy5hZGp1c3RGcmFtZVJhdGUoZnJhbWVSYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwbGF5KHRvdGFsRnJhbWVzOm51bWJlciwgbG9vcDpudW1iZXIgPSAwLCBmcmFtZVJhdGU6bnVtYmVyID0gNjApOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwKHRvdGFsRnJhbWVzLCBsb29wLCBmcmFtZVJhdGUpO1xyXG4gICAgICAgICAgICBKVFRpbWVyVG9vbC5hbmltYXRpb25UaW1lci5hZGRUYXNrKHRoaXMpOy8v5Yqg5YWl5Yiw5Yqo55S75a+55YiX6YeMXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgYWRqdXN0RnJhbWVSYXRlKHZhbHVlOm51bWJlcik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSB2YWx1ZSAgPT0gdGhpcy5ERUZBVUxUX0ZSQU1FX1JBVEUgPyB0aGlzLkRFRkFVTFRfRlJBTUVfUkFURV9USU1FIDogdGhpcy5TRUNPTkRfSU5URVJWQUwgLyB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZnJhbWVSYXRlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RvcCgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGF1c2UoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBjdXJyZW50TG9vcCgpOm51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3BUaW1lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgY3VycmVudEZyYW1lKCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFRpbWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0b3RhbEZyYW1lKCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxUaW1lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVUaWNrKHRpY2s6bnVtYmVyKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGljayArPSB0aWNrOyAvL+WPoOWKoOaXtumXtFxyXG4gICAgICAgICAgICBsZXQgY291bnQ6bnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLl9jdXJyZW50VGljayAvIHRoaXMuX2ludGVydmFsKTsvL+WPluacgOWwj+W7tui/n+asoeaVsC3kuI3ov5vooYzlm5voiI3kupTlhaXvvIzkuZ/kuI3nm7TmjqXkuIrlkJHooaXkvY3vvIzmiorml7bpl7ToioLngrnnlZnliLDkuIvmrKHlj6DliqBcclxuICAgICAgICAgICAgaWYgKGNvdW50ID4gMCkgLy/lu7bov5/mrKHmlbBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZXMgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpY2sgLT0gdGhpcy5faW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEpUVGltZUV2ZW50LkVOVEVSX0ZSQU1FLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFRpbWVzID49IHRoaXMuX3RvdGFsVGltZXMpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb29wVGltZXMgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sb29wID09IDApdGhpcy5fY3VycmVudFRpbWVzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbG9vcFRpbWVzID49IHRoaXMuX2xvb3AgJiYgdGhpcy5fbG9vcCAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoSlRUaW1lRXZlbnQuRU5URVJfQ09NUExFVEUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEpUVGltZUV2ZW50LkVOVEVSX0xBU1RfRlJBTUUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOkpUSUVudGVyRnJhbWVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lcjpKVElFbnRlckZyYW1lID0gSlRQb29sLmluc3RhbmNlKEpURW50ZXJGcmFtZSkuZ2V0KCkgYXMgSlRJRW50ZXJGcmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcHV0KHRpbWVyOkpUSUVudGVyRnJhbWUpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEpUVGltZXJUb29sLmRlZmF1bHRUaW1lci5yZW1vdmVUYXNrKHRpbWVyIGFzIGFueSk7XHJcbiAgICAgICAgICAgIEpUUG9vbC5pbnN0YW5jZShKVEVudGVyRnJhbWUpLnB1dCh0aW1lciBhcyBKVElFbnRlckZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==