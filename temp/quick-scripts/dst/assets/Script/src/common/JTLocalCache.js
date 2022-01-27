
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/common/JTLocalCache.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7361dQwkhNFKYLk1gY0KNuG', 'JTLocalCache');
// Script/src/common/JTLocalCache.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTLocalCache = (function () {
            function JTLocalCache(name) {
                this._dataMap = null;
                this._name = null;
                JTLocalCache.localCache = window.localStorage;
                this.name = name;
            }
            Object.defineProperty(JTLocalCache.prototype, "name", {
                set: function (value) {
                    this._name = value;
                    if (JTLocalCache.localCache[value]) {
                        this._dataMap = JSON.parse(JTLocalCache.localCache[value]);
                    }
                    else {
                        this._dataMap = {};
                        this.update();
                    }
                },
                enumerable: false,
                configurable: true
            });
            JTLocalCache.prototype.setObject = function (key, data) {
                this._dataMap[key] = data;
                this.update();
            };
            JTLocalCache.prototype.getObject = function (key) {
                return this._dataMap[key];
            };
            JTLocalCache.prototype.hasKey = function (key) {
                return key in this._dataMap;
            };
            JTLocalCache.prototype.delete = function (key) {
                this._dataMap[key] = null;
                delete this._dataMap[key];
                this.update();
            };
            JTLocalCache.prototype.update = function () {
                JTLocalCache.localCache.setItem(this._name, JSON.stringify(this._dataMap));
            };
            JTLocalCache.prototype.clean = function () {
                this._dataMap = {};
                this.update();
            };
            JTLocalCache.prototype.recycle = function () {
                this.clean();
                this._name = null;
            };
            Object.defineProperty(JTLocalCache.prototype, "dataMap", {
                get: function () {
                    return this._dataMap;
                },
                enumerable: false,
                configurable: true
            });
            JTLocalCache.localCache = null;
            return JTLocalCache;
        }());
        com.JTLocalCache = JTLocalCache;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvbW1vblxcSlRMb2NhbENhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBNEVaO0lBNUVELFdBQVUsR0FBRztRQUVUO1lBUUksc0JBQVksSUFBVztnQkFOZixhQUFRLEdBQVUsSUFBSSxDQUFDO2dCQUN2QixVQUFLLEdBQVUsSUFBSSxDQUFDO2dCQU94QixZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLENBQUM7WUFFRCxzQkFBVyw4QkFBSTtxQkFBZixVQUFnQixLQUFZO29CQUV4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUNsQzt3QkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUM5RDt5QkFFRDt3QkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3FCQUNqQjtnQkFFTCxDQUFDOzs7ZUFBQTtZQUVNLGdDQUFTLEdBQWhCLFVBQWlCLEdBQVUsRUFBRSxJQUFRO2dCQUVqQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFFTSxnQ0FBUyxHQUFoQixVQUFpQixHQUFVO2dCQUV2QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUVNLDZCQUFNLEdBQWIsVUFBYyxHQUFVO2dCQUVwQixPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hDLENBQUM7WUFFTSw2QkFBTSxHQUFiLFVBQWMsR0FBVTtnQkFFcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFFTyw2QkFBTSxHQUFkO2dCQUVJLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvRSxDQUFDO1lBRU0sNEJBQUssR0FBWjtnQkFFSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFFTSw4QkFBTyxHQUFkO2dCQUVJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN0QixDQUFDO1lBRUQsc0JBQVcsaUNBQU87cUJBQWxCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekIsQ0FBQzs7O2VBQUE7WUFwRWMsdUJBQVUsR0FBVyxJQUFJLENBQUM7WUFxRTdDLG1CQUFDO1NBekVELEFBeUVDLElBQUE7UUF6RVksZ0JBQVksZUF5RXhCLENBQUE7SUFDTCxDQUFDLEVBNUVTLEdBQUcsS0FBSCxHQUFHLFFBNEVaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUTG9jYWxDYWNoZSBpbXBsZW1lbnRzIEpUSVBvb2xPYmplY3RcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIF9kYXRhTWFwOk9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBfbmFtZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGxvY2FsQ2FjaGU6U3RvcmFnZSA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YCa6L+H5ZCN5a2X5p2l6I635Y+W5pys5Zyw57yT5a2Y5a+56LGh44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBKVExvY2FsQ2FjaGUubG9jYWxDYWNoZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6c3RyaW5nKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoSlRMb2NhbENhY2hlLmxvY2FsQ2FjaGVbdmFsdWVdKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhTWFwID0gSlNPTi5wYXJzZShKVExvY2FsQ2FjaGUubG9jYWxDYWNoZVt2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YU1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXRPYmplY3Qoa2V5OnN0cmluZywgZGF0YTphbnkpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFNYXBba2V5XSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0T2JqZWN0KGtleTpzdHJpbmcpOmFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFNYXBba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBoYXNLZXkoa2V5OnN0cmluZyk6Ym9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleSBpbiB0aGlzLl9kYXRhTWFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRlbGV0ZShrZXk6c3RyaW5nKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTWFwW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZGF0YU1hcCBba2V5XTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdXBkYXRlKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSlRMb2NhbENhY2hlLmxvY2FsQ2FjaGUuc2V0SXRlbSh0aGlzLl9uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhTWFwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgY2xlYW4oKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhTWFwID0ge307XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVjeWNsZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGRhdGFNYXAoKTpPYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhTWFwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==