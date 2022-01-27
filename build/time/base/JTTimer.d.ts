declare namespace com {
    class JTTimer extends JTTaskTimer implements JTITimer {
        constructor(interval?: number, loop?: number);
        setup(interval: number, loop?: number): void;
        start(): void;
        stop(): void;
        get totalCount(): number;
        get currentCount(): number;
        set currentCount(value: number);
        get interval(): number;
        set interval(value: number);
        static create(interval: number, loop: number): JTITimer;
        static put(timer: JTITimer): void;
    }
}
