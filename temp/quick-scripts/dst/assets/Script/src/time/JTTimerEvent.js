
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/JTTimerEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b78kTu2tOhIDElmHMMDp3', 'JTTimerEvent');
// Script/src/time/JTTimerEvent.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTTimeEvent = (function () {
            function JTTimeEvent() {
            }
            JTTimeEvent.TIMER = "timer";
            JTTimeEvent.TIMER_COMPLETE = "timerComplete";
            JTTimeEvent.ENTER_FRAME = "enterFrame";
            JTTimeEvent.ENTER_COMPLETE = "enterComplete";
            JTTimeEvent.ENTER_LAST_FRAME = "enterLastFrame";
            JTTimeEvent.JUMP_FRAME = "jumpFrame";
            return JTTimeEvent;
        }());
        com.JTTimeEvent = JTTimeEvent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXEpUVGltZXJFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQWdCWjtJQWhCRCxXQUFVLEdBQUc7UUFFVDtZQUFBO1lBYUEsQ0FBQztZQVhpQixpQkFBSyxHQUFVLE9BQU8sQ0FBQztZQUV2QiwwQkFBYyxHQUFVLGVBQWUsQ0FBQztZQUV4Qyx1QkFBVyxHQUFVLFlBQVksQ0FBQztZQUVsQywwQkFBYyxHQUFVLGVBQWUsQ0FBQztZQUV4Qyw0QkFBZ0IsR0FBVSxnQkFBZ0IsQ0FBQztZQUUzQyxzQkFBVSxHQUFVLFdBQVcsQ0FBQztZQUNsRCxrQkFBQztTQWJELEFBYUMsSUFBQTtRQWJZLGVBQVcsY0FhdkIsQ0FBQTtJQUNMLENBQUMsRUFoQlMsR0FBRyxLQUFILEdBQUcsUUFnQloiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRUaW1lRXZlbnQgIFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVElNRVI6c3RyaW5nID0gXCJ0aW1lclwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIFRJTUVSX0NPTVBMRVRFOnN0cmluZyA9IFwidGltZXJDb21wbGV0ZVwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVOVEVSX0ZSQU1FOnN0cmluZyA9IFwiZW50ZXJGcmFtZVwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVOVEVSX0NPTVBMRVRFOnN0cmluZyA9IFwiZW50ZXJDb21wbGV0ZVwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEVOVEVSX0xBU1RfRlJBTUU6c3RyaW5nID0gXCJlbnRlckxhc3RGcmFtZVwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIEpVTVBfRlJBTUU6c3RyaW5nID0gXCJqdW1wRnJhbWVcIjtcclxuICAgIH1cclxufVxyXG4iXX0=