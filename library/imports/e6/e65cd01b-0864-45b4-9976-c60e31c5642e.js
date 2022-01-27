"use strict";
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