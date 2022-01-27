"use strict";
var com;
(function (com) {
    class JTReceivePackage {
        constructor() {
            this._content = null;
            this._data = null;
            this._protocol = 0;
            this._status = 0;
            this._errorCode = 0;
        }
        get content() {
            return this._content;
        }
        get protocol() {
            return this._protocol;
        }
        get status() {
            return this._status;
        }
        get errorCode() {
            return this._errorCode;
        }
        readPackage(data) {
            this._data = JSON.parse(data);
            this._status = this._data["status"];
            this._protocol = this._data["protocol"];
            if (this._status == com.JTProtocol.NORMAL) {
                this._content = this._data["content"];
            }
            else {
                this._errorCode = this._data["errorCode"];
            }
        }
        recycle() {
            this._content = null;
            this._protocol = this._errorCode = this._status = 0;
            this._data = null;
        }
        static get pool() {
            if (!this._pool) {
                this._pool = com.JTPool.instance(JTReceivePackage);
            }
            return this._pool;
        }
        static read(data) {
            var receivePackage = this.pool.get();
            receivePackage.readPackage(data);
            return receivePackage;
        }
        static put(receivePackage) {
            this.pool.put(receivePackage);
        }
    }
    JTReceivePackage._pool = null;
    com.JTReceivePackage = JTReceivePackage;
})(com || (com = {}));
