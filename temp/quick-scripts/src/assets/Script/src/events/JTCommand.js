"use strict";
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