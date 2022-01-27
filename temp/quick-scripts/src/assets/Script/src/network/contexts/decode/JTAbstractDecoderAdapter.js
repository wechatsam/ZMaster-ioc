"use strict";
cc._RF.push(module, 'a1ff7/XD8hAFb21pwYinfM3', 'JTAbstractDecoderAdapter');
// Script/src/network/contexts/decode/JTAbstractDecoderAdapter.ts

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
        var JTAbstractDecoderAdapter = (function (_super) {
            __extends(JTAbstractDecoderAdapter, _super);
            function JTAbstractDecoderAdapter() {
                var _this = _super.call(this) || this;
                _this._responseMapper = null;
                _this._protocolContext = null;
                _this._errorMessageContext = null;
                _this._downProtocol = null;
                return _this;
            }
            JTAbstractDecoderAdapter.prototype.channelActive = function () {
                this._responseMapper = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_MAPPING);
                this._protocolContext = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_PROTOCOL);
                this._errorMessageContext = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_ERROR_MESSAGE);
                this._downProtocol = this._protocolContext.downProtocol;
            };
            JTAbstractDecoderAdapter.prototype.readComplete = function (receivePackage) {
                var protocol = receivePackage.protocol;
                var content = receivePackage.content;
                var itemProtocol = this._downProtocol.getProtocol(protocol);
                if (!itemProtocol) {
                    JTLogger.debug("[receivePackage.read] the downProcotol cant register protocol: " + protocol);
                }
                if (itemProtocol && itemProtocol.isWaiting) {
                    this._downProtocol.execute(content);
                }
                if (this._errorMessageContext.checkPackageStatus(receivePackage)) {
                    if (this._responseMapper)
                        content = this.toMapper(protocol, content);
                    JTFunctionManager.execute(protocol.toString(), content);
                    JTLogger.info("[receivePackage.read] DownProtocol: " + protocol, "    content:  " + JSON.stringify(content));
                }
                else {
                    this._errorMessageContext.showErrorMessage(receivePackage);
                    JTLogger.info("[receivePackage.read] protocol: " + protocol, "    errorCode:  " + receivePackage.errorCode);
                }
            };
            JTAbstractDecoderAdapter.prototype.channelInactive = function () {
            };
            JTAbstractDecoderAdapter.prototype.toMapper = function (protocol, data) {
                return this._responseMapper.create(protocol, data);
            };
            return JTAbstractDecoderAdapter;
        }(JTChannelContextAdapter));
        com.JTAbstractDecoderAdapter = JTAbstractDecoderAdapter;
    })(com || (com = {}));
});

cc._RF.pop();