
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/frames/JTOptimizeFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXGZyYW1lc1xcSlRPcHRpbWl6ZUZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdBLElBQVUsR0FBRyxDQWdHWjtJQWhHRCxXQUFVLEdBQUc7UUFFVDtZQUFxQyxtQ0FBVztZQUU1Qzt1QkFFSSxpQkFBTztZQUNYLENBQUM7WUFFTSwrQkFBSyxHQUFaLFVBQWEsV0FBa0IsRUFBRSxJQUFlLEVBQUUsU0FBcUI7Z0JBQXRDLHFCQUFBLEVBQUEsUUFBZTtnQkFBRSwwQkFBQSxFQUFBLGNBQXFCO2dCQUVqRSxpQkFBTSxLQUFLLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFFTSw4QkFBSSxHQUFYLFVBQVksV0FBa0IsRUFBRSxJQUFlLEVBQUUsU0FBcUI7Z0JBQXRDLHFCQUFBLEVBQUEsUUFBZTtnQkFBRSwwQkFBQSxFQUFBLGNBQXFCO2dCQUVsRSxpQkFBTSxJQUFJLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ2pDLENBQUM7WUFFTSxvQ0FBVSxHQUFqQixVQUFrQixJQUFXO2dCQUV6QixJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hDLGlCQUFNLFVBQVUsWUFBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBRVMseUNBQWUsR0FBekIsVUFBMEIsS0FBWTtnQkFFbEMsSUFBSSxXQUFXLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDNUQsaUJBQU0sZUFBZSxZQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQXdDM0MsQ0FBQztZQVFTLDZCQUFHLEdBQWIsVUFBYyxHQUFVLEVBQUUsS0FBWTtnQkFFakMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFBO2dCQUNwQixJQUFJLEtBQUssR0FBVSxDQUFDLENBQUE7Z0JBQ3BCLE9BQU0sR0FBRyxHQUFHLENBQUMsRUFDYjtvQkFDSSxLQUFLLEVBQUcsQ0FBQztvQkFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQ1o7d0JBQ0ksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUE7cUJBQ3BCOzt3QkFDSSxNQUFNO2lCQUNkO2dCQUNELE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFDTCxzQkFBQztRQUFELENBN0ZBLEFBNkZDLENBN0ZvQyxXQUFXLEdBNkYvQztRQTdGWSxtQkFBZSxrQkE2RjNCLENBQUE7SUFDTCxDQUFDLEVBaEdTLEdBQUcsS0FBSCxHQUFHLFFBZ0daIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOagueaNruezu+e7n+aXtumXtOW7tui/n+aDheWGteiHquWKqOiwg+aVtOW4p+mikeW5tuWBmui3s+W4p+aVsOWkhOeQhu+8jOS/neaMgeacgOaWsOeahOS4gOW4p+aVsO+8jOWkp+Wkp+mZjeS9juS6hkNQVeeahOi0n+iNty4uLlxyXG4gKi9cclxubmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUT3B0aW1pemVGcmFtZSBleHRlbmRzIEpUSnVtcEZyYW1lXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXR1cCh0b3RhbEZyYW1lczpudW1iZXIsIGxvb3A6bnVtYmVyID0gMCwgZnJhbWVSYXRlOm51bWJlciA9IDYwKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgIHN1cGVyLnNldHVwKHRvdGFsRnJhbWVzLCBsb29wKTsvL+S9v+eUqDYw5bin5pWwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcGxheSh0b3RhbEZyYW1lczpudW1iZXIsIGxvb3A6bnVtYmVyID0gMCwgZnJhbWVSYXRlOm51bWJlciA9IDYwKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlci5wbGF5KHRvdGFsRnJhbWVzLCBsb29wKS8v5L2/55SoNjDluKfmlbBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVUaWNrKHRpY2s6bnVtYmVyKTp2b2lkIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpY2sgKz0gdGljaztcclxuICAgICAgICAgICAgdGhpcy5hZGp1c3RGcmFtZVJhdGUodGhpcy5fY3VycmVudFRpY2spO1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVUaWNrKHRpY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFkanVzdEZyYW1lUmF0ZSh2YWx1ZTpudW1iZXIpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZWxheUZyYW1lczpudW1iZXIgPSBNYXRoLmZsb29yKHRoaXMuX2N1cnJlbnRUaWNrIC8gdGhpcy5ERUZBVUxUX0ZSQU1FX1JBVEVfVElNRSk7XHJcbiAgICAgICAgICAgIGxldCB2YWw6bnVtYmVyID0gdGhpcy5zcXIoZGVsYXlGcmFtZXMsIDIpO1xyXG4gICAgICAgICAgICB0aGlzLl9mcmFtZVJhdGUgPSB0aGlzLkRFRkFVTFRfRlJBTUVfUkFURSAtICh2YWwgKiAxMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lUmF0ZSA9IHRoaXMuX2ZyYW1lUmF0ZSA8IDEgPyAxIDogdGhpcy5fZnJhbWVSYXRlO1xyXG4gICAgICAgICAgICBzdXBlci5hZGp1c3RGcmFtZVJhdGUodGhpcy5fZnJhbWVSYXRlKTtcclxuICAgICAgICAgICAgLy8gc3dpdGNoKHRydWUpXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgdGljayA8PSA2NCA6IC8v5pyA6auY5bu26L+fNOW4py0tLS02MOW4p+mikeeahOaDheWGteS4izTluKfnuqbmmK82NOavq+enkigxMDAwIC8gNjApID0gMTYsIDE2ICogNCA9IDY0KOavq+enkilcclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9mcmFtZVJhdGUgPSA2MFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgY2FzZSB0aWNrIDw9IDEyOCA6Ly/mnIDpq5jlu7bov5845binLS0tLTYw5bin6aKR55qE5oOF5Ya15LiLOOW4p+e6puaYrzEyOOavq+enku+8jOS7pTUw5bin6aKR6L+Q6KGMXHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5fZnJhbWVSYXRlID0gNTBcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgdGljayA8PSAyNTYgOi8v5pyA6auY5bu26L+fMTbluKctLS0tNjDluKfpopHnmoTmg4XlhrXkuIs45bin57qm5pivMjU25q+r56eS77yM5LulNDDluKfpopHov5DooYxcclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9mcmFtZVJhdGUgPSA0MDtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgdGljayA8PSA1MTIgOi8v5pyA6auY5bu26L+fMzLluKctLS0tNjDluKfpopHnmoTmg4XlhrXkuIs45bin57qm5pivNTEy5q+r56eS77yM5LulMzDluKfpopHov5DooYxcclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9mcmFtZVJhdGUgPSAzMDtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgdGljayA8PSAxMDI0IDovLywsLi4uLi4uLi4uLi5cclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9mcmFtZVJhdGUgPSAyMDtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgdGljayA8PSAyMDQ4IDovLywsLi4uLi4uLi4uLi5cclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9mcmFtZVJhdGUgPSAxMDtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8v5bey57uP6LaF5Ye65pyA5aSn5bu26L+f5LqGXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5faW50ZXJ2YWwgPSBNYXRoLmZsb29yKHRoaXMuU0VDT05EX0lOVEVSVkFMIC8gdGhpcy5fZnJhbWVSYXRlKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOW8gOW5s+aWueaguVxyXG4gICAgICAgICAqIEBwYXJhbSBudW0gXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAgICAgICAqIEByZXR1cm5zIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBzcXIobnVtOm51bWJlciwgdmFsdWU6bnVtYmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgIG51bSA9IChudW0gLyB2YWx1ZSlcclxuICAgICAgICAgICAgbGV0IGNvdW50Om51bWJlciA9IDEgLy/pu5jorqTkuLoxXHJcbiAgICAgICAgICAgIHdoaWxlKG51bSA+IDApXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIGNvdW50ICsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bSA+PSAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bSA9IG51bSAvIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGJyZWFrOy8v5LiN6LazMeasoeaWueiuoeeul++8jOebtOaOpem7mOiupCsx77yM5Lit5pat5b6q546vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=