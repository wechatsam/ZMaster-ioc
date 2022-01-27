"use strict";
cc._RF.push(module, '85719gXD1VG7K0bzXF0g4mS', 'JTEventSignaler');
// Script/src/events/JTEventSignaler.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTEventSignaler = (function () {
            function JTEventSignaler() {
                this.__evtMap = null;
                this.__funMap = null;
            }
            JTEventSignaler.prototype.recycle = function () {
                this.removeEvents();
                this.removeFunctions();
            };
            JTEventSignaler.prototype.addEventListener = function (key, method, caller, once) {
                if (!this.evtMap[key]) {
                    this.__evtMap[key] = method;
                    JTEventManager.addEventListener(key, method, caller, once);
                }
            };
            JTEventSignaler.prototype.dispatchEvent = function (key, args) {
                key in this.evtMap && JTEventManager.dispatchEvent(key, args);
            };
            JTEventSignaler.prototype.removeEventListener = function (key, method, caller) {
                var fun = this.evtMap[key];
                fun = null;
                this.__evtMap[key] = null;
                delete this.__evtMap[key];
                JTEventManager.removeEventListener(key, method, caller);
            };
            JTEventSignaler.prototype.removeEvents = function () {
                var caller = this;
                for (var key in this.evtMap) {
                    this.removeEventListener(key, this.__evtMap[key], caller);
                }
                this.__evtMap = {};
            };
            JTEventSignaler.prototype.registerFunction = function (key, method, caller, once) {
                if (!this.funMap[key]) {
                    this.__funMap[key] = method;
                    JTFunctionManager.registerFunction(key, method, caller, once);
                }
            };
            JTEventSignaler.prototype.execute = function (key, args) {
                key in this.funMap && JTFunctionManager.execute(key, args);
            };
            JTEventSignaler.prototype.removeFunction = function (key, method, caller) {
                var fun = this.funMap[key];
                fun = null;
                this.__funMap[key] = null;
                delete this.__funMap[key];
                JTFunctionManager.removeFunction(key, method, caller);
            };
            JTEventSignaler.prototype.removeFunctions = function () {
                var caller = this;
                for (var key in this.funMap) {
                    this.removeFunction(key, this.__funMap[key], caller);
                }
                this.__funMap = {};
            };
            Object.defineProperty(JTEventSignaler.prototype, "evtMap", {
                get: function () {
                    if (!this.__evtMap) {
                        this.__evtMap = {};
                    }
                    return this.__evtMap;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTEventSignaler.prototype, "funMap", {
                get: function () {
                    if (!this.__funMap) {
                        this.__funMap = {};
                    }
                    return this.__funMap;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTEventSignaler, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTEventSignaler);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTEventSignaler.create = function () {
                var signaler = this.pool.get();
                return signaler;
            };
            JTEventSignaler.put = function (signaler) {
                this.pool.put(signaler);
            };
            JTEventSignaler._pool = null;
            return JTEventSignaler;
        }());
        com.JTEventSignaler = JTEventSignaler;
    })(com || (com = {}));
});

cc._RF.pop();