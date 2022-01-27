declare namespace com {
    class JTLocalCache implements JTIPoolObject {
        private _dataMap;
        private _name;
        private static localCache;
        /**
         * 通过名字来获取本地缓存对象。
         */
        constructor(name: string);
        set name(value: string);
        setObject(key: string, data: any): void;
        getObject(key: string): any;
        hasKey(key: string): boolean;
        delete(key: string): void;
        private update;
        clean(): void;
        recycle(): void;
        get dataMap(): Object;
    }
}
