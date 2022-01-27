declare module com {
    /**
     * 与JTResponse一样可能由于装饰器模式下，提前注入方法，所以使用项目的静态变量无法使用，没有扫描到
     * 通知更新视图
     * @param eventType 事件类型
     * @returns
     */
    function NotifyUpdate(eventType: string): Function;
}
