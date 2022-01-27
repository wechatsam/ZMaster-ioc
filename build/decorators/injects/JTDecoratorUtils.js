"use strict";
/*
* name;
*/
var com;
(function (com) {
    class JTDecoratorUtils {
        /**
         * 标记当前对象哪些属性进行了注入
         * @param cls 注入的类型
         * @param target 注入的类
         * @param property 被注入的属性名
         * @returns 返回注入关键字+属性名 __c.decorator__
         */
        static registerClassAlias(target, property) {
            let __lines = target[this.DECORATOR_KEY];
            if (!__lines) {
                target[this.DECORATOR_KEY] = __lines = [];
            }
            __lines.push(property);
            let key = this.DECORATOR_KEY + property;
            return key;
        }
        /**
         * 全局单例--一个项目中只能存在一份实例（以cls做为参照对象）
         * @param cls
         * @param destroyed
         * @returns
         */
        static bind(cls, destroyed = false) {
            let name = cls.name;
            let __class = this._bindedMap[name];
            if (!__class) {
                __class = new com.JTSingletonClassAlias(cls, destroyed);
                this._bindedMap[name] = __class;
            }
            return __class;
        }
        static bindPool(poolCls, itemCls, destroyed = false) {
            let name = itemCls.name;
            let __class = this._bindedMap[name];
            if (!__class) {
                __class = new com.JTSingletonPoolAlias(poolCls, itemCls, destroyed);
                this._bindedMap[name] = __class;
            }
            return __class;
        }
        static bindTemplate(cls, parameters) {
            let name = cls.name;
            let __class = this._bindedMap[name];
            if (!__class) {
                __class = new com.JTConfigurationAlisa(cls, parameters);
                this._bindedMap[name] = __class;
            }
            return __class;
        }
        static getClassAlisa(cls) {
            let name = cls.name;
            let __class = this._bindedMap[name];
            return __class;
        }
    }
    JTDecoratorUtils._bindedMap = {};
    // private static _singletonMap:{[name:string] : JTClassAlisa} = {};
    JTDecoratorUtils.DECORATOR_KEY = "__c.decorator__";
    com.JTDecoratorUtils = JTDecoratorUtils;
})(com || (com = {}));
