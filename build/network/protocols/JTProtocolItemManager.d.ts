declare namespace com {
    class JTProtocolItemManager extends JTClassExtension {
        protocolUp: JTIProtocol;
        downProtocol: JTIProtocol;
        constructor();
        build(): void;
        /**
         * 注册下行协议
         * @param protocol 协议号
         * @param waiting 是否显示转圈
         * @param security 加密方式
         */
        registerDownProtocol(protocol: number, waiting: boolean, security?: string): void;
        /**
         * 注册上行协议
         * @param protocol 协议号
         * @param waiting 是否显示转圈
         * @param security 解密方式
         */
        registerUpProtocol(protocol: number, waiting: boolean, security?: string): void;
        bind(classUp: any, classDown: any): void;
    }
}
