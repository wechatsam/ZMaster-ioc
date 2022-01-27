"use strict";
var com;
(function (com) {
    class JTEncodeToJSONAdapter extends com.JTAbstractEncoderAdapter {
        constructor() {
            super();
        }
        channelActive() {
        }
        encode(data) {
            return JSON.stringify(data);
        }
        writeComplete(data) {
            super.writeComplete(data);
        }
    }
    com.JTEncodeToJSONAdapter = JTEncodeToJSONAdapter;
})(com || (com = {}));
