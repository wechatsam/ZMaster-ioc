"use strict";
cc._RF.push(module, '8d826Tqp8pCHqT4w9jKhGtK', 'JTConfigurationAlisa');
// Script/src/decorators/injects/alisa/JTConfigurationAlisa.ts

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
        var JTConfigurationAlisa = (function (_super) {
            __extends(JTConfigurationAlisa, _super);
            function JTConfigurationAlisa(cls, parameters) {
                var _this = _super.call(this, cls) || this;
                _this._referenceMap = null;
                _this._referenceCount = 0;
                _this._destroyed = false;
                _this._parameter = null;
                _this._parameter = parameters;
                _this._referenceMap = {};
                return _this;
            }
            JTConfigurationAlisa.prototype.recycle = function () {
                _super.prototype.recycle.call(this);
            };
            JTConfigurationAlisa.prototype.relevance = function () {
            };
            Object.defineProperty(JTConfigurationAlisa.prototype, "instance", {
                get: function () {
                    if (!this._instance) {
                        var loader = this._instance = new JTTextLoader();
                        var loadedType = this._parameter["type"];
                        if (loadedType == JTTextLoader.LOAD_DEFAULT) {
                        }
                        else if (loadedType == JTTextLoader.LOADED_PARSE) {
                            var name = this._parameter["name"];
                            var templateManager = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_TEMPLATE);
                            var data = templateManager.getValue(name);
                            var type = this._parameter["parseType"];
                            switch (type) {
                                case JTTextLoader.PARSE_BINARY:
                                    {
                                        loader.parseBinary(data, this.___c);
                                        break;
                                    }
                                case JTTextLoader.PARSE_STRING:
                                    {
                                        loader.parseStr(data, this.___c);
                                        break;
                                    }
                                case JTTextLoader.PARSE_ZIP:
                                    {
                                        loader.parseZip(data, this.___c);
                                        break;
                                    }
                            }
                        }
                    }
                    return this._instance;
                },
                enumerable: false,
                configurable: true
            });
            return JTConfigurationAlisa;
        }(JTClassInjectAlias));
        com.JTConfigurationAlisa = JTConfigurationAlisa;
    })(com || (com = {}));
});

cc._RF.pop();