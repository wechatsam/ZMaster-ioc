
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/base/JTPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25925kq/p1NEoBhhknHIvl2', 'JTPanel');
// Script/src/base/JTPanel.ts

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTPanel = (function (_super) {
            __extends(JTPanel, _super);
            function JTPanel() {
                return _super.call(this) || this;
            }
            JTPanel.prototype.load = function () {
                _super.prototype.load.call(this);
                this.locker.lock();
            };
            Object.defineProperty(JTPanel.prototype, "locker", {
                get: function () {
                    return JTPopupManager.locker;
                },
                enumerable: false,
                configurable: true
            });
            return JTPanel;
        }(JTComponent));
        com.JTPanel = JTPanel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGJhc2VcXEpUUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBb0JaO0lBcEJELFdBQVUsR0FBRztRQUVUO1lBQWlFLDJCQUFjO1lBRTNFO3VCQUVJLGlCQUFPO1lBQ1gsQ0FBQztZQUVNLHNCQUFJLEdBQVg7Z0JBRUksaUJBQU0sSUFBSSxXQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixDQUFDO1lBRUQsc0JBQVcsMkJBQU07cUJBQWpCO29CQUVJLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDakMsQ0FBQzs7O2VBQUE7WUFDTCxjQUFDO1FBQUQsQ0FqQkEsQUFpQkMsQ0FqQmdFLFdBQVcsR0FpQjNFO1FBakJxQixXQUFPLFVBaUI1QixDQUFBO0lBQ0wsQ0FBQyxFQXBCUyxHQUFHLEtBQUgsR0FBRyxRQW9CWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKVFBhbmVsPFQgZXh0ZW5kcyBmZ3VpLkdDb21wb25lbnQ+IGV4dGVuZHMgSlRDb21wb25lbnQ8VD5cclxuICAgIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGxvYWQoKTogdm9pZCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyLmxvYWQoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NrZXIubG9jaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGdldCBsb2NrZXIoKTpKVExvY2tlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpUUG9wdXBNYW5hZ2VyLmxvY2tlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19