
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/contexts/JTChannelContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGNvbnRleHRzXFxKVENoYW5uZWxDb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLElBQVUsR0FBRyxDQXFDWjtJQXJDRCxXQUFVLEdBQUc7UUFFVDtZQUErQyxvQ0FBaUI7WUFRNUQ7Z0JBQUEsWUFFSSxpQkFBTyxTQUNWO2dCQVRTLGNBQVEsR0FBYyxJQUFJLENBQUM7Z0JBQzNCLHNCQUFnQixHQUFzQixJQUFJLENBQUM7O1lBUXJELENBQUM7WUFNTSxxQ0FBVSxHQUFqQixVQUFrQixJQUFZO2dCQUUxQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUlELHNCQUFXLHFDQUFPO3FCQUFsQjtvQkFFSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pCLENBQUM7OztlQUFBO1lBRU0sK0JBQUksR0FBWCxVQUFZLGVBQWtDO2dCQUUxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7WUFDNUMsQ0FBQztZQTVCYSx1QkFBTSxHQUFVLFFBQVEsQ0FBQztZQUN6Qix1QkFBTSxHQUFVLFFBQVEsQ0FBQztZQUN6QixxQkFBSSxHQUFVLE1BQU0sQ0FBQztZQTJCdkMsdUJBQUM7U0FsQ0QsQUFrQ0MsQ0FsQzhDLGlCQUFpQixHQWtDL0Q7UUFsQ3FCLG9CQUFnQixtQkFrQ3JDLENBQUE7SUFDTCxDQUFDLEVBckNTLEdBQUcsS0FBSCxHQUFHLFFBcUNaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG5uYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgSlRDaGFubmVsQ29udGV4dCBleHRlbmRzIEpURXZlbnREaXNwYXRjaGVyIGltcGxlbWVudHMgSlRJQ2hhbm5lbENvbnRleHRcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgX2NoYW5uZWw6SlRJQ2hhbm5lbCA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9jaGFubmVsUGlwZWxpbmU6SlRJQ2hhbm5lbFBpcGVsaW5lID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBFTkNPREU6c3RyaW5nID0gXCJlbmNvZGVcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIERFQ09ERTpzdHJpbmcgPSBcImRlY29kZVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgSURMRTpzdHJpbmcgPSBcImlkbGVcIjtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGNoYW5uZWxJbmFjdGl2ZSgpOnZvaWQ7XHJcbiAgXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGJ1aWxkKCk6dm9pZDtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgZ2V0Q29udGV4dCh0eXBlOiBzdHJpbmcpOiBKVElDaGFubmVsQ29udGV4dCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGFubmVsUGlwZWxpbmUuZ2V0Q29udGV4dCh0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGFic3RyYWN0IGNoYW5uZWxBY3RpdmUoKTp2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGNoYW5uZWwoKTpKVElDaGFubmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hhbm5lbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBiaW5kKGNoYW5uZWxQaXBlbGluZTpKVElDaGFubmVsUGlwZWxpbmUpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5uZWxQaXBlbGluZSA9IGNoYW5uZWxQaXBlbGluZTtcclxuICAgICAgICAgICAgdGhpcy5fY2hhbm5lbCA9IGNoYW5uZWxQaXBlbGluZS5jaGFubmVsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=