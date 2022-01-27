"use strict";
cc._RF.push(module, '298d21fPEtEhLaszrP5P3Gu', 'JTChannelPipeline');
// Script/src/network/JTChannelPipeline.ts

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
        var JTChannelPipeline = (function (_super) {
            __extends(JTChannelPipeline, _super);
            function JTChannelPipeline() {
                var _this = _super.call(this) || this;
                _this._channel = null;
                _this.__contextMap = {};
                _this.___ctxs = [];
                return _this;
            }
            JTChannelPipeline.prototype.channelActive = function () {
                for (var i = 0; i < this.___ctxs.length; i++) {
                    var ___c = this.___ctxs[i];
                    ___c.channelActive();
                }
            };
            JTChannelPipeline.prototype.channelInactive = function () {
                for (var i = 0; i < this.___ctxs.length; i++) {
                    var ___c = this.___ctxs[i];
                    ___c.channelInactive();
                }
            };
            JTChannelPipeline.prototype.bind = function (channel) {
                this._channel = channel;
                this._channel.bind(this);
                JTSession.channel = this._channel;
                return this._channel;
            };
            JTChannelPipeline.prototype.childOption = function (type, ___c) {
                ___c.bind(this);
                ___c.build();
                this.__contextMap[type] = ___c;
                this.___ctxs.push(___c);
                return this;
            };
            JTChannelPipeline.prototype.getContext = function (type) {
                return this.__contextMap[type];
            };
            JTChannelPipeline.prototype.launch = function (host, port) {
                this._channel.reload();
                this._channel.config(host, port);
                this._channel.connect();
                return this._channel;
            };
            Object.defineProperty(JTChannelPipeline.prototype, "channel", {
                get: function () {
                    return this._channel;
                },
                enumerable: false,
                configurable: true
            });
            return JTChannelPipeline;
        }(JTEventDispatcher));
        com.JTChannelPipeline = JTChannelPipeline;
    })(com || (com = {}));
});

cc._RF.pop();