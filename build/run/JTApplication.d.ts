declare namespace com {
    abstract class JTApplication extends JTEventSignaler implements JTIOption {
        protected static _classMap: {
            [name: string]: any;
        };
        static PROTOCOL: string;
        static ERROR_MESSAGE: string;
        static TEMPLATE: string;
        static MAPPING: string;
        static SCENE: string;
        static LAYER: string;
        static RUNNER: string;
        static CHANNEL: string;
        static WEBSOCKET_CHANNEL: string;
        static HTTP_CHANNEL: string;
        static CHANNEL_PIPELINE: string;
        private static _locker;
        constructor();
        option(type: string, _extension: JTIClassExtension): JTIChildOption;
        protected builds(): void;
        channel(channel: JTIChannel): JTIChannelOption;
        childOption(type: string, channelAdapter: JTIChannelAdapter): JTIChannelOption;
        launch(host: string, port: number): void;
        loadSyncTemplates(list: any[]): void;
        updateConfigs(resources: any[]): void;
        registerClassAlias(key: string, extendsClass: any): JTIOption;
        getObject(key: string): any;
        static getExtendItem(key: string): any;
    }
}
