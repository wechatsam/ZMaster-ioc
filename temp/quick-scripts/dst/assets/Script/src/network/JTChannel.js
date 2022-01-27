
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/JTChannel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXEpUQ2hhbm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0FtRVo7SUFuRUQsV0FBVSxHQUFHO1FBRVQ7WUFBd0MsNkJBQWlCO1lBV3JELG1CQUFZLEdBQU87Z0JBQW5CLFlBRUksaUJBQU8sU0FPVjtnQkFsQlMsVUFBSSxHQUFPLElBQUksQ0FBQztnQkFDaEIsV0FBSyxHQUFVLENBQUMsQ0FBQztnQkFDakIsV0FBSyxHQUFVLElBQUksQ0FBQztnQkFDcEIsY0FBUSxHQUFPLElBQUksQ0FBQztnQkFFcEIsZUFBUyxHQUFzQixJQUFJLENBQUM7Z0JBQ3BDLGNBQVEsR0FBcUIsSUFBSSxDQUFDO2dCQUNsQyxjQUFRLEdBQXFCLElBQUksQ0FBQztnQkFNeEMsSUFBSSxHQUFHO29CQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO3FCQUV4QjtvQkFDSSxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksWUFBWSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7aUJBQ2hGOztZQUNMLENBQUM7WUFNTSwwQkFBTSxHQUFiLFVBQWMsSUFBVyxFQUFFLElBQVc7Z0JBRWxDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDO1lBRU0sMkJBQU8sR0FBZDtnQkFFSSxJQUFJLElBQUksQ0FBQyxRQUFRO29CQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7O29CQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDekIsQ0FBQztZQUVNLDBCQUFNLEdBQWI7Z0JBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQXNCLENBQUM7Z0JBQ3hGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFzQixDQUFDO1lBQzVGLENBQUM7WUFFTSx3QkFBSSxHQUFYLFVBQVksZUFBa0M7Z0JBRTFDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1lBQ3JDLENBQUM7WUFFRCxzQkFBVywrQkFBUTtxQkFBbkI7b0JBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO2dCQUN6QixDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLDJCQUFJO3FCQUFmO29CQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBVywyQkFBSTtxQkFBZjtvQkFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7OztlQUFBO1lBQ0wsZ0JBQUM7UUFBRCxDQWhFQSxBQWdFQyxDQWhFdUMsaUJBQWlCLEdBZ0V4RDtRQWhFcUIsYUFBUyxZQWdFOUIsQ0FBQTtJQUNMLENBQUMsRUFuRVMsR0FBRyxLQUFILEdBQUcsUUFtRVoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgSlRDaGFubmVsIGV4dGVuZHMgSlRFdmVudERpc3BhdGNoZXIgaW1wbGVtZW50cyBKVElDaGFubmVsXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9jbHM6YW55ID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX3BvcnQ6bnVtYmVyID0gMDtcclxuICAgICAgICBwcm90ZWN0ZWQgX2hvc3Q6c3RyaW5nID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX2NoYW5uZWw6YW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIF9waXBlbGluZTpKVElDaGFubmVsUGlwZWxpbmUgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfZW5jb2RlcjpKVElFbmNvZGVyQWRhcHRlciA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9kZWNvZGVyOkpUSURlY29kZXJBZGFwdGVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY2xzOmFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2xzKXRoaXMuX2NscyA9IGNscztcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbHMgPSB0aGlzIGluc3RhbmNlb2YgSlRXZWJTb2NrZXRDaGFubmVsID8gSlRXZWJTb2NrZXQgOiBKVEh0dHBSZXF1ZXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhYnN0cmFjdCBmbHVzaCgpOnZvaWRcclxuXHJcbiAgICAgICAgYWJzdHJhY3Qgc2VuZChkYXRhOmFueSk6dm9pZCBcclxuXHJcbiAgICAgICAgcHVibGljIGNvbmZpZyhob3N0OnN0cmluZywgcG9ydDpudW1iZXIpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hvc3QgPSBob3N0O1xyXG4gICAgICAgICAgICB0aGlzLl9wb3J0ID0gcG9ydDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25uZWN0KCk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY2hhbm5lbCkgdGhpcy5fY2hhbm5lbC5jbGVhbigpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuX2NoYW5uZWwgPSBuZXcgdGhpcy5fY2xzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGFubmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlbG9hZCgpOnZvaWQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9lbmNvZGVyID0gdGhpcy5fcGlwZWxpbmUuZ2V0Q29udGV4dChKVENoYW5uZWxDb250ZXh0LkVOQ09ERSkgYXMgSlRJRW5jb2RlckFkYXB0ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlY29kZXIgPSB0aGlzLl9waXBlbGluZS5nZXRDb250ZXh0KEpUQ2hhbm5lbENvbnRleHQuREVDT0RFKSBhcyBKVElEZWNvZGVyQWRhcHRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBiaW5kKGNoYW5uZWxQaXBlbGluZTpKVElDaGFubmVsUGlwZWxpbmUpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BpcGVsaW5lID0gY2hhbm5lbFBpcGVsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBwaXBlbGluZSgpOkpUSUNoYW5uZWxQaXBlbGluZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BpcGVsaW5lXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGhvc3QoKTpzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ob3N0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBwb3J0KCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcG9ydDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19