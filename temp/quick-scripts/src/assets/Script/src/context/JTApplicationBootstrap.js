"use strict";
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