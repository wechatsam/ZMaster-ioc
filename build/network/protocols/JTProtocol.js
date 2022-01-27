"use strict";
var com;
(function (com) {
    class JTProtocol {
        constructor() {
            this._protocols = null;
            this._encrypts = null;
            this._protocolMap = null;
            this._protocols = [];
            this._protocolMap = {};
            this.build();
        }
        build() {
        }
        /**
         *
         * @param protocol 协议号
         * @param waiting 是否显示隐藏通信转圈
         * @param encrypt 是否显示加解密的转圈
         */
        registerProtocol(protocol, waiting, security) {
            this._protocolMap[protocol] = com.JTItemProtocol.create(protocol, waiting, security);
            waiting && this._protocols.push(protocol);
        }
        /**
         * 同时拥有加解密功能的协议号列表
         *
         */
        get protocols() {
            return this._protocols;
        }
        get encrypts() {
            return this._encrypts;
        }
        getProtocol(protocol) {
            return this._protocolMap[protocol];
        }
        execute(message) {
        }
    }
    JTProtocol.NORMAL = 1;
    JTProtocol.ERROR = 0;
    com.JTProtocol = JTProtocol;
})(com || (com = {}));
