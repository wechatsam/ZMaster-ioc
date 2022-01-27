
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/common/JTTextLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvbW1vblxcSlRUZXh0TG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBOElaO0lBOUlELFdBQVUsR0FBRztRQUVUO1lBZ0NLLHNCQUFZLEdBQVcsRUFBRSxHQUFRO2dCQTdCekIsU0FBSSxHQUFVLElBQUksQ0FBQztnQkFDbkIsV0FBTSxHQUFPLElBQUksQ0FBQztnQkFDbEIsZUFBVSxHQUFlLElBQUksQ0FBQztnQkFDOUIsYUFBUSxHQUFVLEVBQUUsQ0FBQztnQkFDckIsWUFBTyxHQUFTLEVBQUUsQ0FBQztnQkFDbkIsV0FBTSxHQUFPLElBQUksQ0FBQztnQkEwQnRCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHO29CQUFDLE9BQU87Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLENBQUM7WUFFTSwyQkFBSSxHQUFYLFVBQVksR0FBVSxFQUFFLEdBQU87Z0JBRXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRSxD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QVksR0FBVSxRQUFRLENBQUM7WUE2R2xELG1CQUFDO1NBM0lELEFBMklDLElBQUE7UUEzSVksZ0JBQVksZUEySXhCLENBQUE7SUFDTCxDQUFDLEVBOUlTLEdBQUcsS0FBSCxHQUFHLFFBOElaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbVxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRUZXh0TG9hZGVyXHJcbiAgICB7XHJcbiAgICAgICAgIHByaXZhdGUgc3RhdGljIF9kYXRhTWFwOk9iamVjdCA9IHt9O1xyXG4gICAgICAgICBwcml2YXRlIF91cmw6c3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgcHJpdmF0ZSBfY2xhc3M6YW55ID0gbnVsbDtcclxuICAgICAgICAgcHJpdmF0ZSBfdXJsTG9hZGVyOkpUVVJMTG9hZGVyID0gbnVsbDtcclxuICAgICAgICAgcHJpdmF0ZSBfZGF0YU1hcDpPYmplY3QgPSB7fTtcclxuICAgICAgICAgcHJpdmF0ZSBfdmFsdWVzOmFueVtdID0gW107XHJcbiAgICAgICAgIHByaXZhdGUgX2RhdGFzOmFueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAvKipcclxuICAgICAgICAgICog5a2X56ym5Liy6Kej5p6Q5pa55byPXHJcbiAgICAgICAgICAqL1xyXG4gICAgICAgICBwdWJsaWMgc3RhdGljIFBBUlNFX1NUUklORzpzdHJpbmcgPSBcIlN0cmluZ1wiO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAgKiDkuozov5vliLbmtYHop6PmnpDmlrnlvI9cclxuICAgICAgICAgICovXHJcbiAgICAgICAgIHB1YmxpYyBzdGF0aWMgUEFSU0VfQklOQVJZOnN0cmluZyA9IFwiQmluYXJ5XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICAqIFpJUOWMheino+aekOaWueW8j1xyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgcHVibGljIHN0YXRpYyBQQVJTRV9aSVA6c3RyaW5nID0gXCJaaXBcIjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6buY6K6k5Yqg6L295pa55rOVXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIHB1YmxpYyBzdGF0aWMgTE9BRF9ERUZBVUxUOnN0cmluZyA9IFwibG9hZFwiOyBcclxuICAgICAgICAgLyoqXHJcbiAgICAgICAgICAqIOW3suWKoOi9veWujOaIkC3pnIDopoHosIPnlKjop6PmnpDmqKHlvI/ljbPlj69cclxuICAgICAgICAgICovXHJcbiAgICAgICAgIHB1YmxpYyBzdGF0aWMgTE9BREVEX1BBUlNFOnN0cmluZyA9IFwibG9hZGVkXCI7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBjb25zdHJ1Y3Rvcih1cmw/OnN0cmluZywgY2xzPzphbnkpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIGlmICghdXJsIHx8ICFjbHMpcmV0dXJuO1xyXG4gICAgICAgICAgICAgdGhpcy5sb2FkKHVybCwgY2xzKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcHVibGljIGxvYWQodXJsOnN0cmluZywgY2xzOmFueSk6dm9pZFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGFzcyA9IGNscztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VybExvYWRlciA9IG5ldyBKVFVSTExvYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXJsTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoSlRVUkxMb2FkZXIuRVJST1IsIHRoaXMub25sb2FkRXJyb3IsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXJsTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoSlRVUkxMb2FkZXIuQ09NUExFVEUsIHRoaXMub25sb2FkQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXJsTG9hZGVyLnNlbmQodXJsLCBudWxsLCBcImdldFwiLCBKVFVSTExvYWRlci5CVUZGRVIpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBwdWJsaWMgcGFyc2VaaXAoZGF0YTphbnksIGNsczphbnkpOnZvaWRcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9jbGFzcyA9IGNscztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgcHVibGljIHBhcnNlQmluYXJ5KGRhdGE6YW55LCBjbHM6YW55KTp2b2lkXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xhc3MgPSBjbHM7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHB1YmxpYyBwYXJzZVN0cihkYXRhOnN0cmluZywgY2xzOmFueSk6dm9pZFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFzID0gZGF0YTtcclxuICAgICAgICAgICAgdGhpcy5fY2xhc3MgPSBjbHM7XHJcbiAgICAgICAgICAgIGxldCBsaXN0OnN0cmluZ1tdID0gZGF0YS5zcGxpdCgnXFxuJykuam9pbihcIlwiKS5zcGxpdChcIlxcclwiKTtcclxuICAgICAgICAgICAgbGV0IGhlYWQ6c3RyaW5nID0gbGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICBsZXQgcHJvcGVydHlzOnN0cmluZ1tdID0gaGVhZC5zcGxpdCgnXFx0Jyk7XHJcbiAgICAgICAgICAgIGxldCBrZXlzOnN0cmluZ1tdID0gbnVsbDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykvL+i1i+WAvFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZTpzdHJpbmcgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlczpzdHJpbmdbXSA9IGxpbmUuc3BsaXQoXCJcXHRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA8IHByb3BlcnR5cy5sZW5ndGgpIGNvbnRpbnVlOyAvL+a4hemZpOWwvumDqOepuueZveaVsOaNrlxyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlOkpUQmFzZVRlbXBsYXRlID0gbmV3IHRoaXMuX2NsYXNzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleXMpa2V5cyA9IE9iamVjdC5rZXlzKHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGo6bnVtYmVyID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspLy/pqozor4HlsZ7mgKflgLzmmK/lkKbljLnphY1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHk6c3RyaW5nID0gcHJvcGVydHlzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXg6bnVtYmVyID0ga2V5cy5pbmRleE9mKHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKVExvZ2dlci5pbmZvKFwiW0pUVGV4dExvYWRlci5wYXJzZVN0cl0gY2xzIFwiICsgIHRoaXMuX2NsYXNzICsgXCIgdGVtcGxhdGUgY2FudCBmaW5kIHRoZSBrZXk6ICBcIiArIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlOmFueSA9IHZhbHVlc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHlwZW9mIHRlbXBsYXRlW3Byb3BlcnR5XSA9PSAnbnVtYmVyJzogLy/mlK/mjIHmlbDlgLznsbvlnotcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgID0gTnVtYmVyKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB2YWx1ZS5pbmRleE9mKFwie1wiKSAhPSAtMSA6IC8v5pSv5oyBSlNPTuexu+Wei1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09IFwiaWRcIikgXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kYXRhTWFwW3ZhbHVlXSA9IHRlbXBsYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5lbmRGaWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcHJpdmF0ZSBvbmxvYWRDb21wbGV0ZShkYXRhOmFueSk6dm9pZFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyOkpUQnVmZmVyID0gbmV3IEpUQnVmZmVyKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyLnBvcyA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29udGVudDpzdHJpbmcgPSBidWZmZXIucmVhZFVURkJ5dGVzKGJ1ZmZlci5ieXRlc0F2YWlsYWJsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlU3RyKGNvbnRlbnQsIHRoaXMuX2NsYXNzKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcHJpdmF0ZSBvbmxvYWRFcnJvcihkYXRhOmFueSk6dm9pZFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIEpUTG9nZ2VyLmVycm9yKFwiW0pUVGV4dExvYWRlci5sb2FkXSAgbG9hZCB0ZXh0IGRhdGEgZXJyb3IhIHRoZSB1cmwgOiBcIiArIHRoaXMuX3VybCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHB1YmxpYyB0b1ZhbHVlczxUIGV4dGVuZHMgSlRCYXNlVGVtcGxhdGU+KCk6VFtdXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgIGxldCBsaXN0OlRbXSA9IFtdO1xyXG4gICAgICAgICAgICAgbGV0IHRvdGFsQ291bnQ6bnVtYmVyID0gdGhpcy5fdmFsdWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRvdGFsQ291bnQ7IGkrKylcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBsZXQgdGVtcGxhdGU6VCA9IHRoaXMuX3ZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICBsaXN0LnB1c2godGVtcGxhdGUpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHB1YmxpYyB0b1ZhbHVlPFQgZXh0ZW5kcyBKVEJhc2VUZW1wbGF0ZT4oa2V5OnN0cmluZyk6VFxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFNYXBba2V5XTtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==