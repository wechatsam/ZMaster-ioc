
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/contexts/decode/JTAbstractDecoderAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGNvbnRleHRzXFxkZWNvZGVcXEpUQWJzdHJhY3REZWNvZGVyQWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDQSxJQUFVLEdBQUcsQ0E2RFo7SUE3REQsV0FBVSxHQUFHO1FBRVQ7WUFBdUQsNENBQXVCO1lBTTFFO2dCQUFBLFlBRUksaUJBQU8sU0FFVjtnQkFSUyxxQkFBZSxHQUE2QixJQUFJLENBQUM7Z0JBQ2pELHNCQUFnQixHQUE2QixJQUFJLENBQUM7Z0JBQ2xELDBCQUFvQixHQUFrQyxJQUFJLENBQUM7Z0JBQzNELG1CQUFhLEdBQWUsSUFBSSxDQUFDOztZQUszQyxDQUFDO1lBRU0sZ0RBQWEsR0FBcEI7Z0JBRUksSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUE7Z0JBQ2hHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbkcsSUFBSSxDQUFDLG9CQUFvQixHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUM1RyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7WUFDNUQsQ0FBQztZQUlNLCtDQUFZLEdBQW5CLFVBQW9CLGNBQWdDO2dCQUVoRCxJQUFJLFFBQVEsR0FBVSxjQUFjLENBQUMsUUFBUSxDQUFDO2dCQUM5QyxJQUFJLE9BQU8sR0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxJQUFJLFlBQVksR0FBaUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxZQUFZLEVBQ2pCO29CQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUVBQWlFLEdBQUcsUUFBUSxDQUFDLENBQUM7aUJBQ2hHO2dCQUNELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQzFDO29CQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QztnQkFDRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFDaEU7b0JBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZTt3QkFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3JFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQ3hELFFBQVEsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLEdBQUcsUUFBUSxFQUFHLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDakg7cUJBRUQ7b0JBQ0ksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUMzRCxRQUFRLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLFFBQVEsRUFBRyxrQkFBa0IsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ2hIO1lBQ0wsQ0FBQztZQUVNLGtEQUFlLEdBQXRCO1lBR0EsQ0FBQztZQUVTLDJDQUFRLEdBQWxCLFVBQW1CLFFBQWUsRUFBRSxJQUFRO2dCQUV4QyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN0RCxDQUFDO1lBRUwsK0JBQUM7UUFBRCxDQTFEQSxBQTBEQyxDQTFEc0QsdUJBQXVCLEdBMEQ3RTtRQTFEcUIsNEJBQXdCLDJCQTBEN0MsQ0FBQTtJQUNMLENBQUMsRUE3RFMsR0FBRyxLQUFILEdBQUcsUUE2RFoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi9KVENoYW5uZWxDb250ZXh0QWRhcHRlci50c1wiLz5cclxubmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUQWJzdHJhY3REZWNvZGVyQWRhcHRlciBleHRlbmRzIEpUQ2hhbm5lbENvbnRleHRBZGFwdGVyIGltcGxlbWVudHMgSlRJRGVjb2RlckFkYXB0ZXJcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgX3Jlc3BvbnNlTWFwcGVyOkpUQWJzdHJhY3RSZXNwb25zZU1hcHBpbmcgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfcHJvdG9jb2xDb250ZXh0OkpUQWJzdHJhY3RQcm90b2NvbE1hbmFnZXIgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfZXJyb3JNZXNzYWdlQ29udGV4dDpKVEFic3RyYWN0UHJvdG9jb2xFcnJvck1lc3NhZ2UgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfZG93blByb3RvY29sOkpUSVByb3RvY29sID0gbnVsbDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjaGFubmVsQWN0aXZlKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzcG9uc2VNYXBwZXIgPSBKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLmdldENvbnRleHQoSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5DT05URVhUX01BUFBJTkcpXHJcbiAgICAgICAgICAgIHRoaXMuX3Byb3RvY29sQ29udGV4dCA9IEpUQXBwbGljYXRpb25Cb290c3RyYXAuZ2V0Q29udGV4dChKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLkNPTlRFWFRfUFJPVE9DT0wpO1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvck1lc3NhZ2VDb250ZXh0ID0gSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5nZXRDb250ZXh0KEpUQXBwbGljYXRpb25Cb290c3RyYXAuQ09OVEVYVF9FUlJPUl9NRVNTQUdFKTtcclxuICAgICAgICAgICAgdGhpcy5fZG93blByb3RvY29sID0gdGhpcy5fcHJvdG9jb2xDb250ZXh0LmRvd25Qcm90b2NvbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkZWNvZGUoZGF0YTphbnkpOmFueTtcclxuXHJcbiAgICAgICAgcHVibGljIHJlYWRDb21wbGV0ZShyZWNlaXZlUGFja2FnZTpKVElSZWNlaXZlUGFja2FnZSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3RvY29sOm51bWJlciA9IHJlY2VpdmVQYWNrYWdlLnByb3RvY29sO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudDphbnkgPSByZWNlaXZlUGFja2FnZS5jb250ZW50O1xyXG4gICAgICAgICAgICBsZXQgaXRlbVByb3RvY29sOkpUSXRlbVByb3RvY29sPSB0aGlzLl9kb3duUHJvdG9jb2wuZ2V0UHJvdG9jb2wocHJvdG9jb2wpO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW1Qcm90b2NvbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgSlRMb2dnZXIuZGVidWcoXCJbcmVjZWl2ZVBhY2thZ2UucmVhZF0gdGhlIGRvd25Qcm9jb3RvbCBjYW50IHJlZ2lzdGVyIHByb3RvY29sOiBcIiArIHByb3RvY29sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbVByb3RvY29sICYmIGl0ZW1Qcm90b2NvbC5pc1dhaXRpbmcpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Rvd25Qcm90b2NvbC5leGVjdXRlKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lcnJvck1lc3NhZ2VDb250ZXh0LmNoZWNrUGFja2FnZVN0YXR1cyhyZWNlaXZlUGFja2FnZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXNwb25zZU1hcHBlcikgY29udGVudCA9IHRoaXMudG9NYXBwZXIocHJvdG9jb2wsIGNvbnRlbnQpOyAvL+ajgOafpeWNj+iuruWPt+aYr+WQpue7keWumuS6hk1hcHBlcuaYoOWwhOW6j+WIl+WMllxyXG4gICAgICAgICAgICAgICAgSlRGdW5jdGlvbk1hbmFnZXIuZXhlY3V0ZShwcm90b2NvbC50b1N0cmluZygpLCBjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIEpUTG9nZ2VyLmluZm8oXCJbcmVjZWl2ZVBhY2thZ2UucmVhZF0gRG93blByb3RvY29sOiBcIiArIHByb3RvY29sLCAgXCIgICAgY29udGVudDogIFwiICsgSlNPTi5zdHJpbmdpZnkoY29udGVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3JNZXNzYWdlQ29udGV4dC5zaG93RXJyb3JNZXNzYWdlKHJlY2VpdmVQYWNrYWdlKTtcclxuICAgICAgICAgICAgICAgIEpUTG9nZ2VyLmluZm8oXCJbcmVjZWl2ZVBhY2thZ2UucmVhZF0gcHJvdG9jb2w6IFwiICsgcHJvdG9jb2wsICBcIiAgICBlcnJvckNvZGU6ICBcIiArIHJlY2VpdmVQYWNrYWdlLmVycm9yQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjaGFubmVsSW5hY3RpdmUoKTogdm9pZFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdG9NYXBwZXIocHJvdG9jb2w6bnVtYmVyLCBkYXRhOmFueSk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VNYXBwZXIuY3JlYXRlKHByb3RvY29sLCBkYXRhKVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==