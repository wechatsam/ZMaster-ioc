
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/JTWebSocketChannel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7ee0y7KSdCm4upY8TiNFVz', 'JTWebSocketChannel');
// Script/src/network/JTWebSocketChannel.ts

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
        var JTWebSocketChannel = (function (_super) {
            __extends(JTWebSocketChannel, _super);
            function JTWebSocketChannel(cls) {
                var _this = _super.call(this, cls) || this;
                _this._connected = false;
                _this._buffers = null;
                _this._idleState = null;
                _this._buffers = [];
                return _this;
            }
            JTWebSocketChannel.prototype.flush = function () {
                var socket = this._channel;
                while (this._buffers.length) {
                    var msg = this._buffers.shift();
                    if (socket) {
                        socket.connected && socket.send(msg);
                        this._encoder.writeComplete(msg);
                    }
                }
            };
            JTWebSocketChannel.prototype.send = function (data) {
                var message = this._encoder.encode(data);
                var socket = this._channel;
                if (socket && socket.connected) {
                    socket.send(message);
                    this._encoder.writeComplete(message);
                }
                else {
                    this._buffers.push(message);
                    JTLogger.info("send error, the websocket cant send msg to server!");
                }
            };
            JTWebSocketChannel.prototype.config = function (host, port) {
                _super.prototype.config.call(this, host, port);
            };
            JTWebSocketChannel.prototype.connect = function () {
                var channel = _super.prototype.connect.call(this);
                channel.addEventListener(JTWebSocket.OPEN, this.onConnectSucceed, this);
                channel.addEventListener(JTWebSocket.MESSAGE, this.onReceiveMessage, this);
                channel.addEventListener(JTWebSocket.CLOSE, this.onCloseHandler, this);
                channel.addEventListener(JTWebSocket.ERROR, this.onErrorHandler, this);
                channel.connect(this._host, this.port);
                return channel;
            };
            JTWebSocketChannel.prototype.onConnectSucceed = function (e) {
                JTLogger.info("connect succeed!");
                this.pipeline.channelActive();
                this.flush();
                JTFunctionManager.execute(JTWebSocket.OPEN);
            };
            JTWebSocketChannel.prototype.onReceiveMessage = function (data) {
                var decoder = this._decoder;
                var message = decoder.decode(data);
                decoder.readComplete(message);
            };
            JTWebSocketChannel.prototype.onCloseHandler = function (e) {
                this.pipeline.channelInactive();
                JTLogger.info("the server already close");
            };
            JTWebSocketChannel.prototype.onErrorHandler = function (e) {
                this.pipeline.channelInactive();
                JTLogger.info("current connect error");
            };
            JTWebSocketChannel.prototype.reload = function () {
                _super.prototype.reload.call(this);
                this._idleState = this._pipeline.getContext(JTChannelContext.IDLE);
            };
            return JTWebSocketChannel;
        }(JTChannel));
        com.JTWebSocketChannel = JTWebSocketChannel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXEpUV2ViU29ja2V0Q2hhbm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDQSxJQUFVLEdBQUcsQ0E0Rlo7SUE1RkQsV0FBVSxHQUFHO1FBRVQ7WUFBd0Msc0NBQVM7WUFLN0MsNEJBQVksR0FBTztnQkFBbkIsWUFFSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtnQkFQUyxnQkFBVSxHQUFXLEtBQUssQ0FBQztnQkFDM0IsY0FBUSxHQUFTLElBQUksQ0FBQztnQkFDdEIsZ0JBQVUsR0FBcUIsSUFBSSxDQUFDO2dCQUkxQyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7WUFDdkIsQ0FBQztZQUVNLGtDQUFLLEdBQVo7Z0JBRUksSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLFFBQXVCLENBQUM7Z0JBQ3RELE9BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQzFCO29CQUNJLElBQUksR0FBRyxHQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3BDLElBQUksTUFBTSxFQUNWO3dCQUNJLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3BDO2lCQUNKO1lBQ0wsQ0FBQztZQUVNLGlDQUFJLEdBQVgsVUFBWSxJQUFRO2dCQUVoQixJQUFJLE9BQU8sR0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxNQUFNLEdBQWUsSUFBSSxDQUFDLFFBQXVCLENBQUM7Z0JBQ3RELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQzlCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN4QztxQkFFRDtvQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsUUFBUSxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO2lCQUN2RTtZQUNMLENBQUM7WUFFTSxtQ0FBTSxHQUFiLFVBQWMsSUFBVyxFQUFFLElBQVc7Z0JBRWxDLGlCQUFNLE1BQU0sWUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUVNLG9DQUFPLEdBQWQ7Z0JBRUksSUFBSSxPQUFPLEdBQWUsaUJBQU0sT0FBTyxXQUFpQixDQUFDO2dCQUN6RCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0UsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxPQUFPLENBQUM7WUFDbkIsQ0FBQztZQUVTLDZDQUFnQixHQUExQixVQUEyQixDQUFDO2dCQUV4QixRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7Z0JBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFFUyw2Q0FBZ0IsR0FBMUIsVUFBMkIsSUFBUTtnQkFFL0IsSUFBSSxPQUFPLEdBQXFCLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzlDLElBQUksT0FBTyxHQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsQ0FBQztZQUVTLDJDQUFjLEdBQXhCLFVBQXlCLENBQUM7Z0JBRXRCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBRVMsMkNBQWMsR0FBeEIsVUFBeUIsQ0FBQztnQkFFdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1lBQzFDLENBQUM7WUFFTSxtQ0FBTSxHQUFiO2dCQUVJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFzQixDQUFDO1lBQzVGLENBQUM7WUFDTCx5QkFBQztRQUFELENBekZBLEFBeUZDLENBekZ1QyxTQUFTLEdBeUZoRDtRQXpGWSxzQkFBa0IscUJBeUY5QixDQUFBO0lBQ0wsQ0FBQyxFQTVGUyxHQUFHLEtBQUgsR0FBRyxRQTRGWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIkpUQ2hhbm5lbC50c1wiLz5cclxubmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUV2ViU29ja2V0Q2hhbm5lbCBleHRlbmRzIEpUQ2hhbm5lbFxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBfY29ubmVjdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBwcm90ZWN0ZWQgX2J1ZmZlcnM6YW55W10gPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfaWRsZVN0YXRlOkpUSUNoYW5uZWxDb250ZXh0ID0gbnVsbDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihjbHM6YW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoY2xzKTtcclxuICAgICAgICAgICAgdGhpcy5fYnVmZmVycyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZsdXNoKCk6dm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzb2NrZXQ6SlRXZWJTb2NrZXQgPSB0aGlzLl9jaGFubmVsIGFzIEpUV2ViU29ja2V0O1xyXG4gICAgICAgICAgICB3aGlsZSh0aGlzLl9idWZmZXJzLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1zZzphbnkgPSB0aGlzLl9idWZmZXJzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc29ja2V0KVxyXG4gICAgICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5jb25uZWN0ZWQgJiYgc29ja2V0LnNlbmQobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmNvZGVyLndyaXRlQ29tcGxldGUobXNnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNlbmQoZGF0YTphbnkpOnZvaWQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZTphbnkgPSB0aGlzLl9lbmNvZGVyLmVuY29kZShkYXRhKTtcclxuICAgICAgICAgICAgbGV0IHNvY2tldDpKVFdlYlNvY2tldCA9IHRoaXMuX2NoYW5uZWwgYXMgSlRXZWJTb2NrZXQ7XHJcbiAgICAgICAgICAgIGlmIChzb2NrZXQgJiYgc29ja2V0LmNvbm5lY3RlZClcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgc29ja2V0LnNlbmQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmNvZGVyLndyaXRlQ29tcGxldGUobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWZmZXJzLnB1c2gobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBKVExvZ2dlci5pbmZvKFwic2VuZCBlcnJvciwgdGhlIHdlYnNvY2tldCBjYW50IHNlbmQgbXNnIHRvIHNlcnZlciFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25maWcoaG9zdDpzdHJpbmcsIHBvcnQ6bnVtYmVyKTphbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNvbmZpZyhob3N0LCBwb3J0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25uZWN0KCk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2hhbm5lbDpKVFdlYlNvY2tldCA9IHN1cGVyLmNvbm5lY3QoKSBhcyBKVFdlYlNvY2tldDtcclxuICAgICAgICAgICAgY2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKEpUV2ViU29ja2V0Lk9QRU4sIHRoaXMub25Db25uZWN0U3VjY2VlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIGNoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcihKVFdlYlNvY2tldC5NRVNTQUdFLCB0aGlzLm9uUmVjZWl2ZU1lc3NhZ2UsIHRoaXMpO1xyXG4gICAgICAgICAgICBjaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoSlRXZWJTb2NrZXQuQ0xPU0UsIHRoaXMub25DbG9zZUhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgICAgICBjaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoSlRXZWJTb2NrZXQuRVJST1IsIHRoaXMub25FcnJvckhhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgICAgICBjaGFubmVsLmNvbm5lY3QodGhpcy5faG9zdCwgdGhpcy5wb3J0KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25Db25uZWN0U3VjY2VlZChlKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBKVExvZ2dlci5pbmZvKFwiY29ubmVjdCBzdWNjZWVkIVwiKVxyXG4gICAgICAgICAgICB0aGlzLnBpcGVsaW5lLmNoYW5uZWxBY3RpdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5mbHVzaCgpO1xyXG4gICAgICAgICAgICBKVEZ1bmN0aW9uTWFuYWdlci5leGVjdXRlKEpUV2ViU29ja2V0Lk9QRU4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uUmVjZWl2ZU1lc3NhZ2UoZGF0YTphbnkpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBkZWNvZGVyOkpUSURlY29kZXJBZGFwdGVyID0gdGhpcy5fZGVjb2RlcjtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U6YW55ID0gZGVjb2Rlci5kZWNvZGUoZGF0YSk7XHJcbiAgICAgICAgICAgIGRlY29kZXIucmVhZENvbXBsZXRlKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uQ2xvc2VIYW5kbGVyKGUpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGlwZWxpbmUuY2hhbm5lbEluYWN0aXZlKCk7XHJcbiAgICAgICAgICAgIEpUTG9nZ2VyLmluZm8oXCJ0aGUgc2VydmVyIGFscmVhZHkgY2xvc2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25FcnJvckhhbmRsZXIoZSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5waXBlbGluZS5jaGFubmVsSW5hY3RpdmUoKTtcclxuICAgICAgICAgICAgSlRMb2dnZXIuaW5mbyhcImN1cnJlbnQgY29ubmVjdCBlcnJvclwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlbG9hZCgpOnZvaWQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlci5yZWxvYWQoKTtcclxuICAgICAgICAgICAgdGhpcy5faWRsZVN0YXRlID0gdGhpcy5fcGlwZWxpbmUuZ2V0Q29udGV4dChKVENoYW5uZWxDb250ZXh0LklETEUpIGFzIEpUSUNoYW5uZWxDb250ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=