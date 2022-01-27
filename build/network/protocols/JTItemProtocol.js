"use strict";
var com;
(function (com) {
    class JTItemProtocol {
        constructor(protocol) {
            this._isWaiting = false;
            this._securityOption = null;
            this._protocol = 0;
            this._protocol = protocol;
        }
        setup(isWaiting, security) {
            this._securityOption = security;
            this._isWaiting = isWaiting;
        }
        static create(protocol, isWaiting, security) {
            var item = new JTItemProtocol(protocol);
            item.setup(isWaiting, security);
            return item;
        }
        get protocol() {
            return this._protocol;
        }
        get securityOption() {
            return this._securityOption;
        }
        get isWaiting() {
            return this._isWaiting;
        }
        hide(message) {
        }
        decrypt(message) {
            return message;
        }
    }
    com.JTItemProtocol = JTItemProtocol;
})(com || (com = {}));
