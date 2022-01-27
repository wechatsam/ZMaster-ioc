declare namespace com {
    class JTEventManager {
        protected static _eventMap: Object;
        constructor();
        static recycle(): void;
        static addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        static dispatchEvent(key: any, args?: any): void;
        static removeEventListener(key: any, method: Function, caller: any): void;
        static removeEvents(key: any): void;
        protected static delete(list: JTEvent[], command: JTEvent): void;
        protected static removes(): void;
    }
}
