
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/events/JTCommand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0183fmG455Ir6b9bnSUWxI2', 'JTCommand');
// Script/src/events/JTCommand.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTCommand = (function () {
            function JTCommand() {
                this._caller = null;
                this._method = null;
                this._args = null;
                this._once = false;
            }
            JTCommand.prototype.recycle = function () {
                this._caller = this._method = this._args = null;
            };
            JTCommand.prototype.setTo = function (caller, method, args, once) {
                if (once === void 0) { once = false; }
                this._caller = caller;
                this._method = method;
                this._args = args;
                this._once = once;
                return this;
            };
            JTCommand.prototype.run = function () {
                if (this._method == null)
                    return null;
                var result = this._method.apply(this._caller, this._args);
                this._once && this.recover();
                return result;
            };
            JTCommand.prototype.runWith = function (data) {
                if (this._method == null)
                    return null;
                if (data == null)
                    var result = this._method.apply(this._caller, this._args);
                else if (!this._args && !data.unshift)
                    result = this._method.call(this._caller, data);
                else if (this._args)
                    result = this._method.apply(this._caller, this._args.concat(data));
                else
                    result = this._method.apply(this._caller, data instanceof Array ? [data] : data);
                this._once && this.recover();
                return result;
            };
            JTCommand.prototype.clear = function () {
                this._method = this._args = this._caller = null;
                return this;
            };
            JTCommand.prototype.recover = function () {
                this.clear();
            };
            Object.defineProperty(JTCommand.prototype, "caller", {
                get: function () {
                    return this._caller;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTCommand.prototype, "method", {
                get: function () {
                    return this._method;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTCommand.prototype, "once", {
                get: function () {
                    return this._once;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTCommand, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTCommand);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTCommand.create = function (caller, method, args, once) {
                if (once === void 0) { once = false; }
                var command = this.pool.get();
                command.setTo(caller, method, args, once);
                return command;
            };
            JTCommand.put = function (command) {
                this.pool.put(command);
            };
            JTCommand._pool = null;
            return JTCommand;
        }());
        com.JTCommand = JTCommand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGV2ZW50c1xcSlRDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBd0daO0lBeEdELFdBQVUsR0FBRztRQUVUO1lBQUE7Z0JBRVksWUFBTyxHQUFPLElBQUksQ0FBQztnQkFDbkIsWUFBTyxHQUFZLElBQUksQ0FBQztnQkFDeEIsVUFBSyxHQUFPLElBQUksQ0FBQztnQkFDakIsVUFBSyxHQUFXLEtBQUssQ0FBQztZQWdHbEMsQ0FBQztZQTlGVSwyQkFBTyxHQUFkO2dCQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwRCxDQUFDO1lBRU0seUJBQUssR0FBWixVQUFhLE1BQVUsRUFBRSxNQUFlLEVBQUUsSUFBUyxFQUFFLElBQW9CO2dCQUFwQixxQkFBQSxFQUFBLFlBQW9CO2dCQUVyRSxJQUFJLENBQUMsT0FBTyxHQUFFLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUtNLHVCQUFHLEdBQVY7Z0JBRUksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUk7b0JBQUUsT0FBTyxJQUFJLENBQUM7Z0JBQ3RDLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsT0FBTyxNQUFNLENBQUM7WUFDbEIsQ0FBQztZQU1N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IGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUQ29tbWFuZCBpbXBsZW1lbnRzIEpUSVBvb2xPYmplY3RcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIF9jYWxsZXI6YW55ID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIF9tZXRob2Q6RnVuY3Rpb24gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgX2FyZ3M6YW55ID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIF9vbmNlOkJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHVibGljIHJlY3ljbGUoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxlciA9IHRoaXMuX21ldGhvZCA9IHRoaXMuX2FyZ3MgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldFRvKGNhbGxlcjphbnksIG1ldGhvZDpGdW5jdGlvbiwgYXJncz86YW55LCBvbmNlOkJvb2xlYW4gPSBmYWxzZSk6SlRDb21tYW5kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jYWxsZXIgPWNhbGxlcjtcclxuICAgICAgICAgICAgdGhpcy5fbWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgICAgICB0aGlzLl9hcmdzID0gYXJncztcclxuICAgICAgICAgICAgdGhpcy5fb25jZSA9IG9uY2U7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKuaJp+ihjOWkhOeQhuWZqOOAglxyXG4gICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHJ1bigpOmFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21ldGhvZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdD10aGlzLl9tZXRob2QuYXBwbHkodGhpcy5fY2FsbGVyLCB0aGlzLl9hcmdzKTtcclxuICAgICAgICAgICAgdGhpcy5fb25jZSAmJiB0aGlzLnJlY292ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgKuaJp+ihjOWkhOeQhuWZqO+8jOaQuuW4pumineWkluaVsOaNruOAglxyXG4gICAgICAgICAgICAqQHBhcmFtIGRhdGEg6ZmE5Yqg55qE5Zue6LCD5pWw5o2u77yM5Y+v5Lul5piv5Y2V5pWw5o2u5oiW6ICFQXJyYXko5L2c5Li65aSa5Y+CKeOAglxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBydW5XaXRoKGRhdGEpOmFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21ldGhvZCA9PSBudWxsKXJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX21ldGhvZC5hcHBseSh0aGlzLl9jYWxsZXIsIHRoaXMuX2FyZ3MpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5fYXJncyAmJiAhZGF0YS51bnNoaWZ0KXJlc3VsdCA9IHRoaXMuX21ldGhvZC5jYWxsKHRoaXMuX2NhbGxlciwgZGF0YSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2FyZ3MpcmVzdWx0ID0gdGhpcy5fbWV0aG9kLmFwcGx5KHRoaXMuX2NhbGxlciwgdGhpcy5fYXJncy5jb25jYXQoZGF0YSkpO1xyXG4gICAgICAgICAgICBlbHNlIHJlc3VsdCA9IHRoaXMuX21ldGhvZC5hcHBseSh0aGlzLl9jYWxsZXIsIGRhdGEgaW5zdGFuY2VvZiBBcnJheSA/IFtkYXRhXSA6IGRhdGEpOyAvL+iwg+eUqGFwcGx55pe277yM5LiN566h5Y+C5pWw5piv5ZCm5Li65pWw57uE77yM5pa55rOV6Ieq5Yqo5Lya6K6k5Li65Y+C5pWw5Li65pWw57uE77yM5omA5Lul5Lyg5YWl5pWw57uE5pe277yM5LiA5a6a6KaB5Yik5patXHJcbiAgICAgICAgICAgIHRoaXMuX29uY2UgJiYgdGhpcy5yZWNvdmVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAq5riF55CG5a+56LGh5byV55So44CCXHJcbiAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgY2xlYXIoKTpKVENvbW1hbmRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX21ldGhvZCA9IHRoaXMuX2FyZ3MgPSB0aGlzLl9jYWxsZXIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICrmuIXnkIblubblm57mlLbliLAgSGFuZGxlciDlr7nosaHmsaDlhoXjgIJcclxuICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWNvdmVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgY2FsbGVyKCk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBtZXRob2QoKTpGdW5jdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21ldGhvZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgb25jZSgpOkJvb2xlYW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgcG9vbCgpOkpUSVBvb2xcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9wb29sKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb29sID0gSlRQb29sLmluc3RhbmNlKEpUQ29tbWFuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9wb29sOkpUSVBvb2wgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKGNhbGxlcjphbnksIG1ldGhvZDpGdW5jdGlvbiwgYXJncz86YW55LCBvbmNlOkJvb2xlYW4gPSBmYWxzZSk6SlRDb21tYW5kXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY29tbWFuZDpKVENvbW1hbmQgPSB0aGlzLnBvb2wuZ2V0KCkgYXMgSlRDb21tYW5kO1xyXG4gICAgICAgICAgICBjb21tYW5kLnNldFRvKGNhbGxlciwgbWV0aG9kLCBhcmdzLCBvbmNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHB1dChjb21tYW5kOkpUQ29tbWFuZCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sLnB1dChjb21tYW5kKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=