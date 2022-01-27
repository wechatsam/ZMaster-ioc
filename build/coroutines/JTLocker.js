"use strict";
var com;
(function (com) {
    class JTLocker {
        constructor() {
            this._resolve = null;
            this._reject = null;
            this._locker = null;
        }
        lock() {
            if (this._locker)
                return this._locker; //注意，当前正使用锁时，如果没有调用release 时不能再使用lock()方法
            let locker = this;
            this._locker = new Promise((resolve, reject) => {
                locker._reject = reject;
                locker._resolve = resolve;
            });
            return this._locker;
        }
        release() {
            this._resolve && this._resolve(this);
            this._locker = this._reject = this._resolve = null;
        }
        kill() {
            this._reject && this._reject(this);
            this._locker = this._reject = this._resolve = null;
        }
        locked() {
            return this._locker != null;
        }
        tryLock() {
            return this.locked() ? this._locker : this.lock();
        }
        recycle() {
            this.release();
        }
        static create() {
            return com.JTPool.instance(JTLocker).get();
        }
    }
    com.JTLocker = JTLocker;
})(com || (com = {}));
