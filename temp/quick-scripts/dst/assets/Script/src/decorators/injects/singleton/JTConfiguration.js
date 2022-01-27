
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/singleton/JTConfiguration.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90965tbyEpA26Mh5qCsnAM+', 'JTConfiguration');
// Script/src/decorators/injects/singleton/JTConfiguration.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function Configuration(cls, parameters) {
            return function (target, property, descripter) {
                if (descripter) {
                }
                else {
                    loadConfiguration(cls, target, property, parameters);
                }
            };
        }
        com.Configuration = Configuration;
        function loadConfiguration(cls, target, property, parameters) {
            var key = JTDecoratorUtils.registerClassAlias(target, property);
            Object.defineProperty(target, property, {
                get: function () {
                    var val = this[key];
                    if (val === null || val === undefined) {
                        var _class = JTDecoratorUtils.bindTemplate(cls, parameters);
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
        com.loadConfiguration = loadConfiguration;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXHNpbmdsZXRvblxcSlRDb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBTyxHQUFHLENBaURUO0lBakRELFdBQU8sR0FBRztRQVFULFNBQWdCLGFBQWEsQ0FBQyxHQUFZLEVBQUUsVUFBaUI7WUFFNUQsT0FBTyxVQUFVLE1BQVUsRUFBRSxRQUFlLEVBQUUsVUFBZTtnQkFFNUQsSUFBSSxVQUFVLEVBQ0w7aUJBRVI7cUJBRVE7b0JBQ1AsaUJBQWlCLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7aUJBQ3REO1lBQ0YsQ0FBQyxDQUFBO1FBQ0YsQ0FBQztRQWJlLGlCQUFhLGdCQWE1QixDQUFBO1FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsR0FBTyxFQUFFLE1BQVUsRUFBRSxRQUFlLEVBQUUsVUFBYztZQUVyRixJQUFJLEdBQUcsR0FBVSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdkUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUN0QztnQkFDQyxHQUFHLEVBQUU7b0JBRUosSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNwQixJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFDckM7d0JBQ0MsSUFBSSxNQUFNLEdBQXNCLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQy9FLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQztxQkFDZDtvQkFDRCxPQUFPLEdBQUcsQ0FBQztnQkFDWixDQUFDO2dCQUNELEdBQUcsRUFBRSxVQUFVLEdBQUc7b0JBRWpCLElBQUksTUFBTSxHQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxHQUFHLEtBQUssTUFBTTt3QkFBRSxPQUFPO29CQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixDQUFDO2dCQUNELFVBQVUsRUFBRSxJQUFJO2dCQUNoQixZQUFZLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUM7UUFDSixDQUFDO1FBekJlLHFCQUFpQixvQkF5QmhDLENBQUE7SUFDRixDQUFDLEVBakRNLEdBQUcsS0FBSCxHQUFHLFFBaURUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKlxyXG4qIG5hbWU7XHJcbiovXHJcbm1vZHVsZSBjb20gXHJcbntcclxuICAgIC8qKlxyXG5cdCAqIOazqOWFpeijhemlsOWZqFxyXG5cdCAqIEBwYXJhbSBwYXJhbWV0ZXIgXHJcblx0ICogQHBhcmFtIHR5cGUgSlRUZXh0TG9hZGVyLkxPQURfREVGQVVMVCx7dXJsOmM6MS50eHQsIEpUQ29uZmlnVGVtcGxhdGV9O1xyXG5cdCAqIFx0XHRcdCAgIEpUVGV4dExvYWRlci5MT0FEX1BBUlNFIHt0eXBlOkpUVGV4dExvYWRlci5QQVJTRV9aSVAgfCBKVFRleHRMb2FkZXIuUEFSU0VfQklOQVJZIHwgSlRUZXh0TG9hZGVyLlBBUlNFX1NUUklORywgZGF0YTpjb250ZW50LCBKVENvbmZpZ1RlbXBsYXRlfTsgXHJcblx0ICovXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIENvbmZpZ3VyYXRpb24oY2xzOkZ1bmN0aW9uLCBwYXJhbWV0ZXJzOm9iamVjdCk6RnVuY3Rpb25cclxuICAgIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OmFueSwgcHJvcGVydHk6c3RyaW5nLCBkZXNjcmlwdGVyPzphbnkpIFxyXG4gICAgICAgIHtcclxuXHRcdFx0aWYgKGRlc2NyaXB0ZXIpIFxyXG4gICAgICAgICAgICB7XHJcblx0XHRcdFx0Ly8gIGluamVjdEdldHRlclNldHRlcihjbHMsIHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0ZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgXHJcbiAgICAgICAgICAgIHtcclxuXHRcdFx0XHQgbG9hZENvbmZpZ3VyYXRpb24oY2xzLCB0YXJnZXQsIHByb3BlcnR5LCBwYXJhbWV0ZXJzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb25maWd1cmF0aW9uKGNsczphbnksIHRhcmdldDphbnksIHByb3BlcnR5OnN0cmluZywgcGFyYW1ldGVyczphbnkpIFxyXG5cdHtcclxuXHRcdGxldCBrZXk6c3RyaW5nID0gSlREZWNvcmF0b3JVdGlscy5yZWdpc3RlckNsYXNzQWxpYXModGFyZ2V0LCBwcm9wZXJ0eSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgXHJcblx0XHR7XHJcblx0XHRcdGdldDogZnVuY3Rpb24gKCkgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgdmFsID0gdGhpc1trZXldO1xyXG5cdFx0XHRcdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBfY2xhc3M6SlRDbGFzc0luamVjdEFsaWFzID0gSlREZWNvcmF0b3JVdGlscy5iaW5kVGVtcGxhdGUoY2xzLCBwYXJhbWV0ZXJzKTtcclxuXHRcdFx0XHRcdHZhbCA9IHRoaXNbcHJvcGVydHldID0gX2NsYXNzLmluc3RhbmNlO1xyXG5cdFx0XHRcdFx0X2NsYXNzID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsKSBcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRWYWw6YW55ID0gdGhpc1trZXldO1xyXG5cdFx0XHRcdGlmICh2YWwgPT09IG9sZFZhbCkgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXNba2V5XSA9IHZhbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIl19