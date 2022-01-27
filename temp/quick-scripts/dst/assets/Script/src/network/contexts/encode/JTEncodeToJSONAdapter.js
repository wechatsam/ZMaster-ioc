
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/contexts/encode/JTEncodeToJSONAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6ab9TLgC1AD4N6ZL9ADlXE', 'JTEncodeToJSONAdapter');
// Script/src/network/contexts/encode/JTEncodeToJSONAdapter.ts

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
        var JTEncodeToJSONAdapter = (function (_super) {
            __extends(JTEncodeToJSONAdapter, _super);
            function JTEncodeToJSONAdapter() {
                return _super.call(this) || this;
            }
            JTEncodeToJSONAdapter.prototype.build = function () {
            };
            JTEncodeToJSONAdapter.prototype.channelActive = function () {
            };
            JTEncodeToJSONAdapter.prototype.encode = function (data) {
                return JSON.stringify(data);
            };
            JTEncodeToJSONAdapter.prototype.writeComplete = function (data) {
                _super.prototype.writeComplete.call(this, data);
            };
            return JTEncodeToJSONAdapter;
        }(JTAbstractEncoderAdapter));
        com.JTEncodeToJSONAdapter = JTEncodeToJSONAdapter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGNvbnRleHRzXFxlbmNvZGVcXEpURW5jb2RlVG9KU09OQWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0ErQlo7SUEvQkQsV0FBVSxHQUFHO1FBRVQ7WUFBMkMseUNBQXdCO1lBUS9EO3VCQUVJLGlCQUFPO1lBQ1gsQ0FBQztZQVRNLHFDQUFLLEdBQVo7WUFJQSxDQUFDO1lBT00sNkNBQWEsR0FBcEI7WUFFQSxDQUFDO1lBRU0sc0NBQU0sR0FBYixVQUFjLElBQVE7Z0JBRWxCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBRU0sNkNBQWEsR0FBcEIsVUFBcUIsSUFBUTtnQkFFekIsaUJBQU0sYUFBYSxZQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFHTCw0QkFBQztRQUFELENBNUJBLEFBNEJDLENBNUIwQyx3QkFBd0IsR0E0QmxFO1FBNUJZLHlCQUFxQix3QkE0QmpDLENBQUE7SUFDTCxDQUFDLEVBL0JTLEdBQUcsS0FBSCxHQUFHLFFBK0JaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpURW5jb2RlVG9KU09OQWRhcHRlciBleHRlbmRzIEpUQWJzdHJhY3RFbmNvZGVyQWRhcHRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBidWlsZCgpOiB2b2lkIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjaGFubmVsQWN0aXZlKCk6IHZvaWQgXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGVuY29kZShkYXRhOmFueSk6YW55IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHdyaXRlQ29tcGxldGUoZGF0YTphbnkpOiB2b2lkIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIud3JpdGVDb21wbGV0ZShkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=