
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/layout/JTLayoutManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGxheW91dFxcSlRMYXlvdXRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQTZJWjtJQTdJRCxXQUFVLEdBQUc7UUFFVDtZQUFxQyxtQ0FBb0I7WUFPckQ7Z0JBQUEsWUFFSSxpQkFBTyxTQUNWO2dCQU5PLFlBQU0sR0FBYyxJQUFJLENBQUM7O1lBTWpDLENBQUM7WUFFYSx5QkFBUyxHQUF2QixVQUF3QixXQUFrQixFQUFFLFFBQWUsRUFBRSxRQUFlO2dCQUV4RSxJQUFJLFdBQVcsR0FBNEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsV0FBVyxFQUNoQjtvQkFDUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQztpQkFDOUQ7Z0JBQ0QsSUFBSSxNQUFNLEdBQVksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLE1BQU07b0JBQUUsT0FBTztnQkFDbkIsTUFBTSxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZELFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7WUFDbkMsQ0FBQztZQUVhLHNCQUFNLEdBQXBCLFVBQXFCLElBQWlCO2dCQUVsQyxJQUFJLFNBQVMsR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUN0QyxJQUFJLFdBQVcsR0FBNEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsV0FBVyxFQUNoQjtvQkFDSSxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUN6RSxPQUFPO2lCQUNWO2dC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RyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUNoQyxDQUFDO1lBRVMsOENBQW9CLEdBQTlCO2dCQUVJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDO1lBRVMsa0NBQVEsR0FBbEIsVUFBbUIsQ0FBQztnQkFFaEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUVTLGdDQUFNLEdBQWhCO2dCQUVJLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ3pDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDL0MsQ0FBQztZQUVNLHVDQUFhLEdBQXBCO1lBR0EsQ0FBQztZQXJJYSxpQ0FBaUIsR0FBbUQsRUFBRSxDQUFBO1lBRXRFLDZCQUFhLEdBQVUsSUFBSSxDQUFDO1lBcUk5QyxzQkFBQztTQTFJRCxBQTBJQyxDQTFJb0Msb0JBQW9CLEdBMEl4RDtRQTFJWSxtQkFBZSxrQkEwSTNCLENBQUE7SUFDTCxDQUFDLEVBN0lTLEdBQUcsS0FBSCxHQUFHLFFBNklaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUTGF5b3V0TWFuYWdlciBleHRlbmRzIEpUQXBwbGljYXRpb25Db250ZXh0XHJcbiAgICB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgX19fY2xhc3NMYXlvdXRNYXA6e1tjbGFzc05hbWU6c3RyaW5nXSA6IHtbbmFtZTpzdHJpbmddOkpUTGF5b3V0fX0gPSB7fVxyXG4gICAgICAgIHByaXZhdGUgX3N0YWdlOmZndWkuR1Jvb3QgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY3VycmVudExheW91dDpzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhZGRMYXlvdXQoX19jbGFzc05hbWU6c3RyaW5nLCBwcm9wZXJ0eTpzdHJpbmcsIF9fbGF5b3V0OnN0cmluZyk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IF9fbGF5b3V0TWFwOntbbmFtZTpzdHJpbmddOkpUTGF5b3V0fSA9IHRoaXMuX19fY2xhc3NMYXlvdXRNYXBbX19jbGFzc05hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIV9fbGF5b3V0TWFwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX19jbGFzc0xheW91dE1hcFtfX2NsYXNzTmFtZV0gPSBfX2xheW91dE1hcCA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsYXlvdXQ6SlRMYXlvdXQgPSBfX2xheW91dE1hcFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIGlmIChsYXlvdXQpIHJldHVybjtcclxuICAgICAgICAgICAgbGF5b3V0ID0gbmV3IEpUTGF5b3V0KF9fY2xhc3NOYW1lLCBwcm9wZXJ0eSwgX19sYXlvdXQpO1xyXG4gICAgICAgICAgICBfX2xheW91dE1hcFtwcm9wZXJ0eV0gPSBsYXlvdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZSh2aWV3OkpUSUNvbXBvbmVudCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZTpzdHJpbmcgPSB2aWV3LmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgbGV0IF9fbGF5b3V0TWFwOntbbmFtZTpzdHJpbmddOkpUTGF5b3V0fSA9IHRoaXMuX19fY2xhc3NMYXlvdXRNYXBbY2xhc3NOYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFfX2xheW91dE1hcCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIEpUTGF5b3V0TWFuYWdlci5sYXlvdXRVcGRhdGUodmlldy5jb21wb25lbnRVSSwgSlRMYXlvdXQuTEFZT1VUX1ZFUlRJQ0FMKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX19sYXlvdXRNYXApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXlvdXQ6SlRMYXlvdXQgPSBfX2xheW91dE1hcFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBcImxheW91dFwiKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmlldyBpbnN0YW5jZW9mIEpUVUlDb21wb25lbnQpICAgbGF5b3V0LnVwZGF0ZSh2aWV3KTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0LnVwZGF0ZSh2aWV3LmNvbXBvbmVudFVJKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQudXBkYXRlKHZpZXcuY29tcG9uZW50VUlbbGF5b3V0Ll9fcHJvcGVydHldKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldExheW91dChfX19jbGFzc05hbWU6c3RyaW5nLCBwcm9wZXJ0eT86c3RyaW5nKTpKVExheW91dFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IF9fbGF5b3V0TWFwOntbbmFtZTpzdHJpbmddOkpUTGF5b3V0fSA9IHRoaXMuX19fY2xhc3NMYXlvdXRNYXBbX19fY2xhc3NOYW1lXTtcclxuICAgICAgICAgICAgaWYgKF9fbGF5b3V0TWFwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BlcnR5KSBwcm9wZXJ0eSA9IFwibGF5b3V0XCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19sYXlvdXRNYXBbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBsYXlvdXRVcGRhdGUoY2hpbGQ6Zmd1aS5HQ29tcG9uZW50LCBsYXlvdXQ6c3RyaW5nKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgc3dpdGNoKGxheW91dClcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSlRMYXlvdXQuTEFZT1VUX1ZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEpUTGF5b3V0TWFuYWdlci5sYXlvdXRWZXJ0aWNhbChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEpUTGF5b3V0LkxBWU9VVF9IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIEpUTGF5b3V0TWFuYWdlci5sYXlvdXRIb3J6b250YWwoY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBKVExheW91dC5MQVlPVVRfQVVUT19TV0lUQ0g6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgSlRMYXlvdXRNYW5hZ2VyLmF1dG9BZGp1c3RMYXlvdXQoY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBsYXlvdXRWZXJ0aWNhbChjaGlsZDpmZ3VpLkdDb21wb25lbnQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQ6Zmd1aS5HQ29tcG9uZW50ID0gY2hpbGQuZmluZFBhcmVudCgpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcclxuICAgICAgICAgICAgY2hpbGQuc2V0U2l6ZShwYXJlbnQud2lkdGgsIHBhcmVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjaGlsZC5hZGRSZWxhdGlvbihwYXJlbnQsIGZndWkuUmVsYXRpb25UeXBlLkhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGxheW91dEhvcnpvbnRhbChjaGlsZDpmZ3VpLkdDb21wb25lbnQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQ6Zmd1aS5HQ29tcG9uZW50ID0gY2hpbGQuZmluZFBhcmVudCgpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcclxuICAgICAgICAgICAgY2hpbGQuc2V0U2l6ZShwYXJlbnQud2lkdGgsIHBhcmVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjaGlsZC5hZGRSZWxhdGlvbihwYXJlbnQsIGZndWkuUmVsYXRpb25UeXBlLldpZHRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYXV0b0FkanVzdExheW91dChjaGlsZDpmZ3VpLkdDb21wb25lbnQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQ6Zmd1aS5HQ29tcG9uZW50ID0gY2hpbGQuZmluZFBhcmVudCgpIGFzIGZndWkuR0NvbXBvbmVudDtcclxuICAgICAgICAgICAgaWYgKCFwYXJlbnQpIHJldHVybjtcclxuICAgICAgICAgICAgY2hpbGQuc2V0U2l6ZShwYXJlbnQud2lkdGgsIHBhcmVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICBjaGlsZC5hZGRSZWxhdGlvbihwYXJlbnQsIGZndWkuUmVsYXRpb25UeXBlLlNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ1aWxkKCk6dm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlID0gSlRTZXNzaW9uLnN0YWdlO1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyV2luZG93UmVzaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJXaW5kb3dSZXNpemUoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uUmVzaXplKGUpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoSlRSZXNpemVFdmVudC5SRVNJWkUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZSgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEpUU2Vzc2lvbi5zdGFnZVdpZHRoID0gdGhpcy5fc3RhZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgIEpUU2Vzc2lvbi5zdGFnZUhlaWdodCA9IHRoaXMuX3N0YWdlLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBidWlsZENvbXBsZXRlKCk6dm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19