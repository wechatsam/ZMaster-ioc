
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/managers/popups/JTChildPopUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b98fKcv8VK65wzAldCV4Cl', 'JTChildPopUp');
// Script/src/managers/popups/JTChildPopUp.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTChildPopUp = (function () {
            function JTChildPopUp() {
                this.component = null;
                this.parent = null;
                this.componentUI = null;
                this.isTween = false;
                this.mode = true;
            }
            JTChildPopUp.prototype.setup = function (component, parent, isTween, mode) {
                if (isTween === void 0) { isTween = false; }
                if (mode === void 0) { mode = true; }
                this.parent = parent;
                this.isTween = isTween;
                this.mode = mode;
                this.component = component;
            };
            JTChildPopUp.prototype.recycle = function () {
                if (this.componentUI && this.componentUI.parent) {
                    this.componentUI.removeFromParent();
                }
                this.parent = this.componentUI = this.component = null;
                this.mode = this.isTween = false;
            };
            return JTChildPopUp;
        }());
        com.JTChildPopUp = JTChildPopUp;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG1hbmFnZXJzXFxwb3B1cHNcXEpUQ2hpbGRQb3BVcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQTZCWjtJQTdCRCxXQUFVLEdBQUc7UUFFVDtZQUFBO2dCQUdXLGNBQVMsR0FBZ0IsSUFBSSxDQUFDO2dCQUM5QixXQUFNLEdBQW1CLElBQUksQ0FBQztnQkFDOUIsZ0JBQVcsR0FBbUIsSUFBSSxDQUFDO2dCQUNuQyxZQUFPLEdBQVcsS0FBSyxDQUFBO2dCQUN2QixTQUFJLEdBQVcsSUFBSSxDQUFBO1lBbUI5QixDQUFDO1lBakJVLDRCQUFLLEdBQVosVUFBYSxTQUFzQixFQUFFLE1BQXVCLEVBQUUsT0FBdUIsRUFBRSxJQUFtQjtnQkFBNUMsd0JBQUEsRUFBQSxlQUF1QjtnQkFBRSxxQkFBQSxFQUFBLFdBQW1CO2dCQUV0RyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMvQixDQUFDO1lBRU0sOEJBQU8sR0FBZDtnQkFFSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQy9DO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdkM7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLENBQUM7WUFDTCxtQkFBQztRQUFELENBMUJBLEFBMEJDLElBQUE7UUExQlksZ0JBQVksZUEwQnhCLENBQUE7SUFDTCxDQUFDLEVBN0JTLEdBQUcsS0FBSCxHQUFHLFFBNkJaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUQ2hpbGRQb3BVcCBpbXBsZW1lbnRzIEpUSVBvb2xPYmplY3RcclxuICAgIHtcclxuIFxyXG4gICAgICAgIHB1YmxpYyBjb21wb25lbnQ6SlRJQ29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgcGFyZW50OmZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgcHVibGljIGNvbXBvbmVudFVJOmZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcbiAgICAgICAgcHVibGljIGlzVHdlZW46Ym9vbGVhbiA9IGZhbHNlXHJcbiAgICAgICAgcHVibGljIG1vZGU6Ym9vbGVhbiA9IHRydWVcclxuXHJcbiAgICAgICAgcHVibGljIHNldHVwKGNvbXBvbmVudDpKVElDb21wb25lbnQsIHBhcmVudD86Zmd1aS5HQ29tcG9uZW50LCBpc1R3ZWVuOmJvb2xlYW4gPSBmYWxzZSwgbW9kZTpib29sZWFuID0gdHJ1ZSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUd2VlbiA9IGlzVHdlZW47XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlY3ljbGUoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRVSSAmJiB0aGlzLmNvbXBvbmVudFVJLnBhcmVudClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRVSS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSB0aGlzLmNvbXBvbmVudFVJID0gdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSB0aGlzLmlzVHdlZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19