
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/coroutines/tasks/JTTaskCounter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6b25evUY5Ozb0wtCI+VcUy', 'JTTaskCounter');
// Script/src/coroutines/tasks/JTTaskCounter.ts

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
        var JTTaskCounter = (function (_super) {
            __extends(JTTaskCounter, _super);
            function JTTaskCounter() {
                var _this = _super.call(this) || this;
                _this._totalCount = 0;
                return _this;
            }
            JTTaskCounter.prototype.setTotalCount = function (totalCount) {
                this._totalCount = totalCount;
            };
            Object.defineProperty(JTTaskCounter.prototype, "totalCount", {
                get: function () {
                    return this._totalCount;
                },
                enumerable: false,
                configurable: true
            });
            JTTaskCounter.prototype.recycle = function () {
                _super.prototype.recycle.call(this);
                this._totalCount = 0;
            };
            Object.defineProperty(JTTaskCounter.prototype, "completed", {
                get: function () {
                    var count = this._succeedCount + this._failCount;
                    if (this._totalCount != count)
                        return false;
                    else {
                        if (this._totalCount == this._succeedCount)
                            return true;
                        else {
                            info("the task execute fail count:  " + this._failCount);
                        }
                    }
                    return true;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTTaskCounter.prototype, "progress", {
                get: function () {
                    return parseFloat((this._lockedCount / this._totalCount).toFixed(4));
                },
                enumerable: false,
                configurable: true
            });
            JTTaskCounter.create = function () {
                return JTPool.instance(JTTaskCounter).get();
            };
            return JTTaskCounter;
        }(JTCounter));
        com.JTTaskCounter = JTTaskCounter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvcm91dGluZXNcXHRhc2tzXFxKVFRhc2tDb3VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQXdFWjtJQXhFRCxXQUFVLEdBQUc7UUFLVDtZQUE0QyxpQ0FBUztZQU1qRDtnQkFBQSxZQUVJLGlCQUFPLFNBQ1Y7Z0JBSk8saUJBQVcsR0FBVSxDQUFDLENBQUM7O1lBSS9CLENBQUM7WUFNTSxxQ0FBYSxHQUFwQixVQUFxQixVQUFpQjtnQkFFbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDbEMsQ0FBQztZQUtELHNCQUFXLHFDQUFVO3FCQUFyQjtvQkFFSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLENBQUM7OztlQUFBO1lBRU0sK0JBQU8sR0FBZDtnQkFFSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQU9ELHNCQUFXLG9DQUFTO3FCQUFwQjtvQkFFSSxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3hELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLO3dCQUFDLE9BQU8sS0FBSyxDQUFDO3lCQUUzQzt3QkFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGFBQWE7NEJBQUUsT0FBTyxJQUFJLENBQUM7NkJBRXhEOzRCQUNJLElBQUksQ0FBQyxnQ0FBZ0MsR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQzdEO3FCQUNKO29CQUNELE9BQU8sSUFBSSxDQUFDO2dCQUNoQixDQUFDOzs7ZUFBQTtZQUtELHNCQUFXLG1DQUFRO3FCQUFuQjtvQkFFSSxPQUFPLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxDQUFDOzs7ZUFBQTtZQUVhLG9CQUFNLEdBQXBCO2dCQUVJLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQW1CLENBQUM7WUFDakUsQ0FBQztZQUNMLG9CQUFDO1FBQUQsQ0FsRUEsQUFrRUMsQ0FsRTJDLFNBQVMsR0FrRXBEO1FBbEVxQixpQkFBYSxnQkFrRWxDLENBQUE7SUFDTCxDQUFDLEVBeEVTLEdBQUcsS0FBSCxHQUFHLFFBd0VaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDku7vliqHorqHmlbDlmahcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUVGFza0NvdW50ZXIgZXh0ZW5kcyBKVENvdW50ZXJcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmgLvlhbHpnIDopoHmiafooYzlpJrlsJHmrKFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIF90b3RhbENvdW50Om51bWJlciA9IDA7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruaAu+WFsemcgOimgeaJp+ihjOWkmuWwkeasoVxyXG4gICAgICAgICAqIEBwYXJhbSB0b3RhbENvdW50IOaAu+asoeaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXRUb3RhbENvdW50KHRvdGFsQ291bnQ6bnVtYmVyKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl90b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaAu+asoeaVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgdG90YWxDb3VudCgpOm51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RvdGFsQ291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVjeWNsZSgpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIucmVjeWNsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl90b3RhbENvdW50ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYr+WQpuWujOaIkFxyXG4gICAgICAgICAqIOWPquimgeWksei0peWSjOaIkOWKn+aAu+asoeaVsOS4jeetieS6jnRvdGFsQ291bnTml7bvvIzov5Tlm55mYWxzZVxyXG4gICAgICAgICAqIOWQpuWImei/lOWbnnRydWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0IGNvbXBsZXRlZCgpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudDpudW1iZXIgPSB0aGlzLl9zdWNjZWVkQ291bnQgKyB0aGlzLl9mYWlsQ291bnQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90b3RhbENvdW50ICE9IGNvdW50KXJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG90YWxDb3VudCA9PSB0aGlzLl9zdWNjZWVkQ291bnQpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8oXCJ0aGUgdGFzayBleGVjdXRlIGZhaWwgY291bnQ6ICBcIiArICB0aGlzLl9mYWlsQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5omn6KGM6L+b5bqm55qE55m+5YiG5q+ULOi/lOWbnuWwj+aVsOeCueWQjuWbm+S9jVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgcHJvZ3Jlc3MoKTpudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KCh0aGlzLl9sb2NrZWRDb3VudCAvIHRoaXMuX3RvdGFsQ291bnQpLnRvRml4ZWQoNCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTpKVFRhc2tDb3VudGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSlRQb29sLmluc3RhbmNlKEpUVGFza0NvdW50ZXIpLmdldCgpIGFzIEpUVGFza0NvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19