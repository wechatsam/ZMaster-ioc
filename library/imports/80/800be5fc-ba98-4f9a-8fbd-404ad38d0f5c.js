"use strict";
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