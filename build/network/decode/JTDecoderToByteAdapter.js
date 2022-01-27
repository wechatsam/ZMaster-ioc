"use strict";
var com;
(function (com) {
    class JTDecoderToByteAdapter extends com.JTAbstractDecoderAdapter {
        constructor() {
            super();
        }
        decode(data) {
            return null;
        }
        readComplete(receivePackage) {
        }
    }
    com.JTDecoderToByteAdapter = JTDecoderToByteAdapter;
})(com || (com = {}));
