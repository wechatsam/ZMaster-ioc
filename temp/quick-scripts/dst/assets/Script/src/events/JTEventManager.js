
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/events/JTEventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGV2ZW50c1xcSlRFdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0FxSFo7SUFySEQsV0FBVSxHQUFHO1FBRVQ7WUFHSTtZQUVBLENBQUM7WUFFYSxzQkFBTyxHQUFyQjtnQkFFSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQztZQUVhLCtCQUFnQixHQUE5QixVQUErQixHQUFPLEVBQUUsTUFBZSxFQUFFLE1BQVUsRUFBRSxJQUFhO2dCQUU5RSxJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksRUFDUjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzt3QkFFaEIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQ25FOzRCQUNJLFFBQVEsQ0FBQyxJQUFJLENBQUMsMkNBQTJDLEdBQUUsR0FBRyxHQUFFLCtCQUErQixDQUFDLENBQUM7NEJBQ2pHLE9BQVE7eUJBQ1g7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7aUJBQ047cUJBRUQ7b0JBQ0ksSUFBSSxHQUFHLEVBQUUsQ0FBQztvQkFDVixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDN0I7Z0JBQ0QsSUFBSSxPQUFPLEdBQWEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDO1lBRWEsNEJBQWEsR0FBM0IsVUFBNEIsR0FBTyxFQUFFLElBQVM7Z0JBQTlDLGlCQWtCQztnQkFoQkcsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxJQUFJLEVBQ1I7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBRWhCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUNoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQ2hCOzRCQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3lCQUM5QjtvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjtxQkFFRDtvQkFDSSxRQUFRLENBQUMsSUFBSSxDQUFDLGlFQUFpRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lCQUMxRjtZQUNMLENBQUM7WUFFYSxrQ0FBbUIsR0FBakMsVUFBa0MsR0FBTyxFQUFFLE1BQWUsRUFBRSxNQUFVO2dCQUF0RSxpQkFhQztnQkFYRyxJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksRUFDUjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzt3QkFFaEIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQ25FOzRCQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3lCQUM5QjtvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNMLENBQUM7WUFFYSwyQkFBWSxHQUExQixVQUEyQixHQUFPO2dCQUFsQyxpQkFlQztnQkFiRyxJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLElBQUksRUFDUjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzt3QkFFaEIsSUFBSSxPQUFPLEVBQ1g7NEJBQ0ksS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQzlCO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQzVCO1lBQ0wsQ0FBQztZQUVnQixxQkFBTSxHQUF2QixVQUF3QixJQUFnQixFQUFFLE9BQWlCO2dCQUVuRCxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLE9BQU8sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNoQixTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLENBQUM7WUFFZ0Isc0JBQU8sR0FBeEI7Z0JBV0ksSUFBSSxNQUFNLEdBQU8sSUFBSSxDQUFDO2dCQUN0QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQzdCO29CQUNRLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzlCO2dCQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLENBQUM7WUE5R2dCLHVCQUFRLEdBQVcsRUFBRSxDQUFBO1lBZ0gxQyxxQkFBQztTQWxIRCxBQWtIQyxJQUFBO1FBbEhZLGtCQUFjLGlCQWtIMUIsQ0FBQTtJQUNMLENBQUMsRUFySFMsR0FBRyxLQUFILEdBQUcsUUFxSFoiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRFdmVudE1hbmFnZXJcclxuICAgIHtcclxuICAgICAgICBwcm90ZWN0ZWQgc3RhdGljIF9fZXZ0TWFwOk9iamVjdCAgPSB7fVxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlY3ljbGUoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhZGRFdmVudExpc3RlbmVyKGtleTphbnksIG1ldGhvZDpGdW5jdGlvbiwgY2FsbGVyOmFueSwgb25jZT86Ym9vbGVhbik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxpc3Q6SlRDb21tYW5kW10gPSB0aGlzLl9fZXZ0TWFwW2tleV07XHJcbiAgICAgICAgICAgIGlmIChsaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lm1ldGhvZCA9PSBtZXRob2QgJiYgZWxlbWVudC5jYWxsZXIgPT0gY2FsbGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSlRMb2dnZXIuaW5mbyhcIltKVEV2ZW50TWFuYWdlci5hZGRFdmVudExpc3RlbmVyXSBUaGUga2V5XCIrIGtleSArXCIgZnVuY3Rpb24gYWxyZWFkeSByZWdpc3RlcmVkIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19ldnRNYXBba2V5XSA9IGxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGNvbW1hbmQ6SlRDb21tYW5kID0gSlRDb21tYW5kLmNyZWF0ZShjYWxsZXIsIG1ldGhvZCwgbnVsbCwgb25jZSk7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChjb21tYW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2hFdmVudChrZXk6YW55LCBhcmdzPzphbnkpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0OkpUQ29tbWFuZFtdID0gdGhpcy5fX2V2dE1hcFtrZXldO1xyXG4gICAgICAgICAgICBpZiAobGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGNvbW1hbmQgPT4gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZCAmJiBjb21tYW5kLnJ1bldpdGgoYXJncylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5vbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobGlzdCwgY29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBKVExvZ2dlci5pbmZvKFwiW0pURXZlbnRNYW5hZ2VyLmRpc3BhdGNoRXZlbnRdIENhbnQgZmluZCB0aGUgZnVuY3Rpb24gYnkga2V5IDogXCIgKyBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5OmFueSwgbWV0aG9kOkZ1bmN0aW9uLCBjYWxsZXI6YW55KTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbGlzdDpKVENvbW1hbmRbXSA9IHRoaXMuX19ldnRNYXBba2V5XTtcclxuICAgICAgICAgICAgaWYgKGxpc3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubWV0aG9kID09IG1ldGhvZCAmJiBlbGVtZW50LmNhbGxlciA9PSBjYWxsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShsaXN0LCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZW1vdmVFdmVudHMoa2V5OmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxpc3Q6SlRDb21tYW5kW10gPSB0aGlzLl9fZXZ0TWFwW2tleV07XHJcbiAgICAgICAgICAgIGlmIChsaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGxpc3QsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2V2dE1hcFtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fZXZ0TWFwW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpYyBkZWxldGUobGlzdDpKVENvbW1hbmRbXSwgY29tbWFuZDpKVENvbW1hbmQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gbGlzdC5pbmRleE9mKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZXM6SlRDb21tYW5kW10gPSBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBKVENvbW1hbmQucHV0KGNvbW1hbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpYyByZW1vdmVzKCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzLl9ldmVudE1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRzKGtleSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWUubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgLy8gdGhpcy5fZXZlbnRNYXAuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2V2ZW50TWFwLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIHZhciBjYWxsZXI6YW55ID0gdGhpcztcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX19ldnRNYXApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50cyhrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX19ldnRNYXAgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=