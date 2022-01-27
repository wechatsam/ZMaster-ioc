declare namespace com {
    interface JTIDecoderAdapter extends JTIChannelAdapter {
        decode(data: any): any;
        readComplete(receivePackage: JTIReceivePackage): void;
    }
}
