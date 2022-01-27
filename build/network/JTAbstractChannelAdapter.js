"use strict";
var com;
(function (com) {
    class JTAbstractChannelAdapter extends com.JTEventDispatcher {
        constructor() {
            super();
            this._channel = null;
            this._channelPipeline = null;
        }
        getOption(type) {
            return this._channelPipeline.getOption(type);
        }
        get channel() {
            return this._channel;
        }
        bind(channelPipeline) {
            this._channelPipeline = channelPipeline;
            this._channel = channelPipeline.channel;
        }
    }
    com.JTAbstractChannelAdapter = JTAbstractChannelAdapter;
})(com || (com = {}));
