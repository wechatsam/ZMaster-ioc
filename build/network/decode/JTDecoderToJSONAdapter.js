"use strict";
var com;
(function (com) {
    class JTDecoderToJSONAdapter extends com.JTAbstractDecoderAdapter {
        constructor() {
            super();
        }
        decode(receiveMessage) {
            // let data:any = JSON.parse(receiveMessage);
            // let protocol:number = data["protocol"];
            // JTFunctionManager.execute(protocol.toString(), data["content"]);
            // JTLogger.info("[ReceiveMessage] protocol: " + protocol,  "    content:  " + JSON.stringify(data["content"]));
            return com.JTReceivePackage.read(receiveMessage);
        }
        readComplete(receivePackage) {
            super.readComplete(receivePackage);
        }
    }
    com.JTDecoderToJSONAdapter = JTDecoderToJSONAdapter;
})(com || (com = {}));
