"use strict";
cc._RF.push(module, '140fexbl2NMd7n3vk4jkrV7', 'JTFunctionManager');
// Script/src/events/JTFunctionManager.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTFunctionManager = (function () {
            function JTFunctionManager() {
            }
            JTFunctionManager.registerFunction = function (key, method, caller, once) {
                var list = this._eventMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element && element.method == method && element.caller == caller) {
                            JTLogger.info("[JTFunctionManager.registerFunction] The key    " + key + "    function already registered ");
                            return;
                        }
                    });
                }
                else {
                    list = [];
                    this._eventMap[key] = list;
                }
                var command = JTCommand.create(caller, method, null, once);
                list.push(command);
            };
            JTFunctionManager.addCommand = function (key, command) {
                var list = this._eventMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element && element.method == command.method && element.caller == command.caller) {
                            JTLogger.info("[JTFunctionManager.registerFunction] The key    " + key + "    function already registered ");
                            return;
                        }
                    });
                }
                else {
                    list = [];
                    this._eventMap[key] = list;
                }
                list.push(command);
            };
            JTFunctionManager.execute = function (key, args) {
                var _this = this;
                var list = this._eventMap[key];
                if (list) {
                    list.forEach(function (command) {
                        command && command.runWith(args);
                        if (command.once) {
                            _this.delete(list, command);
                        }
                    });
                }
                else {
                    JTLogger.info("[JTFunctionManager.execute] Cant find the function by key : " + key);
                }
            };
            JTFunctionManager.removeFunction = function (key, method, caller) {
                var _this = this;
                var list = this._eventMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element && element.method == method && element.caller == caller) {
                            _this.delete(list, element);
                        }
                    });
                }
            };
            JTFunctionManager.removeFunctions = function (key) {
                var _this = this;
                var list = this._eventMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element) {
                            _this.delete(list, element);
                        }
                    });
                    this._eventMap[key] = null;
                    delete this._eventMap[key];
                }
            };
            JTFunctionManager.delete = function (list, command) {
                var index = list.indexOf(command);
                var removes = list.splice(index, 1);
                removes.shift();
                JTCommand.put(command);
            };
            JTFunctionManager._eventMap = {};
            return JTFunctionManager;
        }());
        com.JTFunctionManager = JTFunctionManager;
    })(com || (com = {}));
});

cc._RF.pop();