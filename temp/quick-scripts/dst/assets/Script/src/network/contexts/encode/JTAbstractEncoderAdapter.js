
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/contexts/encode/JTAbstractEncoderAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGNvbnRleHRzXFxlbmNvZGVcXEpUQWJzdHJhY3RFbmNvZGVyQWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0E4Qlo7SUE5QkQsV0FBVSxHQUFHO1FBRVQ7WUFBdUQsNENBQXVCO1lBRTFFO3VCQUVJLGlCQUFPO1lBQ1gsQ0FBQztZQUlNLGdEQUFhLEdBQXBCLFVBQXFCLElBQVE7Z0JBRXpCLElBQUksT0FBTyxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLElBQUksZUFBZSxHQUE2QixzQkFBc0IsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDM0gsSUFBSSxVQUFVLEdBQWUsZUFBZSxDQUFDLFVBQVUsQ0FBQztnQkFDeEQsSUFBSSxZQUFZLEdBQWlCLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsU0FBUyxFQUMxQztvQkFDSSxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDOUgsQ0FBQztZQUVNLGtEQUFlLEdBQXRCO1lBR0EsQ0FBQztZQUVMLCtCQUFDO1FBQUQsQ0EzQkEsQUEyQkMsQ0EzQnNELHVCQUF1QixHQTJCN0U7UUEzQnFCLDRCQUF3QiwyQkEyQjdDLENBQUE7SUFDTCxDQUFDLEVBOUJTLEdBQUcsS0FBSCxHQUFHLFFBOEJaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUQWJzdHJhY3RFbmNvZGVyQWRhcHRlciBleHRlbmRzIEpUQ2hhbm5lbENvbnRleHRBZGFwdGVyIGltcGxlbWVudHMgSlRJRW5jb2RlckFkYXB0ZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGVuY29kZShkYXRhOmFueSk6YW55O1xyXG5cclxuICAgICAgICBwdWJsaWMgd3JpdGVDb21wbGV0ZShkYXRhOmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U6YW55ID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgbGV0IHByb3RvY29sTWFuYWdlcjpKVEFic3RyYWN0UHJvdG9jb2xNYW5hZ2VyID0gSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5nZXRDb250ZXh0KEpUQXBwbGljYXRpb25Cb290c3RyYXAuQ09OVEVYVF9QUk9UT0NPTCk7XHJcbiAgICAgICAgICAgIGxldCBwcm90b2NvbFVwOkpUSVByb3RvY29sID0gcHJvdG9jb2xNYW5hZ2VyLnByb3RvY29sVXA7XHJcbiAgICAgICAgICAgIGxldCBpdGVtUHJvdG9jb2w6SlRJdGVtUHJvdG9jb2w9IHByb3RvY29sVXAuZ2V0UHJvdG9jb2wobWVzc2FnZS5wcm90b2NvbCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtUHJvdG9jb2wgJiYgaXRlbVByb3RvY29sLmlzV2FpdGluZylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvdG9jb2xVcC5leGVjdXRlKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEpUTG9nZ2VyLmluZm8oXCJbc2VuZFBhY2thZ2Uuc2VuZF0gOiBVcFByb3RvY29sOiAgXCIgKyBtZXNzYWdlLnByb3RvY29sLCAgXCIgICBjb250ZW50OiBcIiArIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UuY29udGVudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNoYW5uZWxJbmFjdGl2ZSgpOiB2b2lkXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==