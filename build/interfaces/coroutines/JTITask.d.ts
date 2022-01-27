declare namespace com {
    interface JTITask extends JTIPoolObject {
        execute(): Promise<any>;
    }
}
