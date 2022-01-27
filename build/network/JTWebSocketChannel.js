"use strict";
var com;
(function (com) {
    class JTWebSocketChannel extends com.JTChannel {
        constructor(cls) {
            super(cls);
            this._connected = false;
            this._buffers = null;
            this._buffers = [];
        }
        flush() {
            let socket = this._channel;
            while (this._buffers.length) {
                let msg = this._buffers.shift();
                if (socket) {
                    socket.connected && socket.send(msg);
                    this._encoder.writeComplete(msg);
                }
            }
        }
        send(data) {
            let message = this._encoder.encode(data);
            let socket = this._channel;
            if (socket && socket.connected) {
                socket.send(message);
                this._encoder.writeComplete(message);
            }
            else {
                this._buffers.push(message);
                com.JTLogger.info("send error, the websocket cant send msg to server!");
            }
        }
        connect(host, port) {
            var channel = super.connect(host, port);
            channel.addEventListener(com.JTWebSocket.OPEN, this.onConnectSucceed, this);
            channel.addEventListener(com.JTWebSocket.MESSAGE, this.onReceiveMessage, this);
            channel.addEventListener(com.JTWebSocket.CLOSE, this.onCloseHandler, this);
            channel.addEventListener(com.JTWebSocket.ERROR, this.onErrorHandler, this);
            channel.connect(host, port);
        }
        onConnectSucceed(e) {
            com.JTLogger.info("connect succeed!");
            this.flush();
            com.JTFunctionManager.execute(com.JTWebSocket.OPEN);
        }
        onReceiveMessage(data) {
            let decoder = this._decoder;
            let message = decoder.decode(data);
            decoder.readComplete(message);
        }
        onCloseHandler(e) {
            com.JTLogger.info("the server already close");
        }
        onErrorHandler(e) {
            com.JTLogger.info("current connect error");
        }
    }
    com.JTWebSocketChannel = JTWebSocketChannel;
})(com || (com = {}));
