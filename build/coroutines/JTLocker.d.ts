declare namespace com {
    class JTLocker implements JTIPoolObject {
        protected _resolve: Function;
        protected _reject: Function;
        protected _locker: Promise<any>;
        lock(): Promise<any>;
        release(): void;
        kill(): void;
        locked(): boolean;
        tryLock(): Promise<any>;
        recycle(): void;
        static create(): JTLocker;
    }
}
