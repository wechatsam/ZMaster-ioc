declare namespace com {
    class JTHttpChannel extends JTChannel {
        flush(): void;
        send(data: any): void;
    }
}
