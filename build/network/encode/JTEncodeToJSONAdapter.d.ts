declare namespace com {
    class JTEncodeToJSONAdapter extends JTAbstractEncoderAdapter {
        constructor();
        channelActive(): void;
        encode(data: any): any;
        writeComplete(data: any): void;
    }
}
