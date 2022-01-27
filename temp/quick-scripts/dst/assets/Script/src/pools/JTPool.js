
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/pools/JTPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3453h2Qf9MLrjvCGWaeLUK', 'JTPool');
// Script/src/pools/JTPool.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTPool = (function () {
            function JTPool(cls) {
                this._cls = null;
                this._list = null;
                this._totalCount = 0;
                this._size = 0;
                this._cls = cls;
                this._list = [];
                this._totalCount = 0;
            }
            JTPool.prototype.get = function () {
                if (this._size > 0) {
                    this._size--;
                    return this._list.shift();
                }
                this._totalCount++;
                return new this._cls();
            };
            JTPool.prototype.put = function (item) {
                if (item && this._list.indexOf(item) == -1) {
                    item.recycle();
                    this._size = this._list.push(item);
                }
            };
            Object.defineProperty(JTPool.prototype, "totalCount", {
                get: function () {
                    return this._totalCount;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTPool.prototype, "size", {
                get: function () {
                    return this._size;
                },
                enumerable: false,
                configurable: true
            });
            JTPool.instance = function (cls) {
                var pool = this._poolMap[cls];
                if (!pool) {
                    pool = this._poolMap[cls] = new JTPool(cls);
                }
                return pool;
            };
            JTPool._poolMap = {};
            return JTPool;
        }());
        com.JTPool = JTPool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHBvb2xzXFxKVFBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0F3RFo7SUF4REQsV0FBVSxHQUFHO1FBRVQ7WUFPSSxnQkFBWSxHQUFPO2dCQUpULFNBQUksR0FBTyxJQUFJLENBQUM7Z0JBQ2hCLFVBQUssR0FBTyxJQUFJLENBQUM7Z0JBQ2pCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO2dCQUN2QixVQUFLLEdBQVUsQ0FBQyxDQUFDO2dCQUd2QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7WUFFTSxvQkFBRyxHQUFWO2dCQUVJLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQ2xCO29CQUNJLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztvQkFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzdCO2dCQUNELElBQUksQ0FBQyxXQUFXLEVBQUcsQ0FBQztnQkFDcEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixDQUFDO1lBRU0sb0JBQUcsR0FBVixVQUFXLElBQU07Z0JBRWIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzFDO29CQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QztZQUNMLENBQUM7WUFFRCxzQkFBVyw4QkFBVTtxQkFBckI7b0JBRUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM1QixDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLHdCQUFJO3FCQUFmO29CQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsQ0FBQzs7O2VBQUE7WUFFYSxlQUFRLEdBQXRCLFVBQXVCLEdBQU87Z0JBRTFCLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQ1Q7b0JBQ0EsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzNDO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFsRGMsZUFBUSxHQUFVLEVBQUUsQ0FBQztZQW1EeEMsYUFBQztTQXJERCxBQXFEQyxJQUFBO1FBckRZLFVBQU0sU0FxRGxCLENBQUE7SUFDTCxDQUFDLEVBeERTLEdBQUcsS0FBSCxHQUFHLFFBd0RaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUUG9vbDxUIGV4dGVuZHMgSlRJUG9vbE9iamVjdD4gaW1wbGVtZW50cyBKVElQb29sXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX3Bvb2xNYXA6T2JqZWN0ID0ge307XHJcbiAgICAgICAgcHJvdGVjdGVkIF9jbHM6YW55ID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX2xpc3Q6VFtdID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX3RvdGFsQ291bnQ6bnVtYmVyID0gMDtcclxuICAgICAgICBwcm90ZWN0ZWQgX3NpemU6bnVtYmVyID0gMDtcclxuICAgICAgICBjb25zdHJ1Y3RvcihjbHM6YW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xzID0gY2xzO1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsQ291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCgpOlRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaXplID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSAtLTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdG90YWxDb3VudCArKztcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLl9jbHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBwdXQoaXRlbTpUKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiB0aGlzLl9saXN0LmluZGV4T2YoaXRlbSkgPT0gLTEpICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucmVjeWNsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHRoaXMuX2xpc3QucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB0b3RhbENvdW50KCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG90YWxDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgc2l6ZSgpOm51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlKGNsczphbnkpOkpUSVBvb2wgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcG9vbDpKVElQb29sID0gdGhpcy5fcG9vbE1hcFtjbHNdO1xyXG4gICAgICAgICAgICBpZiAoIXBvb2wpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgcG9vbCA9IHRoaXMuX3Bvb2xNYXBbY2xzXSA9IG5ldyBKVFBvb2woY2xzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcG9vbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=