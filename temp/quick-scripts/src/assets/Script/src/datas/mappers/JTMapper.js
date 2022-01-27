"use strict";
cc._RF.push(module, '23592mMFLFNlYrtXOCvEXmM', 'JTMapper');
// Script/src/datas/mappers/JTMapper.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTMapper = (function () {
            function JTMapper() {
            }
            JTMapper.prototype.clone = function () {
                var dataInfo = new JTMapper();
                dataInfo.update(this);
                return this;
            };
            JTMapper.prototype.update = function (data) {
                var keys = Object.keys(data);
                var obj = this;
                var l = keys.length;
                for (var i = 0; i < l; i++) {
                    var key = keys[i];
                    if (obj.hasOwnProperty(key)) {
                        this[key] = data[key];
                    }
                }
                return this;
            };
            JTMapper.prototype.recycle = function () { };
            ;
            return JTMapper;
        }());
        com.JTMapper = JTMapper;
    })(com || (com = {}));
});

cc._RF.pop();