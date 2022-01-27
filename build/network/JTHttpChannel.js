"use strict";
var com;
(function (com) {
    class JTHttpChannel extends com.JTChannel {
        flush() {
            throw new Error("Method not implemented.");
        }
        send(data) {
            throw new Error("Method not implemented.");
        }
    }
    com.JTHttpChannel = JTHttpChannel;
})(com || (com = {}));
