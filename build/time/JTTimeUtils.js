"use strict";
var com;
(function (com) {
    class JTTimeUtils {
        static get runnbleTime() {
            return performance.now();
        }
    }
    com.JTTimeUtils = JTTimeUtils;
})(com || (com = {}));
