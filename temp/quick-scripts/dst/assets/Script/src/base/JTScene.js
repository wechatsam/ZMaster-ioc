
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/base/JTScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31f6bfMJlpLK77ZjcGF6IWS', 'JTScene');
// Script/src/base/JTScene.ts

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
        var JTScene = (function (_super) {
            __extends(JTScene, _super);
            function JTScene() {
                return _super.call(this) || this;
            }
            Object.defineProperty(JTScene.prototype, "locker", {
                get: function () {
                    return JTAbstractSceneManager.locker;
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
        }(JTComponent));
        com.JTScene = JTScene;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGJhc2VcXEpUU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBcUJaO0lBckJELFdBQVUsR0FBRztRQUVUO1lBQWlFLDJCQUFjO1lBRTNFO3VCQUVJLGlCQUFPO1lBQ1gsQ0FBQztZQUVELHNCQUFXLDJCQUFNO3FCQUFqQjtvQkFFSSxPQUFPLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztnQkFDekMsQ0FBQzs7O2VBQUE7WUFFTSxnQ0FBYyxHQUFyQixVQUFpRCxRQUFZLEVBQUUsSUFBVyxFQUFFLGVBQThCLEVBQUUsUUFBYTtnQkFBN0MsZ0NBQUEsRUFBQSxzQkFBOEI7Z0JBRXRHLElBQUksV0FBVyxHQUFvQixJQUFJLFFBQVEsRUFBRSxDQUFDO2dCQUNsRCxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN6RCxPQUFPLFdBQVcsQ0FBQztZQUN2QixDQUFDO1lBQ0wsY0FBQztRQUFELENBbEJBLEFBa0JDLENBbEJnRSxXQUFXLEdBa0IzRTtRQWxCcUIsV0FBTyxVQWtCNUIsQ0FBQTtJQUNMLENBQUMsRUFyQlMsR0FBRyxLQUFILEdBQUcsUUFxQloiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgSlRTY2VuZTxUIGV4dGVuZHMgZmd1aS5HQ29tcG9uZW50PiBleHRlbmRzIEpUQ29tcG9uZW50PFQ+IGltcGxlbWVudHMgSlRJU2NlbmVcclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBsb2NrZXIoKTpKVExvY2tlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpUQWJzdHJhY3RTY2VuZU1hbmFnZXIubG9ja2VyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldFVJQ29tcG9uZW50PFYgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+KF9fX2NsYXNzOmFueSwgX19pZDpzdHJpbmcsIHJlZ2lzdGVyZWRDbGljazpib29sZWFuID0gdHJ1ZSwgcnVuQ2xhc3M/OmFueSk6SlRVSUNvbXBvbmVudDxWPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHVpQ29tcG9uZW50OkpUVUlDb21wb25lbnQ8Vj4gPSBuZXcgX19fY2xhc3MoKTtcclxuICAgICAgICAgICAgdWlDb21wb25lbnQuc2V0dXAodGhpcywgX19pZCwgcmVnaXN0ZXJlZENsaWNrLCBydW5DbGFzcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1aUNvbXBvbmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19