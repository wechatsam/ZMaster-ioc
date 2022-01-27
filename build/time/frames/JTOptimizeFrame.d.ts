declare namespace com {
    class JTOptimizeFrame extends JTEnterFrame {
        private MAX_DELAY_TIME;
        constructor();
        updateTick(tick: number): void;
        private adjustFrameRate;
    }
}
