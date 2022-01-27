
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/coroutines/tasks/JTCounter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e65cdAbCGRFtJl2xg4xxWQu', 'JTCounter');
// Script/src/coroutines/tasks/JTCounter.ts

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
        var JTCounter = (function (_super) {
            __extends(JTCounter, _super);
            function JTCounter() {
                var _this = _super.call(this) || this;
                _this._failCount = 0;
                _this._succeedCount = 0;
                _this._lockedCount = 0;
                return _this;
            }
            JTCounter.prototype.release = function () {
                _super.prototype.release.call(this);
                this._succeedCount++;
                this._lockedCount++;
            };
            JTCounter.prototype.kill = function () {
                _super.prototype.kill.call(this);
                this._failCount++;
                this._lockedCount++;
            };
            Object.defineProperty(JTCounter.prototype, "succeedCount", {
                get: function () {
                    return this._succeedCount;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTCounter.prototype, "failCount", {
                get: function () {
                    return this._failCount;
                },
                enumerable: false,
                configurable: true
            });
            JTCounter.prototype.recycle = function () {
                _super.prototype.recycle.call(this);
                this._failCount = this._lockedCount = this._succeedCount = 0;
            };
            JTCounter.prototype.reset = function () {
                this.recycle();
            };
            Object.defineProperty(JTCounter.prototype, "lockedCount", {
                get: function () {
                    return this._lockedCount;
                },
                enumerable: false,
                configurable: true
            });
            JTCounter.create = function () {
                return JTPool.instance(JTCounter).get();
            };
            return JTCounter;
        }(JTLocker));
        com.JTCounter = JTCounter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvcm91dGluZXNcXHRhc2tzXFxKVENvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBd0ZaO0lBeEZELFdBQVUsR0FBRztRQUtUO1lBQStCLDZCQUFRO1lBZW5DO2dCQUFBLFlBRUksaUJBQU8sU0FDVjtnQkFiUyxnQkFBVSxHQUFVLENBQUMsQ0FBQztnQkFJdEIsbUJBQWEsR0FBVSxDQUFDLENBQUM7Z0JBSXpCLGtCQUFZLEdBQVUsQ0FBQyxDQUFDOztZQUtsQyxDQUFDO1lBS00sMkJBQU8sR0FBZDtnQkFFSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLGFBQWEsRUFBRyxDQUFDO2dCQUN0QixJQUFJLENBQUMsWUFBWSxFQUFHLENBQUM7WUFDekIsQ0FBQztZQUtNLHdCQUFJLEdBQVg7Z0JBRUksaUJBQU0sSUFBSSxXQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRyxDQUFDO2dCQUNuQixJQUFJLENBQUMsWUFBWSxFQUFHLENBQUM7WUFDekIsQ0FBQztZQUtELHNCQUFXLG1DQUFZO3FCQUF2QjtvQkFFSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzlCLENBQUM7OztlQUFBO1lBSUQsc0JBQVcsZ0NBQVM7cUJBQXBCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsQ0FBQzs7O2VBQUE7WUFFTSwyQkFBTyxHQUFkO2dCQUVJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDakUsQ0FBQztZQUtNLHlCQUFLLEdBQVo7Z0JBRUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLENBQUM7WUFLRCxzQkFBVyxrQ0FBVztxQkFBdEI7b0JBRUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUM3QixDQUFDOzs7ZUFBQTtZQUVhLGdCQUFNLEdBQXBCO2dCQUVJLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQWUsQ0FBQztZQUN6RCxDQUFDO1lBRUwsZ0JBQUM7UUFBRCxDQWxGQSxBQWtGQyxDQWxGOEIsUUFBUSxHQWtGdEM7UUFsRlksYUFBUyxZQWtGckIsQ0FBQTtJQUNMLENBQUMsRUF4RlMsR0FBRyxLQUFILEdBQUcsUUF3RloiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIOiuoeaVsOWZqFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSlRDb3VudGVyIGV4dGVuZHMgSlRMb2NrZXJcclxuICAgIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICrlpLHotKXmrKHmlbBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBfZmFpbENvdW50Om51bWJlciA9IDA7XHJcbiAgICAgICAgLypcclxuICAgICAgICAq5oiQ5Yqf5qyh5pWwXHJcbiAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgX3N1Y2NlZWRDb3VudDpudW1iZXIgPSAwO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKuW3sue7j+WujOaIkOeahOasoeaVsFxyXG4gICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIF9sb2NrZWRDb3VudDpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeK5pS+6ZSBXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlbGVhc2UoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlci5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1Y2NlZWRDb3VudCArKztcclxuICAgICAgICAgICAgdGhpcy5fbG9ja2VkQ291bnQgKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvLrliLbmgKfop6PplIEtLeWPlua2iOmUgVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBraWxsKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIua2lsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9mYWlsQ291bnQgKys7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvY2tlZENvdW50ICsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5oiQ5Yqf55qE5qyh5pWwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGdldCBzdWNjZWVkQ291bnQoKTpudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWNjZWVkQ291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWksei0peeahOasoeaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgZmFpbENvdW50KCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmFpbENvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlY3ljbGUoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyLnJlY3ljbGUoKTtcclxuICAgICAgICAgICAgdGhpcy5fZmFpbENvdW50ID0gdGhpcy5fbG9ja2VkQ291bnQgPSB0aGlzLl9zdWNjZWVkQ291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeN572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlc2V0KCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWN5Y2xlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlvZPliY3miafooYznmoTmrKHmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0IGxvY2tlZENvdW50KCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9ja2VkQ291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOkpUQ291bnRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpUUG9vbC5pbnN0YW5jZShKVENvdW50ZXIpLmdldCgpIGFzIEpUQ291bnRlcjtcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgfVxyXG59Il19