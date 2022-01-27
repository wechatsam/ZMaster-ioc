"use strict";
cc._RF.push(module, 'fba1d9AVddJg69t0oO++ZFs', 'JTSingletonClassAlisa');
// Script/src/decorators/injects/alisa/JTSingletonClassAlisa.ts

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
        var JTSingletonClassAlias = (function (_super) {
            __extends(JTSingletonClassAlias, _super);
            function JTSingletonClassAlias(cls, destroyed) {
                if (destroyed === void 0) { destroyed = false; }
                var _this = _super.call(this, cls) || this;
                _this._referenceMap = null;
                _this._referenceCount = 0;
                _this._destroyed = false;
                _this._destroyed = destroyed;
                _this._referenceMap = {};
                return _this;
            }
            JTSingletonClassAlias.prototype.recycle = function () {
                _super.prototype.recycle.call(this);
            };
            JTSingletonClassAlias.prototype.relevance = function () {
            };
            Object.defineProperty(JTSingletonClassAlias.prototype, "instance", {
                get: function () {
                    if (!this._instance) {
                        this._instance = new this.___c();
                    }
                    return this._instance;
                },
                enumerable: false,
                configurable: true
            });
            return JTSingletonClassAlias;
        }(JTClassInjectAlias));
        com.JTSingletonClassAlias = JTSingletonClassAlias;
    })(com || (com = {}));
});

cc._RF.pop();