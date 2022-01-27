"use strict";
cc._RF.push(module, 'a8663DdGHtFsa+7eIUyvCDu', 'JTEventDispatcher');
// Script/src/events/JTEventDispatcher.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTEventDispatcher = (function () {
            function JTEventDispatcher() {
                this.__evtMap = null;
            }
            JTEventDispatcher.prototype.recycle = function () {
                this.removes();
            };
            JTEventDispatcher.prototype.addEventListener = function (key, method, caller, once) {
                var list = this.evtMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element && element.method == method && element.caller == caller) {
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
            JTEventDispatcher.prototype.dispatchEvent = function (key, args) {
                var _this = this;
                var list = this.evtMap[key];
                if (list) {
                    list.forEach(function (command) {
                        command && command.runWith(args);
                        if (command.once) {
                            _this.delete(list, command);
                        }
                    });
                }
                else {
                }
            };
            JTEventDispatcher.prototype.removeEventListener = function (key, method, caller) {
                var _this = this;
                var list = this.evtMap[key];
                if (list) {
                    list.forEach(function (element) {
                        if (element && element.method == method && element.caller == caller) {
                            _this.delete(list, element);
                        }
                    });
                }
            };
            JTEventDispatcher.prototype.removeEvents = function (key) {
                var _this = this;
                var list = this.evtMap[key];
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
            JTEventDispatcher.prototype.delete = function (list, command) {
                var index = list.indexOf(command);
                var removes = list.splice(index, 1);
                removes.shift();
                JTCommand.put(command);
            };
            JTEventDispatcher.prototype.removes = function () {
                for (var key in this.evtMap) {
                    this.removeEvents(key);
                }
                this.__evtMap = {};
            };
            Object.defineProperty(JTEventDispatcher.prototype, "evtMap", {
                get: function () {
                    if (!this.__evtMap) {
                        this.__evtMap = {};
                    }
                    return this.__evtMap;
                },
                enumerable: false,
                configurable: true
            });
            return JTEventDispatcher;
        }());
        com.JTEventDispatcher = JTEventDispatcher;
    })(com || (com = {}));
});

cc._RF.pop();