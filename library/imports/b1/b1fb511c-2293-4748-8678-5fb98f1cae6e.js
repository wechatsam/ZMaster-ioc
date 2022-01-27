"use strict";
cc._RF.push(module, 'b1fb5EcIpNHSIZ4X7mPHK5u', 'JTItemProtocol');
// Script/src/network/protocols/JTItemProtocol.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTItemProtocol = (function () {
            function JTItemProtocol(protocol) {
                this._isWaiting = false;
                this._securityOption = null;
                this._protocol = 0;
                this._protocol = protocol;
            }
            JTItemProtocol.prototype.setup = function (isWaiting, security) {
                this._securityOption = security;
                this._isWaiting = isWaiting;
            };
            JTItemProtocol.create = function (protocol, isWaiting, security) {
                var item = new JTItemProtocol(protocol);
                item.setup(isWaiting, security);
                return item;
            };
            Object.defineProperty(JTItemProtocol.prototype, "protocol", {
                get: function () {
                    return this._protocol;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTItemProtocol.prototype, "securityOption", {
                get: function () {
                    return this._securityOption;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTItemProtocol.prototype, "isWaiting", {
                get: function () {
                    return this._isWaiting;
                },
                enumerable: false,
                configurable: true
            });
            JTItemProtocol.prototype.hide = function (message) {
            };
            JTItemProtocol.prototype.decrypt = function (message) {
                return message;
            };
            return JTItemProtocol;
        }());
        com.JTItemProtocol = JTItemProtocol;
    })(com || (com = {}));
});

cc._RF.pop();