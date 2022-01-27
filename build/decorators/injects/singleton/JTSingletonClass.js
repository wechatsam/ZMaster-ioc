"use strict";
/*
* name;
*/
var com;
(function (com) {
    /**
     * 注入装饰器
     * @param cls 注入的单例类
     * @param destroyed 引用计数为0时，是否自动销毁
     */
    function SingletonClass(cls, destroyed = false) {
        return function (target, property, descripter) {
            if (descripter) {
                //  injectGetterSetter(cls, target, propertyName, descripter);
            }
            else {
                registerSingletonClassAlias(cls, target, property, destroyed);
            }
        };
    }
    com.SingletonClass = SingletonClass;
    function registerSingletonClassAlias(cls, target, property, destroyed = false) {
        let key = com.JTDecoratorUtils.registerClassAlias(target, property);
        Object.defineProperty(target, property, {
            get: function () {
                let val = this[key];
                if (val === null || val === undefined) {
                    let _class = com.JTDecoratorUtils.bind(cls, destroyed);
                    val = this[property] = _class.instance;
                    _class = null;
                }
                return val;
            },
            set: function (val) {
                let oldVal = this[key];
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
