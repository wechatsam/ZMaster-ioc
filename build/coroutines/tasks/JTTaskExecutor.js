"use strict";
var com;
(function (com) {
    class JTTaskExecutor extends com.JTTask {
        constructor() {
            super(...arguments);
            this._counter = null;
        }
        relevance(counter) {
            this._counter = counter;
        }
        release() {
            this._counter && this._counter.release();
        }
        kill() {
            this._counter && this._counter.kill();
        }
        recycle() {
            this._counter = null;
        }
    }
    com.JTTaskExecutor = JTTaskExecutor;
})(com || (com = {}));
