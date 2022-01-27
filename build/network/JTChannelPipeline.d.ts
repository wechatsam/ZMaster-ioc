declare namespace com {
    class JTChannelPipeline extends JTEventDispatcher implements JTIChannelPipeline {
        private _channel;
        private _pipelineMap;
        constructor();
        bind(channel: JTIChannel): JTIChannel;
        childOption(type: string, channelAdapter: JTIChannelAdapter): JTChannelPipeline;
        getOption(type: string): JTIChannelAdapter;
        launch(host: string, port: number): void;
        get channel(): JTIChannel;
    }
}
