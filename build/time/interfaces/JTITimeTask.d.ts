declare namespace com {
    interface JTITaskTimer {
        updateTick(tick: number): void;
        running: boolean;
    }
}
