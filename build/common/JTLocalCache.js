"use strict";
var com;
(function (com) {
    class JTLocalCache {
        /**
         * 通过名字来获取本地缓存对象。
         */
        constructor(name) {
            this._dataMap = null;
            this._name = null;
            JTLocalCache.localCache = window.localStorage;
            this.name = name;
        }
        set name(value) {
            this._name = value;
            if (JTLocalCache.localCache[value]) {
                this._dataMap = JSON.parse(JTLocalCache.localCache[value]);
            }
            else {
                this._dataMap = {};
                this.update();
            }
        }
        setObject(key, data) {
            this._dataMap[key] = data;
            this.update();
        }
        getObject(key) {
            return this._dataMap[key];
        }
        hasKey(key) {
            return key in this._dataMap;
        }
        delete(key) {
            this._dataMap[key] = null;
            delete this._dataMap[key];
            this.update();
        }
        update() {
            JTLocalCache.localCache.setItem(this._name, JSON.stringify(this._dataMap));
        }
        clean() {
            this._dataMap = {};
            this.update();
        }
        recycle() {
            this.clean();
            this._name = null;
        }
        get dataMap() {
            return this._dataMap;
        }
    }
    JTLocalCache.localCache = null;
    com.JTLocalCache = JTLocalCache;
})(com || (com = {}));
