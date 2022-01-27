"use strict";
var com;
(function (com) {
    /***
     * 事件信号器 --- 基于全局函数派发执行，
     */
    class JTEventSignaler {
        constructor() {
            this._eventMap = null;
            this._functionMap = null;
            this.injectEventMap();
            this.injectFunctionMap();
        }
        recycle() {
            this.removeEvents();
            this.removeFunctions();
        }
        //由于装饰器注入的对象是单例时，此方法生效（装鉓器的对象有多个时，未测试）因为该对象并未实例化，装饰器
        //提前注入该对象的方法，可能导致指针异常
        injectEventMap() {
            if (!this._eventMap)
                this._eventMap = {};
        }
        injectFunctionMap() {
            if (!this._functionMap)
                this._functionMap = {};
        }
        addEventListener(key, method, caller, once) {
            let flag = this._eventMap[key];
            if (!flag) {
                this._eventMap[key] = method;
                com.JTEventManager.addEventListener(key, method, caller, once);
            }
        }
        dispatchEvent(key, args) {
            key in this._eventMap && com.JTEventManager.dispatchEvent(key, args);
        }
        removeEventListener(key, method, caller) {
            let fun = this._eventMap[key];
            fun = null;
            this._eventMap[key] = null;
            delete this._eventMap[key];
            com.JTEventManager.removeEventListener(key, method, caller);
        }
        removeEvents() {
            var caller = this;
            for (var key in this._eventMap) {
                this.removeFunction(key, this._eventMap[key], caller);
            }
            this._eventMap = {};
        }
        registerFunction(key, method, caller, once) {
            let flag = this._functionMap[key];
            if (!flag) {
                this._functionMap[key] = method;
                com.JTFunctionManager.registerFunction(key, method, caller, once);
            }
        }
        execute(key, args) {
            key in this._functionMap && com.JTFunctionManager.execute(key, args);
        }
        removeFunction(key, method, caller) {
            let fun = this._functionMap[key];
            fun = null;
            this._functionMap[key] = null;
            delete this._functionMap[key];
            com.JTFunctionManager.removeFunction(key, method, caller);
        }
        removeFunctions() {
            var caller = this;
            for (var key in this._functionMap) {
                this.removeFunction(key, this._functionMap[key], caller);
            }
            this._functionMap = {};
        }
    }
    com.JTEventSignaler = JTEventSignaler;
})(com || (com = {}));
