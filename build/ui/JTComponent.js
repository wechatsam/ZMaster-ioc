"use strict";
var com;
(function (com) {
    class JTComponent extends com.JTEventSignaler {
        constructor() {
            super();
            this._componentUI = null;
            this._componentId = null;
            this._runCls = null;
            this._layerType = null;
        }
        get componentUI() {
            return this._componentUI;
        }
        get componentId() {
            return this._componentId;
        }
        get runCls() {
            return this._runCls;
        }
        get layerType() {
            return this._layerType;
        }
    }
    com.JTComponent = JTComponent;
})(com || (com = {}));
