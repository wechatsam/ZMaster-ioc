
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/common/JTFunctionUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95d2cEnvLtLtpt36ytXPZB1', 'JTFunctionUtils');
// Script/src/common/JTFunctionUtils.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function execute(key, args) {
            com.JTFunctionManager.execute(key, args);
        }
        com.execute = execute;
        function dispatchEvent(key, args) {
            com.JTEventManager.dispatchEvent(key, args);
        }
        com.dispatchEvent = dispatchEvent;
        function info() {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            com.JTLogger.info(content);
        }
        com.info = info;
        function error() {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            com.JTLogger.error(content);
        }
        com.error = error;
        function debug() {
            var msgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msgs[_i] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            com.JTLogger.debug(content);
        }
        com.debug = debug;
        function assets(flag) {
            var msgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                msgs[_i - 1] = arguments[_i];
            }
            var content = "";
            for (var i = 0; i < msgs.length; i++) {
                content += msgs[i];
            }
            com.JTLogger.assert(flag, content);
        }
        com.assets = assets;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGNvbW1vblxcSlRGdW5jdGlvblV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBb0RaO0lBcERELFdBQVUsR0FBRztRQUVSLFNBQWdCLE9BQU8sQ0FBQyxHQUFVLEVBQUUsSUFBWTtZQUUzQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBSGUsV0FBTyxVQUd0QixDQUFBO1FBRUQsU0FBZ0IsYUFBYSxDQUFDLEdBQVUsRUFBRSxJQUFTO1lBRTlDLEdBQUcsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBSGUsaUJBQWEsZ0JBRzVCLENBQUE7UUFFRCxTQUFnQixJQUFJO1lBQUMsY0FBTztpQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO2dCQUFQLHlCQUFPOztZQUV2QixJQUFJLE9BQU8sR0FBVSxFQUFFLENBQUM7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFHLEVBQzVDO2dCQUNLLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkI7WUFDRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBUmUsUUFBSSxPQVFuQixDQUFBO1FBRUQsU0FBZ0IsS0FBSztZQUFDLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFFeEIsSUFBSSxPQUFPLEdBQVUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxFQUM1QztnQkFDSyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQVJlLFNBQUssUUFRcEIsQ0FBQTtRQUVELFNBQWdCLEtBQUs7WUFBQyxjQUFPO2lCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0JBQVAseUJBQU87O1lBRXhCLElBQUksT0FBTyxHQUFVLEVBQUUsQ0FBQztZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUcsRUFDNUM7Z0JBQ0ssT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QjtZQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFSZSxTQUFLLFFBUXBCLENBQUE7UUFHRCxTQUFnQixNQUFNLENBQUMsSUFBWTtZQUFFLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCw2QkFBTzs7WUFFdkMsSUFBSSxPQUFPLEdBQVUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRyxFQUM1QztnQkFDSyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFSZSxVQUFNLFNBUXJCLENBQUE7SUFDTixDQUFDLEVBcERTLEdBQUcsS0FBSCxHQUFHLFFBb0RaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgIGV4cG9ydCBmdW5jdGlvbiBleGVjdXRlKGtleTpzdHJpbmcsIGFyZ3M/OnN0cmluZyk6dm9pZFxyXG4gICAgIHtcclxuICAgICAgICAgIGNvbS5KVEZ1bmN0aW9uTWFuYWdlci5leGVjdXRlKGtleSwgYXJncyk7XHJcbiAgICAgfVxyXG5cclxuICAgICBleHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChrZXk6c3RyaW5nLCBhcmdzPzphbnkpOnZvaWRcclxuICAgICB7XHJcbiAgICAgICAgICBjb20uSlRFdmVudE1hbmFnZXIuZGlzcGF0Y2hFdmVudChrZXksIGFyZ3MpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGluZm8oLi4ubXNncyk6dm9pZFxyXG4gICAgIHtcclxuICAgICAgICAgIGxldCBjb250ZW50OnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICBmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBtc2dzLmxlbmd0aDsgaSArKylcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgY29udGVudCArPSBtc2dzW2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29tLkpUTG9nZ2VyLmluZm8oY29udGVudCk7XHJcbiAgICAgfVxyXG5cclxuICAgICBleHBvcnQgZnVuY3Rpb24gZXJyb3IoLi4ubXNncyk6dm9pZFxyXG4gICAgIHtcclxuICAgICAgICAgIGxldCBjb250ZW50OnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICBmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBtc2dzLmxlbmd0aDsgaSArKylcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgY29udGVudCArPSBtc2dzW2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29tLkpUTG9nZ2VyLmVycm9yKGNvbnRlbnQpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZXhwb3J0IGZ1bmN0aW9uIGRlYnVnKC4uLm1zZ3MpOnZvaWRcclxuICAgICB7XHJcbiAgICAgICAgICBsZXQgY29udGVudDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgZm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgbXNncy5sZW5ndGg7IGkgKyspXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgIGNvbnRlbnQgKz0gbXNnc1tpXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbS5KVExvZ2dlci5kZWJ1Zyhjb250ZW50KTtcclxuICAgICB9XHJcblxyXG5cclxuICAgICBleHBvcnQgZnVuY3Rpb24gYXNzZXRzKGZsYWc6Qm9vbGVhbiwgLi4ubXNncyk6dm9pZFxyXG4gICAgIHtcclxuICAgICAgICAgIGxldCBjb250ZW50OnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICBmb3IgKHZhciBpOm51bWJlciA9IDA7IGkgPCBtc2dzLmxlbmd0aDsgaSArKylcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgY29udGVudCArPSBtc2dzW2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29tLkpUTG9nZ2VyLmFzc2VydChmbGFnLGNvbnRlbnQpO1xyXG4gICAgIH1cclxufVxyXG4iXX0=