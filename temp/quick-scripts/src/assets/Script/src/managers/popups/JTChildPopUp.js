"use strict";
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