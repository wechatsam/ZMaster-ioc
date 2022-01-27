
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/singleton/JTSingletonPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ec1dy5AfNGyqMlY0NEgZTj', 'JTSingletonPool');
// Script/src/decorators/injects/singleton/JTSingletonPool.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function SingletonPool(poolCls, itemCls, parameters) {
            return function (target, property, descripter) {
                if (descripter) {
                }
                else {
                    registerSingletonPoolAlisa(poolCls, target, property, itemCls, parameters);
                }
            };
        }
        com.SingletonPool = SingletonPool;
        function registerSingletonPoolAlisa(poolCls, target, property, itemCls, parameters) {
            var key = JTDecoratorUtils.registerClassAlias(target, property);
            Object.defineProperty(target, property, {
                get: function () {
                    var val = this[key];
                    if (val === null || val === undefined) {
                        var _class = JTDecoratorUtils.bindPool(poolCls, itemCls, parameters);
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
        com.registerSingletonPoolAlisa = registerSingletonPoolAlisa;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXHNpbmdsZXRvblxcSlRTaW5nbGV0b25Qb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBTyxHQUFHLENBaURUO0lBakRELFdBQU8sR0FBRztRQVFULFNBQWdCLGFBQWEsQ0FBQyxPQUFXLEVBQUUsT0FBVyxFQUFFLFVBQWU7WUFFdEUsT0FBTyxVQUFVLE1BQVUsRUFBRSxRQUFlLEVBQUUsVUFBZTtnQkFFNUQsSUFBSSxVQUFVLEVBQ0w7aUJBRVI7cUJBRVE7b0JBQ1AsMEJBQTBCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUM1RTtZQUNGLENBQUMsQ0FBQTtRQUNGLENBQUM7UUFiZSxpQkFBYSxnQkFhNUIsQ0FBQTtRQUVELFNBQWdCLDBCQUEwQixDQUFDLE9BQVcsRUFBRSxNQUFVLEVBQUUsUUFBZSxFQUFFLE9BQVcsRUFBRSxVQUFlO1lBRWhILElBQUksR0FBRyxHQUFVLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN2RSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQ3RDO2dCQUNDLEdBQUcsRUFBRTtvQkFFSixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxFQUNyQzt3QkFDQyxJQUFJLE1BQU0sR0FBc0IsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQ3hGLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQztxQkFDZDtvQkFDRCxPQUFPLEdBQUcsQ0FBQztnQkFDWixDQUFDO2dCQUNELEdBQUcsRUFBRSxVQUFVLEdBQUc7b0JBRWpCLElBQUksTUFBTSxHQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxHQUFHLEtBQUssTUFBTTt3QkFBRSxPQUFPO29CQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixDQUFDO2dCQUNELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixZQUFZLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUM7UUFDSixDQUFDO1FBekJlLDhCQUEwQiw2QkF5QnpDLENBQUE7SUFDRixDQUFDLEVBakRNLEdBQUcsS0FBSCxHQUFHLFFBaURUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKlxyXG4qIG5hbWU7XHJcbiovXHJcbm1vZHVsZSBjb20gXHJcbntcclxuICAgIC8qKlxyXG5cdCAqIOazqOWFpeijhemlsOWZqFxyXG5cdCAqIEBwYXJhbSBwb29sQ2xzXHJcblx0ICogQHBhcmFtIGl0ZW1DbHMg5rOo5YWl55qE5Y2V5L6L57G7XHJcblx0ICogQHBhcmFtIGRlc3Ryb3llZCDlvJXnlKjorqHmlbDkuLow5pe277yM5piv5ZCm6Ieq5Yqo6ZSA5q+BXHJcblx0ICovXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIFNpbmdsZXRvblBvb2wocG9vbENsczphbnksIGl0ZW1DbHM6YW55LCBwYXJhbWV0ZXJzPzphbnkpOkZ1bmN0aW9uXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHRhcmdldDphbnksIHByb3BlcnR5OnN0cmluZywgZGVzY3JpcHRlcj86YW55KSBcclxuICAgICAgICB7XHJcblx0XHRcdGlmIChkZXNjcmlwdGVyKSBcclxuICAgICAgICAgICAge1xyXG5cdFx0XHRcdC8vICBpbmplY3RHZXR0ZXJTZXR0ZXIoY2xzLCB0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRlcik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBcclxuICAgICAgICAgICAge1xyXG5cdFx0XHRcdCByZWdpc3RlclNpbmdsZXRvblBvb2xBbGlzYShwb29sQ2xzLCB0YXJnZXQsIHByb3BlcnR5LCBpdGVtQ2xzLCBwYXJhbWV0ZXJzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQgXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU2luZ2xldG9uUG9vbEFsaXNhKHBvb2xDbHM6YW55LCB0YXJnZXQ6YW55LCBwcm9wZXJ0eTpzdHJpbmcsIGl0ZW1DbHM6YW55LCBwYXJhbWV0ZXJzPzphbnkpIFxyXG5cdHtcclxuXHRcdGxldCBrZXk6c3RyaW5nID0gSlREZWNvcmF0b3JVdGlscy5yZWdpc3RlckNsYXNzQWxpYXModGFyZ2V0LCBwcm9wZXJ0eSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgXHJcblx0XHR7XHJcblx0XHRcdGdldDogZnVuY3Rpb24gKCkgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdmFsID0gdGhpc1trZXldO1xyXG5cdFx0XHRcdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBfY2xhc3M6SlRDbGFzc0luamVjdEFsaWFzID0gSlREZWNvcmF0b3JVdGlscy5iaW5kUG9vbChwb29sQ2xzLCBpdGVtQ2xzLCBwYXJhbWV0ZXJzKTtcclxuXHRcdFx0XHRcdHZhbCA9IHRoaXNbcHJvcGVydHldID0gX2NsYXNzLmluc3RhbmNlO1xyXG5cdFx0XHRcdFx0X2NsYXNzID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsKSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRWYWw6YW55ID0gdGhpc1trZXldO1xyXG5cdFx0XHRcdGlmICh2YWwgPT09IG9sZFZhbCkgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXNba2V5XSA9IHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIl19