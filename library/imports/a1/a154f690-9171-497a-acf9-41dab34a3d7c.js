"use strict";
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