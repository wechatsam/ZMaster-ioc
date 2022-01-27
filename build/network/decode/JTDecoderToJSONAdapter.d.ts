declare namespace com {
    class JTDecoderToJSONAdapter extends JTAbstractDecoderAdapter {
        constructor();
        decode(receiveMessage: any): any;
        readComplete(receivePackage: JTIReceivePackage): void;
    }
}
