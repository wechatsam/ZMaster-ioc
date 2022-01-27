"use strict";
cc._RF.push(module, '8497cVaDBhIlL5bDPbClSsQ', 'JTProtocol');
// Script/src/network/protocols/JTProtocol.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTProtocol = (function () {
            function JTProtocol() {
                this._protocols = null;
                this._encrypts = null;
                this._protocolMap = null;
                this._protocols = [];
                this._protocolMap = {};
                this.build();
            }
            JTProtocol.prototype.build = function () {
            };
            JTProtocol.prototype.registerProtocol = function (protocol, waiting, security) {
                this._protocolMap[protocol] = JTItemProtocol.create(protocol, waiting, security);
                waiting && this._protocols.push(protocol);
            };
            Object.defineProperty(JTProtocol.prototype, "protocols", {
                get: function () {
                    return this._protocols;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTProtocol.prototype, "encrypts", {
                get: function () {
                    return this._encrypts;
                },
                enumerable: false,
                configurable: true
            });
            JTProtocol.prototype.getProtocol = function (protocol) {
                return this._protocolMap[protocol];
            };
            JTProtocol.prototype.execute = function (message) {
            };
            JTProtocol.NORMAL = 1;
            JTProtocol.ERROR = 0;
            return JTProtocol;
        }());
        com.JTProtocol = JTProtocol;
    })(com || (com = {}));
});

cc._RF.pop();