declare namespace com {
    class JTEncodeToByteAdapter extends JTAbstractEncoderAdapter {
        constructor();
        channelActive(): void;
        encode(data: any): any;
        writeComplete(data: any): void;
    }
}
