"use strict";
cc._RF.push(module, 'bf3acuRSKFOn6I44JjeRf4A', 'JTAbstractProtocolManager');
// Script/src/network/protocols/JTAbstractProtocolManager.ts

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTAbstractProtocolManager = (function (_super) {
            __extends(JTAbstractProtocolManager, _super);
            function JTAbstractProtocolManager() {
                var _this = _super.call(this) || this;
                _this.protocolUp = null;
                _this.downProtocol = null;
                return _this;
            }
            JTAbstractProtocolManager.prototype.build = function () {
            };
            JTAbstractProtocolManager.prototype.registerDownProtocol = function (protocol, waiting, security) {
                this.downProtocol.registerProtocol(protocol, waiting, security);
            };
            JTAbstractProtocolManager.prototype.registerUpProtocol = function (protocol, waiting, security) {
                this.protocolUp.registerProtocol(protocol, waiting, security);
            };
            JTAbstractProtocolManager.prototype.bind = function (classUp, classDown) {
                this.protocolUp = new classUp();
                this.downProtocol = new classDown();
            };
            return JTAbstractProtocolManager;
        }(JTApplicationContext));
        com.JTAbstractProtocolManager = JTAbstractProtocolManager;
    })(com || (com = {}));
});

cc._RF.pop();