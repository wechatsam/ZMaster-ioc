"use strict";
var com;
(function (com) {
    class JTClassMapper {
        constructor(_class, createFromPool = false) {
            this.__class = null;
            /**
             * 是否由对象池创建 ---false为new,
             */
            this._createFromPool = false;
            /**
             * 这个设计和通信的解码decoder、编码encoder有些重复
             * 数据类型 -- 对象
             *            序列化对象
             *            字符串
             *            二进制流
             */
            this._dataFormat = null;
            this._pool = null;
            this.__class = _class;
            this._createFromPool = createFromPool;
        }
        get createFromPool() {
            return this._createFromPool;
        }
        get pool() {
            if (!this._pool) {
                this._pool = com.JTCachePool.instance(this.__class);
            }
            return this._pool;
        }
        create() {
            let item = null;
            if (this._createFromPool)
                item = this.pool.get();
            else {
                item = new this.__class();
            }
            return item;
        }
    }
    com.JTClassMapper = JTClassMapper;
})(com || (com = {}));
