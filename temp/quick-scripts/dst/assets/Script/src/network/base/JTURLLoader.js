
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/base/JTURLLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a87d4Dk7XFOHbeoJ+klnKVP', 'JTURLLoader');
// Script/src/network/base/JTURLLoader.ts

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
        var JTURLLoader = (function (_super) {
            __extends(JTURLLoader, _super);
            function JTURLLoader() {
                return _super.call(this) || this;
            }
            JTURLLoader.TEXT = "text";
            JTURLLoader.JSON = "json";
            JTURLLoader.XML = "xml";
            JTURLLoader.BUFFER = "arraybuffer";
            JTURLLoader.IMAGE = "image";
            JTURLLoader.SOUND = "sound";
            JTURLLoader.ATLAS = "atlas";
            JTURLLoader.FONT = "font";
            return JTURLLoader;
        }(JTHttpRequest));
        com.JTURLLoader = JTURLLoader;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGJhc2VcXEpUVVJMTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQWtCWjtJQWxCRCxXQUFVLEdBQUc7UUFFVDtZQUFpQywrQkFBYTtZQVcxQzt1QkFFSSxpQkFBTztZQUNYLENBQUM7WUFaYSxnQkFBSSxHQUFVLE1BQU0sQ0FBQztZQUMzQixnQkFBSSxHQUFVLE1BQU0sQ0FBQztZQUNyQixlQUFHLEdBQVUsS0FBSyxDQUFDO1lBQ25CLGtCQUFNLEdBQVUsYUFBYSxDQUFDO1lBQzlCLGlCQUFLLEdBQVUsT0FBTyxDQUFDO1lBQ3ZCLGlCQUFLLEdBQVUsT0FBTyxDQUFDO1lBQ3ZCLGlCQUFLLEdBQVUsT0FBTyxDQUFDO1lBQ3ZCLGdCQUFJLEdBQVUsTUFBTSxDQUFDO1lBTWpDLGtCQUFDO1NBZkQsQUFlQyxDQWZnQyxhQUFhLEdBZTdDO1FBZlksZUFBVyxjQWV2QixDQUFBO0lBQ0wsQ0FBQyxFQWxCUyxHQUFHLEtBQUgsR0FBRyxRQWtCWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb21cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUVVJMTG9hZGVyIGV4dGVuZHMgSlRIdHRwUmVxdWVzdFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVEVYVDpzdHJpbmcgPSBcInRleHRcIjtcclxuXHRcdHB1YmxpYyBzdGF0aWMgSlNPTjpzdHJpbmcgPSBcImpzb25cIjtcclxuXHRcdHB1YmxpYyBzdGF0aWMgWE1MOnN0cmluZyA9IFwieG1sXCI7XHJcblx0XHRwdWJsaWMgc3RhdGljIEJVRkZFUjpzdHJpbmcgPSBcImFycmF5YnVmZmVyXCI7XHJcblx0XHRwdWJsaWMgc3RhdGljIElNQUdFOnN0cmluZyA9IFwiaW1hZ2VcIjtcclxuXHRcdHB1YmxpYyBzdGF0aWMgU09VTkQ6c3RyaW5nID0gXCJzb3VuZFwiO1xyXG5cdFx0cHVibGljIHN0YXRpYyBBVExBUzpzdHJpbmcgPSBcImF0bGFzXCI7XHJcblx0XHRwdWJsaWMgc3RhdGljIEZPTlQ6c3RyaW5nID0gXCJmb250XCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19