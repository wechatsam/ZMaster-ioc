declare namespace com {
    /***
     * 事件信号器 --- 基于全局函数派发执行，
     */
    class JTEventSignaler {
        protected _eventMap: Object;
        protected _functionMap: {
            [key: number]: any;
        };
        constructor();
        recycle(): void;
        protected injectEventMap(): void;
        protected injectFunctionMap(): void;
        addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        dispatchEvent(key: any, args?: any): void;
        removeEventListener(key: any, method: Function, caller: any): void;
        protected removeEvents(): void;
        registerFunction(key: any, method: Function, caller: any, once?: boolean): void;
        execute(key: any, args?: any): void;
        removeFunction(key: any, method: Function, caller: any): void;
        protected removeFunctions(): void;
    }
}
