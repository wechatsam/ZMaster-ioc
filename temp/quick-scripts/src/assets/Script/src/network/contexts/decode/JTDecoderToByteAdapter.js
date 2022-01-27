"use strict";
cc._RF.push(module, 'f539fP/ffJHcJ2dfFEvroXD', 'JTDecoderToByteAdapter');
// Script/src/network/contexts/decode/JTDecoderToByteAdapter.ts

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
        var JTDecoderToByteAdapter = (function (_super) {
            __extends(JTDecoderToByteAdapter, _super);
            function JTDecoderToByteAdapter() {
                return _super.call(this) || this;
            }
            JTDecoderToByteAdapter.prototype.build = function () {
            };
            JTDecoderToByteAdapter.prototype.decode = function (data) {
                return null;
            };
            JTDecoderToByteAdapter.prototype.readComplete = function (receivePackage) {
            };
            return JTDecoderToByteAdapter;
        }(JTAbstractDecoderAdapter));
        com.JTDecoderToByteAdapter = JTDecoderToByteAdapter;
    })(com || (com = {}));
});

cc._RF.pop();