"use strict";
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