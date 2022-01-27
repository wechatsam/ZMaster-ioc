"use strict";
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