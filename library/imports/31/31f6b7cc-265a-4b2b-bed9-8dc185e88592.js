"use strict";
cc._RF.push(module, '31f6bfMJlpLK77ZjcGF6IWS', 'JTScene');
// Script/src/base/JTScene.ts

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
        var JTScene = (function (_super) {
            __extends(JTScene, _super);
            function JTScene() {
                return _super.call(this) || this;
            }
            Object.defineProperty(JTScene.prototype, "locker", {
                get: function () {
                    return JTAbstractSceneManager.locker;
                },
                enumerable: false,
                configurable: true
            });
            JTScene.prototype.getUIComponent = function (___class, __id, registeredClick, runClass) {
                if (registeredClick === void 0) { registeredClick = true; }
                var uiComponent = new ___class();
                uiComponent.setup(this, __id, registeredClick, runClass);
                return uiComponent;
            };
            return JTScene;
        }(JTComponent));
        com.JTScene = JTScene;
    })(com || (com = {}));
});

cc._RF.pop();