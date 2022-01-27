"use strict";
var com;
(function (com) {
    class JTSendPackage {
        constructor() {
            this._content = {};
            this._data = {};
            this._protocol = 0;
            this._channel = null;
        }
        writeProtocol(protocol) {
            this._protocol = protocol;
        }
        write(key, value) {
            this._content[key] = value;
        }
        get content() {
            return this._content;
        }
        get protocol() {
            return this._protocol;
        }
        send() {
            this._data["protocol"] = this._protocol;
            this._data["content"] = this._content;
            this._channel && this._channel.send(this._data);
            JTSendPackage.put(this);
        }
        setup(channel) {
            this._channel = channel;
        }
        recycle() {
            this._content = {};
            this._channel = null;
            this._protocol = 0;
            this._data = {};
        }
        static get pool() {
            if (!this._pool) {
                this._pool = com.JTPool.instance(JTSendPackage);
            }
            return this._pool;
        }
        static begin() {
            var sendPackage = this.pool.get();
            sendPackage.setup(com.JTSession.socketChannel);
            return sendPackage;
        }
        static put(sendPackage) {
            this.pool.put(sendPackage);
        }
    }
    JTSendPackage._pool = null;
    com.JTSendPackage = JTSendPackage;
})(com || (com = {}));
