"use strict";
cc._RF.push(module, 'b7ee0y7KSdCm4upY8TiNFVz', 'JTWebSocketChannel');
// Script/src/network/JTWebSocketChannel.ts

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
        var JTWebSocketChannel = (function (_super) {
            __extends(JTWebSocketChannel, _super);
            function JTWebSocketChannel(cls) {
                var _this = _super.call(this, cls) || this;
                _this._connected = false;
                _this._buffers = null;
                _this._idleState = null;
                _this._buffers = [];
                return _this;
            }
            JTWebSocketChannel.prototype.flush = function () {
                var socket = this._channel;
                while (this._buffers.length) {
                    var msg = this._buffers.shift();
                    if (socket) {
                        socket.connected && socket.send(msg);
                        this._encoder.writeComplete(msg);
                    }
                }
            };
            JTWebSocketChannel.prototype.send = function (data) {
                var message = this._encoder.encode(data);
                var socket = this._channel;
                if (socket && socket.connected) {
                    socket.send(message);
                    this._encoder.writeComplete(message);
                }
                else {
                    this._buffers.push(message);
                    JTLogger.info("send error, the websocket cant send msg to server!");
                }
            };
            JTWebSocketChannel.prototype.config = function (host, port) {
                _super.prototype.config.call(this, host, port);
            };
            JTWebSocketChannel.prototype.connect = function () {
                var channel = _super.prototype.connect.call(this);
                channel.addEventListener(JTWebSocket.OPEN, this.onConnectSucceed, this);
                channel.addEventListener(JTWebSocket.MESSAGE, this.onReceiveMessage, this);
                channel.addEventListener(JTWebSocket.CLOSE, this.onCloseHandler, this);
                channel.addEventListener(JTWebSocket.ERROR, this.onErrorHandler, this);
                channel.connect(this._host, this.port);
                return channel;
            };
            JTWebSocketChannel.prototype.onConnectSucceed = function (e) {
                JTLogger.info("connect succeed!");
                this.pipeline.channelActive();
                this.flush();
                JTFunctionManager.execute(JTWebSocket.OPEN);
            };
            JTWebSocketChannel.prototype.onReceiveMessage = function (data) {
                var decoder = this._decoder;
                var message = decoder.decode(data);
                decoder.readComplete(message);
            };
            JTWebSocketChannel.prototype.onCloseHandler = function (e) {
                this.pipeline.channelInactive();
                JTLogger.info("the server already close");
            };
            JTWebSocketChannel.prototype.onErrorHandler = function (e) {
                this.pipeline.channelInactive();
                JTLogger.info("current connect error");
            };
            JTWebSocketChannel.prototype.reload = function () {
                _super.prototype.reload.call(this);
                this._idleState = this._pipeline.getContext(JTChannelContext.IDLE);
            };
            return JTWebSocketChannel;
        }(JTChannel));
        com.JTWebSocketChannel = JTWebSocketChannel;
    })(com || (com = {}));
});

cc._RF.pop();