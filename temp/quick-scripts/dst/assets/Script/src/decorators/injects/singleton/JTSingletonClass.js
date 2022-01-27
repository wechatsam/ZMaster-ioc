
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/singleton/JTSingletonClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0db3fSLVotD66xAE0yYUkbj', 'JTSingletonClass');
// Script/src/decorators/injects/singleton/JTSingletonClass.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function SingletonClass(cls, destroyed) {
            if (destroyed === void 0) { destroyed = false; }
            return function (target, property, descripter) {
                if (descripter) {
                }
                else {
                    registerSingletonClassAlias(cls, target, property, destroyed);
                }
            };
        }
        com.SingletonClass = SingletonClass;
        function registerSingletonClassAlias(cls, target, property, destroyed) {
            if (destroyed === void 0) { destroyed = false; }
            var key = JTDecoratorUtils.registerClassAlias(target, property);
            Object.defineProperty(target, property, {
                get: function () {
                    var val = this[key];
                    if (val === null || val === undefined) {
                        var _class = JTDecoratorUtils.bind(cls, destroyed);
                        val = this[property] = _class.instance;
                        _class = null;
                    }
                    return val;
                },
                set: function (val) {
                    var oldVal = this[key];
                    if (val === oldVal)
                        return;
                    this[key] = val;
                },
                enumerable: true,
                configurable: true
            });
        }
        com.registerSingletonClassAlias = registerSingletonClassAlias;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXHNpbmdsZXRvblxcSlRTaW5nbGV0b25DbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUtBLElBQU8sR0FBRyxDQWdEVDtJQWhERCxXQUFPLEdBQUc7UUFPVCxTQUFnQixjQUFjLENBQUMsR0FBTyxFQUFFLFNBQXlCO1lBQXpCLDBCQUFBLEVBQUEsaUJBQXlCO1lBRWhFLE9BQU8sVUFBVSxNQUFVLEVBQUUsUUFBZSxFQUFFLFVBQWU7Z0JBRTVELElBQUksVUFBVSxFQUNMO2lCQUVSO3FCQUVRO29CQUNQLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2lCQUMvRDtZQUNGLENBQUMsQ0FBQTtRQUNGLENBQUM7UUFiZSxrQkFBYyxpQkFhN0IsQ0FBQTtRQUVELFNBQWdCLDJCQUEyQixDQUFDLEdBQU8sRUFBRSxNQUFVLEVBQUUsUUFBZSxFQUFFLFNBQXlCO1lBQXpCLDBCQUFBLEVBQUEsaUJBQXlCO1lBRTFHLElBQUksR0FBRyxHQUFVLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN2RSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQ3RDO2dCQUNDLEdBQUcsRUFBRTtvQkFFSixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxFQUNyQzt3QkFDQyxJQUFJLE1BQU0sR0FBc0IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDdEUsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO3dCQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FCQUNkO29CQUNELE9BQU8sR0FBRyxDQUFDO2dCQUNaLENBQUM7Z0JBQ0QsR0FBRyxFQUFFLFVBQVUsR0FBRztvQkFFakIsSUFBSSxNQUFNLEdBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMzQixJQUFJLEdBQUcsS0FBSyxNQUFNO3dCQUFFLE9BQU87b0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFlBQVksRUFBRSxJQUFJO2FBQ2xCLENBQUMsQ0FBQztRQUNKLENBQUM7UUF6QmUsK0JBQTJCLDhCQXlCMUMsQ0FBQTtJQUNGLENBQUMsRUFoRE0sR0FBRyxLQUFILEdBQUcsUUFnRFQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qXHJcbiogbmFtZTtcclxuKi9cclxubW9kdWxlIGNvbSBcclxue1xyXG4gICAgLyoqXHJcblx0ICog5rOo5YWl6KOF6aWw5ZmoXHJcblx0ICogQHBhcmFtIGNscyDms6jlhaXnmoTljZXkvovnsbtcclxuXHQgKiBAcGFyYW0gZGVzdHJveWVkIOW8leeUqOiuoeaVsOS4ujDml7bvvIzmmK/lkKboh6rliqjplIDmr4FcclxuXHQgKi9cclxuXHRleHBvcnQgZnVuY3Rpb24gU2luZ2xldG9uQ2xhc3MoY2xzOmFueSwgZGVzdHJveWVkOmJvb2xlYW4gPSBmYWxzZSk6RnVuY3Rpb25cclxuICAgIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OmFueSwgcHJvcGVydHk6c3RyaW5nLCBkZXNjcmlwdGVyPzphbnkpIFxyXG4gICAgICAgIHtcclxuXHRcdFx0aWYgKGRlc2NyaXB0ZXIpIFxyXG4gICAgICAgICAgICB7XHJcblx0XHRcdFx0Ly8gIGluamVjdEdldHRlclNldHRlcihjbHMsIHRhcmdldCwgcHJvcGVydHlOYW1lLCBkZXNjcmlwdGVyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIFxyXG4gICAgICAgICAgICB7XHJcblx0XHRcdFx0IHJlZ2lzdGVyU2luZ2xldG9uQ2xhc3NBbGlhcyhjbHMsIHRhcmdldCwgcHJvcGVydHksIGRlc3Ryb3llZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0IFxyXG5cdGV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNpbmdsZXRvbkNsYXNzQWxpYXMoY2xzOmFueSwgdGFyZ2V0OmFueSwgcHJvcGVydHk6c3RyaW5nLCBkZXN0cm95ZWQ6Ym9vbGVhbiA9IGZhbHNlKSBcclxuXHR7XHJcblx0XHRsZXQga2V5OnN0cmluZyA9IEpURGVjb3JhdG9yVXRpbHMucmVnaXN0ZXJDbGFzc0FsaWFzKHRhcmdldCwgcHJvcGVydHkpO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIFxyXG5cdFx0e1xyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHZhbCA9IHRoaXNba2V5XTtcclxuXHRcdFx0XHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgX2NsYXNzOkpUQ2xhc3NJbmplY3RBbGlhcyA9IEpURGVjb3JhdG9yVXRpbHMuYmluZChjbHMsIGRlc3Ryb3llZCk7XHJcblx0XHRcdFx0XHR2YWwgPSB0aGlzW3Byb3BlcnR5XSA9IF9jbGFzcy5pbnN0YW5jZTtcclxuXHRcdFx0XHRcdF9jbGFzcyA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbCkgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgb2xkVmFsOmFueSA9IHRoaXNba2V5XTtcclxuXHRcdFx0XHRpZiAodmFsID09PSBvbGRWYWwpIHJldHVybjtcclxuXHRcdFx0XHR0aGlzW2tleV0gPSB2YWw7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==