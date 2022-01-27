
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/protocols/JTAbstractProtocolErrorMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXHByb3RvY29sc1xcSlRBYnN0cmFjdFByb3RvY29sRXJyb3JNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQXdCWjtJQXhCRCxXQUFVLEdBQUc7UUFFVDtZQUE2RCxrREFBb0I7WUFFN0U7dUJBRUksaUJBQU87WUFDWCxDQUFDO1lBRU0sOENBQUssR0FBWjtZQUVBLENBQUM7WUFHTSwyREFBa0IsR0FBekIsVUFBMEIsY0FBZ0M7Z0JBRWxELE9BQU8sY0FBYyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQzFELENBQUM7WUFFTSx5REFBZ0IsR0FBdkIsVUFBd0IsY0FBZ0M7WUFHeEQsQ0FBQztZQUNMLHFDQUFDO1FBQUQsQ0FyQkEsQUFxQkMsQ0FyQjRELG9CQUFvQixHQXFCaEY7UUFyQnFCLGtDQUE4QixpQ0FxQm5ELENBQUE7SUFDTCxDQUFDLEVBeEJTLEdBQUcsS0FBSCxHQUFHLFFBd0JaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUQWJzdHJhY3RQcm90b2NvbEVycm9yTWVzc2FnZSBleHRlbmRzIEpUQXBwbGljYXRpb25Db250ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBidWlsZCgpOiB2b2lkIFxyXG4gICAgICAgIHtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgY2hlY2tQYWNrYWdlU3RhdHVzKHJlY2VpdmVQYWNrYWdlOkpUSVJlY2VpdmVQYWNrYWdlKTpib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVQYWNrYWdlLnN0YXR1cyA9PSBKVFByb3RvY29sLk5PUk1BTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzaG93RXJyb3JNZXNzYWdlKHJlY2VpdmVQYWNrYWdlOkpUSVJlY2VpdmVQYWNrYWdlKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==