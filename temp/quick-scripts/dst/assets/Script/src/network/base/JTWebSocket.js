
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/base/JTWebSocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a154faQkXFJeqz5QdqzSj18', 'JTWebSocket');
// Script/src/network/base/JTWebSocket.ts

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
        var JTWebSocket = (function (_super) {
            __extends(JTWebSocket, _super);
            function JTWebSocket(host, port, byteClass, protocols) {
                if (host === void 0) { host = null; }
                if (port === void 0) { port = 0; }
                if (byteClass === void 0) { byteClass = null; }
                if (protocols === void 0) { protocols = null; }
                var _this = _super.call(this) || this;
                _this.disableInput = false;
                _this.protocols = [];
                _this._byteClass = byteClass ? byteClass : JTBuffer;
                _this.protocols = protocols;
                _this.endian = JTWebSocket.BIG_ENDIAN;
                if (host && port > 0 && port < 65535)
                    _this.connect(host, port);
                return _this;
            }
            Object.defineProperty(JTWebSocket.prototype, "input", {
                get: function () {
                    return this._input;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTWebSocket.prototype, "output", {
                get: function () {
                    return this._output;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTWebSocket.prototype, "connected", {
                get: function () {
                    return this._connected;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTWebSocket.prototype, "endian", {
                get: function () {
                    return this._endian;
                },
                set: function (value) {
                    this._endian = value;
                    if (this._input != null)
                        this._input.endian = value;
                    if (this._output != null)
                        this._output.endian = value;
                },
                enumerable: false,
                configurable: true
            });
            JTWebSocket.prototype.connect = function (host, port) {
                var url = "ws://" + host + ":" + port;
                this.connectByUrl(url);
            };
            JTWebSocket.prototype.connectByUrl = function (url) {
                var _this = this;
                if (this._socket != null)
                    this.close();
                this._socket && this.clean();
                if (!this.protocols || this.protocols.length == 0) {
                    this._socket = new WebSocket(url);
                }
                else {
                    this._socket = new WebSocket(url, this.protocols);
                }
                this._socket.binaryType = "arraybuffer";
                this._output = new this._byteClass();
                this._output.endian = this.endian;
                this._input = new this._byteClass();
                this._input.endian = this.endian;
                this._addInputPosition = 0;
                this._socket.onopen = function (e) {
                    _this._onOpen(e);
                };
                this._socket.onmessage = function (msg) {
                    _this._onMessage(msg);
                };
                this._socket.onclose = function (e) {
                    _this._onClose(e);
                };
                this._socket.onerror = function (e) {
                    _this._onError(e);
                };
            };
            JTWebSocket.prototype.clean = function () {
                this.close();
                this._connected = false;
                this._socket.onopen = null;
                this._socket.onmessage = null;
                this._socket.onclose = null;
                this._socket.onerror = null;
                this._socket = null;
                this.removes();
            };
            JTWebSocket.prototype.close = function () {
                if (this._socket != null) {
                    try {
                        this._socket.close();
                    }
                    catch (e) {
                    }
                }
            };
            JTWebSocket.prototype._onOpen = function (e) {
                this._connected = true;
                this.dispatchEvent(JTWebSocket.OPEN, e);
            };
            JTWebSocket.prototype._onMessage = function (msg) {
                if (!msg || !msg.data)
                    return;
                var data = msg.data;
                if (this.disableInput && data) {
                    this.dispatchEvent(JTWebSocket.MESSAGE, data);
                    return;
                }
                if (this._input.length > 0 && this._input.bytesAvailable < 1) {
                    this._input.clear();
                    this._addInputPosition = 0;
                }
                var pre = this._input.pos;
                !this._addInputPosition && (this._addInputPosition = 0);
                this._input.pos = this._addInputPosition;
                if (data) {
                    if (typeof (data) == 'string') {
                        this._input.writeUTFBytes(data);
                    }
                    else {
                        this._input.writeArrayBuffer(data);
                    }
                    this._addInputPosition = this._input.pos;
                    this._input.pos = pre;
                }
                this.dispatchEvent(JTWebSocket.MESSAGE, data);
            };
            JTWebSocket.prototype._onClose = function (e) {
                this._connected = false;
                this.dispatchEvent(JTWebSocket.CLOSE, e);
            };
            JTWebSocket.prototype._onError = function (e) {
                this.dispatchEvent(JTWebSocket.ERROR, e);
            };
            JTWebSocket.prototype.send = function (data) {
                this._socket.send(data);
            };
            JTWebSocket.prototype.flush = function () {
                if (this._output && this._output.length > 0) {
                    var evt;
                    try {
                        this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                    }
                    catch (e) {
                        evt = e;
                    }
                    this._output.endian = this.endian;
                    this._output.clear();
                    if (evt)
                        this.dispatchEvent(JTWebSocket.ERROR, evt);
                }
            };
            JTWebSocket.LITTLE_ENDIAN = "littleEndian";
            JTWebSocket.BIG_ENDIAN = "bigEndian";
            JTWebSocket.OPEN = "open";
            JTWebSocket.MESSAGE = "message";
            JTWebSocket.CLOSE = "close";
            JTWebSocket.ERROR = "error";
            return JTWebSocket;
        }(JTEventDispatcher));
        com.JTWebSocket = JTWebSocket;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGJhc2VcXEpUV2ViU29ja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLElBQVUsR0FBRyxDQWtRWjtJQWxRRCxXQUFVLEdBQUc7UUFNVDtZQUFpQywrQkFBaUI7WUFzRjlDLHFCQUFZLElBQXdCLEVBQUUsSUFBZ0IsRUFBRSxTQUErQixFQUFFLFNBQTRCO2dCQUF6RyxxQkFBQSxFQUFBLFdBQXdCO2dCQUFFLHFCQUFBLEVBQUEsUUFBZ0I7Z0JBQUUsMEJBQUEsRUFBQSxnQkFBK0I7Z0JBQUUsMEJBQUEsRUFBQSxnQkFBNEI7Z0JBQXJILFlBQ0ksaUJBQU8sU0FLVjtnQkE1REQsa0JBQVksR0FBWSxLQUFLLENBQUM7Z0JBUzlCLGVBQVMsR0FBUSxFQUFFLENBQUM7Z0JBK0NoQixLQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUMzQixLQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JDLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLEtBQUs7b0JBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O1lBQ25FLENBQUM7WUE5Q0Qsc0JBQUksOEJBQUs7cUJBQVQ7b0JBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUN2QixDQUFDOzs7ZUFBQTtZQUtELHNCQUFJLCtCQUFNO3FCQUFWO29CQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDeEIsQ0FBQzs7O2VBQUE7WUFLRCxzQkFBSSxrQ0FBUztxQkFBYjtvQkFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzNC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QUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN6QyxJQUFJLEdBQVEsQ0FBQztvQkFDYixJQUFJO3dCQUNBLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztxQkFDL0Y7b0JBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ1IsR0FBRyxHQUFHLENBQUMsQ0FBQztxQkFDWDtvQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNyQixJQUFJLEdBQUc7d0JBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUN2RDtZQUNMLENBQUM7WUFwUE0seUJBQWEsR0FBVyxjQUFjLENBQUM7WUFNdkMsc0JBQVUsR0FBVyxXQUFXLENBQUM7WUFTakMsZ0JBQUksR0FBVyxNQUFNLENBQUM7WUFFdEIsbUJBQU8sR0FBVyxTQUFTLENBQUM7WUFFNUIsaUJBQUssR0FBVyxPQUFPLENBQUM7WUFFeEIsaUJBQUssR0FBVyxPQUFPLENBQUM7WUFnT25DLGtCQUFDO1NBM1BELEFBMlBDLENBM1BnQyxpQkFBaUIsR0EyUGpEO1FBM1BZLGVBQVcsY0EyUHZCLENBQUE7SUFDTCxDQUFDLEVBbFFTLEdBQUcsS0FBSCxHQUFHLFFBa1FaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5uYW1lc3BhY2UgY29tIFxyXG57XHJcbi8qKlxyXG4gKiA8cD4gPGNvZGU+U29ja2V0PC9jb2RlPiDlsIHoo4XkuoYgSFRNTDUgV2ViU29ja2V0IO+8jOWFgeiuuOacjeWKoeWZqOerr+S4juWuouaIt+err+i/m+ihjOWFqOWPjOW3pe+8iGZ1bGwtZHVwbGV477yJ55qE5a6e5pe26YCa5L+h77yM5bm25LiU5YWB6K646Leo5Z+f6YCa5L+h44CC5Zyo5bu656uL6L+e5o6l5ZCO77yM5pyN5Yqh5Zmo5ZKMIEJyb3dzZXIvQ2xpZW50IEFnZW50IOmDveiDveS4u+WKqOeahOWQkeWvueaWueWPkemAgeaIluaOpeaUtuaWh+acrOWSjOS6jOi/m+WItuaVsOaNruOAgjwvcD5cclxuICogPHA+6KaB5L2/55SoIDxjb2RlPlNvY2tldDwvY29kZT4g57G755qE5pa55rOV77yM6K+35YWI5L2/55So5p6E6YCg5Ye95pWwIDxjb2RlPm5ldyBTb2NrZXQ8L2NvZGU+IOWIm+W7uuS4gOS4qiA8Y29kZT5Tb2NrZXQ8L2NvZGU+IOWvueixoeOAgiA8Y29kZT5Tb2NrZXQ8L2NvZGU+IOS7peW8guatpeaWueW8j+S8oOi+k+WSjOaOpeaUtuaVsOaNruOAgjwvcD5cclxuICovXHJcbiAgICBleHBvcnQgY2xhc3MgSlRXZWJTb2NrZXQgZXh0ZW5kcyBKVEV2ZW50RGlzcGF0Y2hlciB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPHA+5Li75py65a2X6IqC5bqP77yM5pivIENQVSDlrZjmlL7mlbDmja7nmoTkuKTnp43kuI3lkIzpobrluo/vvIzljIXmi6zlsI/nq6/lrZfoioLluo/lkozlpKfnq6/lrZfoioLluo/jgII8L3A+XHJcbiAgICAgICAgICogPHA+IExJVFRMRV9FTkRJQU4g77ya5bCP56uv5a2X6IqC5bqP77yM5Zyw5Z2A5L2O5L2N5a2Y5YKo5YC855qE5L2O5L2N77yM5Zyw5Z2A6auY5L2N5a2Y5YKo5YC855qE6auY5L2N44CCPC9wPlxyXG4gICAgICAgICAqIDxwPiBCSUdfRU5ESUFOIO+8muWkp+err+Wtl+iKguW6j++8jOWcsOWdgOS9juS9jeWtmOWCqOWAvOeahOmrmOS9je+8jOWcsOWdgOmrmOS9jeWtmOWCqOWAvOeahOS9juS9jeOAguacieaXtuS5n+ensOS5i+S4uue9kee7nOWtl+iKguW6j+OAgjwvcD5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgTElUVExFX0VORElBTjogc3RyaW5nID0gXCJsaXR0bGVFbmRpYW5cIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7kuLvmnLrlrZfoioLluo/vvIzmmK8gQ1BVIOWtmOaUvuaVsOaNrueahOS4pOenjeS4jeWQjOmhuuW6j++8jOWMheaLrOWwj+err+Wtl+iKguW6j+WSjOWkp+err+Wtl+iKguW6j+OAgjwvcD5cclxuICAgICAgICAgKiA8cD4gQklHX0VORElBTiDvvJrlpKfnq6/lrZfoioLluo/vvIzlnLDlnYDkvY7kvY3lrZjlgqjlgLznmoTpq5jkvY3vvIzlnLDlnYDpq5jkvY3lrZjlgqjlgLznmoTkvY7kvY3jgILmnInml7bkuZ/np7DkuYvkuLrnvZHnu5zlrZfoioLluo/jgII8L3A+XHJcbiAgICAgICAgICogPHA+IExJVFRMRV9FTkRJQU4g77ya5bCP56uv5a2X6IqC5bqP77yM5Zyw5Z2A5L2O5L2N5a2Y5YKo5YC855qE5L2O5L2N77yM5Zyw5Z2A6auY5L2N5a2Y5YKo5YC855qE6auY5L2N44CCPC9wPlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHN0YXRpYyBCSUdfRU5ESUFOOiBzdHJpbmcgPSBcImJpZ0VuZGlhblwiO1xyXG4gICAgICAgIF9lbmRpYW46IHN0cmluZztcclxuICAgICAgICBwcm90ZWN0ZWQgX3NvY2tldDogYW55O1xyXG4gICAgICAgIHByaXZhdGUgX2Nvbm5lY3RlZDogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIF9hZGRJbnB1dFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICAgICAgcHJpdmF0ZSBfaW5wdXQ6IGFueTtcclxuICAgICAgICBwcml2YXRlIF9vdXRwdXQ6IGFueTtcclxuXHJcbiAgICAgICAgLyoqIOWumuS5iSBvcGVuIOS6i+S7tuWvueixoeeahCB0eXBlIOWxnuaAp+WAvOOAgiovXHJcbiAgICAgICAgc3RhdGljIE9QRU46IHN0cmluZyA9IFwib3BlblwiO1xyXG4gICAgICAgIC8qKiDlrprkuYkgbWVzc2FnZSDkuovku7blr7nosaHnmoQgdHlwZSDlsZ7mgKflgLzjgIIqL1xyXG4gICAgICAgIHN0YXRpYyBNRVNTQUdFOiBzdHJpbmcgPSBcIm1lc3NhZ2VcIjtcclxuICAgICAgICAvKiog5a6a5LmJIGNsb3NlIOS6i+S7tuWvueixoeeahCB0eXBlIOWxnuaAp+WAvOOAgiovXHJcbiAgICAgICAgc3RhdGljIENMT1NFOiBzdHJpbmcgPSBcImNsb3NlXCI7XHJcbiAgICAgICAgLyoqIOWumuS5iSBlcnJvciDkuovku7blr7nosaHnmoQgdHlwZSDlsZ7mgKflgLzjgIIqL1xyXG4gICAgICAgIHN0YXRpYyBFUlJPUjogc3RyaW5nID0gXCJlcnJvclwiO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuI3lho3nvJPlrZjmnI3liqHnq6/lj5HmnaXnmoTmlbDmja7vvIzlpoLmnpzkvKDovpPnmoTmlbDmja7kuLrlrZfnrKbkuLLmoLzlvI/vvIzlu7rorq7orr7nva7kuLp0cnVl77yM5YeP5bCR5LqM6L+b5Yi26L2s5o2i5raI6ICX44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGlzYWJsZUlucHV0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog55So5p2l5Y+R6YCB5ZKM5o6l5pS25pWw5o2u55qEIDxjb2RlPkJ5dGU8L2NvZGU+IOexu+OAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgX2J5dGVDbGFzczogbmV3ICgpID0+IGFueTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7lrZDljY/orq7lkI3np7DjgILlrZDljY/orq7lkI3np7DlrZfnrKbkuLLvvIzmiJbnlLHlpJrkuKrlrZDljY/orq7lkI3np7DlrZfnrKbkuLLmnoTmiJDnmoTmlbDnu4TjgILlv4XpobvlnKjosIPnlKggY29ubmVjdCDmiJbogIUgY29ubmVjdEJ5VXJsIOS5i+WJjei/m+ihjOi1i+WAvO+8jOWQpuWImeaXoOaViOOAgjwvcD5cclxuICAgICAgICAgKiA8cD7mjIflrprlkI7vvIzlj6rmnInlvZPmnI3liqHlmajpgInmi6nkuoblhbbkuK3nmoTmn5DkuKrlrZDljY/orq7vvIzov57mjqXmiY3og73lu7rnq4vmiJDlip/vvIzlkKbliJnlu7rnq4vlpLHotKXvvIzmtL7lj5EgRXZlbnQuRVJST1Ig5LqL5Lu244CCPC9wPlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RvY29sczogYW55ID0gW107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOe8k+WtmOeahOacjeWKoeerr+WPkeadpeeahOaVsOaNruOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldCBpbnB1dCgpOiBhbnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooajnpLrpnIDopoHlj5HpgIHoh7PmnI3liqHnq6/nmoTnvJPlhrLljLrkuK3nmoTmlbDmja7jgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQgb3V0cHV0KCk6IGFueSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vdXRwdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDooajnpLrmraQgU29ja2V0IOWvueixoeebruWJjeaYr+WQpuW3sui/nuaOpeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldCBjb25uZWN0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7kuLvmnLrlrZfoioLluo/vvIzmmK8gQ1BVIOWtmOaUvuaVsOaNrueahOS4pOenjeS4jeWQjOmhuuW6j++8jOWMheaLrOWwj+err+Wtl+iKguW6j+WSjOWkp+err+Wtl+iKguW6j+OAgjwvcD5cclxuICAgICAgICAgKiA8cD4gTElUVExFX0VORElBTiDvvJrlsI/nq6/lrZfoioLluo/vvIzlnLDlnYDkvY7kvY3lrZjlgqjlgLznmoTkvY7kvY3vvIzlnLDlnYDpq5jkvY3lrZjlgqjlgLznmoTpq5jkvY3jgII8L3A+XHJcbiAgICAgICAgICogPHA+IEJJR19FTkRJQU4g77ya5aSn56uv5a2X6IqC5bqP77yM5Zyw5Z2A5L2O5L2N5a2Y5YKo5YC855qE6auY5L2N77yM5Zyw5Z2A6auY5L2N5a2Y5YKo5YC855qE5L2O5L2N44CCPC9wPlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldCBlbmRpYW4oKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VuZGlhbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBlbmRpYW4odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRpYW4gPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lucHV0ICE9IG51bGwpIHRoaXMuX2lucHV0LmVuZGlhbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb3V0cHV0ICE9IG51bGwpIHRoaXMuX291dHB1dC5lbmRpYW4gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIDxwPuWIm+W7uuaWsOeahCBTb2NrZXQg5a+56LGh44CC6buY6K6k5a2X6IqC5bqP5Li6IFNvY2tldC5CSUdfRU5ESUFOIOOAguiLpeacquaMh+WumuWPguaVsO+8jOWwhuWIm+W7uuS4gOS4quacgOWIneWkhOS6juaWreW8gOeKtuaAgeeahOWll+aOpeWtl+OAguiLpeaMh+WumuS6huacieaViOWPguaVsO+8jOWImeWwneivlei/nuaOpeWIsOaMh+WumueahOS4u+acuuWSjOerr+WPo+OAgjwvcD5cclxuICAgICAgICAgKiBAcGFyYW0gaG9zdFx0XHTmnI3liqHlmajlnLDlnYDjgIJcclxuICAgICAgICAgKiBAcGFyYW0gcG9ydFx0XHTmnI3liqHlmajnq6/lj6PjgIJcclxuICAgICAgICAgKiBAcGFyYW0gYnl0ZUNsYXNzXHTnlKjkuo7mjqXmlLblkozlj5HpgIHmlbDmja7nmoQgQnl0ZSDnsbvjgILlpoLmnpzkuLogbnVsbCDvvIzliJnkvb/nlKggQnl0ZSDnsbvvvIzkuZ/lj6/kvKDlhaUgQnl0ZSDnsbvnmoTlrZDnsbvjgIJcclxuICAgICAgICAgKiBAcGFyYW0gcHJvdG9jb2xzXHTlrZDljY/orq7lkI3np7DjgILlrZDljY/orq7lkI3np7DlrZfnrKbkuLLvvIzmiJbnlLHlpJrkuKrlrZDljY/orq7lkI3np7DlrZfnrKbkuLLmnoTmiJDnmoTmlbDnu4RcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3Rvcihob3N0OiBzdHJpbmd8bnVsbCA9IG51bGwsIHBvcnQ6IG51bWJlciA9IDAsIGJ5dGVDbGFzczogbmV3ICgpID0+IGFueSA9IG51bGwsIHByb3RvY29sczogYW55W118bnVsbCA9IG51bGwpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fYnl0ZUNsYXNzID0gYnl0ZUNsYXNzID8gYnl0ZUNsYXNzIDogSlRCdWZmZXI7XHJcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2xzID0gcHJvdG9jb2xzO1xyXG4gICAgICAgICAgICB0aGlzLmVuZGlhbiA9IEpUV2ViU29ja2V0LkJJR19FTkRJQU47XHJcbiAgICAgICAgICAgIGlmIChob3N0ICYmIHBvcnQgPiAwICYmIHBvcnQgPCA2NTUzNSkgdGhpcy5jb25uZWN0KGhvc3QsIHBvcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPHA+6L+e5o6l5Yiw5oyH5a6a55qE5Li75py65ZKM56uv5Y+j44CCPC9wPlxyXG4gICAgICAgICAqIDxwPui/nuaOpeaIkOWKn+a0vuWPkSBFdmVudC5PUEVOIOS6i+S7tu+8m+i/nuaOpeWksei0pea0vuWPkSBFdmVudC5FUlJPUiDkuovku7bvvJvov57mjqXooqvlhbPpl63mtL7lj5EgRXZlbnQuQ0xPU0Ug5LqL5Lu277yb5o6l5pS25Yiw5pWw5o2u5rS+5Y+RIEV2ZW50Lk1FU1NBR0Ug5LqL5Lu277ybIOmZpOS6hiBFdmVudC5NRVNTQUdFIOS6i+S7tuWPguaVsOS4uuaVsOaNruWGheWuue+8jOWFtuS7luS6i+S7tuWPguaVsOmDveaYr+WOn+eUn+eahCBIVE1MIERPTSBFdmVudCDlr7nosaHjgII8L3A+XHJcbiAgICAgICAgICogQHBhcmFtIGhvc3RcdOacjeWKoeWZqOWcsOWdgOOAglxyXG4gICAgICAgICAqIEBwYXJhbSBwb3J0XHTmnI3liqHlmajnq6/lj6PjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25uZWN0KGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHZhciB1cmw6IHN0cmluZyA9IFwid3M6Ly9cIiArIGhvc3QgKyBcIjpcIiArIHBvcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdEJ5VXJsKHVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7ov57mjqXliLDmjIflrprnmoTmnI3liqHnq68gV2ViU29ja2V0IFVSTOOAgiBVUkwg57G75Ly8IHdzOi8veW91cmRvbWFpbjpwb3J044CCPC9wPlxyXG4gICAgICAgICAqIDxwPui/nuaOpeaIkOWKn+a0vuWPkSBFdmVudC5PUEVOIOS6i+S7tu+8m+i/nuaOpeWksei0pea0vuWPkSBFdmVudC5FUlJPUiDkuovku7bvvJvov57mjqXooqvlhbPpl63mtL7lj5EgRXZlbnQuQ0xPU0Ug5LqL5Lu277yb5o6l5pS25Yiw5pWw5o2u5rS+5Y+RIEV2ZW50Lk1FU1NBR0Ug5LqL5Lu277ybIOmZpOS6hiBFdmVudC5NRVNTQUdFIOS6i+S7tuWPguaVsOS4uuaVsOaNruWGheWuue+8jOWFtuS7luS6i+S7tuWPguaVsOmDveaYr+WOn+eUn+eahCBIVE1MIERPTSBFdmVudCDlr7nosaHjgII8L3A+XHJcbiAgICAgICAgICogQHBhcmFtIHVybFx06KaB6L+e5o6l55qE5pyN5Yqh56uvIFdlYlNvY2tldCBVUkzjgIIgVVJMIOexu+S8vCB3czovL3lvdXJkb21haW46cG9ydOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbm5lY3RCeVVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc29ja2V0ICE9IG51bGwpIHRoaXMuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldCAmJiB0aGlzLmNsZWFuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJvdG9jb2xzIHx8IHRoaXMucHJvdG9jb2xzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCwgdGhpcy5wcm90b2NvbHMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zb2NrZXQuYmluYXJ5VHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX291dHB1dCA9IG5ldyB0aGlzLl9ieXRlQ2xhc3MoKTtcclxuICAgICAgICAgICAgdGhpcy5fb3V0cHV0LmVuZGlhbiA9IHRoaXMuZW5kaWFuO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dCA9IG5ldyB0aGlzLl9ieXRlQ2xhc3MoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXQuZW5kaWFuID0gdGhpcy5lbmRpYW47XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZElucHV0UG9zaXRpb24gPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc29ja2V0Lm9ub3BlbiA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uT3BlbihlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fc29ja2V0Lm9ubWVzc2FnZSA9IChtc2c6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25NZXNzYWdlKG1zZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldC5vbmNsb3NlID0gKGU6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25DbG9zZShlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fc29ja2V0Lm9uZXJyb3IgPSAoZTogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkVycm9yKGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5riF55CGU29ja2V077ya5YWz6ZetU29ja2V06ZO+5o6l77yM5YWz6Zet5LqL5Lu255uR5ZCs77yM6YeN572uU29ja2V0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xlYW4oKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldC5vbm9wZW4gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zb2NrZXQub25tZXNzYWdlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fc29ja2V0Lm9uY2xvc2UgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zb2NrZXQub25lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5YWz6Zet6L+e5o6l44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zb2NrZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb2NrZXQuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiDov57mjqXlu7rnq4vmiJDlip8g44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIF9vbk9wZW4oZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChKVFdlYlNvY2tldC5PUEVOLCBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICog5o6l5pS25Yiw5pWw5o2u5aSE55CG5pa55rOV44CCXHJcbiAgICAgICAgICogQHBhcmFtIG1zZyDmlbDmja7jgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgX29uTWVzc2FnZShtc2c6IGFueSk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAoIW1zZyB8fCAhbXNnLmRhdGEpIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGRhdGE6IGFueSA9IG1zZy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlSW5wdXQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEpUV2ViU29ja2V0Lk1FU1NBR0UsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnB1dC5sZW5ndGggPiAwICYmIHRoaXMuX2lucHV0LmJ5dGVzQXZhaWxhYmxlIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5wdXQuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZElucHV0UG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwcmU6IG51bWJlciA9IHRoaXMuX2lucHV0LnBvcztcclxuICAgICAgICAgICAgIXRoaXMuX2FkZElucHV0UG9zaXRpb24gJiYgKHRoaXMuX2FkZElucHV0UG9zaXRpb24gPSAwKTtcclxuICAgICAgICAgICAgdGhpcy5faW5wdXQucG9zID0gdGhpcy5fYWRkSW5wdXRQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChkYXRhKSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0LndyaXRlVVRGQnl0ZXMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lucHV0LndyaXRlQXJyYXlCdWZmZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRJbnB1dFBvc2l0aW9uID0gdGhpcy5faW5wdXQucG9zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5wdXQucG9zID0gcHJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChKVFdlYlNvY2tldC5NRVNTQUdFLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICog6L+e5o6l6KKr5YWz6Zet5aSE55CG5pa55rOV44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIF9vbkNsb3NlKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KEpUV2ViU29ja2V0LkNMT1NFLCBlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiDlh7rnjrDlvILluLjlpITnkIbmlrnms5XjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgX29uRXJyb3IoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChKVFdlYlNvY2tldC5FUlJPUiwgZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWPkemAgeaVsOaNruWIsOacjeWKoeWZqOOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0ZGF0YSDpnIDopoHlj5HpgIHnmoTmlbDmja7vvIzlj6/ku6XmmK9TdHJpbmfmiJbogIVBcnJheUJ1ZmZlcuOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNlbmQoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldC5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Y+R6YCB57yT5Yay5Yy65Lit55qE5pWw5o2u5Yiw5pyN5Yqh5Zmo44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmx1c2goKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vdXRwdXQgJiYgdGhpcy5fb3V0cHV0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBldnQ6IGFueTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ja2V0ICYmIHRoaXMuX3NvY2tldC5zZW5kKHRoaXMuX291dHB1dC5fX2dldEJ1ZmZlcigpLnNsaWNlKDAsIHRoaXMuX291dHB1dC5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBldnQgPSBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3V0cHV0LmVuZGlhbiA9IHRoaXMuZW5kaWFuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3V0cHV0LmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZ0KSB0aGlzLmRpc3BhdGNoRXZlbnQoSlRXZWJTb2NrZXQuRVJST1IsIGV2dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=