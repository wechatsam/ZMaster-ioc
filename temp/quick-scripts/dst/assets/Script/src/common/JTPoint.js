
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/common/JTPoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6f550enwBEUZx9vaXJmPqF', 'JTPoint');
// Script/src/common/JTPoint.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTPoint = (function () {
            function JTPoint(x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                this.x = x;
                this.y = y;
            }
            JTPoint.prototype.recycle = function () {
                this.x = this.y = 0;
                return this;
            };
            Object.defineProperty(JTPoint, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTPoint);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTPoint.create = function () {
                return this.pool.get();
            };
            JTPoint.put = function (point) {
                this.pool.put(point);
            };
            JTPoint.prototype.setTo = function (x, y) {
                this.x = x;
                this.y = y;
                return this;
            };
            JTPoint.prototype.distance = function (x, y) {
                return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
            };
            JTPoint.prototype.toString = function () {
                return this.x + "," + this.y;
            };
            JTPoint.prototype.normalize = function () {
                var d = Math.sqrt(this.x * this.x + this.y * this.y);
                if (d > 0) {
                    var id = 1.0 / d;
                    this.x *= id;
                    this.y *= id;
                }
            };
            JTPoint.prototype.copy = function (point) {
                return this.setTo(point.x, point.y);
            };
            JTPoint.TEMP = new JTPoint();
            JTPoint.EMPTY = new JTPoint();
            JTPoint._pool = null;
            return JTPoint;
        }());
        com.JTPoint = JTPoint;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvbW1vblxcSlRQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLElBQVUsR0FBRyxDQWtHWjtJQWxHRCxXQUFVLEdBQUc7UUFLVDtZQWlCSSxpQkFBWSxDQUFhLEVBQUUsQ0FBYTtnQkFBNUIsa0JBQUEsRUFBQSxLQUFhO2dCQUFFLGtCQUFBLEVBQUEsS0FBYTtnQkFDcEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDO1lBQ0QseUJBQU8sR0FBUDtnQkFDSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBRUQsc0JBQWtCLGVBQUk7cUJBQXRCO29CQUVJLElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNkO3dCQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDekM7b0JBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN0QixDQUFDOzs7ZUFBQTtZQUdhLGNBQU0sR0FBcEI7Z0JBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBYSxDQUFDO1lBQ3RDLENBQUM7WUFFYSxXQUFHLEdBQWpCLFVBQWtCLEtBQWE7Z0JBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQXNCLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBUUQsdUJBQUssR0FBTCxVQUFNLENBQVMsRUFBRSxDQUFTO2dCQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDWCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBUUQsMEJBQVEsR0FBUixVQUFTLENBQVMsRUFBRSxDQUFTO2dCQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsQ0FBQztZQUdELDBCQUFRLEdBQVI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7WUFLRCwyQkFBUyxHQUFUO2dCQUNJLElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLEdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2IsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2hCO1lBQ0wsQ0FBQztZQU1ELHNCQUFJLEdBQUosVUFBSyxLQUFjO2dCQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBeEZNLFlBQUksR0FBWSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBRTlCLGFBQUssR0FBWSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBNkJ2QixhQUFLLEdBQVcsSUFBSSxDQUFDO1lBMER4QyxjQUFDO1NBNUZELEFBNEZDLElBQUE7UUE1RlksV0FBTyxVQTRGbkIsQ0FBQTtJQUNMLENBQUMsRUFsR1MsR0FBRyxLQUFILEdBQUcsUUFrR1oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcblxyXG5uYW1lc3BhY2UgY29tIFxyXG57XHJcbi8qKlxyXG4gKiA8Y29kZT5Qb2ludDwvY29kZT4g5a+56LGh6KGo56S65LqM57u05Z2Q5qCH57O757uf5Lit55qE5p+Q5Liq5L2N572u77yM5YW25LitIHgg6KGo56S65rC05bmz6L2077yMeSDooajnpLrlnoLnm7TovbTjgIJcclxuICovXHJcbiAgICBleHBvcnQgY2xhc3MgSlRQb2ludCBpbXBsZW1lbnRzIEpUSVBvb2xPYmplY3Qge1xyXG5cclxuICAgICAgICAvKirkuLTml7bkvb/nlKjnmoTlhaznlKjlr7nosaHjgIIqL1xyXG4gICAgICAgIHN0YXRpYyBURU1QOiBKVFBvaW50ID0gbmV3IEpUUG9pbnQoKTtcclxuICAgICAgICAvKipAcHJpdmF0ZSDlhajlsYDnqbrnmoRwb2ludOWvueixoSh4PTDvvIx5PTAp77yM5LiN5YWB6K645L+u5pS55q2k5a+56LGh5YaF5a65Ki9cclxuICAgICAgICBzdGF0aWMgRU1QVFk6IEpUUG9pbnQgPSBuZXcgSlRQb2ludCgpO1xyXG5cclxuICAgICAgICAvKiror6XngrnnmoTmsLTlubPlnZDmoIfjgIIqL1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICAvKiror6XngrnnmoTlnoLnm7TlnZDmoIfjgIIqL1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qC55o2u5oyH5a6a5Z2Q5qCH77yM5Yib5bu65LiA5Liq5paw55qEIDxjb2RlPlBvaW50PC9jb2RlPiDlr7nosaHjgIJcclxuICAgICAgICAgKiBAcGFyYW0geFx077yI5Y+v6YCJ77yJ5rC05bmz5Z2Q5qCH44CCXHJcbiAgICAgICAgICogQHBhcmFtIHlcdO+8iOWPr+mAie+8ieWeguebtOWdkOagh+OAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApIHtcclxuICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVjeWNsZSgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBwb29sKCk6SlRJUG9vbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX3Bvb2wpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvb2wgPSBKVFBvb2wuaW5zdGFuY2UoSlRQb2ludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9wb29sOkpUSVBvb2wgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOkpUUG9pbnRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvb2wuZ2V0KCkgYXMgSlRQb2ludDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcHV0KHBvaW50OkpUUG9pbnQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXQocG9pbnQgYXMgSlRJUG9vbE9iamVjdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlsIYgPGNvZGU+UG9pbnQ8L2NvZGU+IOeahOaIkOWRmOiuvue9ruS4uuaMh+WumuWAvOOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0eCDmsLTlubPlnZDmoIfjgIJcclxuICAgICAgICAgKiBAcGFyYW1cdHkg5Z6C55u05Z2Q5qCH44CCXHJcbiAgICAgICAgICogQHJldHVybiDlvZPliY0gUG9pbnQg5a+56LGh44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0VG8oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBKVFBvaW50IHtcclxuICAgICAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDorqHnrpflvZPliY3ngrnlkoznm67moIfngrkoeO+8jHkp55qE6Led56a744CCXHJcbiAgICAgICAgICogQHBhcmFtXHR4IOawtOW5s+WdkOagh+OAglxyXG4gICAgICAgICAqIEBwYXJhbVx0eSDlnoLnm7TlnZDmoIfjgIJcclxuICAgICAgICAgKiBAcmV0dXJuXHTov5Tlm57lvZPliY3ngrnlkoznm67moIfngrnkuYvpl7TnmoTot53nprvjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXN0YW5jZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAtIHgpICogKHRoaXMueCAtIHgpICsgKHRoaXMueSAtIHkpICogKHRoaXMueSAtIHkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKui/lOWbnuWMheWQqyB4IOWSjCB5IOWdkOagh+eahOWAvOeahOWtl+espuS4suOAgiovXHJcbiAgICAgICAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueCArIFwiLFwiICsgdGhpcy55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qCH5YeG5YyW5ZCR6YeP44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbm9ybWFsaXplKCk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgZDogbnVtYmVyID0gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XHJcbiAgICAgICAgICAgIGlmIChkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkOiBudW1iZXIgPSAxLjAgLyBkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ICo9IGlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ICo9IGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBjb3B5IHBvaW505Z2Q5qCHXHJcbiAgICAgICAgICogQHBhcmFtXHRwb2ludCDpnIDopoHooqtjb3B555qEcG9pbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb3B5KHBvaW50OiBKVFBvaW50KTogSlRQb2ludCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFRvKHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19