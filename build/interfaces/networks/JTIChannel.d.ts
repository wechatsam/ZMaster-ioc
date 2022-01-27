declare namespace com {
    interface JTIChannel {
        host: string;
        port: number;
        pipeline: JTIChannelPipeline;
        reload(): void;
        bind(channelPipeline: JTIChannelPipeline): void;
        flush(): void;
        send(data: any): void;
        connect(host: string, port: number): any;
    }
}