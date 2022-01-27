
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/JTTimeUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e33993NIhFNLpYCMgjphGLN', 'JTTimeUtils');
// Script/src/time/JTTimeUtils.ts

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTTimeUtils = (function () {
            function JTTimeUtils() {
            }
            Object.defineProperty(JTTimeUtils, "runnbleTime", {
                get: function () {
                    return performance.now();
                },
                enumerable: false,
                configurable: true
            });
            JTTimeUtils.runLater = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2, new Promise(function (resolve) {
                                setTimeout(resolve, 0);
                            })];
                    });
                });
            };
            JTTimeUtils.callLater = function (fun) {
                var enterFrame = JTEnterFrame.create();
                enterFrame.addEventListener(JTTimeEvent.ENTER_COMPLETE, onEnterComplete, this);
                enterFrame.play(4, 1);
                function onEnterComplete(e) {
                    fun && fun();
                    fun = null;
                    JTEnterFrame.put(e);
                }
            };
            return JTTimeUtils;
        }());
        com.JTTimeUtils = JTTimeUtils;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXEpUVGltZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBcUNaO0lBckNELFdBQVUsR0FBRztRQUVUO1lBQUE7WUFrQ0EsQ0FBQztZQWhDRyxzQkFBa0IsMEJBQVc7cUJBQTdCO29CQUVJLE9BQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixDQUFDOzs7ZUFBQTtZQUttQixvQkFBUSxHQUE1Qjs7O3dCQUVJLFdBQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPO2dDQUVoQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixDQUFDLENBQUMsRUFBQzs7O2FBQ047WUFLYSxxQkFBUyxHQUF2QixVQUF3QixHQUFZO2dCQUVoQyxJQUFJLFVBQVUsR0FBaUIsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNyRCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9FLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUVwQixTQUFTLGVBQWUsQ0FBQyxDQUFDO29CQUVyQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQ2IsR0FBRyxHQUFHLElBQUksQ0FBQztvQkFDWCxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDO1lBQ04sQ0FBQztZQUNMLGtCQUFDO1FBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtRQWxDWSxlQUFXLGNBa0N2QixDQUFBO0lBQ0wsQ0FBQyxFQXJDUyxHQUFHLEtBQUgsR0FBRyxRQXFDWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBKVFRpbWVVdGlscyAgXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgcnVubmJsZVRpbWUoKTpudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOetieS4i+S4gOW4p++8jOazqOaEj++8jOi/memHjOeahOW4p+aYr+aMh+a1j+iniOWZqOeahOW4p++8iOS4gOiIrOS4ujRNU++8ie+8jOiAjOmdnua4uOaIj+W4p1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcnVuTGF0ZXIoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog562J5LiL5LiA5bin77yM5rOo5oSP77yM6L+Z6YeM55qE5bin5piv5oyH5rWP6KeI5Zmo55qE5bin77yI5LiA6Iis5Li6MeW4p+aVsO+8ie+8jOiAjOmdnua4uOaIj+W4p1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2FsbExhdGVyKGZ1bjpGdW5jdGlvbik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGVudGVyRnJhbWU6SlRJRW50ZXJGcmFtZSA9IEpURW50ZXJGcmFtZS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgZW50ZXJGcmFtZS5hZGRFdmVudExpc3RlbmVyKEpUVGltZUV2ZW50LkVOVEVSX0NPTVBMRVRFLCBvbkVudGVyQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgICAgICAgICBlbnRlckZyYW1lLnBsYXkoNCwgMSlcclxuXHJcbiAgICAgICAgICAgICBmdW5jdGlvbiBvbkVudGVyQ29tcGxldGUoZSk6dm9pZFxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBmdW4gJiYgZnVuKCk7XHJcbiAgICAgICAgICAgICAgICAgIGZ1biA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgIEpURW50ZXJGcmFtZS5wdXQoZSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==