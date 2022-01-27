"use strict";
cc._RF.push(module, '54213ljU05LCrvTavEkDq5K', 'JTRceivePackage');
// Script/src/network/JTRceivePackage.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTReceivePackage = (function () {
            function JTReceivePackage() {
                this._content = null;
                this._data = null;
                this._protocol = 0;
                this._status = 0;
                this._errorCode = 0;
            }
            Object.defineProperty(JTReceivePackage.prototype, "content", {
                get: function () {
                    return this._content;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTReceivePackage.prototype, "protocol", {
                get: function () {
                    return this._protocol;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTReceivePackage.prototype, "status", {
                get: function () {
                    return this._status;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTReceivePackage.prototype, "errorCode", {
                get: function () {
                    return this._errorCode;
                },
                enumerable: false,
                configurable: true
            });
            JTReceivePackage.prototype.readPackage = function (data) {
                this._data = JSON.parse(data);
                this._status = this._data["status"];
                this._protocol = this._data["protocol"];
                if (this._status == JTProtocol.NORMAL) {
                    this._content = this._data["content"];
                }
                else {
                    this._errorCode = this._data["errorCode"];
                }
            };
            JTReceivePackage.prototype.recycle = function () {
                this._content = null;
                this._protocol = this._errorCode = this._status = 0;
                this._data = null;
            };
            Object.defineProperty(JTReceivePackage, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTReceivePackage);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTReceivePackage.read = function (data) {
                var receivePackage = this.pool.get();
                receivePackage.readPackage(data);
                return receivePackage;
            };
            JTReceivePackage.put = function (receivePackage) {
                this.pool.put(receivePackage);
            };
            JTReceivePackage._pool = null;
            return JTReceivePackage;
        }());
        com.JTReceivePackage = JTReceivePackage;
    })(com || (com = {}));
});

cc._RF.pop();