"use strict";
cc._RF.push(module, '5e4faAYNahKXKmdfExqM54/', 'JTTaskExecutor');
// Script/src/coroutines/tasks/JTTaskExecutor.ts

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
        var JTTaskExecutor = (function (_super) {
            __extends(JTTaskExecutor, _super);
            function JTTaskExecutor() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._counter = null;
                return _this;
            }
            JTTaskExecutor.prototype.relevance = function (counter) {
                this._counter = counter;
            };
            JTTaskExecutor.prototype.release = function () {
                this._counter && this._counter.release();
            };
            JTTaskExecutor.prototype.kill = function () {
                this._counter && this._counter.kill();
            };
            JTTaskExecutor.prototype.recycle = function () {
                this._counter = null;
            };
            return JTTaskExecutor;
        }(JTTask));
        com.JTTaskExecutor = JTTaskExecutor;
    })(com || (com = {}));
});

cc._RF.pop();