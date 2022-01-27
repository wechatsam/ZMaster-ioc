"use strict";
cc._RF.push(module, 'd0f7dSHxoFIZJdLyHmReAdv', 'JTIdleStateAdapter');
// Script/src/network/contexts/idleState/JTIdleStateAdapter.ts

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
        var JTIdleStateAdapter = (function (_super) {
            __extends(JTIdleStateAdapter, _super);
            function JTIdleStateAdapter() {
                return _super.call(this) || this;
            }
            return JTIdleStateAdapter;
        }(JTAbstractIdleStateAdapter));
        com.JTIdleStateAdapter = JTIdleStateAdapter;
    })(com || (com = {}));
});

cc._RF.pop();