"use strict";
cc._RF.push(module, '7779a14XppCdYplJNrUhQTg', 'JTChannelContext');
// Script/src/network/contexts/JTChannelContext.ts

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
        var JTChannelContext = (function (_super) {
            __extends(JTChannelContext, _super);
            function JTChannelContext() {
                var _this = _super.call(this) || this;
                _this._channel = null;
                _this._channelPipeline = null;
                return _this;
            }
            JTChannelContext.prototype.getContext = function (type) {
                return this._channelPipeline.getContext(type);
            };
            Object.defineProperty(JTChannelContext.prototype, "channel", {
                get: function () {
                    return this._channel;
                },
                enumerable: false,
                configurable: true
            });
            JTChannelContext.prototype.bind = function (channelPipeline) {
                this._channelPipeline = channelPipeline;
                this._channel = channelPipeline.channel;
            };
            JTChannelContext.ENCODE = "encode";
            JTChannelContext.DECODE = "decode";
            JTChannelContext.IDLE = "idle";
            return JTChannelContext;
        }(JTEventDispatcher));
        com.JTChannelContext = JTChannelContext;
    })(com || (com = {}));
});

cc._RF.pop();