"use strict";
cc._RF.push(module, 'bcd24RadrhAsIBgl7qoxwW6', 'JTResponse');
// Script/src/decorators/injects/JTResponse.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function Response(protocol, waitingbar) {
            if (waitingbar === void 0) { waitingbar = true; }
            return function (target, property, descripter) {
                var signaler = target;
                signaler.registerFunction(protocol, target[property], target);
            };
        }
        com.Response = Response;
        function ResponseMapping(protocol, __mapperClass, createFromPool, waitingbar) {
            if (createFromPool === void 0) { createFromPool = false; }
            if (waitingbar === void 0) { waitingbar = true; }
            return function (target, property, descripter) {
                var signaler = target;
                JTAbstractResponseMapping["mappingMap"][protocol] = new JTClassMapper(__mapperClass, createFromPool);
                signaler.registerFunction(protocol, target[property], target);
            };
        }
        com.ResponseMapping = ResponseMapping;
    })(com || (com = {}));
});

cc._RF.pop();