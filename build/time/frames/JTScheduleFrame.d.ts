declare namespace com {
    /**
     * 帧均摊--利用帧频间隔来进行渲染图像/或者计算数据
     *
     */
    class JTScheduleFrame extends JTEnterFrame implements JTIScheduleFrame {
        private _frames;
        private _createFrames;
        constructor();
        get currentItem(): any;
        get frames(): any[];
        set createFrames(value: JTEvent);
        play(totalFrames: number, loop?: number, frameRate?: number): void;
        recycle(): void;
        static create(): JTIScheduleFrame;
        static put(timer: JTIScheduleFrame): void;
    }
}
