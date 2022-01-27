
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/alisa/JTConfigurationAlisa.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXGFsaXNhXFxKVENvbmZpZ3VyYXRpb25BbGlzYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJQSxJQUFPLEdBQUcsQ0FzRVQ7SUF0RUQsV0FBTyxHQUFHO1FBRVQ7WUFBMEMsd0NBQWtCO1lBTzNELDhCQUFZLEdBQU8sRUFBRSxVQUFjO2dCQUFuQyxZQUVDLGtCQUFNLEdBQUcsQ0FBQyxTQUdWO2dCQVZPLG1CQUFhLEdBQStCLElBQUksQ0FBQztnQkFDakQscUJBQWUsR0FBVSxDQUFDLENBQUM7Z0JBQzNCLGdCQUFVLEdBQVcsS0FBSyxDQUFDO2dCQUMzQixnQkFBVSxHQUFPLElBQUksQ0FBQztnQkFLN0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOztZQUN6QixDQUFDO1lBRU0sc0NBQU8sR0FBZDtnQkFFQyxpQkFBTSxPQUFPLFdBQUUsQ0FBQztZQUNqQixDQUFDO1lBT00sd0NBQVMsR0FBaEI7WUFHQSxDQUFDO1lBRUQsc0JBQVcsMENBQVE7cUJBQW5CO29CQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUNuQjt3QkFDQyxJQUFJLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO3dCQUM5RCxJQUFJLFVBQVUsR0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNoRCxJQUFJLFVBQVUsSUFBSSxZQUFZLENBQUMsWUFBWSxFQUMzQzt5QkFFQzs2QkFDSSxJQUFJLFVBQVUsSUFBSSxZQUFZLENBQUMsWUFBWSxFQUNoRDs0QkFDQyxJQUFJLElBQUksR0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUMxQyxJQUFJLGVBQWUsR0FBOEIsc0JBQXNCLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLENBQUM7NEJBQzVILElBQUksSUFBSSxHQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQzlDLElBQUksSUFBSSxHQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQy9DLFFBQU8sSUFBSSxFQUNYO2dDQUNDLEtBQUssWUFBWSxDQUFDLFlBQVk7b0NBQzlCO3dDQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3Q0FDcEMsTUFBTTtxQ0FDTjtnQ0FDRCxLQUFLLFlBQVksQ0FBQyxZQUFZO29DQUM5Qjt3Q0FDQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0NBQ2pDLE1BQU07cUNBQ047Z0NBQ0QsS0FBSyxZQUFZLENBQUMsU0FBUztvQ0FDM0I7d0NBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUNqQyxNQUFNO3FDQUNOOzZCQUNEO3lCQUNEO3FCQUNEO29CQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDdkIsQ0FBQzs7O2VBQUE7WUFDRiwyQkFBQztRQUFELENBbkVBLEFBbUVDLENBbkV5QyxrQkFBa0IsR0FtRTNEO1FBbkVZLHdCQUFvQix1QkFtRWhDLENBQUE7SUFDRixDQUFDLEVBdEVNLEdBQUcsS0FBSCxHQUFHLFFBc0VUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiSlRDbGFzc0luamVjdEFsaWFzLnRzXCIvPlxyXG4vKlxyXG4qIG5hbWU7XHJcbiovXHJcbm1vZHVsZSBjb20gXHJcbntcclxuXHRleHBvcnQgY2xhc3MgSlRDb25maWd1cmF0aW9uQWxpc2EgZXh0ZW5kcyBKVENsYXNzSW5qZWN0QWxpYXNcclxuXHR7XHJcblx0XHRwcml2YXRlIF9yZWZlcmVuY2VNYXA6e1tjbGFzc05hbWU6c3RyaW5nXTpzdHJpbmd9ID0gbnVsbDtcclxuXHRcdHByaXZhdGUgX3JlZmVyZW5jZUNvdW50Om51bWJlciA9IDA7XHJcblx0XHRwcml2YXRlIF9kZXN0cm95ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cdFx0cHJpdmF0ZSBfcGFyYW1ldGVyOmFueSA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3RydWN0b3IoY2xzOmFueSwgcGFyYW1ldGVyczphbnkpXHJcblx0XHR7XHJcblx0XHRcdHN1cGVyKGNscyk7XHJcblx0XHRcdHRoaXMuX3BhcmFtZXRlciA9IHBhcmFtZXRlcnM7XHJcblx0XHRcdHRoaXMuX3JlZmVyZW5jZU1hcCA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyByZWN5Y2xlKCkgXHJcblx0XHR7XHJcblx0XHRcdHN1cGVyLnJlY3ljbGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOW7uueri+W8leeUqOWFs+ezu1xyXG5cdFx0ICogQHBhcmFtIHRhcmdldCDlvJXnlKjnmoTlr7nosaFcclxuXHRcdCAqIEBwYXJhbSBwcm9wZXJ0eSDlvJXnlKjlr7nosaHlsZ7mgKflkI1cclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIHJlbGV2YW5jZSgpOnZvaWRcclxuXHRcdHtcclxuXHRcdFx0IFxyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBnZXQgaW5zdGFuY2UoKTphbnlcclxuXHRcdHtcclxuXHRcdFx0aWYgKCF0aGlzLl9pbnN0YW5jZSkgXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbG9hZGVyOkpUVGV4dExvYWRlciA9IHRoaXMuX2luc3RhbmNlID0gbmV3IEpUVGV4dExvYWRlcigpO1xyXG5cdFx0XHRcdGxldCBsb2FkZWRUeXBlOnN0cmluZyA9IHRoaXMuX3BhcmFtZXRlcltcInR5cGVcIl07XHJcblx0XHRcdFx0aWYgKGxvYWRlZFR5cGUgPT0gSlRUZXh0TG9hZGVyLkxPQURfREVGQVVMVClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Ly/mmoLmnKrlrp7njrBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAobG9hZGVkVHlwZSA9PSBKVFRleHRMb2FkZXIuTE9BREVEX1BBUlNFKSAvL+W3sue7j+WKoOi9veWujOaIkO+8jOS7heino+aekOaVsOaNrlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBuYW1lOnN0cmluZyA9IHRoaXMuX3BhcmFtZXRlcltcIm5hbWVcIl07XHJcblx0XHRcdFx0XHRsZXQgdGVtcGxhdGVNYW5hZ2VyOkpUQWJzdHJhY3RUZW1wbGF0ZU1hbmFnZXIgPSAgSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5nZXRDb250ZXh0KEpUQXBwbGljYXRpb25Cb290c3RyYXAuQ09OVEVYVF9URU1QTEFURSk7XHJcblx0XHRcdFx0XHRsZXQgZGF0YTphbnkgPSB0ZW1wbGF0ZU1hbmFnZXIuZ2V0VmFsdWUobmFtZSk7XHJcblx0XHRcdFx0XHRsZXQgdHlwZTpzdHJpbmcgPSB0aGlzLl9wYXJhbWV0ZXJbXCJwYXJzZVR5cGVcIl07XHJcblx0XHRcdFx0XHRzd2l0Y2godHlwZSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Y2FzZSBKVFRleHRMb2FkZXIuUEFSU0VfQklOQVJZOlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bG9hZGVyLnBhcnNlQmluYXJ5KGRhdGEsIHRoaXMuX19fYyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y2FzZSBKVFRleHRMb2FkZXIuUEFSU0VfU1RSSU5HOlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bG9hZGVyLnBhcnNlU3RyKGRhdGEsIHRoaXMuX19fYyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y2FzZSBKVFRleHRMb2FkZXIuUEFSU0VfWklQOlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bG9hZGVyLnBhcnNlWmlwKGRhdGEsIHRoaXMuX19fYyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbiJdfQ==