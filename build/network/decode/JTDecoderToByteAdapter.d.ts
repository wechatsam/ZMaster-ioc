declare namespace com {
    class JTDecoderToByteAdapter extends JTAbstractDecoderAdapter {
        constructor();
        decode(data: any): any;
        readComplete(receivePackage: JTIReceivePackage): void;
    }
}
