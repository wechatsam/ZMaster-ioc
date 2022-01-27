
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/managers/JTAbstractTemplateManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG1hbmFnZXJzXFxKVEFic3RyYWN0VGVtcGxhdGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQWtDWjtJQWxDRCxXQUFVLEdBQUc7UUFNVDtZQUF3RCw2Q0FBb0I7WUFLeEU7Z0JBQUEsWUFFSSxpQkFBTyxTQUNWO2dCQU5NLGdCQUFVLEdBQXVCLEVBQUUsQ0FBQTs7WUFNMUMsQ0FBQztZQUlNLHlDQUFLLEdBQVo7WUFHQSxDQUFDO1lBRU0sdUNBQUcsR0FBVixVQUFXLEdBQVUsRUFBRSxJQUFRO2dCQUUzQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDO1lBRU0sNENBQVEsR0FBZixVQUFnQixHQUFVO2dCQUV0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUVMLGdDQUFDO1FBQUQsQ0EzQkEsQUEyQkMsQ0EzQnVELG9CQUFvQixHQTJCM0U7UUEzQnFCLDZCQUF5Qiw0QkEyQjlDLENBQUE7SUFDTCxDQUFDLEVBbENTLEdBQUcsS0FBSCxHQUFHLFFBa0NaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiDmraTnsbvnmoTlsZ7mgKflpKrlpJrvvIzkuI3pnIDopoHmianlsZVpbnN0YW5jZVxyXG4gICAgICog57un5om/55u05o6l5Y2V5L6L5rOo5YWlaW5zdGFuY2XlsLHlpb3kuobjgIJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUQWJzdHJhY3RUZW1wbGF0ZU1hbmFnZXIgZXh0ZW5kcyBKVEFwcGxpY2F0aW9uQ29udGV4dCBpbXBsZW1lbnRzIEpUSVRlbXBsYXRlSW5mb01hbmFnZXJcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgX2NvbmZpZ01hcDp7W3VybDpzdHJpbmddOiBhbnl9ID0ge31cclxuXHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWJzdHJhY3QgdXBkYXRlQ29uZmlncyhjb25maWdzOmFueVtdKTp2b2lkO1xyXG5cclxuICAgICAgICBwdWJsaWMgYnVpbGQoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcHV0KHVybDpzdHJpbmcsIGRhdGE6YW55KTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25maWdNYXBbdXJsXSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0VmFsdWUodXJsOnN0cmluZyk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnTWFwW3VybF07XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ==