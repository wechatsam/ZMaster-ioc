"use strict";
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