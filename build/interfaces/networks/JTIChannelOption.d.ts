declare namespace com {
    interface JTIChannelOption {
        childOption(type: string, channelAdapter: JTIChannelAdapter): JTIChannelOption;
    }
}
