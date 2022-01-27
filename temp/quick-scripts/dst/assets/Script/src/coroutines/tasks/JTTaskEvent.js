
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/coroutines/tasks/JTTaskEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57c7b+yA4ZNKqT6ogObptCq', 'JTTaskEvent');
// Script/src/coroutines/tasks/JTTaskEvent.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTTaskEvent = (function () {
            function JTTaskEvent() {
            }
            JTTaskEvent.TASK_PROGRESS = "TASK_PROGRESS";
            JTTaskEvent.TASK_COMPLETE = "TASK_COMPLETE";
            return JTTaskEvent;
        }());
        com.JTTaskEvent = JTTaskEvent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvcm91dGluZXNcXHRhc2tzXFxKVFRhc2tFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQVNaO0lBVEQsV0FBVSxHQUFHO1FBRVQ7WUFBQTtZQU1BLENBQUM7WUFIaUIseUJBQWEsR0FBVSxlQUFlLENBQUM7WUFDdkMseUJBQWEsR0FBVSxlQUFlLENBQUM7WUFFekQsa0JBQUM7U0FORCxBQU1DLElBQUE7UUFOcUIsZUFBVyxjQU1oQyxDQUFBO0lBQ0wsQ0FBQyxFQVRTLEdBQUcsS0FBSCxHQUFHLFFBU1oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgSlRUYXNrRXZlbnRcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBUQVNLX1BST0dSRVNTOnN0cmluZyA9IFwiVEFTS19QUk9HUkVTU1wiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgVEFTS19DT01QTEVURTpzdHJpbmcgPSBcIlRBU0tfQ09NUExFVEVcIjtcclxuIFxyXG4gICAgfVxyXG59Il19