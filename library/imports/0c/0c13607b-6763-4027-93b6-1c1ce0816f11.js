"use strict";
cc._RF.push(module, '0c136B7Z2NAJ5O2HBzggW8R', 'JTDataInfoManager');
// Script/src/managers/JTDataInfoManager.ts

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
        var JTDataInfoManager = (function (_super) {
            __extends(JTDataInfoManager, _super);
            function JTDataInfoManager() {
                return _super.call(this) || this;
            }
            return JTDataInfoManager;
        }(JTEventSignaler));
        com.JTDataInfoManager = JTDataInfoManager;
    })(com || (com = {}));
});

cc._RF.pop();