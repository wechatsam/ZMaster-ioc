"use strict";
///<reference path="../events/JTEventSignaler.ts"/>
var com;
(function (com) {
    class JTDataInfoManager extends com.JTEventSignaler {
        constructor() {
            super();
        }
    }
    com.JTDataInfoManager = JTDataInfoManager;
})(com || (com = {}));
