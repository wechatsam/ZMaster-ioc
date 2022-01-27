
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/datas/mappers/JTAbstractResponseMapping.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd64e7X7otFC2KUTVsHUyTmY', 'JTAbstractResponseMapping');
// Script/src/datas/mappers/JTAbstractResponseMapping.ts

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
        var JTAbstractResponseMapping = (function (_super) {
            __extends(JTAbstractResponseMapping, _super);
            function JTAbstractResponseMapping() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            JTAbstractResponseMapping.prototype.build = function () {
            };
            JTAbstractResponseMapping.prototype.registerToMapping = function (protocol, __mapper) {
                JTAbstractResponseMapping.mappingMap[protocol] = __mapper;
            };
            JTAbstractResponseMapping.prototype.registerMapper = function (protocol, _class, createFromPool) {
                if (createFromPool === void 0) { createFromPool = false; }
                this.registerMapper(protocol, new JTClassMapper(_class, createFromPool));
            };
            JTAbstractResponseMapping.prototype.getMapper = function (protocol) {
                return JTAbstractResponseMapping.mappingMap[protocol];
            };
            JTAbstractResponseMapping.prototype.create = function (protocol, data) {
                var __classMapper = JTAbstractResponseMapping.mappingMap[protocol];
                var dataInfo = __classMapper ? __classMapper.create() : null;
                if (dataInfo)
                    dataInfo.update(data);
                return dataInfo ? dataInfo : data;
            };
            JTAbstractResponseMapping.mappingMap = {};
            return JTAbstractResponseMapping;
        }(JTApplicationContext));
        com.JTAbstractResponseMapping = JTAbstractResponseMapping;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRhdGFzXFxtYXBwZXJzXFxKVEFic3RyYWN0UmVzcG9uc2VNYXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQW1DWjtJQW5DRCxXQUFVLEdBQUc7UUFFVDtZQUF3RCw2Q0FBb0I7WUFBNUU7O1lBZ0NBLENBQUM7WUE5QlUseUNBQUssR0FBWjtZQUdBLENBQUM7WUFLTSxxREFBaUIsR0FBeEIsVUFBa0QsUUFBZSxFQUFFLFFBQVU7Z0JBRXpFLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDOUQsQ0FBQztZQUVNLGtEQUFjLEdBQXJCLFVBQXNCLFFBQWUsRUFBRSxNQUFVLEVBQUUsY0FBOEI7Z0JBQTlCLCtCQUFBLEVBQUEsc0JBQThCO2dCQUU3RSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQTtZQUM1RSxDQUFDO1lBRU0sNkNBQVMsR0FBaEIsVUFBMEMsUUFBZTtnQkFFckQsT0FBTyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsQ0FBQztZQUVNLDBDQUFNLEdBQWIsVUFBYyxRQUFlLEVBQUUsSUFBUTtnQkFFbkMsSUFBSSxhQUFhLEdBQWlCLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakYsSUFBSSxRQUFRLEdBQWEsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdkUsSUFBSSxRQUFRO29CQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN0QyxDQUFDO1lBeEJnQixvQ0FBVSxHQUE0QixFQUFFLENBQUM7WUF5QjlELGdDQUFDO1NBaENELEFBZ0NDLENBaEN1RCxvQkFBb0IsR0FnQzNFO1FBaENxQiw2QkFBeUIsNEJBZ0M5QyxDQUFBO0lBQ0wsQ0FBQyxFQW5DUyxHQUFHLEtBQUgsR0FBRyxRQW1DWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKVEFic3RyYWN0UmVzcG9uc2VNYXBwaW5nIGV4dGVuZHMgSlRBcHBsaWNhdGlvbkNvbnRleHRcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgYnVpbGQoKTogdm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpYyBtYXBwaW5nTWFwOntbcHJvdG9jb2w6bnVtYmVyXTogYW55fSA9IHt9O1xyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHJlZ2lzdGVyVG9NYXBwaW5nPFQgZXh0ZW5kcyBKVENsYXNzTWFwcGVyPihwcm90b2NvbDpudW1iZXIsIF9fbWFwcGVyOlQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEpUQWJzdHJhY3RSZXNwb25zZU1hcHBpbmcubWFwcGluZ01hcFtwcm90b2NvbF0gPSBfX21hcHBlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZWdpc3Rlck1hcHBlcihwcm90b2NvbDpudW1iZXIsIF9jbGFzczphbnksIGNyZWF0ZUZyb21Qb29sOmJvb2xlYW4gPSBmYWxzZSk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3Rlck1hcHBlcihwcm90b2NvbCwgbmV3IEpUQ2xhc3NNYXBwZXIoX2NsYXNzLCBjcmVhdGVGcm9tUG9vbCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0TWFwcGVyPFQgZXh0ZW5kcyBKVENsYXNzTWFwcGVyPihwcm90b2NvbDpudW1iZXIpOlRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBKVEFic3RyYWN0UmVzcG9uc2VNYXBwaW5nLm1hcHBpbmdNYXBbcHJvdG9jb2xdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGNyZWF0ZShwcm90b2NvbDpudW1iZXIsIGRhdGE6YW55KTphbnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBfX2NsYXNzTWFwcGVyOkpUQ2xhc3NNYXBwZXIgPSBKVEFic3RyYWN0UmVzcG9uc2VNYXBwaW5nLm1hcHBpbmdNYXBbcHJvdG9jb2xdO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUluZm86SlRJTWFwcGVyID0gX19jbGFzc01hcHBlciA/IF9fY2xhc3NNYXBwZXIuY3JlYXRlKCkgOiBudWxsO1xyXG4gICAgICAgICAgICBpZiAoZGF0YUluZm8pZGF0YUluZm8udXBkYXRlKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YUluZm8gPyBkYXRhSW5mbyA6IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==