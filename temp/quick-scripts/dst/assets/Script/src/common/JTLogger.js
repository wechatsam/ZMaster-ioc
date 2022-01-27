
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/common/JTLogger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e71fcYbynxMP6PWHDu+tolp', 'JTLogger');
// Script/src/common/JTLogger.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTLogger = (function () {
            function JTLogger() {
            }
            JTLogger.info = function () {
                var msgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msgs[_i] = arguments[_i];
                }
                var content = "";
                for (var i = 0; i < msgs.length; i++) {
                    content += msgs[i];
                }
                this.print(this.LOG_INFO, content);
            };
            JTLogger.debug = function () {
                var msgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msgs[_i] = arguments[_i];
                }
                var content = "";
                for (var i = 0; i < msgs.length; i++) {
                    content += JSON.stringify(msgs[i]);
                }
                this.print(this.LOG_DEBUG, content);
            };
            JTLogger.assert = function (flag) {
                var msgs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    msgs[_i - 1] = arguments[_i];
                }
                var content = "";
                for (var i = 0; i < msgs.length; i++) {
                    content += msgs[i];
                }
                if (!flag)
                    throw new Error(content);
            };
            JTLogger.error = function () {
                var msgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    msgs[_i] = arguments[_i];
                }
                var content = "";
                for (var i = 0; i < msgs.length; i++) {
                    content += msgs[i];
                }
                throw new Error(content);
            };
            JTLogger.print = function (type, info) {
                var date = new Date();
                var hour = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                var time = hour + ":" + minutes + ":" + seconds + " >>>> ";
                console.log(type + time + info);
            };
            JTLogger.LOG_INFO = "[INFO] :";
            JTLogger.LOG_ASSET = "[ASSET] :";
            JTLogger.LOG_DEBUG = "[DEBUG] :";
            JTLogger.LOG_ERROR = "[ERROR] :";
            return JTLogger;
        }());
        com.JTLogger = JTLogger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvbW1vblxcSlRMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0EyRFo7SUEzREQsV0FBVSxHQUFHO1FBRVQ7WUFBQTtZQXdEQSxDQUFDO1lBakRpQixhQUFJLEdBQWxCO2dCQUFtQixjQUFPO3FCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87b0JBQVAseUJBQU87O2dCQUV0QixJQUFJLE9BQU8sR0FBVSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxFQUM1QztvQkFDSSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUVhLGNBQUssR0FBbkI7Z0JBQW9CLGNBQU87cUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztvQkFBUCx5QkFBTzs7Z0JBRXZCLElBQUksT0FBTyxHQUFVLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLEVBQzVDO29CQUNJLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QztnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUVhLGVBQU0sR0FBcEIsVUFBcUIsSUFBWTtnQkFBRSxjQUFPO3FCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87b0JBQVAsNkJBQU87O2dCQUV0QyxJQUFJLE9BQU8sR0FBVSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxFQUM1QztvQkFDSSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLENBQUMsSUFBSTtvQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFFYSxjQUFLLEdBQW5CO2dCQUFvQixjQUFPO3FCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87b0JBQVAseUJBQU87O2dCQUV2QixJQUFJLE9BQU8sR0FBVSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxFQUM1QztvQkFDSSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLENBQUM7WUFFYyxjQUFLLEdBQXBCLFVBQXFCLElBQVcsRUFBRSxJQUFXO2dCQUV6QyxJQUFJLElBQUksR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUMzQixJQUFJLElBQUksR0FBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksT0FBTyxHQUFVLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxPQUFPLEdBQVUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLElBQUksR0FBVSxJQUFJLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQTtnQkFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFyRGMsaUJBQVEsR0FBVSxVQUFVLENBQUM7WUFDN0Isa0JBQVMsR0FBVSxXQUFXLENBQUM7WUFDL0Isa0JBQVMsR0FBVSxXQUFXLENBQUM7WUFDL0Isa0JBQVMsR0FBVSxXQUFXLENBQUM7WUFtRGxELGVBQUM7U0F4REQsQUF3REMsSUFBQTtRQXhEWSxZQUFRLFdBd0RwQixDQUFBO0lBQ0wsQ0FBQyxFQTNEUyxHQUFHLEtBQUgsR0FBRyxRQTJEWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb21cclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUTG9nZ2VyIFxyXG4gICAge1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIExPR19JTkZPOnN0cmluZyA9IFwiW0lORk9dIDpcIjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBMT0dfQVNTRVQ6c3RyaW5nID0gXCJbQVNTRVRdIDpcIjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBMT0dfREVCVUc6c3RyaW5nID0gXCJbREVCVUddIDpcIjtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBMT0dfRVJST1I6c3RyaW5nID0gXCJbRVJST1JdIDpcIjtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbmZvKC4uLm1zZ3MpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50OnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IG1zZ3MubGVuZ3RoOyBpICsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ICs9IG1zZ3NbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcmludCh0aGlzLkxPR19JTkZPLCBjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGRlYnVnKC4uLm1zZ3MpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50OnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGk6bnVtYmVyID0gMDsgaSA8IG1zZ3MubGVuZ3RoOyBpICsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ICs9IEpTT04uc3RyaW5naWZ5KG1zZ3NbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHJpbnQodGhpcy5MT0dfREVCVUcsIGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYXNzZXJ0KGZsYWc6Qm9vbGVhbiwgLi4ubXNncyk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQ6c3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgbXNncy5sZW5ndGg7IGkgKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gbXNnc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZsYWcpIHRocm93IG5ldyBFcnJvcihjb250ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZXJyb3IoLi4ubXNncyk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRlbnQ6c3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgbXNncy5sZW5ndGg7IGkgKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gbXNnc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHByaW50KHR5cGU6c3RyaW5nLCBpbmZvOnN0cmluZyk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGRhdGU6RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBob3VyOm51bWJlciA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgdmFyIG1pbnV0ZXM6bnVtYmVyID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRzOm51bWJlciA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgICAgICB2YXIgdGltZTpzdHJpbmcgPSBob3VyICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzICsgXCIgPj4+PiBcIlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlICsgdGltZSArIGluZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=