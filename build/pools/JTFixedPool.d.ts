/// <reference path="JTPool.d.ts" />
/**
 *
 */
declare namespace com {
    class JTFixedPool<T extends JTIPoolObject> extends JTPool<T> {
        private _fixedCount;
        constructor(cls: any, fixedCount?: number);
        set fixedCount(value: number);
        protected create(): void;
        get(): T;
        /***
         * 检查池是否满了，如果满了，对象池则不会创建对象。
         * */
        get fullPool(): boolean;
    }
}
