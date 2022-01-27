"use strict";
cc._RF.push(module, '7361dQwkhNFKYLk1gY0KNuG', 'JTLocalCache');
// Script/src/common/JTLocalCache.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTLocalCache = (function () {
            function JTLocalCache(name) {
                this._dataMap = null;
                this._name = null;
                JTLocalCache.localCache = window.localStorage;
                this.name = name;
            }
            Object.defineProperty(JTLocalCache.prototype, "name", {
                set: function (value) {
                    this._name = value;
                    if (JTLocalCache.localCache[value]) {
                        this._dataMap = JSON.parse(JTLocalCache.localCache[value]);
                    }
                    else {
                        this._dataMap = {};
                        this.update();
                    }
                },
                enumerable: false,
                configurable: true
            });
            JTLocalCache.prototype.setObject = function (key, data) {
                this._dataMap[key] = data;
                this.update();
            };
            JTLocalCache.prototype.getObject = function (key) {
                return this._dataMap[key];
            };
            JTLocalCache.prototype.hasKey = function (key) {
                return key in this._dataMap;
            };
            JTLocalCache.prototype.delete = function (key) {
                this._dataMap[key] = null;
                delete this._dataMap[key];
                this.update();
            };
            JTLocalCache.prototype.update = function () {
                JTLocalCache.localCache.setItem(this._name, JSON.stringify(this._dataMap));
            };
            JTLocalCache.prototype.clean = function () {
                this._dataMap = {};
                this.update();
            };
            JTLocalCache.prototype.recycle = function () {
                this.clean();
                this._name = null;
            };
            Object.defineProperty(JTLocalCache.prototype, "dataMap", {
                get: function () {
                    return this._dataMap;
                },
                enumerable: false,
                configurable: true
            });
            JTLocalCache.localCache = null;
            return JTLocalCache;
        }());
        com.JTLocalCache = JTLocalCache;
    })(com || (com = {}));
});

cc._RF.pop();