declare namespace com {
    class JTEventDispatcher implements JTIPoolObject, JTIEventDispatcher {
        protected _eventMap: Object;
        constructor();
        recycle(): void;
        addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        dispatchEvent(key: any, args?: any): void;
        removeEventListener(key: any, method: Function, caller: any): void;
        removeEvents(key: any): void;
        protected delete(list: JTEvent[], command: JTEvent): void;
        protected removes(): void;
    }
}
