declare namespace com {
    class JTPool<T extends JTIPoolObject> implements JTIPool {
        private static _poolMap;
        protected _cls: any;
        protected _list: T[];
        protected _totalCount: number;
        protected _size: number;
        constructor(cls: any);
        get(): T;
        put(item: T): void;
        get totalCount(): number;
        get size(): number;
        static instance(cls: any): JTIPool;
    }
}
