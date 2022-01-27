"use strict";
var com;
(function (com) {
    class JTAbstractEncoderAdapter extends com.JTChannelAdapter {
        constructor() {
            super();
        }
        writeComplete(data) {
            let message = JSON.parse(data);
            let protocolManager = com.JTApplication.getExtendItem(com.JTApplication.PROTOCOL);
            let protocolUp = protocolManager.protocolUp;
            let itemProtocol = protocolUp.getProtocol(message.protocol);
            if (itemProtocol && itemProtocol.isWaiting) {
                protocolUp.execute(message);
            }
            com.JTLogger.info("[sendPackage.send] : UpProtocol:  " + message.protocol, "   content: " + JSON.stringify(message.content));
        }
    }
    com.JTAbstractEncoderAdapter = JTAbstractEncoderAdapter;
})(com || (com = {}));
