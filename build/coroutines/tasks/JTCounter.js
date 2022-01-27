"use strict";
var com;
(function (com) {
    class JTCounter extends com.JTLocker {
        constructor() {
            super();
            /*
            *失败次数
            */
            this._failCount = 0;
            /*
            *成功次数
            */
            this._succeedCount = 0;
            /*
            *已经完成的次数
            */
            this._lockedCount = 0;
            this._totalCount = 0;
        }
        setTotalCount(totalCount) {
            this._totalCount = totalCount;
        }
        release() {
            super.release();
            this._succeedCount++;
            this._lockedCount++;
        }
        kill() {
            super.kill();
            this._failCount++;
            this._lockedCount++;
        }
        get totalCount() {
            return this._totalCount;
        }
        get succeedCount() {
            return this._succeedCount;
        }
        get failCount() {
            return this._failCount;
        }
        get completed() {
            let count = this._succeedCount + this._failCount;
            if (this._totalCount != count)
                return false;
            else {
                if (this._totalCount == this._succeedCount)
                    return true;
                else {
                    com.info("the task execute fail count:  " + this._failCount);
                }
            }
        }
        get lockedCount() {
            return this._lockedCount;
        }
        static create() {
            return com.JTPool.instance(JTCounter).get();
        }
        get progress() {
            return parseFloat((this._lockedCount / this._totalCount).toFixed(4));
        }
    }
    com.JTCounter = JTCounter;
})(com || (com = {}));
