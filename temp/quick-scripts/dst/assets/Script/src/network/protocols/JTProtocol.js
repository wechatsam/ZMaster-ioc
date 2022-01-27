
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/protocols/JTProtocol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXHByb3RvY29sc1xcSlRQcm90b2NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQStEWjtJQS9ERCxXQUFVLEdBQUc7UUFFVDtZQVdJO2dCQVRRLGVBQVUsR0FBWSxJQUFJLENBQUM7Z0JBRTNCLGNBQVMsR0FBWSxJQUFJLENBQUM7Z0JBRTFCLGlCQUFZLEdBQVUsSUFBSSxDQUFDO2dCQU8vQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQixDQUFDO1lBRU0sMEJBQUssR0FBWjtZQUlBLENBQUM7WUFTTSxxQ0FBZ0IsR0FBdkIsVUFBd0IsUUFBZSxFQUFFLE9BQWUsRUFBRSxRQUFnQjtnQkFFbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ2hGLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBTUQsc0JBQVcsaUNBQVM7cUJBQXBCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBVyxnQ0FBUTtxQkFBbkI7b0JBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMxQixDQUFDOzs7ZUFBQTtZQUVNLGdDQUFXLEdBQWxCLFVBQW1CLFFBQWU7Z0JBRTlCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBRU0sNEJBQU8sR0FBZCxVQUFlLE9BQVk7WUFHM0IsQ0FBQztZQW5EYSxpQkFBTSxHQUFVLENBQUMsQ0FBQztZQUNsQixnQkFBSyxHQUFVLENBQUMsQ0FBQztZQW1EbkMsaUJBQUM7U0E1REQsQUE0REMsSUFBQTtRQTVEWSxjQUFVLGFBNER0QixDQUFBO0lBQ0wsQ0FBQyxFQS9EUyxHQUFHLEtBQUgsR0FBRyxRQStEWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBKVFByb3RvY29sIGltcGxlbWVudHMgSlRJUHJvdG9jb2xcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIF9wcm90b2NvbHM6bnVtYmVyW10gPSBudWxsO1xyXG5cclxuICAgICAgICBwcml2YXRlIF9lbmNyeXB0czpudW1iZXJbXSA9IG51bGw7XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3Byb3RvY29sTWFwOk9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBOT1JNQUw6bnVtYmVyID0gMTtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVSUk9SOm51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb3RvY29scyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm90b2NvbE1hcCA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYnVpbGQoKTogdm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcHJvdG9jb2wg5Y2P6K6u5Y+3XHJcbiAgICAgICAgICogQHBhcmFtIHdhaXRpbmcg5piv5ZCm5pi+56S66ZqQ6JeP6YCa5L+h6L2s5ZyIXHJcbiAgICAgICAgICogQHBhcmFtIGVuY3J5cHQg5piv5ZCm5pi+56S65Yqg6Kej5a+G55qE6L2s5ZyIXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVyUHJvdG9jb2wocHJvdG9jb2w6bnVtYmVyLCB3YWl0aW5nOmJvb2xlYW4sIHNlY3VyaXR5PzpzdHJpbmcpOnZvaWQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICB0aGlzLl9wcm90b2NvbE1hcFtwcm90b2NvbF0gPSBKVEl0ZW1Qcm90b2NvbC5jcmVhdGUocHJvdG9jb2wsIHdhaXRpbmcsIHNlY3VyaXR5KVxyXG4gICAgICAgICAgICAgICB3YWl0aW5nICYmIHRoaXMuX3Byb3RvY29scy5wdXNoKHByb3RvY29sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWQjOaXtuaLpeacieWKoOino+WvhuWKn+iDveeahOWNj+iuruWPt+WIl+ihqFxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBnZXQgcHJvdG9jb2xzKCk6bnVtYmVyW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm90b2NvbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGVuY3J5cHRzKCk6bnVtYmVyW11cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbmNyeXB0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRQcm90b2NvbChwcm90b2NvbDpudW1iZXIpOkpUSXRlbVByb3RvY29sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2xNYXBbcHJvdG9jb2xdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGV4ZWN1dGUobWVzc2FnZTogYW55KTogdm9pZCBcclxuICAgICAgICB7XHJcbiBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19