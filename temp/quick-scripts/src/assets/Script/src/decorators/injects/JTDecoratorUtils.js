"use strict";
cc._RF.push(module, '96419ypoANCIagSGsuEIscx', 'JTDecoratorUtils');
// Script/src/decorators/injects/JTDecoratorUtils.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTDecoratorUtils = (function () {
            function JTDecoratorUtils() {
            }
            JTDecoratorUtils.registerClassAlias = function (target, property) {
                var __lines = target[this.DECORATOR_KEY];
                if (!__lines) {
                    target[this.DECORATOR_KEY] = __lines = [];
                }
                __lines.push(property);
                var key = this.DECORATOR_KEY + property;
                return key;
            };
            JTDecoratorUtils.bind = function (cls, destroyed) {
                if (destroyed === void 0) { destroyed = false; }
                var name = cls.name;
                var __class = this._bindedMap[name];
                if (!__class) {
                    __class = new JTSingletonClassAlias(cls, destroyed);
                    this._bindedMap[name] = __class;
                }
                return __class;
            };
            JTDecoratorUtils.bindPool = function (poolCls, itemCls, parameters) {
                var name = itemCls.name;
                var __class = this._bindedMap[name];
                if (!__class) {
                    __class = new JTSingletonPoolAlias(poolCls, itemCls, parameters);
                    this._bindedMap[name] = __class;
                }
                return __class;
            };
            JTDecoratorUtils.bindTemplate = function (cls, parameters) {
                var name = cls.name;
                var __class = this._bindedMap[name];
                if (!__class) {
                    __class = new JTConfigurationAlisa(cls, parameters);
                    this._bindedMap[name] = __class;
                }
                return __class;
            };
            JTDecoratorUtils.getClassAlisa = function (cls) {
                var name = cls.name;
                var __class = this._bindedMap[name];
                return __class;
            };
            JTDecoratorUtils._bindedMap = {};
            JTDecoratorUtils.DECORATOR_KEY = "__c.decorator__";
            return JTDecoratorUtils;
        }());
        com.JTDecoratorUtils = JTDecoratorUtils;
    })(com || (com = {}));
});

cc._RF.pop();