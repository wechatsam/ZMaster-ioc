declare namespace com {
    abstract class JTTaskTimer extends JTEventDispatcher implements JTITaskTimer {
        protected _currentTick: number;
        protected _interval: number;
        protected _totalTimes: number;
        protected _currentTimes: number;
        protected _running: boolean;
        constructor(interval?: number, loop?: number);
        reset(): void;
        updateTick(tick: number): void;
        get running(): boolean;
        recycle(): void;
    }
}
