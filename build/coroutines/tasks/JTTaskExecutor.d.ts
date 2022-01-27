declare namespace com {
    abstract class JTTaskExecutor extends JTTask implements JTITaskExecutor {
        private _counter;
        relevance(counter: JTCounter): void;
        protected release(): void;
        protected kill(): void;
        recycle(): void;
    }
}
