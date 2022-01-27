"use strict";
var com;
(function (com) {
    class JTTimeEvent {
    }
    JTTimeEvent.TIMER = "timer";
    JTTimeEvent.TIMER_COMPLETE = "timerComplete";
    JTTimeEvent.ENTER_FRAME = "enterFrame";
    JTTimeEvent.ENTER_COMPLETE = "enterComplete";
    JTTimeEvent.ENTER_LAST_FRAME = "enterLastFrame";
    JTTimeEvent.JUMP_FRAME = "jumpFrame";
    com.JTTimeEvent = JTTimeEvent;
})(com || (com = {}));
