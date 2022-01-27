"use strict";
///<reference path="../run/JTClassExtension.ts"/>
var com;
(function (com) {
    class JTLayerManager extends com.JTClassExtension {
        constructor(stage) {
            super();
            this._layerMap = null;
            this._stage = null;
            this._stage = stage;
        }
        build() {
            this.createLayer(JTLayerManager.LAYER_SCENE);
            this.createLayer(JTLayerManager.LAYER_POPUP);
            this.createLayer(JTLayerManager.LAYER_TIPS);
        }
        createLayer(type) {
            let layer = new fgui.GComponent();
            layer.makeFullScreen();
            this._layerMap[type] = layer;
            this._stage.addChild(layer);
            return layer;
        }
        getLayer(type) {
            return this._layerMap[type];
        }
    }
    JTLayerManager.LAYER_TIPS = "layer_tips";
    JTLayerManager.LAYER_SCENE = "layer_scene";
    JTLayerManager.LAYER_POPUP = "layer_popup";
    com.JTLayerManager = JTLayerManager;
})(com || (com = {}));
