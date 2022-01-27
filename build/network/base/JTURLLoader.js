"use strict";
var com;
(function (com) {
    class JTURLLoader extends com.JTHttpRequest {
        constructor() {
            super();
        }
    }
    JTURLLoader.TEXT = "text";
    JTURLLoader.JSON = "json";
    JTURLLoader.XML = "xml";
    JTURLLoader.BUFFER = "arraybuffer";
    JTURLLoader.IMAGE = "image";
    JTURLLoader.SOUND = "sound";
    JTURLLoader.ATLAS = "atlas";
    JTURLLoader.FONT = "font";
    com.JTURLLoader = JTURLLoader;
})(com || (com = {}));
