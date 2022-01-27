declare namespace com {
    class JTEvent implements JTIPoolObject {
        private _caller;
        private _method;
        private _args;
        private _once;
        recycle(): void;
        setTo(caller: any, method: Function, args?: any, once?: Boolean): JTEvent;
        /**
        *执行处理器。
        */
        run(): any;
        /**
        *执行处理器，携带额外数据。
        *@param data 附加的回调数据，可以是单数据或者Array(作为多参)。
        */
        runWith(data: any): any;
        /**
        *清理对象引用。
        */
        clear(): JTEvent;
        /**
        *清理并回收到 Handler 对象池内。
        */
        recover(): void;
        get caller(): any;
        get method(): Function;
        get once(): Boolean;
        static get pool(): JTIPool;
        private static _pool;
        static create(caller: any, method: Function, args?: any, once?: Boolean): JTEvent;
        static put(command: JTEvent): void;
    }
}
