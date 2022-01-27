declare namespace com {
    interface JTIChannelAdapter extends JTIEventDispatcher {
        channel: JTIChannel;
        channelActive(): void;
        bind(channelPipeline: JTIChannelPipeline): void;
        getOption(type: string): JTIChannelAdapter;
    }
}
