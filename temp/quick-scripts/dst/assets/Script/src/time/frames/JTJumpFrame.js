
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/frames/JTJumpFrame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ebd15oUYw9JHIV8W3Z9fLpP', 'JTJumpFrame');
// Script/src/time/frames/JTJumpFrame.ts

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
        var JTJumpFrame = (function (_super) {
            __extends(JTJumpFrame, _super);
            function JTJumpFrame() {
                var _this = _super.call(this) || this;
                _this._jumpFrames = 0;
                return _this;
            }
            Object.defineProperty(JTJumpFrame.prototype, "jumpFrames", {
                get: function () {
                    return this._jumpFrames;
                },
                enumerable: false,
                configurable: true
            });
            JTJumpFrame.prototype.updateTick = function (tick) {
                this._currentTick += tick;
                var times = Math.floor(this._currentTick / this._interval);
                this._jumpFrames = 0;
                if (times > 1) {
                    this._jumpFrames = times - 1;
                    var nowTimes = this._currentTimes + times;
                    var delayLoops = Math.floor(nowTimes / this._totalTimes);
                    this._loopTimes += delayLoops;
                    if (this._loop == 0) {
                        this._currentTimes = nowTimes % this._totalTimes;
                    }
                    else {
                        if (this._loopTimes >= this._loop) {
                            this._loopTimes = this._loop;
                            this._currentTimes = this._totalTimes;
                        }
                        else
                            this._currentTimes = nowTimes % this._totalTimes;
                    }
                    this.dispatchEvent(JTTimeEvent.JUMP_FRAME, this);
                    this.dispatchEvent(JTTimeEvent.ENTER_FRAME, this);
                    delayLoops >= 1 && this.dispatchEvent(JTTimeEvent.ENTER_LAST_FRAME, this);
                    if (this._loopTimes >= this._loop && this._loop != 0) {
                        this._currentTick = 0;
                        this._running = false;
                        this.dispatchEvent(JTTimeEvent.ENTER_COMPLETE, this);
                    }
                    else {
                        this._currentTick = this._currentTick % this._interval;
                    }
                }
                else if (times == 1) {
                    _super.prototype.updateTick.call(this, tick);
                }
            };
            JTJumpFrame.create = function () {
                var timer = JTPool.instance(JTJumpFrame).get();
                return timer;
            };
            JTJumpFrame.put = function (timer) {
                JTTimerTool.defaultTimer.removeTask(timer);
                JTPool.instance(JTJumpFrame).put(timer);
            };
            return JTJumpFrame;
        }(JTEnterFrame));
        com.JTJumpFrame = JTJumpFrame;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXGZyYW1lc1xcSlRKdW1wRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBb0daO0lBcEdELFdBQVUsR0FBRztRQTBCVDtZQUFpQywrQkFBWTtZQUd6QztnQkFBQSxZQUVJLGlCQUFPLFNBQ1Y7Z0JBSk8saUJBQVcsR0FBVSxDQUFDLENBQUM7O1lBSS9CLENBQUM7WUFLRCxzQkFBVyxtQ0FBVTtxQkFBckI7b0JBRUssT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM3QixDQUFDOzs7ZUFBQTtZQUVNLGdDQUFVLEdBQWpCLFVBQWtCLElBQVc7Z0JBRXpCLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDO2dCQUMxQixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztnQkFDckIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUNiO29CQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxRQUFRLEdBQVUsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQ2pELElBQUksVUFBVSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUM7b0JBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQ25CO3dCQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7cUJBQ3BEO3lCQUVEO3dCQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUNqQzs0QkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7NEJBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5QkFDekM7OzRCQUNLLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7cUJBQzFEO29CQUNELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNsRCxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUMxRSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFDcEQ7d0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ3hEO3lCQUVEO3dCQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3FCQUMxRDtpQkFDSjtxQkFDSSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQ25CO29CQUNJLGlCQUFNLFVBQVUsWUFBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7WUFDTCxDQUFDO1lBR2Esa0JBQU0sR0FBcEI7Z0JBRUksSUFBSSxLQUFLLEdBQWdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFrQixDQUFDO2dCQUM1RSxPQUFPLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBRWEsZUFBRyxHQUFqQixVQUFrQixLQUFrQjtnQkFFaEMsV0FBVyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBWSxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQXFCLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBQ0wsa0JBQUM7UUFBRCxDQXhFQSxBQXdFQyxDQXhFZ0MsWUFBWSxHQXdFNUM7UUF4RVksZUFBVyxjQXdFdkIsQ0FBQTtJQUVMLENBQUMsRUFwR1MsR0FBRyxLQUFILEdBQUcsUUFvR1oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICAvKioqXHJcbiAgICAgKiDot7PluKct5Y+I56ew5bin5ZCM5q2lXHJcbiAgICAgKiDkuI3nrqHns7vnu5/mmK/lkKblh7rnjrDlu7bov5/vvIzkvb/nlKhKVFN5bmNGcmFtZemDveWwhueul+WHuuacgOaWsOWKqOeUu+W4p+aVsOe0ouW8lVxyXG4gICAgICAgIGxldCBnb3RvRnJhbWU6Yy5KVEdvdG9GcmFtZSA9IGMuSlRHb3RvRnJhbWUuY3JlYXRlKCk7XHJcbiAgICAgICAgZ290b0ZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoYy5KVFRpbWVFdmVudC5FTlRFUl9GUkFNRSwgdGhpcy5vbkVudGVyRnJhbWVIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICBnb3RvRnJhbWUuYWRkRXZlbnRMaXN0ZW5lcihjLkpUVGltZUV2ZW50LlNZTkNfRlJBTUUsIHRoaXMub25TeW5jRnJhbWUsIHRoaXMpO1xyXG4gICAgICAgIGdvdG9GcmFtZS5hZGRFdmVudExpc3RlbmVyKGMuSlRUaW1lRXZlbnQuRU5URVJfTEFTVF9GUkFNRSwgdGhpcy5vbkVudGVyRnJhbWVIYW5kbGVyLCB0aGlzKTtcclxuICAgICAgICBnb3RvRnJhbWUuYWRkRXZlbnRMaXN0ZW5lcihjLkpUVGltZUV2ZW50LkVOVEVSX0NPTVBMRVRFLCB0aGlzLm9uRW50ZXJGcmFtZUhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgIGdvdG9GcmFtZS5wbGF5KDEwLCAxMCwgMCk7XHJcbiAgIH1cclxuXHJcbiAgIHByb3RlY3RlZCBvblN5bmNGcmFtZShnb3RvRnJhbWU6Yy5KVEdvdG9GcmFtZSk6IHZvaWRcclxuICAge1xyXG4gICAgICAgYy5KVExvZ2dlci5pbmZvKFwianVtcEZyYW1lIGZvciA6IFwiICsgZW50ZXJGcmFtZS5qdW1wRnJhbWUpO1xyXG4gICB9XHJcbiAgICBcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbnRlckZyYW1lSGFuZGxlcihnb3RvRnJhbWU6Yy5KVElFbnRlckZyYW1lKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGMuSlRMb2dnZXIuaW5mbyhcImN1cnJlbnRGcmFtZSBmb3IgOiBcIiArIGVudGVyRnJhbWUuY3VycmVudEZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgKioqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUSnVtcEZyYW1lIGV4dGVuZHMgSlRFbnRlckZyYW1lIGltcGxlbWVudHMgSlRJSnVtcEZyYW1lXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfanVtcEZyYW1lczpudW1iZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDojrflj5blvZPliY3ot7PkuoblpJrluKfmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0IGp1bXBGcmFtZXMoKTpudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5fanVtcEZyYW1lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1cGRhdGVUaWNrKHRpY2s6bnVtYmVyKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGljayArPSB0aWNrOyAvL+WPoOWKoOaXtumXtFxyXG4gICAgICAgICAgICBsZXQgdGltZXM6bnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLl9jdXJyZW50VGljayAvIHRoaXMuX2ludGVydmFsKTsvL+WPluacgOWwj+W7tui/n+asoeaVsFxyXG4gICAgICAgICAgICB0aGlzLl9qdW1wRnJhbWVzID0gMDtcclxuICAgICAgICAgICAgaWYgKHRpbWVzID4gMSkgLy/lu7bov5/luKfmlbDpgLvovpHlpITnkIZcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fanVtcEZyYW1lcyA9IHRpbWVzIC0gMTtcclxuICAgICAgICAgICAgICAgIGxldCBub3dUaW1lczpudW1iZXIgPSB0aGlzLl9jdXJyZW50VGltZXMgKyB0aW1lcztcclxuICAgICAgICAgICAgICAgIGxldCBkZWxheUxvb3BzOm51bWJlciA9IE1hdGguZmxvb3Iobm93VGltZXMgLyB0aGlzLl90b3RhbFRpbWVzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvb3BUaW1lcyArPSBkZWxheUxvb3BzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xvb3AgPT0gMCkgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWVzID0gbm93VGltZXMgJSB0aGlzLl90b3RhbFRpbWVzOy8v5b2T5b6q546v5qyh5pWw5Li6MOaYr++8jOmcgOimgeWunuaXtuiuoeeul+acgOWQjuS4gOW4p+aVsFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sb29wVGltZXMgPj0gdGhpcy5fbG9vcClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvb3BUaW1lcyA9IHRoaXMuX2xvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lcyA9IHRoaXMuX3RvdGFsVGltZXM7Ly/lvZPlvqrnjq/mrKHmlbDkuLow5piv77yM6Lez6L2s5Yiw5pyA5ZCO5LiA5bin5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgIHRoaXMuX2N1cnJlbnRUaW1lcyA9IG5vd1RpbWVzICUgdGhpcy5fdG90YWxUaW1lczsvL+W9k+W+queOr+asoeaVsOS4ujDmmK/vvIzpnIDopoHlrp7ml7borqHnrpfmnIDlkI7kuIDluKfmlbBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChKVFRpbWVFdmVudC5KVU1QX0ZSQU1FLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChKVFRpbWVFdmVudC5FTlRFUl9GUkFNRSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBkZWxheUxvb3BzID49IDEgJiYgdGhpcy5kaXNwYXRjaEV2ZW50KEpUVGltZUV2ZW50LkVOVEVSX0xBU1RfRlJBTUUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xvb3BUaW1lcyA+PSB0aGlzLl9sb29wICYmIHRoaXMuX2xvb3AgIT0gMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VGljayA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChKVFRpbWVFdmVudC5FTlRFUl9DT01QTEVURSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpY2sgPSB0aGlzLl9jdXJyZW50VGljayAlIHRoaXMuX2ludGVydmFsOy8v6YeN5paw5pu05paw5pe26Ze06IqC54K5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgZWxzZSBpZiAodGltZXMgPT0gMSkgLy/mraPluLjluKfmlbDml6DpnIDot7PluKfmlbBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3VwZXIudXBkYXRlVGljayh0aWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6SlRJSnVtcEZyYW1lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdGltZXI6SlRJSnVtcEZyYW1lID0gSlRQb29sLmluc3RhbmNlKEpUSnVtcEZyYW1lKS5nZXQoKSBhcyBKVElKdW1wRnJhbWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHB1dCh0aW1lcjpKVElKdW1wRnJhbWUpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEpUVGltZXJUb29sLmRlZmF1bHRUaW1lci5yZW1vdmVUYXNrKHRpbWVyIGFzIGFueSk7XHJcbiAgICAgICAgICAgIEpUUG9vbC5pbnN0YW5jZShKVEp1bXBGcmFtZSkucHV0KHRpbWVyIGFzIEpUSUp1bXBGcmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=