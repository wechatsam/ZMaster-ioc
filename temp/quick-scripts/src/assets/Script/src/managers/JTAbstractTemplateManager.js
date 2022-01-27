"use strict";
cc._RF.push(module, 'e0070E4ta1A56TdKlEyZTkJ', 'JTAbstractTemplateManager');
// Script/src/managers/JTAbstractTemplateManager.ts

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
        var JTAbstractTemplateManager = (function (_super) {
            __extends(JTAbstractTemplateManager, _super);
            function JTAbstractTemplateManager() {
                var _this = _super.call(this) || this;
                _this._configMap = {};
                return _this;
            }
            JTAbstractTemplateManager.prototype.build = function () {
            };
            JTAbstractTemplateManager.prototype.put = function (url, data) {
                this._configMap[url] = data;
            };
            JTAbstractTemplateManager.prototype.getValue = function (url) {
                return this._configMap[url];
            };
            return JTAbstractTemplateManager;
        }(JTApplicationContext));
        com.JTAbstractTemplateManager = JTAbstractTemplateManager;
    })(com || (com = {}));
});

cc._RF.pop();