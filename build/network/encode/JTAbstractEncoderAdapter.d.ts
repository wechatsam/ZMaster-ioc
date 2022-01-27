declare namespace com {
    abstract class JTAbstractEncoderAdapter extends JTChannelAdapter implements JTIEncoderAdapter {
        constructor();
        abstract encode(data: any): any;
        writeComplete(data: any): void;
    }
}
