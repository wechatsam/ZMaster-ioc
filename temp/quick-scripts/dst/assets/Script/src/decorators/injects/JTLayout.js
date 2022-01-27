
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/JTLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ac8du0KvpFNJwEv04LRbt2', 'JTLayout');
// Script/src/decorators/injects/JTLayout.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function Layout(layout) {
            return function (target, property, descripter) {
                if (!property)
                    property = "layout";
                JTLayoutManager.addLayout(target.name, property, layout);
            };
        }
        com.Layout = Layout;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXEpUTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBTyxHQUFHLENBbUJUO0lBbkJELFdBQU8sR0FBRztRQVNSLFNBQWdCLE1BQU0sQ0FBQyxNQUFhO1lBRW5DLE9BQU8sVUFBVSxNQUFVLEVBQUUsUUFBZSxFQUFFLFVBQWU7Z0JBRTVELElBQUksQ0FBQyxRQUFRO29CQUFFLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ25DLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFBO1FBQ0YsQ0FBQztRQVBlLFVBQU0sU0FPckIsQ0FBQTtJQUdILENBQUMsRUFuQk0sR0FBRyxLQUFILEdBQUcsUUFtQlQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qXHJcbiogbmFtZTtcclxuKi9cclxubW9kdWxlIGNvbSBcclxue1xyXG5cclxuXHQvKipcclxuXHQgKiDoh6rliqjpgILphY1cclxuXHQgKiDkvJrmoLnmja7nqpflj6PlpKflsI/lj5jljJbogIzlj5jljJZcclxuXHQgKiBAcGFyYW0gb25jZSDmmK/lkKblj6rmiafooYzkuIDmrKFcclxuXHQgKiBAcmV0dXJucyBcclxuXHQgKi9cclxuXHQgZXhwb3J0IGZ1bmN0aW9uIExheW91dChsYXlvdXQ6c3RyaW5nKTpGdW5jdGlvblxyXG5cdCB7XHJcblx0XHQgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6YW55LCBwcm9wZXJ0eTpzdHJpbmcsIGRlc2NyaXB0ZXI/OmFueSkgXHJcblx0XHQge1xyXG5cdFx0XHQgaWYgKCFwcm9wZXJ0eSkgcHJvcGVydHkgPSBcImxheW91dFwiO1xyXG5cdFx0XHQgSlRMYXlvdXRNYW5hZ2VyLmFkZExheW91dCh0YXJnZXQubmFtZSwgcHJvcGVydHksIGxheW91dCk7XHJcblx0XHQgfVxyXG5cdCB9XHJcblxyXG5cdFxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==