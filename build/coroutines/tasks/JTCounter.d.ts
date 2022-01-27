declare namespace com {
    class JTCounter extends JTLocker {
        private _failCount;
        private _succeedCount;
        private _lockedCount;
        private _totalCount;
        constructor();
        setTotalCount(totalCount: number): void;
        release(): void;
        kill(): void;
        get totalCount(): number;
        get succeedCount(): number;
        get failCount(): number;
        get completed(): boolean;
        get lockedCount(): number;
        static create(): JTCounter;
        get progress(): number;
    }
}
