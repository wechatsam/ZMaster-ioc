window.com = {};
window.c = window.com;
window.__extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

(function (com) {
    var JTEventSignaler = (function () {
        function JTEventSignaler() {
            this.__evtMap = null;
            this.__funMap = null;
        }
        JTEventSignaler.prototype.recycle = function () {
            this.removeEvents();
            this.removeFunctions();
        };
        JTEventSignaler.prototype.addEventListener = function (key, method, caller, once) {
            if (!this.evtMap[key]) {
                this.__evtMap[key] = method;
                com.JTEventManager.addEventListener(key, method, caller, once);
            }
        };
        JTEventSignaler.prototype.dispatchEvent = function (key, args) {
            key in this.evtMap && com.JTEventManager.dispatchEvent(key, args);
            return null;
        };
        JTEventSignaler.prototype.removeEventListener = function (key, method, caller) {
            var fun = this.evtMap[key];
            fun = null;
            this.__evtMap[key] = null;
            delete this.__evtMap[key];
            com.JTEventManager.removeEventListener(key, method, caller);
        };
        JTEventSignaler.prototype.removeEvents = function () {
            var caller = this;
            for (var key in this.evtMap) {
                this.removeEventListener(key, this.__evtMap[key], caller);
            }
            this.__evtMap = {};
        };
        JTEventSignaler.prototype.registerFunction = function (key, method, caller, once) {
            if (!this.funMap[key]) {
                this.__funMap[key] = method;
                com.JTFunctionManager.registerFunction(key, method, caller, once);
            }
        };
        JTEventSignaler.prototype.execute = function (key, args) {
            key in this.funMap && com.JTFunctionManager.execute(key, args);
        };
        JTEventSignaler.prototype.removeFunction = function (key, method, caller) {
            var fun = this.funMap[key];
            fun = null;
            this.__funMap[key] = null;
            delete this.__funMap[key];
            com.JTFunctionManager.removeFunction(key, method, caller);
        };
        JTEventSignaler.prototype.removeFunctions = function () {
            var caller = this;
            for (var key in this.funMap) {
                this.removeFunction(key, this.__funMap[key], caller);
            }
            this.__funMap = {};
        };
        Object.defineProperty(JTEventSignaler.prototype, "evtMap", {
            get: function () {
                if (!this.__evtMap) {
                    this.__evtMap = {};
                }
                return this.__evtMap;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTEventSignaler.prototype, "funMap", {
            get: function () {
                if (!this.__funMap) {
                    this.__funMap = {};
                }
                return this.__funMap;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTEventSignaler, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(JTEventSignaler);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTEventSignaler.create = function () {
            var signaler = this.pool.get();
            return signaler;
        };
        JTEventSignaler.put = function (signaler) {
            this.pool.put(signaler);
        };
        JTEventSignaler._pool = null;
        return JTEventSignaler;
    }());
    com.JTEventSignaler = JTEventSignaler;
})(com || (com = {}));

(function (com) {
    var JTComponent = (function (_super) {
        __extends(JTComponent, _super);
        function JTComponent() {
            var _this = _super.call(this) || this;
            _this._____ui = null;
            _this.___runClass = null;
            _this._url = null;
            _this._pacakgeName = null;
            _this.__classUI = null;
            _this.__componentId = null;
            _this._registeredClick = false;
            _this.__loaded = false;
            _this.__uiPackage = null;
            return _this;
        }
        JTComponent.prototype.loadAsset = function (url, id, runClass, registeredClick) {
            if (registeredClick === void 0) { registeredClick = true; }
            if (this._url == url && url != null) {
                com.info("asset already loaded");
                return;
            }
            this.__loaded = false;
            this._url = url;
            this.__componentId = id;
            this._pacakgeName = this._url.split("/").pop();
            this.___runClass = runClass;
            this._registeredClick = registeredClick;
            this.__uiPackage = fgui.UIPackage.getByName(url);
            if (!this.__uiPackage)
                this.load();
            else {
                this.loadAssetComplete();
            }
        };
        JTComponent.prototype.load = function () {
            fgui.UIPackage.loadPackage(this._url, this.loadAssetComplete.bind(this));
        };
        JTComponent.prototype.loadAssetComplete = function () {
            if (!this.__loaded) {
                this.___runClass && this.___runClass.bindAll();
                this.__uiPackage = fgui.UIPackage.addPackage(this._url);
                this._____ui = this.getObject(this.__componentId);
                this._____ui.on(fgui.Event.UNDISPLAY, this.onRemoveFromStage, this);
                com.JTResizeEvent.registerResize(this);
                com.JTPopupManager.center(this._____ui);
                if (this._registeredClick)
                    this._____ui.onClick(this.registerMouseClick, this);
            }
            this.locker.release();
            this.__loaded = true;
            this.notifyComplete();
        };
        JTComponent.prototype.bindUIRelation = function (parent, type) {
            this.bindRelation(this._____ui, parent, type);
        };
        JTComponent.prototype.bindRelation = function (child, parent, type) {
            child.setSize(parent.width, parent.height);
            child.addRelation(parent, type);
        };
        JTComponent.prototype.getObject = function (id) {
            var _____ui = this.__uiPackage.createObject(id);
            _____ui.setPosition(0, 0);
            return _____ui;
        };
        JTComponent.prototype.notifyComplete = function () {
        };
        JTComponent.prototype.registerMouseClick = function (e) {
            var target = e.target["$gobj"];
            var targetName = target.name;
            if (!targetName)
                return;
            this.onMouseClickHandler(target, targetName);
        };
        JTComponent.prototype.onMouseClickHandler = function (target, targetName) {
        };
        Object.defineProperty(JTComponent.prototype, "className", {
            get: function () {
                return this.constructor["name"];
            },
            enumerable: false,
            configurable: true
        });
        JTComponent.prototype.onResizeHandler = function () {
        };
        Object.defineProperty(JTComponent.prototype, "componentUI", {
            get: function () {
                return this._____ui;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTComponent.prototype, "classUI", {
            get: function () {
                return this.__classUI;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTComponent.prototype, "runClass", {
            get: function () {
                return this.___runClass;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTComponent.prototype, "locker", {
            get: function () {
                return null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTComponent.prototype, "uiPackage", {
            get: function () {
                return this.__uiPackage;
            },
            enumerable: false,
            configurable: true
        });
        JTComponent.prototype.onRemoveFromStage = function () {
            this._____ui && this._____ui.off(fgui.Event.UNDISPLAY, this.onRemoveFromStage, this);
            if (this._registeredClick)
                this._____ui && this._____ui.offClick(this.onMouseClickHandler, this);
            this._pacakgeName = this.___runClass = this._url =
                this.__classUI = this.__componentId = this.__uiPackage = this._____ui = null;
            this.recycle();
        };
        return JTComponent;
    }(com.JTEventSignaler));
    com.JTComponent = JTComponent;
})(com || (com = {}));

(function (com) {
    var JTPanel = (function (_super) {
        __extends(JTPanel, _super);
        function JTPanel() {
            return _super.call(this) || this;
        }
        JTPanel.prototype.load = function () {
            _super.prototype.load.call(this);
            this.locker.lock();
        };
        Object.defineProperty(JTPanel.prototype, "locker", {
            get: function () {
                return com.JTPopupManager.locker;
            },
            enumerable: false,
            configurable: true
        });
        return JTPanel;
    }(com.JTComponent));
    com.JTPanel = JTPanel;
})(com || (com = {}));

(function (com) {
    var JTScene = (function (_super) {
        __extends(JTScene, _super);
        function JTScene() {
            return _super.call(this) || this;
        }
        Object.defineProperty(JTScene.prototype, "locker", {
            get: function () {
                return com.JTAbstractSceneManager.locker;
            },
            enumerable: false,
            configurable: true
        });
        JTScene.prototype.getUIComponent = function (___class, __id, registeredClick, runClass) {
            if (registeredClick === void 0) { registeredClick = true; }
            var uiComponent = new ___class();
            uiComponent.setup(this, __id, registeredClick, runClass);
            return uiComponent;
        };
        return JTScene;
    }(com.JTComponent));
    com.JTScene = JTScene;
})(com || (com = {}));

(function (com) {
    var JTUIComponent = (function (_super) {
        __extends(JTUIComponent, _super);
        function JTUIComponent() {
            var _this = _super.call(this) || this;
            _this._componentId = null;
            _this.____ui = null;
            _this._url = null;
            _this.__runClass = null;
            _this.__loaded = false;
            _this._signaler = null;
            _this.__uiPackage = null;
            _this._registeredClick = false;
            _this.___owner = null;
            _this._signaler = com.JTEventSignaler.create();
            return _this;
        }
        Object.defineProperty(JTUIComponent.prototype, "uiPackage", {
            get: function () {
                return this.__uiPackage;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTUIComponent.prototype, "runClass", {
            get: function () {
                return this.__runClass;
            },
            enumerable: false,
            configurable: true
        });
        JTUIComponent.prototype.loadAsset = function (url, __id, registeredClick, runClass) {
            if (registeredClick === void 0) { registeredClick = true; }
            if (this._url == url && url != null) {
                com.info("asset already loaded");
                return;
            }
            this.__loaded = false;
            this._url = url;
            this._componentId = __id;
            this.__runClass = runClass;
            this._registeredClick = registeredClick;
            this.__uiPackage = fgui.UIPackage.getByName(url);
            if (!this.__uiPackage)
                this.load();
            else {
                this.loadAssetComplete();
            }
        };
        JTUIComponent.prototype.load = function () {
            fgui.UIPackage.loadPackage(this._url, this.loadAssetComplete.bind(this));
        };
        JTUIComponent.prototype.setup = function (owner, __id, registeredClick, runClass) {
            if (registeredClick === void 0) { registeredClick = true; }
            this._componentId = __id;
            this.__runClass = runClass;
            this.___owner = owner;
            this.__uiPackage = this.___owner.uiPackage;
            this._registeredClick = registeredClick;
            this.__runClass && this.__runClass.bindAll();
            this.buildingUI();
        };
        JTUIComponent.prototype.buildingUI = function () {
            this.____ui = this.__uiPackage.createObject(this._componentId);
            this.on(fgui.Event.UNDISPLAY, this.onRemoveFromeStage, this);
            if (this._registeredClick)
                this.____ui.onClick(this.registerMouseClick, this);
            this.bindUIRelation(this, fgui.RelationType.Height);
            this.addChild(this.____ui);
            com.JTResizeEvent.registerResize(this);
            this.notifyComplete();
        };
        JTUIComponent.prototype.bindUIRelation = function (parent, type) {
            this.bindRelation(this.____ui, parent, type);
        };
        JTUIComponent.prototype.bindRelation = function (child, parent, type) {
            child.setSize(parent.width, parent.height);
            child.addRelation(parent, type);
        };
        JTUIComponent.prototype.loadAssetComplete = function () {
            this.__loaded = true;
            this.__runClass && this.__runClass.bindAll();
            this.__uiPackage = fgui.UIPackage.addPackage(this._url);
            this.buildingUI();
        };
        JTUIComponent.prototype.notifyComplete = function () {
        };
        JTUIComponent.prototype.registerMouseClick = function (e) {
            var target = e.target["$gobj"];
            var targetName = target.name;
            if (!targetName)
                return;
            this.onMouseClickHandler(target, targetName);
        };
        JTUIComponent.prototype.onMouseClickHandler = function (target, targetName) {
        };
        JTUIComponent.prototype.onResizeHandler = function () {
        };
        JTUIComponent.prototype.onRemoveFromeStage = function (e) {
            this.off(fgui.Event.UNDISPLAY, this.onRemoveFromeStage, this);
            this.removeChildren();
            this._signaler && com.JTEventSignaler.put(this._signaler);
            this.___owner = this._signaler = this.__runClass = this.____ui = this.__uiPackage = null;
        };
        Object.defineProperty(JTUIComponent.prototype, "componentUI", {
            get: function () {
                return this.____ui;
            },
            enumerable: false,
            configurable: true
        });
        JTUIComponent.prototype.recycle = function () {
            this._signaler.recycle();
        };
        Object.defineProperty(JTUIComponent.prototype, "className", {
            get: function () {
                return this.constructor["name"];
            },
            enumerable: false,
            configurable: true
        });
        JTUIComponent.prototype.addEventListener = function (key, method, caller, once) {
            this._signaler.addEventListener(key, method, caller, once);
        };
        JTUIComponent.prototype.dispatchEvent = function (key, args) {
            return this._signaler.dispatchEvent(key, args);
        };
        JTUIComponent.prototype.removeEventListener = function (key, method, caller) {
            this._signaler.removeEventListener(key, method, caller);
        };
        JTUIComponent.prototype.removeEvents = function () {
            this._signaler.removeEvents();
        };
        JTUIComponent.prototype.registerFunction = function (key, method, caller, once) {
            this._signaler.registerFunction(key, method, caller, once);
        };
        JTUIComponent.prototype.execute = function (key, args) {
            this._signaler.execute(key, args);
        };
        JTUIComponent.prototype.removeFunction = function (key, method, caller) {
            this._signaler.removeFunction(key, method, caller);
        };
        JTUIComponent.prototype.removeFunctions = function () {
            this._signaler.removeFunctions();
        };
        return JTUIComponent;
    }(fgui.GComponent));
    com.JTUIComponent = JTUIComponent;
})(com || (com = {}));

(function (com) {
    var JTDictionary = (function () {
        function JTDictionary() {
            this._values = [];
            this._keys = [];
        }
        Object.defineProperty(JTDictionary.prototype, "values", {
            get: function () {
                return this._values;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTDictionary.prototype, "keys", {
            get: function () {
                return this._keys;
            },
            enumerable: false,
            configurable: true
        });
        JTDictionary.prototype.set = function (key, value) {
            var index = this.indexOf(key);
            if (index >= 0) {
                this._values[index] = value;
                return;
            }
            this._keys.push(key);
            this._values.push(value);
        };
        JTDictionary.prototype.indexOf = function (key) {
            var index = this._keys.indexOf(key);
            return index;
        };
        JTDictionary.prototype.get = function (key) {
            var index = this.indexOf(key);
            return index < 0 ? null : this._values[index];
        };
        JTDictionary.prototype.remove = function (key) {
            var index = this.indexOf(key);
            var value = null;
            if (index >= 0) {
                this._keys.splice(index, 1);
                value = this._values.splice(index, 1).shift();
            }
            return value;
        };
        JTDictionary.prototype.clear = function () {
            this._values.length = 0;
            this._keys.length = 0;
        };
        return JTDictionary;
    }());
    com.JTDictionary = JTDictionary;
})(com || (com = {}));

(function (com) {
    function execute(key, args) {
        com.JTFunctionManager.execute(key, args);
    }
    com.execute = execute;
    function dispatchEvent(key, args) {
        com.JTEventManager.dispatchEvent(key, args);
    }
    com.dispatchEvent = dispatchEvent;
    function info() {
        var msgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msgs[_i] = arguments[_i];
        }
        var content = "";
        for (var i = 0; i < msgs.length; i++) {
            content += msgs[i];
        }
        com.JTLogger.info(content);
    }
    com.info = info;
    function error() {
        var msgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msgs[_i] = arguments[_i];
        }
        var content = "";
        for (var i = 0; i < msgs.length; i++) {
            content += msgs[i];
        }
        com.JTLogger.error(content);
    }
    com.error = error;
    function debug() {
        var msgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msgs[_i] = arguments[_i];
        }
        var content = "";
        for (var i = 0; i < msgs.length; i++) {
            content += msgs[i];
        }
        com.JTLogger.debug(content);
    }
    com.debug = debug;
    function assets(flag) {
        var msgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msgs[_i - 1] = arguments[_i];
        }
        var content = "";
        for (var i = 0; i < msgs.length; i++) {
            content += msgs[i];
        }
        com.JTLogger.assert(flag, content);
    }
    com.assets = assets;
})(com || (com = {}));

(function (com) {
    var JTLocalCache = (function () {
        function JTLocalCache(name) {
            this._dataMap = null;
            this._name = null;
            JTLocalCache.localCache = window.localStorage;
            this.name = name;
        }
        Object.defineProperty(JTLocalCache.prototype, "name", {
            set: function (value) {
                this._name = value;
                if (JTLocalCache.localCache[value]) {
                    this._dataMap = JSON.parse(JTLocalCache.localCache[value]);
                }
                else {
                    this._dataMap = {};
                    this.update();
                }
            },
            enumerable: false,
            configurable: true
        });
        JTLocalCache.prototype.setObject = function (key, data) {
            this._dataMap[key] = data;
            this.update();
        };
        JTLocalCache.prototype.getObject = function (key) {
            return this._dataMap[key];
        };
        JTLocalCache.prototype.hasKey = function (key) {
            return key in this._dataMap;
        };
        JTLocalCache.prototype.delete = function (key) {
            this._dataMap[key] = null;
            delete this._dataMap[key];
            this.update();
        };
        JTLocalCache.prototype.update = function () {
            JTLocalCache.localCache.setItem(this._name, JSON.stringify(this._dataMap));
        };
        JTLocalCache.prototype.clean = function () {
            this._dataMap = {};
            this.update();
        };
        JTLocalCache.prototype.recycle = function () {
            this.clean();
            this._name = null;
        };
        Object.defineProperty(JTLocalCache.prototype, "dataMap", {
            get: function () {
                return this._dataMap;
            },
            enumerable: false,
            configurable: true
        });
        JTLocalCache.localCache = null;
        return JTLocalCache;
    }());
    com.JTLocalCache = JTLocalCache;
})(com || (com = {}));

(function (com) {
    var JTLogger = (function () {
        function JTLogger() {
        }
        JTLogger.info = function () {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            this.print(this.LOG_INFO, content);
        };
        JTLogger.debug = function () {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += JSON.stringify(msgs[i]);
            }
            this.print(this.LOG_DEBUG, content);
        };
        JTLogger.assert = function (flag) {
            var msgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                msgs[_i - 1] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            if (!flag)
                throw new Error(content);
        };
        JTLogger.error = function () {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            throw new Error(content);
        };
        JTLogger.print = function (type, info) {
            var date = new Date();
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var time = hour + ":" + minutes + ":" + seconds + " >>>> ";
            console.log(type + time + info);
        };
        JTLogger.LOG_INFO = "[INFO] :";
        JTLogger.LOG_ASSET = "[ASSET] :";
        JTLogger.LOG_DEBUG = "[DEBUG] :";
        JTLogger.LOG_ERROR = "[ERROR] :";
        return JTLogger;
    }());
    com.JTLogger = JTLogger;
})(com || (com = {}));

(function (com) {
    var JTMatrix = (function () {
        function JTMatrix(a, b, c, d, tx, ty, nums) {
            if (a === void 0) { a = 1; }
            if (b === void 0) { b = 0; }
            if (c === void 0) { c = 0; }
            if (d === void 0) { d = 1; }
            if (tx === void 0) { tx = 0; }
            if (ty === void 0) { ty = 0; }
            if (nums === void 0) { nums = 0; }
            this._bTransform = false;
            if (JTMatrix._createFun != null) {
                return JTMatrix._createFun(a, b, c, d, tx, ty, nums);
            }
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            this._checkTransform();
        }
        JTMatrix.prototype.identity = function () {
            this.a = this.d = 1;
            this.b = this.tx = this.ty = this.c = 0;
            this._bTransform = false;
            return this;
        };
        JTMatrix.prototype._checkTransform = function () {
            return this._bTransform = (this.a !== 1 || this.b !== 0 || this.c !== 0 || this.d !== 1);
        };
        JTMatrix.prototype.setTranslate = function (x, y) {
            this.tx = x;
            this.ty = y;
            return this;
        };
        JTMatrix.prototype.translate = function (x, y) {
            this.tx += x;
            this.ty += y;
            return this;
        };
        JTMatrix.prototype.scale = function (x, y) {
            this.a *= x;
            this.d *= y;
            this.c *= x;
            this.b *= y;
            this.tx *= x;
            this.ty *= y;
            this._bTransform = true;
            return this;
        };
        JTMatrix.prototype.rotate = function (angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var a1 = this.a;
            var c1 = this.c;
            var tx1 = this.tx;
            this.a = a1 * cos - this.b * sin;
            this.b = a1 * sin + this.b * cos;
            this.c = c1 * cos - this.d * sin;
            this.d = c1 * sin + this.d * cos;
            this.tx = tx1 * cos - this.ty * sin;
            this.ty = tx1 * sin + this.ty * cos;
            this._bTransform = true;
            return this;
        };
        JTMatrix.prototype.skew = function (x, y) {
            var tanX = Math.tan(x);
            var tanY = Math.tan(y);
            var a1 = this.a;
            var b1 = this.b;
            this.a += tanY * this.c;
            this.b += tanY * this.d;
            this.c += tanX * a1;
            this.d += tanX * b1;
            return this;
        };
        JTMatrix.prototype.invertTransformPoint = function (out) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;
            var a2 = d1 / n;
            var b2 = -b1 / n;
            var c2 = -c1 / n;
            var d2 = a1 / n;
            var tx2 = (c1 * this.ty - d1 * tx1) / n;
            var ty2 = -(a1 * this.ty - b1 * tx1) / n;
            return out.setTo(a2 * out.x + c2 * out.y + tx2, b2 * out.x + d2 * out.y + ty2);
        };
        JTMatrix.prototype.transformPoint = function (out) {
            return out.setTo(this.a * out.x + this.c * out.y + this.tx, this.b * out.x + this.d * out.y + this.ty);
        };
        JTMatrix.prototype.transformPointN = function (out) {
            return out.setTo(this.a * out.x + this.c * out.y, this.b * out.x + this.d * out.y);
        };
        JTMatrix.prototype.getScaleX = function () {
            return this.b === 0 ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
        };
        JTMatrix.prototype.getScaleY = function () {
            return this.c === 0 ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
        };
        JTMatrix.prototype.invert = function () {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;
            this.a = d1 / n;
            this.b = -b1 / n;
            this.c = -c1 / n;
            this.d = a1 / n;
            this.tx = (c1 * this.ty - d1 * tx1) / n;
            this.ty = -(a1 * this.ty - b1 * tx1) / n;
            return this;
        };
        JTMatrix.prototype.setTo = function (a, b, c, d, tx, ty) {
            this.a = a, this.b = b, this.c = c, this.d = d, this.tx = tx, this.ty = ty;
            return this;
        };
        JTMatrix.prototype.concat = function (matrix) {
            var a = this.a;
            var c = this.c;
            var tx = this.tx;
            this.a = a * matrix.a + this.b * matrix.c;
            this.b = a * matrix.b + this.b * matrix.d;
            this.c = c * matrix.a + this.d * matrix.c;
            this.d = c * matrix.b + this.d * matrix.d;
            this.tx = tx * matrix.a + this.ty * matrix.c + matrix.tx;
            this.ty = tx * matrix.b + this.ty * matrix.d + matrix.ty;
            return this;
        };
        JTMatrix.mul = function (m1, m2, out) {
            var aa = m1.a, ab = m1.b, ac = m1.c, ad = m1.d, atx = m1.tx, aty = m1.ty;
            var ba = m2.a, bb = m2.b, bc = m2.c, bd = m2.d, btx = m2.tx, bty = m2.ty;
            if (bb !== 0 || bc !== 0) {
                out.a = aa * ba + ab * bc;
                out.b = aa * bb + ab * bd;
                out.c = ac * ba + ad * bc;
                out.d = ac * bb + ad * bd;
                out.tx = ba * atx + bc * aty + btx;
                out.ty = bb * atx + bd * aty + bty;
            }
            else {
                out.a = aa * ba;
                out.b = ab * bd;
                out.c = ac * ba;
                out.d = ad * bd;
                out.tx = ba * atx + btx;
                out.ty = bd * aty + bty;
            }
            return out;
        };
        JTMatrix.mul16 = function (m1, m2, out) {
            var aa = m1.a, ab = m1.b, ac = m1.c, ad = m1.d, atx = m1.tx, aty = m1.ty;
            var ba = m2.a, bb = m2.b, bc = m2.c, bd = m2.d, btx = m2.tx, bty = m2.ty;
            if (bb !== 0 || bc !== 0) {
                out[0] = aa * ba + ab * bc;
                out[1] = aa * bb + ab * bd;
                out[4] = ac * ba + ad * bc;
                out[5] = ac * bb + ad * bd;
                out[12] = ba * atx + bc * aty + btx;
                out[13] = bb * atx + bd * aty + bty;
            }
            else {
                out[0] = aa * ba;
                out[1] = ab * bd;
                out[4] = ac * ba;
                out[5] = ad * bd;
                out[12] = ba * atx + btx;
                out[13] = bd * aty + bty;
            }
            return out;
        };
        JTMatrix.prototype.scaleEx = function (x, y) {
            var ba = this.a, bb = this.b, bc = this.c, bd = this.d;
            if (bb !== 0 || bc !== 0) {
                this.a = x * ba;
                this.b = x * bb;
                this.c = y * bc;
                this.d = y * bd;
            }
            else {
                this.a = x * ba;
                this.b = 0 * bd;
                this.c = 0 * ba;
                this.d = y * bd;
            }
            this._bTransform = true;
        };
        JTMatrix.prototype.rotateEx = function (angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var ba = this.a, bb = this.b, bc = this.c, bd = this.d;
            if (bb !== 0 || bc !== 0) {
                this.a = cos * ba + sin * bc;
                this.b = cos * bb + sin * bd;
                this.c = -sin * ba + cos * bc;
                this.d = -sin * bb + cos * bd;
            }
            else {
                this.a = cos * ba;
                this.b = sin * bd;
                this.c = -sin * ba;
                this.d = cos * bd;
            }
            this._bTransform = true;
        };
        JTMatrix.prototype.clone = function () {
            var dec = JTMatrix.create();
            dec.a = this.a;
            dec.b = this.b;
            dec.c = this.c;
            dec.d = this.d;
            dec.tx = this.tx;
            dec.ty = this.ty;
            dec._bTransform = this._bTransform;
            return dec;
        };
        JTMatrix.prototype.copyTo = function (dec) {
            dec.a = this.a;
            dec.b = this.b;
            dec.c = this.c;
            dec.d = this.d;
            dec.tx = this.tx;
            dec.ty = this.ty;
            dec._bTransform = this._bTransform;
            return dec;
        };
        JTMatrix.prototype.toString = function () {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
        };
        JTMatrix.prototype.destroy = function () {
            this.recycle();
        };
        JTMatrix.prototype.recycle = function () {
            this.identity();
        };
        Object.defineProperty(JTMatrix, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(JTMatrix);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTMatrix.create = function () {
            return this.pool.get();
        };
        JTMatrix.put = function (point) {
            this.pool.put(point);
        };
        JTMatrix.EMPTY = new JTMatrix();
        JTMatrix.TEMP = new JTMatrix();
        JTMatrix._createFun = null;
        JTMatrix._pool = null;
        return JTMatrix;
    }());
    com.JTMatrix = JTMatrix;
})(com || (com = {}));

(function (com) {
    var JTPoint = (function () {
        function JTPoint(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        JTPoint.prototype.recycle = function () {
            this.x = this.y = 0;
            return this;
        };
        Object.defineProperty(JTPoint, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(JTPoint);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTPoint.create = function () {
            return this.pool.get();
        };
        JTPoint.put = function (point) {
            this.pool.put(point);
        };
        JTPoint.prototype.setTo = function (x, y) {
            this.x = x;
            this.y = y;
            return this;
        };
        JTPoint.prototype.distance = function (x, y) {
            return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
        };
        JTPoint.prototype.toString = function () {
            return this.x + "," + this.y;
        };
        JTPoint.prototype.normalize = function () {
            var d = Math.sqrt(this.x * this.x + this.y * this.y);
            if (d > 0) {
                var id = 1.0 / d;
                this.x *= id;
                this.y *= id;
            }
        };
        JTPoint.prototype.copy = function (point) {
            return this.setTo(point.x, point.y);
        };
        JTPoint.TEMP = new JTPoint();
        JTPoint.EMPTY = new JTPoint();
        JTPoint._pool = null;
        return JTPoint;
    }());
    com.JTPoint = JTPoint;
})(com || (com = {}));

(function (com) {
    var JTSession = (function () {
        function JTSession() {
        }
        Object.defineProperty(JTSession, "stage", {
            get: function () {
                if (!this._stage) {
                    this._stage = fgui.GRoot.create();
                    this._stage.setPosition(0, 0);
                }
                return this._stage;
            },
            enumerable: false,
            configurable: true
        });
        JTSession.channel = null;
        JTSession.designHeight = 0;
        JTSession.designWidth = 0;
        JTSession.stageWidth = 0;
        JTSession.stageHeight = 0;
        JTSession._stage = null;
        return JTSession;
    }());
    com.JTSession = JTSession;
})(com || (com = {}));

(function (com) {
    var JTTextLoader = (function () {
        function JTTextLoader(url, cls) {
            this._url = null;
            this._class = null;
            this._urlLoader = null;
            this._dataMap = {};
            this._values = [];
            this._datas = null;
            if (!url || !cls)
                return;
            this.load(url, cls);
        }
        JTTextLoader.prototype.load = function (url, cls) {
            this._url = url;
            this._class = cls;
            this._urlLoader = new com.JTURLLoader();
            this._urlLoader.addEventListener(com.JTURLLoader.ERROR, this.onloadError, this);
            this._urlLoader.addEventListener(com.JTURLLoader.COMPLETE, this.onloadComplete, this);
            this._urlLoader.send(url, null, "get", com.JTURLLoader.BUFFER);
        };
        JTTextLoader.prototype.parseZip = function (data, cls) {
            this._class = cls;
        };
        JTTextLoader.prototype.parseBinary = function (data, cls) {
            this._class = cls;
        };
        JTTextLoader.prototype.parseStr = function (content, cls) {
            this._datas = content;
            this._class = cls;
            var list = content.split('\n');
            var index = content.indexOf("\r");
            if (index != -1) {
                list = list.join("").split("\r");
            }
            var head = list.shift();
            var propertys = head.split('\t');
            var keys = null;
            for (var i = 0; i < list.length; i++) {
                var line = list[i];
                var values = line.split("\t");
                if (values.length < propertys.length)
                    continue;
                var template = new this._class();
                if (!keys)
                    keys = Object.keys(template);
                for (var j = 0; j < keys.length; j++) {
                    var property = propertys[j];
                    if (i == 0) {
                        var index_1 = keys.indexOf(property);
                        if (index_1 == -1) {
                            com.JTLogger.info("[JTTextLoader.parseStr] cls " + this._class + " template cant find the key:  " + property);
                            continue;
                        }
                    }
                    var value = values[j];
                    switch (true) {
                        case typeof template[property] == 'number':
                            {
                                value = Number(value);
                                break;
                            }
                        case value.indexOf("{") != -1:
                            {
                                value = JSON.parse(value);
                                break;
                            }
                    }
                    template[property] = value;
                    if (property == "id") {
                        this._dataMap[value] = template;
                        this._values = value;
                    }
                }
                template.endFill();
            }
        };
        JTTextLoader.prototype.onloadComplete = function (data) {
            var buffer = new com.JTBuffer(data);
            buffer.pos = 0;
            var content = buffer.readUTFBytes(buffer.bytesAvailable);
            this.parseStr(content, this._class);
        };
        JTTextLoader.prototype.onloadError = function (data) {
            com.JTLogger.error("[JTTextLoader.load]  load text data error! the url : " + this._url);
        };
        JTTextLoader.prototype.toValues = function () {
            var list = [];
            var totalCount = this._values.length;
            for (var i = 0; i < totalCount; i++) {
                var template = this._values[i];
                list.push(template);
            }
            return list;
        };
        JTTextLoader.prototype.toValue = function (key) {
            return this._dataMap[key];
        };
        JTTextLoader._dataMap = {};
        JTTextLoader.PARSE_STRING = "String";
        JTTextLoader.PARSE_BINARY = "Binary";
        JTTextLoader.PARSE_ZIP = "Zip";
        JTTextLoader.LOAD_DEFAULT = "load";
        JTTextLoader.LOADED_PARSE = "loaded";
        return JTTextLoader;
    }());
    com.JTTextLoader = JTTextLoader;
})(com || (com = {}));

(function (com) {
    var JTApplicationBootstrap = (function (_super) {
        __extends(JTApplicationBootstrap, _super);
        function JTApplicationBootstrap() {
            var _this = _super.call(this) || this;
            _this._serverLoader = null;
            _this._serverTemplate = null;
            _this.__loaderManager = null;
            _this._launchConnected = false;
            _this.__channelGroup = null;
            return _this;
        }
        JTApplicationBootstrap.prototype.option = function (type, ___cxt) {
            return this.registerContextAlias(type, ___cxt);
        };
        JTApplicationBootstrap.prototype.builds = function () {
            var _____ctxs = JTApplicationBootstrap.____ctx;
            var count = _____ctxs.length;
            for (var i = 0; i < count; i++) {
                var ___c = _____ctxs[i];
                !___c.builded && ___c.build();
            }
        };
        JTApplicationBootstrap.prototype.buildsComplete = function () {
            var ____ctxs = JTApplicationBootstrap.____ctx;
            var count = ____ctxs.length;
            for (var i = 0; i < count; i++) {
                var __c = ____ctxs[i];
                !__c.buildCompleted && __c.buildComplete();
            }
        };
        JTApplicationBootstrap.prototype.channel = function (channel) {
            this.builds();
            this.registerContextAlias(JTApplicationBootstrap.CHANNEL, channel);
            var channelPipeline = new com.JTChannelPipeline();
            channelPipeline.bind(channel);
            return this.registerContextAlias(JTApplicationBootstrap.CHANNEL_PIPELINE, channelPipeline);
        };
        JTApplicationBootstrap.prototype.channelGroup = function (channelGroup) {
            this.builds();
            this.__channelGroup = channelGroup;
            return channelGroup;
        };
        JTApplicationBootstrap.prototype.childOption = function (type, channelAdapter) {
            var channelPipeline = this.getContext(JTApplicationBootstrap.CHANNEL_PIPELINE);
            channelPipeline.childOption(type, channelAdapter);
            return this;
        };
        JTApplicationBootstrap.prototype.layout = function (layoutType) {
            com.JTLayoutManager.currentLayout = layoutType;
            return this.registerContextAlias(JTApplicationBootstrap.CONTEXT_LAYOUT, new com.JTLayoutManager());
        };
        JTApplicationBootstrap.prototype.configServerTemaplete = function (serverLoader, serverId) {
            this._serverLoader = serverLoader;
            this._serverTemplate = serverLoader.toValue(serverId);
            return this._serverTemplate;
        };
        JTApplicationBootstrap.prototype.conofig = function (host, port) {
            this._serverTemplate = new com.JTServerConfigTemplate();
            this._serverTemplate.setup(host, port);
            return this._serverTemplate;
        };
        JTApplicationBootstrap.prototype.connect = function () {
            var channel = null;
            if (!this._launchConnected) {
                if (this.__channelGroup) {
                    this.__channelGroup.initialize();
                    channel = this.__channelGroup.connect();
                }
                else {
                    var channelPipeline = this.getContext(JTApplicationBootstrap.CHANNEL_PIPELINE);
                    channel = channelPipeline.launch(this._serverTemplate.host, this._serverTemplate.port);
                }
                this._launchConnected = true;
            }
            return channel;
        };
        JTApplicationBootstrap.prototype.launch = function () {
            if (this.__loaderManager)
                this.__loaderManager.run();
            this.buildsComplete();
            var channel = this.connect();
            this.launchSucceed();
            return channel;
        };
        JTApplicationBootstrap.prototype.preloadAssets = function (assets, createRender) {
            if (!this.__loaderManager) {
                this.__loaderManager = new com.JTFuturePipeline();
            }
            else {
                this.__loaderManager.reset();
            }
            this.__loaderManager.dataList = assets;
            this.__loaderManager.itemRender = createRender;
            return this.__loaderManager;
        };
        JTApplicationBootstrap.prototype.load = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.__loaderManager.run()];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        JTApplicationBootstrap.prototype.setDesignResolutionSize = function (width, height, resolutionPolicy) {
            com.JTSession.stageWidth = width;
            com.JTSession.stageHeight = height;
        };
        JTApplicationBootstrap.prototype.updateConfigs = function (resources) {
            var templateManager = this.getContext(JTApplicationBootstrap.CONTEXT_TEMPLATE);
            templateManager.updateConfigs(resources);
        };
        JTApplicationBootstrap.prototype.registerContextAlias = function (key, __context) {
            JTApplicationBootstrap._contextMap[key] = __context;
            var contexts = JTApplicationBootstrap.____ctx;
            if (__context instanceof com.JTOptionContext)
                contexts.push(__context);
            return this;
        };
        JTApplicationBootstrap.prototype.getContext = function (key) {
            return JTApplicationBootstrap._contextMap[key];
        };
        JTApplicationBootstrap.getContext = function (key) {
            return this._contextMap[key];
        };
        JTApplicationBootstrap._contextMap = {};
        JTApplicationBootstrap.____ctx = [];
        JTApplicationBootstrap.CONTEXT_PROTOCOL = "Context_Protocol";
        JTApplicationBootstrap.CONTEXT_ERROR_MESSAGE = "Context_ErrorMessage";
        JTApplicationBootstrap.CONTEXT_TEMPLATE = "Context_Template";
        JTApplicationBootstrap.CONTEXT_MAPPING = "Context_Response_Mapping";
        JTApplicationBootstrap.CONTEXT_SCENE = "Context_Scene";
        JTApplicationBootstrap.CONTEXT_LAYER = "Context_Layer";
        JTApplicationBootstrap.CONTEXT_RUNNER = "Context_RUNNER";
        JTApplicationBootstrap.CONTEXT_LAYOUT = "Context_Layout";
        JTApplicationBootstrap.CHANNEL = "Channel";
        JTApplicationBootstrap.CHANNEL_PIPELINE = "Pipeline";
        JTApplicationBootstrap.CHANNEL_GROUP = "ChannelGroup";
        return JTApplicationBootstrap;
    }(com.JTEventSignaler));
    com.JTApplicationBootstrap = JTApplicationBootstrap;
})(com || (com = {}));

(function (com) {
    var JTOptionContext = (function (_super) {
        __extends(JTOptionContext, _super);
        function JTOptionContext() {
            var _this = _super.call(this) || this;
            _this._builded = false;
            _this._buildCompleted = false;
            return _this;
        }
        Object.defineProperty(JTOptionContext.prototype, "builded", {
            get: function () {
                return this._builded;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTOptionContext.prototype, "buildCompleted", {
            get: function () {
                return this._buildCompleted;
            },
            enumerable: false,
            configurable: true
        });
        return JTOptionContext;
    }(com.JTEventSignaler));
    com.JTOptionContext = JTOptionContext;
})(com || (com = {}));

(function (com) {
    var JTLocker = (function () {
        function JTLocker() {
            this._resolve = null;
            this._reject = null;
            this._locker = null;
            this.___result = null;
        }
        JTLocker.prototype.lock = function (__result) {
            if (this._locker)
                return this._locker;
            var locker = this;
            this.___result = __result ? __result : this;
            this._locker = new Promise(function (resolve, reject) {
                locker._reject = reject;
                locker._resolve = resolve;
            });
            return this._locker;
        };
        JTLocker.prototype.release = function () {
            this._resolve && this._resolve.apply(this, [this.___result]);
            this.recycle();
        };
        JTLocker.prototype.kill = function () {
            this._reject && this._reject.apply(this, [this.___result]);
            this.recycle();
        };
        JTLocker.prototype.locked = function () {
            return this._locker != null;
        };
        JTLocker.prototype.tryLock = function (__caller) {
            this.___result = __caller ? __caller : this;
            return this.locked() ? this._locker : this.lock(this.___result);
        };
        JTLocker.prototype.recycle = function () {
            this.___result = this._locker = this._reject = this._resolve = null;
        };
        JTLocker.create = function () {
            return com.JTPool.instance(JTLocker).get();
        };
        return JTLocker;
    }());
    com.JTLocker = JTLocker;
})(com || (com = {}));

(function (com) {
    var JTCounter = (function (_super) {
        __extends(JTCounter, _super);
        function JTCounter() {
            var _this = _super.call(this) || this;
            _this._failCount = 0;
            _this._succeedCount = 0;
            _this._lockedCount = 0;
            return _this;
        }
        JTCounter.prototype.release = function () {
            _super.prototype.release.call(this);
            this._succeedCount++;
            this._lockedCount++;
        };
        JTCounter.prototype.kill = function () {
            _super.prototype.kill.call(this);
            this._failCount++;
            this._lockedCount++;
        };
        Object.defineProperty(JTCounter.prototype, "succeedCount", {
            get: function () {
                return this._succeedCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTCounter.prototype, "failCount", {
            get: function () {
                return this._failCount;
            },
            enumerable: false,
            configurable: true
        });
        JTCounter.prototype.recycle = function () {
            _super.prototype.recycle.call(this);
            this._failCount = this._lockedCount = this._succeedCount = 0;
        };
        JTCounter.prototype.reset = function () {
            this.recycle();
        };
        Object.defineProperty(JTCounter.prototype, "lockedCount", {
            get: function () {
                return this._lockedCount;
            },
            enumerable: false,
            configurable: true
        });
        JTCounter.create = function () {
            return com.JTPool.instance(JTCounter).get();
        };
        return JTCounter;
    }(com.JTLocker));
    com.JTCounter = JTCounter;
})(com || (com = {}));

(function (com) {
    var JTEventDispatcher = (function () {
        function JTEventDispatcher() {
            this.__evtMap = null;
        }
        JTEventDispatcher.prototype.recycle = function () {
            this.removes();
        };
        JTEventDispatcher.prototype.addEventListener = function (key, method, caller, once) {
            var list = this.evtMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element && element.method == method && element.caller == caller) {
                        return;
                    }
                });
            }
            else {
                list = [];
                this.__evtMap[key] = list;
            }
            var command = com.JTCommand.create(caller, method, null, once);
            list.push(command);
        };
        JTEventDispatcher.prototype.dispatchEvent = function (key, args) {
            var _this = this;
            var list = this.evtMap[key];
            if (list) {
                list.forEach(function (command) {
                    command && command.runWith(args);
                    if (command.once) {
                        _this.delete(list, command);
                    }
                });
            }
        };
        JTEventDispatcher.prototype.removeEventListener = function (key, method, caller) {
            var _this = this;
            var list = this.evtMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element && element.method == method && element.caller == caller) {
                        _this.delete(list, element);
                    }
                });
            }
        };
        JTEventDispatcher.prototype.removeEvents = function (key) {
            var _this = this;
            var list = this.evtMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element) {
                        _this.delete(list, element);
                    }
                });
                this.__evtMap[key] = null;
                delete this.__evtMap[key];
            }
        };
        JTEventDispatcher.prototype.delete = function (list, command) {
            var index = list.indexOf(command);
            var removes = list.splice(index, 1);
            removes.shift();
            com.JTCommand.put(command);
        };
        JTEventDispatcher.prototype.removes = function () {
            for (var key in this.evtMap) {
                this.removeEvents(key);
            }
            this.__evtMap = {};
        };
        Object.defineProperty(JTEventDispatcher.prototype, "evtMap", {
            get: function () {
                if (!this.__evtMap) {
                    this.__evtMap = {};
                }
                return this.__evtMap;
            },
            enumerable: false,
            configurable: true
        });
        return JTEventDispatcher;
    }());
    com.JTEventDispatcher = JTEventDispatcher;
})(com || (com = {}));

(function (com) {
    var JTFuturePipeline = (function (_super) {
        __extends(JTFuturePipeline, _super);
        function JTFuturePipeline(__datas) {
            var _this = _super.call(this) || this;
            _this._counter = com.JTTaskCounter.create();
            _this._tasks = null;
            _this._factroy = null;
            _this._itemProvider = null;
            _this._itemRender = null;
            _this.___dataList = null;
            _this.dataList = __datas;
            return _this;
        }
        Object.defineProperty(JTFuturePipeline.prototype, "dataList", {
            set: function (___datas) {
                this.___dataList = ___datas;
                this._counter.setTotalCount(___datas.length);
            },
            enumerable: false,
            configurable: true
        });
        JTFuturePipeline.prototype.run = function () {
            return __awaiter(this, void 0, void 0, function () {
                var task;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._tasks = this.createTasks();
                            _a.label = 1;
                        case 1:
                            if (!this._tasks.length) return [3, 3];
                            task = this._tasks.shift();
                            task.relevance(this._counter);
                            task.execute();
                            return [4, this._counter.lock()];
                        case 2:
                            _a.sent();
                            this.dispatchEvent(com.JTTaskEvent.TASK_PROGRESS, this);
                            task.recycle();
                            return [3, 1];
                        case 3:
                            if (this._counter.completed) {
                                this.dispatchEvent(com.JTTaskEvent.TASK_COMPLETE, this);
                            }
                            return [2];
                    }
                });
            });
        };
        JTFuturePipeline.prototype.reset = function () {
            this.removes();
            this._counter.reset();
            this._tasks = null;
            this._factroy = null;
            this._itemRender && com.JTCommand.put(this._itemRender);
            this._itemProvider && com.JTCommand.put(this._itemProvider);
            this._itemProvider = null;
            this._itemRender = null;
            this.___dataList = null;
        };
        JTFuturePipeline.prototype.createTasks = function () {
            var list = [];
            var totalCount = this._counter.totalCount;
            if (this._itemRender) {
                for (var i = 0; i < totalCount; i++) {
                    var task = this._itemRender.runWith([i, this.___dataList[i]]);
                    list.push(task);
                }
            }
            else if (this._itemProvider) {
                for (var i = 0; i < totalCount; i++) {
                    var task = this._itemProvider.runWith([i, this.___dataList[i]]);
                    list.push(task);
                }
            }
            else if (this._factroy) {
                for (var i = 0; i < totalCount; i++) {
                    var task = this._factroy.produce();
                    list.push(task);
                }
            }
            return list;
        };
        Object.defineProperty(JTFuturePipeline.prototype, "factory", {
            set: function (value) {
                this._factroy = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTFuturePipeline.prototype, "itemRender", {
            set: function (value) {
                this._itemRender = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTFuturePipeline.prototype, "itemProvider", {
            set: function (value) {
                this._itemProvider = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTFuturePipeline.prototype, "counter", {
            get: function () {
                return this._counter;
            },
            enumerable: false,
            configurable: true
        });
        return JTFuturePipeline;
    }(com.JTEventDispatcher));
    com.JTFuturePipeline = JTFuturePipeline;
})(com || (com = {}));

(function (com) {
    var JTTask = (function () {
        function JTTask() {
        }
        JTTask.prototype.recycle = function () {
        };
        return JTTask;
    }());
    com.JTTask = JTTask;
})(com || (com = {}));

(function (com) {
    var JTTaskCounter = (function (_super) {
        __extends(JTTaskCounter, _super);
        function JTTaskCounter() {
            var _this = _super.call(this) || this;
            _this._totalCount = 0;
            return _this;
        }
        JTTaskCounter.prototype.setTotalCount = function (totalCount) {
            this._totalCount = totalCount;
        };
        Object.defineProperty(JTTaskCounter.prototype, "totalCount", {
            get: function () {
                return this._totalCount;
            },
            enumerable: false,
            configurable: true
        });
        JTTaskCounter.prototype.recycle = function () {
            _super.prototype.recycle.call(this);
            this._totalCount = 0;
        };
        Object.defineProperty(JTTaskCounter.prototype, "completed", {
            get: function () {
                var count = this._succeedCount + this._failCount;
                if (this._totalCount != count)
                    return false;
                else {
                    if (this._totalCount == this._succeedCount)
                        return true;
                    else {
                        com.info("the task execute fail count:  " + this._failCount);
                    }
                }
                return true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTTaskCounter.prototype, "progress", {
            get: function () {
                return parseFloat((this._lockedCount / this._totalCount).toFixed(4));
            },
            enumerable: false,
            configurable: true
        });
        JTTaskCounter.create = function () {
            return com.JTPool.instance(JTTaskCounter).get();
        };
        return JTTaskCounter;
    }(com.JTCounter));
    com.JTTaskCounter = JTTaskCounter;
})(com || (com = {}));

(function (com) {
    var JTTaskEvent = (function () {
        function JTTaskEvent() {
        }
        JTTaskEvent.TASK_PROGRESS = "TASK_PROGRESS";
        JTTaskEvent.TASK_COMPLETE = "TASK_COMPLETE";
        return JTTaskEvent;
    }());
    com.JTTaskEvent = JTTaskEvent;
})(com || (com = {}));

(function (com) {
    var JTTaskExecutor = (function (_super) {
        __extends(JTTaskExecutor, _super);
        function JTTaskExecutor() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._counter = null;
            return _this;
        }
        JTTaskExecutor.prototype.relevance = function (counter) {
            this._counter = counter;
        };
        JTTaskExecutor.prototype.release = function () {
            this._counter && this._counter.release();
        };
        JTTaskExecutor.prototype.kill = function () {
            this._counter && this._counter.kill();
        };
        JTTaskExecutor.prototype.recycle = function () {
            this._counter = null;
        };
        return JTTaskExecutor;
    }(com.JTTask));
    com.JTTaskExecutor = JTTaskExecutor;
})(com || (com = {}));

(function (com) {
    var JTTaskFactory = (function () {
        function JTTaskFactory() {
        }
        return JTTaskFactory;
    }());
    com.JTTaskFactory = JTTaskFactory;
})(com || (com = {}));

(function (com) {
    var JTMapper = (function () {
        function JTMapper() {
        }
        JTMapper.prototype.clone = function () {
            var dataInfo = new JTMapper();
            dataInfo.update(this);
            return this;
        };
        JTMapper.prototype.update = function (data) {
            var keys = Object.keys(data);
            var obj = this;
            var l = keys.length;
            for (var i = 0; i < l; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    this[key] = data[key];
                }
            }
            return this;
        };
        JTMapper.prototype.recycle = function () { };
        ;
        return JTMapper;
    }());
    com.JTMapper = JTMapper;
})(com || (com = {}));

(function (com) {
    var JTDataInfo = (function (_super) {
        __extends(JTDataInfo, _super);
        function JTDataInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return JTDataInfo;
    }(com.JTMapper));
    com.JTDataInfo = JTDataInfo;
})(com || (com = {}));

(function (com) {
    var JTAbstractResponseMapping = (function (_super) {
        __extends(JTAbstractResponseMapping, _super);
        function JTAbstractResponseMapping() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JTAbstractResponseMapping.prototype.build = function () {
        };
        JTAbstractResponseMapping.prototype.registerToMapping = function (protocol, __mapper) {
            JTAbstractResponseMapping.mappingMap[protocol] = __mapper;
        };
        JTAbstractResponseMapping.prototype.registerMapper = function (protocol, _class, createFromPool) {
            if (createFromPool === void 0) { createFromPool = false; }
            this.registerMapper(protocol, new com.JTClassMapper(_class, createFromPool));
        };
        JTAbstractResponseMapping.prototype.getMapper = function (protocol) {
            return JTAbstractResponseMapping.mappingMap[protocol];
        };
        JTAbstractResponseMapping.prototype.create = function (protocol, data) {
            var __classMapper = JTAbstractResponseMapping.mappingMap[protocol];
            var dataInfo = __classMapper ? __classMapper.create() : null;
            if (dataInfo)
                dataInfo.update(data);
            return dataInfo ? dataInfo : data;
        };
        JTAbstractResponseMapping.mappingMap = {};
        return JTAbstractResponseMapping;
    }(com.JTOptionContext));
    com.JTAbstractResponseMapping = JTAbstractResponseMapping;
})(com || (com = {}));

(function (com) {
    var JTClassMapper = (function () {
        function JTClassMapper(_class, createFromPool) {
            if (createFromPool === void 0) { createFromPool = false; }
            this.__class = null;
            this._createFromPool = false;
            this._dataFormat = null;
            this._pool = null;
            this.__class = _class;
            this._createFromPool = createFromPool;
        }
        Object.defineProperty(JTClassMapper.prototype, "createFromPool", {
            get: function () {
                return this._createFromPool;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTClassMapper.prototype, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTCachePool.instance(this.__class);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTClassMapper.prototype.create = function () {
            var item = null;
            if (this._createFromPool)
                item = this.pool.get();
            else {
                item = new this.__class();
            }
            return item;
        };
        return JTClassMapper;
    }());
    com.JTClassMapper = JTClassMapper;
})(com || (com = {}));

(function (com) {
    var JTBaseTemplate = (function () {
        function JTBaseTemplate() {
            this.id = null;
        }
        JTBaseTemplate.prototype.endFill = function () {
        };
        return JTBaseTemplate;
    }());
    com.JTBaseTemplate = JTBaseTemplate;
})(com || (com = {}));

(function (com) {
    var JTServerConfigTemplate = (function (_super) {
        __extends(JTServerConfigTemplate, _super);
        function JTServerConfigTemplate() {
            var _this = _super.call(this) || this;
            _this.port = 0;
            _this.host = null;
            return _this;
        }
        JTServerConfigTemplate.prototype.setup = function (host, port) {
            this.port = port;
            this.host = host;
        };
        return JTServerConfigTemplate;
    }(com.JTBaseTemplate));
    com.JTServerConfigTemplate = JTServerConfigTemplate;
})(com || (com = {}));

(function (com) {
    var JTBean = (function () {
        function JTBean(paramaters) {
            this.___caller = null;
            this.___descripter = null;
            this.___instance = null;
            this.___sourceProperty = null;
            this.___changedProperty = null;
        }
        JTBean.prototype.bind = function (caller, property, descripter) {
            this.___caller = caller;
            this.___descripter = descripter;
            this.___changedProperty = this.___sourceProperty = property;
        };
        Object.defineProperty(JTBean.prototype, "instance", {
            get: function () {
                if (!this.___instance) {
                    var __method = this.___descripter.value;
                    this.___instance = __method.apply(this.___caller, []);
                }
                return this.___instance;
            },
            enumerable: false,
            configurable: true
        });
        return JTBean;
    }());
    com.JTBean = JTBean;
})(com || (com = {}));

(function (com) {
    var JTElementInject = (function () {
        function JTElementInject() {
            this._runnbleMethod = null;
            this._configDescripter = null;
        }
        JTElementInject.prototype.inject = function () {
            this._runnbleMethod && this._runnbleMethod.apply(this.caller, [this._configDescripter]);
        };
        JTElementInject.prototype.compare = function (element) {
            return false;
        };
        JTElementInject.prototype.merge = function (element) {
        };
        Object.defineProperty(JTElementInject.prototype, "caller", {
            get: function () {
                return this._configDescripter.__caller;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTElementInject.prototype, "paramters", {
            get: function () {
                return this._configDescripter.parameters;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTElementInject.prototype, "property", {
            get: function () {
                return this._configDescripter.__property;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTElementInject.prototype, "descripter", {
            get: function () {
                return this._configDescripter.__descripter;
            },
            enumerable: false,
            configurable: true
        });
        return JTElementInject;
    }());
    com.JTElementInject = JTElementInject;
})(com || (com = {}));

(function (com) {
    var JTInjectConfig = (function () {
        function JTInjectConfig() {
        }
        return JTInjectConfig;
    }());
    com.JTInjectConfig = JTInjectConfig;
})(com || (com = {}));

(function (com) {
    var JTBindingUtils = (function () {
        function JTBindingUtils() {
        }
        JTBindingUtils.bind = function () {
            return null;
        };
        JTBindingUtils.bindGetSet = function () {
            return null;
        };
        return JTBindingUtils;
    }());
    com.JTBindingUtils = JTBindingUtils;
})(com || (com = {}));

(function (com) {
    var JTPropertyChanged = (function () {
        function JTPropertyChanged() {
        }
        return JTPropertyChanged;
    }());
    com.JTPropertyChanged = JTPropertyChanged;
})(com || (com = {}));

(function (com) {
    var JTWatchProperty = (function () {
        function JTWatchProperty() {
        }
        return JTWatchProperty;
    }());
    com.JTWatchProperty = JTWatchProperty;
})(com || (com = {}));

(function (com) {
    var JTDecoratorUtils = (function () {
        function JTDecoratorUtils() {
        }
        JTDecoratorUtils.registerDecoratorKey = function (__property) {
            var key = this.DECORATOR_KEY + __property;
            return key;
        };
        JTDecoratorUtils.bind = function (cls, destroyed) {
            if (destroyed === void 0) { destroyed = false; }
            var name = cls.name;
            var __class = this._bindedMap[name];
            if (!__class) {
                __class = new com.JTSingletonClassAlias(cls, destroyed);
                this._bindedMap[name] = __class;
            }
            return __class;
        };
        JTDecoratorUtils.bindPool = function (poolCls, itemCls, parameters) {
            var name = itemCls.name;
            var __class = this._bindedMap[name];
            if (!__class) {
                __class = new com.JTSingletonPoolAlias(poolCls, itemCls, parameters);
                this._bindedMap[name] = __class;
            }
            return __class;
        };
        JTDecoratorUtils.bindTemplate = function (cls, parameters) {
            var name = cls.name;
            var __class = this._bindedMap[name];
            if (!__class) {
                __class = new com.JTConfigurationAlisa(cls, parameters);
                this._bindedMap[name] = __class;
            }
            return __class;
        };
        JTDecoratorUtils.getClassAlisa = function (cls) {
            var name = cls.name;
            var __class = this._bindedMap[name];
            return __class;
        };
        JTDecoratorUtils._bindedMap = {};
        JTDecoratorUtils.DECORATOR_KEY = "__c.decorator__";
        return JTDecoratorUtils;
    }());
    com.JTDecoratorUtils = JTDecoratorUtils;
})(com || (com = {}));

(function (com) {
    function Layout(layout) {
        return function (target, property, descripter) {
            if (!property)
                property = "layout";
            com.JTLayoutManager.addLayout(target.name, property, layout);
        };
    }
    com.Layout = Layout;
})(com || (com = {}));

(function (com) {
    function NotifyUpdate(eventType) {
        return function (target, property, descripter) {
            var signaler = target;
            signaler.addEventListener(eventType, target[property], target);
        };
    }
    com.NotifyUpdate = NotifyUpdate;
})(com || (com = {}));

(function (com) {
    var JTResizeEvent = (function () {
        function JTResizeEvent() {
        }
        Object.defineProperty(JTResizeEvent, "className", {
            get: function () {
                return this.___classNames;
            },
            enumerable: false,
            configurable: true
        });
        JTResizeEvent.indexOf = function (___className) {
            return this.___classNames.indexOf(___className);
        };
        JTResizeEvent.registerResize = function (target) {
            var className = target.className;
            var index = JTResizeEvent.indexOf(className);
            if (index != -1) {
                target.addEventListener(JTResizeEvent.RESIZE, target.onResizeHandler, target);
            }
        };
        JTResizeEvent.RESIZE = "resize";
        JTResizeEvent.___classNames = [];
        return JTResizeEvent;
    }());
    com.JTResizeEvent = JTResizeEvent;
    function ResizeEvent() {
        return function (target) {
            JTResizeEvent.className.push(target.name);
        };
    }
    com.ResizeEvent = ResizeEvent;
})(com || (com = {}));

(function (com) {
    function Response(protocol, waitingbar) {
        if (waitingbar === void 0) { waitingbar = true; }
        return function (target, property, descripter) {
            var signaler = target;
            signaler.registerFunction(protocol, target[property], target);
        };
    }
    com.Response = Response;
    function ResponseMapping(protocol, __mapperClass, createFromPool, waitingbar) {
        if (createFromPool === void 0) { createFromPool = false; }
        if (waitingbar === void 0) { waitingbar = true; }
        return function (target, property, descripter) {
            var signaler = target;
            com.JTAbstractResponseMapping["mappingMap"][protocol] = new com.JTClassMapper(__mapperClass, createFromPool);
            signaler.registerFunction(protocol, target[property], target);
        };
    }
    com.ResponseMapping = ResponseMapping;
})(com || (com = {}));

(function (com) {
    var JTClassInjectAlias = (function () {
        function JTClassInjectAlias(cls) {
            this.___c = null;
            this._instance = null;
            this.___c = cls;
        }
        JTClassInjectAlias.prototype.recycle = function () {
            this._instance = this.___c = null;
        };
        Object.defineProperty(JTClassInjectAlias.prototype, "instance", {
            get: function () {
                if (!this._instance) {
                    this._instance = new this.___c();
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        JTClassInjectAlias.CLASS_NAME = "__ClassName";
        return JTClassInjectAlias;
    }());
    com.JTClassInjectAlias = JTClassInjectAlias;
})(com || (com = {}));

(function (com) {
    var JTConfigurationAlisa = (function (_super) {
        __extends(JTConfigurationAlisa, _super);
        function JTConfigurationAlisa(cls, parameters) {
            var _this = _super.call(this, cls) || this;
            _this._referenceMap = null;
            _this._referenceCount = 0;
            _this._destroyed = false;
            _this._parameter = null;
            _this._parameter = parameters;
            _this._referenceMap = {};
            return _this;
        }
        JTConfigurationAlisa.prototype.recycle = function () {
            _super.prototype.recycle.call(this);
        };
        JTConfigurationAlisa.prototype.relevance = function () {
        };
        Object.defineProperty(JTConfigurationAlisa.prototype, "instance", {
            get: function () {
                if (!this._instance) {
                    var loader = this._instance = new com.JTTextLoader();
                    var loadedType = this._parameter["type"];
                    if (loadedType == com.JTTextLoader.LOAD_DEFAULT) {
                    }
                    else if (loadedType == com.JTTextLoader.LOADED_PARSE) {
                        var name_1 = this._parameter["name"];
                        var templateManager = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_TEMPLATE);
                        var data = templateManager.getValue(name_1);
                        var type = this._parameter["parseType"];
                        switch (type) {
                            case com.JTTextLoader.PARSE_BINARY:
                                {
                                    loader.parseBinary(data, this.___c);
                                    break;
                                }
                            case com.JTTextLoader.PARSE_STRING:
                                {
                                    loader.parseStr(data, this.___c);
                                    break;
                                }
                            case com.JTTextLoader.PARSE_ZIP:
                                {
                                    loader.parseZip(data, this.___c);
                                    break;
                                }
                        }
                    }
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        return JTConfigurationAlisa;
    }(com.JTClassInjectAlias));
    com.JTConfigurationAlisa = JTConfigurationAlisa;
})(com || (com = {}));

(function (com) {
    var JTSingletonClassAlias = (function (_super) {
        __extends(JTSingletonClassAlias, _super);
        function JTSingletonClassAlias(cls, destroyed) {
            if (destroyed === void 0) { destroyed = false; }
            var _this = _super.call(this, cls) || this;
            _this._referenceMap = null;
            _this._referenceCount = 0;
            _this._destroyed = false;
            _this._destroyed = destroyed;
            _this._referenceMap = {};
            return _this;
        }
        JTSingletonClassAlias.prototype.recycle = function () {
            _super.prototype.recycle.call(this);
        };
        JTSingletonClassAlias.prototype.relevance = function () {
        };
        Object.defineProperty(JTSingletonClassAlias.prototype, "instance", {
            get: function () {
                if (!this._instance) {
                    this._instance = new this.___c();
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        return JTSingletonClassAlias;
    }(com.JTClassInjectAlias));
    com.JTSingletonClassAlias = JTSingletonClassAlias;
})(com || (com = {}));

(function (com) {
    var JTSingletonPoolAlias = (function (_super) {
        __extends(JTSingletonPoolAlias, _super);
        function JTSingletonPoolAlias(cls, itemCls, parameters) {
            var _this = _super.call(this, cls) || this;
            _this._referenceMap = null;
            _this._referenceCount = 0;
            _this._parameters = false;
            _this._itemCls = null;
            _this._itemCls = itemCls;
            _this._referenceMap = {};
            _this._parameters = parameters;
            return _this;
        }
        JTSingletonPoolAlias.prototype.recycle = function () {
            _super.prototype.recycle.call(this);
        };
        JTSingletonPoolAlias.prototype.relevance = function () {
        };
        Object.defineProperty(JTSingletonPoolAlias.prototype, "instance", {
            get: function () {
                if (!this._instance) {
                    this._instance = this.___c.instance(this._itemCls, this._parameters);
                }
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        return JTSingletonPoolAlias;
    }(com.JTClassInjectAlias));
    com.JTSingletonPoolAlias = JTSingletonPoolAlias;
})(com || (com = {}));

(function (com) {
    function Configuration(cls, parameters) {
        return function (target, property, descripter) {
            if (descripter) {
            }
            else {
                loadConfiguration(cls, target, property, parameters);
            }
        };
    }
    com.Configuration = Configuration;
    function loadConfiguration(cls, target, property, parameters) {
        var key = com.JTDecoratorUtils.registerDecoratorKey(property);
        Object.defineProperty(target, property, {
            get: function () {
                var val = this[key];
                if (val === null || val === undefined) {
                    var _class = com.JTDecoratorUtils.bindTemplate(cls, parameters);
                    val = this[property] = _class.instance;
                    _class = null;
                }
                return val;
            },
            set: function (val) {
                var oldVal = this[key];
                if (val === oldVal)
                    return;
                this[key] = val;
            },
            enumerable: true,
            configurable: true
        });
    }
    com.loadConfiguration = loadConfiguration;
})(com || (com = {}));

(function (com) {
    function SingletonClass(cls, destroyed) {
        if (destroyed === void 0) { destroyed = false; }
        return function (target, property, descripter) {
            if (descripter) {
            }
            else {
                registerSingletonClassAlias(cls, target, property, destroyed);
            }
        };
    }
    com.SingletonClass = SingletonClass;
    function registerSingletonClassAlias(cls, target, property, destroyed) {
        if (destroyed === void 0) { destroyed = false; }
        var key = com.JTDecoratorUtils.registerDecoratorKey(property);
        Object.defineProperty(target, property, {
            get: function () {
                var val = this[key];
                if (val === null || val === undefined) {
                    var _class = com.JTDecoratorUtils.bind(cls, destroyed);
                    val = this[property] = _class.instance;
                    _class = null;
                }
                return val;
            },
            set: function (val) {
                var oldVal = this[key];
                if (val === oldVal)
                    return;
                this[key] = val;
            },
            enumerable: true,
            configurable: true
        });
    }
    com.registerSingletonClassAlias = registerSingletonClassAlias;
})(com || (com = {}));

(function (com) {
    function SingletonPool(poolCls, itemCls, parameters) {
        return function (target, property, descripter) {
            if (descripter) {
            }
            else {
                registerSingletonPoolAlisa(poolCls, target, property, itemCls, parameters);
            }
        };
    }
    com.SingletonPool = SingletonPool;
    function registerSingletonPoolAlisa(poolCls, target, property, itemCls, parameters) {
        var key = com.JTDecoratorUtils.registerDecoratorKey(property);
        Object.defineProperty(target, property, {
            get: function () {
                var val = this[key];
                if (val === null || val === undefined) {
                    var _class = com.JTDecoratorUtils.bindPool(poolCls, itemCls, parameters);
                    val = this[property] = _class.instance;
                    _class = null;
                }
                return val;
            },
            set: function (val) {
                var oldVal = this[key];
                if (val === oldVal)
                    return;
                this[key] = val;
            },
            enumerable: true,
            configurable: true
        });
    }
    com.registerSingletonPoolAlisa = registerSingletonPoolAlisa;
})(com || (com = {}));

(function (com) {
    var JTIocController = (function (_super) {
        __extends(JTIocController, _super);
        function JTIocController() {
            return _super.call(this) || this;
        }
        JTIocController.prototype.build = function () {
            var lines = this._values;
            for (var i = 0; i < lines.length; i++) {
                var descripter = lines[i];
                descripter.builds();
            }
        };
        JTIocController.prototype.run = function () {
            var lines = this._values;
            for (var i = 0; i < lines.length; i++) {
                var descripter = lines[i];
                descripter.run();
            }
        };
        JTIocController.prototype.makeClassMap = function (__emt) {
            var __className = __emt.className;
            var __classDescripter = this.get(__className);
            if (!__classDescripter) {
                __classDescripter = new com.JTClassDescripter(__emt.cls);
                this.set(__className, __classDescripter);
            }
            __classDescripter.collect(__emt);
        };
        return JTIocController;
    }(com.JTDictionary));
    com.JTIocController = JTIocController;
})(com || (com = {}));

(function (com) {
    var JTApplicationContext = (function () {
        function JTApplicationContext() {
        }
        JTApplicationContext.collect = function (__c, runnable, property, descripter, parameters) {
            if (this._launched)
                return false;
            var __e = com.JTElementDescripter.create(__c, runnable, com.JTConfigDescripter.create(__c, property, descripter, parameters));
            this.__elements.push(__e);
            return true;
        };
        JTApplicationContext.collectToMap = function (__c, property, descripter) {
            var bean = this.__beanMap.get(property);
            if (!bean) {
                bean = new com.JTBean();
                bean.bind(__c, property, descripter);
                this.__beanMap.set(property, bean);
            }
        };
        JTApplicationContext.changed = function (__sourceProperty, __changedProperty) {
            var bean = this.__beanMap.remove(__sourceProperty);
            if (bean) {
                this.__beanMap.set(__changedProperty, bean);
            }
        };
        JTApplicationContext.get = function (key) {
            return this.__beanMap.get(key);
        };
        Object.defineProperty(JTApplicationContext, "launched", {
            get: function () {
                return this._launched;
            },
            enumerable: false,
            configurable: true
        });
        JTApplicationContext.classifiedMapping = function () {
            var controller = new com.JTIocController();
            var totalCount = this.__elements.length;
            for (var i = 0; i < totalCount; i++) {
                var __e = this.__elements[i];
                controller.makeClassMap(__e);
            }
            this.controller = controller;
        };
        JTApplicationContext.run = function (__class) {
            this.classifiedMapping();
            this.build();
            this.launch();
            return this;
        };
        JTApplicationContext.build = function () {
            this._launched = true;
            var controller = this.controller;
            controller.build();
        };
        JTApplicationContext.launch = function () {
            this._launched = true;
            var controller = this.controller;
            controller.run();
        };
        JTApplicationContext.controller = null;
        JTApplicationContext._launched = false;
        JTApplicationContext.__elements = [];
        JTApplicationContext.__beanMap = new com.JTDictionary();
        return JTApplicationContext;
    }());
    com.JTApplicationContext = JTApplicationContext;
})(com || (com = {}));

(function (com) {
    var JTDescripter = (function () {
        function JTDescripter(___caller, _property) {
            this.____c = null;
            this.__property = null;
            this.__elements = null;
            this.__className = null;
            this.___dependencies = null;
            this.__elements = [];
            this.___dependencies = [];
            this.____c = ___caller;
            this.__property = _property;
            this.__className = ___caller["constructor"].name;
        }
        JTDescripter.prototype.builds = function () {
            this.assemble();
        };
        JTDescripter.prototype.run = function (lines) {
            if (!lines)
                lines = this.__elements;
            var total = lines.length;
            for (var i = 0; i < total; i++) {
                var element = lines[i];
                element.run();
            }
        };
        JTDescripter.prototype.addElement = function (element) {
            var index = this.__elements.push(element);
            this.___dependencies[index - 1] = element.runnable;
        };
        Object.defineProperty(JTDescripter.prototype, "className", {
            get: function () {
                return this.__className;
            },
            enumerable: false,
            configurable: true
        });
        return JTDescripter;
    }());
    com.JTDescripter = JTDescripter;
})(com || (com = {}));

(function (com) {
    var JTClassDescripter = (function (_super) {
        __extends(JTClassDescripter, _super);
        function JTClassDescripter(__class) {
            var _this = _super.call(this, __class) || this;
            _this.__runnablePropertys = null;
            _this.__runnableMethods = null;
            _this.__runnableMap = null;
            _this.__runnableMethods = [];
            _this.__runnablePropertys = [];
            _this.__runnableMap = {};
            return _this;
        }
        JTClassDescripter.prototype.builds = function () {
            this.assembles(this.__runnablePropertys);
            this.assembles(this.__runnableMethods);
            _super.prototype.builds.call(this);
        };
        JTClassDescripter.prototype.assemble = function () {
        };
        JTClassDescripter.prototype.assembles = function (lines) {
            if (!lines)
                lines = this.__elements;
            var total = lines.length;
            for (var i = 0; i < total; i++) {
                var element = lines[i];
                element.builds();
            }
        };
        JTClassDescripter.prototype.run = function () {
            this.runs(this.__runnablePropertys);
            this.runs(this.__runnableMethods);
            _super.prototype.run.call(this);
        };
        JTClassDescripter.prototype.runs = function (lines) {
            var total = lines.length;
            for (var i = 0; i < total; i++) {
                var element = lines[i];
                element.run();
            }
        };
        JTClassDescripter.prototype.collect = function (__emt) {
            var ___classContainer = __emt.getClassContainer();
            if (___classContainer == JTClassDescripter) {
                this.addElement(__emt);
            }
            else {
                var propertyName = __emt.property;
                var descripter = this.__runnableMap[propertyName];
                if (!descripter) {
                    descripter = new ___classContainer(__emt.cls, __emt.property);
                    descripter instanceof com.JTPropertyDescripter ? this.__runnablePropertys.push(descripter) : this.__runnableMethods.push(descripter);
                    this.__runnableMap[propertyName] = descripter;
                }
                descripter.addElement(__emt);
            }
        };
        JTClassDescripter.prototype.getNameByClass = function (__c) {
            return __c["constructor"].name;
        };
        return JTClassDescripter;
    }(com.JTDescripter));
    com.JTClassDescripter = JTClassDescripter;
})(com || (com = {}));

(function (com) {
    var JTDescripterType = (function () {
        function JTDescripterType() {
        }
        JTDescripterType.SINGLETON = "Singleton";
        JTDescripterType.BEAN = "Bean";
        JTDescripterType.AUTOWIRED = "Autowired";
        JTDescripterType.QUALIFIER = "Qualifier";
        return JTDescripterType;
    }());
    com.JTDescripterType = JTDescripterType;
})(com || (com = {}));

(function (com) {
    com.Services = function () {
        var parameters = arguments;
        return function (caller, property, descripter) {
            var configurable = arguments;
            com.info("Services" + parameters, configurable);
        };
    };
    com.Scene = function () {
        var parameters = arguments;
        return function (caller, property, descripter) {
            var configurable = arguments;
            com.info("Scene: " + parameters, configurable);
        };
    };
    com.Component = function (___c, property, descripter) {
        if (___c instanceof com.JTConfigDescripter) {
            com.JTApplicationContext.collectToMap(___c.__caller, ___c.__property, ___c.__descripter);
        }
        else {
            com.JTApplicationContext.collect(___c, com.Component, property, descripter, [___c, property, descripter]);
        }
    };
    com.Panel = function (___c, property, descripter) {
        if (___c instanceof com.JTConfigDescripter) {
            com.JTApplicationContext.collectToMap(___c.__caller, ___c.__property, ___c.__descripter);
        }
        else {
            com.JTApplicationContext.collect(___c, com.Panel, property, descripter, [___c, property, descripter]);
        }
    };
    com.DataInfoManager = function (___c, property, descripter) {
        if (___c instanceof com.JTConfigDescripter) {
            com.JTApplicationContext.collectToMap(___c.__caller, ___c.__property, ___c.__descripter);
        }
        else {
            com.JTApplicationContext.collect(___c, com.Panel, property, descripter, [___c, property, descripter]);
        }
    };
    com.Data = function (___c, property, descripter) {
        if (___c instanceof com.JTConfigDescripter) {
            com.JTApplicationContext.collectToMap(___c.__caller, ___c.__property, ___c.__descripter);
        }
        else {
            com.JTApplicationContext.collect(___c, com.Panel, property, descripter, [___c, property, descripter]);
        }
    };
    com.Pool = function (___c, property, descripter) {
        if (___c instanceof com.JTConfigDescripter) {
            com.JTApplicationContext.collectToMap(___c.__caller, ___c.__property, ___c.__descripter);
        }
        else {
            com.JTApplicationContext.collect(___c, com.Panel, property, descripter, [___c, property, descripter]);
        }
    };
    com.Singleton = function (___c, property, descripter) {
        if (___c instanceof com.JTConfigDescripter) {
            com.JTApplicationContext.collectToMap(___c.__caller, ___c.__property, ___c.__descripter);
        }
        else {
            com.JTApplicationContext.collect(___c, com.Panel, property, descripter, [___c, property, descripter]);
        }
    };
    com.Bean = function (___c, property, descripter) {
        if (___c instanceof com.JTConfigDescripter) {
            com.JTApplicationContext.collectToMap(___c.__caller, ___c.__property, ___c.__descripter);
        }
        else {
            com.JTApplicationContext.collect(___c, com.Bean, property, descripter, [___c, property, descripter]);
        }
    };
    com.Qualifier = function (changedProperty) {
        if (changedProperty instanceof com.JTConfigDescripter) {
            var __c = changedProperty;
            if (!__c.__descripter) {
                doAutowired(__c.__caller, __c.__property, __c.parameters[0]);
            }
            else {
                com.JTApplicationContext.changed(__c.__property, __c.parameters[0]);
            }
        }
        else {
            var parameters = arguments;
            return function (___caller, __property, descripter) {
                com.JTApplicationContext.collect(___caller, com.Qualifier, __property, descripter, parameters);
            };
        }
    };
    com.Autowired = function (__c, __property) {
        if (__c instanceof com.JTConfigDescripter) {
            var __parameters = __c.parameters;
            if (__parameters.length > 2) {
                doAutowired(__c.__caller, __c.__property, __parameters[2]);
            }
            else {
                doAutowired(__c.__caller, __c.__property, __c.__property);
            }
        }
        else {
            com.JTApplicationContext.collect(__c, com.Autowired, __property, null, [__c, __property]);
        }
    };
    function doAutowired(__caller, __property, changedProperty) {
        var key = com.JTDecoratorUtils.registerDecoratorKey(__property);
        Object.defineProperty(__caller, __property, {
            get: function () {
                var val = this[key];
                if (val === null || val === undefined) {
                    var ____c = com.JTApplicationContext.get(changedProperty);
                    val = this[__property] = ____c.instance;
                    ____c = null;
                }
                return val;
            },
            set: function (val) {
                var oldVal = this[key];
                if (val === oldVal)
                    return;
                this[key] = val;
            },
            enumerable: true,
            configurable: true
        });
    }
})(com || (com = {}));

(function (com) {
    var JTMethodDescripter = (function (_super) {
        __extends(JTMethodDescripter, _super);
        function JTMethodDescripter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JTMethodDescripter.prototype.assemble = function () {
        };
        return JTMethodDescripter;
    }(com.JTDescripter));
    com.JTMethodDescripter = JTMethodDescripter;
})(com || (com = {}));

(function (com) {
    var JTParameterDescripter = (function (_super) {
        __extends(JTParameterDescripter, _super);
        function JTParameterDescripter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JTParameterDescripter.prototype.assemble = function () {
        };
        return JTParameterDescripter;
    }(com.JTDescripter));
    com.JTParameterDescripter = JTParameterDescripter;
})(com || (com = {}));

(function (com) {
    var JTPropertyDescripter = (function (_super) {
        __extends(JTPropertyDescripter, _super);
        function JTPropertyDescripter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JTPropertyDescripter.prototype.assemble = function () {
            var autowriedIndex = this.___dependencies.indexOf(com.Autowired);
            var qualifierIndex = this.___dependencies.indexOf(com.Qualifier);
            if (qualifierIndex > -1 && autowriedIndex > -1) {
                var qualifierElement = this.__elements[qualifierIndex];
                var autowriedElement = this.__elements[autowriedIndex];
                this.mergeParameter(qualifierElement.parameters, autowriedElement.parameters);
                com.JTElementDescripter.put(qualifierElement);
                this.__elements.splice(qualifierIndex);
            }
        };
        JTPropertyDescripter.prototype.mergeParameter = function (qualifier, autowried) {
            autowried.push(qualifier[0]);
        };
        return JTPropertyDescripter;
    }(com.JTDescripter));
    com.JTPropertyDescripter = JTPropertyDescripter;
})(com || (com = {}));

(function (com) {
    var JTConfigDescripter = (function () {
        function JTConfigDescripter() {
            this.__caller = null;
            this.__property = null;
            this.__descripter = null;
            this.parameters = null;
        }
        JTConfigDescripter.prototype.setup = function (__caller, property, descripter, parameters) {
            this.__caller = __caller;
            this.__property = property;
            this.__descripter = descripter;
            this.parameters = parameters;
        };
        JTConfigDescripter.prototype.recycle = function () {
            this.parameters.length = 0;
            this.parameters = this.__descripter = this.__property = this.__caller = null;
        };
        JTConfigDescripter.prototype.getClass = function () {
            var _____c = null;
            if (!this.__property) {
                _____c = com.JTClassDescripter;
            }
            else {
                _____c = this.__descripter ? com.JTMethodDescripter : com.JTPropertyDescripter;
            }
            return _____c;
        };
        JTConfigDescripter.prototype.changeParameters = function (__paremeters) {
            this.parameters = __paremeters;
        };
        Object.defineProperty(JTConfigDescripter, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(JTConfigDescripter);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTConfigDescripter.create = function (target, property, descripter, parameters) {
            var config = this.pool.get();
            config.setup(target, property, descripter, parameters);
            return config;
        };
        JTConfigDescripter.put = function (config) {
            this.pool.put(config);
        };
        JTConfigDescripter._pool = null;
        return JTConfigDescripter;
    }());
    com.JTConfigDescripter = JTConfigDescripter;
})(com || (com = {}));

(function (com) {
    var JTElementDescripter = (function () {
        function JTElementDescripter() {
            this.__runnableMethod = null;
            this.___c = null;
            this.__config = null;
        }
        JTElementDescripter.prototype.relevance = function (__caller, runnable, __config) {
            this.___c = __caller;
            this.__runnableMethod = runnable;
            this.__config = __config;
        };
        Object.defineProperty(JTElementDescripter.prototype, "runnable", {
            get: function () {
                return this.__runnableMethod;
            },
            enumerable: false,
            configurable: true
        });
        JTElementDescripter.prototype.run = function () {
            this.__runnableMethod && this.__runnableMethod.apply(this.___c, [this.__config]);
        };
        Object.defineProperty(JTElementDescripter.prototype, "config", {
            get: function () {
                return this.__config;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTElementDescripter.prototype, "parameters", {
            get: function () {
                return this.__config.parameters;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTElementDescripter.prototype, "className", {
            get: function () {
                return this.___c["constructor"].name;
            },
            enumerable: false,
            configurable: true
        });
        JTElementDescripter.prototype.getClassContainer = function () {
            return this.__config.getClass();
        };
        Object.defineProperty(JTElementDescripter.prototype, "property", {
            get: function () {
                return this.__config.__property;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTElementDescripter.prototype, "cls", {
            get: function () {
                return this.___c;
            },
            enumerable: false,
            configurable: true
        });
        JTElementDescripter.prototype.recycle = function () {
            this.___c = null;
            this.__runnableMethod = null;
            var config = this.__config;
            this.__config = null;
            config && com.JTConfigDescripter.put(config);
            config = null;
        };
        Object.defineProperty(JTElementDescripter, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(JTElementDescripter);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTElementDescripter.create = function (___caller, runnable, __config) {
            var element = this.pool.get();
            element.relevance(___caller, runnable, __config);
            return element;
        };
        JTElementDescripter.put = function (config) {
            this.pool.put(config);
        };
        JTElementDescripter._pool = null;
        return JTElementDescripter;
    }());
    com.JTElementDescripter = JTElementDescripter;
})(com || (com = {}));

(function (com) {
    var JTCommand = (function () {
        function JTCommand() {
            this._caller = null;
            this._method = null;
            this._args = null;
            this._once = false;
        }
        JTCommand.prototype.recycle = function () {
            this._caller = this._method = this._args = null;
        };
        JTCommand.prototype.setTo = function (caller, method, args, once) {
            if (once === void 0) { once = false; }
            this._caller = caller;
            this._method = method;
            this._args = args;
            this._once = once;
            return this;
        };
        JTCommand.prototype.run = function () {
            if (this._method == null)
                return null;
            var result = this._method.apply(this._caller, this._args);
            this._once && this.recover();
            return result;
        };
        JTCommand.prototype.runWith = function (data) {
            if (this._method == null)
                return null;
            if (data == null)
                var result = this._method.apply(this._caller, this._args);
            else if (!this._args && !data.unshift)
                result = this._method.call(this._caller, data);
            else if (this._args)
                result = this._method.apply(this._caller, this._args.concat(data));
            else
                result = this._method.apply(this._caller, data instanceof Array ? [data] : data);
            this._once && this.recover();
            return result;
        };
        JTCommand.prototype.clear = function () {
            this._method = this._args = this._caller = null;
            return this;
        };
        JTCommand.prototype.recover = function () {
            this.clear();
        };
        Object.defineProperty(JTCommand.prototype, "caller", {
            get: function () {
                return this._caller;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTCommand.prototype, "method", {
            get: function () {
                return this._method;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTCommand.prototype, "once", {
            get: function () {
                return this._once;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTCommand, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(JTCommand);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTCommand.create = function (caller, method, args, once) {
            if (once === void 0) { once = false; }
            var command = this.pool.get();
            command.setTo(caller, method, args, once);
            return command;
        };
        JTCommand.put = function (command) {
            this.pool.put(command);
        };
        JTCommand._pool = null;
        return JTCommand;
    }());
    com.JTCommand = JTCommand;
})(com || (com = {}));

(function (com) {
    var JTEventManager = (function () {
        function JTEventManager() {
        }
        JTEventManager.recycle = function () {
            this.removes();
        };
        JTEventManager.addEventListener = function (key, method, caller, once) {
            var list = this.__evtMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element && element.method == method && element.caller == caller) {
                        com.JTLogger.info("[JTEventManager.addEventListener] The key" + key + " function already registered ");
                        return;
                    }
                });
            }
            else {
                list = [];
                this.__evtMap[key] = list;
            }
            var command = com.JTCommand.create(caller, method, null, once);
            list.push(command);
        };
        JTEventManager.dispatchEvent = function (key, args) {
            var _this = this;
            var list = this.__evtMap[key];
            if (list) {
                list.forEach(function (command) {
                    command && command.runWith(args);
                    if (command.once) {
                        _this.delete(list, command);
                    }
                });
            }
            else {
                com.JTLogger.info("[JTEventManager.dispatchEvent] Cant find the function by key : " + key);
            }
        };
        JTEventManager.removeEventListener = function (key, method, caller) {
            var _this = this;
            var list = this.__evtMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element && element.method == method && element.caller == caller) {
                        _this.delete(list, element);
                    }
                });
            }
        };
        JTEventManager.removeEvents = function (key) {
            var _this = this;
            var list = this.__evtMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element) {
                        _this.delete(list, element);
                    }
                });
                this.__evtMap[key] = null;
                delete this.__evtMap[key];
            }
        };
        JTEventManager.delete = function (list, command) {
            var index = list.indexOf(command);
            var removes = list.splice(index, 1);
            removes.shift();
            com.JTCommand.put(command);
        };
        JTEventManager.removes = function () {
            var caller = this;
            for (var key in this.__evtMap) {
                this.removeEvents(key);
            }
            this.__evtMap = {};
        };
        JTEventManager.__evtMap = {};
        return JTEventManager;
    }());
    com.JTEventManager = JTEventManager;
})(com || (com = {}));

(function (com) {
    var JTFunctionManager = (function () {
        function JTFunctionManager() {
        }
        JTFunctionManager.registerFunction = function (key, method, caller, once) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element && element.method == method && element.caller == caller) {
                        com.JTLogger.info("[JTFunctionManager.registerFunction] The key    " + key + "    function already registered ");
                        return;
                    }
                });
            }
            else {
                list = [];
                this._eventMap[key] = list;
            }
            var command = com.JTCommand.create(caller, method, null, once);
            list.push(command);
        };
        JTFunctionManager.addCommand = function (key, command) {
            var list = this._eventMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element && element.method == command.method && element.caller == command.caller) {
                        com.JTLogger.info("[JTFunctionManager.registerFunction] The key    " + key + "    function already registered ");
                        return;
                    }
                });
            }
            else {
                list = [];
                this._eventMap[key] = list;
            }
            list.push(command);
        };
        JTFunctionManager.execute = function (key, args) {
            var _this = this;
            var list = this._eventMap[key];
            if (list) {
                list.forEach(function (command) {
                    command && command.runWith(args);
                    if (command.once) {
                        _this.delete(list, command);
                    }
                });
            }
            else {
                com.JTLogger.info("[JTFunctionManager.execute] Cant find the function by key : " + key);
            }
        };
        JTFunctionManager.removeFunction = function (key, method, caller) {
            var _this = this;
            var list = this._eventMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element && element.method == method && element.caller == caller) {
                        _this.delete(list, element);
                    }
                });
            }
        };
        JTFunctionManager.removeFunctions = function (key) {
            var _this = this;
            var list = this._eventMap[key];
            if (list) {
                list.forEach(function (element) {
                    if (element) {
                        _this.delete(list, element);
                    }
                });
                this._eventMap[key] = null;
                delete this._eventMap[key];
            }
        };
        JTFunctionManager.delete = function (list, command) {
            var index = list.indexOf(command);
            var removes = list.splice(index, 1);
            removes.shift();
            com.JTCommand.put(command);
        };
        JTFunctionManager._eventMap = {};
        return JTFunctionManager;
    }());
    com.JTFunctionManager = JTFunctionManager;
})(com || (com = {}));

(function (com) {
    var JTLayout = (function () {
        function JTLayout(_className, property, __layout) {
            this.__className = null;
            this.__property = null;
            this.__layout = null;
            this.settings(_className, property, __layout);
        }
        JTLayout.prototype.settings = function (__className, property, __layout) {
            this.__layout = __layout;
            this.__property = property;
            this.__className = __className;
        };
        JTLayout.prototype.update = function (child) {
            switch (this.__layout) {
                case JTLayout.LAYOUT_VERTICAL:
                    {
                        com.JTLayoutManager.layoutVertical(child);
                        break;
                    }
                case JTLayout.LAYOUT_HORIZONTAL:
                    {
                        com.JTLayoutManager.layoutHorzontal(child);
                        break;
                    }
                case JTLayout.LAYOUT_AUTO_SWITCH:
                    {
                        com.JTLayoutManager.autoAdjustLayout(child);
                        break;
                    }
            }
        };
        JTLayout.LAYOUT_VERTICAL = "Vertical";
        JTLayout.LAYOUT_HORIZONTAL = "Horizontal";
        JTLayout.LAYOUT_AUTO_SWITCH = "Auto-Switch";
        return JTLayout;
    }());
    com.JTLayout = JTLayout;
})(com || (com = {}));

(function (com) {
    var JTLayoutManager = (function (_super) {
        __extends(JTLayoutManager, _super);
        function JTLayoutManager() {
            var _this = _super.call(this) || this;
            _this._stage = null;
            return _this;
        }
        JTLayoutManager.addLayout = function (__className, property, __layout) {
            var __layoutMap = this.___classLayoutMap[__className];
            if (!__layoutMap) {
                this.___classLayoutMap[__className] = __layoutMap = {};
            }
            var layout = __layoutMap[property];
            if (layout)
                return;
            layout = new com.JTLayout(__className, property, __layout);
            __layoutMap[property] = layout;
        };
        JTLayoutManager.update = function (view) {
            var className = view.className;
            var __layoutMap = this.___classLayoutMap[className];
            if (!__layoutMap) {
                JTLayoutManager.layoutUpdate(view.componentUI, com.JTLayout.LAYOUT_VERTICAL);
                return;
            }
            for (var key in __layoutMap) {
                var layout = __layoutMap[key];
                if (key == "layout") {
                    if (view instanceof com.JTUIComponent)
                        layout.update(view);
                    else {
                        layout.update(view.componentUI);
                    }
                }
                else {
                    layout.update(view.componentUI[layout.__property]);
                }
            }
        };
        JTLayoutManager.getLayout = function (___className, property) {
            var __layoutMap = this.___classLayoutMap[___className];
            if (__layoutMap) {
                if (!property)
                    property = "layout";
                return __layoutMap[property];
            }
            return null;
        };
        JTLayoutManager.layoutUpdate = function (child, layout) {
            switch (layout) {
                case com.JTLayout.LAYOUT_VERTICAL:
                    {
                        JTLayoutManager.layoutVertical(child);
                        break;
                    }
                case com.JTLayout.LAYOUT_HORIZONTAL:
                    {
                        JTLayoutManager.layoutHorzontal(child);
                        break;
                    }
                case com.JTLayout.LAYOUT_AUTO_SWITCH:
                    {
                        JTLayoutManager.autoAdjustLayout(child);
                        break;
                    }
            }
        };
        JTLayoutManager.layoutVertical = function (child) {
            var parent = child.findParent();
            if (!parent)
                return;
            child.setSize(parent.width, parent.height);
            child.addRelation(parent, fgui.RelationType.Height);
        };
        JTLayoutManager.layoutHorzontal = function (child) {
            var parent = child.findParent();
            if (!parent)
                return;
            child.setSize(parent.width, parent.height);
            child.addRelation(parent, fgui.RelationType.Width);
        };
        JTLayoutManager.autoAdjustLayout = function (child) {
            var parent = child.findParent();
            if (!parent)
                return;
            child.setSize(parent.width, parent.height);
            child.addRelation(parent, fgui.RelationType.Size);
        };
        JTLayoutManager.prototype.build = function () {
            this._stage = com.JTSession.stage;
            this.registerWindowResize();
        };
        JTLayoutManager.prototype.registerWindowResize = function () {
            window.addEventListener("resize", this.onResize.bind(this));
        };
        JTLayoutManager.prototype.onResize = function (e) {
            this.update();
            com.dispatchEvent(com.JTResizeEvent.RESIZE);
        };
        JTLayoutManager.prototype.update = function () {
            com.JTSession.stageWidth = this._stage.width;
            com.JTSession.stageHeight = this._stage.height;
        };
        JTLayoutManager.prototype.buildComplete = function () {
        };
        JTLayoutManager.___classLayoutMap = {};
        JTLayoutManager.currentLayout = null;
        return JTLayoutManager;
    }(com.JTOptionContext));
    com.JTLayoutManager = JTLayoutManager;
})(com || (com = {}));

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
            this._stage = com.JTSession.stage;
            this._layerMap = {};
            this._stage.makeFullScreen();
            var layerManager = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_LAYER);
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
    }(com.JTOptionContext));
    com.JTAbstractLayerManager = JTAbstractLayerManager;
})(com || (com = {}));

(function (com) {
    var JTAbstractSceneManager = (function (_super) {
        __extends(JTAbstractSceneManager, _super);
        function JTAbstractSceneManager() {
            var _this = _super.call(this) || this;
            _this._layer = null;
            _this._sceneMap = null;
            _this._hostroys = null;
            _this._sceneMap = {};
            _this._hostroys = [];
            return _this;
        }
        JTAbstractSceneManager.prototype.build = function () {
            var sceneManager = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_SCENE);
            JTAbstractSceneManager._instance = sceneManager;
            if (!this._layer) {
                var layerManager = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_LAYER);
                this._layer = layerManager.getLayer(com.JTAbstractLayerManager.LAYER_SCENE);
            }
        };
        JTAbstractSceneManager.prototype.buildComplete = function () {
        };
        JTAbstractSceneManager.prototype.registerSceneClassAlias = function (type, cls) {
            this._sceneMap[type] = cls;
        };
        JTAbstractSceneManager.prototype.changeScene = function (sceneType) {
            return __awaiter(this, void 0, void 0, function () {
                var cls, scene;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cls = this._sceneMap[sceneType];
                            scene = new cls();
                            this._hostroys.push(sceneType);
                            return [4, JTAbstractSceneManager.locker.lock()];
                        case 1:
                            _a.sent();
                            while (this.layer.numChildren)
                                this._layer.removeChildAt(0);
                            this.addChild(scene, fgui.RelationType.Height);
                            return [2];
                    }
                });
            });
        };
        JTAbstractSceneManager.prototype.addChild = function (scene, type) {
            scene.bindUIRelation(this.layer, type);
            this.layer.addChild(scene.componentUI);
        };
        JTAbstractSceneManager.prototype.back = function () {
            var type = null;
            if (this._hostroys.length > 0) {
                type = this._hostroys.pop();
                this.changeScene(type);
            }
            return type;
        };
        JTAbstractSceneManager.back = function () {
            this._instance.back();
        };
        JTAbstractSceneManager.changeScene = function (sceneType) {
            this._instance.changeScene(sceneType);
        };
        Object.defineProperty(JTAbstractSceneManager.prototype, "layer", {
            get: function () {
                return this._layer;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTAbstractSceneManager, "instance", {
            get: function () {
                return this._instance;
            },
            enumerable: false,
            configurable: true
        });
        JTAbstractSceneManager.locker = new com.JTLocker();
        JTAbstractSceneManager._instance = null;
        return JTAbstractSceneManager;
    }(com.JTOptionContext));
    com.JTAbstractSceneManager = JTAbstractSceneManager;
})(com || (com = {}));

(function (com) {
    var JTAbstractTemplateManager = (function (_super) {
        __extends(JTAbstractTemplateManager, _super);
        function JTAbstractTemplateManager() {
            var _this = _super.call(this) || this;
            _this._configMap = {};
            return _this;
        }
        JTAbstractTemplateManager.prototype.build = function () {
        };
        JTAbstractTemplateManager.prototype.put = function (url, data) {
            this._configMap[url] = data;
        };
        JTAbstractTemplateManager.prototype.getValue = function (url) {
            return this._configMap[url];
        };
        return JTAbstractTemplateManager;
    }(com.JTOptionContext));
    com.JTAbstractTemplateManager = JTAbstractTemplateManager;
})(com || (com = {}));

(function (com) {
    var JTDataInfoManager = (function (_super) {
        __extends(JTDataInfoManager, _super);
        function JTDataInfoManager() {
            return _super.call(this) || this;
        }
        return JTDataInfoManager;
    }(com.JTEventSignaler));
    com.JTDataInfoManager = JTDataInfoManager;
})(com || (com = {}));

(function (com) {
    var JTChildPopUp = (function () {
        function JTChildPopUp() {
            this.component = null;
            this.parent = null;
            this.componentUI = null;
            this.isTween = false;
            this.mode = true;
        }
        JTChildPopUp.prototype.setup = function (component, parent, isTween, mode) {
            if (isTween === void 0) { isTween = false; }
            if (mode === void 0) { mode = true; }
            this.parent = parent;
            this.isTween = isTween;
            this.mode = mode;
            this.component = component;
        };
        JTChildPopUp.prototype.recycle = function () {
            if (this.componentUI && this.componentUI.parent) {
                this.componentUI.removeFromParent();
            }
            this.parent = this.componentUI = this.component = null;
            this.mode = this.isTween = false;
        };
        return JTChildPopUp;
    }());
    com.JTChildPopUp = JTChildPopUp;
})(com || (com = {}));

(function (com) {
    var JTPopupManager = (function () {
        function JTPopupManager() {
        }
        JTPopupManager.initialize = function () {
        };
        JTPopupManager.createPopUp = function (__class, parent, isTween, mode) {
            if (isTween === void 0) { isTween = false; }
            if (mode === void 0) { mode = true; }
            var child = new __class();
            return this.addPopUp(child, parent, isTween, mode);
        };
        JTPopupManager.centerComponent = function (component) {
        };
        JTPopupManager.center = function (componentUI) {
        };
        JTPopupManager.addPopUp = function (component, parent, isTween, mode) {
            if (isTween === void 0) { isTween = false; }
            if (mode === void 0) { mode = true; }
            parent = parent ? parent : this.layer;
            var childPopUp = this.search(component);
            if (!childPopUp) {
                childPopUp = this.pool.get();
                childPopUp.setup(component, parent, isTween, mode);
                this.__childs.push(childPopUp);
            }
            else {
                childPopUp.setup(component, parent, isTween, mode);
            }
            if (!this.__backgroundMask) {
                this.__backgroundMask = new fgui.GGraph();
                this.__backgroundMask.clearGraphics();
                this.__backgroundMask.setSize(com.JTSession.stageWidth, com.JTSession.stageHeight);
                this.__backgroundMask.drawRect(0, null, null, null);
            }
            if (childPopUp.mode) {
            }
            if (isTween) {
            }
            else {
            }
            return component;
        };
        JTPopupManager.removePopUp = function (component, isTween) {
            if (isTween === void 0) { isTween = false; }
            var childPopUp = this.removeComponent(component);
            if (!childPopUp)
                return component;
            if (!isTween)
                this.put(childPopUp);
            else {
            }
            return component;
        };
        JTPopupManager.removes = function (parent) {
            var lines = null;
            if (parent) {
                lines = this.removeGComponent(parent);
            }
            else {
                lines = this.__childs;
            }
            while (lines.length) {
                var childPopUp = lines.shift();
                this.put(childPopUp);
            }
        };
        JTPopupManager.search = function (component) {
            var count = this.__childs.length;
            for (var i = 0; i < count; i++) {
                var childPopUp = this.__childs[i];
                if (childPopUp.component == component) {
                    return childPopUp;
                }
            }
            return null;
        };
        JTPopupManager.removeGComponent = function (parent) {
            var lines = [];
            for (var i = 0; i < this.__childs.length; i++) {
                var childPopUp = this.__childs[i];
                if (childPopUp.parent == parent) {
                    var lines_1 = this.__childs.splice(i, 1);
                    var child = lines_1.shift();
                    lines_1.push(child);
                    i--;
                }
            }
            return lines;
        };
        JTPopupManager.removeComponent = function (component) {
            var count = this.__childs.length;
            var child = null;
            for (var i = 0; i < count; i++) {
                var childPopUp = this.__childs[i];
                if (childPopUp.component == component) {
                    var lines = this.__childs.splice(i, 1);
                    child = lines.shift();
                }
            }
            return child;
        };
        Object.defineProperty(JTPopupManager, "layer", {
            get: function () {
                if (!this.__layer) {
                    var layerManager = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_LAYER);
                    this.__layer = layerManager.getLayer(com.JTAbstractLayerManager.LAYER_POPUP);
                }
                return this.__layer;
            },
            enumerable: false,
            configurable: true
        });
        JTPopupManager.create = function (component, parent, isTween, mode) {
            if (isTween === void 0) { isTween = false; }
            if (mode === void 0) { mode = true; }
            var childPopUp = this.pool.get();
            childPopUp.setup(component, parent, isTween, mode);
            return childPopUp;
        };
        JTPopupManager.put = function (childPopUp) {
            this.pool.put(childPopUp);
        };
        Object.defineProperty(JTPopupManager, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(com.JTChildPopUp);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTPopupManager, "locker", {
            get: function () {
                if (!this.__locker) {
                    this.__locker = new com.JTLocker();
                }
                return this.__locker;
            },
            enumerable: false,
            configurable: true
        });
        JTPopupManager.__locker = null;
        JTPopupManager.__layer = null;
        JTPopupManager.__childs = [];
        JTPopupManager.__backgroundMask = null;
        JTPopupManager._pool = null;
        return JTPopupManager;
    }());
    com.JTPopupManager = JTPopupManager;
})(com || (com = {}));

(function (com) {
    var JTChannelPipeline = (function (_super) {
        __extends(JTChannelPipeline, _super);
        function JTChannelPipeline(channelGroup) {
            var _this = _super.call(this) || this;
            _this._channel = null;
            _this.___ctxMap = {};
            _this.___ctxs = [];
            _this.__channelGroup = null;
            _this.__channelGroup = channelGroup;
            return _this;
        }
        JTChannelPipeline.prototype.mark = function () {
            this.__channelGroup && this.__channelGroup.mark(this);
        };
        JTChannelPipeline.prototype.config = function (host, port) {
            this._channel.reload();
            this._channel.config(host, port);
            return this;
        };
        JTChannelPipeline.prototype.connect = function () {
            return this._channel.connect();
        };
        JTChannelPipeline.prototype.reload = function () {
            this._channel.reload();
        };
        JTChannelPipeline.prototype.flush = function () {
            this._channel.flush();
        };
        JTChannelPipeline.prototype.send = function (data) {
            this._channel.send(data);
        };
        JTChannelPipeline.prototype.writeAndFlush = function (data) {
            this._channel.writeAndFlush(data);
        };
        JTChannelPipeline.prototype.channelActive = function () {
            for (var i = 0; i < this.___ctxs.length; i++) {
                var ___c = this.___ctxs[i];
                ___c.channelActive();
            }
        };
        JTChannelPipeline.prototype.channelInactive = function () {
            for (var i = 0; i < this.___ctxs.length; i++) {
                var ___c = this.___ctxs[i];
                ___c.channelInactive();
            }
        };
        JTChannelPipeline.prototype.bind = function (channel) {
            this._channel = channel;
            this._channel.bind(this);
            com.JTSession.channel = this._channel;
            return this._channel;
        };
        JTChannelPipeline.prototype.childOption = function (type, ___c) {
            ___c.bind(this);
            ___c.build();
            this.___ctxMap[type] = ___c;
            this.___ctxs.push(___c);
            return this;
        };
        JTChannelPipeline.prototype.getContext = function (type) {
            return this.___ctxMap[type];
        };
        JTChannelPipeline.prototype.launch = function (host, port) {
            this._channel.reload();
            this._channel.config(host, port);
            this._channel.connect();
            return this._channel;
        };
        Object.defineProperty(JTChannelPipeline.prototype, "channel", {
            get: function () {
                return this._channel;
            },
            enumerable: false,
            configurable: true
        });
        return JTChannelPipeline;
    }(com.JTEventDispatcher));
    com.JTChannelPipeline = JTChannelPipeline;
})(com || (com = {}));

(function (com) {
    var JTReceivePackage = (function () {
        function JTReceivePackage() {
            this._content = null;
            this._data = null;
            this._protocol = 0;
            this._status = 0;
            this._errorCode = 0;
        }
        Object.defineProperty(JTReceivePackage.prototype, "content", {
            get: function () {
                return this._content;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTReceivePackage.prototype, "protocol", {
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTReceivePackage.prototype, "status", {
            get: function () {
                return this._status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTReceivePackage.prototype, "errorCode", {
            get: function () {
                return this._errorCode;
            },
            enumerable: false,
            configurable: true
        });
        JTReceivePackage.prototype.readPackage = function (data) {
            this._data = JSON.parse(data);
            this._status = this._data["status"];
            this._protocol = this._data["protocol"];
            if (this._status == com.JTProtocol.NORMAL) {
                this._content = this._data["content"];
            }
            else {
                this._errorCode = this._data["errorCode"];
            }
        };
        JTReceivePackage.prototype.recycle = function () {
            this._content = null;
            this._protocol = this._errorCode = this._status = 0;
            this._data = null;
        };
        Object.defineProperty(JTReceivePackage, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(JTReceivePackage);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTReceivePackage.read = function (data) {
            var receivePackage = this.pool.get();
            receivePackage.readPackage(data);
            return receivePackage;
        };
        JTReceivePackage.put = function (receivePackage) {
            this.pool.put(receivePackage);
        };
        JTReceivePackage._pool = null;
        return JTReceivePackage;
    }());
    com.JTReceivePackage = JTReceivePackage;
})(com || (com = {}));

(function (com) {
    var JTSendPackage = (function () {
        function JTSendPackage() {
            this._content = {};
            this._data = {};
            this._channel = null;
        }
        JTSendPackage.prototype.writeProtocol = function (protocol) {
            this._protocol = protocol;
        };
        JTSendPackage.prototype.write = function (key, value) {
            this._content[key] = value;
        };
        Object.defineProperty(JTSendPackage.prototype, "content", {
            get: function () {
                return this._content;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTSendPackage.prototype, "protocol", {
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTSendPackage.prototype, "channel", {
            get: function () {
                return this._channel;
            },
            enumerable: false,
            configurable: true
        });
        JTSendPackage.prototype.send = function () {
            this._data["content"] = this._content;
            this._data["protocol"] = this._protocol;
            this._channel && this._channel.send(this._data);
            JTSendPackage.put(this);
        };
        JTSendPackage.prototype.setup = function (channel) {
            this._channel = channel;
        };
        JTSendPackage.prototype.recycle = function () {
            this._content = {};
            this._channel = null;
            this._protocol = 0;
            this._data = {};
        };
        Object.defineProperty(JTSendPackage, "pool", {
            get: function () {
                if (!this._pool) {
                    this._pool = com.JTPool.instance(JTSendPackage);
                }
                return this._pool;
            },
            enumerable: false,
            configurable: true
        });
        JTSendPackage.begin = function (channel) {
            var sendPackage = this.pool.get();
            if (!channel)
                channel = com.JTSession.channel;
            sendPackage.setup(channel);
            return sendPackage;
        };
        JTSendPackage.put = function (sendPackage) {
            this.pool.put(sendPackage);
        };
        JTSendPackage._pool = null;
        return JTSendPackage;
    }());
    com.JTSendPackage = JTSendPackage;
})(com || (com = {}));

(function (com) {
    var JTBuffer = (function () {
        function JTBuffer(data) {
            if (data === void 0) { data = null; }
            this._xd_ = true;
            this._allocated_ = 8;
            this._pos_ = 0;
            this._length = 0;
            if (data) {
                this._u8d_ = new Uint8Array(data);
                this._d_ = new DataView(this._u8d_.buffer);
                this._length = this._d_.byteLength;
            }
            else {
                this._resizeBuffer(this._allocated_);
            }
        }
        JTBuffer.getSystemEndian = function () {
            if (!JTBuffer._sysEndian) {
                var buffer = new ArrayBuffer(2);
                new DataView(buffer).setInt16(0, 256, true);
                JTBuffer._sysEndian = (new Int16Array(buffer))[0] === 256 ? JTBuffer.LITTLE_ENDIAN : JTBuffer.BIG_ENDIAN;
            }
            return JTBuffer._sysEndian;
        };
        Object.defineProperty(JTBuffer.prototype, "buffer", {
            get: function () {
                var rstBuffer = this._d_.buffer;
                if (rstBuffer.byteLength === this._length)
                    return rstBuffer;
                return rstBuffer.slice(0, this._length);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTBuffer.prototype, "endian", {
            get: function () {
                return this._xd_ ? JTBuffer.LITTLE_ENDIAN : JTBuffer.BIG_ENDIAN;
            },
            set: function (value) {
                this._xd_ = (value === JTBuffer.LITTLE_ENDIAN);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTBuffer.prototype, "length", {
            get: function () {
                return this._length;
            },
            set: function (value) {
                if (this._allocated_ < value)
                    this._resizeBuffer(this._allocated_ = Math.floor(Math.max(value, this._allocated_ * 2)));
                else if (this._allocated_ > value)
                    this._resizeBuffer(this._allocated_ = value);
                this._length = value;
            },
            enumerable: false,
            configurable: true
        });
        JTBuffer.prototype._resizeBuffer = function (len) {
            try {
                var newByteView = new Uint8Array(len);
                if (this._u8d_ != null) {
                    if (this._u8d_.length <= len)
                        newByteView.set(this._u8d_);
                    else
                        newByteView.set(this._u8d_.subarray(0, len));
                }
                this._u8d_ = newByteView;
                this._d_ = new DataView(newByteView.buffer);
            }
            catch (err) {
                throw "Invalid typed array length:" + len;
            }
        };
        JTBuffer.prototype.getString = function () {
            return this.readString();
        };
        JTBuffer.prototype.readString = function () {
            return this._rUTF(this.getUint16());
        };
        JTBuffer.prototype.getFloat32Array = function (start, len) {
            return this.readFloat32Array(start, len);
        };
        JTBuffer.prototype.readFloat32Array = function (start, len) {
            var end = start + len;
            end = (end > this._length) ? this._length : end;
            var v = new Float32Array(this._d_.buffer.slice(start, end));
            this._pos_ = end;
            return v;
        };
        JTBuffer.prototype.getUint8Array = function (start, len) {
            return this.readUint8Array(start, len);
        };
        JTBuffer.prototype.readUint8Array = function (start, len) {
            var end = start + len;
            end = (end > this._length) ? this._length : end;
            var v = new Uint8Array(this._d_.buffer.slice(start, end));
            this._pos_ = end;
            return v;
        };
        JTBuffer.prototype.getInt16Array = function (start, len) {
            return this.readInt16Array(start, len);
        };
        JTBuffer.prototype.readInt16Array = function (start, len) {
            var end = start + len;
            end = (end > this._length) ? this._length : end;
            var v = new Int16Array(this._d_.buffer.slice(start, end));
            this._pos_ = end;
            return v;
        };
        JTBuffer.prototype.getFloat32 = function () {
            return this.readFloat32();
        };
        JTBuffer.prototype.readFloat32 = function () {
            if (this._pos_ + 4 > this._length)
                throw "getFloat32 error - Out of bounds";
            var v = this._d_.getFloat32(this._pos_, this._xd_);
            this._pos_ += 4;
            return v;
        };
        JTBuffer.prototype.getFloat64 = function () {
            return this.readFloat64();
        };
        JTBuffer.prototype.readFloat64 = function () {
            if (this._pos_ + 8 > this._length)
                throw "getFloat64 error - Out of bounds";
            var v = this._d_.getFloat64(this._pos_, this._xd_);
            this._pos_ += 8;
            return v;
        };
        JTBuffer.prototype.writeFloat32 = function (value) {
            this._ensureWrite(this._pos_ + 4);
            this._d_.setFloat32(this._pos_, value, this._xd_);
            this._pos_ += 4;
        };
        JTBuffer.prototype.writeFloat64 = function (value) {
            this._ensureWrite(this._pos_ + 8);
            this._d_.setFloat64(this._pos_, value, this._xd_);
            this._pos_ += 8;
        };
        JTBuffer.prototype.getInt32 = function () {
            return this.readInt32();
        };
        JTBuffer.prototype.readInt32 = function () {
            if (this._pos_ + 4 > this._length)
                throw "getInt32 error - Out of bounds";
            var float = this._d_.getInt32(this._pos_, this._xd_);
            this._pos_ += 4;
            return float;
        };
        JTBuffer.prototype.getUint32 = function () {
            return this.readUint32();
        };
        JTBuffer.prototype.readUint32 = function () {
            if (this._pos_ + 4 > this._length)
                throw "getUint32 error - Out of bounds";
            var v = this._d_.getUint32(this._pos_, this._xd_);
            this._pos_ += 4;
            return v;
        };
        JTBuffer.prototype.writeInt32 = function (value) {
            this._ensureWrite(this._pos_ + 4);
            this._d_.setInt32(this._pos_, value, this._xd_);
            this._pos_ += 4;
        };
        JTBuffer.prototype.writeUint32 = function (value) {
            this._ensureWrite(this._pos_ + 4);
            this._d_.setUint32(this._pos_, value, this._xd_);
            this._pos_ += 4;
        };
        JTBuffer.prototype.getInt16 = function () {
            return this.readInt16();
        };
        JTBuffer.prototype.readInt16 = function () {
            if (this._pos_ + 2 > this._length)
                throw "getInt16 error - Out of bounds";
            var us = this._d_.getInt16(this._pos_, this._xd_);
            this._pos_ += 2;
            return us;
        };
        JTBuffer.prototype.getUint16 = function () {
            return this.readUint16();
        };
        JTBuffer.prototype.readUint16 = function () {
            if (this._pos_ + 2 > this._length)
                throw "getUint16 error - Out of bounds";
            var us = this._d_.getUint16(this._pos_, this._xd_);
            this._pos_ += 2;
            return us;
        };
        JTBuffer.prototype.writeUint16 = function (value) {
            this._ensureWrite(this._pos_ + 2);
            this._d_.setUint16(this._pos_, value, this._xd_);
            this._pos_ += 2;
        };
        JTBuffer.prototype.writeInt16 = function (value) {
            this._ensureWrite(this._pos_ + 2);
            this._d_.setInt16(this._pos_, value, this._xd_);
            this._pos_ += 2;
        };
        JTBuffer.prototype.getUint8 = function () {
            return this.readUint8();
        };
        JTBuffer.prototype.readUint8 = function () {
            if (this._pos_ + 1 > this._length)
                throw "getUint8 error - Out of bounds";
            return this._u8d_[this._pos_++];
        };
        JTBuffer.prototype.writeUint8 = function (value) {
            this._ensureWrite(this._pos_ + 1);
            this._d_.setUint8(this._pos_, value);
            this._pos_++;
        };
        JTBuffer.prototype._getUInt8 = function (pos) {
            return this._readUInt8(pos);
        };
        JTBuffer.prototype._readUInt8 = function (pos) {
            return this._d_.getUint8(pos);
        };
        JTBuffer.prototype._getUint16 = function (pos) {
            return this._readUint16(pos);
        };
        JTBuffer.prototype._readUint16 = function (pos) {
            return this._d_.getUint16(pos, this._xd_);
        };
        JTBuffer.prototype._getMatrix = function () {
            return this._readMatrix();
        };
        JTBuffer.prototype._readMatrix = function () {
            var rst = new com.JTMatrix(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
            return rst;
        };
        JTBuffer.prototype._rUTF = function (len) {
            var v = "", max = this._pos_ + len, c, c2, c3, f = String.fromCharCode;
            var u = this._u8d_, i = 0;
            var strs = [];
            var n = 0;
            strs.length = 1000;
            while (this._pos_ < max) {
                c = u[this._pos_++];
                if (c < 0x80) {
                    if (c != 0)
                        strs[n++] = f(c);
                }
                else if (c < 0xE0) {
                    strs[n++] = f(((c & 0x3F) << 6) | (u[this._pos_++] & 0x7F));
                }
                else if (c < 0xF0) {
                    c2 = u[this._pos_++];
                    strs[n++] = f(((c & 0x1F) << 12) | ((c2 & 0x7F) << 6) | (u[this._pos_++] & 0x7F));
                }
                else {
                    c2 = u[this._pos_++];
                    c3 = u[this._pos_++];
                    var _code = ((c & 0x0F) << 18) | ((c2 & 0x7F) << 12) | ((c3 & 0x7F) << 6) | (u[this._pos_++] & 0x7F);
                    if (_code >= 0x10000) {
                        var _offset = _code - 0x10000;
                        var _lead = 0xd800 | (_offset >> 10);
                        var _trail = 0xdc00 | (_offset & 0x3ff);
                        strs[n++] = f(_lead);
                        strs[n++] = f(_trail);
                    }
                    else {
                        strs[n++] = f(_code);
                    }
                }
                i++;
            }
            strs.length = n;
            return strs.join('');
        };
        JTBuffer.prototype.getCustomString = function (len) {
            return this.readCustomString(len);
        };
        JTBuffer.prototype.readCustomString = function (len) {
            var v = "", ulen = 0, c, c2, f = String.fromCharCode;
            var u = this._u8d_, i = 0;
            while (len > 0) {
                c = u[this._pos_];
                if (c < 0x80) {
                    v += f(c);
                    this._pos_++;
                    len--;
                }
                else {
                    ulen = c - 0x80;
                    this._pos_++;
                    len -= ulen;
                    while (ulen > 0) {
                        c = u[this._pos_++];
                        c2 = u[this._pos_++];
                        v += f((c2 << 8) | c);
                        ulen--;
                    }
                }
            }
            return v;
        };
        Object.defineProperty(JTBuffer.prototype, "pos", {
            get: function () {
                return this._pos_;
            },
            set: function (value) {
                this._pos_ = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTBuffer.prototype, "bytesAvailable", {
            get: function () {
                return this._length - this._pos_;
            },
            enumerable: false,
            configurable: true
        });
        JTBuffer.prototype.clear = function () {
            this._pos_ = 0;
            this.length = 0;
        };
        JTBuffer.prototype.__getBuffer = function () {
            return this._d_.buffer;
        };
        JTBuffer.prototype.writeUTFBytes = function (value) {
            value = value + "";
            for (var i = 0, sz = value.length; i < sz; i++) {
                var c = value.charCodeAt(i);
                if (c <= 0x7F) {
                    this.writeByte(c);
                }
                else if (c <= 0x7FF) {
                    this._ensureWrite(this._pos_ + 2);
                    this._u8d_.set([0xC0 | (c >> 6), 0x80 | (c & 0x3F)], this._pos_);
                    this._pos_ += 2;
                }
                else if (c >= 0xD800 && c <= 0xDBFF) {
                    i++;
                    var c2 = value.charCodeAt(i);
                    if (!isNaN(c2) && c2 >= 0xDC00 && c2 <= 0xDFFF) {
                        var _p1 = (c & 0x3FF) + 0x40;
                        var _p2 = c2 & 0x3FF;
                        var _b1 = 0xF0 | ((_p1 >> 8) & 0x3F);
                        var _b2 = 0x80 | ((_p1 >> 2) & 0x3F);
                        var _b3 = 0x80 | ((_p1 & 0x3) << 4) | ((_p2 >> 6) & 0xF);
                        var _b4 = 0x80 | (_p2 & 0x3F);
                        this._ensureWrite(this._pos_ + 4);
                        this._u8d_.set([_b1, _b2, _b3, _b4], this._pos_);
                        this._pos_ += 4;
                    }
                }
                else if (c <= 0xFFFF) {
                    this._ensureWrite(this._pos_ + 3);
                    this._u8d_.set([0xE0 | (c >> 12), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)], this._pos_);
                    this._pos_ += 3;
                }
                else {
                    this._ensureWrite(this._pos_ + 4);
                    this._u8d_.set([0xF0 | (c >> 18), 0x80 | ((c >> 12) & 0x3F), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)], this._pos_);
                    this._pos_ += 4;
                }
            }
        };
        JTBuffer.prototype.writeUTFString = function (value) {
            var tPos = this.pos;
            this.writeUint16(1);
            this.writeUTFBytes(value);
            var dPos = this.pos - tPos - 2;
            this._d_.setUint16(tPos, dPos, this._xd_);
        };
        JTBuffer.prototype.writeUTFString32 = function (value) {
            var tPos = this.pos;
            this.writeUint32(1);
            this.writeUTFBytes(value);
            var dPos = this.pos - tPos - 4;
            this._d_.setUint32(tPos, dPos, this._xd_);
        };
        JTBuffer.prototype.readUTFString = function () {
            return this.readUTFBytes(this.getUint16());
        };
        JTBuffer.prototype.readUTFString32 = function () {
            return this.readUTFBytes(this.getUint32());
        };
        JTBuffer.prototype.getUTFString = function () {
            return this.readUTFString();
        };
        JTBuffer.prototype.readUTFBytes = function (len) {
            if (len === void 0) { len = -1; }
            if (len === 0)
                return "";
            var lastBytes = this.bytesAvailable;
            if (len > lastBytes)
                throw "readUTFBytes error - Out of bounds";
            len = len > 0 ? len : lastBytes;
            return this._rUTF(len);
        };
        JTBuffer.prototype.getUTFBytes = function (len) {
            if (len === void 0) { len = -1; }
            return this.readUTFBytes(len);
        };
        JTBuffer.prototype.writeByte = function (value) {
            this._ensureWrite(this._pos_ + 1);
            this._d_.setInt8(this._pos_, value);
            this._pos_ += 1;
        };
        JTBuffer.prototype.readByte = function () {
            if (this._pos_ + 1 > this._length)
                throw "readByte error - Out of bounds";
            return this._d_.getInt8(this._pos_++);
        };
        JTBuffer.prototype.getByte = function () {
            return this.readByte();
        };
        JTBuffer.prototype._ensureWrite = function (lengthToEnsure) {
            if (this._length < lengthToEnsure)
                this._length = lengthToEnsure;
            if (this._allocated_ < lengthToEnsure)
                this.length = lengthToEnsure;
        };
        JTBuffer.prototype.writeArrayBuffer = function (arraybuffer, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (offset < 0 || length < 0)
                throw "writeArrayBuffer error - Out of bounds";
            if (length == 0)
                length = arraybuffer.byteLength - offset;
            this._ensureWrite(this._pos_ + length);
            var uint8array = new Uint8Array(arraybuffer);
            this._u8d_.set(uint8array.subarray(offset, offset + length), this._pos_);
            this._pos_ += length;
        };
        JTBuffer.prototype.readArrayBuffer = function (length) {
            var rst;
            rst = this._u8d_.buffer.slice(this._pos_, this._pos_ + length);
            this._pos_ = this._pos_ + length;
            return rst;
        };
        JTBuffer.BIG_ENDIAN = "bigEndian";
        JTBuffer.LITTLE_ENDIAN = "littleEndian";
        JTBuffer._sysEndian = null;
        return JTBuffer;
    }());
    com.JTBuffer = JTBuffer;
})(com || (com = {}));

(function (com) {
    var JTHttpRequest = (function (_super) {
        __extends(JTHttpRequest, _super);
        function JTHttpRequest() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1._http = new XMLHttpRequest();
            return _this_1;
        }
        JTHttpRequest.prototype.send = function (url, data, method, responseType, headers) {
            if (data === void 0) { data = null; }
            if (method === void 0) { method = "get"; }
            if (responseType === void 0) { responseType = "text"; }
            if (headers === void 0) { headers = null; }
            this._responseType = responseType;
            this._data = null;
            this._url = url;
            var _this = this;
            var http = this._http;
            http.open(method, url, true);
            var isJson = false;
            if (headers) {
                for (var i = 0; i < headers.length; i++) {
                    http.setRequestHeader(headers[i++], headers[i]);
                }
            }
            else if (!(window.conch)) {
                if (!data || typeof (data) == 'string')
                    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                else {
                    http.setRequestHeader("Content-Type", "application/json");
                    if (!(data instanceof ArrayBuffer) && typeof data !== "string") {
                        isJson = true;
                    }
                }
            }
            var restype = responseType !== "arraybuffer" ? "text" : "arraybuffer";
            http.responseType = restype;
            if (http.dataType) {
                http.dataType = restype;
            }
            http.onerror = function (e) {
                _this._onError(e);
            };
            http.onabort = function (e) {
                _this._onAbort(e);
            };
            http.onprogress = function (e) {
                _this._onProgress(e);
            };
            http.onload = function (e) {
                _this._onLoad(e);
            };
            http.send(isJson ? JSON.stringify(data) : data);
        };
        JTHttpRequest.prototype._onProgress = function (e) {
            if (e && e.lengthComputable)
                this.dispatchEvent(JTHttpRequest.PROGRESS, e.loaded / e.total);
        };
        JTHttpRequest.prototype._onAbort = function (e) {
            this.error("Request was aborted by user");
        };
        JTHttpRequest.prototype._onError = function (e) {
            this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
        };
        JTHttpRequest.prototype._onLoad = function (e) {
            var http = this._http;
            var status = http.status !== undefined ? http.status : 200;
            if (status === 200 || status === 204 || status === 0) {
                this.complete();
            }
            else {
                this.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
            }
        };
        JTHttpRequest.prototype.error = function (message) {
            this.clear();
            console.warn(this.url, message);
            this.dispatchEvent(JTHttpRequest.ERROR, message);
        };
        JTHttpRequest.prototype.complete = function () {
            this.clear();
            var flag = true;
            try {
                if (this._responseType === "json") {
                    this._data = JSON.parse(this._http.responseText);
                }
                else if (this._responseType === "xml") {
                    this._data = JTHttpRequest.parseXMLFromString(this._http.responseText);
                }
                else {
                    this._data = this._http.response || this._http.responseText;
                }
            }
            catch (e) {
                flag = false;
                this.error(e.message);
            }
            flag && this.dispatchEvent(JTHttpRequest.COMPLETE, this._data instanceof Array ? [this._data] : this._data);
        };
        JTHttpRequest.prototype.clear = function () {
            var http = this._http;
            http.onerror = http.onabort = http.onprogress = http.onload = null;
        };
        Object.defineProperty(JTHttpRequest.prototype, "url", {
            get: function () {
                return this._url;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTHttpRequest.prototype, "data", {
            get: function () {
                return this._data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTHttpRequest.prototype, "http", {
            get: function () {
                return this._http;
            },
            enumerable: false,
            configurable: true
        });
        JTHttpRequest._urlEncode = encodeURI;
        JTHttpRequest.COMPLETE = "complete";
        JTHttpRequest.PROGRESS = "progress";
        JTHttpRequest.ERROR = "error";
        JTHttpRequest.parseXMLFromString = function (value) {
            var rst;
            value = value.replace(/>\s+</g, '><');
            rst = (new DOMParser()).parseFromString(value, 'text/xml');
            if (rst.firstChild.textContent.indexOf("This page contains the following errors") > -1) {
                throw new Error(rst.firstChild.firstChild.textContent);
            }
            return rst;
        };
        return JTHttpRequest;
    }(com.JTEventDispatcher));
    com.JTHttpRequest = JTHttpRequest;
})(com || (com = {}));

(function (com) {
    var JTURLLoader = (function (_super) {
        __extends(JTURLLoader, _super);
        function JTURLLoader() {
            return _super.call(this) || this;
        }
        JTURLLoader.TEXT = "text";
        JTURLLoader.JSON = "json";
        JTURLLoader.XML = "xml";
        JTURLLoader.BUFFER = "arraybuffer";
        JTURLLoader.IMAGE = "image";
        JTURLLoader.SOUND = "sound";
        JTURLLoader.ATLAS = "atlas";
        JTURLLoader.FONT = "font";
        return JTURLLoader;
    }(com.JTHttpRequest));
    com.JTURLLoader = JTURLLoader;
})(com || (com = {}));

(function (com) {
    var JTWebSocket = (function (_super) {
        __extends(JTWebSocket, _super);
        function JTWebSocket(host, port, byteClass, protocols) {
            if (host === void 0) { host = null; }
            if (port === void 0) { port = 0; }
            if (byteClass === void 0) { byteClass = null; }
            if (protocols === void 0) { protocols = null; }
            var _this = _super.call(this) || this;
            _this.disableInput = false;
            _this.protocols = [];
            _this._byteClass = byteClass ? byteClass : com.JTBuffer;
            _this.protocols = protocols;
            _this.endian = JTWebSocket.BIG_ENDIAN;
            if (host && port > 0 && port < 65535)
                _this.connect(host, port);
            return _this;
        }
        Object.defineProperty(JTWebSocket.prototype, "input", {
            get: function () {
                return this._input;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTWebSocket.prototype, "output", {
            get: function () {
                return this._output;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTWebSocket.prototype, "connected", {
            get: function () {
                return this._connected;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTWebSocket.prototype, "endian", {
            get: function () {
                return this._endian;
            },
            set: function (value) {
                this._endian = value;
                if (this._input != null)
                    this._input.endian = value;
                if (this._output != null)
                    this._output.endian = value;
            },
            enumerable: false,
            configurable: true
        });
        JTWebSocket.prototype.connect = function (host, port) {
            var url = "ws://" + host + ":" + port;
            this.connectByUrl(url);
        };
        JTWebSocket.prototype.connectByUrl = function (url) {
            var _this = this;
            if (this._socket != null)
                this.close();
            this._socket && this.clean();
            if (!this.protocols || this.protocols.length == 0) {
                this._socket = new WebSocket(url);
            }
            else {
                this._socket = new WebSocket(url, this.protocols);
            }
            this._socket.binaryType = "arraybuffer";
            this._output = new this._byteClass();
            this._output.endian = this.endian;
            this._input = new this._byteClass();
            this._input.endian = this.endian;
            this._addInputPosition = 0;
            this._socket.onopen = function (e) {
                _this._onOpen(e);
            };
            this._socket.onmessage = function (msg) {
                _this._onMessage(msg);
            };
            this._socket.onclose = function (e) {
                _this._onClose(e);
            };
            this._socket.onerror = function (e) {
                _this._onError(e);
            };
        };
        JTWebSocket.prototype.clean = function () {
            this.close();
            this._connected = false;
            this._socket.onopen = null;
            this._socket.onmessage = null;
            this._socket.onclose = null;
            this._socket.onerror = null;
            this._socket = null;
            this.removes();
        };
        JTWebSocket.prototype.close = function () {
            if (this._socket != null) {
                try {
                    this._socket.close();
                }
                catch (e) {
                }
            }
        };
        JTWebSocket.prototype._onOpen = function (e) {
            this._connected = true;
            this.dispatchEvent(JTWebSocket.OPEN, e);
        };
        JTWebSocket.prototype._onMessage = function (msg) {
            if (!msg || !msg.data)
                return;
            var data = msg.data;
            if (this.disableInput && data) {
                this.dispatchEvent(JTWebSocket.MESSAGE, data);
                return;
            }
            if (this._input.length > 0 && this._input.bytesAvailable < 1) {
                this._input.clear();
                this._addInputPosition = 0;
            }
            var pre = this._input.pos;
            !this._addInputPosition && (this._addInputPosition = 0);
            this._input.pos = this._addInputPosition;
            if (data) {
                if (typeof (data) == 'string') {
                    this._input.writeUTFBytes(data);
                }
                else {
                    this._input.writeArrayBuffer(data);
                }
                this._addInputPosition = this._input.pos;
                this._input.pos = pre;
            }
            this.dispatchEvent(JTWebSocket.MESSAGE, data);
        };
        JTWebSocket.prototype._onClose = function (e) {
            this._connected = false;
            this.dispatchEvent(JTWebSocket.CLOSE, e);
        };
        JTWebSocket.prototype._onError = function (e) {
            this.dispatchEvent(JTWebSocket.ERROR, e);
        };
        JTWebSocket.prototype.send = function (data) {
            this._socket.send(data);
        };
        JTWebSocket.prototype.flush = function () {
            if (this._output && this._output.length > 0) {
                var evt;
                try {
                    this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                }
                catch (e) {
                    evt = e;
                }
                this._output.endian = this.endian;
                this._output.clear();
                if (evt)
                    this.dispatchEvent(JTWebSocket.ERROR, evt);
            }
        };
        JTWebSocket.LITTLE_ENDIAN = "littleEndian";
        JTWebSocket.BIG_ENDIAN = "bigEndian";
        JTWebSocket.OPEN = "open";
        JTWebSocket.MESSAGE = "message";
        JTWebSocket.CLOSE = "close";
        JTWebSocket.ERROR = "error";
        return JTWebSocket;
    }(com.JTEventDispatcher));
    com.JTWebSocket = JTWebSocket;
})(com || (com = {}));

(function (com) {
    var JTChannel = (function (_super) {
        __extends(JTChannel, _super);
        function JTChannel(cls) {
            var _this = _super.call(this) || this;
            _this._cls = null;
            _this._port = 0;
            _this._host = null;
            _this._channel = null;
            _this.__name = "";
            _this._pipeline = null;
            _this._encoder = null;
            _this._decoder = null;
            _this._connectUrl = null;
            if (cls)
                _this._cls = cls;
            else {
                _this._cls = _this instanceof com.JTWebSocketChannel ? com.JTWebSocket : com.JTHttpRequest;
            }
            return _this;
        }
        JTChannel.prototype.config = function (host, port) {
            this._host = host;
            this._port = port;
        };
        JTChannel.prototype.connect = function () {
            if (this._channel)
                this._channel.clean();
            else
                this._channel = new this._cls();
            return this._channel;
        };
        JTChannel.prototype.reload = function () {
            this._encoder = this._pipeline.getContext(com.JTChannelContext.ENCODE);
            this._decoder = this._pipeline.getContext(com.JTChannelContext.DECODE);
        };
        JTChannel.prototype.onReceiveMessage = function (data) {
            var decoder = this._decoder;
            var message = decoder.decode(data);
            decoder.readComplete(message);
        };
        JTChannel.prototype.writeAndFlush = function (data) {
            this.flush();
            this.send(data);
        };
        Object.defineProperty(JTChannel.prototype, "name", {
            get: function () {
                return this.__name;
            },
            set: function (value) {
                this.__name = value;
            },
            enumerable: false,
            configurable: true
        });
        JTChannel.prototype.bind = function (channelPipeline) {
            this._pipeline = channelPipeline;
        };
        Object.defineProperty(JTChannel.prototype, "url", {
            get: function () {
                return this._connectUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTChannel.prototype, "pipeline", {
            get: function () {
                return this._pipeline;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTChannel.prototype, "host", {
            get: function () {
                return this._host;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTChannel.prototype, "port", {
            get: function () {
                return this._port;
            },
            enumerable: false,
            configurable: true
        });
        return JTChannel;
    }(com.JTEventDispatcher));
    com.JTChannel = JTChannel;
})(com || (com = {}));

(function (com) {
    var JTChannelGroup = (function () {
        function JTChannelGroup() {
            this.___channelMap = null;
            this.___pipelineMap = null;
            this.__connects = null;
            this.__size = 0;
            this.__connects = [];
            this.___channelMap = {};
            this.___pipelineMap = {};
        }
        JTChannelGroup.prototype.addChannel = function (type, channel) {
            var ___pipeline = this.___pipelineMap[type];
            ;
            if (!___pipeline) {
                this.___channelMap[type] = channel;
                ___pipeline = new com.JTChannelPipeline(this);
                ___pipeline.bind(channel);
                this.___pipelineMap[type] = ___pipeline;
                this.__size++;
            }
            return ___pipeline;
        };
        JTChannelGroup.prototype.setupChannel = function (type, __channleClass) {
            var ___pipeline = this.___pipelineMap[type];
            ;
            if (!___pipeline) {
                var __c = new __channleClass();
                this.___channelMap[type] = __c;
                ___pipeline = new com.JTChannelPipeline(this);
                ___pipeline.bind(__c);
                this.___pipelineMap[type] = ___pipeline;
                this.__size++;
            }
            return ___pipeline;
        };
        JTChannelGroup.prototype.connect = function () {
            var count = this.__connects.length;
            for (var i = 0; i < count; i++)
                this.__connects[i].connect();
            return this.__connects;
        };
        JTChannelGroup.prototype.writeAndFlush = function (data) {
            var count = this.__connects.length;
            for (var i = 0; i < count; i++)
                this.__connects[i].writeAndFlush(data);
        };
        JTChannelGroup.prototype.reload = function () {
            var count = this.__connects.length;
            for (var i = 0; i < count; i++)
                this.__connects[i].flush();
        };
        JTChannelGroup.prototype.flush = function () {
            var count = this.__connects.length;
            for (var i = 0; i < count; i++)
                this.__connects[i].flush();
        };
        JTChannelGroup.prototype.send = function (data) {
            var count = this.__connects.length;
            for (var i = 0; i < count; i++)
                this.__connects[i].send(data);
        };
        JTChannelGroup.prototype.mark = function (channel) {
            this.__connects.push(channel);
        };
        JTChannelGroup.prototype.getChannelPipeline = function (type) {
            return this.___pipelineMap[type];
        };
        JTChannelGroup.prototype.getChannel = function (type) {
            return this.___channelMap[type];
        };
        Object.defineProperty(JTChannelGroup.prototype, "size", {
            get: function () {
                return this.__size;
            },
            enumerable: false,
            configurable: true
        });
        JTChannelGroup.WEBSOCKET_CHANNEL = "Websocket_Channel";
        JTChannelGroup.HTTP_CHANNEL = "Http_Channel";
        return JTChannelGroup;
    }());
    com.JTChannelGroup = JTChannelGroup;
})(com || (com = {}));

(function (com) {
    var JTHttpChannel = (function (_super) {
        __extends(JTHttpChannel, _super);
        function JTHttpChannel(cls) {
            var _this = _super.call(this, cls) || this;
            _this.__defaultMethodType = JTHttpChannel.METHOD_POST;
            return _this;
        }
        JTHttpChannel.prototype.flush = function () {
        };
        JTHttpChannel.prototype.writeMethod = function (methodType) {
            this.__defaultMethodType = methodType;
        };
        JTHttpChannel.prototype.send = function (data) {
            var protocol = data["protocol"];
            var message = this._encoder.encode(data);
            var httpChannel = this._channel;
            httpChannel.send(this._connectUrl + protocol, message, this.__defaultMethodType);
            this._encoder.writeComplete(message);
        };
        JTHttpChannel.prototype.sendForm = function () {
        };
        JTHttpChannel.prototype.sendGetToHeader = function () {
        };
        JTHttpChannel.prototype.sendGetToUrl = function () {
        };
        Object.defineProperty(JTHttpChannel.prototype, "defaultMethodType", {
            get: function () {
                return this.__defaultMethodType;
            },
            enumerable: false,
            configurable: true
        });
        JTHttpChannel.prototype.config = function (host, port) {
            _super.prototype.config.call(this, host, port);
            this._connectUrl = host + ":" + port;
        };
        JTHttpChannel.prototype.connect = function () {
            var channel = _super.prototype.connect.call(this);
            channel.addEventListener(com.JTHttpRequest.COMPLETE, this.onReceiveMessage, this);
            channel.addEventListener(com.JTHttpRequest.ERROR, this.onErrorHandler, this);
            this.pipeline.channelActive();
            return channel;
        };
        JTHttpChannel.prototype.onReceiveMessage = function (data) {
            var decoder = this._decoder;
            var message = decoder.decode(data);
            decoder.readComplete(message);
        };
        JTHttpChannel.prototype.onErrorHandler = function (e) {
            com.JTLogger.info("The http channel send msg fail!");
            this.pipeline.channelInactive();
        };
        JTHttpChannel.METHOD_GET = "get";
        JTHttpChannel.METHOD_POST = "post";
        return JTHttpChannel;
    }(com.JTChannel));
    com.JTHttpChannel = JTHttpChannel;
})(com || (com = {}));

(function (com) {
    var JTWebSocketChannel = (function (_super) {
        __extends(JTWebSocketChannel, _super);
        function JTWebSocketChannel(cls) {
            var _this = _super.call(this, cls) || this;
            _this._connected = false;
            _this._buffers = null;
            _this._idleState = null;
            _this._buffers = [];
            return _this;
        }
        JTWebSocketChannel.prototype.flush = function () {
            var socket = this._channel;
            while (this._buffers.length) {
                var msg = this._buffers.shift();
                if (socket) {
                    socket.connected && socket.send(msg);
                    this._encoder.writeComplete(msg);
                }
            }
        };
        JTWebSocketChannel.prototype.send = function (data) {
            var message = this._encoder.encode(data);
            var socket = this._channel;
            if (socket && socket.connected) {
                socket.send(message);
                this._encoder.writeComplete(message);
            }
            else {
                this._buffers.push(message);
                com.JTLogger.info("Websocket send error, The websocket cant send msg to server!");
            }
        };
        JTWebSocketChannel.prototype.config = function (host, port) {
            _super.prototype.config.call(this, host, port);
            this._connectUrl = "ws://" + host + ":" + port;
        };
        JTWebSocketChannel.prototype.connect = function () {
            var channel = _super.prototype.connect.call(this);
            channel.addEventListener(com.JTWebSocket.OPEN, this.onConnectSucceed, this);
            channel.addEventListener(com.JTWebSocket.MESSAGE, this.onReceiveMessage, this);
            channel.addEventListener(com.JTWebSocket.CLOSE, this.onCloseHandler, this);
            channel.addEventListener(com.JTWebSocket.ERROR, this.onErrorHandler, this);
            channel.connect(this._host, this.port);
            return channel;
        };
        JTWebSocketChannel.prototype.onConnectSucceed = function (e) {
            com.info("The channel connect websocket server succeed!");
            this.pipeline.channelActive();
            this.flush();
            com.execute(com.JTWebSocket.OPEN);
        };
        JTWebSocketChannel.prototype.onCloseHandler = function (e) {
            this.pipeline.channelInactive();
            com.info("The websocket server already close!");
        };
        JTWebSocketChannel.prototype.onErrorHandler = function (e) {
            this.pipeline.channelInactive();
            com.info("The websocket connect server fail!");
        };
        JTWebSocketChannel.prototype.reload = function () {
            _super.prototype.reload.call(this);
            this._idleState = this._pipeline.getContext(com.JTChannelContext.IDLE);
        };
        return JTWebSocketChannel;
    }(com.JTChannel));
    com.JTWebSocketChannel = JTWebSocketChannel;
})(com || (com = {}));

(function (com) {
    var JTChannelContext = (function (_super) {
        __extends(JTChannelContext, _super);
        function JTChannelContext() {
            var _this = _super.call(this) || this;
            _this._channel = null;
            _this._channelPipeline = null;
            return _this;
        }
        JTChannelContext.prototype.getContext = function (type) {
            return this._channelPipeline.getContext(type);
        };
        Object.defineProperty(JTChannelContext.prototype, "channel", {
            get: function () {
                return this._channel;
            },
            enumerable: false,
            configurable: true
        });
        JTChannelContext.prototype.bind = function (channelPipeline) {
            this._channelPipeline = channelPipeline;
            this._channel = channelPipeline.channel;
        };
        JTChannelContext.ENCODE = "encode";
        JTChannelContext.DECODE = "decode";
        JTChannelContext.IDLE = "idle";
        return JTChannelContext;
    }(com.JTEventDispatcher));
    com.JTChannelContext = JTChannelContext;
})(com || (com = {}));

(function (com) {
    var JTChannelContextAdapter = (function (_super) {
        __extends(JTChannelContextAdapter, _super);
        function JTChannelContextAdapter() {
            return _super.call(this) || this;
        }
        return JTChannelContextAdapter;
    }(com.JTChannelContext));
    com.JTChannelContextAdapter = JTChannelContextAdapter;
})(com || (com = {}));

(function (com) {
    var JTAbstractDecoderAdapter = (function (_super) {
        __extends(JTAbstractDecoderAdapter, _super);
        function JTAbstractDecoderAdapter() {
            var _this = _super.call(this) || this;
            _this._responseMapper = null;
            _this._protocolContext = null;
            _this._errorMessageContext = null;
            _this._downProtocol = null;
            return _this;
        }
        JTAbstractDecoderAdapter.prototype.channelActive = function () {
            this._responseMapper = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_MAPPING);
            this._protocolContext = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_PROTOCOL);
            this._errorMessageContext = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_ERROR_MESSAGE);
            this._downProtocol = this._protocolContext.downProtocol;
        };
        JTAbstractDecoderAdapter.prototype.readComplete = function (receivePackage) {
            var protocol = receivePackage.protocol;
            var content = receivePackage.content;
            var itemProtocol = this._downProtocol.getProtocol(protocol);
            if (!itemProtocol) {
                com.JTLogger.debug("[receivePackage.read] the downProcotol cant register protocol: " + protocol);
            }
            if (itemProtocol && itemProtocol.isWaiting) {
                this._downProtocol.execute(content);
            }
            if (this._errorMessageContext.checkPackageStatus(receivePackage)) {
                if (this._responseMapper)
                    content = this.toMapper(protocol, content);
                com.JTFunctionManager.execute(protocol.toString(), content);
                com.JTLogger.info("[receivePackage.read] DownProtocol: " + protocol, "    content:  " + JSON.stringify(content));
            }
            else {
                this._errorMessageContext.showErrorMessage(receivePackage);
                com.JTLogger.info("[receivePackage.read] protocol: " + protocol, "    errorCode:  " + receivePackage.errorCode);
            }
        };
        JTAbstractDecoderAdapter.prototype.channelInactive = function () {
        };
        JTAbstractDecoderAdapter.prototype.toMapper = function (protocol, data) {
            return this._responseMapper.create(protocol, data);
        };
        return JTAbstractDecoderAdapter;
    }(com.JTChannelContextAdapter));
    com.JTAbstractDecoderAdapter = JTAbstractDecoderAdapter;
})(com || (com = {}));

(function (com) {
    var JTDecoderToByteAdapter = (function (_super) {
        __extends(JTDecoderToByteAdapter, _super);
        function JTDecoderToByteAdapter() {
            return _super.call(this) || this;
        }
        JTDecoderToByteAdapter.prototype.build = function () {
        };
        JTDecoderToByteAdapter.prototype.decode = function (data) {
            return null;
        };
        JTDecoderToByteAdapter.prototype.readComplete = function (receivePackage) {
        };
        return JTDecoderToByteAdapter;
    }(com.JTAbstractDecoderAdapter));
    com.JTDecoderToByteAdapter = JTDecoderToByteAdapter;
})(com || (com = {}));

(function (com) {
    var JTDecoderToJSONAdapter = (function (_super) {
        __extends(JTDecoderToJSONAdapter, _super);
        function JTDecoderToJSONAdapter() {
            return _super.call(this) || this;
        }
        JTDecoderToJSONAdapter.prototype.build = function () {
        };
        JTDecoderToJSONAdapter.prototype.decode = function (receiveMessage) {
            return com.JTReceivePackage.read(receiveMessage);
        };
        JTDecoderToJSONAdapter.prototype.readComplete = function (receivePackage) {
            _super.prototype.readComplete.call(this, receivePackage);
        };
        return JTDecoderToJSONAdapter;
    }(com.JTAbstractDecoderAdapter));
    com.JTDecoderToJSONAdapter = JTDecoderToJSONAdapter;
})(com || (com = {}));

(function (com) {
    var JTAbstractEncoderAdapter = (function (_super) {
        __extends(JTAbstractEncoderAdapter, _super);
        function JTAbstractEncoderAdapter() {
            return _super.call(this) || this;
        }
        JTAbstractEncoderAdapter.prototype.writeComplete = function (data) {
            var message = JSON.parse(data);
            var protocolManager = com.JTApplicationBootstrap.getContext(com.JTApplicationBootstrap.CONTEXT_PROTOCOL);
            var protocolUp = protocolManager.protocolUp;
            var itemProtocol = protocolUp.getProtocol(message.protocol);
            if (itemProtocol && itemProtocol.isWaiting) {
                protocolUp.execute(message);
            }
            com.JTLogger.info("[sendPackage.send] : UpProtocol:  " + message.protocol, "   content: " + JSON.stringify(message.content));
        };
        JTAbstractEncoderAdapter.prototype.channelInactive = function () {
        };
        return JTAbstractEncoderAdapter;
    }(com.JTChannelContextAdapter));
    com.JTAbstractEncoderAdapter = JTAbstractEncoderAdapter;
})(com || (com = {}));

(function (com) {
    var JTEncodeToByteAdapter = (function (_super) {
        __extends(JTEncodeToByteAdapter, _super);
        function JTEncodeToByteAdapter() {
            return _super.call(this) || this;
        }
        JTEncodeToByteAdapter.prototype.build = function () {
        };
        JTEncodeToByteAdapter.prototype.channelActive = function () {
        };
        JTEncodeToByteAdapter.prototype.encode = function (data) {
        };
        JTEncodeToByteAdapter.prototype.writeComplete = function (data) {
        };
        return JTEncodeToByteAdapter;
    }(com.JTAbstractEncoderAdapter));
    com.JTEncodeToByteAdapter = JTEncodeToByteAdapter;
})(com || (com = {}));

(function (com) {
    var JTEncodeToJSONAdapter = (function (_super) {
        __extends(JTEncodeToJSONAdapter, _super);
        function JTEncodeToJSONAdapter() {
            return _super.call(this) || this;
        }
        JTEncodeToJSONAdapter.prototype.build = function () {
        };
        JTEncodeToJSONAdapter.prototype.channelActive = function () {
        };
        JTEncodeToJSONAdapter.prototype.encode = function (data) {
            return JSON.stringify(data);
        };
        JTEncodeToJSONAdapter.prototype.writeComplete = function (data) {
            _super.prototype.writeComplete.call(this, data);
        };
        return JTEncodeToJSONAdapter;
    }(com.JTAbstractEncoderAdapter));
    com.JTEncodeToJSONAdapter = JTEncodeToJSONAdapter;
})(com || (com = {}));

(function (com) {
    var JTAbstractIdleStateAdapter = (function (_super) {
        __extends(JTAbstractIdleStateAdapter, _super);
        function JTAbstractIdleStateAdapter(interval, repeatInterval, repeatTimes) {
            if (interval === void 0) { interval = 15000; }
            if (repeatInterval === void 0) { repeatInterval = 10; }
            if (repeatTimes === void 0) { repeatTimes = 5; }
            var _this = _super.call(this) || this;
            _this._timer = null;
            _this._repeatCount = 0;
            _this._currentRepeatCount = 0;
            _this._heartInterval = 0;
            _this._connected = false;
            _this._heartInterval = interval;
            return _this;
        }
        JTAbstractIdleStateAdapter.prototype.build = function () {
        };
        JTAbstractIdleStateAdapter.prototype.channelInactive = function () {
        };
        JTAbstractIdleStateAdapter.prototype.channelActive = function () {
            this._connected = true;
            this.createTimer(this._heartInterval);
        };
        JTAbstractIdleStateAdapter.prototype.createTimer = function (interval) {
            this._timer = com.JTTimer.create(interval, 0);
            this._timer.addEventListener(com.JTTimeEvent.TIMER, this.onTimerHandler, this);
        };
        JTAbstractIdleStateAdapter.prototype.onTimerHandler = function (timer) {
            if (!this._connected) {
                this._timer.stop();
                return;
            }
        };
        JTAbstractIdleStateAdapter.prototype.onTimerComplete = function (timer) {
        };
        return JTAbstractIdleStateAdapter;
    }(com.JTChannelContext));
    com.JTAbstractIdleStateAdapter = JTAbstractIdleStateAdapter;
})(com || (com = {}));

(function (com) {
    var JTIdleStateAdapter = (function (_super) {
        __extends(JTIdleStateAdapter, _super);
        function JTIdleStateAdapter() {
            return _super.call(this) || this;
        }
        return JTIdleStateAdapter;
    }(com.JTAbstractIdleStateAdapter));
    com.JTIdleStateAdapter = JTIdleStateAdapter;
})(com || (com = {}));

(function (com) {
    var JTAbstractProtocolErrorMessage = (function (_super) {
        __extends(JTAbstractProtocolErrorMessage, _super);
        function JTAbstractProtocolErrorMessage() {
            return _super.call(this) || this;
        }
        JTAbstractProtocolErrorMessage.prototype.build = function () {
        };
        JTAbstractProtocolErrorMessage.prototype.checkPackageStatus = function (receivePackage) {
            return receivePackage.status == com.JTProtocol.NORMAL;
        };
        JTAbstractProtocolErrorMessage.prototype.showErrorMessage = function (receivePackage) {
        };
        return JTAbstractProtocolErrorMessage;
    }(com.JTOptionContext));
    com.JTAbstractProtocolErrorMessage = JTAbstractProtocolErrorMessage;
})(com || (com = {}));

(function (com) {
    var JTAbstractProtocolManager = (function (_super) {
        __extends(JTAbstractProtocolManager, _super);
        function JTAbstractProtocolManager() {
            var _this = _super.call(this) || this;
            _this.protocolUp = null;
            _this.downProtocol = null;
            return _this;
        }
        JTAbstractProtocolManager.prototype.build = function () {
        };
        JTAbstractProtocolManager.prototype.registerDownProtocol = function (protocol, waiting, security) {
            this.downProtocol.registerProtocol(protocol, waiting, security);
        };
        JTAbstractProtocolManager.prototype.registerUpProtocol = function (protocol, waiting, security) {
            this.protocolUp.registerProtocol(protocol, waiting, security);
        };
        JTAbstractProtocolManager.prototype.bind = function (classUp, classDown) {
            this.protocolUp = new classUp();
            this.downProtocol = new classDown();
        };
        return JTAbstractProtocolManager;
    }(com.JTOptionContext));
    com.JTAbstractProtocolManager = JTAbstractProtocolManager;
})(com || (com = {}));

(function (com) {
    var JTItemProtocol = (function () {
        function JTItemProtocol(protocol) {
            this._isWaiting = false;
            this._securityOption = null;
            this._protocol = 0;
            this._protocol = protocol;
        }
        JTItemProtocol.prototype.setup = function (isWaiting, security) {
            this._securityOption = security;
            this._isWaiting = isWaiting;
        };
        JTItemProtocol.create = function (protocol, isWaiting, security) {
            var item = new JTItemProtocol(protocol);
            item.setup(isWaiting, security);
            return item;
        };
        Object.defineProperty(JTItemProtocol.prototype, "protocol", {
            get: function () {
                return this._protocol;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTItemProtocol.prototype, "securityOption", {
            get: function () {
                return this._securityOption;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTItemProtocol.prototype, "isWaiting", {
            get: function () {
                return this._isWaiting;
            },
            enumerable: false,
            configurable: true
        });
        JTItemProtocol.prototype.hide = function (message) {
        };
        JTItemProtocol.prototype.decrypt = function (message) {
            return message;
        };
        return JTItemProtocol;
    }());
    com.JTItemProtocol = JTItemProtocol;
})(com || (com = {}));

(function (com) {
    var JTProtocol = (function () {
        function JTProtocol() {
            this._protocols = null;
            this._encrypts = null;
            this._protocolMap = null;
            this._protocols = [];
            this._protocolMap = {};
            this.build();
        }
        JTProtocol.prototype.build = function () {
        };
        JTProtocol.prototype.registerProtocol = function (protocol, waiting, security) {
            this._protocolMap[protocol] = com.JTItemProtocol.create(protocol, waiting, security);
            waiting && this.protocols.push(protocol);
        };
        Object.defineProperty(JTProtocol.prototype, "protocols", {
            get: function () {
                return this._protocols;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTProtocol.prototype, "encrypts", {
            get: function () {
                return this._encrypts;
            },
            enumerable: false,
            configurable: true
        });
        JTProtocol.prototype.getProtocol = function (protocol) {
            return this._protocolMap[protocol];
        };
        JTProtocol.prototype.execute = function (message) {
        };
        JTProtocol.NORMAL = 1;
        JTProtocol.ERROR = 0;
        return JTProtocol;
    }());
    com.JTProtocol = JTProtocol;
})(com || (com = {}));

(function (com) {
    var JTPool = (function () {
        function JTPool(cls) {
            this._cls = null;
            this._list = null;
            this._totalCount = 0;
            this._size = 0;
            this._cls = cls;
            this._list = [];
            this._totalCount = 0;
        }
        JTPool.prototype.get = function () {
            if (this._size > 0) {
                this._size--;
                return this._list.shift();
            }
            this._totalCount++;
            return new this._cls();
        };
        JTPool.prototype.put = function (item) {
            if (item && this._list.indexOf(item) == -1) {
                item.recycle();
                this._size = this._list.push(item);
            }
        };
        Object.defineProperty(JTPool.prototype, "totalCount", {
            get: function () {
                return this._totalCount;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTPool.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        JTPool.instance = function (cls) {
            var pool = this._poolMap[cls];
            if (!pool) {
                pool = this._poolMap[cls] = new JTPool(cls);
            }
            return pool;
        };
        JTPool._poolMap = {};
        return JTPool;
    }());
    com.JTPool = JTPool;
})(com || (com = {}));

(function (com) {
    var JTCachePool = (function (_super) {
        __extends(JTCachePool, _super);
        function JTCachePool(cls) {
            var _this = _super.call(this, cls) || this;
            _this._references = null;
            _this._references = [];
            return _this;
        }
        JTCachePool.prototype.get = function () {
            if (this._size > 0) {
                this._size--;
                return this._list.shift();
            }
            this._totalCount++;
            var item = new this._cls();
            this._references.push(item);
            return item;
        };
        JTCachePool.prototype.recycles = function (items) {
            if (!items) {
                items = [].concat(this._references);
            }
            while (items.length) {
                this.put(items.shift());
            }
        };
        JTCachePool.instance = function (cls) {
            var pool = this._cachePoolMap[cls];
            if (!pool) {
                pool = this._cachePoolMap[cls] = new JTCachePool(cls);
            }
            return pool;
        };
        JTCachePool._cachePoolMap = {};
        return JTCachePool;
    }(com.JTPool));
    com.JTCachePool = JTCachePool;
})(com || (com = {}));

(function (com) {
    var JTFixedPool = (function (_super) {
        __extends(JTFixedPool, _super);
        function JTFixedPool(cls, fixedCount) {
            if (fixedCount === void 0) { fixedCount = 100; }
            var _this = _super.call(this, cls) || this;
            _this._fixedCount = 0;
            _this.fixedCount = fixedCount;
            return _this;
        }
        Object.defineProperty(JTFixedPool.prototype, "fixedCount", {
            set: function (value) {
                this._size = this._fixedCount = value;
                this.create();
            },
            enumerable: false,
            configurable: true
        });
        JTFixedPool.prototype.create = function () {
            var list = this._list;
            var count = 0;
            var lines = [];
            while (list.length) {
                var item = list.shift();
                if (this._fixedCount > count) {
                    lines.push(item);
                    count++;
                }
                else
                    item = null;
            }
            if (this._fixedCount > count) {
                var leng = this._fixedCount - count;
                var cls = this._cls;
                list = list.concat(lines);
                for (var i = 0; i < leng; i++) {
                    var item = new cls();
                    list.push(item);
                }
            }
            this._size = list.length;
        };
        JTFixedPool.prototype.get = function () {
            if (this._size > 0) {
                this._size--;
                return this._list.shift();
            }
            this.create();
            return this.get();
        };
        Object.defineProperty(JTFixedPool.prototype, "fullPool", {
            get: function () {
                return this._fixedCount == this._size;
            },
            enumerable: false,
            configurable: true
        });
        JTFixedPool.instance = function (cls, fixedCount) {
            if (fixedCount === void 0) { fixedCount = 100; }
            var pool = this._fixedPoolMap[cls];
            if (!pool) {
                pool = this._fixedPoolMap[cls] = new JTFixedPool(cls, fixedCount);
            }
            return pool;
        };
        JTFixedPool._fixedPoolMap = {};
        return JTFixedPool;
    }(com.JTCachePool));
    com.JTFixedPool = JTFixedPool;
})(com || (com = {}));

(function (com) {
    var JTThread = (function (_super) {
        __extends(JTThread, _super);
        function JTThread() {
            return _super.call(this) || this;
        }
        return JTThread;
    }(com.JTEventDispatcher));
    com.JTThread = JTThread;
})(com || (com = {}));

(function (com) {
    var JTTimeUtils = (function () {
        function JTTimeUtils() {
        }
        Object.defineProperty(JTTimeUtils, "runnbleTime", {
            get: function () {
                return performance.now();
            },
            enumerable: false,
            configurable: true
        });
        JTTimeUtils.runLater = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            setTimeout(resolve, 0);
                        })];
                });
            });
        };
        JTTimeUtils.callLater = function (fun) {
            var enterFrame = com.JTEnterFrame.create();
            enterFrame.addEventListener(com.JTTimeEvent.ENTER_COMPLETE, onEnterComplete, this);
            enterFrame.play(4, 1);
            function onEnterComplete(e) {
                fun && fun();
                fun = null;
                com.JTEnterFrame.put(e);
            }
        };
        return JTTimeUtils;
    }());
    com.JTTimeUtils = JTTimeUtils;
})(com || (com = {}));

(function (com) {
    var JTTimeEvent = (function () {
        function JTTimeEvent() {
        }
        JTTimeEvent.TIMER = "timer";
        JTTimeEvent.TIMER_COMPLETE = "timerComplete";
        JTTimeEvent.ENTER_FRAME = "enterFrame";
        JTTimeEvent.ENTER_COMPLETE = "enterComplete";
        JTTimeEvent.ENTER_LAST_FRAME = "enterLastFrame";
        JTTimeEvent.JUMP_FRAME = "jumpFrame";
        return JTTimeEvent;
    }());
    com.JTTimeEvent = JTTimeEvent;
})(com || (com = {}));

(function (com) {
    var JTTimerTool = (function () {
        function JTTimerTool() {
            this._pause = false;
            this._tasks = null;
            this._currentTime = 0;
            this._tasks = [];
        }
        JTTimerTool.launch = function (rate) {
            if (rate === void 0) { rate = "normal_rate"; }
            this.logicTimer = new JTTimerTool();
            this.defaultTimer = new JTTimerTool();
            this.animationTimer = new JTTimerTool();
            switch (rate) {
                case this.FAST_RATE:
                    {
                        this._frameRate = this.FAST_FRAME_RATE;
                        break;
                    }
                case this.NORMAL_RATE:
                    {
                        this._frameRate = this.NORMAL_FRAME_RATE;
                        break;
                    }
                case this.SLOWY_RATE:
                    {
                        this._frameRate = this.SLOWY_FRAME_RATE;
                        break;
                    }
            }
        };
        Object.defineProperty(JTTimerTool, "frameRate", {
            get: function () {
                return this._frameRate;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTTimerTool, "frameRateTime", {
            get: function () {
                if (this._frameRateTime == 0) {
                    this._frameRateTime = 1000 / this._frameRate;
                }
                return this._frameRateTime;
            },
            enumerable: false,
            configurable: true
        });
        JTTimerTool.prototype.stop = function () {
            this._pause = true;
            this._currentTime = 0;
        };
        JTTimerTool.actives = function () {
            this.defaultTimer.active();
            this.animationTimer.active();
            this.logicTimer.active();
        };
        JTTimerTool.prototype.active = function () {
            if (this._currentTime == 0) {
                this._currentTime = com.JTTimeUtils.runnbleTime;
                return;
            }
            if (this._pause)
                return;
            var nowTime = com.JTTimeUtils.runnbleTime;
            var tick = nowTime - this._currentTime;
            this.updateTicks(tick);
            this.updateTasks();
            this._currentTime = nowTime;
        };
        JTTimerTool.prototype.updateTicks = function (tick) {
            var total = this._tasks.length;
            for (var i = 0; i < total; i++) {
                var task = this._tasks[i];
                task.running && task.updateTick(tick);
            }
        };
        JTTimerTool.prototype.updateTasks = function () {
            for (var i = 0; i < this._tasks.length; i++) {
                var task = this._tasks[i];
                if (!task.running) {
                    this._tasks.splice(i, 1);
                    i--;
                }
            }
        };
        JTTimerTool.prototype.addTask = function (task) {
            var index = this._tasks.indexOf(task);
            if (index != -1)
                return;
            this._tasks.push(task);
        };
        JTTimerTool.prototype.removeTask = function (task) {
            var index = this._tasks.indexOf(task);
            if (index != -1)
                return;
            this._tasks.splice(index, 1);
        };
        JTTimerTool.prototype.put = function (task) {
            var index = this._tasks.indexOf(task);
            if (index != -1)
                return;
            this._tasks.splice(index, 1);
            com.JTPool.instance(task["constructor"]).put(task);
        };
        JTTimerTool.defaultTimer = null;
        JTTimerTool.animationTimer = null;
        JTTimerTool.logicTimer = null;
        JTTimerTool._frameRate = 0;
        JTTimerTool._frameRateTime = 0;
        JTTimerTool.FAST_RATE = "fast_rate";
        JTTimerTool.NORMAL_RATE = "normal_rate";
        JTTimerTool.SLOWY_RATE = "slowy_rate";
        JTTimerTool.FAST_FRAME_RATE = 120;
        JTTimerTool.NORMAL_FRAME_RATE = 60;
        JTTimerTool.SLOWY_FRAME_RATE = 30;
        return JTTimerTool;
    }());
    com.JTTimerTool = JTTimerTool;
})(com || (com = {}));

(function (com) {
    var JTTimerTask = (function (_super) {
        __extends(JTTimerTask, _super);
        function JTTimerTask(interval, loop) {
            if (interval === void 0) { interval = 0; }
            if (loop === void 0) { loop = 0; }
            var _this = _super.call(this) || this;
            _this._currentTick = 0;
            _this._interval = 0;
            _this._totalTimes = 0;
            _this._currentTimes = 0;
            _this._running = false;
            _this._interval = interval;
            _this._totalTimes = loop;
            return _this;
        }
        JTTimerTask.prototype.reset = function () {
            this._currentTimes = 0;
        };
        JTTimerTask.prototype.updateTick = function (tick) {
            this._currentTick += tick;
            var count = Math.floor(this._currentTick / this._interval);
            if (count > 0) {
                var nowCount = this._currentTimes + count;
                if (nowCount >= this._totalTimes && this._totalTimes != 0) {
                    count = this._totalTimes - this._currentTimes;
                }
                for (var i = 0; i < count; i++) {
                    this._currentTimes++;
                    this._currentTick -= this._interval;
                    this.dispatchEvent(com.JTTimeEvent.TIMER, this);
                }
            }
            if (this._currentTimes >= this._totalTimes && this._totalTimes != 0) {
                this._running = false;
                this.dispatchEvent(com.JTTimeEvent.TIMER_COMPLETE, this);
            }
        };
        Object.defineProperty(JTTimerTask.prototype, "running", {
            get: function () {
                return this._running;
            },
            enumerable: false,
            configurable: true
        });
        JTTimerTask.prototype.recycle = function () {
            this.removes();
            this._currentTimes = this._currentTick = this._interval = this._totalTimes = 0;
            this._running = false;
        };
        return JTTimerTask;
    }(com.JTEventDispatcher));
    com.JTTimerTask = JTTimerTask;
})(com || (com = {}));

(function (com) {
    var JTTimer = (function (_super) {
        __extends(JTTimer, _super);
        function JTTimer(interval, loop) {
            if (interval === void 0) { interval = 0; }
            if (loop === void 0) { loop = 0; }
            return _super.call(this, interval, loop) || this;
        }
        JTTimer.prototype.setup = function (interval, loop) {
            if (loop === void 0) { loop = 0; }
            this.reset();
            this._totalTimes = loop;
            this._interval = interval;
        };
        JTTimer.prototype.start = function () {
            this._running = true;
            com.JTTimerTool.defaultTimer.addTask(this);
        };
        JTTimer.prototype.stop = function () {
            this._running = false;
        };
        Object.defineProperty(JTTimer.prototype, "totalCount", {
            get: function () {
                return this._totalTimes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTTimer.prototype, "currentCount", {
            get: function () {
                return this._currentTimes;
            },
            set: function (value) {
                this._currentTimes = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTTimer.prototype, "interval", {
            get: function () {
                return this._interval;
            },
            set: function (value) {
                this._interval = value;
            },
            enumerable: false,
            configurable: true
        });
        JTTimer.create = function (interval, loop) {
            var timer = com.JTPool.instance(JTTimer).get();
            timer.setup(interval, loop);
            return timer;
        };
        JTTimer.put = function (timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTTimer).put(timer);
        };
        return JTTimer;
    }(com.JTTimerTask));
    com.JTTimer = JTTimer;
})(com || (com = {}));

(function (com) {
    var JTEnterFrame = (function (_super) {
        __extends(JTEnterFrame, _super);
        function JTEnterFrame() {
            var _this = _super.call(this, 0, 0) || this;
            _this._frameRate = 0;
            _this._loop = 0;
            _this._loopTimes = 0;
            _this.SECOND_INTERVAL = 1000;
            _this.DEFAULT_FRAME_RATE = 60;
            _this.DEFAULT_FRAME_RATE_TIME = 16;
            return _this;
        }
        Object.defineProperty(JTEnterFrame.prototype, "loop", {
            get: function () {
                return this._loop;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTEnterFrame.prototype, "frameRate", {
            get: function () {
                return this._frameRate;
            },
            enumerable: false,
            configurable: true
        });
        JTEnterFrame.prototype.setup = function (totalFrames, loop, frameRate) {
            if (loop === void 0) { loop = 0; }
            if (frameRate === void 0) { frameRate = 60; }
            this._loopTimes = 0;
            this._loop = loop;
            this._totalTimes = totalFrames;
            this.adjustFrameRate(frameRate);
        };
        JTEnterFrame.prototype.play = function (totalFrames, loop, frameRate) {
            if (loop === void 0) { loop = 0; }
            if (frameRate === void 0) { frameRate = 60; }
            this._running = true;
            this.setup(totalFrames, loop, frameRate);
            com.JTTimerTool.animationTimer.addTask(this);
        };
        JTEnterFrame.prototype.adjustFrameRate = function (value) {
            this._interval = value == this.DEFAULT_FRAME_RATE ? this.DEFAULT_FRAME_RATE_TIME : this.SECOND_INTERVAL / value;
            this._frameRate = value;
        };
        JTEnterFrame.prototype.stop = function () {
            this._running = false;
        };
        JTEnterFrame.prototype.pause = function () {
            this._running = false;
        };
        Object.defineProperty(JTEnterFrame.prototype, "currentLoop", {
            get: function () {
                return this._loopTimes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTEnterFrame.prototype, "currentFrame", {
            get: function () {
                return this._currentTimes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTEnterFrame.prototype, "totalFrame", {
            get: function () {
                return this._totalTimes;
            },
            enumerable: false,
            configurable: true
        });
        JTEnterFrame.prototype.updateTick = function (tick) {
            this._currentTick += tick;
            var count = Math.floor(this._currentTick / this._interval);
            if (count > 0) {
                for (var i = 0; i < count; i++) {
                    this._currentTimes++;
                    this._currentTick -= this._interval;
                    this.dispatchEvent(com.JTTimeEvent.ENTER_FRAME, this);
                    if (this._currentTimes >= this._totalTimes) {
                        this._loopTimes++;
                        if (this._loop == 0)
                            this._currentTimes = 0;
                        else {
                            if (this._loopTimes >= this._loop && this._loop != 0) {
                                this._running = false;
                                this.dispatchEvent(com.JTTimeEvent.ENTER_COMPLETE, this);
                                break;
                            }
                            else {
                                this._currentTimes = 0;
                                this.dispatchEvent(com.JTTimeEvent.ENTER_LAST_FRAME, this);
                            }
                        }
                    }
                }
            }
        };
        JTEnterFrame.create = function () {
            var timer = com.JTPool.instance(JTEnterFrame).get();
            return timer;
        };
        JTEnterFrame.put = function (timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTEnterFrame).put(timer);
        };
        return JTEnterFrame;
    }(com.JTTimerTask));
    com.JTEnterFrame = JTEnterFrame;
})(com || (com = {}));

(function (com) {
    var JTJumpFrame = (function (_super) {
        __extends(JTJumpFrame, _super);
        function JTJumpFrame() {
            var _this = _super.call(this) || this;
            _this._jumpFrames = 0;
            return _this;
        }
        Object.defineProperty(JTJumpFrame.prototype, "jumpFrames", {
            get: function () {
                return this._jumpFrames;
            },
            enumerable: false,
            configurable: true
        });
        JTJumpFrame.prototype.updateTick = function (tick) {
            this._currentTick += tick;
            var times = Math.floor(this._currentTick / this._interval);
            this._jumpFrames = 0;
            if (times > 1) {
                this._jumpFrames = times - 1;
                var nowTimes = this._currentTimes + times;
                var delayLoops = Math.floor(nowTimes / this._totalTimes);
                this._loopTimes += delayLoops;
                if (this._loop == 0) {
                    this._currentTimes = nowTimes % this._totalTimes;
                }
                else {
                    if (this._loopTimes >= this._loop) {
                        this._loopTimes = this._loop;
                        this._currentTimes = this._totalTimes;
                    }
                    else
                        this._currentTimes = nowTimes % this._totalTimes;
                }
                this.dispatchEvent(com.JTTimeEvent.JUMP_FRAME, this);
                this.dispatchEvent(com.JTTimeEvent.ENTER_FRAME, this);
                delayLoops >= 1 && this.dispatchEvent(com.JTTimeEvent.ENTER_LAST_FRAME, this);
                if (this._loopTimes >= this._loop && this._loop != 0) {
                    this._currentTick = 0;
                    this._running = false;
                    this.dispatchEvent(com.JTTimeEvent.ENTER_COMPLETE, this);
                }
                else {
                    this._currentTick = this._currentTick % this._interval;
                }
            }
            else if (times == 1) {
                _super.prototype.updateTick.call(this, tick);
            }
        };
        JTJumpFrame.create = function () {
            var timer = com.JTPool.instance(JTJumpFrame).get();
            return timer;
        };
        JTJumpFrame.put = function (timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTJumpFrame).put(timer);
        };
        return JTJumpFrame;
    }(com.JTEnterFrame));
    com.JTJumpFrame = JTJumpFrame;
})(com || (com = {}));

(function (com) {
    var JTOptimizeFrame = (function (_super) {
        __extends(JTOptimizeFrame, _super);
        function JTOptimizeFrame() {
            return _super.call(this) || this;
        }
        JTOptimizeFrame.prototype.setup = function (totalFrames, loop, frameRate) {
            if (loop === void 0) { loop = 0; }
            if (frameRate === void 0) { frameRate = 60; }
            _super.prototype.setup.call(this, totalFrames, loop);
        };
        JTOptimizeFrame.prototype.play = function (totalFrames, loop, frameRate) {
            if (loop === void 0) { loop = 0; }
            if (frameRate === void 0) { frameRate = 60; }
            _super.prototype.play.call(this, totalFrames, loop);
        };
        JTOptimizeFrame.prototype.updateTick = function (tick) {
            this._currentTick += tick;
            this.adjustFrameRate(this._currentTick);
            _super.prototype.updateTick.call(this, tick);
        };
        JTOptimizeFrame.prototype.adjustFrameRate = function (value) {
            var delayFrames = Math.floor(this._currentTick / this.DEFAULT_FRAME_RATE_TIME);
            var val = this.sqr(delayFrames, 2);
            this._frameRate = this.DEFAULT_FRAME_RATE - (val * 10);
            this._frameRate = this._frameRate < 1 ? 1 : this._frameRate;
            _super.prototype.adjustFrameRate.call(this, this._frameRate);
        };
        JTOptimizeFrame.prototype.sqr = function (num, value) {
            num = (num / value);
            var count = 1;
            while (num > 0) {
                count++;
                if (num >= 1) {
                    num = num / value;
                }
                else
                    break;
            }
            return count;
        };
        return JTOptimizeFrame;
    }(com.JTJumpFrame));
    com.JTOptimizeFrame = JTOptimizeFrame;
})(com || (com = {}));

(function (com) {
    var JTScheduleFrame = (function (_super) {
        __extends(JTScheduleFrame, _super);
        function JTScheduleFrame() {
            var _this = _super.call(this) || this;
            _this._frames = null;
            _this._createFrames = null;
            return _this;
        }
        Object.defineProperty(JTScheduleFrame.prototype, "currentItem", {
            get: function () {
                return this._frames[this._currentTimes - 1 < 0 ? 0 : this._currentTimes - 1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTScheduleFrame.prototype, "frames", {
            get: function () {
                return this._frames;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTScheduleFrame.prototype, "createFrames", {
            set: function (value) {
                this._createFrames = value;
            },
            enumerable: false,
            configurable: true
        });
        JTScheduleFrame.prototype.play = function (totalFrames, loop, frameRate) {
            if (loop === void 0) { loop = 0; }
            if (frameRate === void 0) { frameRate = 60; }
            this._running = true;
            this.setup(totalFrames, loop, frameRate);
            this._frames = this._createFrames.runWith(totalFrames);
            com.JTTimerTool.animationTimer.addTask(this);
        };
        JTScheduleFrame.prototype.recycle = function () {
            _super.prototype.recycle.call(this);
            this._frames = null;
        };
        JTScheduleFrame.create = function () {
            var frame = com.JTPool.instance(JTScheduleFrame).get();
            return frame;
        };
        JTScheduleFrame.put = function (timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTScheduleFrame).put(timer);
        };
        return JTScheduleFrame;
    }(com.JTEnterFrame));
    com.JTScheduleFrame = JTScheduleFrame;
})(com || (com = {}));

(function (com) {
    var JTLoopTimer = (function (_super) {
        __extends(JTLoopTimer, _super);
        function JTLoopTimer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return JTLoopTimer;
    }(com.JTTimer));
    com.JTLoopTimer = JTLoopTimer;
})(com || (com = {}));

(function (com) {
    var JTOptimizeTimer = (function (_super) {
        __extends(JTOptimizeTimer, _super);
        function JTOptimizeTimer(interval, loop) {
            if (interval === void 0) { interval = 0; }
            if (loop === void 0) { loop = 0; }
            return _super.call(this, interval, loop) || this;
        }
        return JTOptimizeTimer;
    }(com.JTTimer));
    com.JTOptimizeTimer = JTOptimizeTimer;
})(com || (com = {}));

(function (com) {
    var JTScheduleTimer = (function (_super) {
        __extends(JTScheduleTimer, _super);
        function JTScheduleTimer(interval, dataList) {
            if (interval === void 0) { interval = 0; }
            var _this = _super.call(this, interval, dataList.length) || this;
            _this._dataList = null;
            _this._dataList = dataList;
            return _this;
        }
        JTScheduleTimer.prototype.setup = function (interval) {
            this.reset();
            this._totalTimes = this._dataList.length;
            this._interval = interval;
        };
        Object.defineProperty(JTScheduleTimer.prototype, "currentItem", {
            get: function () {
                return this._dataList[this.currentCount - 1];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(JTScheduleTimer.prototype, "dataList", {
            get: function () {
                return this._dataList;
            },
            enumerable: false,
            configurable: true
        });
        JTScheduleTimer.prototype.recycle = function () {
            _super.prototype.recycle.call(this);
            this._dataList = null;
        };
        JTScheduleTimer.create = function (interval, loop) {
            var timer = com.JTPool.instance(JTScheduleTimer).get();
            timer.setup(interval, loop);
            return timer;
        };
        JTScheduleTimer.put = function (timer) {
            com.JTTimerTool.defaultTimer.removeTask(timer);
            com.JTPool.instance(JTScheduleTimer).put(timer);
        };
        return JTScheduleTimer;
    }(com.JTTimer));
    com.JTScheduleTimer = JTScheduleTimer;
})(com || (com = {}));
