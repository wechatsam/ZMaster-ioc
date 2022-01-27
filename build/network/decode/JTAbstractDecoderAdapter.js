"use strict";
var com;
(function (com) {
    class JTAbstractDecoderAdapter extends com.JTChannelAdapter {
        constructor() {
            super();
            this._responseMapper = null;
            this._protocolManager = null;
            this._protocolErrorMessage = null;
            this._downProtocol = null;
        }
        channelActive() {
            this._responseMapper = com.JTApplication.getExtendItem(com.JTApplication.MAPPING);
            this._protocolManager = com.JTApplication.getExtendItem(com.JTApplication.PROTOCOL);
            this._protocolErrorMessage = com.JTApplication.getExtendItem(com.JTApplication.ERROR_MESSAGE);
            this._downProtocol = this._protocolManager.downProtocol;
        }
        readComplete(receivePackage) {
            let protocol = receivePackage.protocol;
            let content = receivePackage.content;
            let itemProtocol = this._downProtocol.getProtocol(protocol);
            if (!itemProtocol) {
                com.JTLogger.debug("[receivePackage.read] the downProcotol cant register protocol: " + protocol);
            }
            if (itemProtocol && itemProtocol.isWaiting) {
                this._downProtocol.execute(content);
            }
            if (this._protocolErrorMessage.checkPackageStatus(receivePackage)) {
                if (this._responseMapper)
                    content = this.toMapper(protocol, content); //检查协议号是否绑定了Mapper映射序列化
                com.JTFunctionManager.execute(protocol.toString(), content);
                com.JTLogger.info("[receivePackage.read] DownProtocol: " + protocol, "    content:  " + JSON.stringify(content));
            }
            else {
                this._protocolErrorMessage.showErrorMessage(receivePackage);
                com.JTLogger.info("[receivePackage.read] protocol: " + protocol, "    errorCode:  " + receivePackage.errorCode);
            }
        }
        toMapper(protocol, data) {
            return this._responseMapper.create(protocol, data);
        }
    }
    com.JTAbstractDecoderAdapter = JTAbstractDecoderAdapter;
})(com || (com = {}));
