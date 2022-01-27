"use strict";
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