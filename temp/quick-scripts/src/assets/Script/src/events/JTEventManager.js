"use strict";
cc._RF.push(module, 'f5ddem5ESNOKr05++E+XeId', 'JTEventManager');
// Script/src/events/JTEventManager.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTEventManager = (function () {
            function JTEventManager() {
            }
            JTEventManager.recycle = function () {
                this.removes();
            };
            JTEventManager.addEventListener = function (key, method, caller, once) {
                var list = this.__evtMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element && element.method == method && element.caller == caller) {
                            JTLogger.info("[JTEventManager.addEventListener] The key" + key + " function already registered ");
                            return;
                        }
                    });
                }
                else {
                    list = [];
                    this.__evtMap[key] = list;
                }
                var command = JTCommand.create(caller, method, null, once);
                list.push(command);
            };
            JTEventManager.dispatchEvent = function (key, args) {
                var _this = this;
                var list = this.__evtMap[key];
                if (list) {
                    list.forEach(function (command) {
                        command && command.runWith(args);
                        if (command.once) {
                            _this.delete(list, command);
                        }
                    });
                }
                else {
                    JTLogger.info("[JTEventManager.dispatchEvent] Cant find the function by key : " + key);
                }
            };
            JTEventManager.removeEventListener = function (key, method, caller) {
                var _this = this;
                var list = this.__evtMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element && element.method == method && element.caller == caller) {
                            _this.delete(list, element);
                        }
                    });
                }
            };
            JTEventManager.removeEvents = function (key) {
                var _this = this;
                var list = this.__evtMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element) {
                            _this.delete(list, element);
                        }
                    });
                    this.__evtMap[key] = null;
                    delete this.__evtMap[key];
                }
            };
            JTEventManager.delete = function (list, command) {
                var index = list.indexOf(command);
                var removes = list.splice(index, 1);
                removes.shift();
                JTCommand.put(command);
            };
            JTEventManager.removes = function () {
                var caller = this;
                for (var key in this.__evtMap) {
                    this.removeEvents(key);
                }
                this.__evtMap = {};
            };
            JTEventManager.__evtMap = {};
            return JTEventManager;
        }());
        com.JTEventManager = JTEventManager;
    })(com || (com = {}));
});

cc._RF.pop();