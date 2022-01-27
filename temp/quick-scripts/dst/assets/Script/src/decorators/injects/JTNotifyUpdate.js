
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/JTNotifyUpdate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb72527a7lLKr4tsahD5beV', 'JTNotifyUpdate');
// Script/src/decorators/injects/JTNotifyUpdate.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function NotifyUpdate(eventType) {
            return function (target, property, descripter) {
                var signaler = target;
                signaler.addEventListener(eventType, target[property], target);
            };
        }
        com.NotifyUpdate = NotifyUpdate;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXEpUTm90aWZ5VXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBTyxHQUFHLENBa0JUO0lBbEJELFdBQU8sR0FBRztRQVNULFNBQWdCLFlBQVksQ0FBQyxTQUFnQjtZQUU1QyxPQUFPLFVBQVUsTUFBVSxFQUFFLFFBQWUsRUFBRSxVQUFlO2dCQUUzRCxJQUFJLFFBQVEsR0FBbUIsTUFBTSxDQUFDO2dCQUV0QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRSxDQUFDLENBQUE7UUFDRixDQUFDO1FBUmUsZ0JBQVksZUFRM0IsQ0FBQTtJQUNGLENBQUMsRUFsQk0sR0FBRyxLQUFILEdBQUcsUUFrQlQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qXHJcbiogbmFtZTtcclxuKi9cclxubW9kdWxlIGNvbSBcclxue1xyXG4gXHJcblx0LyoqXHJcblx0ICog5LiOSlRSZXNwb25zZeS4gOagt+WPr+iDveeUseS6juijhemlsOWZqOaooeW8j+S4i++8jOaPkOWJjeazqOWFpeaWueazle+8jOaJgOS7peS9v+eUqOmhueebrueahOmdmeaAgeWPmOmHj+aXoOazleS9v+eUqO+8jOayoeacieaJq+aPj+WIsFxyXG5cdCAqIOmAmuefpeabtOaWsOinhuWbvlxyXG5cdCAqIEBwYXJhbSBldmVudFR5cGUg5LqL5Lu257G75Z6LXHJcblx0ICogQHJldHVybnMgXHJcblx0ICovXHJcblx0ZXhwb3J0IGZ1bmN0aW9uIE5vdGlmeVVwZGF0ZShldmVudFR5cGU6c3RyaW5nKTpGdW5jdGlvblxyXG4gICAge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6YW55LCBwcm9wZXJ0eTpzdHJpbmcsIGRlc2NyaXB0ZXI/OmFueSkgXHJcbiAgICAgICAge1xyXG5cdFx0XHRcdGxldCBzaWduYWxlcjpKVEV2ZW50U2lnbmFsZXIgPSB0YXJnZXQ7XHJcblx0XHRcdFx0Ly9nZXQg5pa55rOV5Y+W5LujXHRzaWduYWxlci5fX2V2dE1hcCA9IHt9Oy8v55Sx5LqO6KOF6aWw5Zmo5rOo5YWl55qE5a+56LGh5piv5Y2V5L6L5pe277yM5q2k5pa55rOV55Sf5pWI77yI6KOF6YmT5Zmo55qE5a+56LGh5pyJ5aSa5Liq5pe277yM5pyq5rWL6K+V77yJ5Zug5Li66K+l5a+56LGh5bm25pyq5a6e5L6L5YyW77yM6KOF6aWw5ZmoXHJcblx0XHRcdFx0c2lnbmFsZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHRhcmdldFtwcm9wZXJ0eV0sIHRhcmdldCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==