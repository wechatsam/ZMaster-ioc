"use strict";
cc._RF.push(module, '45c61Aa0oNPKaTB9waX+bKU', 'JTClassMapper');
// Script/src/datas/mappers/JTClassMapper.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTClassMapper = (function () {
            function JTClassMapper(_class, createFromPool) {
                if (createFromPool === void 0) { createFromPool = false; }
                this.__class = null;
                this._createFromPool = false;
                this._dataFormat = null;
                this._pool = null;
                this.__class = _class;
                this._createFromPool = createFromPool;
            }
            Object.defineProperty(JTClassMapper.prototype, "createFromPool", {
                get: function () {
                    return this._createFromPool;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTClassMapper.prototype, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTCachePool.instance(this.__class);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTClassMapper.prototype.create = function () {
                var item = null;
                if (this._createFromPool)
                    item = this.pool.get();
                else {
                    item = new this.__class();
                }
                return item;
            };
            return JTClassMapper;
        }());
        com.JTClassMapper = JTClassMapper;
    })(com || (com = {}));
});

cc._RF.pop();