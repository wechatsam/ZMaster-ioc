declare module com {
    /**
     * 注入装饰器
     * @param cls 注入的单例类
     * @param destroyed 引用计数为0时，是否自动销毁
     */
    function SingletonClass(cls: any, destroyed?: boolean): Function;
    function registerSingletonClassAlias(cls: any, target: any, property: string, destroyed?: boolean): void;
}
