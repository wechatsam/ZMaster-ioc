
(function () {
var scripts = [{"deps":{"./assets/migration/use_v2.1-2.2.1_cc.Toggle_event":1,"./assets/Script/src/coroutines/tasks/JTTask":2,"./assets/Script/src/interfaces/networks/decode/JTIEncoderAdapter":3,"./assets/Script/src/network/contexts/decode/JTDecoderToJSONAdapter":4,"./assets/Script/src/decorators/injects/alisa/JTConfigurationAlisa":5,"./assets/Script/src/base/JTComponent":6,"./assets/Script/src/datas/templates/JTServerConfigTemplate":7,"./assets/Script/src/managers/popups/JTPopupManager":8,"./assets/Script/src/time/base/JTTimerTask":9,"./assets/Script/src/common/JTLogger":10,"./assets/Script/src/context/JTApplicationBootstrap":11,"./assets/Script/src/events/JTEventDispatcher":12,"./assets/Script/src/datas/mappers/JTClassMapper":13,"./assets/Script/src/interfaces/coroutines/JTIFactory":14,"./assets/Script/src/interfaces/events/JTIEventSignaler":15,"./assets/Script/src/interfaces/managers/JTILayerManager":16,"./assets/Script/src/interfaces/networks/encode/JTIDecoderAdapter":17,"./assets/Script/src/layout/JTLayoutManager":18,"./assets/Script/src/interfaces/pools/JTIFixedPool":19,"./assets/Script/src/interfaces/ui/JTIPanel":20,"./assets/Script/src/libs/worker":21,"./assets/Script/src/network/base/JTBuffer":22,"./assets/Script/src/network/protocols/JTAbstractProtocolManager":23,"./assets/Script/src/network/contexts/encode/JTEncodeToByteAdapter":24,"./assets/Script/src/network/contexts/idleState/JTIdleStateAdapter":25,"./assets/Script/src/pools/JTCachePool":26,"./assets/Script/src/threads/JTIRunnable":27,"./assets/Script/src/time/frames/JTOptimizeFrame":28,"./assets/Script/src/time/interfaces/JTIJumpFrame":29,"./assets/Script/src/time/timers/JTScheduleTimer":30,"./assets/Script/src/decorators/binders/JTWatchProperty":31,"./assets/Script/src/decorators/injects/singleton/JTConfiguration":32,"./assets/Script/src/common/JTLocalCache":33,"./assets/Script/src/base/JTUIComponent":34,"./assets/Script/src/common/JTMatrix":35,"./assets/Script/src/common/JTPoint":36,"./assets/Script/src/common/JTSession":37,"./assets/Script/src/coroutines/tasks/JTTaskCounter":38,"./assets/Script/src/common/JTTextLoader":39,"./assets/Script/src/common/JTFunctionUtils":40,"./assets/Script/src/coroutines/JTLocker":41,"./assets/Script/src/coroutines/tasks/JTFuturePipeline":42,"./assets/Script/src/context/JTApplicationContext":43,"./assets/Script/src/coroutines/tasks/JTTaskExecutor":44,"./assets/Script/src/coroutines/tasks/JTTaskEvent":45,"./assets/Script/src/datas/JTDataInfo":46,"./assets/Script/src/coroutines/tasks/JTTaskFactory":47,"./assets/Script/src/coroutines/tasks/JTCounter":48,"./assets/Script/src/events/JTEventManager":49,"./assets/Script/src/datas/mappers/JTMapper":50,"./assets/Script/src/datas/templates/JTBaseTemplate":51,"./assets/Script/src/events/JTCommand":52,"./assets/Script/src/datas/mappers/JTAbstractResponseMapping":53,"./assets/Script/src/interfaces/JTIChildOption":54,"./assets/Script/src/events/JTEventSignaler":55,"./assets/Script/src/interfaces/JTIEventDispatcher":56,"./assets/Script/src/events/JTFunctionManager":57,"./assets/Script/src/interfaces/JTIOption":58,"./assets/Script/src/interfaces/JTIMapper":59,"./assets/Script/src/interfaces/coroutines/JTITask":60,"./assets/Script/src/interfaces/JTITextLoader":61,"./assets/Script/src/interfaces/JTIApplicationContext":62,"./assets/Script/src/interfaces/managers/JTISceneManager":63,"./assets/Script/src/interfaces/coroutines/JTILocker":64,"./assets/Script/src/interfaces/coroutines/JTICounter":65,"./assets/Script/src/interfaces/coroutines/JTITaskExecutor":66,"./assets/Script/src/interfaces/managers/JTITemplateInfoManager":67,"./assets/Script/src/interfaces/networks/JTIChannelContext":68,"./assets/Script/src/interfaces/networks/JTIChannelOption":69,"./assets/Script/src/interfaces/networks/JTIChannelState":70,"./assets/Script/src/interfaces/networks/JTIChannelPipeline":71,"./assets/Script/src/interfaces/networks/JTIChannelContextMap":72,"./assets/Script/src/interfaces/networks/JTIProtocol":73,"./assets/Script/src/interfaces/networks/JTIReceivePackage":74,"./assets/Script/src/interfaces/networks/JTIWebsocketChannel":75,"./assets/Script/src/interfaces/networks/JTIChannel":76,"./assets/Script/src/interfaces/pools/JTIPoolObject":77,"./assets/Script/src/managers/JTAbstractSceneManager":78,"./assets/Script/src/layout/JTLayout":79,"./assets/Script/src/interfaces/pools/JTIPool":80,"./assets/Script/src/interfaces/pools/JTICachePool":81,"./assets/Script/src/interfaces/ui/JTIScene":82,"./assets/Script/src/managers/JTAbstractTemplateManager":83,"./assets/Script/src/interfaces/ui/JTIComponent":84,"./assets/Script/src/managers/popups/JTChildPopUp":85,"./assets/Script/src/network/JTChannelPipeline":86,"./assets/Script/src/managers/JTAbstractLayerManager":87,"./assets/Script/src/managers/JTDataInfoManager":88,"./assets/Script/src/network/JTHttpChannel":89,"./assets/Script/src/network/JTRceivePackage":90,"./assets/Script/src/network/JTSendPackage":91,"./assets/Script/src/network/JTWebSocketChannel":92,"./assets/Script/src/network/JTChannel":93,"./assets/Script/src/network/base/JTURLLoader":94,"./assets/Script/src/network/base/JTWebSocket":95,"./assets/Script/src/network/contexts/decode/JTDecoderToByteAdapter":96,"./assets/Script/src/network/contexts/JTChannelContext":97,"./assets/Script/src/network/base/JTHttpRequest":98,"./assets/Script/src/network/protocols/JTItemProtocol":99,"./assets/Script/src/network/contexts/JTChannelContextAdapter":100,"./assets/Script/src/network/contexts/encode/JTEncodeToJSONAdapter":101,"./assets/Script/src/network/contexts/decode/JTAbstractDecoderAdapter":102,"./assets/Script/src/network/contexts/encode/JTAbstractEncoderAdapter":103,"./assets/Script/src/network/protocols/JTAbstractProtocolErrorMessage":104,"./assets/Script/src/network/protocols/JTProtocol":105,"./assets/Script/src/pools/JTPool":106,"./assets/Script/src/network/contexts/idleState/JTAbstractIdleStateAdapter":107,"./assets/Script/src/time/JTTimerEvent":108,"./assets/Script/src/threads/JTThread":109,"./assets/Script/src/pools/JTFixedPool":110,"./assets/Script/src/time/JTTimerTool":111,"./assets/Script/src/time/base/JTTimer":112,"./assets/Script/src/time/JTTimeUtils":113,"./assets/Script/src/time/frames/JTJumpFrame":114,"./assets/Script/src/time/frames/JTScheduleFrame":115,"./assets/Script/src/time/interfaces/JTIScheduleFrame":116,"./assets/Script/src/time/frames/JTEnterFrame":117,"./assets/Script/src/time/interfaces/JTIScheduleTimer":118,"./assets/Script/src/base/JTPanel":119,"./assets/Script/src/time/interfaces/JTITimeTask":120,"./assets/Script/src/time/interfaces/JTIEnterFrame":121,"./assets/Script/src/time/interfaces/JTITimer":122,"./assets/Script/src/decorators/binders/JTBindingUtils":123,"./assets/Script/src/time/timers/JTOptimizeTimer":124,"./assets/Script/src/time/timers/JTLoopTimer":125,"./assets/Script/src/decorators/injects/JTLayout":126,"./assets/Script/src/decorators/injects/JTNotifyUpdate":127,"./assets/Script/src/decorators/injects/JTResponse":128,"./assets/Script/src/decorators/injects/alisa/JTSingletonClassAlisa":129,"./assets/Script/src/decorators/injects/JTDecoratorUtils":130,"./assets/Script/src/decorators/injects/JTResize":131,"./assets/Script/src/base/JTScene":132,"./assets/Script/src/decorators/injects/alisa/JTClassInjectAlias":133,"./assets/Script/src/decorators/binders/JTPropertyChanged":134,"./assets/Script/src/decorators/injects/alisa/JTSingletonPoolAlisa":135,"./assets/Script/src/decorators/injects/singleton/JTSingletonClass":136,"./assets/Script/src/decorators/injects/singleton/JTSingletonPool":137},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/coroutines/tasks/JTTask.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/decode/JTIEncoderAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/decode/JTDecoderToJSONAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/alisa/JTConfigurationAlisa.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/base/JTComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/datas/templates/JTServerConfigTemplate.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/managers/popups/JTPopupManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/base/JTTimerTask.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/common/JTLogger.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/context/JTApplicationBootstrap.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/events/JTEventDispatcher.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/datas/mappers/JTClassMapper.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/coroutines/JTIFactory.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/events/JTIEventSignaler.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/managers/JTILayerManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/encode/JTIDecoderAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/layout/JTLayoutManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/pools/JTIFixedPool.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/ui/JTIPanel.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/libs/worker.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/base/JTBuffer.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/protocols/JTAbstractProtocolManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/encode/JTEncodeToByteAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/idleState/JTIdleStateAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/pools/JTCachePool.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/threads/JTIRunnable.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/frames/JTOptimizeFrame.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/interfaces/JTIJumpFrame.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/timers/JTScheduleTimer.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/binders/JTWatchProperty.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/singleton/JTConfiguration.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/common/JTLocalCache.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/base/JTUIComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/common/JTMatrix.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/common/JTPoint.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/common/JTSession.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/coroutines/tasks/JTTaskCounter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/common/JTTextLoader.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/common/JTFunctionUtils.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/coroutines/JTLocker.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/coroutines/tasks/JTFuturePipeline.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/context/JTApplicationContext.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/coroutines/tasks/JTTaskExecutor.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/coroutines/tasks/JTTaskEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/datas/JTDataInfo.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/coroutines/tasks/JTTaskFactory.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/coroutines/tasks/JTCounter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/events/JTEventManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/datas/mappers/JTMapper.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/datas/templates/JTBaseTemplate.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/events/JTCommand.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/datas/mappers/JTAbstractResponseMapping.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/JTIChildOption.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/events/JTEventSignaler.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/JTIEventDispatcher.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/events/JTFunctionManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/JTIOption.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/JTIMapper.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/coroutines/JTITask.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/JTITextLoader.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/JTIApplicationContext.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/managers/JTISceneManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/coroutines/JTILocker.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/coroutines/JTICounter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/coroutines/JTITaskExecutor.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/managers/JTITemplateInfoManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIChannelContext.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIChannelOption.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIChannelState.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIChannelPipeline.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIChannelContextMap.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIProtocol.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIReceivePackage.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIWebsocketChannel.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/networks/JTIChannel.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/pools/JTIPoolObject.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/managers/JTAbstractSceneManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/layout/JTLayout.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/pools/JTIPool.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/pools/JTICachePool.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/ui/JTIScene.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/managers/JTAbstractTemplateManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/interfaces/ui/JTIComponent.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/managers/popups/JTChildPopUp.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/JTChannelPipeline.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/managers/JTAbstractLayerManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/managers/JTDataInfoManager.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/JTHttpChannel.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/JTRceivePackage.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/JTSendPackage.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/JTWebSocketChannel.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/JTChannel.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/base/JTURLLoader.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/base/JTWebSocket.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/decode/JTDecoderToByteAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/JTChannelContext.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/base/JTHttpRequest.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/protocols/JTItemProtocol.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/JTChannelContextAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/encode/JTEncodeToJSONAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/decode/JTAbstractDecoderAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/encode/JTAbstractEncoderAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/protocols/JTAbstractProtocolErrorMessage.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/protocols/JTProtocol.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/pools/JTPool.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/network/contexts/idleState/JTAbstractIdleStateAdapter.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/JTTimerEvent.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/threads/JTThread.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/pools/JTFixedPool.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/JTTimerTool.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/base/JTTimer.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/JTTimeUtils.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/frames/JTJumpFrame.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/frames/JTScheduleFrame.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/interfaces/JTIScheduleFrame.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/frames/JTEnterFrame.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/interfaces/JTIScheduleTimer.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/base/JTPanel.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/interfaces/JTITimeTask.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/interfaces/JTIEnterFrame.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/interfaces/JTITimer.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/binders/JTBindingUtils.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/timers/JTOptimizeTimer.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/time/timers/JTLoopTimer.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/JTLayout.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/JTNotifyUpdate.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/JTResponse.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/alisa/JTSingletonClassAlisa.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/JTDecoratorUtils.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/JTResize.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/base/JTScene.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/alisa/JTClassInjectAlias.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/binders/JTPropertyChanged.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/alisa/JTSingletonPoolAlisa.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/singleton/JTSingletonClass.js"},{"deps":{},"path":"preview-scripts/assets/Script/src/decorators/injects/singleton/JTSingletonPool.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    