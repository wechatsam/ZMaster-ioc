"use strict";
var com;
(function (com) {
    class JTChannelPipeline extends com.JTEventDispatcher {
        constructor() {
            super();
            this._channel = null;
            this._pipelineMap = {};
        }
        bind(channel) {
            this._channel = channel;
            this._channel.bind(this);
            com.JTSession.socketChannel = this._channel;
            return this._channel;
        }
        childOption(type, channelAdapter) {
            channelAdapter.bind(this);
            channelAdapter.channelActive();
            this._pipelineMap[type] = channelAdapter;
            return this;
        }
        getOption(type) {
            return this._pipelineMap[type];
        }
        launch(host, port) {
            this._channel.reload();
            this._channel.connect(host, port);
        }
        get channel() {
            return this._channel;
        }
    }
    com.JTChannelPipeline = JTChannelPipeline;
})(com || (com = {}));
