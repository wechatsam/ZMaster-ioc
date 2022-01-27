"use strict";
cc._RF.push(module, '9bd28mNTx9JcJjolI92Nxq2', 'JTUIComponent');
// Script/src/base/JTUIComponent.ts

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
                _this._signaler = JTEventSignaler.create();
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
                    info("asset already loaded");
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
                JTResizeEvent.registerResize(this);
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
                this._signaler && JTEventSignaler.put(this._signaler);
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
                this._signaler.dispatchEvent(key, args);
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
});

cc._RF.pop();