declare namespace com {
    abstract class JTAbstractChannelAdapter extends JTEventDispatcher implements JTIChannelAdapter {
        protected _channel: JTIChannel;
        protected _channelPipeline: JTIChannelPipeline;
        constructor();
        getOption(type: string): JTIChannelAdapter;
        abstract channelActive(): void;
        get channel(): JTIChannel;
        bind(channelPipeline: JTIChannelPipeline): void;
    }
}
