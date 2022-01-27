"use strict";
///<reference path="JTPool.ts"/>
/*
* 支持自动将对象全部回收到对象池里;
*/
var com;
(function (com) {
    class JTCachePool extends com.JTPool {
        constructor(cls) {
            super(cls);
            this._references = null;
            this._references = [];
        }
        get() {
            if (this._size > 0) {
                return this._list.shift();
            }
            this._totalCount++;
            var item = new this._cls();
            this._references.push(item);
            return item;
        }
    }
    com.JTCachePool = JTCachePool;
})(com || (com = {}));
