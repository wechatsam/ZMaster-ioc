declare module com {
    /**
     * 注入装饰器
     * @param poolCls
     * @param itemCls 注入的单例类
     * @param destroyed 引用计数为0时，是否自动销毁
     */
    function SingletonPool(poolCls: any, itemCls: any, destroyed?: boolean): Function;
    function registerSingletonPoolAlisa(poolCls: any, target: any, property: string, itemCls: any, destroyed?: boolean): void;
}
