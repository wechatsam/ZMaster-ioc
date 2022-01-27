"use strict";
var com;
(function (com) {
    class JTEventDispatcher {
        constructor() {
            this._eventMap = {};
        }
        recycle() {
            this.removes();
        }
        addEventListener(key, method, caller, once) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(element => {
                    if (element && element.method == method && element.caller == caller) {
                        // JTLogger.info("[JTFunctionManager.registerFunction] The key"+ key +" function already registered ");
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
        dispatchEvent(key, args) {
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
                // JTLogger.info("[JTFunctionManager.execute] Cant find the function by key : " + key);
            }
        }
        removeEventListener(key, method, caller) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(element => {
                    if (element && element.method == method && element.caller == caller) {
                        this.delete(list, element);
                    }
                });
            }
        }
        removeEvents(key) {
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
        delete(list, command) {
            var index = list.indexOf(command);
            var removes = list.splice(index, 1);
            removes.shift();
            com.JTEvent.put(command);
        }
        removes() {
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
    com.JTEventDispatcher = JTEventDispatcher;
})(com || (com = {}));
