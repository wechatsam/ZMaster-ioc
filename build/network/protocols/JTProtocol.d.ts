declare namespace com {
    class JTProtocol implements JTIProtocol {
        private _protocols;
        private _encrypts;
        private _protocolMap;
        static NORMAL: number;
        static ERROR: number;
        constructor();
        build(): void;
        /**
         *
         * @param protocol 协议号
         * @param waiting 是否显示隐藏通信转圈
         * @param encrypt 是否显示加解密的转圈
         */
        registerProtocol(protocol: number, waiting: boolean, security?: string): void;
        /**
         * 同时拥有加解密功能的协议号列表
         *
         */
        get protocols(): number[];
        get encrypts(): number[];
        getProtocol(protocol: number): JTItemProtocol;
        execute(message: any): void;
    }
}
