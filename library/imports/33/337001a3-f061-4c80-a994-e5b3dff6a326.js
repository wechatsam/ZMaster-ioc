"use strict";
cc._RF.push(module, '33700Gj8GFMgKmU5bPf9qMm', 'JTCachePool');
// Script/src/pools/JTCachePool.ts

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
        var JTCachePool = (function (_super) {
            __extends(JTCachePool, _super);
            function JTCachePool(cls) {
                var _this = _super.call(this, cls) || this;
                _this._references = null;
                _this._references = [];
                return _this;
            }
            JTCachePool.prototype.get = function () {
                if (this._size > 0) {
                    this._size--;
                    return this._list.shift();
                }
                this._totalCount++;
                var item = new this._cls();
                this._references.push(item);
                return item;
            };
            JTCachePool.prototype.recycles = function (items) {
                if (!items) {
                    items = [].concat(this._references);
                }
                while (items.length) {
                    this.put(items.shift());
                }
            };
            JTCachePool.instance = function (cls) {
                var pool = this._cachePoolMap[cls];
                if (!pool) {
                    pool = this._cachePoolMap[cls] = new JTCachePool(cls);
                }
                return pool;
            };
            JTCachePool._cachePoolMap = {};
            return JTCachePool;
        }(JTPool));
        com.JTCachePool = JTCachePool;
    })(com || (com = {}));
});

cc._RF.pop();