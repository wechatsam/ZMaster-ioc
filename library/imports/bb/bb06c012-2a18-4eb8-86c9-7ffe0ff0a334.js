"use strict";
cc._RF.push(module, 'bb06cASKhhOuIbJf/4P8KM0', 'JTPopupManager');
// Script/src/managers/popups/JTPopupManager.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
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
                    this.__backgroundMask.setSize(JTSession.stageWidth, JTSession.stageHeight);
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
                        var layerManager = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_LAYER);
                        this.__layer = layerManager.getLayer(JTAbstractLayerManager.LAYER_POPUP);
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
                        this._pool = JTPool.instance(JTChildPopUp);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTPopupManager, "locker", {
                get: function () {
                    if (!this.__locker) {
                        this.__locker = new JTLocker();
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
});

cc._RF.pop();