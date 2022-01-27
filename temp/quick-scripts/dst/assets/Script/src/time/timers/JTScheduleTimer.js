
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/timers/JTScheduleTimer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXHRpbWVyc1xcSlRTY2hlZHVsZVRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQThDWjtJQTlDRCxXQUFVLEdBQUc7UUFFVDtZQUFxQyxtQ0FBTztZQUd4Qyx5QkFBWSxRQUFtQixFQUFFLFFBQWM7Z0JBQW5DLHlCQUFBLEVBQUEsWUFBbUI7Z0JBQS9CLFlBRUksa0JBQU0sUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FFbkM7Z0JBTE8sZUFBUyxHQUFTLElBQUksQ0FBQztnQkFJM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7O1lBQzlCLENBQUM7WUFFTSwrQkFBSyxHQUFaLFVBQWEsUUFBZTtnQkFFeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzlCLENBQUM7WUFFRCxzQkFBVyx3Q0FBVztxQkFBdEI7b0JBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELENBQUM7OztlQUFBO1lBRUQsc0JBQVcscUNBQVE7cUJBQW5CO29CQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDMUIsQ0FBQzs7O2VBQUE7WUFFRCxpQ0FBTyxHQUFQO2dCQUNJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUMxQixDQUFDO1lBRWEsc0JBQU0sR0FBcEIsVUFBcUIsUUFBZSxFQUFFLElBQVc7Z0JBRTdDLElBQUksS0FBSyxHQUFvQixNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsRUFBc0IsQ0FBQztnQkFDeEYsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFFYSxtQkFBRyxHQUFqQixVQUFrQixLQUFjO2dCQUU1QixXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFZLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBd0IsQ0FBQyxDQUFDO1lBQ25FLENBQUM7WUFDTCxzQkFBQztRQUFELENBM0NBLEFBMkNDLENBM0NvQyxPQUFPLEdBMkMzQztRQTNDWSxtQkFBZSxrQkEyQzNCLENBQUE7SUFDTCxDQUFDLEVBOUNTLEdBQUcsS0FBSCxHQUFHLFFBOENaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUU2NoZWR1bGVUaW1lciBleHRlbmRzIEpUVGltZXIgaW1wbGVtZW50cyBKVElTY2hlZHVsZVRpbWVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfZGF0YUxpc3Q6YW55W10gPSBudWxsO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGludGVydmFsOm51bWJlciA9IDAsIGRhdGFMaXN0OmFueVtdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoaW50ZXJ2YWwsIGRhdGFMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFMaXN0ID0gZGF0YUxpc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0dXAoaW50ZXJ2YWw6bnVtYmVyKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsVGltZXMgPSB0aGlzLl9kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGN1cnJlbnRJdGVtKCk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUxpc3RbdGhpcy5jdXJyZW50Q291bnQgLSAxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgZGF0YUxpc3QoKTphbnlbXVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFMaXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjeWNsZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIucmVjeWNsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTGlzdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoaW50ZXJ2YWw6bnVtYmVyLCBsb29wOm51bWJlcik6SlRJU2NoZWR1bGVUaW1lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyOkpUSVNjaGVkdWxlVGltZXIgPSBKVFBvb2wuaW5zdGFuY2UoSlRTY2hlZHVsZVRpbWVyKS5nZXQoKSBhcyBKVElTY2hlZHVsZVRpbWVyO1xyXG4gICAgICAgICAgICB0aW1lci5zZXR1cChpbnRlcnZhbCwgbG9vcCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHB1dCh0aW1lcjpKVElUaW1lcik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSlRUaW1lclRvb2wuZGVmYXVsdFRpbWVyLnJlbW92ZVRhc2sodGltZXIgYXMgYW55KTtcclxuICAgICAgICAgICAgSlRQb29sLmluc3RhbmNlKEpUU2NoZWR1bGVUaW1lcikucHV0KHRpbWVyIGFzIEpUU2NoZWR1bGVUaW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==