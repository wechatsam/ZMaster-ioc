"use strict";
cc._RF.push(module, 'b6ab9TLgC1AD4N6ZL9ADlXE', 'JTEncodeToJSONAdapter');
// Script/src/network/contexts/encode/JTEncodeToJSONAdapter.ts

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
        var JTEncodeToJSONAdapter = (function (_super) {
            __extends(JTEncodeToJSONAdapter, _super);
            function JTEncodeToJSONAdapter() {
                return _super.call(this) || this;
            }
            JTEncodeToJSONAdapter.prototype.build = function () {
            };
            JTEncodeToJSONAdapter.prototype.channelActive = function () {
            };
            JTEncodeToJSONAdapter.prototype.encode = function (data) {
                return JSON.stringify(data);
            };
            JTEncodeToJSONAdapter.prototype.writeComplete = function (data) {
                _super.prototype.writeComplete.call(this, data);
            };
            return JTEncodeToJSONAdapter;
        }(JTAbstractEncoderAdapter));
        com.JTEncodeToJSONAdapter = JTEncodeToJSONAdapter;
    })(com || (com = {}));
});

cc._RF.pop();