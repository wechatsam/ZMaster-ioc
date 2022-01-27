"use strict";
cc._RF.push(module, 'c14f0qWuW1OoLWdAuKfnoAu', 'JTDecoderToJSONAdapter');
// Script/src/network/contexts/decode/JTDecoderToJSONAdapter.ts

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
        var JTDecoderToJSONAdapter = (function (_super) {
            __extends(JTDecoderToJSONAdapter, _super);
            function JTDecoderToJSONAdapter() {
                return _super.call(this) || this;
            }
            JTDecoderToJSONAdapter.prototype.build = function () {
            };
            JTDecoderToJSONAdapter.prototype.decode = function (receiveMessage) {
                return JTReceivePackage.read(receiveMessage);
            };
            JTDecoderToJSONAdapter.prototype.readComplete = function (receivePackage) {
                _super.prototype.readComplete.call(this, receivePackage);
            };
            return JTDecoderToJSONAdapter;
        }(JTAbstractDecoderAdapter));
        com.JTDecoderToJSONAdapter = JTDecoderToJSONAdapter;
    })(com || (com = {}));
});

cc._RF.pop();