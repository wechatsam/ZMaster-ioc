"use strict";
var com;
(function (com) {
    class JTTemplateBaseManager extends com.JTClassExtension {
        constructor() {
            super();
            this._configMap = {};
        }
        build() {
        }
        put(url, data) {
            this._configMap[url] = data;
        }
        getValue(url) {
            return this._configMap[url];
        }
    }
    com.JTTemplateBaseManager = JTTemplateBaseManager;
})(com || (com = {}));
