"use strict";
cc._RF.push(module, '11e076QAIpAIaHNo5OHNS2U', 'JTComponent');
// Script/src/base/JTComponent.ts

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
                    info("asset already loaded");
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
                    JTResizeEvent.registerResize(this);
                    JTPopupManager.center(this._____ui);
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
        }(JTEventSignaler));
        com.JTComponent = JTComponent;
    })(com || (com = {}));
});

cc._RF.pop();