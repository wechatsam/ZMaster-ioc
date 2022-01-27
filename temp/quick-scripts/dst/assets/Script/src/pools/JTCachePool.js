
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/pools/JTCachePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33700Gj8GFMgKmU5bPf9qMm', 'JTCachePool');
// Script/src/pools/JTCachePool.ts

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
        var JTCachePool = (function (_super) {
            __extends(JTCachePool, _super);
            function JTCachePool(cls) {
                var _this = _super.call(this, cls) || this;
                _this._references = null;
                _this._references = [];
                return _this;
            }
            JTCachePool.prototype.get = function () {
                if (this._size > 0) {
                    this._size--;
                    return this._list.shift();
                }
                this._totalCount++;
                var item = new this._cls();
                this._references.push(item);
                return item;
            };
            JTCachePool.prototype.recycles = function (items) {
                if (!items) {
                    items = [].concat(this._references);
                }
                while (items.length) {
                    this.put(items.shift());
                }
            };
            JTCachePool.instance = function (cls) {
                var pool = this._cachePoolMap[cls];
                if (!pool) {
                    pool = this._cachePoolMap[cls] = new JTCachePool(cls);
                }
                return pool;
            };
            JTCachePool._cachePoolMap = {};
            return JTCachePool;
        }(JTPool));
        com.JTCachePool = JTCachePool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHBvb2xzXFxKVENhY2hlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJQSxJQUFVLEdBQUcsQ0ErQ1o7SUEvQ0QsV0FBVSxHQUFHO1FBRVQ7WUFBMEQsK0JBQVM7WUFJL0QscUJBQVksR0FBTztnQkFBbkIsWUFFSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtnQkFMUyxpQkFBVyxHQUFPLElBQUksQ0FBQztnQkFJN0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7O1lBQzFCLENBQUM7WUFFTSx5QkFBRyxHQUFWO2dCQUVJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ2xCO29CQUNJLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztvQkFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzdCO2dCQUNELElBQUksQ0FBQyxXQUFXLEVBQUcsQ0FBQztnQkFDcEIsSUFBSSxJQUFJLEdBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBRU0sOEJBQVEsR0FBZixVQUFnQixLQUFVO2dCQUVwQixJQUFJLENBQUMsS0FBSyxFQUNWO29CQUNNLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsT0FBTSxLQUFLLENBQUMsTUFBTSxFQUNsQjtvQkFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO2lCQUMxQjtZQUNQLENBQUM7WUFFYSxvQkFBUSxHQUF0QixVQUF1QixHQUFPO2dCQUUxQixJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLElBQUksRUFDVDtvQkFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekQ7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQXpDZ0IseUJBQWEsR0FBVSxFQUFFLENBQUM7WUEwQy9DLGtCQUFDO1NBNUNELEFBNENDLENBNUN5RCxNQUFNLEdBNEMvRDtRQTVDWSxlQUFXLGNBNEN2QixDQUFBO0lBQ0wsQ0FBQyxFQS9DUyxHQUFHLEtBQUgsR0FBRyxRQStDWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIkpUUG9vbC50c1wiLz5cclxuLypcclxuKiDmlK/mjIHoh6rliqjlsIblr7nosaHlhajpg6jlm57mlLbliLDlr7nosaHmsaDph4w7XHJcbiovXHJcbm5hbWVzcGFjZSBjb21cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUQ2FjaGVQb29sPFQgZXh0ZW5kcyBKVElQb29sT2JqZWN0PiBleHRlbmRzIEpUUG9vbDxUPlxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBzdGF0aWMgX2NhY2hlUG9vbE1hcDpPYmplY3QgPSB7fTtcclxuICAgICAgICBwcm90ZWN0ZWQgX3JlZmVyZW5jZXM6VFtdID0gbnVsbDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihjbHM6YW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoY2xzKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBnZXQoKTpUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2l6ZSA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgLS07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsQ291bnQgKys7XHJcbiAgICAgICAgICAgIHZhciBpdGVtOlQgPSBuZXcgdGhpcy5fY2xzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVjeWNsZXMoaXRlbXM/OlRbXSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICBpZiAoIWl0ZW1zKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IFtdLmNvbmNhdCh0aGlzLl9yZWZlcmVuY2VzKTsgLy/mtYXlpI3liLZcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgd2hpbGUoaXRlbXMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wdXQoaXRlbXMuc2hpZnQoKSkvL+avj+S4gOS4quWvueixoeW/hemhu+iwg+eUqHJlY3ljbGUoKeaWueazlVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoY2xzOmFueSk6SlRJQ2FjaGVQb29sIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBvb2w6SlRJQ2FjaGVQb29sID0gdGhpcy5fY2FjaGVQb29sTWFwW2Nsc107XHJcbiAgICAgICAgICAgIGlmICghcG9vbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcG9vbCA9IHRoaXMuX2NhY2hlUG9vbE1hcFtjbHNdID0gbmV3IEpUQ2FjaGVQb29sKGNscyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBvb2w7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==