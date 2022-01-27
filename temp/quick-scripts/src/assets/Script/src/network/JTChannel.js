"use strict";
cc._RF.push(module, '3ee41pxMWBBIbLG6nsHWfmj', 'JTChannel');
// Script/src/network/JTChannel.ts

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTChannel = (function (_super) {
            __extends(JTChannel, _super);
            function JTChannel(cls) {
                var _this = _super.call(this) || this;
                _this._cls = null;
                _this._port = 0;
                _this._host = null;
                _this._channel = null;
                _this._pipeline = null;
                _this._encoder = null;
                _this._decoder = null;
                if (cls)
                    _this._cls = cls;
                else {
                    _this._cls = _this instanceof JTWebSocketChannel ? JTWebSocket : JTHttpRequest;
                }
                return _this;
            }
            JTChannel.prototype.config = function (host, port) {
                this._host = host;
                this._port = port;
            };
            JTChannel.prototype.connect = function () {
                if (this._channel)
                    this._channel.clean();
                else
                    this._channel = new this._cls();
                return this._channel;
            };
            JTChannel.prototype.reload = function () {
                this._encoder = this._pipeline.getContext(JTChannelContext.ENCODE);
                this._decoder = this._pipeline.getContext(JTChannelContext.DECODE);
            };
            JTChannel.prototype.bind = function (channelPipeline) {
                this._pipeline = channelPipeline;
            };
            Object.defineProperty(JTChannel.prototype, "pipeline", {
                get: function () {
                    return this._pipeline;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTChannel.prototype, "host", {
                get: function () {
                    return this._host;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTChannel.prototype, "port", {
                get: function () {
                    return this._port;
                },
                enumerable: false,
                configurable: true
            });
            return JTChannel;
        }(JTEventDispatcher));
        com.JTChannel = JTChannel;
    })(com || (com = {}));
});

cc._RF.pop();