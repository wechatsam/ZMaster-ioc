declare namespace com {
    class JTTextLoader {
        private static _dataMap;
        private _url;
        private _class;
        private _urlLoader;
        private _dataMap;
        private _values;
        private _datas;
        /**
         * 字符串解析方式
         */
        static PARSE_STRING: string;
        /**
          * 二进制流解析方式
          */
        static PARSE_BINARY: string;
        /**
          * ZIP包解析方式
          */
        static PARSE_ZIP: string;
        /**
         * 默认加载方法
         */
        static LOAD_DEFAULT: string;
        /**
         * 已加载完成-需要调用解析模式即可
         */
        static LOADED_PARSE: string;
        constructor(url?: string, cls?: any);
        load(url: string, cls: any): void;
        parseZip(data: any, cls: any): void;
        parseBinary(data: any, cls: any): void;
        parseStr(data: string, cls: any): void;
        private onloadComplete;
        private onloadError;
        toValues<T extends JTBaseTemplate>(): T[];
        toValue<T extends JTBaseTemplate>(key: string): T;
    }
}
