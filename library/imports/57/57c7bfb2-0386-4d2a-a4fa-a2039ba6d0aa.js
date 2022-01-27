"use strict";
cc._RF.push(module, '57c7b+yA4ZNKqT6ogObptCq', 'JTTaskEvent');
// Script/src/coroutines/tasks/JTTaskEvent.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTTaskEvent = (function () {
            function JTTaskEvent() {
            }
            JTTaskEvent.TASK_PROGRESS = "TASK_PROGRESS";
            JTTaskEvent.TASK_COMPLETE = "TASK_COMPLETE";
            return JTTaskEvent;
        }());
        com.JTTaskEvent = JTTaskEvent;
    })(com || (com = {}));
});

cc._RF.pop();