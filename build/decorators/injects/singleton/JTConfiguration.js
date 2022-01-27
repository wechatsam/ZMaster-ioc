"use strict";
/*
* name;
*/
var com;
(function (com) {
    /**
     * 注入装饰器
     * @param parameter
     * @param type JTTextLoader.LOAD_DEFAULT,{url:c:1.txt, JTConfigTemplate};
     * 			   JTTextLoader.LOAD_PARSE {type:JTTextLoader.PARSE_ZIP | JTTextLoader.PARSE_BINARY | JTTextLoader.PARSE_STRING, data:content, JTConfigTemplate};
     */
    function Configuration(cls, parameters) {
        return function (target, property, descripter) {
            if (descripter) {
                //  injectGetterSetter(cls, target, property, descripter);
            }
            else {
                loadConfiguration(cls, target, property, parameters);
            }
        };
    }
    com.Configuration = Configuration;
    function loadConfiguration(cls, target, property, parameters) {
        let key = com.JTDecoratorUtils.registerClassAlias(target, property);
        Object.defineProperty(target, property, {
            get: function () {
                let val = this[key];
                if (val === null || val === undefined) {
                    let _class = com.JTDecoratorUtils.bindTemplate(cls, parameters);
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
    com.loadConfiguration = loadConfiguration;
})(com || (com = {}));
