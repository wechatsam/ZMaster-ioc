"use strict";
cc._RF.push(module, '043bdQa2/pJ/ZfQjR5BWFNt', 'JTResize');
// Script/src/decorators/injects/JTResize.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTResizeEvent = (function () {
            function JTResizeEvent() {
            }
            Object.defineProperty(JTResizeEvent, "className", {
                get: function () {
                    return this.___classNames;
                },
                enumerable: false,
                configurable: true
            });
            JTResizeEvent.indexOf = function (___className) {
                return this.___classNames.indexOf(___className);
            };
            JTResizeEvent.registerResize = function (target) {
                var className = target.className;
                var index = JTResizeEvent.indexOf(className);
                if (index != -1) {
                    target.addEventListener(JTResizeEvent.RESIZE, target.onResizeHandler, target);
                }
            };
            JTResizeEvent.RESIZE = "resize";
            JTResizeEvent.___classNames = [];
            return JTResizeEvent;
        }());
        com.JTResizeEvent = JTResizeEvent;
        function ResizeEvent() {
            return function (target) {
                JTDecoratorUtils.registerClassAlias(target, "name");
                JTResizeEvent.className.push(target.name);
            };
        }
        com.ResizeEvent = ResizeEvent;
    })(com || (com = {}));
});

cc._RF.pop();