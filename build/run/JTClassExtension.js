"use strict";
///<reference path="../events/JTEventSignaler.ts"/>
var com;
(function (com) {
    class JTClassExtension extends com.JTEventSignaler {
        constructor() {
            super();
        }
    }
    com.JTClassExtension = JTClassExtension;
})(com || (com = {}));
