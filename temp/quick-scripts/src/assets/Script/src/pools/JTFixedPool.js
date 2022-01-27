"use strict";
cc._RF.push(module, '0b71bIKC6NPF6i4vBPXhYNl', 'JTFixedPool');
// Script/src/pools/JTFixedPool.ts

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
        var JTFixedPool = (function (_super) {
            __extends(JTFixedPool, _super);
            function JTFixedPool(cls, fixedCount) {
                if (fixedCount === void 0) { fixedCount = 100; }
                var _this = _super.call(this, cls) || this;
                _this._fixedCount = 0;
                _this.fixedCount = fixedCount;
                return _this;
            }
            Object.defineProperty(JTFixedPool.prototype, "fixedCount", {
                set: function (value) {
                    this._size = this._fixedCount = value;
                    this.create();
                },
                enumerable: false,
                configurable: true
            });
            JTFixedPool.prototype.create = function () {
                var list = this._list;
                var count = 0;
                var lines = [];
                while (list.length) {
                    var item = list.shift();
                    if (this._fixedCount > count) {
                        lines.push(item);
                        count++;
                    }
                    else
                        item = null;
                }
                if (this._fixedCount > count) {
                    var leng = this._fixedCount - count;
                    var cls = this._cls;
                    list = list.concat(lines);
                    for (var i = 0; i < leng; i++) {
                        var item = new cls();
                        list.push(item);
                    }
                }
                this._size = list.length;
            };
            JTFixedPool.prototype.get = function () {
                if (this._size > 0) {
                    this._size--;
                    return this._list.shift();
                }
                this.create();
                return this.get();
            };
            Object.defineProperty(JTFixedPool.prototype, "fullPool", {
                get: function () {
                    return this._fixedCount == this._size;
                },
                enumerable: false,
                configurable: true
            });
            JTFixedPool.instance = function (cls, fixedCount) {
                if (fixedCount === void 0) { fixedCount = 100; }
                var pool = this._fixedPoolMap[cls];
                if (!pool) {
                    pool = this._fixedPoolMap[cls] = new JTFixedPool(cls, fixedCount);
                }
                return pool;
            };
            JTFixedPool._fixedPoolMap = {};
            return JTFixedPool;
        }(JTCachePool));
        com.JTFixedPool = JTFixedPool;
    })(com || (com = {}));
});

cc._RF.pop();