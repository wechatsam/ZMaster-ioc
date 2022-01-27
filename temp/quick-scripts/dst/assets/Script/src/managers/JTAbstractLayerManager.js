
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/managers/JTAbstractLayerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c270P9xPBMIL7J43PjB1E0', 'JTAbstractLayerManager');
// Script/src/managers/JTAbstractLayerManager.ts

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
                this._stage = JTSession.stage;
                this._layerMap = {};
                this._stage.makeFullScreen();
                var layerManager = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_LAYER);
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
        }(JTApplicationContext));
        com.JTAbstractLayerManager = JTAbstractLayerManager;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG1hbmFnZXJzXFxKVEFic3RyYWN0TGF5ZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLElBQVUsR0FBRyxDQStGWjtJQS9GRCxXQUFVLEdBQUc7UUFFVDtZQUFxRCwwQ0FBb0I7WUFjckUsZ0NBQVksS0FBaUI7Z0JBQTdCLFlBRUksaUJBQU8sU0FFVjtnQkFWTyxlQUFTLEdBQVUsSUFBSSxDQUFDO2dCQUN4QixZQUFNLEdBQWMsSUFBSSxDQUFDO2dCQVE3QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7WUFDeEIsQ0FBQztZQUVNLHNDQUFLLEdBQVo7Z0JBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxZQUFZLEdBQW1CLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0csc0JBQXNCLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLENBQUM7WUFRUyw2Q0FBWSxHQUF0QjtnQkFFSSxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFFTSw0Q0FBVyxHQUFsQixVQUFtQixJQUFXO2dCQUUxQixJQUFJLEtBQUssR0FBbUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixLQUFLLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUVNLDJDQUFVLEdBQWpCLFVBQWtCLFdBQTJCLEVBQUUsSUFBVztnQkFFdEQsSUFBSSxLQUFLLEdBQW1CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUVNLHlDQUFRLEdBQWYsVUFBZ0IsSUFBVztnQkFFdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFFRCxzQkFBVyx5Q0FBSztxQkFBaEI7b0JBRUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUN2QixDQUFDOzs7ZUFBQTtZQUVhLGlDQUFVLEdBQXhCLFVBQXlCLFdBQTJCLEVBQUUsSUFBVztnQkFFN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFFYSwrQkFBUSxHQUF0QixVQUF1QixJQUFXO2dCQUU5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFFRCxzQkFBa0IsK0JBQUs7cUJBQXZCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hDLENBQUM7OztlQUFBO1lBRUQsc0JBQWtCLGtDQUFRO3FCQUExQjtvQkFFSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQzFCLENBQUM7OztlQUFBO1lBekZhLGlDQUFVLEdBQVcsWUFBWSxDQUFDO1lBQ2xDLGtDQUFXLEdBQVcsYUFBYSxDQUFDO1lBQ3BDLGtDQUFXLEdBQVcsYUFBYSxDQUFDO1lBQ3BDLGdDQUFTLEdBQVcsV0FBVyxDQUFDO1lBQ2hDLGlDQUFVLEdBQVcsWUFBWSxDQUFDO1lBTWpDLGdDQUFTLEdBQW1CLElBQUksQ0FBQztZQWdGcEQsNkJBQUM7U0E1RkQsQUE0RkMsQ0E1Rm9ELG9CQUFvQixHQTRGeEU7UUE1RnFCLDBCQUFzQix5QkE0RjNDLENBQUE7SUFDTCxDQUFDLEVBL0ZTLEdBQUcsS0FBSCxHQUFHLFFBK0ZaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vY29udGV4dC9KVEFwcGxpY2F0aW9uQ29udGV4dC50c1wiLz5cclxubmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUQWJzdHJhY3RMYXllck1hbmFnZXIgZXh0ZW5kcyBKVEFwcGxpY2F0aW9uQ29udGV4dCBpbXBsZW1lbnRzIEpUSUxheWVyTWFuYWdlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTEFZRVJfVElQUzogc3RyaW5nID0gXCJsYXllcl90aXBzXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBMQVlFUl9TQ0VORTogc3RyaW5nID0gXCJsYXllcl9zY2VuZVwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTEFZRVJfUE9QVVA6IHN0cmluZyA9IFwibGF5ZXJfcG9wdXBcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIExBWUVSX01BUDogc3RyaW5nID0gXCJsYXllcl9tYXBcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIExBWUVSX01BU0s6IHN0cmluZyA9IFwibGF5ZXJfbWFza1wiO1xyXG5cclxuICAgICAgICBwcml2YXRlIF9sYXllck1hcDpPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgX3N0YWdlOmZndWkuR1Jvb3QgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkpUSUxheWVyTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHN0YWdlPzpmZ3VpLkdSb290KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhZ2UgPSBzdGFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBidWlsZCgpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YWdlID0gSlRTZXNzaW9uLnN0YWdlO1xyXG4gICAgICAgICAgICB0aGlzLl9sYXllck1hcCA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFnZS5tYWtlRnVsbFNjcmVlbigpO1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXJNYW5hZ2VyOkpUSUxheWVyTWFuYWdlciA9IEpUQXBwbGljYXRpb25Cb290c3RyYXAuZ2V0Q29udGV4dChKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLkNPTlRFWFRfTEFZRVIpO1xyXG4gICAgICAgICAgICBKVEFic3RyYWN0TGF5ZXJNYW5hZ2VyLl9pbnN0YW5jZSA9IGxheWVyTWFuYWdlcjtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVMYXllcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOm7mOiupOWIm+W7uuS6lOWxglxyXG4gICAgICAgICAqIOWPr+S7peagueaNrumhueebrueahOmcgOimgeiHquWumuS5iURJVuWxgue6p+aVsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVMYXllcnMoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxheWVyKEpUQWJzdHJhY3RMYXllck1hbmFnZXIuTEFZRVJfTUFQKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVMYXllcihKVEFic3RyYWN0TGF5ZXJNYW5hZ2VyLkxBWUVSX1NDRU5FKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVMYXllcihKVEFic3RyYWN0TGF5ZXJNYW5hZ2VyLkxBWUVSX01BU0spO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxheWVyKEpUQWJzdHJhY3RMYXllck1hbmFnZXIuTEFZRVJfUE9QVVApO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUxheWVyKEpUQWJzdHJhY3RMYXllck1hbmFnZXIuTEFZRVJfVElQUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBjcmVhdGVMYXllcih0eXBlOnN0cmluZyk6Zmd1aS5HQ29tcG9uZW50IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxheWVyOmZndWkuR0NvbXBvbmVudCA9IG5ldyBmZ3VpLkdDb21wb25lbnQoKTtcclxuICAgICAgICAgICAgbGF5ZXIubWFrZUZ1bGxTY3JlZW4oKTtcclxuICAgICAgICAgICAgbGF5ZXIuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xheWVyTWFwW3R5cGVdID0gbGF5ZXI7XHJcbiAgICAgICAgICAgIGxheWVyLnNldFNpemUoIHRoaXMuX3N0YWdlLndpZHRoLCB0aGlzLl9zdGFnZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBsYXllci5hZGRSZWxhdGlvbih0aGlzLl9zdGFnZSwgZmd1aS5SZWxhdGlvblR5cGUuSGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhZ2UuYWRkQ2hpbGQobGF5ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkVG9MYXllcihjb21wb25lbnRVSTpmZ3VpLkdDb21wb25lbnQsIHR5cGU6c3RyaW5nKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXI6Zmd1aS5HQ29tcG9uZW50ID0gdGhpcy5nZXRMYXllcih0eXBlKTtcclxuICAgICAgICAgICAgbGF5ZXIuYWRkQ2hpbGQoY29tcG9uZW50VUkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldExheWVyKHR5cGU6c3RyaW5nKTpmZ3VpLkdDb21wb25lbnQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXJNYXBbdHlwZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHN0YWdlKCk6Zmd1aS5HUm9vdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YWdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhZGRUb0xheWVyKGNvbXBvbmVudFVJOmZndWkuR0NvbXBvbmVudCwgdHlwZTpzdHJpbmcpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmFkZFRvTGF5ZXIoY29tcG9uZW50VUksIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRMYXllcih0eXBlOnN0cmluZyk6Zmd1aS5HQ29tcG9uZW50XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UuZ2V0TGF5ZXIodHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBzdGFnZSgpOmZndWkuR1Jvb3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZS5zdGFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6SlRJTGF5ZXJNYW5hZ2VyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==