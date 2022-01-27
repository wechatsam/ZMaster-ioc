"use strict";
cc._RF.push(module, 'e71fcYbynxMP6PWHDu+tolp', 'JTLogger');
// Script/src/common/JTLogger.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTLogger = (function () {
            function JTLogger() {
            }
            JTLogger.info = function () {
                var msgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msgs[_i] = arguments[_i];
                }
                var content = "";
                for (var i = 0; i < msgs.length; i++) {
                    content += msgs[i];
                }
                this.print(this.LOG_INFO, content);
            };
            JTLogger.debug = function () {
                var msgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msgs[_i] = arguments[_i];
                }
                var content = "";
                for (var i = 0; i < msgs.length; i++) {
                    content += JSON.stringify(msgs[i]);
                }
                this.print(this.LOG_DEBUG, content);
            };
            JTLogger.assert = function (flag) {
                var msgs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    msgs[_i - 1] = arguments[_i];
                }
                var content = "";
                for (var i = 0; i < msgs.length; i++) {
                    content += msgs[i];
                }
                if (!flag)
                    throw new Error(content);
            };
            JTLogger.error = function () {
                var msgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msgs[_i] = arguments[_i];
                }
                var content = "";
                for (var i = 0; i < msgs.length; i++) {
                    content += msgs[i];
                }
                throw new Error(content);
            };
            JTLogger.print = function (type, info) {
                var date = new Date();
                var hour = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                var time = hour + ":" + minutes + ":" + seconds + " >>>> ";
                console.log(type + time + info);
            };
            JTLogger.LOG_INFO = "[INFO] :";
            JTLogger.LOG_ASSET = "[ASSET] :";
            JTLogger.LOG_DEBUG = "[DEBUG] :";
            JTLogger.LOG_ERROR = "[ERROR] :";
            return JTLogger;
        }());
        com.JTLogger = JTLogger;
    })(com || (com = {}));
});

cc._RF.pop();