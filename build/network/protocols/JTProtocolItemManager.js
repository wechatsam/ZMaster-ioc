"use strict";
var com;
(function (com) {
    class JTProtocolItemManager extends com.JTClassExtension {
        constructor() {
            super();
            this.protocolUp = null;
            this.downProtocol = null;
        }
        build() {
        }
        /**
         * 注册下行协议
         * @param protocol 协议号
         * @param waiting 是否显示转圈
         * @param security 加密方式
         */
        registerDownProtocol(protocol, waiting, security) {
            this.downProtocol.registerProtocol(protocol, waiting, security);
        }
        /**
         * 注册上行协议
         * @param protocol 协议号
         * @param waiting 是否显示转圈
         * @param security 解密方式
         */
        registerUpProtocol(protocol, waiting, security) {
            this.protocolUp.registerProtocol(protocol, waiting, security);
        }
        bind(classUp, classDown) {
            this.protocolUp = new classUp();
            this.downProtocol = new classDown();
        }
    }
    com.JTProtocolItemManager = JTProtocolItemManager;
})(com || (com = {}));
