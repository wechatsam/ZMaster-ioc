declare namespace com {
    abstract class JTTaskFactory implements JTIFactory {
        abstract produce(): JTITaskExecutor;
    }
}
