"use strict";
/*
* name;
*/
var com;
(function (com) {
    class JTClassAlias {
        constructor(cls) {
            this._cls = null;
            this._instance = null;
            this._cls = cls;
        }
        recycle() {
            this._instance = this._cls = null;
        }
        get instance() {
            if (!this._instance) {
                this._instance = new this._cls();
            }
            return this._instance;
        }
    }
    JTClassAlias.CLASS_NAME = "__ClassName";
    com.JTClassAlias = JTClassAlias;
})(com || (com = {}));
