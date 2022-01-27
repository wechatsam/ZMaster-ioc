
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/base/JTHttpRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b1b885fQVHaqf5duVzzCau', 'JTHttpRequest');
// Script/src/network/base/JTHttpRequest.ts

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
        var JTHttpRequest = (function (_super) {
            __extends(JTHttpRequest, _super);
            function JTHttpRequest() {
                var _this_1 = _super !== null && _super.apply(this, arguments) || this;
                _this_1._http = new XMLHttpRequest();
                return _this_1;
            }
            JTHttpRequest.prototype.send = function (url, data, method, responseType, headers) {
                if (data === void 0) { data = null; }
                if (method === void 0) { method = "get"; }
                if (responseType === void 0) { responseType = "text"; }
                if (headers === void 0) { headers = null; }
                this._responseType = responseType;
                this._data = null;
                this._url = url;
                var _this = this;
                var http = this._http;
                http.open(method, url, true);
                var isJson = false;
                if (headers) {
                    for (var i = 0; i < headers.length; i++) {
                        http.setRequestHeader(headers[i++], headers[i]);
                    }
                }
                else if (!(window.conch)) {
                    if (!data || typeof (data) == 'string')
                        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    else {
                        http.setRequestHeader("Content-Type", "application/json");
                        if (!(data instanceof ArrayBuffer) && typeof data !== "string") {
                            isJson = true;
                        }
                    }
                }
                var restype = responseType !== "arraybuffer" ? "text" : "arraybuffer";
                http.responseType = restype;
                if (http.dataType) {
                    http.dataType = restype;
                }
                http.onerror = function (e) {
                    _this._onError(e);
                };
                http.onabort = function (e) {
                    _this._onAbort(e);
                };
                http.onprogress = function (e) {
                    _this._onProgress(e);
                };
                http.onload = function (e) {
                    _this._onLoad(e);
                };
                http.send(isJson ? JSON.stringify(data) : data);
            };
            JTHttpRequest.prototype._onProgress = function (e) {
                if (e && e.lengthComputable)
                    this.dispatchEvent(JTHttpRequest.PROGRESS, e.loaded / e.total);
            };
            JTHttpRequest.prototype._onAbort = function (e) {
                this.error("Request was aborted by user");
            };
            JTHttpRequest.prototype._onError = function (e) {
                this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
            };
            JTHttpRequest.prototype._onLoad = function (e) {
                var http = this._http;
                var status = http.status !== undefined ? http.status : 200;
                if (status === 200 || status === 204 || status === 0) {
                    this.complete();
                }
                else {
                    this.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
                }
            };
            JTHttpRequest.prototype.error = function (message) {
                this.clear();
                console.warn(this.url, message);
                this.dispatchEvent(JTHttpRequest.ERROR, message);
            };
            JTHttpRequest.prototype.complete = function () {
                this.clear();
                var flag = true;
                try {
                    if (this._responseType === "json") {
                        this._data = JSON.parse(this._http.responseText);
                    }
                    else if (this._responseType === "xml") {
                        this._data = JTHttpRequest.parseXMLFromString(this._http.responseText);
                    }
                    else {
                        this._data = this._http.response || this._http.responseText;
                    }
                }
                catch (e) {
                    flag = false;
                    this.error(e.message);
                }
                flag && this.dispatchEvent(JTHttpRequest.COMPLETE, this._data instanceof Array ? [this._data] : this._data);
            };
            JTHttpRequest.prototype.clear = function () {
                var http = this._http;
                http.onerror = http.onabort = http.onprogress = http.onload = null;
            };
            Object.defineProperty(JTHttpRequest.prototype, "url", {
                get: function () {
                    return this._url;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTHttpRequest.prototype, "data", {
                get: function () {
                    return this._data;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTHttpRequest.prototype, "http", {
                get: function () {
                    return this._http;
                },
                enumerable: false,
                configurable: true
            });
            JTHttpRequest._urlEncode = encodeURI;
            JTHttpRequest.ERROR = "error";
            JTHttpRequest.COMPLETE = "complete";
            JTHttpRequest.PROGRESS = "progress";
            JTHttpRequest.parseXMLFromString = function (value) {
                var rst;
                value = value.replace(/>\s+</g, '><');
                rst = (new DOMParser()).parseFromString(value, 'text/xml');
                if (rst.firstChild.textContent.indexOf("This page contains the following errors") > -1) {
                    throw new Error(rst.firstChild.firstChild.textContent);
                }
                return rst;
            };
            return JTHttpRequest;
        }(JTEventDispatcher));
        com.JTHttpRequest = JTHttpRequest;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGJhc2VcXEpUSHR0cFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBcU9aO0lBck9ELFdBQVUsR0FBRztRQU9MO1lBQW1DLGlDQUFpQjtZQUFwRDtnQkFBQSx1RUE2TkM7Z0JBMU5pQixhQUFLLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzs7WUEwTi9DLENBQUM7WUFoTU8sNEJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFnQixFQUFFLE1BQXNCLEVBQUUsWUFBNkIsRUFBRSxPQUEwQjtnQkFBbkcscUJBQUEsRUFBQSxXQUFnQjtnQkFBRSx1QkFBQSxFQUFBLGNBQXNCO2dCQUFFLDZCQUFBLEVBQUEscUJBQTZCO2dCQUFFLHdCQUFBLEVBQUEsY0FBMEI7Z0JBRTdHLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFLbEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQ2hCLElBQUksS0FBSyxHQUFrQixJQUFJLENBQUM7Z0JBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixJQUFJLE9BQU8sRUFDWDtvQkFDUSxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDL0M7d0JBQ1EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2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LENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDOUQ7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDbkIsQ0FBQyxDQUFBO1lBK0JULG9CQUFDO1NBN05ELEFBNk5DLENBN05rQyxpQkFBaUIsR0E2Tm5EO1FBN05ZLGlCQUFhLGdCQTZOekIsQ0FBQTtJQUNULENBQUMsRUFyT1MsR0FBRyxLQUFILEdBQUcsUUFxT1oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57ICAgICAgIFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD4gPGNvZGU+SHR0cFJlcXVlc3Q8L2NvZGU+IOmAmui/h+WwgeijhSBIVE1MIDxjb2RlPlhNTEh0dHBSZXF1ZXN0PC9jb2RlPiDlr7nosaHmj5Dkvpvkuoblr7kgSFRUUCDljY/orq7nmoTlrozlhajnmoTorr/pl67vvIzljIXmi6zlgZrlh7ogUE9TVCDlkowgSEVBRCDor7fmsYLku6Xlj4rmma7pgJrnmoQgR0VUIOivt+axgueahOiDveWKm+OAgiA8Y29kZT5IdHRwUmVxdWVzdDwvY29kZT4g5Y+q5o+Q5L6b5Lul5byC5q2l55qE5b2i5byP6L+U5ZueIFdlYiDmnI3liqHlmajnmoTlk43lupTvvIzlubbkuJTog73lpJ/ku6XmlofmnKzmiJbogIXkuozov5vliLbnmoTlvaLlvI/ov5Tlm57lhoXlrrnjgII8L3A+XHJcbiAgICAgICAgICogPHA+PGI+5rOo5oSP77yaPC9iPuW7uuiuruavj+asoeivt+axgumDveS9v+eUqOaWsOeahCA8Y29kZT5IdHRwUmVxdWVzdDwvY29kZT4g5a+56LGh77yM5Zug5Li65q+P5qyh6LCD55So6K+l5a+56LGh55qEc2VuZOaWueazleaXtu+8jOmDveS8mua4heepuuS5i+WJjeiuvue9rueahOaVsOaNru+8jOW5tumHjee9riBIVFRQIOivt+axgueahOeKtuaAge+8jOi/meS8muWvvOiHtOS5i+WJjei/mOacqui/lOWbnuWTjeW6lOeahOivt+axguiiq+mHjee9ru+8jOS7juiAjOW+l+S4jeWIsOS5i+WJjeivt+axgueahOWTjeW6lOe7k+aenOOAgjwvcD5cclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgY2xhc3MgSlRIdHRwUmVxdWVzdCBleHRlbmRzIEpURXZlbnREaXNwYXRjaGVyIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8qKkBwcml2YXRlICovXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2h0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIC8qKkBwcml2YXRlICovXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHN0YXRpYyBfdXJsRW5jb2RlOkZ1bmN0aW9uID0gZW5jb2RlVVJJO1xyXG4gICAgICAgICAgICAgICAgLyoqQHByaXZhdGUgKi9cclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfcmVzcG9uc2VUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9kYXRhOiBhbnk7XHJcbiAgICAgICAgICAgICAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF91cmw6IHN0cmluZztcclxuXHJcbiAgICAgICAgICAgICAgICBzdGF0aWMgRVJST1I6IHN0cmluZyA9IFwiZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIC8qKiDlrprkuYkgY29tcGxldGUg5LqL5Lu25a+56LGh55qEIHR5cGUg5bGe5oCn5YC844CCKi9cclxuICAgICAgICAgICAgICAgIHN0YXRpYyBDT01QTEVURTogc3RyaW5nID0gXCJjb21wbGV0ZVwiO1xyXG4gICAgICAgICAgICAgICAgLyoqIOWumuS5iSBsb2FkZWQg5LqL5Lu25a+56LGh55qEIHR5cGUg5bGe5oCn5YC844CCKi9cclxuXHJcbiAgICAgICAgICAgICAgICAvKiog5a6a5LmJIHByb2dyZXNzIOS6i+S7tuWvueixoeeahCB0eXBlIOWxnuaAp+WAvOOAgiovXHJcbiAgICAgICAgICAgICAgICBzdGF0aWMgUFJPR1JFU1M6IHN0cmluZyA9IFwicHJvZ3Jlc3NcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIOWPkemAgSBIVFRQIOivt+axguOAglxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtXHR1cmxcdFx0XHRcdOivt+axgueahOWcsOWdgOOAguWkp+WkmuaVsOa1j+iniOWZqOWunuaWveS6huS4gOS4quWQjOa6kOWuieWFqOetlueVpe+8jOW5tuS4lOimgeaxgui/meS4qiBVUkwg5LiO5YyF5ZCr6ISa5pys55qE5paH5pys5YW35pyJ55u45ZCM55qE5Li75py65ZCN5ZKM56uv5Y+j44CCXHJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW1cdGRhdGFcdFx0XHQoZGVmYXVsdCA9IG51bGwp5Y+R6YCB55qE5pWw5o2u44CCXHJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW1cdG1ldGhvZFx0XHRcdChkZWZhdWx0ID0gXCJnZXRcIinnlKjkuo7or7fmsYLnmoQgSFRUUCDmlrnms5XjgILlgLzljIXmi6wgXCJnZXRcIuOAgVwicG9zdFwi44CBXCJoZWFkXCLjgIJcclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbVx0cmVzcG9uc2VUeXBlXHQoZGVmYXVsdCA9IFwidGV4dFwiKVdlYiDmnI3liqHlmajnmoTlk43lupTnsbvlnovvvIzlj6/orr7nva7kuLogXCJ0ZXh0XCLjgIFcImpzb25cIuOAgVwieG1sXCLjgIFcImFycmF5YnVmZmVyXCLjgIJcclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbVx0aGVhZGVyc1x0XHRcdChkZWZhdWx0ID0gbnVsbCkgSFRUUCDor7fmsYLnmoTlpLTpg6jkv6Hmga/jgILlj4LmlbDlvaLlpoJrZXktdmFsdWXmlbDnu4TvvJprZXnmmK/lpLTpg6jnmoTlkI3np7DvvIzkuI3lupTor6XljIXmi6znqbrnmb3jgIHlhpLlj7fmiJbmjaLooYzvvJt2YWx1ZeaYr+WktOmDqOeahOWAvO+8jOS4jeW6lOivpeWMheaLrOaNouihjOOAguavlOWmgltcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIl3jgIJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2VuZCh1cmw6IHN0cmluZywgZGF0YTogYW55ID0gbnVsbCwgbWV0aG9kOiBzdHJpbmcgPSBcImdldFwiLCByZXNwb25zZVR5cGU6IHN0cmluZyA9IFwidGV4dFwiLCBoZWFkZXJzOiBhbnlbXXxudWxsID0gbnVsbCk6IHZvaWQgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoQnJvd3Nlci5vblZWTWluaUdhbWUgfHwgQnJvd3Nlci5vblFHTWluaUdhbWUgfHwgQnJvd3Nlci5vblFRTWluaUdhbWUgfHwgQnJvd3Nlci5vbkFsaXBheU1pbmlHYW1lIHx8IEJyb3dzZXIub25CTE1pbmlHYW1lIHx8IEJyb3dzZXIub25IV01pbmlHYW1lIHx8IEJyb3dzZXIub25UVE1pbmlHYW1lIHx8IEJyb3dzZXIub25UQk1pbmlHYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmwgPSBIdHRwUmVxdWVzdC5fdXJsRW5jb2RlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXM6IEpUSHR0cFJlcXVlc3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHR0cCA9IHRoaXMuX2h0dHA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Li05pe277yM5Zug5Li65b6u5L+h5LiN5pSv5oyB5Lul5LiL5paH5Lu25qC85byPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHAub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0pzb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcnMpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpKyspIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHAuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXJzW2krK10sIGhlYWRlcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoISgoKDxhbnk+d2luZG93KSkuY29uY2gpKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSB8fCB0eXBlb2YgKGRhdGEpID09ICdzdHJpbmcnKSBodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSAmJiB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSnNvbj10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdHlwZTogWE1MSHR0cFJlcXVlc3RSZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgIT09IFwiYXJyYXlidWZmZXJcIiA/IFwidGV4dFwiIDogXCJhcnJheWJ1ZmZlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwLnJlc3BvbnNlVHlwZSA9IHJlc3R5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaHR0cCBhcyBhbnkpLmRhdGFUeXBlKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8vZm9yIEFsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChodHRwIGFzIGFueSkuZGF0YVR5cGUgPSByZXN0eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHAub25lcnJvciA9IGZ1bmN0aW9uIChlOiBhbnkpOiB2b2lkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX29uRXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5vbmFib3J0ID0gZnVuY3Rpb24gKGU6IGFueSk6IHZvaWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25BYm9ydChlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZTogYW55KTogdm9pZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9vblByb2dyZXNzKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHAub25sb2FkID0gZnVuY3Rpb24gKGU6IGFueSk6IHZvaWQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25Mb2FkKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKEJyb3dzZXIub25CTE1pbmlHYW1lJiZCcm93c2VyLm9uQW5kcm9pZCYmIWRhdGEpZGF0YT17fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5zZW5kKCBpc0pzb24/SlNPTi5zdHJpbmdpZnkoZGF0YSk6ZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgICAgICog6K+35rGC6L+b5bqm55qE5L6m5ZCs5aSE55CG5Ye95pWw44CCXHJcbiAgICAgICAgICAgICAgICAgKiBAcGFyYW1cdGUg5LqL5Lu25a+56LGh44CCXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfb25Qcm9ncmVzcyhlOiBhbnkpOiB2b2lkIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiBlLmxlbmd0aENvbXB1dGFibGUpIHRoaXMuZGlzcGF0Y2hFdmVudChKVEh0dHBSZXF1ZXN0LlBST0dSRVNTLCBlLmxvYWRlZCAvIGUudG90YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICAgICAqIOivt+axguS4reaWreeahOS+puWQrOWkhOeQhuWHveaVsOOAglxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtXHRlIOS6i+S7tuWvueixoeOAglxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX29uQWJvcnQoZTogYW55KTogdm9pZCBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcIlJlcXVlc3Qgd2FzIGFib3J0ZWQgYnkgdXNlclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAgICAgKiDor7fmsYLlh7rplJnkvqbnmoTlkKzlpITnkIblh73mlbDjgIJcclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbVx0ZSDkuovku7blr7nosaHjgIJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9vbkVycm9yKGU6IGFueSk6IHZvaWQgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZCBTdGF0dXM6XCIgKyB0aGlzLl9odHRwLnN0YXR1cyArIFwiIHRleHQ6XCIgKyB0aGlzLl9odHRwLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICAgICAqIOivt+axgua2iOaBr+i/lOWbnueahOS+puWQrOWkhOeQhuWHveaVsOOAglxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtXHRlIOS6i+S7tuWvueixoeOAglxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX29uTG9hZChlOiBhbnkpOiB2b2lkIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHR0cDogYW55ID0gdGhpcy5faHR0cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1czogbnVtYmVyID0gaHR0cC5zdGF0dXMgIT09IHVuZGVmaW5lZCA/IGh0dHAuc3RhdHVzIDogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAgfHwgc3RhdHVzID09PSAyMDQgfHwgc3RhdHVzID09PSAwKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJbXCIgKyBodHRwLnN0YXR1cyArIFwiXVwiICsgaHR0cC5zdGF0dXNUZXh0ICsgXCI6XCIgKyBodHRwLnJlc3BvbnNlVVJMKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgICAgICAgICAqIOivt+axgumUmeivr+eahOWkhOeQhuWHveaVsOOAglxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtXHRtZXNzYWdlIOmUmeivr+S/oeaBr+OAglxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy51cmwsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoSlRIdHRwUmVxdWVzdC5FUlJPUiwgbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAgICAgICAgICog6K+35rGC5oiQ5Yqf5a6M5oiQ55qE5aSE55CG5Ye95pWw44CCXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBjb21wbGV0ZSgpOiB2b2lkIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbGFnOiBib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc3BvbnNlVHlwZSA9PT0gXCJqc29uXCIpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBKU09OLnBhcnNlKHRoaXMuX2h0dHAucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3Jlc3BvbnNlVHlwZSA9PT0gXCJ4bWxcIikgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IEpUSHR0cFJlcXVlc3QucGFyc2VYTUxGcm9tU3RyaW5nKHRoaXMuX2h0dHAucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2h0dHAucmVzcG9uc2UgfHwgdGhpcy5faHR0cC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgJiYgdGhpcy5kaXNwYXRjaEV2ZW50KEpUSHR0cFJlcXVlc3QuQ09NUExFVEUsIHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBBcnJheSA/IFt0aGlzLl9kYXRhXSA6IHRoaXMuX2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHN0YXRpYyBwYXJzZVhNTEZyb21TdHJpbmc6IEZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhbHVlOiBzdHJpbmcpOiBYTUxEb2N1bWVudCBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJzdDogYW55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLz5cXHMrPC9nLCAnPjwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnN0ID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCAndGV4dC94bWwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJzdC5maXJzdENoaWxkLnRleHRDb250ZW50LmluZGV4T2YoXCJUaGlzIHBhZ2UgY29udGFpbnMgdGhlIGZvbGxvd2luZyBlcnJvcnNcIikgPiAtMSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocnN0LmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICAgICAgICAgKiDmuIXpmaTlvZPliY3or7fmsYLjgIJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGNsZWFyKCk6IHZvaWQgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodHRwOiBhbnkgPSB0aGlzLl9odHRwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwLm9uZXJyb3IgPSBodHRwLm9uYWJvcnQgPSBodHRwLm9ucHJvZ3Jlc3MgPSBodHRwLm9ubG9hZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqIOivt+axgueahOWcsOWdgOOAgiovXHJcbiAgICAgICAgICAgICAgICBnZXQgdXJsKCk6IHN0cmluZyBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvKiog6L+U5Zue55qE5pWw5o2u44CCKi9cclxuICAgICAgICAgICAgICAgIGdldCBkYXRhKCk6IGFueSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgKiDmnKzlr7nosaHmiYDlsIHoo4XnmoTljp/nlJ8gWE1MSHR0cFJlcXVlc3Qg5byV55So44CCXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGdldCBodHRwKCk6IGFueSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59Il19