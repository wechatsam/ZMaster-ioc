"use strict";
var com;
(function (com) {
    class JTProtocolErrorMsg extends com.JTClassExtension {
        constructor() {
            super();
        }
        build() {
        }
        checkPackageStatus(receivePackage) {
            return receivePackage.status == com.JTProtocol.NORMAL;
        }
        showErrorMessage(receivePackage) {
        }
    }
    com.JTProtocolErrorMsg = JTProtocolErrorMsg;
})(com || (com = {}));
