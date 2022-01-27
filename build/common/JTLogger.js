"use strict";
var com;
(function (com) {
    class JTLogger {
        static info(...msgs) {
            let content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            this.print(this.LOG_INFO, content);
        }
        static debug(...msgs) {
            let content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += JSON.stringify(msgs[i]);
            }
            this.print(this.LOG_DEBUG, content);
        }
        static assert(flag, ...msgs) {
            let content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            if (!flag)
                throw new Error(content);
        }
        static error(...msgs) {
            let content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            throw new Error(content);
        }
        static print(type, info) {
            var date = new Date();
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var time = hour + ":" + minutes + ":" + seconds + " >>>> ";
            console.log(type + time + info);
        }
    }
    JTLogger.LOG_INFO = "[INFO] :";
    JTLogger.LOG_ASSET = "[ASSET] :";
    JTLogger.LOG_DEBUG = "[DEBUG] :";
    JTLogger.LOG_ERROR = "[ERROR] :";
    com.JTLogger = JTLogger;
})(com || (com = {}));
