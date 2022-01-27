declare namespace com {
    class JTItemProtocol {
        private _isWaiting;
        private _securityOption;
        private _protocol;
        constructor(protocol: number);
        setup(isWaiting: boolean, security?: string): void;
        static create(protocol: number, isWaiting: boolean, security?: string): JTItemProtocol;
        get protocol(): number;
        get securityOption(): string;
        get isWaiting(): boolean;
        hide(message: any): void;
        decrypt(message: any): any;
    }
}
