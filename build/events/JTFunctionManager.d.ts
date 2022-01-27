declare namespace com {
    class JTFunctionManager {
        private static _eventMap;
        static registerFunction(key: any, method: Function, caller: any, once?: boolean): void;
        static addCommand(key: any, command: JTEvent): void;
        static execute(key: any, args?: any): void;
        static removeFunction(key: any, method: Function, caller: any): void;
        static removeFunctions(key: any): void;
        private static delete;
    }
}
