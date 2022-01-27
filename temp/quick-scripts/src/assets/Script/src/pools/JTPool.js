"use strict";
cc._RF.push(module, 'c3453h2Qf9MLrjvCGWaeLUK', 'JTPool');
// Script/src/pools/JTPool.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTPool = (function () {
            function JTPool(cls) {
                this._cls = null;
                this._list = null;
                this._totalCount = 0;
                this._size = 0;
                this._cls = cls;
                this._list = [];
                this._totalCount = 0;
            }
            JTPool.prototype.get = function () {
                if (this._size > 0) {
                    this._size--;
                    return this._list.shift();
                }
                this._totalCount++;
                return new this._cls();
            };
            JTPool.prototype.put = function (item) {
                if (item && this._list.indexOf(item) == -1) {
                    item.recycle();
                    this._size = this._list.push(item);
                }
            };
            Object.defineProperty(JTPool.prototype, "totalCount", {
                get: function () {
                    return this._totalCount;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTPool.prototype, "size", {
                get: function () {
                    return this._size;
                },
                enumerable: false,
                configurable: true
            });
            JTPool.instance = function (cls) {
                var pool = this._poolMap[cls];
                if (!pool) {
                    pool = this._poolMap[cls] = new JTPool(cls);
                }
                return pool;
            };
            JTPool._poolMap = {};
            return JTPool;
        }());
        com.JTPool = JTPool;
    })(com || (com = {}));
});

cc._RF.pop();