"use strict";
cc._RF.push(module, '9b79bO5BJZPF5+gW5RyEWCJ', 'JTLayout');
// Script/src/layout/JTLayout.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTLayout = (function () {
            function JTLayout(_className, property, __layout) {
                this.__className = null;
                this.__property = null;
                this.__layout = null;
                this.settings(_className, property, __layout);
            }
            JTLayout.prototype.settings = function (__className, property, __layout) {
                this.__layout = __layout;
                this.__property = property;
                this.__className = __className;
            };
            JTLayout.prototype.update = function (child) {
                switch (this.__layout) {
                    case JTLayout.LAYOUT_VERTICAL:
                        {
                            JTLayoutManager.layoutVertical(child);
                            break;
                        }
                    case JTLayout.LAYOUT_HORIZONTAL:
                        {
                            JTLayoutManager.layoutHorzontal(child);
                            break;
                        }
                    case JTLayout.LAYOUT_AUTO_SWITCH:
                        {
                            JTLayoutManager.autoAdjustLayout(child);
                            break;
                        }
                }
            };
            JTLayout.LAYOUT_VERTICAL = "Vertical";
            JTLayout.LAYOUT_HORIZONTAL = "Horizontal";
            JTLayout.LAYOUT_AUTO_SWITCH = "Auto-Switch";
            return JTLayout;
        }());
        com.JTLayout = JTLayout;
    })(com || (com = {}));
});

cc._RF.pop();