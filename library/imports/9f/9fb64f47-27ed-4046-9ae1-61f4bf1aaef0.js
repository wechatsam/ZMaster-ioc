"use strict";
cc._RF.push(module, '9fb649HJ+1ARprhYfS/Gq7w', 'JTClassInjectAlias');
// Script/src/decorators/injects/alisa/JTClassInjectAlias.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTClassInjectAlias = (function () {
            function JTClassInjectAlias(cls) {
                this.___c = null;
                this._instance = null;
                this.___c = cls;
            }
            JTClassInjectAlias.prototype.recycle = function () {
                this._instance = this.___c = null;
            };
            Object.defineProperty(JTClassInjectAlias.prototype, "instance", {
                get: function () {
                    if (!this._instance) {
                        this._instance = new this.___c();
                    }
                    return this._instance;
                },
                enumerable: false,
                configurable: true
            });
            JTClassInjectAlias.CLASS_NAME = "__ClassName";
            return JTClassInjectAlias;
        }());
        com.JTClassInjectAlias = JTClassInjectAlias;
    })(com || (com = {}));
});

cc._RF.pop();