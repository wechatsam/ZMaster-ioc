
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/JTResize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '043bdQa2/pJ/ZfQjR5BWFNt', 'JTResize');
// Script/src/decorators/injects/JTResize.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTResizeEvent = (function () {
            function JTResizeEvent() {
            }
            Object.defineProperty(JTResizeEvent, "className", {
                get: function () {
                    return this.___classNames;
                },
                enumerable: false,
                configurable: true
            });
            JTResizeEvent.indexOf = function (___className) {
                return this.___classNames.indexOf(___className);
            };
            JTResizeEvent.registerResize = function (target) {
                var className = target.className;
                var index = JTResizeEvent.indexOf(className);
                if (index != -1) {
                    target.addEventListener(JTResizeEvent.RESIZE, target.onResizeHandler, target);
                }
            };
            JTResizeEvent.RESIZE = "resize";
            JTResizeEvent.___classNames = [];
            return JTResizeEvent;
        }());
        com.JTResizeEvent = JTResizeEvent;
        function ResizeEvent() {
            return function (target) {
                JTDecoratorUtils.registerClassAlias(target, "name");
                JTResizeEvent.className.push(target.name);
            };
        }
        com.ResizeEvent = ResizeEvent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXEpUUmVzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBTyxHQUFHLENBMENUO0lBMUNELFdBQU8sR0FBRztRQUVOO1lBQUE7WUF5QkgsQ0FBQztZQW5CQSxzQkFBa0IsMEJBQVM7cUJBQTNCO29CQUVDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDM0IsQ0FBQzs7O2VBQUE7WUFFYSxxQkFBTyxHQUFyQixVQUFzQixZQUFtQjtnQkFFeEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBRWEsNEJBQWMsR0FBNUIsVUFBNkIsTUFBbUI7Z0JBRS9DLElBQUksU0FBUyxHQUFVLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLElBQUksS0FBSyxHQUFVLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BELElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUNmO29CQUNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzlFO1lBQ0YsQ0FBQztZQXRCYSxvQkFBTSxHQUFVLFFBQVEsQ0FBQztZQUV4QiwyQkFBYSxHQUFTLEVBQUUsQ0FBQTtZQXFCeEMsb0JBQUM7U0F6QkUsQUF5QkYsSUFBQTtRQXpCZSxpQkFBYSxnQkF5QjVCLENBQUE7UUFPQSxTQUFnQixXQUFXO1lBRTFCLE9BQU8sVUFBVSxNQUFVO2dCQUUzQixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUE7Z0JBQ25ELGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUE7UUFDRixDQUFDO1FBUGUsZUFBVyxjQU8xQixDQUFBO0lBQ0gsQ0FBQyxFQTFDTSxHQUFHLEtBQUgsR0FBRyxRQTBDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLypcclxuKiBuYW1lO1xyXG4qL1xyXG5tb2R1bGUgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRSZXNpemVFdmVudFxyXG4gICAge1xyXG5cdFx0cHVibGljIHN0YXRpYyBSRVNJWkU6c3RyaW5nID0gXCJyZXNpemVcIjtcclxuXHJcblx0XHRwcml2YXRlIHN0YXRpYyBfX19jbGFzc05hbWVzOmFueVtdID0gW11cclxuXHJcblx0XHRwdWJsaWMgc3RhdGljIGdldCBjbGFzc05hbWUoKTpzdHJpbmdbXVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fX19jbGFzc05hbWVzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBzdGF0aWMgaW5kZXhPZihfX19jbGFzc05hbWU6c3RyaW5nKTpudW1iZXJcclxuXHRcdHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX19fY2xhc3NOYW1lcy5pbmRleE9mKF9fX2NsYXNzTmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cHVibGljIHN0YXRpYyByZWdpc3RlclJlc2l6ZSh0YXJnZXQ6SlRJQ29tcG9uZW50KTp2b2lkXHJcblx0XHR7XHJcblx0XHRcdGxldCBjbGFzc05hbWU6c3RyaW5nID0gdGFyZ2V0LmNsYXNzTmFtZTtcclxuXHRcdFx0bGV0IGluZGV4Om51bWJlciA9IEpUUmVzaXplRXZlbnQuaW5kZXhPZihjbGFzc05hbWUpO1xyXG5cdFx0XHRpZiAoaW5kZXggIT0gLTEpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihKVFJlc2l6ZUV2ZW50LlJFU0laRSwgdGFyZ2V0Lm9uUmVzaXplSGFuZGxlciwgdGFyZ2V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvKipcclxuXHQgKiDoh6rliqjpgILphY1cclxuXHQgKiDkvJrmoLnmja7nqpflj6PlpKflsI/lj5jljJbogIzlj5jljJZcclxuXHQgKiBAcGFyYW0gb25jZSDmmK/lkKblj6rmiafooYzkuIDmrKFcclxuXHQgKiBAcmV0dXJucyBcclxuXHQgKi9cclxuXHQgZXhwb3J0IGZ1bmN0aW9uIFJlc2l6ZUV2ZW50KCk6RnVuY3Rpb25cclxuXHQge1xyXG5cdFx0IHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OmFueSkgXHJcblx0XHQge1xyXG5cdFx0XHRKVERlY29yYXRvclV0aWxzLnJlZ2lzdGVyQ2xhc3NBbGlhcyh0YXJnZXQsIFwibmFtZVwiKVxyXG5cdFx0XHRKVFJlc2l6ZUV2ZW50LmNsYXNzTmFtZS5wdXNoKHRhcmdldC5uYW1lKTtcclxuXHRcdCB9XHJcblx0IH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0=