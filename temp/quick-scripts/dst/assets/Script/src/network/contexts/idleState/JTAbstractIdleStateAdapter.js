
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/contexts/idleState/JTAbstractIdleStateAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5068fDjnENDy57apEG7zYqW', 'JTAbstractIdleStateAdapter');
// Script/src/network/contexts/idleState/JTAbstractIdleStateAdapter.ts

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
        var JTAbstractIdleStateAdapter = (function (_super) {
            __extends(JTAbstractIdleStateAdapter, _super);
            function JTAbstractIdleStateAdapter(interval, repeatInterval, repeatTimes) {
                if (interval === void 0) { interval = 15000; }
                if (repeatInterval === void 0) { repeatInterval = 10; }
                if (repeatTimes === void 0) { repeatTimes = 5; }
                var _this = _super.call(this) || this;
                _this._timer = null;
                _this._repeatCount = 0;
                _this._currentRepeatCount = 0;
                _this._heartInterval = 0;
                _this._connected = false;
                _this._heartInterval = interval;
                return _this;
            }
            JTAbstractIdleStateAdapter.prototype.build = function () {
            };
            JTAbstractIdleStateAdapter.prototype.channelInactive = function () {
            };
            JTAbstractIdleStateAdapter.prototype.channelActive = function () {
                this._connected = true;
                this.createTimer(this._heartInterval);
            };
            JTAbstractIdleStateAdapter.prototype.createTimer = function (interval) {
                this._timer = JTTimer.create(interval, 0);
                this._timer.addEventListener(JTTimeEvent.TIMER, this.onTimerHandler, this);
            };
            JTAbstractIdleStateAdapter.prototype.onTimerHandler = function (timer) {
                if (!this._connected) {
                    this._timer.stop();
                    return;
                }
            };
            JTAbstractIdleStateAdapter.prototype.onTimerComplete = function (timer) {
            };
            return JTAbstractIdleStateAdapter;
        }(JTChannelContext));
        com.JTAbstractIdleStateAdapter = JTAbstractIdleStateAdapter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGNvbnRleHRzXFxpZGxlU3RhdGVcXEpUQWJzdHJhY3RJZGxlU3RhdGVBZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLElBQVUsR0FBRyxDQStEWjtJQS9ERCxXQUFVLEdBQUc7UUFFVDtZQUF5RCw4Q0FBZ0I7WUFtQnJFLG9DQUFZLFFBQXVCLEVBQUUsY0FBMEIsRUFBRSxXQUFzQjtnQkFBM0UseUJBQUEsRUFBQSxnQkFBdUI7Z0JBQUUsK0JBQUEsRUFBQSxtQkFBMEI7Z0JBQUUsNEJBQUEsRUFBQSxlQUFzQjtnQkFBdkYsWUFFSSxpQkFBTyxTQUVWO2dCQXJCUyxZQUFNLEdBQVksSUFBSSxDQUFDO2dCQUV2QixrQkFBWSxHQUFVLENBQUMsQ0FBQztnQkFFeEIseUJBQW1CLEdBQVUsQ0FBQyxDQUFDO2dCQUUvQixvQkFBYyxHQUFVLENBQUMsQ0FBQztnQkFFMUIsZ0JBQVUsR0FBVyxLQUFLLENBQUM7Z0JBWWpDLEtBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDOztZQUNuQyxDQUFDO1lBRU0sMENBQUssR0FBWjtZQUdBLENBQUM7WUFFTSxvREFBZSxHQUF0QjtZQUdBLENBQUM7WUFFTSxrREFBYSxHQUFwQjtnQkFFUSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUMsQ0FBQztZQUVTLGdEQUFXLEdBQXJCLFVBQXNCLFFBQWU7Z0JBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9FLENBQUM7WUFFUyxtREFBYyxHQUF4QixVQUF5QixLQUFjO2dCQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDcEI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbkIsT0FBTztpQkFDVjtZQUNULENBQUM7WUFFUyxvREFBZSxHQUF6QixVQUEwQixLQUFjO1lBR3hDLENBQUM7WUFDTCxpQ0FBQztRQUFELENBNURBLEFBNERDLENBNUR3RCxnQkFBZ0IsR0E0RHhFO1FBNURxQiw4QkFBMEIsNkJBNEQvQyxDQUFBO0lBQ0wsQ0FBQyxFQS9EUyxHQUFHLEtBQUgsR0FBRyxRQStEWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL0pUQ2hhbm5lbENvbnRleHQudHNcIi8+XHJcbm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKVEFic3RyYWN0SWRsZVN0YXRlQWRhcHRlciBleHRlbmRzIEpUQ2hhbm5lbENvbnRleHRcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgX3RpbWVyOkpUSVRpbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIF9yZXBlYXRDb3VudDpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX2N1cnJlbnRSZXBlYXRDb3VudDpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX2hlYXJ0SW50ZXJ2YWw6bnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIF9jb25uZWN0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS7peenkuS4uuWNleS9jVxyXG4gICAgICAgICAqIEBwYXJhbSBpbnRlcnZhbCBcclxuICAgICAgICAgKiBAcGFyYW0gcmVwZWF0VGltZXMgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW50ZXJ2YWw6bnVtYmVyID0gMTUwMDAsIHJlcGVhdEludGVydmFsOm51bWJlciA9IDEwLCByZXBlYXRUaW1lczpudW1iZXIgPSA1KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5faGVhcnRJbnRlcnZhbCA9IGludGVydmFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ1aWxkKCk6IHZvaWQgXHJcbiAgICAgICAge1xyXG4gIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNoYW5uZWxJbmFjdGl2ZSgpOnZvaWRcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNoYW5uZWxBY3RpdmUoKTogdm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVUaW1lcih0aGlzLl9oZWFydEludGVydmFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUaW1lcihpbnRlcnZhbDpudW1iZXIpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gSlRUaW1lci5jcmVhdGUoaW50ZXJ2YWwsIDApO1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lci5hZGRFdmVudExpc3RlbmVyKEpUVGltZUV2ZW50LlRJTUVSLCB0aGlzLm9uVGltZXJIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblRpbWVySGFuZGxlcih0aW1lcjpKVElUaW1lcik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90aW1lci5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwcm90ZWN0ZWQgb25UaW1lckNvbXBsZXRlKHRpbWVyOkpUSVRpbWVyKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fY2hhbm5lbFBpcGVsaW5lLmxhdW5jaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=