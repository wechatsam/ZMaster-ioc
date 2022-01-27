/// <reference path="JTPool.d.ts" />
declare namespace com {
    class JTCachePool<T extends JTIPoolObject> extends JTPool<T> {
        protected _references: T[];
        constructor(cls: any);
        get(): T;
    }
}
