declare module com {
    class JTSingletonPoolAlias extends JTClassAlias {
        private _referenceMap;
        private _referenceCount;
        private _destroyed;
        private _itemCls;
        constructor(cls: any, itemCls: any, destroyed?: boolean);
        recycle(): void;
        /**
         * 建立引用关系
         * @param target 引用的对象
         * @param property 引用对象属性名
         */
        relevance(): void;
        get instance(): any;
    }
}
