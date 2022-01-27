
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/JTResponse.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXEpUUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLQSxJQUFPLEdBQUcsQ0EwQ1Q7SUExQ0QsV0FBTyxHQUFHO1FBUVQsU0FBZ0IsUUFBUSxDQUFDLFFBQWUsRUFBRSxVQUF5QjtZQUF6QiwyQkFBQSxFQUFBLGlCQUF5QjtZQUVsRSxPQUFPLFVBQVUsTUFBVSxFQUFFLFFBQWUsRUFBRSxVQUFlO2dCQUU1RCxJQUFJLFFBQVEsR0FBbUIsTUFBTSxDQUFDO2dCQUV0QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUE7UUFDRixDQUFDO1FBUmUsWUFBUSxXQVF2QixDQUFBO1FBZ0JELFNBQWdCLGVBQWUsQ0FBQyxRQUFlLEVBQUUsYUFBaUIsRUFBRSxjQUE4QixFQUFFLFVBQXlCO1lBQXpELCtCQUFBLEVBQUEsc0JBQThCO1lBQUUsMkJBQUEsRUFBQSxpQkFBeUI7WUFFNUgsT0FBTyxVQUFVLE1BQVUsRUFBRSxRQUFlLEVBQUUsVUFBZTtnQkFFNUQsSUFBSSxRQUFRLEdBQW1CLE1BQU0sQ0FBQztnQkFFdEMseUJBQXlCLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUNyRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUE7UUFDRixDQUFDO1FBVGUsbUJBQWUsa0JBUzlCLENBQUE7SUFDRixDQUFDLEVBMUNNLEdBQUcsS0FBSCxHQUFHLFFBMENUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKlxyXG4qIG5hbWU7XHJcbiovXHJcbm1vZHVsZSBjb20gXHJcbntcclxuXHQvKipcclxuXHQgKiDlj6/og73nlLHkuo7oo4XppbDlmajmqKHlvI/kuIvvvIzmj5DliY3ms6jlhaXmlrnms5XvvIzmiYDku6Xkvb/nlKjpobnnm67nmoTpnZnmgIHlj5jph4/ml6Dms5Xkvb/nlKjvvIzmsqHmnInmiavmj4/liLBcclxuXHQgKiDor7fmsYLlk43lupQg5Y+q5ZON5bqU5YWo5bGA5LqL5Lu2SlRGdW5jdGlvbk1hbmFnZXJcclxuXHQgKiBAcGFyYW0gcHJvdG9jb2wg5Y2P6K6u5Y+377yM55uu5YmN5Y+q5pSv5oyB6ZW/6L+e5o6l6K+35rGCLS0tV2ViU29ja2V0XHJcblx0ICogQHJldHVybnMgXHJcblx0ICovXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlKHByb3RvY29sOm51bWJlciwgd2FpdGluZ2Jhcjpib29sZWFuID0gdHJ1ZSk6RnVuY3Rpb25cclxuICAgIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OmFueSwgcHJvcGVydHk6c3RyaW5nLCBkZXNjcmlwdGVyPzphbnkpIFxyXG4gICAgICAgIHtcclxuXHRcdFx0bGV0IHNpZ25hbGVyOkpURXZlbnRTaWduYWxlciA9IHRhcmdldDtcclxuXHRcdC8vZ2V0IOaWueazleWPluS7o1x0Ly8gc2lnbmFsZXIuX19mdW5NYXAgPSB7fTsvL+eUseS6juijhemlsOWZqOazqOWFpeeahOWvueixoeaYr+WNleS+i+aXtu+8jOatpOaWueazleeUn+aViO+8iOijhemJk+WZqOeahOWvueixoeacieWkmuS4quaXtu+8jOacqua1i+ivle+8ieWboOS4uuivpeWvueixoeW5tuacquWunuS+i+WMlu+8jOijhemlsOWZqFxyXG5cdFx0XHRzaWduYWxlci5yZWdpc3RlckZ1bmN0aW9uKHByb3RvY29sLCB0YXJnZXRbcHJvcGVydHldLCB0YXJnZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogIFxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBwcm90b2NvbCBcclxuXHQgKiBAcmV0dXJucyBcclxuXHQgKi9cclxuXHQvKipcclxuXHQgKiDor7fmsYLlk43lupQg5Y+q5ZON5bqU5YWo5bGA5LqL5Lu2SlRGdW5jdGlvbk1hbmFnZXJcclxuXHQgKiBAcGFyYW0gcHJvdG9jb2wg5Y2P6K6u5Y+377yM55uu5YmN5Y+q5pSv5oyB6ZW/6L+e5o6l6K+35rGCLS0tV2ViU29ja2V0XHJcblx0ICogQHBhcmFtIF9fbWFwcGVyQ2xhc3Mg5pig5bCE57uT5p6c55qE5pWw5o2uQ2xhc3PnsbtcclxuXHQgKiBAcGFyYW0gY3JlYXRlRnJvbVBvb2wgdHJ1ZSDmmK/lkKbnlLHlr7nosaHmsaDliJvlu7rvvIzlpoLmnpznlLHlr7nosaHmsaDliJvlu7rvvIzlvZPliY3lh73mlbDmiafooYzlrozlsIboh6rliqjmuIXnqbrlm57mlLbvvIxmYWxzZSDliJnnlLFuZXcg5Yib5bu6XHJcblx0ICogQHBhcmFtIHdhaXRpbmdiYXIgXHJcblx0ICogQHJldHVybnMgXHJcblx0ICovXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlTWFwcGluZyhwcm90b2NvbDpudW1iZXIsIF9fbWFwcGVyQ2xhc3M6YW55LCBjcmVhdGVGcm9tUG9vbDpib29sZWFuID0gZmFsc2UsIHdhaXRpbmdiYXI6Ym9vbGVhbiA9IHRydWUpOkZ1bmN0aW9uXHJcblx0e1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6YW55LCBwcm9wZXJ0eTpzdHJpbmcsIGRlc2NyaXB0ZXI/OmFueSkgXHJcblx0XHR7XHJcblx0XHRcdGxldCBzaWduYWxlcjpKVEV2ZW50U2lnbmFsZXIgPSB0YXJnZXQ7XHJcblx0XHRcdFx0Ly9nZXQg5pa55rOV5Y+W5LujLy8gc2lnbmFsZXIuX19mdW5NYXAgPSB7fTsvL+eUseS6juijhemlsOWZqOazqOWFpeeahOWvueixoeaYr+WNleS+i+aXtu+8jOatpOaWueazleeUn+aViO+8iOijhemJk+WZqOeahOWvueixoeacieWkmuS4quaXtu+8jOacqua1i+ivle+8ieWboOS4uuivpeWvueixoeW5tuacquWunuS+i+WMlu+8jOijhemlsOWZqFxyXG5cdFx0XHRKVEFic3RyYWN0UmVzcG9uc2VNYXBwaW5nW1wibWFwcGluZ01hcFwiXVtwcm90b2NvbF0gPSBuZXcgSlRDbGFzc01hcHBlcihfX21hcHBlckNsYXNzLCBjcmVhdGVGcm9tUG9vbCk7IC8v5rOo5YWlTUFQUEVSIOaYoOWwhFxyXG5cdFx0XHRzaWduYWxlci5yZWdpc3RlckZ1bmN0aW9uKHByb3RvY29sLCB0YXJnZXRbcHJvcGVydHldLCB0YXJnZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0=