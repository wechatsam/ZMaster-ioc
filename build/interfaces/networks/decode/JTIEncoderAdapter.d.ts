declare namespace com {
    interface JTIEncoderAdapter extends JTIChannelAdapter {
        encode(data: any): any;
        writeComplete(data: any): void;
    }
}
