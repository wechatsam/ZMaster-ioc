"use strict";
cc._RF.push(module, '86a51tLKZZAYp3KCk96ePMz', 'JTSingletonPoolAlisa');
// Script/src/decorators/injects/alisa/JTSingletonPoolAlisa.ts

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTSingletonPoolAlias = (function (_super) {
            __extends(JTSingletonPoolAlias, _super);
            function JTSingletonPoolAlias(cls, itemCls, parameters) {
                var _this = _super.call(this, cls) || this;
                _this._referenceMap = null;
                _this._referenceCount = 0;
                _this._parameters = false;
                _this._itemCls = null;
                _this._itemCls = itemCls;
                _this._referenceMap = {};
                _this._parameters = parameters;
                return _this;
            }
            JTSingletonPoolAlias.prototype.recycle = function () {
                _super.prototype.recycle.call(this);
            };
            JTSingletonPoolAlias.prototype.relevance = function () {
            };
            Object.defineProperty(JTSingletonPoolAlias.prototype, "instance", {
                get: function () {
                    if (!this._instance) {
                        this._instance = this.___c.instance(this._itemCls, this._parameters);
                    }
                    return this._instance;
                },
                enumerable: false,
                configurable: true
            });
            return JTSingletonPoolAlias;
        }(JTClassInjectAlias));
        com.JTSingletonPoolAlias = JTSingletonPoolAlias;
    })(com || (com = {}));
});

cc._RF.pop();