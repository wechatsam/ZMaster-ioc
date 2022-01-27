declare namespace com {
    class JTReceivePackage implements JTIReceivePackage {
        private _content;
        private _data;
        private _protocol;
        private _status;
        private _errorCode;
        get content(): Object;
        get protocol(): number;
        get status(): number;
        get errorCode(): number;
        readPackage(data: any): void;
        recycle(): void;
        static get pool(): JTIPool;
        private static _pool;
        static read(data: any): JTReceivePackage;
        static put(receivePackage: JTReceivePackage): void;
    }
}
