declare namespace com {
    class JTEnterFrame extends JTTaskTimer implements JTIEnterFrame {
        protected _frameRate: number;
        protected _loop: number;
        protected _loopTimes: number;
        constructor();
        get loop(): number;
        get frameRate(): number;
        setup(totalFrames: number, loop?: number, frameRate?: number): void;
        play(totalFrames: number, loop?: number, frameRate?: number): void;
        gotoAndPlay(frameRate: number, loop?: number): void;
        gotoAndStop(): void;
        stop(): void;
        pause(): void;
        get currentLoop(): number;
        get currentFrame(): number;
        get totalFrame(): number;
        updateTick(tick: number): void;
        static create(): JTIEnterFrame;
        static put(timer: JTIEnterFrame): void;
    }
}
