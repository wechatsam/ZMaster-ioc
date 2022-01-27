
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/alisa/JTSingletonClassAlisa.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fba1d9AVddJg69t0oO++ZFs', 'JTSingletonClassAlisa');
// Script/src/decorators/injects/alisa/JTSingletonClassAlisa.ts

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
        var JTSingletonClassAlias = (function (_super) {
            __extends(JTSingletonClassAlias, _super);
            function JTSingletonClassAlias(cls, destroyed) {
                if (destroyed === void 0) { destroyed = false; }
                var _this = _super.call(this, cls) || this;
                _this._referenceMap = null;
                _this._referenceCount = 0;
                _this._destroyed = false;
                _this._destroyed = destroyed;
                _this._referenceMap = {};
                return _this;
            }
            JTSingletonClassAlias.prototype.recycle = function () {
                _super.prototype.recycle.call(this);
            };
            JTSingletonClassAlias.prototype.relevance = function () {
            };
            Object.defineProperty(JTSingletonClassAlias.prototype, "instance", {
                get: function () {
                    if (!this._instance) {
                        this._instance = new this.___c();
                    }
                    return this._instance;
                },
                enumerable: false,
                configurable: true
            });
            return JTSingletonClassAlias;
        }(JTClassInjectAlias));
        com.JTSingletonClassAlias = JTSingletonClassAlias;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXGFsaXNhXFxKVFNpbmdsZXRvbkNsYXNzQWxpc2EudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR0EsSUFBTyxHQUFHLENBaURUO0lBakRELFdBQU8sR0FBRztRQUVUO1lBQTJDLHlDQUFrQjtZQU01RCwrQkFBWSxHQUFPLEVBQUUsU0FBeUI7Z0JBQXpCLDBCQUFBLEVBQUEsaUJBQXlCO2dCQUE5QyxZQUVDLGtCQUFNLEdBQUcsQ0FBQyxTQUdWO2dCQVRPLG1CQUFhLEdBQStCLElBQUksQ0FBQztnQkFDakQscUJBQWUsR0FBVSxDQUFDLENBQUM7Z0JBQzNCLGdCQUFVLEdBQVcsS0FBSyxDQUFDO2dCQUtsQyxLQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7O1lBQ3pCLENBQUM7WUFFTSx1Q0FBTyxHQUFkO2dCQUVDLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1lBQ2pCLENBQUM7WUFpQk0seUNBQVMsR0FBaEI7WUFHQSxDQUFDO1lBRUQsc0JBQVcsMkNBQVE7cUJBQW5CO29CQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUNuQjt3QkFDQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO3FCQUNqQztvQkFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZCLENBQUM7OztlQUFBO1lBQ0YsNEJBQUM7UUFBRCxDQTlDQSxBQThDQyxDQTlDMEMsa0JBQWtCLEdBOEM1RDtRQTlDWSx5QkFBcUIsd0JBOENqQyxDQUFBO0lBQ0YsQ0FBQyxFQWpETSxHQUFHLEtBQUgsR0FBRyxRQWlEVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiogbmFtZTtcclxuKi9cclxubW9kdWxlIGNvbSBcclxue1xyXG5cdGV4cG9ydCBjbGFzcyBKVFNpbmdsZXRvbkNsYXNzQWxpYXMgZXh0ZW5kcyBKVENsYXNzSW5qZWN0QWxpYXNcclxuXHR7XHJcblx0XHRwcml2YXRlIF9yZWZlcmVuY2VNYXA6e1tjbGFzc05hbWU6c3RyaW5nXTpzdHJpbmd9ID0gbnVsbDtcclxuXHRcdHByaXZhdGUgX3JlZmVyZW5jZUNvdW50Om51bWJlciA9IDA7XHJcblx0XHRwcml2YXRlIF9kZXN0cm95ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGNsczphbnksIGRlc3Ryb3llZDpib29sZWFuID0gZmFsc2UpXHJcblx0XHR7XHJcblx0XHRcdHN1cGVyKGNscyk7XHJcblx0XHRcdHRoaXMuX2Rlc3Ryb3llZCA9IGRlc3Ryb3llZDtcclxuXHRcdFx0dGhpcy5fcmVmZXJlbmNlTWFwID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIHJlY3ljbGUoKSBcclxuXHRcdHtcclxuXHRcdFx0c3VwZXIucmVjeWNsZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHB1YmxpYyBiaW5kKHRhcmdldDphbnksIHByb3BlcnR5OnN0cmluZyk6dm9pZFxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHRsZXQgX19DbGFzc05hbWU6c3RyaW5nID0gdGFyZ2V0W0pUU2luZ2xldG9uQ2xhc3MuQ0xBU1NfTkFNRV07XHJcblx0XHQvLyBcdGlmICghX19DbGFzc05hbWUpIHRhcmdldFtKVFNpbmdsZXRvbkNsYXNzLkNMQVNTX05BTUVdID0gdGFyZ2V0Lm5hbWU7XHJcblx0XHQvLyBcdGlmICghdGhpcy5fcmVmZXJlbmNlTWFwW19fQ2xhc3NOYW1lXSlcclxuXHRcdC8vIFx0e1xyXG5cdFx0Ly8gXHRcdHRoaXMuX3JlZmVyZW5jZU1hcFtfX0NsYXNzTmFtZV0gPSBwcm9wZXJ0eTtcclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog5bu656uL5byV55So5YWz57O7XHJcblx0XHQgKiBAcGFyYW0gdGFyZ2V0IOW8leeUqOeahOWvueixoVxyXG5cdFx0ICogQHBhcmFtIHByb3BlcnR5IOW8leeUqOWvueixoeWxnuaAp+WQjVxyXG5cdFx0ICovXHJcblx0XHRwdWJsaWMgcmVsZXZhbmNlKCk6dm9pZFxyXG5cdFx0e1xyXG5cdFx0XHQgXHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIGdldCBpbnN0YW5jZSgpOmFueVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXRoaXMuX2luc3RhbmNlKSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMuX19fYygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG4iXX0=