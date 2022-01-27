"use strict";
cc._RF.push(module, '9371fXw/TFIPJ0PTuTex5fr', 'JTSession');
// Script/src/common/JTSession.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTSession = (function () {
            function JTSession() {
            }
            Object.defineProperty(JTSession, "stage", {
                get: function () {
                    if (!this._stage) {
                        this._stage = fgui.GRoot.create();
                        this._stage.setPosition(0, 0);
                    }
                    return this._stage;
                },
                enumerable: false,
                configurable: true
            });
            JTSession.channel = null;
            JTSession.designHeight = 0;
            JTSession.designWidth = 0;
            JTSession.stageWidth = 0;
            JTSession.stageHeight = 0;
            JTSession._stage = null;
            return JTSession;
        }());
        com.JTSession = JTSession;
    })(com || (com = {}));
});

cc._RF.pop();