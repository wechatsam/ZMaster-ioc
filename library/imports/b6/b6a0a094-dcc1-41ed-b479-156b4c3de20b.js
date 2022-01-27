"use strict";
cc._RF.push(module, 'b6a0aCU3MFB7bR5FWtMPeIL', 'JTTextLoader');
// Script/src/common/JTTextLoader.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTTextLoader = (function () {
            function JTTextLoader(url, cls) {
                this._url = null;
                this._class = null;
                this._urlLoader = null;
                this._dataMap = {};
                this._values = [];
                this._datas = null;
                if (!url || !cls)
                    return;
                this.load(url, cls);
            }
            JTTextLoader.prototype.load = function (url, cls) {
                this._url = url;
                this._class = cls;
                this._urlLoader = new JTURLLoader();
                this._urlLoader.addEventListener(JTURLLoader.ERROR, this.onloadError, this);
                this._urlLoader.addEventListener(JTURLLoader.COMPLETE, this.onloadComplete, this);
                this._urlLoader.send(url, null, "get", JTURLLoader.BUFFER);
            };
            JTTextLoader.prototype.parseZip = function (data, cls) {
                this._class = cls;
            };
            JTTextLoader.prototype.parseBinary = function (data, cls) {
                this._class = cls;
            };
            JTTextLoader.prototype.parseStr = function (data, cls) {
                this._datas = data;
                this._class = cls;
                var list = data.split('\n').join("").split("\r");
                var head = list.shift();
                var propertys = head.split('\t');
                var keys = null;
                for (var i = 0; i < list.length; i++) {
                    var line = list[i];
                    var values = line.split("\t");
                    if (values.length < propertys.length)
                        continue;
                    var template = new this._class();
                    if (!keys)
                        keys = Object.keys(template);
                    for (var j = 0; j < keys.length; j++) {
                        var property = propertys[j];
                        if (i == 0) {
                            var index = keys.indexOf(property);
                            if (index == -1) {
                                JTLogger.info("[JTTextLoader.parseStr] cls " + this._class + " template cant find the key:  " + property);
                                continue;
                            }
                        }
                        var value = values[j];
                        switch (true) {
                            case typeof template[property] == 'number':
                                {
                                    value = Number(value);
                                    break;
                                }
                            case value.indexOf("{") != -1:
                                {
                                    value = JSON.parse(value);
                                    break;
                                }
                        }
                        template[property] = value;
                        if (property == "id") {
                            this._dataMap[value] = template;
                            this._values = value;
                        }
                    }
                    template.endFill();
                }
            };
            JTTextLoader.prototype.onloadComplete = function (data) {
                var buffer = new JTBuffer(data);
                buffer.pos = 0;
                var content = buffer.readUTFBytes(buffer.bytesAvailable);
                this.parseStr(content, this._class);
            };
            JTTextLoader.prototype.onloadError = function (data) {
                JTLogger.error("[JTTextLoader.load]  load text data error! the url : " + this._url);
            };
            JTTextLoader.prototype.toValues = function () {
                var list = [];
                var totalCount = this._values.length;
                for (var i = 0; i < totalCount; i++) {
                    var template = this._values[i];
                    list.push(template);
                }
                return list;
            };
            JTTextLoader.prototype.toValue = function (key) {
                return this._dataMap[key];
            };
            JTTextLoader._dataMap = {};
            JTTextLoader.PARSE_STRING = "String";
            JTTextLoader.PARSE_BINARY = "Binary";
            JTTextLoader.PARSE_ZIP = "Zip";
            JTTextLoader.LOAD_DEFAULT = "load";
            JTTextLoader.LOADED_PARSE = "loaded";
            return JTTextLoader;
        }());
        com.JTTextLoader = JTTextLoader;
    })(com || (com = {}));
});

cc._RF.pop();