
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/alisa/JTSingletonPoolAlisa.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXGFsaXNhXFxKVFNpbmdsZXRvblBvb2xBbGlzYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHQSxJQUFPLEdBQUcsQ0FtRFQ7SUFuREQsV0FBTyxHQUFHO1FBRVQ7WUFBMEMsd0NBQWtCO1lBTzNELDhCQUFZLEdBQU8sRUFBRSxPQUFXLEVBQUUsVUFBZTtnQkFBakQsWUFFQyxrQkFBTSxHQUFHLENBQUMsU0FJVjtnQkFYTyxtQkFBYSxHQUErQixJQUFJLENBQUM7Z0JBQ2pELHFCQUFlLEdBQVUsQ0FBQyxDQUFDO2dCQUMzQixpQkFBVyxHQUFPLEtBQUssQ0FBQztnQkFDeEIsY0FBUSxHQUFPLElBQUksQ0FBQztnQkFLM0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7WUFDL0IsQ0FBQztZQUVNLHNDQUFPLEdBQWQ7Z0JBRUMsaUJBQU0sT0FBTyxXQUFFLENBQUM7WUFDakIsQ0FBQztZQWlCTSx3Q0FBUyxHQUFoQjtZQUdBLENBQUM7WUFFRCxzQkFBVywwQ0FBUTtxQkFBbkI7b0JBRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ25CO3dCQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ3JFO29CQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDdkIsQ0FBQzs7O2VBQUE7WUFDRiwyQkFBQztRQUFELENBaERBLEFBZ0RDLENBaER5QyxrQkFBa0IsR0FnRDNEO1FBaERZLHdCQUFvQix1QkFnRGhDLENBQUE7SUFDRixDQUFDLEVBbkRNLEdBQUcsS0FBSCxHQUFHLFFBbURUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKiBuYW1lO1xyXG4qL1xyXG5tb2R1bGUgY29tIFxyXG57XHJcblx0ZXhwb3J0IGNsYXNzIEpUU2luZ2xldG9uUG9vbEFsaWFzIGV4dGVuZHMgSlRDbGFzc0luamVjdEFsaWFzXHJcblx0e1xyXG5cdFx0cHJpdmF0ZSBfcmVmZXJlbmNlTWFwOntbY2xhc3NOYW1lOnN0cmluZ106c3RyaW5nfSA9IG51bGw7XHJcblx0XHRwcml2YXRlIF9yZWZlcmVuY2VDb3VudDpudW1iZXIgPSAwO1xyXG5cdFx0cHJpdmF0ZSBfcGFyYW1ldGVyczphbnkgPSBmYWxzZTtcclxuXHRcdHByaXZhdGUgX2l0ZW1DbHM6YW55ID0gbnVsbDtcclxuXHJcblx0XHRjb25zdHJ1Y3RvcihjbHM6YW55LCBpdGVtQ2xzOmFueSwgcGFyYW1ldGVycz86YW55KVxyXG5cdFx0e1xyXG5cdFx0XHRzdXBlcihjbHMpO1xyXG5cdFx0XHR0aGlzLl9pdGVtQ2xzID0gaXRlbUNscztcclxuXHRcdFx0dGhpcy5fcmVmZXJlbmNlTWFwID0ge307XHJcblx0XHRcdHRoaXMuX3BhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyByZWN5Y2xlKCkgXHJcblx0XHR7XHJcblx0XHRcdHN1cGVyLnJlY3ljbGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwdWJsaWMgYmluZCh0YXJnZXQ6YW55LCBwcm9wZXJ0eTpzdHJpbmcpOnZvaWRcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0bGV0IF9fQ2xhc3NOYW1lOnN0cmluZyA9IHRhcmdldFtKVFNpbmdsZXRvbkNsYXNzLkNMQVNTX05BTUVdO1xyXG5cdFx0Ly8gXHRpZiAoIV9fQ2xhc3NOYW1lKSB0YXJnZXRbSlRTaW5nbGV0b25DbGFzcy5DTEFTU19OQU1FXSA9IHRhcmdldC5uYW1lO1xyXG5cdFx0Ly8gXHRpZiAoIXRoaXMuX3JlZmVyZW5jZU1hcFtfX0NsYXNzTmFtZV0pXHJcblx0XHQvLyBcdHtcclxuXHRcdC8vIFx0XHR0aGlzLl9yZWZlcmVuY2VNYXBbX19DbGFzc05hbWVdID0gcHJvcGVydHk7XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOW7uueri+W8leeUqOWFs+ezu1xyXG5cdFx0ICogQHBhcmFtIHRhcmdldCDlvJXnlKjnmoTlr7nosaFcclxuXHRcdCAqIEBwYXJhbSBwcm9wZXJ0eSDlvJXnlKjlr7nosaHlsZ7mgKflkI1cclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIHJlbGV2YW5jZSgpOnZvaWRcclxuXHRcdHtcclxuXHRcdFx0IFxyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBnZXQgaW5zdGFuY2UoKTphbnlcclxuXHRcdHtcclxuXHRcdFx0aWYgKCF0aGlzLl9pbnN0YW5jZSkgXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9pbnN0YW5jZSA9IHRoaXMuX19fYy5pbnN0YW5jZSh0aGlzLl9pdGVtQ2xzLCB0aGlzLl9wYXJhbWV0ZXJzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19