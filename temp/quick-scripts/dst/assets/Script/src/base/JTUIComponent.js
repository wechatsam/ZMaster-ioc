
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/base/JTUIComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGJhc2VcXEpUVUlDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0EsSUFBVSxHQUFHLENBaU1aO0lBak1ELFdBQVUsR0FBRztRQUVWO1lBQThELGlDQUFlO1lBV3hFO2dCQUFBLFlBRVEsaUJBQU8sU0FFZDtnQkFiUyxrQkFBWSxHQUFVLElBQUksQ0FBQztnQkFDM0IsWUFBTSxHQUFLLElBQUksQ0FBQztnQkFDaEIsVUFBSSxHQUFVLElBQUksQ0FBQztnQkFDbkIsZ0JBQVUsR0FBTyxJQUFJLENBQUM7Z0JBQ3RCLGNBQVEsR0FBVyxLQUFLLENBQUM7Z0JBQ3pCLGVBQVMsR0FBbUIsSUFBSSxDQUFDO2dCQUNqQyxpQkFBVyxHQUFrQixJQUFJLENBQUM7Z0JBQ2xDLHNCQUFnQixHQUFXLEtBQUssQ0FBQztnQkFDakMsY0FBUSxHQUFZLElBQUksQ0FBQztnQkFJM0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7O1lBQ2xELENBQUM7WUFFRCxzQkFBVyxvQ0FBUztxQkFBcEI7b0JBRVEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO2dCQUMvQixDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLG1DQUFRO3FCQUFuQjtvQkFFUSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQy9CLENBQUM7OztlQUFBO1lBVVMsaUNBQVMsR0FBbkIsVUFBb0IsR0FBVSxFQUFFLElBQVcsRUFBRSxlQUE4QixFQUFFLFFBQWE7Z0JBQTdDLGdDQUFBLEVBQUEsc0JBQThCO2dCQUVuRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQ25DO29CQUNJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUM3QixPQUFPO2lCQUNWO2dCQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFD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LEVBQUUsTUFBZSxFQUFFLE1BQVU7Z0JBRWxELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDM0QsQ0FBQztZQUVNLHVDQUFlLEdBQXRCO2dCQUVRLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekMsQ0FBQztZQUVMLG9CQUFDO1FBQUQsQ0E3TEQsQUE2TEUsQ0E3TDRELElBQUksQ0FBQyxVQUFVLEdBNkwzRTtRQTdMVyxpQkFBYSxnQkE2THhCLENBQUE7SUFFTCxDQUFDLEVBak1TLEdBQUcsS0FBSCxHQUFHLFFBaU1aIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG5uYW1lc3BhY2UgY29tXHJcbntcclxuICAgZXhwb3J0IGNsYXNzIEpUVUlDb21wb25lbnQ8VCBleHRlbmRzIGZndWkuR0NvbXBvbmVudD4gZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQgaW1wbGVtZW50cyBKVElDb21wb25lbnRcclxuICAge1xyXG4gICAgICAgIHByb3RlY3RlZCBfY29tcG9uZW50SWQ6c3RyaW5nID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX19fX3VpOlQgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfdXJsOnN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgcHJvdGVjdGVkIF9fcnVuQ2xhc3M6YW55ID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX19sb2FkZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIHByb3RlY3RlZCBfc2lnbmFsZXI6SlRFdmVudFNpZ25hbGVyID0gbnVsbDtcclxuICAgICAgICBwcm90ZWN0ZWQgX191aVBhY2thZ2U6Zmd1aS5VSVBhY2thZ2UgPSBudWxsO1xyXG4gICAgICAgIHByb3RlY3RlZCBfcmVnaXN0ZXJlZENsaWNrOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBwcm90ZWN0ZWQgX19fb3duZXI6SlRJU2NlbmUgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZ25hbGVyID0gSlRFdmVudFNpZ25hbGVyLmNyZWF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCB1aVBhY2thZ2UoKTpmZ3VpLlVJUGFja2FnZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fdWlQYWNrYWdlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHJ1bkNsYXNzKCk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19ydW5DbGFzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWcuuaZr+S4reeahOS4gOS6m+Wwj+eVjOmdolxyXG4gICAgICAgICAqIEBwYXJhbSB1cmwgXHJcbiAgICAgICAgICogQHBhcmFtIF9faWQgXHJcbiAgICAgICAgICogQHBhcmFtIHJlZ2lzdGVyZWRDbGljayBcclxuICAgICAgICAgKiBAcGFyYW0gcnVuQ2xhc3MgXHJcbiAgICAgICAgICogQHJldHVybnMgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJvdGVjdGVkIGxvYWRBc3NldCh1cmw6c3RyaW5nLCBfX2lkOnN0cmluZywgcmVnaXN0ZXJlZENsaWNrOmJvb2xlYW4gPSB0cnVlLCBydW5DbGFzcz86YW55KTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3VybCA9PSB1cmwgJiYgdXJsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mbyhcImFzc2V0IGFscmVhZHkgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX19sb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbXBvbmVudElkID0gX19pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19ydW5DbGFzcyA9IHJ1bkNsYXNzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZENsaWNrID0gcmVnaXN0ZXJlZENsaWNrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX3VpUGFja2FnZSA9IGZndWkuVUlQYWNrYWdlLmdldEJ5TmFtZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9fdWlQYWNrYWdlKSAgIHRoaXMubG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0Q29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgbG9hZCgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmZ3VpLlVJUGFja2FnZS5sb2FkUGFja2FnZSh0aGlzLl91cmwsIHRoaXMubG9hZEFzc2V0Q29tcGxldGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0dXAob3duZXI6SlRJU2NlbmUsIF9faWQ6c3RyaW5nLCByZWdpc3RlcmVkQ2xpY2s6Ym9vbGVhbiA9IHRydWUsIHJ1bkNsYXNzPzphbnkpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wb25lbnRJZCA9IF9faWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fcnVuQ2xhc3MgPSBydW5DbGFzcztcclxuICAgICAgICAgICAgICAgIHRoaXMuX19fb3duZXIgPSBvd25lcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX191aVBhY2thZ2UgPSB0aGlzLl9fX293bmVyLnVpUGFja2FnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZENsaWNrID0gcmVnaXN0ZXJlZENsaWNrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX3J1bkNsYXNzICYmIHRoaXMuX19ydW5DbGFzcy5iaW5kQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkaW5nVUkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBidWlsZGluZ1VJKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19fX3VpID0gdGhpcy5fX3VpUGFja2FnZS5jcmVhdGVPYmplY3QodGhpcy5fY29tcG9uZW50SWQpIGFzIFQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKGZndWkuRXZlbnQuVU5ESVNQTEFZLCB0aGlzLm9uUmVtb3ZlRnJvbWVTdGFnZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVnaXN0ZXJlZENsaWNrKSAgdGhpcy5fX19fdWkub25DbGljayh0aGlzLnJlZ2lzdGVyTW91c2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRVSVJlbGF0aW9uKHRoaXMsIGZndWkuUmVsYXRpb25UeXBlLkhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuX19fX3VpKTtcclxuICAgICAgICAgICAgICAgIEpUUmVzaXplRXZlbnQucmVnaXN0ZXJSZXNpemUodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYmluZFVJUmVsYXRpb24ocGFyZW50OmZndWkuR0NvbXBvbmVudCwgdHlwZTpudW1iZXIpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRSZWxhdGlvbih0aGlzLl9fX191aSwgcGFyZW50LCB0eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBiaW5kUmVsYXRpb24oY2hpbGQ6Zmd1aS5HQ29tcG9uZW50LCBwYXJlbnQ6Zmd1aS5HQ29tcG9uZW50LCB0eXBlOm51bWJlcik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnNldFNpemUocGFyZW50LndpZHRoLCBwYXJlbnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmFkZFJlbGF0aW9uKHBhcmVudCwgdHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgbG9hZEFzc2V0Q29tcGxldGUoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICB0aGlzLl9fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgdGhpcy5fX3J1bkNsYXNzICYmIHRoaXMuX19ydW5DbGFzcy5iaW5kQWxsKCk7IFxyXG4gICAgICAgICAgICAgICB0aGlzLl9fdWlQYWNrYWdlID0gZmd1aS5VSVBhY2thZ2UuYWRkUGFja2FnZSh0aGlzLl91cmwpO1xyXG4gICAgICAgICAgICAgICB0aGlzLmJ1aWxkaW5nVUkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBub3RpZnlDb21wbGV0ZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCByZWdpc3Rlck1vdXNlQ2xpY2soZSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldDogZmd1aS5HQ29tcG9uZW50ID0gZS50YXJnZXRbXCIkZ29ialwiXTsgLy9jb2NvcyDmmK8kZ29iaiBMYXlh5pivJG93bmVyXHJcbiAgICAgICAgICAgIHZhciB0YXJnZXROYW1lOiBzdHJpbmcgPSB0YXJnZXQubmFtZTtcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXROYW1lKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZUNsaWNrSGFuZGxlcih0YXJnZXQsIHRhcmdldE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHByb3RlY3RlZCBvbk1vdXNlQ2xpY2tIYW5kbGVyKHRhcmdldDpmYWlyeWd1aS5HQ29tcG9uZW50LCB0YXJnZXROYW1lOnN0cmluZyk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG9uUmVzaXplSGFuZGxlcigpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgIGlmICghdGhpcy5fX19fdWkpIHJldHVybjtcclxuICAgICAgICAvLyAgICAgSlRMYXlvdXRNYW5hZ2VyLnVwZGF0ZSh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblJlbW92ZUZyb21lU3RhZ2UoZSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2ZmKGZndWkuRXZlbnQuVU5ESVNQTEFZLCB0aGlzLm9uUmVtb3ZlRnJvbWVTdGFnZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWduYWxlciAmJiBKVEV2ZW50U2lnbmFsZXIucHV0KHRoaXMuX3NpZ25hbGVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19fb3duZXIgPSB0aGlzLl9zaWduYWxlciA9IHRoaXMuX19ydW5DbGFzcyA9IHRoaXMuX19fX3VpID0gdGhpcy5fX3VpUGFja2FnZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGNvbXBvbmVudFVJKCk6VFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fX191aVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjeWNsZSgpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZ25hbGVyLnJlY3ljbGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgY2xhc3NOYW1lKCk6c3RyaW5nXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcltcIm5hbWVcIl07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoa2V5OmFueSwgbWV0aG9kOkZ1bmN0aW9uLCBjYWxsZXI6YW55LCBvbmNlPzpib29sZWFuKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2lnbmFsZXIuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG1ldGhvZCwgY2FsbGVyLCBvbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBkaXNwYXRjaEV2ZW50KGtleTphbnksIGFyZ3M/OmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZ25hbGVyLmRpc3BhdGNoRXZlbnQoa2V5LCBhcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGtleTphbnksIG1ldGhvZDpGdW5jdGlvbiwgY2FsbGVyOmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZ25hbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCBtZXRob2QsIGNhbGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVtb3ZlRXZlbnRzKCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2lnbmFsZXIucmVtb3ZlRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVnaXN0ZXJGdW5jdGlvbihrZXk6YW55LCBtZXRob2Q6RnVuY3Rpb24sIGNhbGxlcjphbnksIG9uY2U/OmJvb2xlYW4pOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaWduYWxlci5yZWdpc3RlckZ1bmN0aW9uKGtleSwgbWV0aG9kLCBjYWxsZXIsIG9uY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGV4ZWN1dGUoa2V5OmFueSwgYXJncz86YW55KTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2lnbmFsZXIuZXhlY3V0ZShrZXksIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlbW92ZUZ1bmN0aW9uKGtleTphbnksIG1ldGhvZDpGdW5jdGlvbiwgY2FsbGVyOmFueSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZ25hbGVyLnJlbW92ZUZ1bmN0aW9uKGtleSwgbWV0aG9kLCBjYWxsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlbW92ZUZ1bmN0aW9ucygpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NpZ25hbGVyLnJlbW92ZUZ1bmN0aW9ucygpOyBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgICAgIFxyXG59XHJcbiJdfQ==