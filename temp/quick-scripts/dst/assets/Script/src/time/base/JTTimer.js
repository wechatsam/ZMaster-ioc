
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/base/JTTimer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXGJhc2VcXEpUVGltZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0EsSUFBVSxHQUFHLENBa0VaO0lBbEVELFdBQVUsR0FBRztRQUVUO1lBQTZCLDJCQUFXO1lBRXBDLGlCQUFZLFFBQW1CLEVBQUUsSUFBZTtnQkFBcEMseUJBQUEsRUFBQSxZQUFtQjtnQkFBRSxxQkFBQSxFQUFBLFFBQWU7dUJBRTVDLGtCQUFNLFFBQVEsRUFBRSxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUVNLHVCQUFLLEdBQVosVUFBYSxRQUFlLEVBQUUsSUFBZTtnQkFBZixxQkFBQSxFQUFBLFFBQWU7Z0JBRXpDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDOUIsQ0FBQztZQUVNLHVCQUFLLEdBQVo7Z0JBRUssSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLENBQUM7WUFFTSxzQkFBSSxHQUFYO2dCQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUM7WUFFRCxzQkFBVywrQkFBVTtxQkFBckI7b0JBRUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM1QixDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLGlDQUFZO3FCQUF2QjtvQkFFSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzlCLENBQUM7cUJBRUQsVUFBd0IsS0FBWTtvQkFFaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7OztlQUxBO1lBT0Qsc0JBQVcsNkJBQVE7cUJBQW5CO29CQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDMUIsQ0FBQztxQkFFRCxVQUFvQixLQUFZO29CQUU1QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQzs7O2VBTEE7WUFPYSxjQUFNLEdBQXBCLFVBQXFCLFFBQWUsRUFBRSxJQUFXO2dCQUU3QyxJQUFJLEtBQUssR0FBWSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBYyxDQUFDO2dCQUNoRSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUVhLFdBQUcsR0FBakIsVUFBa0IsS0FBYztnQkFFNUIsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBWSxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQWlCLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQ0wsY0FBQztRQUFELENBOURBLEFBOERDLENBOUQ0QixXQUFXLEdBOER2QztRQTlEWSxXQUFPLFVBOERuQixDQUFBO0lBRUwsQ0FBQyxFQWxFUyxHQUFHLEtBQUgsR0FBRyxRQWtFWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIkpUVGltZXJUYXNrLnRzXCIvPlxyXG5uYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRUaW1lciBleHRlbmRzIEpUVGltZXJUYXNrIGltcGxlbWVudHMgSlRJVGltZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihpbnRlcnZhbDpudW1iZXIgPSAwLCBsb29wOm51bWJlciA9IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcihpbnRlcnZhbCwgbG9vcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0dXAoaW50ZXJ2YWw6bnVtYmVyLCBsb29wOm51bWJlciA9IDApOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5fdG90YWxUaW1lcyA9IGxvb3A7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhcnQoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICBKVFRpbWVyVG9vbC5kZWZhdWx0VGltZXIuYWRkVGFzayh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdG9wKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0b3RhbENvdW50KCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxUaW1lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgY3VycmVudENvdW50KCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFRpbWVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldCBjdXJyZW50Q291bnQodmFsdWU6bnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWVzID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGludGVydmFsKCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IGludGVydmFsKHZhbHVlOm51bWJlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShpbnRlcnZhbDpudW1iZXIsIGxvb3A6bnVtYmVyKTpKVElUaW1lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyOkpUSVRpbWVyID0gSlRQb29sLmluc3RhbmNlKEpUVGltZXIpLmdldCgpIGFzIEpUSVRpbWVyO1xyXG4gICAgICAgICAgICB0aW1lci5zZXR1cChpbnRlcnZhbCwgbG9vcCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHB1dCh0aW1lcjpKVElUaW1lcik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSlRUaW1lclRvb2wuZGVmYXVsdFRpbWVyLnJlbW92ZVRhc2sodGltZXIgYXMgYW55KTtcclxuICAgICAgICAgICAgSlRQb29sLmluc3RhbmNlKEpUVGltZXIpLnB1dCh0aW1lciBhcyBKVElUaW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=