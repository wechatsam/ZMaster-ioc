
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/events/JTFunctionManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGV2ZW50c1xcSlRGdW5jdGlvbk1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0FpSFo7SUFqSEQsV0FBVSxHQUFHO1FBRVQ7WUFBQTtZQThHQSxDQUFDO1lBM0dpQixrQ0FBZ0IsR0FBOUIsVUFBK0IsR0FBbUIsRUFBRSxNQUFlLEVBQUUsTUFBVSxFQUFFLElBQWE7Z0JBRTFGLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQzFDLElBQUksSUFBSSxFQUNSO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUVoQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFDbkU7NEJBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQyxrREFBa0QsR0FBRSxHQUFHLEdBQUUsa0NBQWtDLENBQUMsQ0FBQzs0QkFDM0csT0FBUTt5QkFDWDtvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjtxQkFFRDtvQkFDSSxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUM5QjtnQkFDRCxJQUFJLE9BQU8sR0FBYSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFFYSw0QkFBVSxHQUF4QixVQUF5QixHQUFtQixFQUFFLE9BQWlCO2dCQUUzRCxJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUMxQyxJQUFJLElBQUksRUFDUjtvQkFDSSxJ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QztZQTRHekMsd0JBQUM7U0E5R0QsQUE4R0MsSUFBQTtRQTlHWSxxQkFBaUIsb0JBOEc3QixDQUFBO0lBQ0wsQ0FBQyxFQWpIUyxHQUFHLEtBQUgsR0FBRyxRQWlIWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBKVEZ1bmN0aW9uTWFuYWdlclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9ldmVudE1hcDpPYmplY3QgPSB7fTtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRnVuY3Rpb24oa2V5Om51bWJlciB8IHN0cmluZywgbWV0aG9kOkZ1bmN0aW9uLCBjYWxsZXI6YW55LCBvbmNlPzpib29sZWFuKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbGlzdDpKVENvbW1hbmRbXSA9IHRoaXMuX2V2ZW50TWFwW2tleV1cclxuICAgICAgICAgICAgaWYgKGxpc3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubWV0aG9kID09IG1ldGhvZCAmJiBlbGVtZW50LmNhbGxlciA9PSBjYWxsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBKVExvZ2dlci5pbmZvKFwiW0pURnVuY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyRnVuY3Rpb25dIFRoZSBrZXkgICAgXCIrIGtleSArXCIgICAgZnVuY3Rpb24gYWxyZWFkeSByZWdpc3RlcmVkIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TWFwW2tleV0gPSBsaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjb21tYW5kOkpUQ29tbWFuZCA9IEpUQ29tbWFuZC5jcmVhdGUoY2FsbGVyLCBtZXRob2QsIG51bGwsIG9uY2UpO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goY29tbWFuZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFkZENvbW1hbmQoa2V5Om51bWJlciB8IHN0cmluZywgY29tbWFuZDpKVENvbW1hbmQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0OkpUQ29tbWFuZFtdID0gdGhpcy5fZXZlbnRNYXBba2V5XVxyXG4gICAgICAgICAgICBpZiAobGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5tZXRob2QgPT0gY29tbWFuZC5tZXRob2QgJiYgZWxlbWVudC5jYWxsZXIgPT0gY29tbWFuZC5jYWxsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBKVExvZ2dlci5pbmZvKFwiW0pURnVuY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyRnVuY3Rpb25dIFRoZSBrZXkgICAgXCIrIGtleSArXCIgICAgZnVuY3Rpb24gYWxyZWFkeSByZWdpc3RlcmVkIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TWFwW2tleV0gPSBsaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChjb21tYW5kKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZXhlY3V0ZShrZXk6bnVtYmVyIHwgc3RyaW5nLCBhcmdzPzphbnkpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0OkpUQ29tbWFuZFtdID0gdGhpcy5fZXZlbnRNYXBba2V5XVxyXG4gICAgICAgICAgICBpZiAobGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGNvbW1hbmQgPT4gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZCAmJiBjb21tYW5kLnJ1bldpdGgoYXJncylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5vbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobGlzdCwgY29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjb21tYW5kLm9uY2UpIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBKVExvZ2dlci5pbmZvKFwiW0pURnVuY3Rpb25NYW5hZ2VyLmV4ZWN1dGVdIENhbnQgZmluZCB0aGUgZnVuY3Rpb24gYnkga2V5IDogXCIgKyBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUZ1bmN0aW9uKGtleTpudW1iZXIgfCBzdHJpbmcsIG1ldGhvZDpGdW5jdGlvbiwgY2FsbGVyOmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxpc3Q6SlRDb21tYW5kW10gPSAgdGhpcy5fZXZlbnRNYXBba2V5XVxyXG4gICAgICAgICAgICBpZiAobGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5tZXRob2QgPT0gbWV0aG9kICYmIGVsZW1lbnQuY2FsbGVyID09IGNhbGxlcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGxpc3QsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlRnVuY3Rpb25zKGtleTpudW1iZXIgfCBzdHJpbmcpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0OkpUQ29tbWFuZFtdID0gIHRoaXMuX2V2ZW50TWFwW2tleV1cclxuICAgICAgICAgICAgaWYgKGxpc3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGUobGlzdCwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudE1hcFtrZXldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudE1hcFtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBkZWxldGUobGlzdDpKVENvbW1hbmRbXSwgY29tbWFuZDpKVENvbW1hbmQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gbGlzdC5pbmRleE9mKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZXM6SlRDb21tYW5kW10gPSBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBKVENvbW1hbmQucHV0KGNvbW1hbmQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=