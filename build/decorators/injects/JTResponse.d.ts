declare module com {
    /**
     * 可能由于装饰器模式下，提前注入方法，所以使用项目的静态变量无法使用，没有扫描到
     * 请求响应 只响应全局事件JTFunctionManager
     * @param protocol 协议号，目前只支持长连接请求---WebSocket
     * @returns
     */
    function Response(protocol: number, waitingbar?: boolean): Function;
    /**
     *
     *
     * @param protocol
     * @returns
     */
    /**
     * 请求响应 只响应全局事件JTFunctionManager
     * @param protocol 协议号，目前只支持长连接请求---WebSocket
     * @param __mapperClass 映射结果的数据Class类
     * @param createFromPool true 是否由对象池创建，如果由对象池创建，当前函数执行完将自动清空回收，false 则由new 创建
     * @param waitingbar
     * @returns
     */
    function ResponseMapping(protocol: number, __mapperClass: any, createFromPool?: boolean, waitingbar?: boolean): Function;
}
