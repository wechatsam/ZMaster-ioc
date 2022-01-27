declare namespace com {
    class JTTimerTool {
        static defaultTimer: JTTimerTool;
        static animationTimer: JTTimerTool;
        static logicTimer: JTTimerTool;
        private _pause;
        private _tasks;
        private _currentTime;
        private static _frameRate;
        private static _frameRateTime;
        static FAST_RATE: string;
        static NORMAL_RATE: string;
        static SLOWY_RATE: string;
        static FAST_FRAME_RATE: number;
        static NORMAL_FRAME_RATE: number;
        static SLOWY_FRAME_RATE: number;
        constructor();
        static launch(rate?: string): void;
        static get frameRate(): number;
        static get frameRateTime(): number;
        stop(): void;
        static actives(): void;
        /**
         * 如果要使用优化计时器，需要外部计时器回调函数调用此方法
         */
        active(): void;
        protected syncTasksTick(tick: number): void;
        protected updateTasks(): void;
        addTask(task: JTITaskTimer): void;
        removeTask(task: JTITaskTimer): void;
        put(task: JTITaskTimer): void;
    }
}
