
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/JTChannelPipeline.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXEpUQ2hhbm5lbFBpcGVsaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFDLElBQVUsR0FBRyxDQTRFYjtJQTVFQSxXQUFVLEdBQUc7UUFFVjtZQUF1QyxxQ0FBaUI7WUFLcEQ7Z0JBQUEsWUFFSSxpQkFBTyxTQUNWO2dCQU5PLGNBQVEsR0FBYyxJQUFJLENBQUM7Z0JBQzNCLGtCQUFZLEdBQXNDLEVBQUUsQ0FBQztnQkFDckQsYUFBTyxHQUF1QixFQUFFLENBQUE7O1lBSXhDLENBQUM7WUFFTSx5Q0FBYSxHQUFwQjtnQkFFSSxLQUFLLElBQUksQ0FBQyxHQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ25EO29CQUNJLElBQUksSUFBSSxHQUFxQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3hCO1lBQ1QsQ0FBQztZQUVVLDJDQUFlLEdBQXRCO2dCQUVJLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFDbkQ7b0JBQ0ksSUFBSSxJQUFJLEdBQXFCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDMUI7WUFDTCxDQUFDO1lBT00sZ0NBQUksR0FBWCxVQUFZLE9BQWtCO2dCQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3pCLENBQUM7WUFRTSx1Q0FBVyxHQUFsQixVQUFtQixJQUFXLEVBQUUsSUFBc0I7Z0JBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFJLElBQUksQ0FBQztnQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFFTSxzQ0FBVSxHQUFqQixVQUFrQixJQUFXO2dCQUV6QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUVNLGtDQUFNLEdBQWIsVUFBYyxJQUFXLEVBQUUsSUFBVztnQkFFbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDekIsQ0FBQztZQUVELHNCQUFXLHNDQUFPO3FCQUFsQjtvQkFFSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pCLENBQUM7OztlQUFBO1lBQ0wsd0JBQUM7UUFBRCxDQXpFQSxBQXlFQyxDQXpFc0MsaUJBQWlCLEdBeUV2RDtRQXpFWSxxQkFBaUIsb0JBeUU3QixDQUFBO0lBQ0wsQ0FBQyxFQTVFVSxHQUFHLEtBQUgsR0FBRyxRQTRFYiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRDaGFubmVsUGlwZWxpbmUgZXh0ZW5kcyBKVEV2ZW50RGlzcGF0Y2hlciBpbXBsZW1lbnRzIEpUSUNoYW5uZWxQaXBlbGluZVxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgX2NoYW5uZWw6SlRJQ2hhbm5lbCA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBfX2NvbnRleHRNYXA6e1t0eXBlOnN0cmluZ106IEpUSUNoYW5uZWxDb250ZXh0fSA9IHt9O1xyXG4gICAgICAgIHByaXZhdGUgX19fY3R4czpKVElDaGFubmVsQ29udGV4dFtdID0gW11cclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNoYW5uZWxBY3RpdmUoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCB0aGlzLl9fX2N0eHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBfX19jOkpUSUNoYW5uZWxDb250ZXh0ID0gdGhpcy5fX19jdHhzW2ldO1xyXG4gICAgICAgICAgICAgICAgX19fYy5jaGFubmVsQWN0aXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNoYW5uZWxJbmFjdGl2ZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRoaXMuX19fY3R4cy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9fX2M6SlRJQ2hhbm5lbENvbnRleHQgPSB0aGlzLl9fX2N0eHNbaV07XHJcbiAgICAgICAgICAgICAgICBfX19jLmNoYW5uZWxJbmFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gY2hhbm5lbCBcclxuICAgICAgICAgKiBAcmV0dXJucyBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYmluZChjaGFubmVsOkpUSUNoYW5uZWwpOkpUSUNoYW5uZWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWwgPSBjaGFubmVsO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFubmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIEpUU2Vzc2lvbi5jaGFubmVsID0gdGhpcy5fY2hhbm5lbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5uZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSBcclxuICAgICAgICAgKiBAcGFyYW0gX19fYyBcclxuICAgICAgICAgKiBAcmV0dXJucyBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2hpbGRPcHRpb24odHlwZTpzdHJpbmcsIF9fX2M6SlRJQ2hhbm5lbENvbnRleHQpOkpUQ2hhbm5lbFBpcGVsaW5lXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfX19jLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIF9fX2MuYnVpbGQoKTtcclxuICAgICAgICAgICAgdGhpcy5fX2NvbnRleHRNYXBbdHlwZV0gPSAgX19fYztcclxuICAgICAgICAgICAgdGhpcy5fX19jdHhzLnB1c2goX19fYyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldENvbnRleHQodHlwZTpzdHJpbmcpOkpUSUNoYW5uZWxDb250ZXh0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2NvbnRleHRNYXBbdHlwZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbGF1bmNoKGhvc3Q6c3RyaW5nLCBwb3J0Om51bWJlcik6SlRJQ2hhbm5lbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbC5jb25maWcoaG9zdCwgcG9ydCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWwuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hhbm5lbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgY2hhbm5lbCgpOkpUSUNoYW5uZWxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGFubmVsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==