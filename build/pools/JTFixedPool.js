"use strict";
///<reference path="JTPool.ts"/>
/**
 *
 */
var com;
(function (com) {
    class JTFixedPool extends com.JTPool {
        constructor(cls, fixedCount = 5) {
            super(cls);
            this._fixedCount = 0;
            this.fixedCount = fixedCount;
        }
        set fixedCount(value) {
            this._fixedCount = value;
            this.create();
        }
        create() {
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
        }
        get() {
            if (this._size > 0) {
                return this._list.shift();
            }
            return null;
        }
        /***
         * 检查池是否满了，如果满了，对象池则不会创建对象。
         * */
        get fullPool() {
            return this._fixedCount == this._size;
        }
    }
    com.JTFixedPool = JTFixedPool;
})(com || (com = {}));
