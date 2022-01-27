
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/threads/JTThread.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f76c7blaYRBm49D1gQ/f+0i', 'JTThread');
// Script/src/threads/JTThread.ts

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
        var JTThread = (function (_super) {
            __extends(JTThread, _super);
            function JTThread() {
                return _super.call(this) || this;
            }
            return JTThread;
        }(JTEventDispatcher));
        com.JTThread = JTThread;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRocmVhZHNcXEpUVGhyZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQVNaO0lBVEQsV0FBVSxHQUFHO1FBRVQ7WUFBOEIsNEJBQWlCO1lBRTFDO3VCQUVJLGlCQUFPO1lBQ1gsQ0FBQztZQUNOLGVBQUM7UUFBRCxDQU5BLEFBTUMsQ0FONkIsaUJBQWlCLEdBTTlDO1FBTlksWUFBUSxXQU1wQixDQUFBO0lBQ0wsQ0FBQyxFQVRTLEdBQUcsS0FBSCxHQUFHLFFBU1oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRUaHJlYWQgZXh0ZW5kcyBKVEV2ZW50RGlzcGF0Y2hlclxyXG4gICAge1xyXG4gICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=