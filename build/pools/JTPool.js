"use strict";
var com;
(function (com) {
    class JTPool {
        constructor(cls) {
            this._cls = null;
            this._list = null;
            this._totalCount = 0;
            this._size = 0;
            this._cls = cls;
            this._list = [];
            this._totalCount = 0;
        }
        get() {
            if (this._size > 0) {
                return this._list.shift();
            }
            this._totalCount++;
            return new this._cls();
        }
        put(item) {
            if (item && this._list.indexOf(item) == -1) {
                item.recycle();
                this._list.push(item);
                this._size++;
            }
        }
        get totalCount() {
            return this._totalCount;
        }
        get size() {
            return this._size;
        }
        static instance(cls) {
            var pool = this._poolMap[cls];
            if (!pool) {
                pool = this._poolMap[cls] = new JTPool(cls);
            }
            return pool;
        }
    }
    JTPool._poolMap = {};
    com.JTPool = JTPool;
})(com || (com = {}));
