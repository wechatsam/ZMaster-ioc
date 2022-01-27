"use strict";
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