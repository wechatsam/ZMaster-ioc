
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/context/JTApplicationBootstrap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af8c8wJ24xNaLMkGuOewhDO', 'JTApplicationBootstrap');
// Script/src/context/JTApplicationBootstrap.ts

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
        var JTApplicationBootstrap = (function (_super) {
            __extends(JTApplicationBootstrap, _super);
            function JTApplicationBootstrap() {
                var _this = _super.call(this) || this;
                _this._serverLoader = null;
                _this._serverTemplate = null;
                _this.__loaderManager = null;
                _this._launchConnected = false;
                return _this;
            }
            JTApplicationBootstrap.prototype.option = function (type, _context) {
                return this.registerContextAlias(type, _context);
            };
            JTApplicationBootstrap.prototype.buildContexts = function () {
                var __contexts = JTApplicationBootstrap.____ctx;
                var count = __contexts.length;
                for (var i = 0; i < count; i++) {
                    var ___c = __contexts[i];
                    ___c.build();
                }
            };
            JTApplicationBootstrap.prototype.buildComplete = function () {
                var __contexts = JTApplicationBootstrap.____ctx;
                var count = __contexts.length;
                for (var i = 0; i < count; i++) {
                    var __c = __contexts[i];
                    __c.buildComplete();
                }
            };
            JTApplicationBootstrap.prototype.channel = function (channel) {
                this.buildContexts();
                this.registerContextAlias(JTApplicationBootstrap.CHANNEL, channel);
                var channelPipeline = new JTChannelPipeline();
                channelPipeline.bind(channel);
                return this.registerContextAlias(JTApplicationBootstrap.CHANNEL_PIPELINE, channelPipeline);
            };
            JTApplicationBootstrap.prototype.childOption = function (type, channelAdapter) {
                var channelPipeline = this.getContext(JTApplicationBootstrap.CHANNEL_PIPELINE);
                channelPipeline.childOption(type, channelAdapter);
                return this;
            };
            JTApplicationBootstrap.prototype.layout = function (layoutType) {
                JTLayoutManager.currentLayout = layoutType;
                return this.registerContextAlias(JTApplicationBootstrap.CONTEXT_LAYOUT, new JTLayoutManager());
            };
            JTApplicationBootstrap.prototype.configServerTemaplete = function (serverLoader, serverId) {
                this._serverLoader = serverLoader;
                this._serverTemplate = serverLoader.toValue(serverId);
                return this._serverTemplate;
            };
            JTApplicationBootstrap.prototype.conofig = function (host, port) {
                this._serverTemplate = new JTServerConfigTemplate();
                this._serverTemplate.setup(host, port);
                return this._serverTemplate;
            };
            JTApplicationBootstrap.prototype.connect = function () {
                var channel = null;
                if (!this._launchConnected) {
                    var channelPipeline = this.getContext(JTApplicationBootstrap.CHANNEL_PIPELINE);
                    channel = channelPipeline.launch(this._serverTemplate.host, this._serverTemplate.port);
                    this._launchConnected = true;
                }
                return channel;
            };
            JTApplicationBootstrap.prototype.launch = function () {
                if (this.__loaderManager)
                    this.__loaderManager.run();
                this.buildComplete();
                var channel = this.connect();
                this.launchSucceed();
                return channel;
            };
            JTApplicationBootstrap.prototype.preloadAssets = function (assets, createRender) {
                if (!this.__loaderManager) {
                    this.__loaderManager = new JTFuturePipeline();
                }
                else {
                    this.__loaderManager.reset();
                }
                this.__loaderManager.dataList = assets;
                this.__loaderManager.itemRender = createRender;
                return this.__loaderManager;
            };
            JTApplicationBootstrap.prototype.load = function () {
                return __awaiter(this, void 0, Promise, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, this.__loaderManager.run()];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                });
            };
            JTApplicationBootstrap.prototype.setDesignResolutionSize = function (width, height, resolutionPolicy) {
                JTSession.stageWidth = width;
                JTSession.stageHeight = height;
            };
            JTApplicationBootstrap.prototype.updateConfigs = function (resources) {
                var templateManager = this.getContext(JTApplicationBootstrap.CONTEXT_TEMPLATE);
                templateManager.updateConfigs(resources);
            };
            JTApplicationBootstrap.prototype.registerContextAlias = function (key, __context) {
                JTApplicationBootstrap._contextMap[key] = __context;
                var contexts = JTApplicationBootstrap.____ctx;
                if (__context instanceof JTApplicationContext)
                    contexts.push(__context);
                return this;
            };
            JTApplicationBootstrap.prototype.getContext = function (key) {
                return JTApplicationBootstrap._contextMap[key];
            };
            JTApplicationBootstrap.getContext = function (key) {
                return this._contextMap[key];
            };
            JTApplicationBootstrap._contextMap = {};
            JTApplicationBootstrap.____ctx = [];
            JTApplicationBootstrap.CONTEXT_PROTOCOL = "Context_Protocol";
            JTApplicationBootstrap.CONTEXT_ERROR_MESSAGE = "Context_ErrorMessage";
            JTApplicationBootstrap.CONTEXT_TEMPLATE = "Context_Template";
            JTApplicationBootstrap.CONTEXT_MAPPING = "Context_Response_Mapping";
            JTApplicationBootstrap.CONTEXT_SCENE = "Context_Scene";
            JTApplicationBootstrap.CONTEXT_LAYER = "Context_Layer";
            JTApplicationBootstrap.CONTEXT_RUNNER = "Context_RUNNER";
            JTApplicationBootstrap.CONTEXT_LAYOUT = "Context_Layout";
            JTApplicationBootstrap.CHANNEL = "Channel";
            JTApplicationBootstrap.WEBSOCKET_CHANNEL = "Websocket_Channel";
            JTApplicationBootstrap.HTTP_CHANNEL = "Http_Channel";
            JTApplicationBootstrap.CHANNEL_PIPELINE = "Pipeline";
            return JTApplicationBootstrap;
        }(JTEventSignaler));
        com.JTApplicationBootstrap = JTApplicationBootstrap;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvbnRleHRcXEpUQXBwbGljYXRpb25Cb290c3RyYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0EsSUFBVSxHQUFHLENBc09aO0lBdE9ELFdBQVUsR0FBRztRQUVUO1lBQXFELDBDQUFlO1lBbUNoRTtnQkFBQSxZQUVJLGlCQUFPLFNBQ1Y7Z0JBWE8sbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO2dCQUNsQyxxQkFBZSxHQUEwQixJQUFJLENBQUM7Z0JBRTlDLHFCQUFlLEdBQW9CLElBQUksQ0FBQztnQkFDeEMsc0JBQWdCLEdBQVcsS0FBSyxDQUFDOztZQU96QyxDQUFDO1lBUU0sdUNBQU0sR0FBYixVQUFjLElBQVksRUFBRSxRQUErQjtnQkFFdkQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBbUIsQ0FBQTtZQUN0RSxDQUFDO1lBS1MsOENBQWEsR0FBdkI7Z0JBRUksSUFBSSxVQUFVLEdBQTJCLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztnQkFDeEUsSUFBSSxLQUFLLEdBQVUsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDckMsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFDckM7b0JBQ0ksSUFBSSxJQUFJLEdBQXlCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNoQjtZQUNMLENBQUM7WUFLUyw4Q0FBYSxHQUF2QjtnQkFFSSxJQUFJLFVBQVUsR0FBMkIsc0JBQXNCLENBQUMsT0FBTyxDQUFDO2dCQUN4RSxJQUFJLEtBQUssR0FBVSxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFVLENBQUMsRUFB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a0IsR0FBVTtnQkFFeEIsT0FBTyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkQsQ0FBQztZQUVhLGlDQUFVLEdBQXhCLFVBQXlCLEdBQVU7Z0JBRS9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBaE9nQixrQ0FBVyxHQUF1QixFQUFFLENBQUM7WUFFdkMsOEJBQU8sR0FBMkIsRUFBRSxDQUFBO1lBRXJDLHVDQUFnQixHQUFVLGtCQUFrQixDQUFDO1lBRTdDLDRDQUFxQixHQUFVLHNCQUFzQixDQUFDO1lBRXRELHVDQUFnQixHQUFVLGtCQUFrQixDQUFDO1lBRTdDLHNDQUFlLEdBQVUsMEJBQTBCLENBQUM7WUFFcEQsb0NBQWEsR0FBVSxlQUFlLENBQUM7WUFFdkMsb0NBQWEsR0FBVSxlQUFlLENBQUM7WUFFdkMscUNBQWMsR0FBVSxnQkFBZ0IsQ0FBQztZQUV0QyxxQ0FBYyxHQUFVLGdCQUFnQixDQUFDO1lBRTVDLDhCQUFPLEdBQVUsU0FBUyxDQUFDO1lBQzNCLHdDQUFpQixHQUFVLG1CQUFtQixDQUFDO1lBQy9DLG1DQUFZLEdBQVUsY0FBYyxDQUFDO1lBQ3JDLHVDQUFnQixHQUFVLFVBQVUsQ0FBQztZQTBNdkQsNkJBQUM7U0FuT0QsQUFtT0MsQ0FuT29ELGVBQWUsR0FtT25FO1FBbk9xQiwwQkFBc0IseUJBbU8zQyxDQUFBO0lBQ0wsQ0FBQyxFQXRPUyxHQUFHLEtBQUgsR0FBRyxRQXNPWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uL2V2ZW50cy9KVEV2ZW50U2lnbmFsZXIudHNcIi8+XHJcbm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKVEFwcGxpY2F0aW9uQm9vdHN0cmFwIGV4dGVuZHMgSlRFdmVudFNpZ25hbGVyIGltcGxlbWVudHMgSlRJT3B0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpYyBfY29udGV4dE1hcDp7W25hbWU6c3RyaW5nXTphbnl9ID0ge307XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9fX19jdHg6SlRJQXBwbGljYXRpb25Db250ZXh0W10gPSBbXVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENPTlRFWFRfUFJPVE9DT0w6c3RyaW5nID0gXCJDb250ZXh0X1Byb3RvY29sXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ09OVEVYVF9FUlJPUl9NRVNTQUdFOnN0cmluZyA9IFwiQ29udGV4dF9FcnJvck1lc3NhZ2VcIjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDT05URVhUX1RFTVBMQVRFOnN0cmluZyA9IFwiQ29udGV4dF9UZW1wbGF0ZVwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENPTlRFWFRfTUFQUElORzpzdHJpbmcgPSBcIkNvbnRleHRfUmVzcG9uc2VfTWFwcGluZ1wiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENPTlRFWFRfU0NFTkU6c3RyaW5nID0gXCJDb250ZXh0X1NjZW5lXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgQ09OVEVYVF9MQVlFUjpzdHJpbmcgPSBcIkNvbnRleHRfTGF5ZXJcIjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBDT05URVhUX1JVTk5FUjpzdHJpbmcgPSBcIkNvbnRleHRfUlVOTkVSXCI7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzdGF0aWMgQ09OVEVYVF9MQVlPVVQ6c3RyaW5nID0gXCJDb250ZXh0X0xheW91dFwiO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIENIQU5ORUw6c3RyaW5nID0gXCJDaGFubmVsXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBXRUJTT0NLRVRfQ0hBTk5FTDpzdHJpbmcgPSBcIldlYnNvY2tldF9DaGFubmVsXCI7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBIVFRQX0NIQU5ORUw6c3RyaW5nID0gXCJIdHRwX0NoYW5uZWxcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIENIQU5ORUxfUElQRUxJTkU6c3RyaW5nID0gXCJQaXBlbGluZVwiO1xyXG5cclxuICAgICAgICBwcml2YXRlIF9zZXJ2ZXJMb2FkZXI6SlRUZXh0TG9hZGVyID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIF9zZXJ2ZXJUZW1wbGF0ZTpKVFNlcnZlckNvbmZpZ1RlbXBsYXRlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfX2xvYWRlck1hbmFnZXI6SlRGdXR1cmVQaXBlbGluZSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBfbGF1bmNoQ29ubmVjdGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YCJ6aG55b+F6aG757un5om/LS1KVEFwcGxpY2F0aW9uQ29udGV4dFxyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIOexu+Wei1xyXG4gICAgICAgICAqIEBwYXJhbSBfY29udGV4dCDmianlsZXkuIrkuIvmlodcclxuICAgICAgICAgKiBAcmV0dXJucyBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgb3B0aW9uKHR5cGU6IHN0cmluZywgX2NvbnRleHQ6IEpUSUFwcGxpY2F0aW9uQ29udGV4dCk6IEpUSUNoaWxkT3B0aW9uIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJDb250ZXh0QWxpYXModHlwZSwgX2NvbnRleHQpIGFzIEpUSUNoaWxkT3B0aW9uXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmnoTlu7rkuIrkuIvmloflr7nosaFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwcm90ZWN0ZWQgYnVpbGRDb250ZXh0cygpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBfX2NvbnRleHRzOkpUSUFwcGxpY2F0aW9uQ29udGV4dFtdID0gSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5fX19fY3R4O1xyXG4gICAgICAgICAgICBsZXQgY291bnQ6bnVtYmVyID0gX19jb250ZXh0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGNvdW50OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBfX19jOkpUSUFwcGxpY2F0aW9uQ29udGV4dCA9IF9fY29udGV4dHNbaV07XHJcbiAgICAgICAgICAgICAgICBfX19jLmJ1aWxkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaehOW7uuS4iuS4i+aWh+WvueixoVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBidWlsZENvbXBsZXRlKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IF9fY29udGV4dHM6SlRJQXBwbGljYXRpb25Db250ZXh0W10gPSBKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLl9fX19jdHg7XHJcbiAgICAgICAgICAgIGxldCBjb3VudDpudW1iZXIgPSBfX2NvbnRleHRzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9fYzpKVElBcHBsaWNhdGlvbkNvbnRleHQgPSBfX2NvbnRleHRzW2ldO1xyXG4gICAgICAgICAgICAgICAgX19jLmJ1aWxkQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qGG5p626YCa5L+h6L+e5o6lXHJcbiAgICAgICAgICogQHBhcmFtIGNoYW5uZWwgXHJcbiAgICAgICAgICogQHJldHVybnMgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNoYW5uZWwoY2hhbm5lbDpKVElDaGFubmVsKTpKVElDaGFubmVsT3B0aW9uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkQ29udGV4dHMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNvbnRleHRBbGlhcyhKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLkNIQU5ORUwsIGNoYW5uZWwpO1xyXG4gICAgICAgICAgICBsZXQgY2hhbm5lbFBpcGVsaW5lOkpUSUNoYW5uZWxQaXBlbGluZSA9IG5ldyBKVENoYW5uZWxQaXBlbGluZSgpO1xyXG4gICAgICAgICAgICBjaGFubmVsUGlwZWxpbmUuYmluZChjaGFubmVsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJDb250ZXh0QWxpYXMoSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5DSEFOTkVMX1BJUEVMSU5FLCBjaGFubmVsUGlwZWxpbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YCa5L+h6YCJ6aG5XHJcbiAgICAgICAgICogQHBhcmFtIHR5cGUg6YCC6YWN5Zmo57G75Z6LXHJcbiAgICAgICAgICogQHBhcmFtIGNoYW5uZWxBZGFwdGVyIOmAgumFjeWZqFxyXG4gICAgICAgICAqIEByZXR1cm5zIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjaGlsZE9wdGlvbih0eXBlOnN0cmluZywgY2hhbm5lbEFkYXB0ZXI6SlRJQ2hhbm5lbENvbnRleHQpOkpUSUNoYW5uZWxPcHRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjaGFubmVsUGlwZWxpbmU6SlRJQ2hhbm5lbFBpcGVsaW5lID0gdGhpcy5nZXRDb250ZXh0KEpUQXBwbGljYXRpb25Cb290c3RyYXAuQ0hBTk5FTF9QSVBFTElORSk7XHJcbiAgICAgICAgICAgIGNoYW5uZWxQaXBlbGluZS5jaGlsZE9wdGlvbih0eXBlLCBjaGFubmVsQWRhcHRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGxheW91dChsYXlvdXRUeXBlOnN0cmluZyk6SlRJQ2hpbGRPcHRpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEpUTGF5b3V0TWFuYWdlci5jdXJyZW50TGF5b3V0ID0gbGF5b3V0VHlwZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJDb250ZXh0QWxpYXMoSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5DT05URVhUX0xBWU9VVCwgbmV3IEpUTGF5b3V0TWFuYWdlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5L2/55So5qih5p2/6YWN572u5pyN5Yqh5Zmo6L+e5o6lXHJcbiAgICAgICAgICog6K+l5pa55rOV5ZKMbGF1bmNoKCnkuIDotbfkvb/nlKhcclxuICAgICAgICAgKiBAcGFyYW0gc2VydmVyTG9hZGVyIOacjeWKoeWZqOWcsOWdgOWSjOerr+WPo+mFjee9rlxyXG4gICAgICAgICAqIEBwYXJhbSBzZXJ2ZXJJZCDmnI3liqHlmahJRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBjb25maWdTZXJ2ZXJUZW1hcGxldGUoc2VydmVyTG9hZGVyOkpUVGV4dExvYWRlciwgc2VydmVySWQ6c3RyaW5nKTpKVFNlcnZlckNvbmZpZ1RlbXBsYXRlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2ZXJMb2FkZXIgPSBzZXJ2ZXJMb2FkZXI7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZlclRlbXBsYXRlID0gc2VydmVyTG9hZGVyLnRvVmFsdWUoc2VydmVySWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VydmVyVGVtcGxhdGVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmFjee9rue9kee7nFxyXG4gICAgICAgICAqIOivpeaWueazleWSjGxhdW5jaCgp5LiA6LW35L2/55SoXHJcbiAgICAgICAgICogQHBhcmFtIGhvc3Qg5pyN5Yqh5Zmo5Z+f5ZCNXHJcbiAgICAgICAgICogQHBhcmFtIHBvcnQg5pyN5Yqh5Zmo56uv5Y+jXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGNvbm9maWcoaG9zdDpzdHJpbmcsIHBvcnQ6bnVtYmVyKTpKVFNlcnZlckNvbmZpZ1RlbXBsYXRlIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fc2VydmVyVGVtcGxhdGUgPSBuZXcgSlRTZXJ2ZXJDb25maWdUZW1wbGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2ZXJUZW1wbGF0ZS5zZXR1cChob3N0LCBwb3J0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNvbm5lY3QoKTpKVElDaGFubmVsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2hhbm5lbDpKVElDaGFubmVsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9sYXVuY2hDb25uZWN0ZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGFubmVsUGlwZWxpbmU6SlRJQ2hhbm5lbFBpcGVsaW5lID0gdGhpcy5nZXRDb250ZXh0KEpUQXBwbGljYXRpb25Cb290c3RyYXAuQ0hBTk5FTF9QSVBFTElORSk7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsID0gY2hhbm5lbFBpcGVsaW5lLmxhdW5jaCh0aGlzLl9zZXJ2ZXJUZW1wbGF0ZS5ob3N0LCB0aGlzLl9zZXJ2ZXJUZW1wbGF0ZS5wb3J0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xhdW5jaENvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlkK/liqjmoYbmnrZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgbGF1bmNoKCk6SlRJQ2hhbm5lbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX19sb2FkZXJNYW5hZ2VyKSB0aGlzLl9fbG9hZGVyTWFuYWdlci5ydW4oKTtcclxuICAgICAgICAgICAgdGhpcy5idWlsZENvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFubmVsOkpUSUNoYW5uZWwgPSB0aGlzLmNvbm5lY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5sYXVuY2hTdWNjZWVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFubmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFic3RyYWN0IGxhdW5jaFN1Y2NlZWQoKTp2b2lkXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWKoOi9vei1hOa6kFxyXG4gICAgICAgICAqIEBwYXJhbSBhc3NldHMg5Lu75Yqh5YiX6KGoXHJcbiAgICAgICAgICogQHBhcmFtIGNyZWF0ZVJlbmRlciDliJvliqDliqDovb3lmajnmoTlm57osIPlh73mlbAgLS0tLSDpnIDopoHnu6fmib9KVFRhc2tFeGVjdXRvcuexu1xyXG4gICAgICAgICAqIEByZXR1cm5zIOi/lOWbnuS7u+WKoeaJp+ihjOmYn+WIl1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwcmVsb2FkQXNzZXRzKGFzc2V0czp7W3VybDpzdHJpbmddOnN0cmluZ31bXSwgY3JlYXRlUmVuZGVyPzpKVENvbW1hbmQpOkpURnV0dXJlUGlwZWxpbmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fX2xvYWRlck1hbmFnZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19sb2FkZXJNYW5hZ2VyID0gbmV3IEpURnV0dXJlUGlwZWxpbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19sb2FkZXJNYW5hZ2VyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fX2xvYWRlck1hbmFnZXIuZGF0YUxpc3QgPSBhc3NldHM7XHJcbiAgICAgICAgICAgIHRoaXMuX19sb2FkZXJNYW5hZ2VyLml0ZW1SZW5kZXIgPSBjcmVhdGVSZW5kZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9hZGVyTWFuYWdlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWKoOi9vVxyXG4gICAgICAgICAqIOmcgOimgemFjeWQiGF3YWl05LiA6LW35L2/55SoIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBhc3luYyBsb2FkKCk6UHJvbWlzZTxhbnk+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIGF3YWl0IHRoaXMuX19sb2FkZXJNYW5hZ2VyLnJ1bigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldERlc2lnblJlc29sdXRpb25TaXplKHdpZHRoOm51bWJlciwgaGVpZ2h0Om51bWJlciwgcmVzb2x1dGlvblBvbGljeT86c3RyaW5nIHwgbnVtYmVyKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBKVFNlc3Npb24uc3RhZ2VXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBKVFNlc3Npb24uc3RhZ2VIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pu05paw5qih5p2/6YWN572uXHJcbiAgICAgICAgICogQHBhcmFtIHJlc291cmNlcyBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdXBkYXRlQ29uZmlncyhyZXNvdXJjZXM6YW55W10pOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wbGF0ZU1hbmFnZXI6SlRBYnN0cmFjdFRlbXBsYXRlTWFuYWdlciA9IHRoaXMuZ2V0Q29udGV4dChKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLkNPTlRFWFRfVEVNUExBVEUpIGFzIEpUQWJzdHJhY3RUZW1wbGF0ZU1hbmFnZXI7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlTWFuYWdlci51cGRhdGVDb25maWdzKHJlc291cmNlcyk7XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVyQ29udGV4dEFsaWFzKGtleTpzdHJpbmcsIF9fY29udGV4dDphbnkpOkpUSU9wdGlvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5fY29udGV4dE1hcFtrZXldID0gX19jb250ZXh0O1xyXG4gICAgICAgICAgICBsZXQgY29udGV4dHM6SlRJQXBwbGljYXRpb25Db250ZXh0W10gPSBKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLl9fX19jdHg7XHJcbiAgICAgICAgICAgIGlmIChfX2NvbnRleHQgaW5zdGFuY2VvZiBKVEFwcGxpY2F0aW9uQ29udGV4dCkgIGNvbnRleHRzLnB1c2goX19jb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0Q29udGV4dChrZXk6c3RyaW5nKTphbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLl9jb250ZXh0TWFwW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldENvbnRleHQoa2V5OnN0cmluZyk6YW55XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dE1hcFtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=