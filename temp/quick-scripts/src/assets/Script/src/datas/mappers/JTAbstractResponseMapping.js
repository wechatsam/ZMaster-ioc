"use strict";
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