declare namespace com {
    class JTScheduleTimer extends JTTimer implements JTIScheduleTimer {
        private _dataList;
        constructor(interval: number, dataList: any[]);
        setup(interval: number): void;
        get currentItem(): any;
        get dataList(): any[];
        recycle(): void;
        static create(interval: number, loop: number): JTIScheduleTimer;
        static put(timer: JTITimer): void;
    }
}
