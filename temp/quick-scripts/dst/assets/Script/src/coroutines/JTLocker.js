
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/coroutines/JTLocker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '800beX8uphPmo+9QErTjQ9c', 'JTLocker');
// Script/src/coroutines/JTLocker.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTLocker = (function () {
            function JTLocker() {
                this._resolve = null;
                this._reject = null;
                this._locker = null;
                this.___result = null;
            }
            JTLocker.prototype.lock = function (__result) {
                if (this._locker)
                    return this._locker;
                var locker = this;
                this.___result = __result ? __result : this;
                this._locker = new Promise(function (resolve, reject) {
                    locker._reject = reject;
                    locker._resolve = resolve;
                });
                return this._locker;
            };
            JTLocker.prototype.release = function () {
                this._resolve && this._resolve.apply(this, [this.___result]);
                this.recycle();
            };
            JTLocker.prototype.kill = function () {
                this._reject && this._reject.apply(this, [this.___result]);
                this.recycle();
            };
            JTLocker.prototype.locked = function () {
                return this._locker != null;
            };
            JTLocker.prototype.tryLock = function (__caller) {
                this.___result = __caller ? __caller : this;
                return this.locked() ? this._locker : this.lock(this.___result);
            };
            JTLocker.prototype.recycle = function () {
                this.___result = this._locker = this._reject = this._resolve = null;
            };
            JTLocker.create = function () {
                return JTPool.instance(JTLocker).get();
            };
            return JTLocker;
        }());
        com.JTLocker = JTLocker;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvcm91dGluZXNcXEpUTG9ja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBZ0VaO0lBaEVELFdBQVUsR0FBRztRQUVUO1lBQUE7Z0JBRWMsYUFBUSxHQUFZLElBQUksQ0FBQztnQkFDekIsWUFBTyxHQUFZLElBQUksQ0FBQztnQkFDeEIsWUFBTyxHQUFnQixJQUFJLENBQUM7Z0JBQzVCLGNBQVMsR0FBTyxJQUFJLENBQUM7WUF3RG5DLENBQUM7WUFsRFUsdUJBQUksR0FBWCxVQUFZLFFBQWE7Z0JBRXJCLElBQUksSUFBSSxDQUFDLE9BQU87b0JBQUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxJQUFJLE1BQU0sR0FBWSxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUVuQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFBO2dCQUNGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN4QixDQUFDO1lBRU0sMEJBQU8sR0FBZDtnQkFFSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO2dCQUM1RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQztZQUVNLHVCQUFJLEdBQVg7Z0JBRUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtnQkFDMUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLENBQUM7WUFFTSx5QkFBTSxHQUFiO2dCQUVJLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUM7WUFDaEMsQ0FBQztZQU9NLDBCQUFPLEdBQWQsVUFBZSxRQUFZO2dCQUV2QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRSxDQUFDO1lBRU0sMEJBQU8sR0FBZDtnQkFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN4RSxDQUFDO1lBRWEsZUFBTSxHQUFwQjtnQkFFSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFjLENBQUM7WUFDdkQsQ0FBQztZQUNMLGVBQUM7UUFBRCxDQTdEQSxBQTZEQyxJQUFBO1FBN0RZLFlBQVEsV0E2RHBCLENBQUE7SUFDTCxDQUFDLEVBaEVTLEdBQUcsS0FBSCxHQUFHLFFBZ0VaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUTG9ja2VyIGltcGxlbWVudHMgSlRMb2NrZXIgXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9yZXNvbHZlOkZ1bmN0aW9uID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX3JlamVjdDpGdW5jdGlvbiA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9sb2NrZXI6UHJvbWlzZTxhbnk+ID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX19fcmVzdWx0OmFueSA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5aaC5p6c5LiN5Lyg57uT5p6c77yM5YiZ5Lya6L+U5ZueSlRMb2NrZXLoh6rouqtcclxuICAgICAgICAgKiBAcGFyYW0gX19yZXN1bHQgXHJcbiAgICAgICAgICogQHJldHVybnMgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGxvY2soX19yZXN1bHQ/OmFueSk6UHJvbWlzZTxhbnk+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbG9ja2VyKSByZXR1cm4gdGhpcy5fbG9ja2VyOyAvL+azqOaEj++8jOW9k+WJjeato+S9v+eUqOmUgeaXtu+8jOWmguaenOayoeacieiwg+eUqHJlbGVhc2Ug5pe25LiN6IO95YaN5L2/55SobG9jaygp5pa55rOVXHJcbiAgICAgICAgICAgIGxldCBsb2NrZXI6SlRMb2NrZXIgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9fX3Jlc3VsdCA9IF9fcmVzdWx0ID8gX19yZXN1bHQgOiB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2NrZXIgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tlci5fcmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2tlci5fcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2NrZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgJiYgdGhpcy5fcmVzb2x2ZS5hcHBseSh0aGlzLCBbdGhpcy5fX19yZXN1bHRdKVxyXG4gICAgICAgICAgICB0aGlzLnJlY3ljbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBraWxsKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ICYmIHRoaXMuX3JlamVjdC5hcHBseSh0aGlzLCBbdGhpcy5fX19yZXN1bHRdKVxyXG4gICAgICAgICAgICB0aGlzLnJlY3ljbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBsb2NrZWQoKTpib29sZWFuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9ja2VyICE9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlpoLmnpzkuI3kvKDnu5PmnpzvvIzliJnkvJrov5Tlm55KVExvY2tlcuiHqui6q1xyXG4gICAgICAgICAqIEBwYXJhbSBfX3Jlc3VsdCBcclxuICAgICAgICAgKiBAcmV0dXJucyBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdHJ5TG9jayhfX2NhbGxlcjphbnkpOlByb21pc2U8YW55PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fX19yZXN1bHQgPSBfX2NhbGxlciA/IF9fY2FsbGVyIDogdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9ja2VkKCkgPyB0aGlzLl9sb2NrZXIgOiB0aGlzLmxvY2sodGhpcy5fX19yZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlY3ljbGUoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX19fcmVzdWx0ID0gdGhpcy5fbG9ja2VyID0gdGhpcy5fcmVqZWN0ID0gdGhpcy5fcmVzb2x2ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOkpUTG9ja2VyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gSlRQb29sLmluc3RhbmNlKEpUTG9ja2VyKS5nZXQoKSBhcyBKVExvY2tlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19