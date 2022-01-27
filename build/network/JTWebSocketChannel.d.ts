declare namespace com {
    class JTWebSocketChannel extends JTChannel {
        protected _connected: boolean;
        protected _buffers: any[];
        constructor(cls: any);
        flush(): void;
        send(data: any): void;
        connect(host: string, port: number): any;
        protected onConnectSucceed(e: any): void;
        protected onReceiveMessage(data: any): void;
        protected onCloseHandler(e: any): void;
        protected onErrorHandler(e: any): void;
    }
}
