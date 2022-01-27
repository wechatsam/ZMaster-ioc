"use strict";
var com;
(function (com) {
    class JTFunctionManager {
        static registerFunction(key, method, caller, once) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(element => {
                    if (element && element.method == method && element.caller == caller) {
                        com.JTLogger.info("[JTFunctionManager.registerFunction] The key    " + key + "    function already registered ");
                        return;
                    }
                });
            }
            else {
                list = [];
                this._eventMap[key] = list;
            }
            var command = com.JTEvent.create(caller, method, null, once);
            list.push(command);
        }
        static addCommand(key, command) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(element => {
                    if (element && element.method == command.method && element.caller == command.caller) {
                        com.JTLogger.info("[JTFunctionManager.registerFunction] The key    " + key + "    function already registered ");
                        return;
                    }
                });
            }
            else {
                list = [];
                this._eventMap[key] = list;
            }
            list.push(command);
        }
        static execute(key, args) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(command => {
                    command && command.runWith(args);
                    if (command.once) {
                        this.delete(list, command);
                    }
                    // if (command.once) 
                });
            }
            else {
                com.JTLogger.info("[JTFunctionManager.execute] Cant find the function by key : " + key);
            }
        }
        static removeFunction(key, method, caller) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(element => {
                    if (element && element.method == method && element.caller == caller) {
                        this.delete(list, element);
                    }
                });
            }
        }
        static removeFunctions(key) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(element => {
                    if (element) {
                        this.delete(list, element);
                    }
                });
                this._eventMap[key] = null;
                delete this._eventMap[key];
            }
        }
        static delete(list, command) {
            var index = list.indexOf(command);
            var removes = list.splice(index, 1);
            removes.shift();
            com.JTEvent.put(command);
        }
    }
    JTFunctionManager._eventMap = {};
    com.JTFunctionManager = JTFunctionManager;
})(com || (com = {}));
