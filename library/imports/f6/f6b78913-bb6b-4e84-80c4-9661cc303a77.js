"use strict";
cc._RF.push(module, 'f6b78kTu2tOhIDElmHMMDp3', 'JTTimerEvent');
// Script/src/time/JTTimerEvent.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTTimeEvent = (function () {
            function JTTimeEvent() {
            }
            JTTimeEvent.TIMER = "timer";
            JTTimeEvent.TIMER_COMPLETE = "timerComplete";
            JTTimeEvent.ENTER_FRAME = "enterFrame";
            JTTimeEvent.ENTER_COMPLETE = "enterComplete";
            JTTimeEvent.ENTER_LAST_FRAME = "enterLastFrame";
            JTTimeEvent.JUMP_FRAME = "jumpFrame";
            return JTTimeEvent;
        }());
        com.JTTimeEvent = JTTimeEvent;
    })(com || (com = {}));
});

cc._RF.pop();