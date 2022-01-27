
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/coroutines/tasks/JTTaskExecutor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvcm91dGluZXNcXHRhc2tzXFxKVFRhc2tFeGVjdXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0EwQlo7SUExQkQsV0FBVSxHQUFHO1FBRVQ7WUFBNkMsa0NBQU07WUFBbkQ7Z0JBQUEscUVBdUJDO2dCQXJCVyxjQUFRLEdBQWEsSUFBSSxDQUFDOztZQXFCdEMsQ0FBQztZQW5CVSxrQ0FBUyxHQUFoQixVQUFpQixPQUFrQjtnQkFFL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDNUIsQ0FBQztZQUVTLGdDQUFPLEdBQWpCO2dCQUVJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QyxDQUFDO1lBRVMsNkJBQUksR0FBZDtnQkFFSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUMsQ0FBQztZQUVELGdDQUFPLEdBQVA7Z0JBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUNMLHFCQUFDO1FBQUQsQ0F2QkEsQUF1QkMsQ0F2QjRDLE1BQU0sR0F1QmxEO1FBdkJxQixrQkFBYyxpQkF1Qm5DLENBQUE7SUFDTCxDQUFDLEVBMUJTLEdBQUcsS0FBSCxHQUFHLFFBMEJaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUVGFza0V4ZWN1dG9yIGV4dGVuZHMgSlRUYXNrIGltcGxlbWVudHMgSlRJVGFza0V4ZWN1dG9yXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfY291bnRlcjpKVENvdW50ZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgcmVsZXZhbmNlKGNvdW50ZXI6IEpUQ291bnRlcik6IHZvaWQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jb3VudGVyID0gY291bnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZWxlYXNlKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY291bnRlciAmJiB0aGlzLl9jb3VudGVyLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBraWxsKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY291bnRlciAmJiB0aGlzLl9jb3VudGVyLmtpbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY3ljbGUoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvdW50ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==