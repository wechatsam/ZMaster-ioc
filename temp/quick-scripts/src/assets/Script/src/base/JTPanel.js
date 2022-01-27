"use strict";
cc._RF.push(module, '25925kq/p1NEoBhhknHIvl2', 'JTPanel');
// Script/src/base/JTPanel.ts

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
        var JTPanel = (function (_super) {
            __extends(JTPanel, _super);
            function JTPanel() {
                return _super.call(this) || this;
            }
            JTPanel.prototype.load = function () {
                _super.prototype.load.call(this);
                this.locker.lock();
            };
            Object.defineProperty(JTPanel.prototype, "locker", {
                get: function () {
                    return JTPopupManager.locker;
                },
                enumerable: false,
                configurable: true
            });
            return JTPanel;
        }(JTComponent));
        com.JTPanel = JTPanel;
    })(com || (com = {}));
});

cc._RF.pop();