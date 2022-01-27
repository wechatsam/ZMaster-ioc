"use strict";
///<reference path="../../run/JTClassExtension.ts"/>
var com;
(function (com) {
    class JTResponseMapping extends com.JTClassExtension {
        build() {
        }
        registerToMapping(protocol, __mapper) {
            JTResponseMapping.mappingMap[protocol] = __mapper;
        }
        registerMapper(protocol, _class, createFromPool = false) {
            this.registerMapper(protocol, new com.JTClassMapper(_class, createFromPool));
        }
        getMapper(protocol) {
            return JTResponseMapping.mappingMap[protocol];
        }
        create(protocol, data) {
            let __classMapper = JTResponseMapping.mappingMap[protocol];
            let dataInfo = __classMapper ? __classMapper.create() : null;
            dataInfo.update(data);
            return dataInfo;
        }
    }
    JTResponseMapping.mappingMap = {};
    com.JTResponseMapping = JTResponseMapping;
})(com || (com = {}));
