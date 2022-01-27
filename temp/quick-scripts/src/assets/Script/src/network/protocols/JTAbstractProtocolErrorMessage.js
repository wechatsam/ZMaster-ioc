"use strict";
cc._RF.push(module, '7d691G0L75NIqsffceBQPBQ', 'JTAbstractProtocolErrorMessage');
// Script/src/network/protocols/JTAbstractProtocolErrorMessage.ts

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
        var JTAbstractProtocolErrorMessage = (function (_super) {
            __extends(JTAbstractProtocolErrorMessage, _super);
            function JTAbstractProtocolErrorMessage() {
                return _super.call(this) || this;
            }
            JTAbstractProtocolErrorMessage.prototype.build = function () {
            };
            JTAbstractProtocolErrorMessage.prototype.checkPackageStatus = function (receivePackage) {
                return receivePackage.status == JTProtocol.NORMAL;
            };
            JTAbstractProtocolErrorMessage.prototype.showErrorMessage = function (receivePackage) {
            };
            return JTAbstractProtocolErrorMessage;
        }(JTApplicationContext));
        com.JTAbstractProtocolErrorMessage = JTAbstractProtocolErrorMessage;
    })(com || (com = {}));
});

cc._RF.pop();