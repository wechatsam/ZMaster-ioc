"use strict";
var com;
(function (com) {
    function execute(key, args) {
        com.JTFunctionManager.execute(key, args);
    }
    com.execute = execute;
    function dispatchEvent(key, args) {
        com.JTEventManager.dispatchEvent(key, args);
    }
    com.dispatchEvent = dispatchEvent;
    function info(...msgs) {
        let content = "";
        for (var i = 0; i < msgs.length; i++) {
            content += msgs[i];
        }
        com.JTLogger.info(content);
    }
    com.info = info;
    function error(...msgs) {
        let content = "";
        for (var i = 0; i < msgs.length; i++) {
            content += msgs[i];
        }
        com.JTLogger.error(content);
    }
    com.error = error;
    function debug(...msgs) {
        let content = "";
        for (var i = 0; i < msgs.length; i++) {
            content += msgs[i];
        }
        com.JTLogger.debug(content);
    }
    com.debug = debug;
    function assets(flag, ...msgs) {
        let content = "";
        for (var i = 0; i < msgs.length; i++) {
            content += msgs[i];
        }
        com.JTLogger.assert(flag, content);
    }
    com.assets = assets;
})(com || (com = {}));
