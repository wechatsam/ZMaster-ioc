"use strict";
cc._RF.push(module, 'dcee4vTWdtOdqPP6OhsssSK', 'JTLayoutManager');
// Script/src/layout/JTLayoutManager.ts

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
                layout = new JTLayout(__className, property, __layout);
                __layoutMap[property] = layout;
            };
            JTLayoutManager.update = function (view) {
                var className = view.className;
                var __layoutMap = this.___classLayoutMap[className];
                if (!__layoutMap) {
                    JTLayoutManager.layoutUpdate(view.componentUI, JTLayout.LAYOUT_VERTICAL);
                    return;
                }
                for (var key in __layoutMap) {
                    var layout = __layoutMap[key];
                    if (key == "layout") {
                        if (view instanceof JTUIComponent)
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
                    case JTLayout.LAYOUT_VERTICAL:
                        {
                            JTLayoutManager.layoutVertical(child);
                            break;
                        }
                    case JTLayout.LAYOUT_HORIZONTAL:
                        {
                            JTLayoutManager.layoutHorzontal(child);
                            break;
                        }
                    case JTLayout.LAYOUT_AUTO_SWITCH:
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
                this._stage = JTSession.stage;
                this.registerWindowResize();
            };
            JTLayoutManager.prototype.registerWindowResize = function () {
                window.addEventListener("resize", this.onResize.bind(this));
            };
            JTLayoutManager.prototype.onResize = function (e) {
                this.update();
                dispatchEvent(JTResizeEvent.RESIZE);
            };
            JTLayoutManager.prototype.update = function () {
                JTSession.stageWidth = this._stage.width;
                JTSession.stageHeight = this._stage.height;
            };
            JTLayoutManager.prototype.buildComplete = function () {
            };
            JTLayoutManager.___classLayoutMap = {};
            JTLayoutManager.currentLayout = null;
            return JTLayoutManager;
        }(JTApplicationContext));
        com.JTLayoutManager = JTLayoutManager;
    })(com || (com = {}));
});

cc._RF.pop();