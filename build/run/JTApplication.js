"use strict";
var com;
(function (com) {
    class JTApplication extends com.JTEventSignaler {
        constructor() {
            super();
        }
        option(type, _extension) {
            return this.registerClassAlias(type, _extension);
        }
        builds() {
            let extensionMap = JTApplication._classMap;
            for (var key in extensionMap) {
                let _class = extensionMap[key];
                _class.build();
            }
        }
        channel(channel) {
            this.builds();
            this.registerClassAlias(JTApplication.CHANNEL, channel);
            let channelPipeline = new com.JTChannelPipeline();
            channelPipeline.bind(channel);
            return this.registerClassAlias(JTApplication.CHANNEL_PIPELINE, channelPipeline);
        }
        childOption(type, channelAdapter) {
            let channelPipeline = this.getObject(JTApplication.CHANNEL_PIPELINE);
            channelPipeline.childOption(type, channelAdapter);
            return this;
        }
        launch(host, port) {
            let channelPipeline = this.getObject(JTApplication.CHANNEL_PIPELINE);
            channelPipeline.launch(host, port);
        }
        loadSyncTemplates(list) {
        }
        updateConfigs(resources) {
            let templateManager = this.getObject(JTApplication.TEMPLATE);
            templateManager.updateConfigs(resources);
        }
        registerClassAlias(key, extendsClass) {
            JTApplication._classMap[key] = extendsClass;
            return this;
        }
        getObject(key) {
            return JTApplication._classMap[key];
        }
        static getExtendItem(key) {
            return this._classMap[key];
        }
    }
    JTApplication._classMap = {};
    JTApplication.PROTOCOL = "ProtocolManager";
    JTApplication.ERROR_MESSAGE = "ErrorMessage";
    JTApplication.TEMPLATE = "TemplateManager";
    JTApplication.MAPPING = "Mapping";
    JTApplication.SCENE = "Scene";
    JTApplication.LAYER = "Layer";
    JTApplication.RUNNER = "Runner";
    JTApplication.CHANNEL = "Channel";
    JTApplication.WEBSOCKET_CHANNEL = "Websocket_Channel";
    JTApplication.HTTP_CHANNEL = "Http_Channel";
    JTApplication.CHANNEL_PIPELINE = "Pipeline";
    JTApplication._locker = new com.JTLocker();
    com.JTApplication = JTApplication;
})(com || (com = {}));
