
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/datas/mappers/JTClassMapper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45c61Aa0oNPKaTB9waX+bKU', 'JTClassMapper');
// Script/src/datas/mappers/JTClassMapper.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTClassMapper = (function () {
            function JTClassMapper(_class, createFromPool) {
                if (createFromPool === void 0) { createFromPool = false; }
                this.__class = null;
                this._createFromPool = false;
                this._dataFormat = null;
                this._pool = null;
                this.__class = _class;
                this._createFromPool = createFromPool;
            }
            Object.defineProperty(JTClassMapper.prototype, "createFromPool", {
                get: function () {
                    return this._createFromPool;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTClassMapper.prototype, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTCachePool.instance(this.__class);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTClassMapper.prototype.create = function () {
                var item = null;
                if (this._createFromPool)
                    item = this.pool.get();
                else {
                    item = new this.__class();
                }
                return item;
            };
            return JTClassMapper;
        }());
        com.JTClassMapper = JTClassMapper;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRhdGFzXFxtYXBwZXJzXFxKVENsYXNzTWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBb0RaO0lBcERELFdBQVUsR0FBRztRQUVUO1lBbUJJLHVCQUFZLE1BQVUsRUFBRSxjQUE4QjtnQkFBOUIsK0JBQUEsRUFBQSxzQkFBOEI7Z0JBakI1QyxZQUFPLEdBQU8sSUFBSSxDQUFDO2dCQUluQixvQkFBZSxHQUFXLEtBQUssQ0FBQztnQkFTaEMsZ0JBQVcsR0FBVSxJQUFJLENBQUM7Z0JBRzFCLFVBQUssR0FBVyxJQUFJLENBQUM7Z0JBR3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztZQUM3QyxDQUFDO1lBRUQsc0JBQVcseUNBQWM7cUJBQXpCO29CQUVJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztnQkFDaEMsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBVywrQkFBSTtxQkFBZjtvQkFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDZjt3QkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNuRDtvQkFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7OztlQUFBO1lBRU0sOEJBQU0sR0FBYjtnQkFFSSxJQUFJLElBQUksR0FBYSxJQUFJLENBQUM7Z0JBQzFCLElBQUksSUFBSSxDQUFDLGVBQWU7b0JBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFlLENBQUM7cUJBRTdEO29CQUNJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDN0I7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNMLG9CQUFDO1FBQUQsQ0FqREEsQUFpREMsSUFBQTtRQWpEWSxpQkFBYSxnQkFpRHpCLENBQUE7SUFDTCxDQUFDLEVBcERTLEdBQUcsS0FBSCxHQUFHLFFBb0RaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUQ2xhc3NNYXBwZXJcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgX19jbGFzczphbnkgPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYr+WQpueUseWvueixoeaxoOWIm+W7uiAtLS1mYWxzZeS4um5ldyxcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgX2NyZWF0ZUZyb21Qb29sOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6L+Z5Liq6K6+6K6h5ZKM6YCa5L+h55qE6Kej56CBZGVjb2RlcuOAgee8lueggWVuY29kZXLmnInkupvph43lpI1cclxuICAgICAgICAgKiDmlbDmja7nsbvlnosgLS0g5a+56LGhXHJcbiAgICAgICAgICogICAgICAgICAgICDluo/liJfljJblr7nosaFcclxuICAgICAgICAgKiAgICAgICAgICAgIOWtl+espuS4slxyXG4gICAgICAgICAqICAgICAgICAgICAg5LqM6L+b5Yi25rWBXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIF9kYXRhRm9ybWF0OnN0cmluZyA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX3Bvb2w6SlRJUG9vbCA9IG51bGw7XHJcbiAgICAgICAgY29uc3RydWN0b3IoX2NsYXNzOmFueSwgY3JlYXRlRnJvbVBvb2w6Ym9vbGVhbiA9IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgdGhpcy5fX2NsYXNzID0gX2NsYXNzO1xyXG4gICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVGcm9tUG9vbCA9IGNyZWF0ZUZyb21Qb29sO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBjcmVhdGVGcm9tUG9vbCgpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVGcm9tUG9vbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgcG9vbCgpOkpUSVBvb2xcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fcG9vbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9vbCA9IEpUQ2FjaGVQb29sLmluc3RhbmNlKHRoaXMuX19jbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2w7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY3JlYXRlKCk6SlRJTWFwcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTpKVElNYXBwZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3JlYXRlRnJvbVBvb2wpaXRlbSA9IHRoaXMucG9vbC5nZXQoKSBhcyBKVElNYXBwZXI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IG5ldyB0aGlzLl9fY2xhc3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19