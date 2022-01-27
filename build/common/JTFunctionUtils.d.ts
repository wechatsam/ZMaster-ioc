declare namespace com {
    function execute(key: string, args?: string): void;
    function dispatchEvent(key: string, args: any): void;
    function info(...msgs: any[]): void;
    function error(...msgs: any[]): void;
    function debug(...msgs: any[]): void;
    function assets(flag: Boolean, ...msgs: any[]): void;
}
