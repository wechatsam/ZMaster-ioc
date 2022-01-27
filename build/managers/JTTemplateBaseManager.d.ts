declare namespace com {
    abstract class JTTemplateBaseManager extends JTClassExtension {
        _configMap: {
            [url: string]: any;
        };
        constructor();
        abstract updateConfigs(configs: any[]): void;
        build(): void;
        put(url: string, data: any): void;
        getValue(url: string): any;
    }
}
