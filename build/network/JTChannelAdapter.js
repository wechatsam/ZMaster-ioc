"use strict";
///<reference path="JTAbstractChannelAdapter.ts"/>
var com;
(function (com) {
    class JTChannelAdapter extends com.JTAbstractChannelAdapter {
        constructor() {
            super();
        }
    }
    JTChannelAdapter.ENCODE = "encode";
    JTChannelAdapter.DECODE = "decode";
    JTChannelAdapter.IDLE = "idle";
    com.JTChannelAdapter = JTChannelAdapter;
})(com || (com = {}));
