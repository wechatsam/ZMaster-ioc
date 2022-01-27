declare module com {
    class JTEventSignaler implements JTIEventSignaler {
        private __evtMap;
        private __funMap;
        recycle(): void;
        addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        dispatchEvent(key: any, args?: any): any;
        removeEventListener(key: any, method: Function, caller: any): void;
        removeEvents(): void;
        registerFunction(key: any, method: Function, caller: any, once?: boolean): void;
        execute(key: any, args?: any): void;
        removeFunction(key: any, method: Function, caller: any): void;
        removeFunctions(): void;
        get evtMap(): Object;
        get funMap(): Object;
        static get pool(): JTIPool;
        private static _pool;
        static create(): JTEventSignaler;
        static put(signaler: JTEventSignaler): void;
    }
}
declare module com {
    abstract class JTComponent<T extends fgui.GComponent> extends JTEventSignaler implements JTIComponent {
        protected _____ui: T;
        protected ___runClass: any;
        protected _url: string;
        protected _pacakgeName: string;
        protected __classUI: T;
        protected __componentId: string;
        protected _registeredClick: boolean;
        protected __loaded: boolean;
        protected __uiPackage: fgui.UIPackage;
        constructor();
        protected loadAsset(url: string, id: string, runClass?: any, registeredClick?: boolean): void;
        load(): void;
        protected loadAssetComplete(): void;
        bindUIRelation(parent: fgui.GComponent, type: number): void;
        bindRelation(child: fgui.GComponent, parent: fgui.GComponent, type: number): void;
        getObject(id: string): T;
        protected notifyComplete(): void;
        protected registerMouseClick(e: any): void;
        protected onMouseClickHandler(target: fairygui.GComponent, targetName: string): void;
        get className(): string;
        onResizeHandler(): void;
        get componentUI(): T;
        get classUI(): T;
        get runClass(): any;
        get locker(): JTLocker;
        get uiPackage(): fairygui.UIPackage;
        protected onRemoveFromStage(): void;
    }
}
declare module com {
    abstract class JTPanel<T extends fgui.GComponent> extends JTComponent<T> {
        constructor();
        load(): void;
        get locker(): JTLocker;
    }
}
declare module com {
    abstract class JTScene<T extends fgui.GComponent> extends JTComponent<T> implements JTIScene {
        constructor();
        get locker(): JTLocker;
        getUIComponent<V extends fgui.GComponent>(___class: any, __id: string, registeredClick?: boolean, runClass?: any): JTUIComponent<V>;
    }
}
declare module com {
    class JTUIComponent<T extends fgui.GComponent> extends fgui.GComponent implements JTIComponent {
        protected _componentId: string;
        protected ____ui: T;
        protected _url: string;
        protected __runClass: any;
        protected __loaded: boolean;
        protected _signaler: JTEventSignaler;
        protected __uiPackage: fgui.UIPackage;
        protected _registeredClick: boolean;
        protected ___owner: JTIScene;
        constructor();
        get uiPackage(): fgui.UIPackage;
        get runClass(): any;
        protected loadAsset(url: string, __id: string, registeredClick?: boolean, runClass?: any): void;
        load(): void;
        setup(owner: JTIScene, __id: string, registeredClick?: boolean, runClass?: any): void;
        protected buildingUI(): void;
        bindUIRelation(parent: fgui.GComponent, type: number): void;
        bindRelation(child: fgui.GComponent, parent: fgui.GComponent, type: number): void;
        protected loadAssetComplete(): void;
        protected notifyComplete(): void;
        protected registerMouseClick(e: any): void;
        protected onMouseClickHandler(target: fairygui.GComponent, targetName: string): void;
        onResizeHandler(): void;
        protected onRemoveFromeStage(e: any): void;
        get componentUI(): T;
        recycle(): void;
        get className(): string;
        addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        dispatchEvent(key: any, args?: any): any;
        removeEventListener(key: any, method: Function, caller: any): void;
        removeEvents(): void;
        registerFunction(key: any, method: Function, caller: any, once?: boolean): void;
        execute(key: any, args?: any): void;
        removeFunction(key: any, method: Function, caller: any): void;
        removeFunctions(): void;
    }
}
declare module com {
    class JTDictionary<K, V> {
        protected _values: V[];
        protected _keys: K[];
        get values(): V[];
        get keys(): K[];
        set(key: K, value: V): void;
        indexOf(key: K): number;
        get(key: K): V;
        remove(key: K): V;
        clear(): void;
    }
}
declare module com {
    function execute(key: string, args?: string): void;
    function dispatchEvent(key: string, args?: any): void;
    function info(...msgs: any[]): void;
    function error(...msgs: any[]): void;
    function debug(...msgs: any[]): void;
    function assets(flag: Boolean, ...msgs: any[]): void;
}
declare module com {
    class JTLocalCache implements JTIPoolObject {
        private _dataMap;
        private _name;
        private static localCache;
        constructor(name: string);
        set name(value: string);
        setObject(key: string, data: any): void;
        getObject(key: string): any;
        hasKey(key: string): boolean;
        delete(key: string): void;
        private update;
        clean(): void;
        recycle(): void;
        get dataMap(): Object;
    }
}
declare module com {
    class JTLogger {
        private static LOG_INFO;
        private static LOG_ASSET;
        private static LOG_DEBUG;
        private static LOG_ERROR;
        static info(...msgs: any[]): void;
        static debug(...msgs: any[]): void;
        static assert(flag: Boolean, ...msgs: any[]): void;
        static error(...msgs: any[]): void;
        private static print;
    }
}
declare module com {
    class JTMatrix implements JTIPoolObject {
        static EMPTY: JTMatrix;
        static TEMP: JTMatrix;
        static _createFun: Function | null;
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
        _bTransform: boolean;
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number, nums?: number);
        identity(): JTMatrix;
        _checkTransform(): boolean;
        setTranslate(x: number, y: number): JTMatrix;
        translate(x: number, y: number): JTMatrix;
        scale(x: number, y: number): JTMatrix;
        rotate(angle: number): JTMatrix;
        skew(x: number, y: number): JTMatrix;
        invertTransformPoint(out: JTPoint): JTPoint;
        transformPoint(out: JTPoint): JTPoint;
        transformPointN(out: JTPoint): JTPoint;
        getScaleX(): number;
        getScaleY(): number;
        invert(): JTMatrix;
        setTo(a: number, b: number, c: number, d: number, tx: number, ty: number): JTMatrix;
        concat(matrix: JTMatrix): JTMatrix;
        static mul(m1: JTMatrix, m2: JTMatrix, out: JTMatrix): JTMatrix;
        static mul16(m1: JTMatrix, m2: JTMatrix, out: any[]): any[];
        scaleEx(x: number, y: number): void;
        rotateEx(angle: number): void;
        clone(): JTMatrix;
        copyTo(dec: JTMatrix): JTMatrix;
        toString(): string;
        destroy(): void;
        recycle(): void;
        static get pool(): JTIPool;
        private static _pool;
        static create(): JTMatrix;
        static put(point: JTMatrix): void;
    }
}
declare module com {
    class JTPoint implements JTIPoolObject {
        static TEMP: JTPoint;
        static EMPTY: JTPoint;
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        recycle(): this;
        static get pool(): JTIPool;
        private static _pool;
        static create(): JTPoint;
        static put(point: JTPoint): void;
        setTo(x: number, y: number): JTPoint;
        distance(x: number, y: number): number;
        toString(): string;
        normalize(): void;
        copy(point: JTPoint): JTPoint;
    }
}
declare module com {
    class JTSession {
        static channel: JTIChannel;
        static designHeight: number;
        static designWidth: number;
        static stageWidth: number;
        static stageHeight: number;
        static _stage: fgui.GRoot;
        static get stage(): fgui.GRoot;
    }
}
declare module com {
    class JTTextLoader {
        private static _dataMap;
        private _url;
        private _class;
        private _urlLoader;
        private _dataMap;
        private _values;
        private _datas;
        static PARSE_STRING: string;
        static PARSE_BINARY: string;
        static PARSE_ZIP: string;
        static LOAD_DEFAULT: string;
        static LOADED_PARSE: string;
        constructor(url?: string, cls?: any);
        load(url: string, cls: any): void;
        parseZip(data: any, cls: any): void;
        parseBinary(data: any, cls: any): void;
        parseStr(content: string, cls: any): void;
        private onloadComplete;
        private onloadError;
        toValues<T extends JTBaseTemplate>(): T[];
        toValue<T extends JTBaseTemplate>(key: string): T;
    }
}
declare module com {
    abstract class JTApplicationBootstrap extends JTEventSignaler implements JTIOption {
        protected static _contextMap: {
            [name: string]: any;
        };
        private static ____ctx;
        static CONTEXT_PROTOCOL: string;
        static CONTEXT_ERROR_MESSAGE: string;
        static CONTEXT_TEMPLATE: string;
        static CONTEXT_MAPPING: string;
        static CONTEXT_SCENE: string;
        static CONTEXT_LAYER: string;
        static CONTEXT_RUNNER: string;
        protected static CONTEXT_LAYOUT: string;
        static CHANNEL: string;
        static CHANNEL_PIPELINE: string;
        static CHANNEL_GROUP: string;
        private _serverLoader;
        private _serverTemplate;
        private __loaderManager;
        private _launchConnected;
        private __channelGroup;
        constructor();
        option(type: string, ___cxt: JTIOptionContext): JTIChildOption;
        protected builds(): void;
        protected buildsComplete(): void;
        channel(channel: JTIChannel): JTIChannelOption;
        channelGroup(channelGroup: JTIChannelGroup): JTIChannelGroup;
        childOption(type: string, channelAdapter: JTIChannelContext): JTIChannelOption;
        layout(layoutType: string): JTIChildOption;
        configServerTemaplete(serverLoader: JTTextLoader, serverId: string): JTServerConfigTemplate;
        conofig(host: string, port: number): JTServerConfigTemplate;
        connect(): JTIConnection;
        launch(): JTIConnection;
        protected abstract launchSucceed(): void;
        preloadAssets(assets: {
            [url: string]: string;
        }[], createRender?: JTCommand): JTFuturePipeline;
        load(): Promise<any>;
        setDesignResolutionSize(width: number, height: number, resolutionPolicy?: string | number): void;
        updateConfigs(resources: any[]): void;
        registerContextAlias(key: string, __context: any): JTIOption;
        getContext(key: string): any;
        static getContext(key: string): any;
    }
}
declare module com {
    abstract class JTOptionContext extends JTEventSignaler implements JTIOptionContext {
        protected _builded: boolean;
        protected _buildCompleted: boolean;
        constructor();
        get builded(): boolean;
        get buildCompleted(): boolean;
        abstract build(): void;
        abstract buildComplete(): void;
    }
}
declare module com {
    class JTLocker implements JTLocker {
        protected _resolve: Function;
        protected _reject: Function;
        protected _locker: Promise<any>;
        protected ___result: any;
        lock(__result?: any): Promise<any>;
        release(): void;
        kill(): void;
        locked(): boolean;
        tryLock(__caller: any): Promise<any>;
        recycle(): void;
        static create(): JTLocker;
    }
}
declare module com {
    class JTCounter extends JTLocker {
        protected _failCount: number;
        protected _succeedCount: number;
        protected _lockedCount: number;
        constructor();
        release(): void;
        kill(): void;
        get succeedCount(): number;
        get failCount(): number;
        recycle(): void;
        reset(): void;
        get lockedCount(): number;
        static create(): JTCounter;
    }
}
declare module com {
    class JTEventDispatcher implements JTIPoolObject, JTIEventDispatcher {
        protected __evtMap: Object;
        constructor();
        recycle(): void;
        addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        dispatchEvent(key: any, args?: any): any;
        removeEventListener(key: any, method: Function, caller: any): void;
        removeEvents(key: any): void;
        protected delete(list: JTCommand[], command: JTCommand): void;
        protected removes(): void;
        get evtMap(): Object;
    }
}
declare module com {
    class JTFuturePipeline extends JTEventDispatcher {
        protected _counter: JTTaskCounter;
        protected _tasks: JTITaskExecutor[];
        protected _factroy: JTIFactory;
        protected _itemProvider: JTCommand;
        protected _itemRender: JTCommand;
        protected ___dataList: any[];
        constructor(__datas?: any[]);
        set dataList(___datas: any[]);
        run(): Promise<any>;
        reset(): void;
        private createTasks;
        set factory(value: JTIFactory);
        set itemRender(value: JTCommand);
        set itemProvider(value: JTCommand);
        get counter(): JTTaskCounter;
    }
}
declare module com {
    abstract class JTTask implements JTITask {
        abstract execute(): Promise<any>;
        recycle(): void;
    }
}
declare module com {
    abstract class JTTaskCounter extends JTCounter {
        private _totalCount;
        constructor();
        setTotalCount(totalCount: number): void;
        get totalCount(): number;
        recycle(): void;
        get completed(): boolean;
        get progress(): number;
        static create(): JTTaskCounter;
    }
}
declare module com {
    abstract class JTTaskEvent {
        static TASK_PROGRESS: string;
        static TASK_COMPLETE: string;
    }
}
declare module com {
    abstract class JTTaskExecutor extends JTTask implements JTITaskExecutor {
        private _counter;
        relevance(counter: JTCounter): void;
        protected release(): void;
        protected kill(): void;
        recycle(): void;
    }
}
declare module com {
    abstract class JTTaskFactory implements JTIFactory {
        abstract produce(): JTITaskExecutor;
    }
}
declare module com {
    class JTMapper implements JTIMapper {
        clone(): JTMapper;
        update(data: Object): JTMapper;
        recycle(): void;
    }
}
declare module com {
    class JTDataInfo extends JTMapper {
    }
}
declare module com {
    abstract class JTAbstractResponseMapping extends JTOptionContext {
        build(): void;
        protected static mappingMap: any;
        registerToMapping<T extends JTClassMapper>(protocol: number | string, __mapper: T): void;
        registerMapper(protocol: number | string, _class: any, createFromPool?: boolean): void;
        getMapper<T extends JTClassMapper>(protocol: number | string): T;
        create(protocol: number | string, data: any): any;
    }
}
declare module com {
    class JTClassMapper {
        protected __class: any;
        protected _createFromPool: boolean;
        protected _dataFormat: string;
        protected _pool: JTIPool;
        constructor(_class: any, createFromPool?: boolean);
        get createFromPool(): boolean;
        get pool(): JTIPool;
        create(): JTIMapper;
    }
}
declare module com {
    class JTBaseTemplate {
        id: string;
        constructor();
        endFill(): void;
    }
}
declare module com {
    class JTServerConfigTemplate extends com.JTBaseTemplate {
        port: number;
        host: string;
        constructor();
        setup(host: string, port: number): void;
    }
}
declare module com {
    class JTBean {
        ___caller: any;
        ___descripter: any;
        ___instance: any;
        ___sourceProperty: string;
        ___changedProperty: string;
        constructor(paramaters?: any);
        bind(caller: any, property: string, descripter: any): void;
        get instance(): any;
    }
}
declare module com {
    interface JTIContextFactory {
        product(): any;
    }
}
declare module com {
    class JTElementInject {
        _runnbleMethod: Function;
        _configDescripter: JTConfigDescripter;
        inject(): void;
        compare(element: JTElementInject): boolean;
        merge(element: JTElementInject): void;
        get caller(): any;
        get paramters(): any;
        get property(): string;
        get descripter(): JTConfigDescripter;
    }
}
declare module com {
    class JTInjectConfig {
    }
}
declare module com {
    class JTBindingUtils {
        static bind(): JTWatchProperty;
        static bindGetSet(): JTWatchProperty;
    }
}
declare module com {
    class JTPropertyChanged {
    }
}
declare module com {
    class JTWatchProperty {
    }
}
declare module com {
    class JTDecoratorUtils {
        private static _bindedMap;
        static DECORATOR_KEY: string;
        static registerDecoratorKey(__property: string): string;
        static bind(cls: any, destroyed?: boolean): JTClassInjectAlias;
        static bindPool(poolCls: any, itemCls: any, parameters?: any): JTClassInjectAlias;
        static bindTemplate(cls: any, parameters: any): JTClassInjectAlias;
        static getClassAlisa(cls: any): JTClassInjectAlias;
    }
}
declare module com {
    function Layout(layout: string): Function;
}
declare module com {
    function NotifyUpdate(eventType: string): Function;
}
declare module com {
    class JTResizeEvent {
        static RESIZE: string;
        private static ___classNames;
        static get className(): string[];
        static indexOf(___className: string): number;
        static registerResize(target: JTIComponent): void;
    }
    function ResizeEvent(): Function;
}
declare module com {
    function Response(protocol: number | string, waitingbar?: boolean): Function;
    function ResponseMapping(protocol: number | string, __mapperClass: any, createFromPool?: boolean, waitingbar?: boolean): Function;
}
declare module com {
    abstract class JTClassInjectAlias {
        protected ___c: any;
        protected _instance: any;
        static CLASS_NAME: string;
        constructor(cls: any);
        recycle(): void;
        get instance(): any;
    }
}
declare module com {
    class JTConfigurationAlisa extends JTClassInjectAlias {
        private _referenceMap;
        private _referenceCount;
        private _destroyed;
        private _parameter;
        constructor(cls: any, parameters: any);
        recycle(): void;
        relevance(): void;
        get instance(): any;
    }
}
declare module com {
    class JTSingletonClassAlias extends JTClassInjectAlias {
        private _referenceMap;
        private _referenceCount;
        private _destroyed;
        constructor(cls: any, destroyed?: boolean);
        recycle(): void;
        relevance(): void;
        get instance(): any;
    }
}
declare module com {
    class JTSingletonPoolAlias extends JTClassInjectAlias {
        private _referenceMap;
        private _referenceCount;
        private _parameters;
        private _itemCls;
        constructor(cls: any, itemCls: any, parameters?: any);
        recycle(): void;
        relevance(): void;
        get instance(): any;
    }
}
declare module com {
    function Configuration(cls: Function, parameters: object): Function;
    function loadConfiguration(cls: any, target: any, property: string, parameters: any): void;
}
declare module com {
    function SingletonClass(cls: any, destroyed?: boolean): Function;
    function registerSingletonClassAlias(cls: any, target: any, property: string, destroyed?: boolean): void;
}
declare module com {
    function SingletonPool(poolCls: any, itemCls: any, parameters?: any): Function;
    function registerSingletonPoolAlisa(poolCls: any, target: any, property: string, itemCls: any, parameters?: any): void;
}
declare module com {
    class JTIocController extends JTDictionary<string, JTDescripter> {
        constructor();
        build(): void;
        run(): void;
        makeClassMap(__emt: JTElementDescripter): void;
    }
}
declare module com {
    class JTApplicationContext {
        static controller: JTIocController;
        private static _launched;
        static __elements: JTElementDescripter[];
        static __beanMap: JTDictionary<string, JTBean>;
        static collect(__c: any, runnable: Function, property: string, descripter: any, parameters: any): boolean;
        static collectToMap(__c: any, property: string, descripter: any): void;
        static changed(__sourceProperty: string, __changedProperty: string): void;
        static get(key: string): JTBean;
        static get launched(): boolean;
        private static classifiedMapping;
        static run(__class: any): JTApplicationContext;
        private static build;
        private static launch;
    }
}
declare module com {
    abstract class JTDescripter {
        ____c: any;
        __property: string;
        __elements: JTElementDescripter[];
        private __className;
        protected ___dependencies: Function[];
        constructor(___caller: any, _property?: string);
        abstract assemble(): void;
        builds(): void;
        run(lines?: JTElementDescripter[]): void;
        addElement(element: JTElementDescripter): void;
        get className(): string;
    }
}
declare module com {
    class JTClassDescripter extends JTDescripter {
        __runnablePropertys: JTDescripter[];
        __runnableMethods: JTDescripter[];
        __runnableMap: {
            [key: string]: JTDescripter;
        };
        constructor(__class: any);
        builds(): void;
        assemble(): void;
        assembles(lines: any): void;
        run(): void;
        runs(lines?: JTDescripter[]): void;
        collect(__emt: JTElementDescripter): void;
        getNameByClass(__c: any): string;
    }
}
declare module com {
    class JTDescripterType {
        static SINGLETON: string;
        static BEAN: string;
        static AUTOWIRED: string;
        static QUALIFIER: string;
    }
}
declare module com {
    var Services: Function;
    var Scene: Function;
    var Component: Function;
    var Panel: Function;
    var DataInfoManager: Function;
    var Data: Function;
    var Pool: Function;
    var Singleton: Function;
    var Bean: Function;
    var Qualifier: Function;
    var Autowired: Function;
}
declare module com {
    class JTMethodDescripter extends JTDescripter {
        assemble(): void;
    }
}
declare module com {
    class JTParameterDescripter extends JTDescripter {
        assemble(): void;
    }
}
declare module com {
    class JTPropertyDescripter extends JTDescripter {
        assemble(): void;
        private mergeParameter;
    }
}
declare module com {
    class JTConfigDescripter implements JTIPoolObject {
        __caller: any;
        __property: string;
        __descripter: any;
        parameters: any[];
        setup(__caller: any, property: string, descripter: any, parameters?: any[]): void;
        recycle(): void;
        getClass(): any;
        changeParameters(__paremeters: any): void;
        private static _pool;
        private static get pool();
        static create(target: any, property: string, descripter: any, parameters?: any[]): JTConfigDescripter;
        static put(config: JTConfigDescripter): void;
    }
}
declare module com {
    class JTElementDescripter implements JTIPoolObject {
        private __runnableMethod;
        private ___c;
        private __config;
        relevance(__caller: any, runnable: Function, __config?: JTConfigDescripter): void;
        get runnable(): Function;
        run(): void;
        get config(): JTConfigDescripter;
        get parameters(): any[];
        get className(): string;
        getClassContainer(): any;
        get property(): string;
        get cls(): any;
        recycle(): void;
        private static _pool;
        private static get pool();
        static create(___caller: any, runnable: Function, __config?: JTConfigDescripter): JTElementDescripter;
        static put(config: JTElementDescripter): void;
    }
}
declare module com {
    class JTCommand implements JTIPoolObject {
        private _caller;
        private _method;
        private _args;
        private _once;
        recycle(): void;
        setTo(caller: any, method: Function, args?: any, once?: Boolean): JTCommand;
        run(): any;
        runWith(data: any): any;
        clear(): JTCommand;
        recover(): void;
        get caller(): any;
        get method(): Function;
        get once(): Boolean;
        static get pool(): JTIPool;
        private static _pool;
        static create(caller: any, method: Function, args?: any, once?: Boolean): JTCommand;
        static put(command: JTCommand): void;
    }
}
declare module com {
    class JTEventManager {
        protected static __evtMap: Object;
        constructor();
        static recycle(): void;
        static addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        static dispatchEvent(key: any, args?: any): void;
        static removeEventListener(key: any, method: Function, caller: any): void;
        static removeEvents(key: any): void;
        protected static delete(list: JTCommand[], command: JTCommand): void;
        protected static removes(): void;
    }
}
declare module com {
    class JTFunctionManager {
        private static _eventMap;
        static registerFunction(key: number | string, method: Function, caller: any, once?: boolean): void;
        static addCommand(key: number | string, command: JTCommand): void;
        static execute(key: number | string, args?: any): void;
        static removeFunction(key: number | string, method: Function, caller: any): void;
        static removeFunctions(key: number | string): void;
        private static delete;
    }
}
declare module com {
    interface JTIOptionContext {
        build(): void;
        builded: boolean;
        buildCompleted: boolean;
        buildComplete(): void;
    }
}
declare module com {
    interface JTIChildOption {
        option(type: string, _extension: JTIOptionContext): JTIChildOption;
    }
}
declare module com {
    interface JTIEventDispatcher {
        addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        dispatchEvent(key: any, args?: any): any;
        removeEventListener(key: any, method: Function, caller: any): void;
        removeEvents(key: any): void;
    }
}
declare module com {
    interface JTIMapper extends JTIPoolObject {
        update(data: any): JTIMapper;
        clone(): JTIMapper;
    }
}
declare module com {
    interface JTIOption extends JTIChildOption, JTIChannelOption {
        channel(channel: JTIChannel): JTIChannelOption;
        updateConfigs(configs: any[]): void;
        conofig(host: string, port: number): JTServerConfigTemplate;
        channelGroup(channelGroup: JTIChannelGroup): JTIChannelGroup;
        configServerTemaplete(serverLoader: JTTextLoader, serverId: string): JTServerConfigTemplate;
        connect(): JTIConnection;
        launch(): JTIConnection;
    }
}
declare module com {
    interface JTITextLoader<T extends JTBaseTemplate> {
    }
}
declare module com {
    interface JTICounter extends JTILocker {
        setTotalCount(totalCount: number): void;
        totalCount: number;
        succeedCount: number;
        failCount: number;
        completed: boolean;
        reset(): void;
        lockedCount: number;
    }
}
declare module com {
    interface JTIFactory {
        produce(): any;
    }
}
declare module com {
    interface JTILocker extends JTIPoolObject {
        lock(__caller?: any): Promise<any>;
        release(): void;
        kill(): void;
        locked(): boolean;
        tryLock(__caller: any): Promise<any>;
    }
}
declare module com {
    interface JTITask extends JTIPoolObject {
        execute(): Promise<any>;
    }
}
declare module com {
    interface JTITaskExecutor extends JTITask {
        relevance(counter: JTCounter): void;
    }
}
declare module com {
    interface JTIEventSignaler extends JTIPoolObject {
        addEventListener(key: any, method: Function, caller: any, once?: boolean): void;
        dispatchEvent(key: any, args?: any): any;
        removeEventListener(key: any, method: Function, caller: any): void;
        removeEvents(): any;
        registerFunction(key: any, method: Function, caller: any, once?: boolean): void;
        execute(key: any, args?: any): void;
        removeFunction(key: any, method: Function, caller: any): void;
        removeFunctions(): any;
    }
}
declare module com {
    interface JTILayerManager {
        createLayer(type: string): fgui.GComponent;
        addToLayer(componentUI: fgui.GComponent, type: string): void;
        getLayer(type: string): fgui.GComponent;
        stage: fgui.GRoot;
    }
}
declare module com {
    interface JTISceneManager {
        changeScene(sceneType: string): any;
        back(): string;
    }
}
declare module com {
    interface JTITemplateInfoManager {
        updateConfigs(configs: any[]): void;
        put(url: string, data: any): void;
        getValue(url: string): any;
    }
}
declare module com {
    interface JTIMarkChannelConnected {
        mark(): void;
    }
}
declare module com {
    interface JTIProtocol {
        protocols: number | string[];
        encrypts: number[];
        build(): void;
        registerProtocol(protocol: number | string, waiting: boolean, encrypt?: string): void;
        getProtocol(protocol: number | string): JTItemProtocol;
        execute(message: any): void;
    }
}
declare module com {
    interface JTIReceivePackage extends JTIPoolObject {
        content: Object;
        protocol: number;
        status: number;
        errorCode: number;
        readPackage(data: any): void;
    }
}
declare module com {
    interface JTIChannel extends JTIConnection {
        host: string;
        port: number;
        name: string;
        pipeline: JTIChannelPipeline;
        bind(channelPipeline: JTIChannelPipeline): void;
        config(host: string, port: number): any;
        connect(): any;
    }
}
declare module com {
    interface JTIChannelContext extends JTIEventDispatcher, JTIChannelState, JTIChannelContextMap {
        build(): void;
        bind(channelPipeline: JTIChannelPipeline): void;
    }
}
declare module com {
    interface JTIChannelContextMap {
        getContext(type: string): JTIChannelContext;
    }
}
declare module com {
    interface JTIChannelGroup extends JTIConnection {
        initialize(): void;
        mark(channel: JTIConnection): void;
        addChannel(type: string, channel: JTIChannel): JTIChannelPipeline;
        setupChannel(type: string, __channleClass: any): JTIChannelPipeline;
        getChannelPipeline(type: string): JTIChannelPipeline;
        getChannel(type: string): JTIChannel;
        size: number;
    }
}
declare module com {
    interface JTIChannelOption {
        childOption(type: string, _ctx: JTIChannelContext): JTIChannelOption;
    }
}
declare module com {
    interface JTIChannelPipeline extends JTIChannelOption, JTIChannelState, JTIChannelContextMap, JTIConnection, JTIMarkChannelConnected {
        bind(channel: JTIChannel): JTIChannel;
        config(host: string, port: number): JTIMarkChannelConnected;
        launch(host: string, port: number): JTIChannel;
    }
}
declare module com {
    interface JTIChannelState {
        channelInactive(): void;
        channel: JTIChannel;
        channelActive(): void;
        getContext(type: string): JTIChannelContext;
    }
}
declare module com {
    interface JTIConnection {
        connect(): any;
        reload(): void;
        flush(): void;
        send(data: any): void;
        writeAndFlush(data: any): void;
    }
}
declare module com {
    interface JTIHttpChannel extends JTIChannel {
        defaultMethodType: string;
        writeMethod(methodType: string): void;
    }
}
declare module com {
    interface JTIWebsocketChannel extends JTIChannel {
    }
}
declare module com {
    interface JTIEncoderAdapter extends JTIChannelContext {
        encode(data: any): any;
        writeComplete(data: any): void;
    }
}
declare module com {
    interface JTIDecoderAdapter extends JTIChannelContext {
        decode(data: any): any;
        readComplete(receivePackage: JTIReceivePackage): void;
    }
}
declare module com {
    interface JTICachePool extends JTIPool {
        recycles(items?: JTIPoolObject[]): void;
    }
}
declare module com {
    interface JTIFixedPool extends JTICachePool {
        fullPool: boolean;
        fixedCount: number;
    }
}
declare module com {
    interface JTIPool {
        get(): JTIPoolObject;
        put(item: JTIPoolObject): void;
        totalCount: number;
        size: number;
    }
}
declare module com {
    interface JTIPoolObject {
        recycle(): any;
    }
}
declare module com {
    interface JTIComponent extends JTIEventSignaler {
        componentUI: fgui.GComponent;
        runClass: any;
        uiPackage: fgui.UIPackage;
        className: string;
        bindUIRelation(parent: fgui.GComponent, type: number): void;
        bindRelation(child: fgui.GComponent, parent: fgui.GComponent, type: number): void;
        onResizeHandler(e: any): void;
    }
}
declare module com {
    interface JTIPanel<T extends fgui.GComponent> {
        componentUI: T;
    }
}
declare module com {
    interface JTIScene extends JTIComponent {
        getUIComponent<V extends fgui.GComponent>(___class: any, __id: string, registeredClick?: boolean, runClass?: any): JTUIComponent<V>;
    }
}
declare module com {
    class JTLayout {
        static LAYOUT_VERTICAL: string;
        static LAYOUT_HORIZONTAL: string;
        static LAYOUT_AUTO_SWITCH: string;
        __className: any;
        __property: string;
        __layout: string;
        constructor(_className: any, property: string, __layout: string);
        settings(__className: any, property: string, __layout: string): void;
        update(child: fgui.GComponent): void;
    }
}
declare module com {
    class JTLayoutManager extends JTOptionContext {
        static ___classLayoutMap: {
            [className: string]: {
                [name: string]: JTLayout;
            };
        };
        private _stage;
        static currentLayout: string;
        constructor();
        static addLayout(__className: string, property: string, __layout: string): void;
        static update(view: JTIComponent): void;
        static getLayout(___className: string, property?: string): JTLayout;
        static layoutUpdate(child: fgui.GComponent, layout: string): void;
        static layoutVertical(child: fgui.GComponent): void;
        static layoutHorzontal(child: fgui.GComponent): void;
        static autoAdjustLayout(child: fgui.GComponent): void;
        build(): void;
        protected registerWindowResize(): void;
        protected onResize(e: any): void;
        protected update(): void;
        buildComplete(): void;
    }
}
declare module com {
    abstract class JTAbstractLayerManager extends JTOptionContext implements JTILayerManager {
        static LAYER_TIPS: string;
        static LAYER_SCENE: string;
        static LAYER_POPUP: string;
        static LAYER_MAP: string;
        static LAYER_MASK: string;
        private _layerMap;
        private _stage;
        private static _instance;
        constructor(stage?: fgui.GRoot);
        build(): void;
        protected createLayers(): void;
        createLayer(type: string): fgui.GComponent;
        addToLayer(componentUI: fgui.GComponent, type: string): void;
        getLayer(type: string): fgui.GComponent;
        get stage(): fgui.GRoot;
        static addToLayer(componentUI: fgui.GComponent, type: string): void;
        static getLayer(type: string): fgui.GComponent;
        static get stage(): fgui.GRoot;
        static get instance(): JTILayerManager;
    }
}
declare module com {
    abstract class JTAbstractSceneManager extends JTOptionContext implements JTISceneManager {
        private _layer;
        static locker: JTLocker;
        private _sceneMap;
        private _hostroys;
        private static _instance;
        constructor();
        build(): void;
        buildComplete(): void;
        protected registerSceneClassAlias(type: string, cls: any): void;
        changeScene(sceneType: string): Promise<any>;
        addChild(scene: JTIScene, type?: number): void;
        back(): string;
        static back(): void;
        static changeScene(sceneType: string): void;
        get layer(): fgui.GComponent;
        static get instance(): JTISceneManager;
    }
}
declare module com {
    abstract class JTAbstractTemplateManager extends JTOptionContext implements JTITemplateInfoManager {
        _configMap: {
            [url: string]: any;
        };
        constructor();
        abstract updateConfigs(configs: any[]): void;
        build(): void;
        put(url: string, data: any): void;
        getValue(url: string): any;
    }
}
declare module com {
    class JTDataInfoManager extends JTEventSignaler {
        constructor();
    }
}
declare module com {
    class JTChildPopUp implements JTIPoolObject {
        component: JTIComponent;
        parent: fgui.GComponent;
        componentUI: fgui.GComponent;
        isTween: boolean;
        mode: boolean;
        setup(component: JTIComponent, parent?: fgui.GComponent, isTween?: boolean, mode?: boolean): void;
        recycle(): void;
    }
}
declare module com {
    class JTPopupManager {
        private static __locker;
        private static __layer;
        private static __childs;
        private static __backgroundMask;
        static initialize(): void;
        static createPopUp(__class: any, parent?: fgui.GComponent, isTween?: boolean, mode?: boolean): JTIComponent;
        static centerComponent(component: JTIComponent): void;
        static center(componentUI: fgui.GComponent): void;
        static addPopUp(component: JTIComponent, parent?: fgui.GComponent, isTween?: boolean, mode?: boolean): JTIComponent;
        static removePopUp(component: JTIComponent, isTween?: boolean): JTIComponent;
        static removes(parent?: fairygui.GComponent): void;
        private static search;
        private static removeGComponent;
        private static removeComponent;
        static get layer(): fgui.GComponent;
        private static _pool;
        private static create;
        private static put;
        protected static get pool(): JTIPool;
        static get locker(): JTLocker;
    }
}
declare module com {
    class JTChannelPipeline extends JTEventDispatcher implements JTIChannelPipeline {
        private _channel;
        private ___ctxMap;
        private ___ctxs;
        private __channelGroup;
        constructor(channelGroup?: JTIChannelGroup);
        mark(): void;
        config(host: string, port: number): JTIMarkChannelConnected;
        connect(): any;
        reload(): void;
        flush(): void;
        send(data: any): void;
        writeAndFlush(data: any): void;
        channelActive(): void;
        channelInactive(): void;
        bind(channel: JTIChannel): JTIChannel;
        childOption(type: string, ___c: JTIChannelContext): JTChannelPipeline;
        getContext(type: string): JTIChannelContext;
        launch(host: string, port: number): JTIChannel;
        get channel(): JTIChannel;
    }
}
declare module com {
    class JTReceivePackage implements JTIReceivePackage {
        private _content;
        private _data;
        private _protocol;
        private _status;
        private _errorCode;
        get content(): Object;
        get protocol(): number;
        get status(): number;
        get errorCode(): number;
        readPackage(data: any): void;
        recycle(): void;
        static get pool(): JTIPool;
        private static _pool;
        static read(data: any): JTReceivePackage;
        static put(receivePackage: JTReceivePackage): void;
    }
}
declare module com {
    class JTSendPackage implements JTIPoolObject {
        private _content;
        private _data;
        private _protocol;
        private _channel;
        writeProtocol(protocol: number | string): void;
        write(key: string, value: Object): void;
        get content(): Object;
        get protocol(): number | string;
        get channel(): JTIConnection;
        send(): void;
        setup(channel: JTIConnection): void;
        recycle(): void;
        static get pool(): JTIPool;
        private static _pool;
        static begin(channel?: JTIConnection): JTSendPackage;
        static put(sendPackage: JTSendPackage): void;
    }
}
declare module com {
    class JTBuffer {
        static BIG_ENDIAN: string;
        static LITTLE_ENDIAN: string;
        private static _sysEndian;
        protected _xd_: boolean;
        private _allocated_;
        protected _d_: any;
        protected _u8d_: any;
        protected _pos_: number;
        protected _length: number;
        static getSystemEndian(): string;
        constructor(data?: any);
        get buffer(): ArrayBuffer;
        get endian(): string;
        set endian(value: string);
        set length(value: number);
        get length(): number;
        private _resizeBuffer;
        getString(): string;
        readString(): string;
        getFloat32Array(start: number, len: number): any;
        readFloat32Array(start: number, len: number): any;
        getUint8Array(start: number, len: number): Uint8Array;
        readUint8Array(start: number, len: number): Uint8Array;
        getInt16Array(start: number, len: number): any;
        readInt16Array(start: number, len: number): any;
        getFloat32(): number;
        readFloat32(): number;
        getFloat64(): number;
        readFloat64(): number;
        writeFloat32(value: number): void;
        writeFloat64(value: number): void;
        getInt32(): number;
        readInt32(): number;
        getUint32(): number;
        readUint32(): number;
        writeInt32(value: number): void;
        writeUint32(value: number): void;
        getInt16(): number;
        readInt16(): number;
        getUint16(): number;
        readUint16(): number;
        writeUint16(value: number): void;
        writeInt16(value: number): void;
        getUint8(): number;
        readUint8(): number;
        writeUint8(value: number): void;
        _getUInt8(pos: number): number;
        _readUInt8(pos: number): number;
        _getUint16(pos: number): number;
        _readUint16(pos: number): number;
        _getMatrix(): JTMatrix;
        _readMatrix(): JTMatrix;
        private _rUTF;
        getCustomString(len: number): string;
        readCustomString(len: number): string;
        get pos(): number;
        set pos(value: number);
        get bytesAvailable(): number;
        clear(): void;
        __getBuffer(): ArrayBuffer;
        writeUTFBytes(value: string): void;
        writeUTFString(value: string): void;
        writeUTFString32(value: string): void;
        readUTFString(): string;
        readUTFString32(): string;
        getUTFString(): string;
        readUTFBytes(len?: number): string;
        getUTFBytes(len?: number): string;
        writeByte(value: number): void;
        readByte(): number;
        getByte(): number;
        _ensureWrite(lengthToEnsure: number): void;
        writeArrayBuffer(arraybuffer: any, offset?: number, length?: number): void;
        readArrayBuffer(length: number): ArrayBuffer;
    }
}
declare module com {
    class JTHttpRequest extends JTEventDispatcher {
        protected _http: XMLHttpRequest;
        private static _urlEncode;
        protected _responseType: string;
        protected _data: any;
        protected _url: string;
        static COMPLETE: string;
        static PROGRESS: string;
        static ERROR: string;
        send(url: string, data?: any, method?: string, responseType?: string, headers?: any[] | null): void;
        protected _onProgress(e: any): void;
        protected _onAbort(e: any): void;
        protected _onError(e: any): void;
        protected _onLoad(e: any): void;
        protected error(message: string): void;
        protected complete(): void;
        static parseXMLFromString: Function;
        protected clear(): void;
        get url(): string;
        get data(): any;
        get http(): any;
    }
}
declare module com {
    class JTURLLoader extends JTHttpRequest {
        static TEXT: string;
        static JSON: string;
        static XML: string;
        static BUFFER: string;
        static IMAGE: string;
        static SOUND: string;
        static ATLAS: string;
        static FONT: string;
        constructor();
    }
}
declare module com {
    class JTWebSocket extends JTEventDispatcher {
        static LITTLE_ENDIAN: string;
        static BIG_ENDIAN: string;
        _endian: string;
        protected _socket: any;
        private _connected;
        private _addInputPosition;
        private _input;
        private _output;
        static OPEN: string;
        static MESSAGE: string;
        static CLOSE: string;
        static ERROR: string;
        disableInput: boolean;
        private _byteClass;
        protocols: any;
        get input(): any;
        get output(): any;
        get connected(): boolean;
        get endian(): string;
        set endian(value: string);
        constructor(host?: string | null, port?: number, byteClass?: new () => any, protocols?: any[] | null);
        connect(host: string, port: number): void;
        connectByUrl(url: string): void;
        clean(): void;
        close(): void;
        protected _onOpen(e: any): void;
        protected _onMessage(msg: any): void;
        protected _onClose(e: any): void;
        protected _onError(e: any): void;
        send(data: any): void;
        flush(): void;
    }
}
declare module com {
    abstract class JTChannel extends JTEventDispatcher implements JTIChannel {
        protected _cls: any;
        protected _port: number;
        protected _host: string;
        protected _channel: any;
        protected __name: string;
        protected _pipeline: JTIChannelPipeline;
        protected _encoder: JTIEncoderAdapter;
        protected _decoder: JTIDecoderAdapter;
        protected _connectUrl: string;
        constructor(cls: any);
        abstract flush(): void;
        abstract send(data: any): void;
        config(host: string, port: number): void;
        connect(): any;
        reload(): void;
        protected onReceiveMessage(data: any): void;
        writeAndFlush(data: any): void;
        get name(): string;
        set name(value: string);
        bind(channelPipeline: JTIChannelPipeline): void;
        get url(): string;
        get pipeline(): JTIChannelPipeline;
        get host(): string;
        get port(): number;
    }
}
declare module com {
    abstract class JTChannelGroup implements JTIChannelGroup {
        protected ___channelMap: {
            [channelType: string]: JTIChannel;
        };
        protected ___pipelineMap: {
            [channelType: string]: JTIChannelPipeline;
        };
        protected __connects: JTIConnection[];
        protected __size: number;
        static WEBSOCKET_CHANNEL: string;
        static HTTP_CHANNEL: string;
        constructor();
        abstract initialize(): void;
        addChannel(type: string, channel: JTIChannel): JTIChannelPipeline;
        setupChannel(type: string, __channleClass: any): JTIChannelPipeline;
        connect(): JTIConnection[];
        writeAndFlush(data: any): void;
        reload(): void;
        flush(): void;
        send(data: any): void;
        mark(channel: JTIConnection): void;
        getChannelPipeline(type: string): JTIChannelPipeline;
        getChannel(type: string): JTIChannel;
        get size(): number;
    }
}
declare module com {
    class JTHttpChannel extends JTChannel implements JTIHttpChannel {
        static METHOD_GET: string;
        static METHOD_POST: string;
        private __defaultMethodType;
        constructor(cls: any);
        flush(): void;
        writeMethod(methodType: string): void;
        send(data: any): void;
        sendForm(): void;
        sendGetToHeader(): void;
        sendGetToUrl(): void;
        get defaultMethodType(): string;
        config(host: string, port: number): any;
        connect(): any;
        protected onReceiveMessage(data: any): void;
        protected onErrorHandler(e: any): void;
    }
}
declare module com {
    class JTWebSocketChannel extends JTChannel {
        protected _connected: boolean;
        protected _buffers: any[];
        protected _idleState: JTIChannelContext;
        constructor(cls: any);
        flush(): void;
        send(data: any): void;
        config(host: string, port: number): any;
        connect(): any;
        protected onConnectSucceed(e: any): void;
        protected onCloseHandler(e: any): void;
        protected onErrorHandler(e: any): void;
        reload(): void;
    }
}
declare module com {
    abstract class JTChannelContext extends JTEventDispatcher implements JTIChannelContext {
        protected _channel: JTIChannel;
        protected _channelPipeline: JTIChannelPipeline;
        static ENCODE: string;
        static DECODE: string;
        static IDLE: string;
        constructor();
        abstract channelInactive(): void;
        abstract build(): void;
        getContext(type: string): JTIChannelContext;
        abstract channelActive(): void;
        get channel(): JTIChannel;
        bind(channelPipeline: JTIChannelPipeline): void;
    }
}
declare module com {
    abstract class JTChannelContextAdapter extends JTChannelContext {
        constructor();
    }
}
declare module com {
    abstract class JTAbstractDecoderAdapter extends JTChannelContextAdapter implements JTIDecoderAdapter {
        protected _responseMapper: JTAbstractResponseMapping;
        protected _protocolContext: JTAbstractProtocolManager;
        protected _errorMessageContext: JTAbstractProtocolErrorMessage;
        protected _downProtocol: JTIProtocol;
        constructor();
        channelActive(): void;
        abstract decode(data: any): any;
        readComplete(receivePackage: JTIReceivePackage): void;
        channelInactive(): void;
        protected toMapper(protocol: number, data: any): any;
    }
}
declare module com {
    class JTDecoderToByteAdapter extends JTAbstractDecoderAdapter {
        build(): void;
        constructor();
        decode(data: any): any;
        readComplete(receivePackage: JTIReceivePackage): void;
    }
}
declare module com {
    class JTDecoderToJSONAdapter extends JTAbstractDecoderAdapter {
        build(): void;
        constructor();
        decode(receiveMessage: any): any;
        readComplete(receivePackage: JTIReceivePackage): void;
    }
}
declare module com {
    abstract class JTAbstractEncoderAdapter extends JTChannelContextAdapter implements JTIEncoderAdapter {
        constructor();
        abstract encode(data: any): any;
        writeComplete(data: any): void;
        channelInactive(): void;
    }
}
declare module com {
    class JTEncodeToByteAdapter extends JTAbstractEncoderAdapter {
        build(): void;
        constructor();
        channelActive(): void;
        encode(data: any): any;
        writeComplete(data: any): void;
    }
}
declare module com {
    class JTEncodeToJSONAdapter extends JTAbstractEncoderAdapter {
        build(): void;
        constructor();
        channelActive(): void;
        encode(data: any): any;
        writeComplete(data: any): void;
    }
}
declare module com {
    abstract class JTAbstractIdleStateAdapter extends JTChannelContext {
        protected _timer: JTITimer;
        protected _repeatCount: number;
        protected _currentRepeatCount: number;
        protected _heartInterval: number;
        protected _connected: boolean;
        constructor(interval?: number, repeatInterval?: number, repeatTimes?: number);
        build(): void;
        channelInactive(): void;
        channelActive(): void;
        protected createTimer(interval: number): void;
        protected onTimerHandler(timer: JTITimer): void;
        protected onTimerComplete(timer: JTITimer): void;
    }
}
declare module com {
    class JTIdleStateAdapter extends JTAbstractIdleStateAdapter {
        constructor();
    }
}
declare module com {
    abstract class JTAbstractProtocolErrorMessage extends JTOptionContext {
        constructor();
        build(): void;
        checkPackageStatus(receivePackage: JTIReceivePackage): boolean;
        showErrorMessage(receivePackage: JTIReceivePackage): void;
    }
}
declare module com {
    abstract class JTAbstractProtocolManager extends JTOptionContext {
        protocolUp: JTIProtocol;
        downProtocol: JTIProtocol;
        constructor();
        build(): void;
        registerDownProtocol(protocol: number | string, waiting: boolean, security?: string): void;
        registerUpProtocol(protocol: number | string, waiting: boolean, security?: string): void;
        bind(classUp: any, classDown: any): void;
    }
}
declare module com {
    class JTItemProtocol {
        private _isWaiting;
        private _securityOption;
        private _protocol;
        constructor(protocol: number | string);
        setup(isWaiting: boolean, security?: string): void;
        static create(protocol: number | string, isWaiting: boolean, security?: string): JTItemProtocol;
        get protocol(): number | string;
        get securityOption(): string;
        get isWaiting(): boolean;
        hide(message: any): void;
        decrypt(message: any): any;
    }
}
declare module com {
    class JTProtocol implements JTIProtocol {
        private _protocols;
        private _encrypts;
        private _protocolMap;
        static NORMAL: number;
        static ERROR: number;
        constructor();
        build(): void;
        registerProtocol(protocol: number | string, waiting: boolean, security?: string): void;
        get protocols(): any[];
        get encrypts(): number[];
        getProtocol(protocol: number | string): JTItemProtocol;
        execute(message: any): void;
    }
}
declare module com {
    class JTPool<T extends JTIPoolObject> implements JTIPool {
        private static _poolMap;
        protected _cls: any;
        protected _list: T[];
        protected _totalCount: number;
        protected _size: number;
        constructor(cls: any);
        get(): T;
        put(item: T): void;
        get totalCount(): number;
        get size(): number;
        static instance(cls: any): JTIPool;
    }
}
declare module com {
    class JTCachePool<T extends JTIPoolObject> extends JTPool<T> {
        protected static _cachePoolMap: Object;
        protected _references: T[];
        constructor(cls: any);
        get(): T;
        recycles(items?: T[]): void;
        static instance(cls: any): JTICachePool;
    }
}
declare module com {
    class JTFixedPool<T extends JTIPoolObject> extends JTCachePool<T> {
        private _fixedCount;
        protected static _fixedPoolMap: Object;
        constructor(cls: any, fixedCount?: number);
        set fixedCount(value: number);
        protected create(): void;
        get(): T;
        get fullPool(): boolean;
        static instance(cls: any, fixedCount?: number): JTIFixedPool;
    }
}
declare module com {
    interface JTIRunnable {
        execute(): void;
    }
}
declare module com {
    class JTThread extends JTEventDispatcher {
        constructor();
    }
}
declare module com {
    class JTTimeUtils {
        static get runnbleTime(): number;
        static runLater(): Promise<unknown>;
        static callLater(fun: Function): void;
    }
}
declare module com {
    class JTTimeEvent {
        static TIMER: string;
        static TIMER_COMPLETE: string;
        static ENTER_FRAME: string;
        static ENTER_COMPLETE: string;
        static ENTER_LAST_FRAME: string;
        static JUMP_FRAME: string;
    }
}
declare module com {
    class JTTimerTool {
        static defaultTimer: JTTimerTool;
        static animationTimer: JTTimerTool;
        static logicTimer: JTTimerTool;
        private _pause;
        private _tasks;
        private _currentTime;
        private static _frameRate;
        private static _frameRateTime;
        static FAST_RATE: string;
        static NORMAL_RATE: string;
        static SLOWY_RATE: string;
        static FAST_FRAME_RATE: number;
        static NORMAL_FRAME_RATE: number;
        static SLOWY_FRAME_RATE: number;
        constructor();
        static launch(rate?: string): void;
        static get frameRate(): number;
        static get frameRateTime(): number;
        stop(): void;
        static actives(): void;
        active(): void;
        protected updateTicks(tick: number): void;
        protected updateTasks(): void;
        addTask(task: JTITimerTask): void;
        removeTask(task: JTITimerTask): void;
        put(task: JTITimerTask): void;
    }
}
declare module com {
    abstract class JTTimerTask extends JTEventDispatcher implements JTITimerTask {
        protected _currentTick: number;
        protected _interval: number;
        protected _totalTimes: number;
        protected _currentTimes: number;
        protected _running: boolean;
        constructor(interval?: number, loop?: number);
        reset(): void;
        updateTick(tick: number): void;
        get running(): boolean;
        recycle(): void;
    }
}
declare module com {
    class JTTimer extends JTTimerTask implements JTITimer {
        constructor(interval?: number, loop?: number);
        setup(interval: number, loop?: number): void;
        start(): void;
        stop(): void;
        get totalCount(): number;
        get currentCount(): number;
        set currentCount(value: number);
        get interval(): number;
        set interval(value: number);
        static create(interval: number, loop: number): JTITimer;
        static put(timer: JTITimer): void;
    }
}
declare module com {
    class JTEnterFrame extends JTTimerTask implements JTIEnterFrame {
        protected _frameRate: number;
        protected _loop: number;
        protected _loopTimes: number;
        protected SECOND_INTERVAL: number;
        protected DEFAULT_FRAME_RATE: number;
        protected DEFAULT_FRAME_RATE_TIME: number;
        constructor();
        get loop(): number;
        get frameRate(): number;
        setup(totalFrames: number, loop?: number, frameRate?: number): void;
        play(totalFrames: number, loop?: number, frameRate?: number): void;
        protected adjustFrameRate(value: number): void;
        stop(): void;
        pause(): void;
        get currentLoop(): number;
        get currentFrame(): number;
        get totalFrame(): number;
        updateTick(tick: number): void;
        static create(): JTIEnterFrame;
        static put(timer: JTIEnterFrame): void;
    }
}
declare module com {
    class JTJumpFrame extends JTEnterFrame implements JTIJumpFrame {
        private _jumpFrames;
        constructor();
        get jumpFrames(): number;
        updateTick(tick: number): void;
        static create(): JTIJumpFrame;
        static put(timer: JTIJumpFrame): void;
    }
}
declare module com {
    class JTOptimizeFrame extends JTJumpFrame {
        constructor();
        setup(totalFrames: number, loop?: number, frameRate?: number): void;
        play(totalFrames: number, loop?: number, frameRate?: number): void;
        updateTick(tick: number): void;
        protected adjustFrameRate(value: number): void;
        protected sqr(num: number, value: number): number;
    }
}
declare module com {
    class JTScheduleFrame extends JTEnterFrame implements JTIScheduleFrame {
        private _frames;
        private _createFrames;
        constructor();
        get currentItem(): any;
        get frames(): any[];
        set createFrames(value: JTCommand);
        play(totalFrames: number, loop?: number, frameRate?: number): void;
        recycle(): void;
        static create(): JTIScheduleFrame;
        static put(timer: JTIScheduleFrame): void;
    }
}
declare module com {
    interface JTIEnterFrame extends JTIPoolObject, JTIEventDispatcher {
        currentFrame: number;
        totalFrame: number;
        frameRate: number;
        running: boolean;
        loop: number;
        currentLoop: number;
        setup(totalFrames: number, loop: number, frameRate?: number): void;
        play(totalFrames: number, loop: number, frameRate?: number): void;
        stop(): void;
        reset(): void;
    }
}
declare module com {
    interface JTIJumpFrame extends JTIEnterFrame {
        jumpFrames: number;
    }
}
declare module com {
    interface JTIScheduleFrame extends JTIEnterFrame {
        frames: any[];
        createFrames: JTCommand;
        currentItem: any;
    }
}
declare module com {
    interface JTIScheduleTimer extends JTITimer {
        currentItem: any;
        dataList: any[];
    }
}
declare module com {
    interface JTITimerTask {
        updateTick(tick: number): void;
        running: boolean;
    }
}
declare module com {
    interface JTITimer extends JTIPoolObject, JTIEventDispatcher {
        currentCount: number;
        totalCount: number;
        interval: number;
        running: boolean;
        start(): void;
        stop(): void;
        reset(): void;
        setup(interval: number, loop: number): void;
    }
}
declare module com {
    class JTLoopTimer extends JTTimer {
    }
}
declare module com {
    class JTOptimizeTimer extends JTTimer {
        constructor(interval?: number, loop?: number);
    }
}
declare module com {
    class JTScheduleTimer extends JTTimer implements JTIScheduleTimer {
        private _dataList;
        constructor(interval: number, dataList: any[]);
        setup(interval: number): void;
        get currentItem(): any;
        get dataList(): any[];
        recycle(): void;
        static create(interval: number, loop: number): JTIScheduleTimer;
        static put(timer: JTITimer): void;
    }
}
import c = com;