"use strict";
cc._RF.push(module, 'e6fd1iMq7NMLKB6+3YNQ6Ho', 'JTOptimizeFrame');
// Script/src/time/frames/JTOptimizeFrame.ts

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
        var JTOptimizeFrame = (function (_super) {
            __extends(JTOptimizeFrame, _super);
            function JTOptimizeFrame() {
                return _super.call(this) || this;
            }
            JTOptimizeFrame.prototype.setup = function (totalFrames, loop, frameRate) {
                if (loop === void 0) { loop = 0; }
                if (frameRate === void 0) { frameRate = 60; }
                _super.prototype.setup.call(this, totalFrames, loop);
            };
            JTOptimizeFrame.prototype.play = function (totalFrames, loop, frameRate) {
                if (loop === void 0) { loop = 0; }
                if (frameRate === void 0) { frameRate = 60; }
                _super.prototype.play.call(this, totalFrames, loop);
            };
            JTOptimizeFrame.prototype.updateTick = function (tick) {
                this._currentTick += tick;
                this.adjustFrameRate(this._currentTick);
                _super.prototype.updateTick.call(this, tick);
            };
            JTOptimizeFrame.prototype.adjustFrameRate = function (value) {
                var delayFrames = Math.floor(this._currentTick / this.DEFAULT_FRAME_RATE_TIME);
                var val = this.sqr(delayFrames, 2);
                this._frameRate = this.DEFAULT_FRAME_RATE - (val * 10);
                this._frameRate = this._frameRate < 1 ? 1 : this._frameRate;
                _super.prototype.adjustFrameRate.call(this, this._frameRate);
            };
            JTOptimizeFrame.prototype.sqr = function (num, value) {
                num = (num / value);
                var count = 1;
                while (num > 0) {
                    count++;
                    if (num >= 1) {
                        num = num / value;
                    }
                    else
                        break;
                }
                return count;
            };
            return JTOptimizeFrame;
        }(JTJumpFrame));
        com.JTOptimizeFrame = JTOptimizeFrame;
    })(com || (com = {}));
});

cc._RF.pop();