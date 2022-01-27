"use strict";
cc._RF.push(module, '1a7ff+5za1Ji6JTGW9z2/RU', 'JTServerConfigTemplate');
// Script/src/datas/templates/JTServerConfigTemplate.ts

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
        var JTServerConfigTemplate = (function (_super) {
            __extends(JTServerConfigTemplate, _super);
            function JTServerConfigTemplate() {
                var _this = _super.call(this) || this;
                _this.port = 0;
                _this.host = null;
                return _this;
            }
            JTServerConfigTemplate.prototype.setup = function (host, port) {
                this.port = port;
                this.host = host;
            };
            return JTServerConfigTemplate;
        }(com.JTBaseTemplate));
        com.JTServerConfigTemplate = JTServerConfigTemplate;
    })(com || (com = {}));
});

cc._RF.pop();