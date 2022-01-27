"use strict";
cc._RF.push(module, 'a87d4Dk7XFOHbeoJ+klnKVP', 'JTURLLoader');
// Script/src/network/base/JTURLLoader.ts

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
        var JTURLLoader = (function (_super) {
            __extends(JTURLLoader, _super);
            function JTURLLoader() {
                return _super.call(this) || this;
            }
            JTURLLoader.TEXT = "text";
            JTURLLoader.JSON = "json";
            JTURLLoader.XML = "xml";
            JTURLLoader.BUFFER = "arraybuffer";
            JTURLLoader.IMAGE = "image";
            JTURLLoader.SOUND = "sound";
            JTURLLoader.ATLAS = "atlas";
            JTURLLoader.FONT = "font";
            return JTURLLoader;
        }(JTHttpRequest));
        com.JTURLLoader = JTURLLoader;
    })(com || (com = {}));
});

cc._RF.pop();