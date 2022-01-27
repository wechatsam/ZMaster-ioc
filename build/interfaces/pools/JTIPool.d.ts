declare namespace com {
    interface JTIPool {
        get(): JTIPoolObject;
        put(item: JTIPoolObject): void;
        totalCount: number;
        size: number;
    }
}
