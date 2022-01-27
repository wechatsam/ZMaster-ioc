"use strict";
cc._RF.push(module, 'cbba1J0RC5HH5dwnMWoVSo/', 'JTHttpChannel');
// Script/src/network/JTHttpChannel.ts

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
        var JTHttpChannel = (function (_super) {
            __extends(JTHttpChannel, _super);
            function JTHttpChannel(cls) {
                return _super.call(this, cls) || this;
            }
            JTHttpChannel.prototype.flush = function () {
            };
            JTHttpChannel.prototype.send = function (data) {
            };
            return JTHttpChannel;
        }(JTChannel));
        com.JTHttpChannel = JTHttpChannel;
    })(com || (com = {}));
});

cc._RF.pop();