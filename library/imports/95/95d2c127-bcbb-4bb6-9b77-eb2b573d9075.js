"use strict";
cc._RF.push(module, '95d2cEnvLtLtpt36ytXPZB1', 'JTFunctionUtils');
// Script/src/common/JTFunctionUtils.ts

define(["require", "exports"], function (require, exports) {
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
        function info() {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            com.JTLogger.info(content);
        }
        com.info = info;
        function error() {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            com.JTLogger.error(content);
        }
        com.error = error;
        function debug() {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            com.JTLogger.debug(content);
        }
        com.debug = debug;
        function assets(flag) {
            var msgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                msgs[_i - 1] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            com.JTLogger.assert(flag, content);
        }
        com.assets = assets;
    })(com || (com = {}));
});

cc._RF.pop();