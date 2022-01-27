declare namespace com {
    interface JTIComponent<T extends fgui.GComponent> {
        componentUI: T;
        componentId: string;
        runCls: any;
        layerType: string;
    }
}
