declare namespace com {
    interface JTIOption extends JTIChildOption, JTIChannelOption {
        channel(channel: JTIChannel): JTIChannelOption;
        updateConfigs(configs: any[]): void;
        launch(host: string, port: number): void;
    }
}
