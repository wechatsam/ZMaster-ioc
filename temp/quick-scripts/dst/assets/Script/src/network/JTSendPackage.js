
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/JTSendPackage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXEpUU2VuZFBhY2thZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDQSxJQUFVLEdBQUcsQ0EyRVo7SUEzRUQsV0FBVSxHQUFHO1FBRVQ7WUFBQTtnQkFFWSxhQUFRLEdBQVUsRUFBRSxDQUFDO2dCQUNyQixVQUFLLEdBQVUsRUFBRSxDQUFDO2dCQUNsQixjQUFTLEdBQVUsQ0FBQyxDQUFDO2dCQUNyQixhQUFRLEdBQWMsSUFBSSxDQUFDO1lBbUV2QyxDQUFDO1lBakVVLHFDQUFhLEdBQXBCLFVBQXFCLFFBQWU7Z0JBRWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzlCLENBQUM7WUFFTSw2QkFBSyxHQUFaLFVBQWEsR0FBVSxFQUFFLEtBQVk7Z0JBRWpDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQy9CLENBQUM7WUFFRCxzQkFBVyxrQ0FBTztxQkFBbEI7b0JBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLG1DQUFRO3FCQUFuQjtvQkFFSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzFCLENBQUM7OztlQUFBO1lBRU0sNEJBQUksR0FBWDtnQkFFSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRWhELGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUVNLDZCQUFLLEdBQVosVUFBYSxPQUFrQjtnQkFFM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDNUIsQ0FBQztZQUVNLCtCQUFPLEdBQWQ7Z0JBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDcEIsQ0FBQztZQUVELHNCQUFrQixxQkFBSTtxQkFBdEI7b0JBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2Q7d0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3FCQUMvQztvQkFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7OztlQUFBO1lBSWEsbUJBQUssR0FBbkIsVUFBb0IsT0FBbUI7Z0JBRW5DLElBQUksV0FBVyxHQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBbUIsQ0FBQztnQkFDakUsSUFBSSxDQUFDLE9BQU87b0JBQUUsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7Z0JBQzFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNCLE9BQU8sV0FBVyxDQUFDO1lBQ3ZCLENBQUM7WUFFYSxpQkFBRyxHQUFqQixVQUFrQixXQUF5QjtnQkFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBNEIsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFiYyxtQkFBSyxHQUFXLElBQUksQ0FBQztZQWN4QyxvQkFBQztTQXhFRCxBQXdFQyxJQUFBO1FBeEVZLGlCQUFhLGdCQXdFekIsQ0FBQTtJQUNMLENBQUMsRUEzRVMsR0FBRyxLQUFILEdBQUcsUUEyRVoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBKVFNlbmRQYWNrYWdlIGltcGxlbWVudHMgSlRJUG9vbE9iamVjdFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgX2NvbnRlbnQ6T2JqZWN0ID0ge307XHJcbiAgICAgICAgcHJpdmF0ZSBfZGF0YTpPYmplY3QgPSB7fTtcclxuICAgICAgICBwcml2YXRlIF9wcm90b2NvbDpudW1iZXIgPSAwO1xyXG4gICAgICAgIHByaXZhdGUgX2NoYW5uZWw6SlRJQ2hhbm5lbCA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHdyaXRlUHJvdG9jb2wocHJvdG9jb2w6bnVtYmVyKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm90b2NvbCA9IHByb3RvY29sO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHdyaXRlKGtleTpzdHJpbmcsIHZhbHVlOk9iamVjdCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGNvbnRlbnQoKTpPYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBwcm90b2NvbCgpOm51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb3RvY29sO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNlbmQoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhW1wicHJvdG9jb2xcIl0gPSB0aGlzLl9wcm90b2NvbDtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVtcImNvbnRlbnRcIl0gPSB0aGlzLl9jb250ZW50O1xyXG4gICAgICAgICAgICB0aGlzLl9jaGFubmVsICYmIHRoaXMuX2NoYW5uZWwuc2VuZCh0aGlzLl9kYXRhKTtcclxuXHJcbiAgICAgICAgICAgIEpUU2VuZFBhY2thZ2UucHV0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldHVwKGNoYW5uZWw6SlRJQ2hhbm5lbCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbCA9IGNoYW5uZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVjeWNsZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQgPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb3RvY29sID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgcG9vbCgpOkpUSVBvb2xcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9wb29sKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb29sID0gSlRQb29sLmluc3RhbmNlKEpUU2VuZFBhY2thZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wb29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfcG9vbDpKVElQb29sID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBiZWdpbihjaGFubmVsPzpKVElDaGFubmVsKTpKVFNlbmRQYWNrYWdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2VuZFBhY2thZ2U6SlRTZW5kUGFja2FnZSA9IHRoaXMucG9vbC5nZXQoKSBhcyBKVFNlbmRQYWNrYWdlO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5uZWwpIGNoYW5uZWwgPSBKVFNlc3Npb24uY2hhbm5lbDsgLy/lpoLmnpzmsqHmnInkvKDov57mjqXpgJrpgZPvvIznm7TmjqXkvb/nlKjmoYbmnrbpu5jorqTnmoTov57mjqVcclxuICAgICAgICAgICAgc2VuZFBhY2thZ2Uuc2V0dXAoY2hhbm5lbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzZW5kUGFja2FnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcHV0KHNlbmRQYWNrYWdlOkpUU2VuZFBhY2thZ2UpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXQoc2VuZFBhY2thZ2UgYXMgSlRJUG9vbE9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==