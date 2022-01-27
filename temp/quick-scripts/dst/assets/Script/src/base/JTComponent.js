
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/base/JTComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGJhc2VcXEpUQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLElBQVUsR0FBRyxDQThJWjtJQTlJRCxXQUFVLEdBQUc7UUFFVDtZQUFxRSwrQkFBZTtZQVdoRjtnQkFBQSxZQUVJLGlCQUFPLFNBQ1Y7Z0JBWlMsYUFBTyxHQUFLLElBQUksQ0FBQztnQkFDakIsaUJBQVcsR0FBTyxJQUFJLENBQUM7Z0JBQ3ZCLFVBQUksR0FBVSxJQUFJLENBQUM7Z0JBQ25CLGtCQUFZLEdBQVUsSUFBSSxDQUFDO2dCQUMzQixlQUFTLEdBQUssSUFBSSxDQUFDO2dCQUNuQixtQkFBYSxHQUFVLElBQUksQ0FBQztnQkFDNUIsc0JBQWdCLEdBQVcsS0FBSyxDQUFDO2dCQUNqQyxjQUFRLEdBQVcsS0FBSyxDQUFDO2dCQUN6QixpQkFBVyxHQUFrQixJQUFJLENBQUM7O1lBSTVDLENBQUM7WUFFUywrQkFBUyxHQUFuQixVQUFvQixHQUFVLEVBQUUsRUFBUyxFQUFFLFFBQWEsRUFBRSxlQUE4QjtnQkFBOUIsZ0NBQUEsRUFBQSxzQkFBOEI7Z0JBRXBGLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksRUFDbkM7b0JBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQzdCLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0JB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RyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUM3RSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQztZQUVMLGtCQUFDO1FBQUQsQ0EzSUEsQUEySUMsQ0EzSW9FLGVBQWUsR0EySW5GO1FBM0lxQixlQUFXLGNBMkloQyxDQUFBO0lBQ0wsQ0FBQyxFQTlJUyxHQUFHLEtBQUgsR0FBRyxRQThJWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL2V2ZW50cy9KVEV2ZW50U2lnbmFsZXIudHNcIi8+XHJcbm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKVENvbXBvbmVudDxUIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50PiBleHRlbmRzIEpURXZlbnRTaWduYWxlciBpbXBsZW1lbnRzIEpUSUNvbXBvbmVudFxyXG4gICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBfX19fX3VpOlQgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfX19ydW5DbGFzczphbnkgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfdXJsOnN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9wYWNha2dlTmFtZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfX2NsYXNzVUk6VCA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9fY29tcG9uZW50SWQ6c3RyaW5nID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX3JlZ2lzdGVyZWRDbGljazpib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9fbG9hZGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBwcm90ZWN0ZWQgX191aVBhY2thZ2U6Zmd1aS5VSVBhY2thZ2UgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbG9hZEFzc2V0KHVybDpzdHJpbmcsIGlkOnN0cmluZywgcnVuQ2xhc3M/OmFueSwgcmVnaXN0ZXJlZENsaWNrOmJvb2xlYW4gPSB0cnVlKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXJsID09IHVybCAmJiB1cmwgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW5mbyhcImFzc2V0IGFscmVhZHkgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX19sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICAgICAgICB0aGlzLl9fY29tcG9uZW50SWQgPSBpZDtcclxuICAgICAgICAgICAgdGhpcy5fcGFjYWtnZU5hbWUgPSB0aGlzLl91cmwuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9fX3J1bkNsYXNzID0gcnVuQ2xhc3M7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdGVyZWRDbGljayA9IHJlZ2lzdGVyZWRDbGljaztcclxuICAgICAgICAgICAgdGhpcy5fX3VpUGFja2FnZSA9IGZndWkuVUlQYWNrYWdlLmdldEJ5TmFtZSh1cmwpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX191aVBhY2thZ2UpICAgdGhpcy5sb2FkKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXNzZXRDb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgbG9hZCgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZndWkuVUlQYWNrYWdlLmxvYWRQYWNrYWdlKHRoaXMuX3VybCwgdGhpcy5sb2FkQXNzZXRDb21wbGV0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBsb2FkQXNzZXRDb21wbGV0ZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fX2xvYWRlZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX19ydW5DbGFzcyAmJiB0aGlzLl9fX3J1bkNsYXNzLmJpbmRBbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX191aVBhY2thZ2UgPSBmZ3VpLlVJUGFja2FnZS5hZGRQYWNrYWdlKHRoaXMuX3VybCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fX19fdWkgPSB0aGlzLmdldE9iamVjdCh0aGlzLl9fY29tcG9uZW50SWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX19fX3VpLm9uKGZndWkuRXZlbnQuVU5ESVNQTEFZLCB0aGlzLm9uUmVtb3ZlRnJvbVN0YWdlLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgSlRSZXNpemVFdmVudC5yZWdpc3RlclJlc2l6ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIEpUUG9wdXBNYW5hZ2VyLmNlbnRlcih0aGlzLl9fX19fdWkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JlZ2lzdGVyZWRDbGljaykgIHRoaXMuX19fX191aS5vbkNsaWNrKHRoaXMucmVnaXN0ZXJNb3VzZUNsaWNrLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvY2tlci5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX19sb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYmluZFVJUmVsYXRpb24ocGFyZW50OmZndWkuR0NvbXBvbmVudCwgdHlwZTpudW1iZXIpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRSZWxhdGlvbih0aGlzLl9fX19fdWksIHBhcmVudCwgdHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYmluZFJlbGF0aW9uKGNoaWxkOmZndWkuR0NvbXBvbmVudCwgcGFyZW50OmZndWkuR0NvbXBvbmVudCwgdHlwZTpudW1iZXIpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zZXRTaXplKHBhcmVudC53aWR0aCwgcGFyZW50LmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5hZGRSZWxhdGlvbihwYXJlbnQsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgZ2V0T2JqZWN0KGlkOnN0cmluZyk6VFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IF9fX19fdWk6VCA9IHRoaXMuX191aVBhY2thZ2UuY3JlYXRlT2JqZWN0KGlkKSBhcyBUO1xyXG4gICAgICAgICAgICBfX19fX3VpLnNldFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gX19fX191aTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBub3RpZnlDb21wbGV0ZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZWdpc3Rlck1vdXNlQ2xpY2soZSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldDogZmd1aS5HQ29tcG9uZW50ID0gZS50YXJnZXRbXCIkZ29ialwiXTsgLy9jb2NvcyDmmK8kZ29iaiBMYXlh5pivJG93bmVyXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXROYW1lOiBzdHJpbmcgPSB0YXJnZXQubmFtZTtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXROYW1lKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZUNsaWNrSGFuZGxlcih0YXJnZXQsIHRhcmdldE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBvbk1vdXNlQ2xpY2tIYW5kbGVyKHRhcmdldDpmYWlyeWd1aS5HQ29tcG9uZW50LCB0YXJnZXROYW1lOnN0cmluZyk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBjbGFzc05hbWUoKTpzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yW1wibmFtZVwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvblJlc2l6ZUhhbmRsZXIoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBpZiAoIXRoaXMuX19fX191aSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBKVExheW91dE1hbmFnZXIudXBkYXRlKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBjb21wb25lbnRVSSgpOlRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fX19fdWk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGNsYXNzVUkoKTpUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2NsYXNzVUk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHJ1bkNsYXNzKCk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX19ydW5DbGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgbG9ja2VyKCk6SlRMb2NrZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB1aVBhY2thZ2UoKTogZmFpcnlndWkuVUlQYWNrYWdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3VpUGFja2FnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblJlbW92ZUZyb21TdGFnZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX19fX191aSAmJiB0aGlzLl9fX19fdWkub2ZmKGZndWkuRXZlbnQuVU5ESVNQTEFZLCB0aGlzLm9uUmVtb3ZlRnJvbVN0YWdlLCB0aGlzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlZ2lzdGVyZWRDbGljaykgdGhpcy5fX19fX3VpICYmIHRoaXMuX19fX191aS5vZmZDbGljayh0aGlzLm9uTW91c2VDbGlja0hhbmRsZXIsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9wYWNha2dlTmFtZSA9IHRoaXMuX19fcnVuQ2xhc3MgPSB0aGlzLl91cmwgPSBcclxuICAgICAgICAgICAgdGhpcy5fX2NsYXNzVUkgPSB0aGlzLl9fY29tcG9uZW50SWQgPSB0aGlzLl9fdWlQYWNrYWdlID0gdGhpcy5fX19fX3VpID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZWN5Y2xlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iXX0=