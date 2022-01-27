declare namespace com {
    abstract class JTAbstractDecoderAdapter extends JTChannelAdapter implements JTIDecoderAdapter {
        protected _responseMapper: JTResponseMapping;
        protected _protocolManager: JTProtocolItemManager;
        protected _protocolErrorMessage: JTProtocolErrorMsg;
        protected _downProtocol: JTIProtocol;
        constructor();
        channelActive(): void;
        abstract decode(data: any): any;
        readComplete(receivePackage: JTIReceivePackage): void;
        protected toMapper(protocol: number, data: any): JTIMapper;
    }
}
