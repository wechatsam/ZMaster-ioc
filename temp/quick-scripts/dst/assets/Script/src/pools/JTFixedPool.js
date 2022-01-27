
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/pools/JTFixedPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b71bIKC6NPF6i4vBPXhYNl', 'JTFixedPool');
// Script/src/pools/JTFixedPool.ts

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
        var JTFixedPool = (function (_super) {
            __extends(JTFixedPool, _super);
            function JTFixedPool(cls, fixedCount) {
                if (fixedCount === void 0) { fixedCount = 100; }
                var _this = _super.call(this, cls) || this;
                _this._fixedCount = 0;
                _this.fixedCount = fixedCount;
                return _this;
            }
            Object.defineProperty(JTFixedPool.prototype, "fixedCount", {
                set: function (value) {
                    this._size = this._fixedCount = value;
                    this.create();
                },
                enumerable: false,
                configurable: true
            });
            JTFixedPool.prototype.create = function () {
                var list = this._list;
                var count = 0;
                var lines = [];
                while (list.length) {
                    var item = list.shift();
                    if (this._fixedCount > count) {
                        lines.push(item);
                        count++;
                    }
                    else
                        item = null;
                }
                if (this._fixedCount > count) {
                    var leng = this._fixedCount - count;
                    var cls = this._cls;
                    list = list.concat(lines);
                    for (var i = 0; i < leng; i++) {
                        var item = new cls();
                        list.push(item);
                    }
                }
                this._size = list.length;
            };
            JTFixedPool.prototype.get = function () {
                if (this._size > 0) {
                    this._size--;
                    return this._list.shift();
                }
                this.create();
                return this.get();
            };
            Object.defineProperty(JTFixedPool.prototype, "fullPool", {
                get: function () {
                    return this._fixedCount == this._size;
                },
                enumerable: false,
                configurable: true
            });
            JTFixedPool.instance = function (cls, fixedCount) {
                if (fixedCount === void 0) { fixedCount = 100; }
                var pool = this._fixedPoolMap[cls];
                if (!pool) {
                    pool = this._fixedPoolMap[cls] = new JTFixedPool(cls, fixedCount);
                }
                return pool;
            };
            JTFixedPool._fixedPoolMap = {};
            return JTFixedPool;
        }(JTCachePool));
        com.JTFixedPool = JTFixedPool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHBvb2xzXFxKVEZpeGVkUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJQyxJQUFVLEdBQUcsQ0E2RVo7SUE3RUQsV0FBVSxHQUFHO1FBRVY7WUFBMEQsK0JBQWM7WUFJcEUscUJBQVksR0FBTyxFQUFFLFVBQXVCO2dCQUF2QiwyQkFBQSxFQUFBLGdCQUF1QjtnQkFBNUMsWUFFSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtnQkFOTyxpQkFBVyxHQUFVLENBQUMsQ0FBQztnQkFLM0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7O1lBQ2pDLENBQUM7WUFFRCxzQkFBVyxtQ0FBVTtxQkFBckIsVUFBc0IsS0FBWTtvQkFFOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNsQixDQUFDOzs7ZUFBQTtZQUVTLDRCQUFNLEdBQWhCO2dCQUVJLElBQUksSUFBSSxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLElBQUksS0FBSyxHQUFVLENBQUMsQ0FBQztnQkFDckIsSUFBSSxLQUFLLEdBQU8sRUFBRSxDQUFDO2dCQUNuQixPQUFNLElBQUksQ0FBQyxNQUFNLEVBQ2pCO29CQUNJLElBQUksSUFBSSxHQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssRUFDNUI7d0JBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDakIsS0FBSyxFQUFHLENBQUM7cUJBQ1o7O3dCQUNJLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2dCQUNELElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQzVCO29CQUNJLElBQUksSUFBSSxHQUFVLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUMzQyxJQUFJLEdBQUcsR0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDekIsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFDcEM7d0JBQ0ksSUFBSSxJQUFJLEdBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDbkI7aUJBQ0o7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzdCLENBQUM7WUFFTSx5QkFBRyxHQUFWO2dCQUVJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ2xCO29CQUNJLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztvQkFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzdCO2dCQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixDQUFDO1lBTUQsc0JBQVcsaUNBQVE7cUJBQW5CO29CQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxDQUFDOzs7ZUFBQTtZQUVhLG9CQUFRLEdBQXRCLFVBQXVCLEdBQU8sRUFBRSxVQUF1QjtnQkFBdkIsMkJBQUEsRUFBQSxnQkFBdUI7Z0JBRW5ELElBQUksSUFBSSxHQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsSUFBSSxFQUNUO29CQUNJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDckU7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQXRFZ0IseUJBQWEsR0FBVSxFQUFFLENBQUM7WUF1RS9DLGtCQUFDO1NBMUVELEFBMEVDLENBMUV5RCxXQUFXLEdBMEVwRTtRQTFFWSxlQUFXLGNBMEV2QixDQUFBO0lBQ0osQ0FBQyxFQTdFUyxHQUFHLEtBQUgsR0FBRyxRQTZFWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIkpUUG9vbC50c1wiLz5cclxuLyoqXHJcbiAqIFxyXG4gKi9cclxuIG5hbWVzcGFjZSBjb20gXHJcbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgSlRGaXhlZFBvb2w8VCBleHRlbmRzIEpUSVBvb2xPYmplY3Q+IGV4dGVuZHMgSlRDYWNoZVBvb2w8VD5cclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIF9maXhlZENvdW50Om51bWJlciA9IDA7XHJcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpYyBfZml4ZWRQb29sTWFwOk9iamVjdCA9IHt9O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNsczphbnksIGZpeGVkQ291bnQ6bnVtYmVyID0gMTAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoY2xzKTtcclxuICAgICAgICAgICAgdGhpcy5maXhlZENvdW50ID0gZml4ZWRDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXQgZml4ZWRDb3VudCh2YWx1ZTpudW1iZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdGhpcy5fZml4ZWRDb3VudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0OlRbXSA9IHRoaXMuX2xpc3Q7XHJcbiAgICAgICAgICAgIHZhciBjb3VudDpudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGluZXM6VFtdID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlKGxpc3QubGVuZ3RoKS8v5qOA5p+l5Lul5YmN55qE5rGg5a+56LGh5bm26YeN5paw5pS+5YWl5Li05pe25a+55YiX6YeMXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtOlQgPSBsaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZml4ZWRDb3VudCA+IGNvdW50KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQgKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9maXhlZENvdW50ID4gY291bnQpLy/kuozmrKHliKTmlq3lvZPliY3msaDph4znmoTlr7nosaHmmK/lkKbmu6HotrPpooTorr7nmoTkuKrmlbBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlbmc6bnVtYmVyID0gdGhpcy5fZml4ZWRDb3VudCAtIGNvdW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIGNsczphbnkgPSB0aGlzLl9jbHM7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gbGlzdC5jb25jYXQobGluZXMpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBsZW5nOyBpKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW06VCA9IG5ldyBjbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IGxpc3QubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCgpOlRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaXplID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSAtLTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqKlxyXG4gICAgICAgICAqIOajgOafpeaxoOaYr+WQpua7oeS6hu+8jOWmguaenOa7oeS6hu+8jOWvueixoeaxoOWImeS4jeS8muWIm+W7uuWvueixoeOAglxyXG4gICAgICAgICAqICovXHJcbiAgICAgICAgcHVibGljIGdldCBmdWxsUG9vbCgpOmJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maXhlZENvdW50ID09IHRoaXMuX3NpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKGNsczphbnksIGZpeGVkQ291bnQ6bnVtYmVyID0gMTAwKTpKVElGaXhlZFBvb2wgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcG9vbDpKVElGaXhlZFBvb2wgPSB0aGlzLl9maXhlZFBvb2xNYXBbY2xzXTtcclxuICAgICAgICAgICAgaWYgKCFwb29sKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwb29sID0gdGhpcy5fZml4ZWRQb29sTWFwW2Nsc10gPSBuZXcgSlRGaXhlZFBvb2woY2xzLCBmaXhlZENvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcG9vbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiB9XHJcbiJdfQ==