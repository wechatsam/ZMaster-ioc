
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/frames/JTScheduleFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXGZyYW1lc1xcSlRTY2hlZHVsZUZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQXVEWjtJQXZERCxXQUFVLEdBQUc7UUFNVDtZQUFxQyxtQ0FBWTtZQUk3QztnQkFBQSxZQUVJLGlCQUFPLFNBQ1Y7Z0JBTE8sYUFBTyxHQUFTLElBQUksQ0FBQztnQkFDckIsbUJBQWEsR0FBYSxJQUFJLENBQUM7O1lBSXZDLENBQUM7WUFFRCxzQkFBVyx3Q0FBVztxQkFBdEI7b0JBRUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqRixDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLG1DQUFNO3FCQUFqQjtvQkFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLENBQUM7OztlQUFBO1lBRUQsc0JBQVcseUNBQVk7cUJBQXZCLFVBQXdCLEtBQWU7b0JBRW5DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixDQUFDOzs7ZUFBQTtZQUVNLDhCQUFJLEdBQVgsVUFBWSxXQUFrQixFQUFFLElBQWUsRUFBRSxTQUFxQjtnQkFBdEMscUJBQUEsRUFBQSxRQUFlO2dCQUFFLDBCQUFBLEVBQUEsY0FBcUI7Z0JBRWxFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ3RELFdBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFFRCxpQ0FBTyxHQUFQO2dCQUNJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1lBRWEsc0JBQU0sR0FBcEI7Z0JBRUksSUFBSSxLQUFLLEdBQW9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxFQUFzQixDQUFDO2dCQUN4RixPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBRWEsbUJBQUcsR0FBakIsVUFBa0IsS0FBc0I7Z0JBRXBDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQVksQ0FBQyxDQUFDO2dCQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUF5QixDQUFDLENBQUM7WUFDcEUsQ0FBQztZQUNMLHNCQUFDO1FBQUQsQ0FoREEsQUFnREMsQ0FoRG9DLFlBQVksR0FnRGhEO1FBaERZLG1CQUFlLGtCQWdEM0IsQ0FBQTtJQUNMLENBQUMsRUF2RFMsR0FBRyxLQUFILEdBQUcsUUF1RFoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIOW4p+Wdh+aRii0t5Yip55So5bin6aKR6Ze06ZqU5p2l6L+b6KGM5riy5p+T5Zu+5YOPL+aIluiAheiuoeeul+aVsOaNrlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKVFNjaGVkdWxlRnJhbWUgZXh0ZW5kcyBKVEVudGVyRnJhbWUgaW1wbGVtZW50cyBKVElTY2hlZHVsZUZyYW1lXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfZnJhbWVzOmFueVtdID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIF9jcmVhdGVGcmFtZXM6SlRDb21tYW5kID0gbnVsbDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBjdXJyZW50SXRlbSgpOmFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZyYW1lc1t0aGlzLl9jdXJyZW50VGltZXMgLSAxIDwgMCA/IDAgOiB0aGlzLl9jdXJyZW50VGltZXMgLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgZnJhbWVzKCk6YW55W11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcmFtZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IGNyZWF0ZUZyYW1lcyh2YWx1ZTpKVENvbW1hbmQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVGcmFtZXMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwbGF5KHRvdGFsRnJhbWVzOm51bWJlciwgbG9vcDpudW1iZXIgPSAwLCBmcmFtZVJhdGU6bnVtYmVyID0gNjApOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwKHRvdGFsRnJhbWVzLCBsb29wLCBmcmFtZVJhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZXMgPSB0aGlzLl9jcmVhdGVGcmFtZXMucnVuV2l0aCh0b3RhbEZyYW1lcylcclxuICAgICAgICAgICAgSlRUaW1lclRvb2wuYW5pbWF0aW9uVGltZXIuYWRkVGFzayh0aGlzKTsvL+WKoOWFpeWIsOWKqOeUu+WvueWIl+mHjFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjeWNsZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIucmVjeWNsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6SlRJU2NoZWR1bGVGcmFtZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGZyYW1lOkpUSVNjaGVkdWxlRnJhbWUgPSBKVFBvb2wuaW5zdGFuY2UoSlRTY2hlZHVsZUZyYW1lKS5nZXQoKSBhcyBKVElTY2hlZHVsZUZyYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZnJhbWU7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBwdXQodGltZXI6SlRJU2NoZWR1bGVGcmFtZSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSlRUaW1lclRvb2wuZGVmYXVsdFRpbWVyLnJlbW92ZVRhc2sodGltZXIgYXMgYW55KTtcclxuICAgICAgICAgICAgSlRQb29sLmluc3RhbmNlKEpUU2NoZWR1bGVGcmFtZSkucHV0KHRpbWVyIGFzIEpUSVNjaGVkdWxlRnJhbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=