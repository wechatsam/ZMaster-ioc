"use strict";
/*
* name;
*/
var com;
(function (com) {
    /**
     * 可能由于装饰器模式下，提前注入方法，所以使用项目的静态变量无法使用，没有扫描到
     * 请求响应 只响应全局事件JTFunctionManager
     * @param protocol 协议号，目前只支持长连接请求---WebSocket
     * @returns
     */
    function Response(protocol, waitingbar = true) {
        return function (target, property, descripter) {
            let signaler = target;
            signaler["injectFunctionMap"](); //由于装饰器注入的对象是单例时，此方法生效（装鉓器的对象有多个时，未测试）因为该对象并未实例化，装饰器
            signaler.registerFunction(protocol, target[property], target);
        };
    }
    com.Response = Response;
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
    function ResponseMapping(protocol, __mapperClass, createFromPool = false, waitingbar = true) {
        return function (target, property, descripter) {
            let signaler = target;
            signaler["injectFunctionMap"](); //由于装饰器注入的对象是单例时，此方法生效（装鉓器的对象有多个时，未测试）因为该对象并未实例化，装饰器
            com.JTResponseMapping["mappingMap"][protocol] = new com.JTClassMapper(__mapperClass, createFromPool); //注入MAPPER 映射
            signaler.registerFunction(protocol, target[property], target);
        };
    }
    com.ResponseMapping = ResponseMapping;
})(com || (com = {}));
