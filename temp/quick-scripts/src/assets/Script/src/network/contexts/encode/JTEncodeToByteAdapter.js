"use strict";
cc._RF.push(module, '9cdeaexKUNMlJhW4AUOwPkQ', 'JTEncodeToByteAdapter');
// Script/src/network/contexts/encode/JTEncodeToByteAdapter.ts

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
        var JTEncodeToByteAdapter = (function (_super) {
            __extends(JTEncodeToByteAdapter, _super);
            function JTEncodeToByteAdapter() {
                return _super.call(this) || this;
            }
            JTEncodeToByteAdapter.prototype.build = function () {
            };
            JTEncodeToByteAdapter.prototype.channelActive = function () {
            };
            JTEncodeToByteAdapter.prototype.encode = function (data) {
            };
            JTEncodeToByteAdapter.prototype.writeComplete = function (data) {
            };
            return JTEncodeToByteAdapter;
        }(JTAbstractEncoderAdapter));
        com.JTEncodeToByteAdapter = JTEncodeToByteAdapter;
    })(com || (com = {}));
});

cc._RF.pop();