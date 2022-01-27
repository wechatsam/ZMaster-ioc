declare namespace com {
    class JTSendPackage implements JTIPoolObject {
        private _content;
        private _data;
        private _protocol;
        private _channel;
        writeProtocol(protocol: number): void;
        write(key: string, value: Object): void;
        get content(): Object;
        get protocol(): number;
        send(): void;
        setup(channel: JTIChannel): void;
        recycle(): void;
        static get pool(): JTIPool;
        private static _pool;
        static begin(): JTSendPackage;
        static put(sendPackage: JTSendPackage): void;
    }
}
