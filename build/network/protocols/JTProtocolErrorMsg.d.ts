declare namespace com {
    class JTProtocolErrorMsg extends JTClassExtension {
        constructor();
        build(): void;
        checkPackageStatus(receivePackage: JTIReceivePackage): boolean;
        showErrorMessage(receivePackage: JTIReceivePackage): void;
    }
}
