declare module com {
    class JTDecoratorUtils {
        private static _bindedMap;
        static DECORATOR_KEY: string;
        /**
         * 标记当前对象哪些属性进行了注入
         * @param cls 注入的类型
         * @param target 注入的类
         * @param property 被注入的属性名
         * @returns 返回注入关键字+属性名 __c.decorator__
         */
        static registerClassAlias(target: any, property: string): string;
        /**
         * 全局单例--一个项目中只能存在一份实例（以cls做为参照对象）
         * @param cls
         * @param destroyed
         * @returns
         */
        static bind(cls: any, destroyed?: boolean): JTClassAlias;
        static bindPool(poolCls: any, itemCls: any, destroyed?: boolean): JTClassAlias;
        static bindTemplate(cls: any, parameters: any): JTClassAlias;
        static getClassAlisa(cls: any): JTClassAlias;
    }
}
