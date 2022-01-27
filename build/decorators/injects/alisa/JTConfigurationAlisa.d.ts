declare module com {
    class JTConfigurationAlisa extends JTClassAlias {
        private _referenceMap;
        private _referenceCount;
        private _destroyed;
        private _parameter;
        constructor(cls: any, parameters: any);
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
