"use strict";
cc._RF.push(module, '07b15SjZFZF2pvZnquzBqtV', 'JTSendPackage');
// Script/src/network/JTSendPackage.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTSendPackage = (function () {
            function JTSendPackage() {
                this._content = {};
                this._data = {};
                this._protocol = 0;
                this._channel = null;
            }
            JTSendPackage.prototype.writeProtocol = function (protocol) {
                this._protocol = protocol;
            };
            JTSendPackage.prototype.write = function (key, value) {
                this._content[key] = value;
            };
            Object.defineProperty(JTSendPackage.prototype, "content", {
                get: function () {
                    return this._content;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTSendPackage.prototype, "protocol", {
                get: function () {
                    return this._protocol;
                },
                enumerable: false,
                configurable: true
            });
            JTSendPackage.prototype.send = function () {
                this._data["protocol"] = this._protocol;
                this._data["content"] = this._content;
                this._channel && this._channel.send(this._data);
                JTSendPackage.put(this);
            };
            JTSendPackage.prototype.setup = function (channel) {
                this._channel = channel;
            };
            JTSendPackage.prototype.recycle = function () {
                this._content = {};
                this._channel = null;
                this._protocol = 0;
                this._data = {};
            };
            Object.defineProperty(JTSendPackage, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTSendPackage);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTSendPackage.begin = function (channel) {
                var sendPackage = this.pool.get();
                if (!channel)
                    channel = JTSession.channel;
                sendPackage.setup(channel);
                return sendPackage;
            };
            JTSendPackage.put = function (sendPackage) {
                this.pool.put(sendPackage);
            };
            JTSendPackage._pool = null;
            return JTSendPackage;
        }());
        com.JTSendPackage = JTSendPackage;
    })(com || (com = {}));
});

cc._RF.pop();