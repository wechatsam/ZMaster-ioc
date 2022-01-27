
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/protocols/JTAbstractProtocolManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXHByb3RvY29sc1xcSlRBYnN0cmFjdFByb3RvY29sTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0FnRFo7SUFoREQsV0FBVSxHQUFHO1FBRVQ7WUFBd0QsNkNBQW9CO1lBTXhFO2dCQUFBLFlBRUksaUJBQU8sU0FDVjtnQkFQTSxnQkFBVSxHQUFlLElBQUksQ0FBQztnQkFFOUIsa0JBQVksR0FBZSxJQUFJLENBQUM7O1lBS3ZDLENBQUM7WUFFTSx5Q0FBSyxHQUFaO1lBR0EsQ0FBQztZQVFNLHdEQUFvQixHQUEzQixVQUE0QixRQUFlLEVBQUUsT0FBZSxFQUFFLFFBQWdCO2dCQUV0RSxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFDdkUsQ0FBQztZQVNPLHNEQUFrQixHQUF6QixVQUEwQixRQUFlLEVBQUUsT0FBZSxFQUFFLFFBQWdCO2dCQUV6RSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakUsQ0FBQztZQUVLLHdDQUFJLEdBQVgsVUFBWSxPQUFXLEVBQUUsU0FBYTtnQkFFOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7WUFDNUMsQ0FBQztZQUVMLGdDQUFDO1FBQUQsQ0E3Q0EsQUE2Q0MsQ0E3Q3VELG9CQUFvQixHQTZDM0U7UUE3Q3FCLDZCQUF5Qiw0QkE2QzlDLENBQUE7SUFDTCxDQUFDLEVBaERTLEdBQUcsS0FBSCxHQUFHLFFBZ0RaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUQWJzdHJhY3RQcm90b2NvbE1hbmFnZXIgZXh0ZW5kcyBKVEFwcGxpY2F0aW9uQ29udGV4dFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBwcm90b2NvbFVwOkpUSVByb3RvY29sID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIGRvd25Qcm90b2NvbDpKVElQcm90b2NvbCA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYnVpbGQoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOazqOWGjOS4i+ihjOWNj+iurlxyXG4gICAgICAgICAqIEBwYXJhbSBwcm90b2NvbCDljY/orq7lj7dcclxuICAgICAgICAgKiBAcGFyYW0gd2FpdGluZyDmmK/lkKbmmL7npLrovazlnIhcclxuICAgICAgICAgKiBAcGFyYW0gc2VjdXJpdHkg5Yqg5a+G5pa55byPXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVyRG93blByb3RvY29sKHByb3RvY29sOm51bWJlciwgd2FpdGluZzpib29sZWFuLCBzZWN1cml0eT86c3RyaW5nKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3duUHJvdG9jb2wucmVnaXN0ZXJQcm90b2NvbChwcm90b2NvbCwgd2FpdGluZywgc2VjdXJpdHkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDms6jlhozkuIrooYzljY/orq5cclxuICAgICAgICAgKiBAcGFyYW0gcHJvdG9jb2wg5Y2P6K6u5Y+3XHJcbiAgICAgICAgICogQHBhcmFtIHdhaXRpbmcg5piv5ZCm5pi+56S66L2s5ZyIXHJcbiAgICAgICAgICogQHBhcmFtIHNlY3VyaXR5IOino+WvhuaWueW8j1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgICBwdWJsaWMgcmVnaXN0ZXJVcFByb3RvY29sKHByb3RvY29sOm51bWJlciwgd2FpdGluZzpib29sZWFuLCBzZWN1cml0eT86c3RyaW5nKTp2b2lkXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wcm90b2NvbFVwLnJlZ2lzdGVyUHJvdG9jb2wocHJvdG9jb2wsIHdhaXRpbmcsIHNlY3VyaXR5KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYmluZChjbGFzc1VwOmFueSwgY2xhc3NEb3duOmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvdG9jb2xVcCA9IG5ldyBjbGFzc1VwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd25Qcm90b2NvbCA9IG5ldyBjbGFzc0Rvd24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19