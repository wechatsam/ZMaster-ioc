declare namespace com {
    interface JTITaskExecutor extends JTITask {
        relevance(counter: JTCounter): void;
    }
}
