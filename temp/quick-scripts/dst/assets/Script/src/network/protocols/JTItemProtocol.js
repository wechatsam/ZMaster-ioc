
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/protocols/JTItemProtocol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXHByb3RvY29sc1xcSlRJdGVtUHJvdG9jb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0FtRFo7SUFuREQsV0FBVSxHQUFHO1FBRVQ7WUFNSyx3QkFBWSxRQUFlO2dCQUpuQixlQUFVLEdBQVcsS0FBSyxDQUFDO2dCQUMzQixvQkFBZSxHQUFVLElBQUksQ0FBQztnQkFDOUIsY0FBUyxHQUFVLENBQUMsQ0FBQztnQkFJMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDN0IsQ0FBQztZQUVNLDhCQUFLLEdBQVosVUFBYSxTQUFpQixFQUFFLFFBQWdCO2dCQUU3QyxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDL0IsQ0FBQztZQUVhLHFCQUFNLEdBQXBCLFVBQXFCLFFBQWUsRUFBRSxTQUFpQixFQUFFLFFBQWdCO2dCQUVuRSxJQUFJLElBQUksR0FBa0IsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLElBQUksQ0FBQztZQUNsQixDQUFDO1lBRUQsc0JBQVcsb0NBQVE7cUJBQW5CO29CQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDMUIsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBVywwQ0FBYztxQkFBekI7b0JBRUksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNoQyxDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLHFDQUFTO3FCQUFwQjtvQkFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzNCLENBQUM7OztlQUFBO1lBRU0sNkJBQUksR0FBWCxVQUFZLE9BQVc7WUFHdkIsQ0FBQztZQUVNLGdDQUFPLEdBQWQsVUFBZSxPQUFXO2dCQUV2QixPQUFPLE9BQU8sQ0FBQztZQUNsQixDQUFDO1lBQ04scUJBQUM7UUFBRCxDQWhEQSxBQWdEQyxJQUFBO1FBaERZLGtCQUFjLGlCQWdEMUIsQ0FBQTtJQUNMLENBQUMsRUFuRFMsR0FBRyxLQUFILEdBQUcsUUFtRFoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRJdGVtUHJvdG9jb2xcclxuICAgIHtcclxuICAgICAgICAgcHJpdmF0ZSBfaXNXYWl0aW5nOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgcHJpdmF0ZSBfc2VjdXJpdHlPcHRpb246c3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgcHJpdmF0ZSBfcHJvdG9jb2w6bnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgIGNvbnN0cnVjdG9yKHByb3RvY29sOm51bWJlcilcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBwdWJsaWMgc2V0dXAoaXNXYWl0aW5nOmJvb2xlYW4sIHNlY3VyaXR5PzpzdHJpbmcpOnZvaWRcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zZWN1cml0eU9wdGlvbiA9IHNlY3VyaXR5O1xyXG4gICAgICAgICAgICB0aGlzLl9pc1dhaXRpbmcgPSBpc1dhaXRpbmc7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHByb3RvY29sOm51bWJlciwgaXNXYWl0aW5nOmJvb2xlYW4sIHNlY3VyaXR5PzpzdHJpbmcpOkpUSXRlbVByb3RvY29sXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgdmFyIGl0ZW06SlRJdGVtUHJvdG9jb2wgPSBuZXcgSlRJdGVtUHJvdG9jb2wocHJvdG9jb2wpO1xyXG4gICAgICAgICAgICAgICBpdGVtLnNldHVwKGlzV2FpdGluZywgc2VjdXJpdHkpO1xyXG4gICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcHVibGljIGdldCBwcm90b2NvbCgpOm51bWJlclxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHB1YmxpYyBnZXQgc2VjdXJpdHlPcHRpb24oKTpzdHJpbmdcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlY3VyaXR5T3B0aW9uO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBwdWJsaWMgZ2V0IGlzV2FpdGluZygpOmJvb2xlYW5cclxuICAgICAgICAge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzV2FpdGluZztcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcHVibGljIGhpZGUobWVzc2FnZTphbnkpOnZvaWRcclxuICAgICAgICAge1xyXG5cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcHVibGljIGRlY3J5cHQobWVzc2FnZTphbnkpOmFueVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19