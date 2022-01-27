"use strict";
cc._RF.push(module, 'bb72527a7lLKr4tsahD5beV', 'JTNotifyUpdate');
// Script/src/decorators/injects/JTNotifyUpdate.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function NotifyUpdate(eventType) {
            return function (target, property, descripter) {
                var signaler = target;
                signaler.addEventListener(eventType, target[property], target);
            };
        }
        com.NotifyUpdate = NotifyUpdate;
    })(com || (com = {}));
});

cc._RF.pop();