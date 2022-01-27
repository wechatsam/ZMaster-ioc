"use strict";
var com;
(function (com) {
    class JTThread extends com.JTEventDispatcher {
        constructor() {
            super();
        }
    }
    com.JTThread = JTThread;
})(com || (com = {}));
