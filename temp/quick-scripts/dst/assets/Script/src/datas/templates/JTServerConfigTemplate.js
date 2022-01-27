
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/datas/templates/JTServerConfigTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRhdGFzXFx0ZW1wbGF0ZXNcXEpUU2VydmVyQ29uZmlnVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBa0JaO0lBbEJELFdBQVUsR0FBRztRQUVMO1lBQTRDLDBDQUFrQjtZQUl0RDtnQkFBQSxZQUVRLGlCQUFPLFNBQ2Q7Z0JBTE0sVUFBSSxHQUFVLENBQUMsQ0FBQztnQkFDaEIsVUFBSSxHQUFVLElBQUksQ0FBQzs7WUFJMUIsQ0FBQztZQUVNLHNDQUFLLEdBQVosVUFBYSxJQUFXLEVBQUUsSUFBVztnQkFFN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLENBQUM7WUFFVCw2QkFBQztRQUFELENBZkEsQUFlQyxDQWYyQyxHQUFHLENBQUMsY0FBYyxHQWU3RDtRQWZZLDBCQUFzQix5QkFlbEMsQ0FBQTtJQUNULENBQUMsRUFsQlMsR0FBRyxLQUFILEdBQUcsUUFrQloiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tXHJcbntcclxuICAgICAgICBleHBvcnQgY2xhc3MgSlRTZXJ2ZXJDb25maWdUZW1wbGF0ZSBleHRlbmRzIGNvbS5KVEJhc2VUZW1wbGF0ZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBwb3J0Om51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgaG9zdDpzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHB1YmxpYyBzZXR1cChob3N0OnN0cmluZywgcG9ydDpudW1iZXIpOnZvaWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG59XHJcbiJdfQ==