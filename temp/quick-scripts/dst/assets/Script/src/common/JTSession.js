
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/common/JTSession.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9371fXw/TFIPJ0PTuTex5fr', 'JTSession');
// Script/src/common/JTSession.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTSession = (function () {
            function JTSession() {
            }
            Object.defineProperty(JTSession, "stage", {
                get: function () {
                    if (!this._stage) {
                        this._stage = fgui.GRoot.create();
                        this._stage.setPosition(0, 0);
                    }
                    return this._stage;
                },
                enumerable: false,
                configurable: true
            });
            JTSession.channel = null;
            JTSession.designHeight = 0;
            JTSession.designWidth = 0;
            JTSession.stageWidth = 0;
            JTSession.stageHeight = 0;
            JTSession._stage = null;
            return JTSession;
        }());
        com.JTSession = JTSession;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvbW1vblxcSlRTZXNzaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBd0JaO0lBeEJELFdBQVUsR0FBRztRQUVSO1lBQUE7WUFxQkEsQ0FBQztZQVRJLHNCQUFrQixrQkFBSztxQkFBdkI7b0JBRUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2hCO3dCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNqQztvQkFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3hCLENBQUM7OztlQUFBO1lBbEJhLGlCQUFPLEdBQWMsSUFBSSxDQUFDO1lBRTFCLHNCQUFZLEdBQVUsQ0FBQyxDQUFDO1lBQ3hCLHFCQUFXLEdBQVUsQ0FBQyxDQUFDO1lBRXZCLG9CQUFVLEdBQVUsQ0FBQyxDQUFDO1lBQ3RCLHFCQUFXLEdBQVUsQ0FBQyxDQUFDO1lBRXZCLGdCQUFNLEdBQWMsSUFBSSxDQUFDO1lBVzVDLGdCQUFDO1NBckJELEFBcUJDLElBQUE7UUFyQlksYUFBUyxZQXFCckIsQ0FBQTtJQUNOLENBQUMsRUF4QlMsR0FBRyxLQUFILEdBQUcsUUF3QloiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICAgZXhwb3J0IGNsYXNzIEpUU2Vzc2lvblxyXG4gICAgIHtcclxuICAgICAgICAgIHB1YmxpYyBzdGF0aWMgY2hhbm5lbDpKVElDaGFubmVsID0gbnVsbDtcclxuXHJcbiAgICAgICAgICBwdWJsaWMgc3RhdGljIGRlc2lnbkhlaWdodDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgcHVibGljIHN0YXRpYyBkZXNpZ25XaWR0aDpudW1iZXIgPSAwO1xyXG4gIFxyXG4gICAgICAgICAgcHVibGljIHN0YXRpYyBzdGFnZVdpZHRoOm51bWJlciA9IDA7XHJcbiAgICAgICAgICBwdWJsaWMgc3RhdGljIHN0YWdlSGVpZ2h0Om51bWJlciA9IDA7XHJcblxyXG4gICAgICAgICAgcHVibGljIHN0YXRpYyBfc3RhZ2U6Zmd1aS5HUm9vdCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgc3RhZ2UoKTpmZ3VpLkdSb290XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGlmICghdGhpcy5fc3RhZ2UpIFxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFnZSA9IGZndWkuR1Jvb3QuY3JlYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFnZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgfVxyXG59XHJcbiJdfQ==