
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/alisa/JTClassInjectAlias.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9fb649HJ+1ARprhYfS/Gq7w', 'JTClassInjectAlias');
// Script/src/decorators/injects/alisa/JTClassInjectAlias.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTClassInjectAlias = (function () {
            function JTClassInjectAlias(cls) {
                this.___c = null;
                this._instance = null;
                this.___c = cls;
            }
            JTClassInjectAlias.prototype.recycle = function () {
                this._instance = this.___c = null;
            };
            Object.defineProperty(JTClassInjectAlias.prototype, "instance", {
                get: function () {
                    if (!this._instance) {
                        this._instance = new this.___c();
                    }
                    return this._instance;
                },
                enumerable: false,
                configurable: true
            });
            JTClassInjectAlias.CLASS_NAME = "__ClassName";
            return JTClassInjectAlias;
        }());
        com.JTClassInjectAlias = JTClassInjectAlias;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXGFsaXNhXFxKVENsYXNzSW5qZWN0QWxpYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHQSxJQUFPLEdBQUcsQ0E0QlQ7SUE1QkQsV0FBTyxHQUFHO1FBRVQ7WUFPQyw0QkFBWSxHQUFPO2dCQUxULFNBQUksR0FBTyxJQUFJLENBQUM7Z0JBQ2hCLGNBQVMsR0FBTyxJQUFJLENBQUM7Z0JBTTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLENBQUM7WUFFTSxvQ0FBTyxHQUFkO2dCQUVDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkMsQ0FBQztZQUVELHNCQUFXLHdDQUFRO3FCQUFuQjtvQkFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFDbkI7d0JBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDakM7b0JBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUN2QixDQUFDOzs7ZUFBQTtZQW5CYSw2QkFBVSxHQUFVLGFBQWEsQ0FBQztZQW9CakQseUJBQUM7U0F6QkQsQUF5QkMsSUFBQTtRQXpCcUIsc0JBQWtCLHFCQXlCdkMsQ0FBQTtJQUNGLENBQUMsRUE1Qk0sR0FBRyxLQUFILEdBQUcsUUE0QlQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIG5hbWU7XHJcbiovXHJcbm1vZHVsZSBjb20gXHJcbntcclxuXHRleHBvcnQgYWJzdHJhY3QgY2xhc3MgSlRDbGFzc0luamVjdEFsaWFzXHJcblx0e1xyXG5cdFx0cHJvdGVjdGVkIF9fX2M6YW55ID0gbnVsbDtcclxuXHRcdHByb3RlY3RlZCBfaW5zdGFuY2U6YW55ID0gbnVsbDtcclxuXHJcblx0XHRwdWJsaWMgc3RhdGljIENMQVNTX05BTUU6c3RyaW5nID0gXCJfX0NsYXNzTmFtZVwiO1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yKGNsczphbnkpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX19fYyA9IGNscztcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgcmVjeWNsZSgpIFxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLl9pbnN0YW5jZSA9IHRoaXMuX19fYyA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIGdldCBpbnN0YW5jZSgpOmFueVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXRoaXMuX2luc3RhbmNlKSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX2luc3RhbmNlID0gbmV3IHRoaXMuX19fYygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG4iXX0=