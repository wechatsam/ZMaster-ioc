
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/events/JTEventDispatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGV2ZW50c1xcSlRFdmVudERpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0E4SFo7SUE5SEQsV0FBVSxHQUFHO1FBRVQ7WUFHSTtnQkFEVyxhQUFRLEdBQVUsSUFBSSxDQUFDO1lBR2xDLENBQUM7WUFFRCxtQ0FBTyxHQUFQO2dCQUVJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQixDQUFDO1lBRU0sNENBQWdCLEdBQXZCLFVBQXdCLEdBQU8sRUFBRSxNQUFlLEVBQUUsTUFBVSxFQUFFLElBQWE7Z0JBRXZFLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksSUFBSSxFQUNSO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUVoQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFDbkU7NEJBRUksT0FBUTt5QkFDWDtvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjtxQkFFRDtvQkFDSSxJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjtnQkFDRCxJQUFJLE9BQU8sR0FBYSxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFFTSx5Q0FBYSxHQUFwQixVQUFxQixHQUFPLEVBQUUsSUFBUztnQkFBdkMsaUJBa0JDO2dCQWhCRyxJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLElBQUksRUFDUjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzt3QkFFaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksRUFDaEI7NEJBQ0ksS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQzlCO29CQUNMLENBQUMsQ0FBQyxDQUFDO2lCQUNOO3FCQUVEO2lCQUVDO1lBQ0wsQ0FBQztZQUVNLCtDQUFtQixHQUExQixVQUEyQixHQUFPLEVBQUUsTUFBZSxFQUFFLE1BQVU7Z0JBQS9ELGlCQWNDO2dCQVpHLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksSUFBSSxFQUNSO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUVoQixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFDbkU7NEJBQ0ksS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7eUJBQzlCO29CQUNMLENBQUMsQ0FBQyxDQUFDO2lCQUVOO1lBQ0wsQ0FBQztZQUVNLHdDQUFZLEdBQW5CLFVBQW9CLEdBQU87Z0JBQTNCLGlCQWVDO2dCQWJHLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksSUFBSSxFQUNSO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUVoQixJQUFJLE9BQU8sRUFDWDs0QkFDSSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzt5QkFDOUI7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDNUI7WUFDTCxDQUFDO1lBRVMsa0NBQU0sR0FBaEIsVUFBaUIsSUFBZ0IsRUFBRSxPQUFpQjtnQkFFNUMsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekMsSUFBSSxPQUFPLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDaEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBRVMsbUNBQU8sR0FBakI7Z0JBV0ksS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUMzQjtvQkFDUSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUN2QixDQUFDO1lBRUQsc0JBQVcscUNBQU07cUJBQWpCO29CQUVJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUNsQjt3QkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztxQkFDdEI7b0JBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDOzs7ZUFBQTtZQUVMLHdCQUFDO1FBQUQsQ0EzSEEsQUEySEMsSUFBQTtRQTNIWSxxQkFBaUIsb0JBMkg3QixDQUFBO0lBQ0wsQ0FBQyxFQTlIUyxHQUFHLEtBQUgsR0FBRyxRQThIWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBKVEV2ZW50RGlzcGF0Y2hlciBpbXBsZW1lbnRzIEpUSVBvb2xPYmplY3QsIEpUSUV2ZW50RGlzcGF0Y2hlclxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCAgX19ldnRNYXA6T2JqZWN0ID0gbnVsbDtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjeWNsZSgpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihrZXk6YW55LCBtZXRob2Q6RnVuY3Rpb24sIGNhbGxlcjphbnksIG9uY2U/OmJvb2xlYW4pOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0OkpUQ29tbWFuZFtdID0gdGhpcy5ldnRNYXBba2V5XTsvL+WPquacieWcqOazqOWGjOeahOaXtuWAmeiwg+eUqGdldOaWueazle+8jOazqOWFpeS6i+S7tuebkeWQrOaXtu+8jOS6i+S7tk1BUOS8muS4um51bGxcclxuICAgICAgICAgICAgaWYgKGxpc3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChlbGVtZW50ID0+IFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubWV0aG9kID09IG1ldGhvZCAmJiBlbGVtZW50LmNhbGxlciA9PSBjYWxsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBKVExvZ2dlci5pbmZvKFwiW0pURnVuY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyRnVuY3Rpb25dIFRoZSBrZXlcIisga2V5ICtcIiBmdW5jdGlvbiBhbHJlYWR5IHJlZ2lzdGVyZWQgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2V2dE1hcFtrZXldID0gbGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY29tbWFuZDpKVENvbW1hbmQgPSBKVENvbW1hbmQuY3JlYXRlKGNhbGxlciwgbWV0aG9kLCBudWxsLCBvbmNlKTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGNvbW1hbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRpc3BhdGNoRXZlbnQoa2V5OmFueSwgYXJncz86YW55KTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgbGlzdDpKVENvbW1hbmRbXSA9IHRoaXMuZXZ0TWFwW2tleV07XHJcbiAgICAgICAgICAgIGlmIChsaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goY29tbWFuZCA9PiBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tYW5kICYmIGNvbW1hbmQucnVuV2l0aChhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLm9uY2UpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShsaXN0LCBjb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEpUTG9nZ2VyLmluZm8oXCJbSlRGdW5jdGlvbk1hbmFnZXIuZXhlY3V0ZV0gQ2FudCBmaW5kIHRoZSBmdW5jdGlvbiBieSBrZXkgOiBcIiArIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGtleTphbnksIG1ldGhvZDpGdW5jdGlvbiwgY2FsbGVyOmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxpc3Q6SlRDb21tYW5kW10gPSB0aGlzLmV2dE1hcFtrZXldO1xyXG4gICAgICAgICAgICBpZiAobGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5tZXRob2QgPT0gbWV0aG9kICYmIGVsZW1lbnQuY2FsbGVyID09IGNhbGxlcilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGxpc3QsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZW1vdmVFdmVudHMoa2V5OmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGxpc3Q6SlRDb21tYW5kW10gPSB0aGlzLmV2dE1hcFtrZXldO1xyXG4gICAgICAgICAgICBpZiAobGlzdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZShsaXN0LCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19ldnRNYXBba2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fX2V2dE1hcFtrZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBkZWxldGUobGlzdDpKVENvbW1hbmRbXSwgY29tbWFuZDpKVENvbW1hbmQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXg6bnVtYmVyID0gbGlzdC5pbmRleE9mKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZXM6SlRDb21tYW5kW10gPSBsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBKVENvbW1hbmQucHV0KGNvbW1hbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlbW92ZXMoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2V2ZW50TWFwLmZvckVhY2goKHZhbHVlLCBrZXkpPT57XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5yZW1vdmVFdmVudHMoa2V5KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZS5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAvLyB0aGlzLl9ldmVudE1hcC5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5fZXZlbnRNYXAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZXZ0TWFwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudHMoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9fZXZ0TWFwID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGV2dE1hcCgpOk9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9fZXZ0TWFwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZXZ0TWFwID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19ldnRNYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19