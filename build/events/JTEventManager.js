"use strict";
var com;
(function (com) {
    class JTEventManager {
        constructor() {
        }
        static recycle() {
            this.removes();
        }
        static addEventListener(key, method, caller, once) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(element => {
                    if (element && element.method == method && element.caller == caller) {
                        com.JTLogger.info("[JTFunctionManager.registerFunction] The key" + key + " function already registered ");
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
        static dispatchEvent(key, args) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(command => {
                    command && command.runWith(args);
                    if (command.once) {
                        this.delete(list, command);
                    }
                });
            }
            else {
                com.JTLogger.info("[JTFunctionManager.execute] Cant find the function by key : " + key);
            }
        }
        static removeEventListener(key, method, caller) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(element => {
                    if (element && element.method == method && element.caller == caller) {
                        this.delete(list, element);
                    }
                });
            }
        }
        static removeEvents(key) {
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
        static removes() {
            // this._eventMap.forEach((value, key)=>{
            //         this.removeEvents(key);
            //         value.length = 0;
            // })
            // this._eventMap.clear();
            // this._eventMap.forEach(element => {
            // });
            var caller = this;
            for (var key in this._eventMap) {
                this.removeEventListener(key, this._eventMap[key], caller);
            }
            this._eventMap = {};
        }
    }
    JTEventManager._eventMap = {};
    com.JTEventManager = JTEventManager;
})(com || (com = {}));
