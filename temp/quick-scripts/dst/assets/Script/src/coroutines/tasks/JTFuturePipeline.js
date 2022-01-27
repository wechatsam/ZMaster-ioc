
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/coroutines/tasks/JTFuturePipeline.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20b11h6HepDKokhusQk616B', 'JTFuturePipeline');
// Script/src/coroutines/tasks/JTFuturePipeline.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTFuturePipeline = (function (_super) {
            __extends(JTFuturePipeline, _super);
            function JTFuturePipeline(__datas) {
                var _this = _super.call(this) || this;
                _this._counter = JTTaskCounter.create();
                _this._tasks = null;
                _this._factroy = null;
                _this._itemProvider = null;
                _this._itemRender = null;
                _this.___dataList = null;
                _this.dataList = __datas;
                return _this;
            }
            Object.defineProperty(JTFuturePipeline.prototype, "dataList", {
                set: function (___datas) {
                    this.___dataList = ___datas;
                    this._counter.setTotalCount(___datas.length);
                },
                enumerable: false,
                configurable: true
            });
            JTFuturePipeline.prototype.run = function () {
                return __awaiter(this, void 0, Promise, function () {
                    var task;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this._tasks = this.createTasks();
                                _a.label = 1;
                            case 1:
                                if (!this._tasks.length) return [3, 3];
                                task = this._tasks.shift();
                                task.relevance(this._counter);
                                task.execute();
                                return [4, this._counter.lock()];
                            case 2:
                                _a.sent();
                                this.dispatchEvent(JTTaskEvent.TASK_PROGRESS, this);
                                task.recycle();
                                return [3, 1];
                            case 3:
                                if (this._counter.completed) {
                                    this.dispatchEvent(JTTaskEvent.TASK_COMPLETE, this);
                                }
                                return [2];
                        }
                    });
                });
            };
            JTFuturePipeline.prototype.reset = function () {
                this.removes();
                this._counter.reset();
                this._tasks = null;
                this._factroy = null;
                this._itemRender && JTCommand.put(this._itemRender);
                this._itemProvider && JTCommand.put(this._itemProvider);
                this._itemProvider = null;
                this._itemRender = null;
                this.___dataList = null;
            };
            JTFuturePipeline.prototype.createTasks = function () {
                var list = [];
                var totalCount = this._counter.totalCount;
                if (this._itemRender) {
                    for (var i = 0; i < totalCount; i++) {
                        var task = this._itemRender.runWith([i, this.___dataList[i]]);
                        list.push(task);
                    }
                }
                else if (this._itemProvider) {
                    for (var i = 0; i < totalCount; i++) {
                        var task = this._itemProvider.runWith([i, this.___dataList[i]]);
                        list.push(task);
                    }
                }
                else if (this._factroy) {
                    for (var i = 0; i < totalCount; i++) {
                        var task = this._factroy.produce();
                        list.push(task);
                    }
                }
                return list;
            };
            Object.defineProperty(JTFuturePipeline.prototype, "factory", {
                set: function (value) {
                    this._factroy = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTFuturePipeline.prototype, "itemRender", {
                set: function (value) {
                    this._itemRender = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTFuturePipeline.prototype, "itemProvider", {
                set: function (value) {
                    this._itemProvider = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTFuturePipeline.prototype, "counter", {
                get: function () {
                    return this._counter;
                },
                enumerable: false,
                configurable: true
            });
            return JTFuturePipeline;
        }(JTEventDispatcher));
        com.JTFuturePipeline = JTFuturePipeline;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvcm91dGluZXNcXHRhc2tzXFxKVEZ1dHVyZVBpcGVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLElBQVUsR0FBRyxDQXFJWjtJQXJJRCxXQUFVLEdBQUc7UUFLVDtZQUFzQyxvQ0FBaUI7WUFhbkQsMEJBQVksT0FBYztnQkFBMUIsWUFFSSxpQkFBTyxTQUVWO2dCQWZTLGNBQVEsR0FBaUIsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNoRCxZQUFNLEdBQXFCLElBQUksQ0FBQztnQkFDaEMsY0FBUSxHQUFjLElBQUksQ0FBQztnQkFDM0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7Z0JBQy9CLGlCQUFXLEdBQWEsSUFBSSxDQUFDO2dCQUM3QixpQkFBVyxHQUFTLElBQUksQ0FBQztnQkFTL0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7O1lBQzVCLENBQUM7WUFLRCxzQkFBVyxzQ0FBUTtxQkFBbkIsVUFBb0IsUUFBYztvQkFFOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7b0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakQsQ0FBQzs7O2VBQUE7WUFLWSw4QkFBRyxHQUFoQjsrQ0FBbUIsT0FBTzs7Ozs7Z0NBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7cUNBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtnQ0FFaEIsSUFBSSxHQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dDQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQ0FDOUIsSUFBSSxDQUFDLE9BQU8s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QkFBVywwQ0FBWTtxQkFBdkIsVUFBd0IsS0FBZTtvQkFFbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLENBQUM7OztlQUFBO1lBS0Qsc0JBQVcscUNBQU87cUJBQWxCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekIsQ0FBQzs7O2VBQUE7WUFDTCx1QkFBQztRQUFELENBL0hBLEFBK0hDLENBL0hxQyxpQkFBaUIsR0ErSHREO1FBL0hZLG9CQUFnQixtQkErSDVCLENBQUE7SUFDTCxDQUFDLEVBcklTLEdBQUcsS0FBSCxHQUFHLFFBcUlaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZXZlbnRzL0pURXZlbnREaXNwYXRjaGVyLnRzXCIvPlxyXG5uYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICAvKipcclxuICAgICAqIOW8guatpeS6i+S7tuS7u+WKoeWvueWIl1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgSlRGdXR1cmVQaXBlbGluZSBleHRlbmRzIEpURXZlbnREaXNwYXRjaGVyXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9jb3VudGVyOkpUVGFza0NvdW50ZXIgPSBKVFRhc2tDb3VudGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgIHByb3RlY3RlZCBfdGFza3M6SlRJVGFza0V4ZWN1dG9yW10gPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfZmFjdHJveTpKVElGYWN0b3J5ID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX2l0ZW1Qcm92aWRlcjpKVENvbW1hbmQgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfaXRlbVJlbmRlcjpKVENvbW1hbmQgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfX19kYXRhTGlzdDphbnlbXSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaVsOaNruWIl+ihqFxyXG4gICAgICAgICAqIEBwYXJhbSBfX2RhdGFzIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKF9fZGF0YXM/OmFueVtdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdCA9IF9fZGF0YXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDorr7nva7mlbDmja7liJfooahcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgc2V0IGRhdGFMaXN0KF9fX2RhdGFzOmFueVtdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fX19kYXRhTGlzdCA9IF9fX2RhdGFzO1xyXG4gICAgICAgICAgICB0aGlzLl9jb3VudGVyLnNldFRvdGFsQ291bnQoX19fZGF0YXMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKipcclxuICAgICAgICAgKiDlkK/liqjlvILmraXlr7nliJdcclxuICAgICAgICAgKiAqL1xyXG4gICAgICAgIHB1YmxpYyBhc3luYyBydW4oKTpQcm9taXNlPGFueT5cclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tzID0gdGhpcy5jcmVhdGVUYXNrcygpO1xyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLl90YXNrcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrOkpUSVRhc2tFeGVjdXRvciA9IHRoaXMuX3Rhc2tzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB0YXNrLnJlbGV2YW5jZSh0aGlzLl9jb3VudGVyKTtcclxuICAgICAgICAgICAgICAgIHRhc2suZXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fY291bnRlci5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoSlRUYXNrRXZlbnQuVEFTS19QUk9HUkVTUywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0YXNrLnJlY3ljbGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fY291bnRlci5jb21wbGV0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChKVFRhc2tFdmVudC5UQVNLX0NPTVBMRVRFLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeN572u77yM5riF56m65LiK5qyh5omA5pyJ5Lu75Yqh6Zif5YiX5pWw5o2uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlc2V0KCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvdW50ZXIucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5fdGFza3MgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9mYWN0cm95ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5faXRlbVJlbmRlciAmJiBKVENvbW1hbmQucHV0KHRoaXMuX2l0ZW1SZW5kZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtUHJvdmlkZXIgJiYgSlRDb21tYW5kLnB1dCh0aGlzLl9pdGVtUHJvdmlkZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtUHJvdmlkZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9pdGVtUmVuZGVyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fX19kYXRhTGlzdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgY3JlYXRlVGFza3MoKTpKVElUYXNrRXhlY3V0b3JbXSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0OkpUSVRhc2tFeGVjdXRvcltdID0gW107XHJcbiAgICAgICAgICAgIGxldCB0b3RhbENvdW50Om51bWJlciA9IHRoaXMuX2NvdW50ZXIudG90YWxDb3VudDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2l0ZW1SZW5kZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRvdGFsQ291bnQ7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFzazpKVElUYXNrRXhlY3V0b3IgPSB0aGlzLl9pdGVtUmVuZGVyLnJ1bldpdGgoW2ksIHRoaXMuX19fZGF0YUxpc3RbaV1dKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2godGFzayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5faXRlbVByb3ZpZGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCB0b3RhbENvdW50OyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2s6SlRJVGFza0V4ZWN1dG9yID0gdGhpcy5faXRlbVByb3ZpZGVyLnJ1bldpdGgoW2ksIHRoaXMuX19fZGF0YUxpc3RbaV1dKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2godGFzayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fZmFjdHJveSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdG90YWxDb3VudDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrOkpUSVRhc2tFeGVjdXRvciA9IHRoaXMuX2ZhY3Ryb3kucHJvZHVjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh0YXNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruW3peWOglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXQgZmFjdG9yeSh2YWx1ZTpKVElGYWN0b3J5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fZmFjdHJveSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yib5bu65Lu75Yqh5ZG95LukXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHNldCBpdGVtUmVuZGVyKHZhbHVlOkpUQ29tbWFuZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1SZW5kZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIm+W7uuS7u+WKoeexu+WRveS7pFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzZXQgaXRlbVByb3ZpZGVyKHZhbHVlOkpUQ29tbWFuZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1Qcm92aWRlciA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuoeaVsOWZqFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgY291bnRlcigpOkpUVGFza0NvdW50ZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb3VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==