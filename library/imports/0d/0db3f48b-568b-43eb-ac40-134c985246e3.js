"use strict";
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