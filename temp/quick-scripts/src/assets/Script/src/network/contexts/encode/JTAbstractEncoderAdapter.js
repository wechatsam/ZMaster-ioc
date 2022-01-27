"use strict";
cc._RF.push(module, 'ddad5mSQjFGX5lK1Vssp4vy', 'JTAbstractEncoderAdapter');
// Script/src/network/contexts/encode/JTAbstractEncoderAdapter.ts

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
        var JTAbstractEncoderAdapter = (function (_super) {
            __extends(JTAbstractEncoderAdapter, _super);
            function JTAbstractEncoderAdapter() {
                return _super.call(this) || this;
            }
            JTAbstractEncoderAdapter.prototype.writeComplete = function (data) {
                var message = JSON.parse(data);
                var protocolManager = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_PROTOCOL);
                var protocolUp = protocolManager.protocolUp;
                var itemProtocol = protocolUp.getProtocol(message.protocol);
                if (itemProtocol && itemProtocol.isWaiting) {
                    protocolUp.execute(message);
                }
                JTLogger.info("[sendPackage.send] : UpProtocol:  " + message.protocol, "   content: " + JSON.stringify(message.content));
            };
            JTAbstractEncoderAdapter.prototype.channelInactive = function () {
            };
            return JTAbstractEncoderAdapter;
        }(JTChannelContextAdapter));
        com.JTAbstractEncoderAdapter = JTAbstractEncoderAdapter;
    })(com || (com = {}));
});

cc._RF.pop();