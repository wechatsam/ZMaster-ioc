declare namespace com {
    abstract class JTChannel extends JTEventDispatcher implements JTIChannel {
        protected _cls: any;
        protected _port: number;
        protected _host: string;
        protected _channel: any;
        protected _pipeline: JTIChannelPipeline;
        protected _encoder: JTIEncoderAdapter;
        protected _decoder: JTIDecoderAdapter;
        protected _idleState: JTIChannelAdapter;
        constructor(cls: any);
        abstract flush(): void;
        abstract send(data: any): void;
        connect(host: string, port: number): any;
        reload(): void;
        bind(channelPipeline: JTIChannelPipeline): void;
        get pipeline(): JTIChannelPipeline;
        get host(): string;
        get port(): number;
    }
}
