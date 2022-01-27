declare namespace com {
    class JTComponent<T extends fgui.GComponent> extends JTEventSignaler implements JTIComponent<T> {
        protected _componentUI: T;
        protected _componentId: string;
        protected _runCls: any;
        protected _layerType: string;
        constructor();
        get componentUI(): T;
        get componentId(): string;
        get runCls(): any;
        get layerType(): string;
    }
}
