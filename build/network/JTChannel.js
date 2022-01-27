"use strict";
var com;
(function (com) {
    class JTChannel extends com.JTEventDispatcher {
        constructor(cls) {
            super();
            this._cls = null;
            this._port = 0;
            this._host = null;
            this._channel = null;
            this._pipeline = null;
            this._encoder = null;
            this._decoder = null;
            this._idleState = null;
            if (cls)
                this._cls = cls;
            else {
                this._cls = this instanceof com.JTWebSocketChannel ? com.JTWebSocket : com.JTHttpRequest;
            }
        }
        connect(host, port) {
            this._host = host;
            this._port = port;
            if (this._channel)
                this._channel.clean();
            else
                this._channel = new this._cls();
            return this._channel;
        }
        reload() {
            this._encoder = this._pipeline.getOption(com.JTChannelAdapter.ENCODE);
            this._decoder = this._pipeline.getOption(com.JTChannelAdapter.DECODE);
            this._idleState = this._pipeline.getOption(com.JTChannelAdapter.IDLE);
        }
        bind(channelPipeline) {
            this._pipeline = channelPipeline;
        }
        get pipeline() {
            return this._pipeline;
        }
        get host() {
            return this._host;
        }
        get port() {
            return this._port;
        }
    }
    com.JTChannel = JTChannel;
})(com || (com = {}));
