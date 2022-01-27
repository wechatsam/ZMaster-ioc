"use strict";
cc._RF.push(module, '3c270P9xPBMIL7J43PjB1E0', 'JTAbstractLayerManager');
// Script/src/managers/JTAbstractLayerManager.ts

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTAbstractLayerManager = (function (_super) {
            __extends(JTAbstractLayerManager, _super);
            function JTAbstractLayerManager(stage) {
                var _this = _super.call(this) || this;
                _this._layerMap = null;
                _this._stage = null;
                _this._stage = stage;
                return _this;
            }
            JTAbstractLayerManager.prototype.build = function () {
                this._stage = JTSession.stage;
                this._layerMap = {};
                this._stage.makeFullScreen();
                var layerManager = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_LAYER);
                JTAbstractLayerManager._instance = layerManager;
                this.createLayers();
            };
            JTAbstractLayerManager.prototype.createLayers = function () {
                this.createLayer(JTAbstractLayerManager.LAYER_MAP);
                this.createLayer(JTAbstractLayerManager.LAYER_SCENE);
                this.createLayer(JTAbstractLayerManager.LAYER_MASK);
                this.createLayer(JTAbstractLayerManager.LAYER_POPUP);
                this.createLayer(JTAbstractLayerManager.LAYER_TIPS);
            };
            JTAbstractLayerManager.prototype.createLayer = function (type) {
                var layer = new fgui.GComponent();
                layer.makeFullScreen();
                layer.setPosition(0, 0);
                this._layerMap[type] = layer;
                layer.setSize(this._stage.width, this._stage.height);
                layer.addRelation(this._stage, fgui.RelationType.Height);
                this._stage.addChild(layer);
                return layer;
            };
            JTAbstractLayerManager.prototype.addToLayer = function (componentUI, type) {
                var layer = this.getLayer(type);
                layer.addChild(componentUI);
            };
            JTAbstractLayerManager.prototype.getLayer = function (type) {
                return this._layerMap[type];
            };
            Object.defineProperty(JTAbstractLayerManager.prototype, "stage", {
                get: function () {
                    return this._stage;
                },
                enumerable: false,
                configurable: true
            });
            JTAbstractLayerManager.addToLayer = function (componentUI, type) {
                this._instance.addToLayer(componentUI, type);
            };
            JTAbstractLayerManager.getLayer = function (type) {
                return this._instance.getLayer(type);
            };
            Object.defineProperty(JTAbstractLayerManager, "stage", {
                get: function () {
                    return this._instance.stage;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTAbstractLayerManager, "instance", {
                get: function () {
                    return this._instance;
                },
                enumerable: false,
                configurable: true
            });
            JTAbstractLayerManager.LAYER_TIPS = "layer_tips";
            JTAbstractLayerManager.LAYER_SCENE = "layer_scene";
            JTAbstractLayerManager.LAYER_POPUP = "layer_popup";
            JTAbstractLayerManager.LAYER_MAP = "layer_map";
            JTAbstractLayerManager.LAYER_MASK = "layer_mask";
            JTAbstractLayerManager._instance = null;
            return JTAbstractLayerManager;
        }(JTApplicationContext));
        com.JTAbstractLayerManager = JTAbstractLayerManager;
    })(com || (com = {}));
});

cc._RF.pop();