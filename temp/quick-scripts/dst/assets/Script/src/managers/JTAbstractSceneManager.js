
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/managers/JTAbstractSceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd83283ct6pAZ7WfJ1fKYs7B', 'JTAbstractSceneManager');
// Script/src/managers/JTAbstractSceneManager.ts

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
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
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
                var sceneManager = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_SCENE);
                JTAbstractSceneManager._instance = sceneManager;
                if (!this._layer) {
                    var layerManager = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_LAYER);
                    this._layer = layerManager.getLayer(JTAbstractLayerManager.LAYER_SCENE);
                }
            };
            JTAbstractSceneManager.prototype.buildComplete = function () {
            };
            JTAbstractSceneManager.prototype.registerSceneClassAlias = function (type, cls) {
                this._sceneMap[type] = cls;
            };
            JTAbstractSceneManager.prototype.changeScene = function (sceneType) {
                return __awaiter(this, void 0, Promise, function () {
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
            JTAbstractSceneManager.locker = new JTLocker();
            JTAbstractSceneManager._instance = null;
            return JTAbstractSceneManager;
        }(JTApplicationContext));
        com.JTAbstractSceneManager = JTAbstractSceneManager;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG1hbmFnZXJzXFxKVEFic3RyYWN0U2NlbmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQWdHWjtJQWhHRCxXQUFVLEdBQUc7UUFFVDtZQUFxRCwwQ0FBb0I7WUFXckU7Z0JBQUEsWUFFSSxpQkFBTyxTQVNWO2dCQXBCTyxZQUFNLEdBQW1CLElBQUksQ0FBQztnQkFJOUIsZUFBUyxHQUF1QixJQUFJLENBQUM7Z0JBQ3JDLGVBQVMsR0FBWSxJQUFJLENBQUM7Z0JBTzlCLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7WUFPeEIsQ0FBQztZQUVNLHNDQUFLLEdBQVo7Z0JBRUksSUFBSSxZQUFZLEdBQTBCLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEgsc0JBQXNCLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztnQkFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2hCO29CQUNJLElBQUksWUFBWSxHQUEwQixzQkFBc0IsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2xILElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQW9CLENBQUU7aUJBQy9GO1lBQ0wsQ0FBQztZQUVNLDhDQUFhLEdBQXBCO1lBR0EsQ0FBQztZQUVTLHdEQUF1QixHQUFqQyxVQUFrQyxJQUFXLEVBQUUsR0FBTztnQkFFbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDL0IsQ0FBQztZQUVZLDRDQUFXLEdBQXhCLFVBQXlCLFNBQWdCOytDQUFFLE9BQU87Ozs7O2dDQUUxQyxHQUFHLEdBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDcEMsS0FBSyxHQUE0QixJQUFJLEdBQUcsRUFBRSxDQUFDO2dDQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQ0FDL0IsV0FBTSxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUE7O2dDQUExQyxTQUEwQyxDQUFDO2dDQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztvQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7YUFDbEQ7WUFFTSx5Q0FBUSxHQUFmLFVBQWdCLEtBQWMsRUFBRSxJQUFZO2dCQUV4QyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBRU0scUNBQUksR0FBWDtnQkFFSSxJQUFJLElBQUksR0FBVSxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUM3QjtvQkFDSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUVhLDJCQUFJLEdBQWxCO2dCQUVJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsQ0FBQztZQUVhLGtDQUFXLEdBQXpCLFVBQTBCLFNBQWdCO2dCQUV0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBRUQsc0JBQVcseUNBQUs7cUJBQWhCO29CQUVJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBa0Isa0NBQVE7cUJBQTFCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDMUIsQ0FBQzs7O2VBQUE7WUF0RmEsNkJBQU0sR0FBWSxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBS2hDLGdDQUFTLEdBQW1CLElBQUksQ0FBQztZQW9GcEQsNkJBQUM7U0E3RkQsQUE2RkMsQ0E3Rm9ELG9CQUFvQixHQTZGeEU7UUE3RnFCLDBCQUFzQix5QkE2RjNDLENBQUE7SUFDTCxDQUFDLEVBaEdTLEdBQUcsS0FBSCxHQUFHLFFBZ0daIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpUQWJzdHJhY3RTY2VuZU1hbmFnZXIgZXh0ZW5kcyBKVEFwcGxpY2F0aW9uQ29udGV4dCBpbXBsZW1lbnRzIEpUSVNjZW5lTWFuYWdlclxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgX2xheWVyOmZndWkuR0NvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbG9ja2VyOkpUTG9ja2VyID0gbmV3IEpUTG9ja2VyKCk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3NjZW5lTWFwOntbbmFtZTpzdHJpbmddOmFueX0gPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgX2hvc3Ryb3lzOnN0cmluZ1tdID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkpUSVNjZW5lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lTWFwID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX2hvc3Ryb3lzID0gW107XHJcbiAgICAgICAgICAgIC8vIGNjLm1hY3JvLkNMRUFOVVBfSU1BR0VfQ0FDSEUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gY2MuZHluYW1pY0F0bGFzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZShKVFNlc3Npb24uZGVzaWduV2lkdGgsIEpUU2Vzc2lvbi5kZXNpZ25IZWlnaHQsIGNjLlJlc29sdXRpb25Qb2xpY3kuRklYRURfV0lEVEgpO1xyXG4gICAgICAgICAgICAvLyB2YXIgc2l6ZTogY2MuU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcclxuICAgICAgICAgICAgLy8gSlRTZXNzaW9uLnN0YWdlV2lkdGggPSBzaXplLndpZHRoO1xyXG4gICAgICAgICAgICAvLyBKVFNlc3Npb24uc3RhZ2VIZWlnaHQgPSBzaXplLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBidWlsZCgpOnZvaWQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgc2NlbmVNYW5hZ2VyOkpUQWJzdHJhY3RTY2VuZU1hbmFnZXIgPSBKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLmdldENvbnRleHQoSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5DT05URVhUX1NDRU5FKTtcclxuICAgICAgICAgICAgSlRBYnN0cmFjdFNjZW5lTWFuYWdlci5faW5zdGFuY2UgPSBzY2VuZU1hbmFnZXI7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbGF5ZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXllck1hbmFnZXI6SlRBYnN0cmFjdExheWVyTWFuYWdlciA9IEpUQXBwbGljYXRpb25Cb290c3RyYXAuZ2V0Q29udGV4dChKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLkNPTlRFWFRfTEFZRVIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGF5ZXIgPSBsYXllck1hbmFnZXIuZ2V0TGF5ZXIoSlRBYnN0cmFjdExheWVyTWFuYWdlci5MQVlFUl9TQ0VORSkgYXMgZmd1aS5HQ29tcG9uZW50IDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGJ1aWxkQ29tcGxldGUoKTogdm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlZ2lzdGVyU2NlbmVDbGFzc0FsaWFzKHR5cGU6c3RyaW5nLCBjbHM6YW55KTp2b2lkIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NlbmVNYXBbdHlwZV0gPSBjbHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYXN5bmMgY2hhbmdlU2NlbmUoc2NlbmVUeXBlOnN0cmluZyk6UHJvbWlzZTxhbnk+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNsczphbnkgPSB0aGlzLl9zY2VuZU1hcFtzY2VuZVR5cGVdO1xyXG4gICAgICAgICAgICBsZXQgc2NlbmU6SlRTY2VuZTxmZ3VpLkdDb21wb25lbnQ+ID0gbmV3IGNscygpO1xyXG4gICAgICAgICAgICB0aGlzLl9ob3N0cm95cy5wdXNoKHNjZW5lVHlwZSk7XHJcbiAgICAgICAgICAgIGF3YWl0IEpUQWJzdHJhY3RTY2VuZU1hbmFnZXIubG9ja2VyLmxvY2soKTtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubGF5ZXIubnVtQ2hpbGRyZW4pIHRoaXMuX2xheWVyLnJlbW92ZUNoaWxkQXQoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc2NlbmUsIGZndWkuUmVsYXRpb25UeXBlLkhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkQ2hpbGQoc2NlbmU6SlRJU2NlbmUsIHR5cGU/Om51bWJlcik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2NlbmUuYmluZFVJUmVsYXRpb24odGhpcy5sYXllciwgdHlwZSlcclxuICAgICAgICAgICAgdGhpcy5sYXllci5hZGRDaGlsZChzY2VuZS5jb21wb25lbnRVSSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYmFjaygpOnN0cmluZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHR5cGU6c3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hvc3Ryb3lzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSB0aGlzLl9ob3N0cm95cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NlbmUodHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBiYWNrKCk6dm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmJhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlU2NlbmUoc2NlbmVUeXBlOnN0cmluZyk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuY2hhbmdlU2NlbmUoc2NlbmVUeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgbGF5ZXIoKTpmZ3VpLkdDb21wb25lbnQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOkpUSVNjZW5lTWFuYWdlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==