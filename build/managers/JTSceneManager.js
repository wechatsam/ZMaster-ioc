"use strict";
var com;
(function (com) {
    class JTSceneManager extends com.JTClassExtension {
        constructor() {
            super();
        }
        build() {
        }
        static get stage() {
            return this._stage;
        }
    }
    JTSceneManager._stage = null;
    com.JTSceneManager = JTSceneManager;
})(com || (com = {}));
