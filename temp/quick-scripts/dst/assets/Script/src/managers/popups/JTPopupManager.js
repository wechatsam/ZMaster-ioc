
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/managers/popups/JTPopupManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb06cASKhhOuIbJf/4P8KM0', 'JTPopupManager');
// Script/src/managers/popups/JTPopupManager.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTPopupManager = (function () {
            function JTPopupManager() {
            }
            JTPopupManager.initialize = function () {
            };
            JTPopupManager.createPopUp = function (__class, parent, isTween, mode) {
                if (isTween === void 0) { isTween = false; }
                if (mode === void 0) { mode = true; }
                var child = new __class();
                return this.addPopUp(child, parent, isTween, mode);
            };
            JTPopupManager.centerComponent = function (component) {
            };
            JTPopupManager.center = function (componentUI) {
            };
            JTPopupManager.addPopUp = function (component, parent, isTween, mode) {
                if (isTween === void 0) { isTween = false; }
                if (mode === void 0) { mode = true; }
                parent = parent ? parent : this.layer;
                var childPopUp = this.search(component);
                if (!childPopUp) {
                    childPopUp = this.pool.get();
                    childPopUp.setup(component, parent, isTween, mode);
                    this.__childs.push(childPopUp);
                }
                else {
                    childPopUp.setup(component, parent, isTween, mode);
                }
                if (!this.__backgroundMask) {
                    this.__backgroundMask = new fgui.GGraph();
                    this.__backgroundMask.clearGraphics();
                    this.__backgroundMask.setSize(JTSession.stageWidth, JTSession.stageHeight);
                    this.__backgroundMask.drawRect(0, null, null, null);
                }
                if (childPopUp.mode) {
                }
                if (isTween) {
                }
                else {
                }
                return component;
            };
            JTPopupManager.removePopUp = function (component, isTween) {
                if (isTween === void 0) { isTween = false; }
                var childPopUp = this.removeComponent(component);
                if (!childPopUp)
                    return component;
                if (!isTween)
                    this.put(childPopUp);
                else {
                }
                return component;
            };
            JTPopupManager.removes = function (parent) {
                var lines = null;
                if (parent) {
                    lines = this.removeGComponent(parent);
                }
                else {
                    lines = this.__childs;
                }
                while (lines.length) {
                    var childPopUp = lines.shift();
                    this.put(childPopUp);
                }
            };
            JTPopupManager.search = function (component) {
                var count = this.__childs.length;
                for (var i = 0; i < count; i++) {
                    var childPopUp = this.__childs[i];
                    if (childPopUp.component == component) {
                        return childPopUp;
                    }
                }
                return null;
            };
            JTPopupManager.removeGComponent = function (parent) {
                var lines = [];
                for (var i = 0; i < this.__childs.length; i++) {
                    var childPopUp = this.__childs[i];
                    if (childPopUp.parent == parent) {
                        var lines_1 = this.__childs.splice(i, 1);
                        var child = lines_1.shift();
                        lines_1.push(child);
                        i--;
                    }
                }
                return lines;
            };
            JTPopupManager.removeComponent = function (component) {
                var count = this.__childs.length;
                var child = null;
                for (var i = 0; i < count; i++) {
                    var childPopUp = this.__childs[i];
                    if (childPopUp.component == component) {
                        var lines = this.__childs.splice(i, 1);
                        child = lines.shift();
                    }
                }
                return child;
            };
            Object.defineProperty(JTPopupManager, "layer", {
                get: function () {
                    if (!this.__layer) {
                        var layerManager = JTApplicationBootstrap.getContext(JTApplicationBootstrap.CONTEXT_LAYER);
                        this.__layer = layerManager.getLayer(JTAbstractLayerManager.LAYER_POPUP);
                    }
                    return this.__layer;
                },
                enumerable: false,
                configurable: true
            });
            JTPopupManager.create = function (component, parent, isTween, mode) {
                if (isTween === void 0) { isTween = false; }
                if (mode === void 0) { mode = true; }
                var childPopUp = this.pool.get();
                childPopUp.setup(component, parent, isTween, mode);
                return childPopUp;
            };
            JTPopupManager.put = function (childPopUp) {
                this.pool.put(childPopUp);
            };
            Object.defineProperty(JTPopupManager, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTChildPopUp);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTPopupManager, "locker", {
                get: function () {
                    if (!this.__locker) {
                        this.__locker = new JTLocker();
                    }
                    return this.__locker;
                },
                enumerable: false,
                configurable: true
            });
            JTPopupManager.__locker = null;
            JTPopupManager.__layer = null;
            JTPopupManager.__childs = [];
            JTPopupManager.__backgroundMask = null;
            JTPopupManager._pool = null;
            return JTPopupManager;
        }());
        com.JTPopupManager = JTPopupManager;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG1hbmFnZXJzXFxwb3B1cHNcXEpUUG9wdXBNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0EsSUFBVSxHQUFHLENBa05aO0lBbE5ELFdBQVUsR0FBRztRQUVUO1lBQUE7WUErTUEsQ0FBQztZQXRNaUIseUJBQVUsR0FBeEI7WUFHQSxDQUFDO1lBRWEsMEJBQVcsR0FBekIsVUFBMEIsT0FBVyxFQUFFLE1BQXVCLEVBQ3RDLE9BQXVCLEVBQUUsSUFBbUI7Z0JBQTVDLHdCQUFBLEVBQUEsZUFBdUI7Z0JBQUUscUJBQUEsRUFBQSxXQUFtQjtnQkFFaEUsSUFBSSxLQUFLLEdBQWdCLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUN0RCxDQUFDO1lBRWEsOEJBQWUsR0FBN0IsVUFBOEIsU0FBc0I7WUFHcEQsQ0FBQztZQUVhLHFCQUFNLEdBQXBCLFVBQXFCLFdBQTJCO1lBR2hELENBQUM7WUFVYSx1QkFBUSxHQUF0QixVQUF1QixTQUFzQixFQUFFLE1BQXVCLEVBQUUsT0FBdUIsRUFBRSxJQUFtQjtnQkFBNUMsd0JBQUEsRUFBQSxlQUF1QjtnQkFBRSxxQkFBQSxFQUFBLFdBQW1CO2dCQUVoSCxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLElBQUksVUFBVSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsVUFBVSxFQUNmO29CQUNJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBa0IsQ0FBQztvQkFDN0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFF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UUEvTVksa0JBQWMsaUJBK00xQixDQUFBO0lBQ0wsQ0FBQyxFQWxOUyxHQUFHLEtBQUgsR0FBRyxRQWtOWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5uYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRQb3B1cE1hbmFnZXJcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfX2xvY2tlcjpKVExvY2tlciA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19sYXllcjpmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9fY2hpbGRzOkpUQ2hpbGRQb3BVcFtdID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5by556qX6JKZ5p2/XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX19iYWNrZ3JvdW5kTWFzazpmZ3VpLkdHcmFwaCA9IG51bGw7XHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKCk6dm9pZFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVBvcFVwKF9fY2xhc3M6YW55LCBwYXJlbnQ/OmZndWkuR0NvbXBvbmVudCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUd2Vlbjpib29sZWFuID0gZmFsc2UsIG1vZGU6Ym9vbGVhbiA9IHRydWUpOkpUSUNvbXBvbmVudFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkOkpUSUNvbXBvbmVudCA9IG5ldyBfX2NsYXNzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFBvcFVwKGNoaWxkLCBwYXJlbnQsIGlzVHdlZW4sIG1vZGUpIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBjZW50ZXJDb21wb25lbnQoY29tcG9uZW50OkpUSUNvbXBvbmVudCk6dm9pZFxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGNlbnRlcihjb21wb25lbnRVSTpmZ3VpLkdDb21wb25lbnQpOnZvaWRcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGNvbXBvbmVudCBcclxuICAgICAgICAgKiBAcGFyYW0gcGFyZW50IFxyXG4gICAgICAgICAqIEBwYXJhbSBpc1R3ZWVuIFxyXG4gICAgICAgICAqIEBwYXJhbSBtb2RlIFxyXG4gICAgICAgICAqIEByZXR1cm5zIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYWRkUG9wVXAoY29tcG9uZW50OkpUSUNvbXBvbmVudCwgcGFyZW50PzpmZ3VpLkdDb21wb25lbnQsIGlzVHdlZW46Ym9vbGVhbiA9IGZhbHNlLCBtb2RlOmJvb2xlYW4gPSB0cnVlKTpKVElDb21wb25lbnRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudCA/IHBhcmVudCA6IHRoaXMubGF5ZXI7IC8v5aaC5p6c5rKh5pyJ54i25a655Zmo77yM5YiZ55u05o6l5L2/55SoUG9wVXDnmoTlrrnlmahcclxuICAgICAgICAgICAgbGV0IGNoaWxkUG9wVXA6SlRDaGlsZFBvcFVwID0gdGhpcy5zZWFyY2goY29tcG9uZW50KTtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZFBvcFVwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZFBvcFVwID0gdGhpcy5wb29sLmdldCgpIGFzIEpUQ2hpbGRQb3BVcDtcclxuICAgICAgICAgICAgICAgIGNoaWxkUG9wVXAuc2V0dXAoY29tcG9uZW50LCBwYXJlbnQsIGlzVHdlZW4sIG1vZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2NoaWxkcy5wdXNoKGNoaWxkUG9wVXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRQb3BVcC5zZXR1cChjb21wb25lbnQsIHBhcmVudCwgaXNUd2VlbiwgbW9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9fYmFja2dyb3VuZE1hc2spLy/nlLHkuo5GcmFpeUdVSSBncmFwaGljcyDnlLvnmoTmjqXlj6PmmrTpnLLkuoZjb2Nvc+eahOaWueazle+8jOaJgOS7peWPr+iDveimgeS9v+eUqFVJ57yW6L6R5Zmo5p2l55S75LiA5byg5Zu+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19iYWNrZ3JvdW5kTWFzayA9IG5ldyBmZ3VpLkdHcmFwaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2JhY2tncm91bmRNYXNrLmNsZWFyR3JhcGhpY3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19iYWNrZ3JvdW5kTWFzay5zZXRTaXplKEpUU2Vzc2lvbi5zdGFnZVdpZHRoLCBKVFNlc3Npb24uc3RhZ2VIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2JhY2tncm91bmRNYXNrLmRyYXdSZWN0KDAsIG51bGwsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGlsZFBvcFVwLm1vZGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+aYvuekuumBruaMoeWxglxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1R3ZWVuKVxyXG4gICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBjb21wb25lbnQgXHJcbiAgICAgICAgICogQHBhcmFtIGlzVHdlZW4gXHJcbiAgICAgICAgICogQHJldHVybnMgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyByZW1vdmVQb3BVcChjb21wb25lbnQ6SlRJQ29tcG9uZW50LCBpc1R3ZWVuOmJvb2xlYW4gPSBmYWxzZSk6SlRJQ29tcG9uZW50XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRQb3BVcDpKVENoaWxkUG9wVXAgPSB0aGlzLnJlbW92ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkUG9wVXApIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICAgICAgICAgIGlmICghaXNUd2VlbikgICAgICAgICAgIHRoaXMucHV0KGNoaWxkUG9wVXApO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+e8k+WKqOa2iOWksemAu+i+kVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcGFyZW50IFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlcyhwYXJlbnQ/OmZhaXJ5Z3VpLkdDb21wb25lbnQpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBsaW5lczpKVENoaWxkUG9wVXBbXSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBsaW5lcyA9IHRoaXMucmVtb3ZlR0NvbXBvbmVudChwYXJlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGluZXMgPSB0aGlzLl9fY2hpbGRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlKGxpbmVzLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkUG9wVXA6SlRDaGlsZFBvcFVwID0gbGluZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHV0KGNoaWxkUG9wVXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmkJzntKLliJfooajkuK3mmK/lkKbor6Xlr7nosaHlt7Lnu4/lvLnlh7rkuobjgIJcclxuICAgICAgICAgKiBAcGFyYW0gY29tcG9uZW50IOmcgOimgeW8ueWHuueahOaYvuekuuWvueixoVxyXG4gICAgICAgICAqIEByZXR1cm5zIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNlYXJjaChjb21wb25lbnQ6SlRJQ29tcG9uZW50KTpKVENoaWxkUG9wVXBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudDpudW1iZXIgPSB0aGlzLl9fY2hpbGRzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkUG9wVXA6SlRDaGlsZFBvcFVwID0gdGhpcy5fX2NoaWxkc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZFBvcFVwLmNvbXBvbmVudCA9PSBjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkUG9wVXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyByZW1vdmVHQ29tcG9uZW50KHBhcmVudDpmZ3VpLkdDb21wb25lbnQpOkpUQ2hpbGRQb3BVcFtdXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGluZXM6SlRDaGlsZFBvcFVwW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5fX2NoaWxkcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkUG9wVXA6SlRDaGlsZFBvcFVwID0gdGhpcy5fX2NoaWxkc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZFBvcFVwLnBhcmVudCA9PSBwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVzOkpUQ2hpbGRQb3BVcFtdID0gdGhpcy5fX2NoaWxkcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkOkpUQ2hpbGRQb3BVcCA9IGxpbmVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBsaW5lcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnQ6SlRJQ29tcG9uZW50KTpKVENoaWxkUG9wVXBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudDpudW1iZXIgPSB0aGlzLl9fY2hpbGRzLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGNoaWxkOkpUQ2hpbGRQb3BVcCA9IG51bGw7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IGNvdW50OyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZFBvcFVwOkpUQ2hpbGRQb3BVcCA9IHRoaXMuX19jaGlsZHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRQb3BVcC5jb21wb25lbnQgPT0gY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lczpKVENoaWxkUG9wVXBbXSA9IHRoaXMuX19jaGlsZHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gbGluZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBsYXllcigpOmZndWkuR0NvbXBvbmVudFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9fbGF5ZXIpXHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXJNYW5hZ2VyOkpUQWJzdHJhY3RMYXllck1hbmFnZXIgPSBKVEFwcGxpY2F0aW9uQm9vdHN0cmFwLmdldENvbnRleHQoSlRBcHBsaWNhdGlvbkJvb3RzdHJhcC5DT05URVhUX0xBWUVSKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19sYXllciA9IGxheWVyTWFuYWdlci5nZXRMYXllcihKVEFic3RyYWN0TGF5ZXJNYW5hZ2VyLkxBWUVSX1BPUFVQKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xheWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX3Bvb2w6SlRJUG9vbCA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlKGNvbXBvbmVudDpKVElDb21wb25lbnQsIHBhcmVudD86Zmd1aS5HQ29tcG9uZW50LCBpc1R3ZWVuOmJvb2xlYW4gPSBmYWxzZSwgbW9kZTpib29sZWFuID0gdHJ1ZSk6SlRDaGlsZFBvcFVwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRQb3BVcDpKVENoaWxkUG9wVXAgPSB0aGlzLnBvb2wuZ2V0KCkgYXMgSlRDaGlsZFBvcFVwO1xyXG4gICAgICAgICAgICBjaGlsZFBvcFVwLnNldHVwKGNvbXBvbmVudCwgcGFyZW50LCBpc1R3ZWVuLCBtb2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUG9wVXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBwdXQoY2hpbGRQb3BVcDpKVENoaWxkUG9wVXApOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXQoY2hpbGRQb3BVcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgc3RhdGljIGdldCBwb29sKCk6SlRJUG9vbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX3Bvb2wpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvb2wgPSBKVFBvb2wuaW5zdGFuY2UoSlRDaGlsZFBvcFVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcG9vbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvY2tlcigpOkpUTG9ja2VyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX19sb2NrZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19sb2NrZXIgPSBuZXcgSlRMb2NrZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvY2tlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19