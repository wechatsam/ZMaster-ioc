/// <reference path="../run/JTClassExtension.d.ts" />
declare namespace com {
    class JTLayerManager extends JTClassExtension {
        static LAYER_TIPS: string;
        static LAYER_SCENE: string;
        static LAYER_POPUP: string;
        private _layerMap;
        private _stage;
        constructor(stage: fgui.GRoot);
        build(): void;
        private createLayer;
        getLayer(type: string): fgui.GComponent;
    }
}
