
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/timers/JTOptimizeTimer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97be0PhUAlBaJc+aB9foCUF', 'JTOptimizeTimer');
// Script/src/time/timers/JTOptimizeTimer.ts

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
        var JTOptimizeTimer = (function (_super) {
            __extends(JTOptimizeTimer, _super);
            function JTOptimizeTimer(interval, loop) {
                if (interval === void 0) { interval = 0; }
                if (loop === void 0) { loop = 0; }
                return _super.call(this, interval, loop) || this;
            }
            return JTOptimizeTimer;
        }(JTTimer));
        com.JTOptimizeTimer = JTOptimizeTimer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXHRpbWVyc1xcSlRPcHRpbWl6ZVRpbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQVVaO0lBVkQsV0FBVSxHQUFHO1FBRVQ7WUFBcUMsbUNBQU87WUFFeEMseUJBQVksUUFBbUIsRUFBRSxJQUFlO2dCQUFwQyx5QkFBQSxFQUFBLFlBQW1CO2dCQUFFLHFCQUFBLEVBQUEsUUFBZTt1QkFFNUMsa0JBQU0sUUFBUSxFQUFFLElBQUksQ0FBQztZQUN6QixDQUFDO1lBQ0wsc0JBQUM7UUFBRCxDQU5BLEFBTUMsQ0FOb0MsT0FBTyxHQU0zQztRQU5ZLG1CQUFlLGtCQU0zQixDQUFBO0lBRUwsQ0FBQyxFQVZTLEdBQUcsS0FBSCxHQUFHLFFBVVoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRPcHRpbWl6ZVRpbWVyIGV4dGVuZHMgSlRUaW1lclxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGludGVydmFsOm51bWJlciA9IDAsIGxvb3A6bnVtYmVyID0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKGludGVydmFsLCBsb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==