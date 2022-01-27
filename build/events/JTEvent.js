"use strict";
var com;
(function (com) {
    class JTEvent {
        constructor() {
            this._caller = null;
            this._method = null;
            this._args = null;
            this._once = false;
        }
        recycle() {
            this._caller = this._method = this._args = null;
        }
        setTo(caller, method, args, once = false) {
            this._caller = caller;
            this._method = method;
            this._args = args;
            this._once = once;
            return this;
        }
        /**
        *执行处理器。
        */
        run() {
            if (this._method == null)
                return null;
            var result = this._method.apply(this._caller, this._args);
            this._once && this.recover();
            return result;
        }
        /**
        *执行处理器，携带额外数据。
        *@param data 附加的回调数据，可以是单数据或者Array(作为多参)。
        */
        runWith(data) {
            if (this._method == null)
                return null;
            if (data == null)
                var result = this._method.apply(this._caller, this._args);
            else if (!this._args && !data.unshift)
                result = this._method.call(this._caller, data);
            else if (this._args)
                result = this._method.apply(this._caller, this._args.concat(data));
            else
                result = this._method.apply(this._caller, data instanceof Array ? [data] : data); //调用apply时，不管参数是否为数组，方法自动会认为参数为数组，所以传入数组时，一定要判断
            this._once && this.recover();
            return result;
        }
        /**
        *清理对象引用。
        */
        clear() {
            this._method = this._args = this._caller = null;
            return this;
        }
        /**
        *清理并回收到 Handler 对象池内。
        */
        recover() {
            this.clear();
        }
        get caller() {
            return this._caller;
        }
        get method() {
            return this._method;
        }
        get once() {
            return this._once;
        }
        static get pool() {
            if (!this._pool) {
                this._pool = com.JTPool.instance(JTEvent);
            }
            return this._pool;
        }
        static create(caller, method, args, once = false) {
            var command = this.pool.get();
            command.setTo(caller, method, args, once);
            return command;
        }
        static put(command) {
            this.pool.put(command);
        }
    }
    JTEvent._pool = null;
    com.JTEvent = JTEvent;
})(com || (com = {}));
