
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/base/JTTimerTask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXGJhc2VcXEpUVGltZXJUYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQTREWjtJQTVERCxXQUFVLEdBQUc7UUFFVDtZQUEwQywrQkFBaUI7WUFPdkQscUJBQVksUUFBbUIsRUFBRSxJQUFlO2dCQUFwQyx5QkFBQSxFQUFBLFlBQW1CO2dCQUFFLHFCQUFBLEVBQUEsUUFBZTtnQkFBaEQsWUFFSSxpQkFBTyxTQUdWO2dCQVZTLGtCQUFZLEdBQVUsQ0FBQyxDQUFDO2dCQUN4QixlQUFTLEdBQVUsQ0FBQyxDQUFDO2dCQUNyQixpQkFBVyxHQUFVLENBQUMsQ0FBQztnQkFDdkIsbUJBQWEsR0FBVSxDQUFDLENBQUM7Z0JBQ3pCLGNBQVEsR0FBVyxLQUFLLENBQUM7Z0JBSS9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO2dCQUMxQixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7WUFDNUIsQ0FBQztZQUVNLDJCQUFLLEdBQVo7Z0JBRUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUVNLGdDQUFVLEdBQWpCLFVBQWtCLElBQVc7Z0JBRXpCLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDO2dCQUMxQixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQ2I7b0JBQ0ksSUFBSSxRQUFRLEdBQVUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQ2pELElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQ3pEO3dCQUNJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7cUJBQ2pEO29CQUNELEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQ3JDO3dCQUNJLElBQUksQ0FBQyxhQUFhLEVBQUcsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQy9DO2lCQUNKO2dCQUNELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUNuRTtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN4RDtZQUNMLENBQUM7WUFJRCxzQkFBVyxnQ0FBTztxQkFBbEI7b0JBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDOzs7ZUFBQTtZQUVELDZCQUFPLEdBQVA7Z0JBRUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUMxQixDQUFDO1lBQ0wsa0JBQUM7UUFBRCxDQXpEQSxBQXlEQyxDQXpEeUMsaUJBQWlCLEdBeUQxRDtRQXpEcUIsZUFBVyxjQXlEaEMsQ0FBQTtJQUNMLENBQUMsRUE1RFMsR0FBRyxLQUFILEdBQUcsUUE0RFoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgSlRUaW1lclRhc2sgZXh0ZW5kcyBKVEV2ZW50RGlzcGF0Y2hlciBpbXBsZW1lbnRzIEpUSVRpbWVyVGFza1xyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBfY3VycmVudFRpY2s6bnVtYmVyID0gMDtcclxuICAgICAgICBwcm90ZWN0ZWQgX2ludGVydmFsOm51bWJlciA9IDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIF90b3RhbFRpbWVzOm51bWJlciA9IDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9jdXJyZW50VGltZXM6bnVtYmVyID0gMDtcclxuICAgICAgICBwcm90ZWN0ZWQgX3J1bm5pbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGludGVydmFsOm51bWJlciA9IDAsIGxvb3A6bnVtYmVyID0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsVGltZXMgPSBsb29wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlc2V0KCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWVzID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVUaWNrKHRpY2s6bnVtYmVyKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGljayArPSB0aWNrOyAvL+WPoOWKoOaXtumXtFxyXG4gICAgICAgICAgICBsZXQgY291bnQ6bnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLl9jdXJyZW50VGljayAvIHRoaXMuX2ludGVydmFsKTsvL+WPluacgOWwj+W7tui/n+asoeaVsFxyXG4gICAgICAgICAgICBpZiAoY291bnQgPiAwKSAvL+W7tui/n+asoeaVsFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm93Q291bnQ6bnVtYmVyID0gdGhpcy5fY3VycmVudFRpbWVzICsgY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobm93Q291bnQgPj0gdGhpcy5fdG90YWxUaW1lcyAmJiB0aGlzLl90b3RhbFRpbWVzICE9IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgPSB0aGlzLl90b3RhbFRpbWVzIC0gdGhpcy5fY3VycmVudFRpbWVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZXMgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpY2sgLT0gdGhpcy5faW50ZXJ2YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEpUVGltZUV2ZW50LlRJTUVSLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFRpbWVzID49IHRoaXMuX3RvdGFsVGltZXMgJiYgdGhpcy5fdG90YWxUaW1lcyAhPSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoSlRUaW1lRXZlbnQuVElNRVJfQ09NUExFVEUsIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgcnVubmluZygpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5uaW5nO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJlY3ljbGUoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlcygpO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZXMgPSB0aGlzLl9jdXJyZW50VGljayA9IHRoaXMuX2ludGVydmFsID0gdGhpcy5fdG90YWxUaW1lcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19