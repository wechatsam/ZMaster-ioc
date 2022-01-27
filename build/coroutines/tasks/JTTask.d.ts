declare namespace com {
    abstract class JTTask implements JTITask {
        abstract execute(): Promise<any>;
        recycle(): void;
    }
}
