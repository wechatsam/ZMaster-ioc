"use strict";
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