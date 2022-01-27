declare namespace com {
    class JTLogger {
        private static LOG_INFO;
        private static LOG_ASSET;
        private static LOG_DEBUG;
        private static LOG_ERROR;
        static info(...msgs: any[]): void;
        static debug(...msgs: any[]): void;
        static assert(flag: Boolean, ...msgs: any[]): void;
        static error(...msgs: any[]): void;
        private static print;
    }
}
