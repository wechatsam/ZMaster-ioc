"use strict";
var com;
(function (com) {
    class JTOptimizeTimer extends com.JTTimer {
        constructor(interval = 0, loop = 0) {
            super(interval, loop);
        }
    }
    com.JTOptimizeTimer = JTOptimizeTimer;
})(com || (com = {}));
