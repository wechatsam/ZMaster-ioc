
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/events/JTEventSignaler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85719gXD1VG7K0bzXF0g4mS', 'JTEventSignaler');
// Script/src/events/JTEventSignaler.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTEventSignaler = (function () {
            function JTEventSignaler() {
                this.__evtMap = null;
                this.__funMap = null;
            }
            JTEventSignaler.prototype.recycle = function () {
                this.removeEvents();
                this.removeFunctions();
            };
            JTEventSignaler.prototype.addEventListener = function (key, method, caller, once) {
                if (!this.evtMap[key]) {
                    this.__evtMap[key] = method;
                    JTEventManager.addEventListener(key, method, caller, once);
                }
            };
            JTEventSignaler.prototype.dispatchEvent = function (key, args) {
                key in this.evtMap && JTEventManager.dispatchEvent(key, args);
            };
            JTEventSignaler.prototype.removeEventListener = function (key, method, caller) {
                var fun = this.evtMap[key];
                fun = null;
                this.__evtMap[key] = null;
                delete this.__evtMap[key];
                JTEventManager.removeEventListener(key, method, caller);
            };
            JTEventSignaler.prototype.removeEvents = function () {
                var caller = this;
                for (var key in this.evtMap) {
                    this.removeEventListener(key, this.__evtMap[key], caller);
                }
                this.__evtMap = {};
            };
            JTEventSignaler.prototype.registerFunction = function (key, method, caller, once) {
                if (!this.funMap[key]) {
                    this.__funMap[key] = method;
                    JTFunctionManager.registerFunction(key, method, caller, once);
                }
            };
            JTEventSignaler.prototype.execute = function (key, args) {
                key in this.funMap && JTFunctionManager.execute(key, args);
            };
            JTEventSignaler.prototype.removeFunction = function (key, method, caller) {
                var fun = this.funMap[key];
                fun = null;
                this.__funMap[key] = null;
                delete this.__funMap[key];
                JTFunctionManager.removeFunction(key, method, caller);
            };
            JTEventSignaler.prototype.removeFunctions = function () {
                var caller = this;
                for (var key in this.funMap) {
                    this.removeFunction(key, this.__funMap[key], caller);
                }
                this.__funMap = {};
            };
            Object.defineProperty(JTEventSignaler.prototype, "evtMap", {
                get: function () {
                    if (!this.__evtMap) {
                        this.__evtMap = {};
                    }
                    return this.__evtMap;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTEventSignaler.prototype, "funMap", {
                get: function () {
                    if (!this.__funMap) {
                        this.__funMap = {};
                    }
                    return this.__funMap;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTEventSignaler, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTEventSignaler);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTEventSignaler.create = function () {
                var signaler = this.pool.get();
                return signaler;
            };
            JTEventSignaler.put = function (signaler) {
                this.pool.put(signaler);
            };
            JTEventSignaler._pool = null;
            return JTEventSignaler;
        }());
        com.JTEventSignaler = JTEventSignaler;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGV2ZW50c1xcSlRFdmVudFNpZ25hbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBZ0laO0lBaElELFdBQVUsR0FBRztRQUtMO1lBQUE7Z0JBRWdCLGFBQVEsR0FBVSxJQUFJLENBQUM7Z0JBQ3ZCLGFBQVEsR0FBVSxJQUFJLENBQUM7WUFxSHZDLENBQUM7WUFuSE8saUNBQU8sR0FBUDtnQkFFUSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMvQixDQUFDO1lBTU0sMENBQWdCLEdBQXZCLFVBQXdCLEdBQU8sRUFBRSxNQUFlLEVBQUUsTUFBVSxFQUFFLElBQWE7Z0JBRW5FLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUNyQjtvQkFDUSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztvQkFDNUIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNsRTtZQUNULENBQUM7WUFFTSx1Q0FBYSxHQUFwQixVQUFxQixHQUFPLEVBQUUsSUFBUztnQkFFL0IsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEUsQ0FBQztZQUVNLDZDQUFtQixHQUExQixVQUEyQixHQUFPLEVBQUUsTUFBZSxFQUFFLE1BQVU7Z0JBRXZELElBQUksR0FBRyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ25DLEdBQUcsR0FBRyxJQUFJLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8s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QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBcUIsQ0FBQztnQkFDbEUsT0FBTyxRQUFRLENBQUM7WUFDcEIsQ0FBQztZQUVhLG1CQUFHLEdBQWpCLFVBQWtCLFFBQXdCO2dCQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUMzQixDQUFDO1lBVmMscUJBQUssR0FBVyxJQUFJLENBQUM7WUFXNUMsc0JBQUM7U0F4SEQsQUF3SEMsSUFBQTtRQXhIWSxtQkFBZSxrQkF3SDNCLENBQUE7SUFHVCxDQUFDLEVBaElTLEdBQUcsS0FBSCxHQUFHLFFBZ0laIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgICAgIC8qKipcclxuICAgICAgICAgKiDkuovku7bkv6Hlj7flmaggLS0tIOWfuuS6juWFqOWxgOWHveaVsOa0vuWPkeaJp+ihjO+8jFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGV4cG9ydCBjbGFzcyBKVEV2ZW50U2lnbmFsZXIgaW1wbGVtZW50cyBKVElFdmVudFNpZ25hbGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfX2V2dE1hcDpPYmplY3QgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfX2Z1bk1hcDpPYmplY3QgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlY3ljbGUoKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGdW5jdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL+eUseS6juijhemlsOWZqOazqOWFpeeahOWvueixoeaYr+WNleS+i+aXtu+8jOatpOaWueazleeUn+aViO+8iOijhemJk+WZqOeahOWvueixoeacieWkmuS4quaXtu+8jOacqua1i+ivle+8ieWboOS4uuivpeWvueixoeW5tuacquWunuS+i+WMlu+8jOijhemlsOWZqFxyXG5cdFx0Ly/mj5DliY3ms6jlhaXor6Xlr7nosaHnmoTmlrnms5XvvIzlj6/og73lr7zoh7TmjIfpkojlvILluLhcclxuICAgXHJcblxyXG4gICAgICAgICAgICAgICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoa2V5OmFueSwgbWV0aG9kOkZ1bmN0aW9uLCBjYWxsZXI6YW55LCBvbmNlPzpib29sZWFuKTp2b2lkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ldnRNYXBba2V5XSkvL+WPquacieWcqOazqOWGjOeahOaXtuWAmeiwg+eUqGdldOaWueazle+8jOazqOWFpeS6i+S7tuebkeWQrOaXtu+8jOS6i+S7tk1BUOS8muS4um51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19ldnRNYXBba2V5XSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKVEV2ZW50TWFuYWdlci5hZGRFdmVudExpc3RlbmVyKGtleSwgbWV0aG9kLCBjYWxsZXIsIG9uY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHB1YmxpYyBkaXNwYXRjaEV2ZW50KGtleTphbnksIGFyZ3M/OmFueSk6dm9pZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgaW4gdGhpcy5ldnRNYXAgJiYgSlRFdmVudE1hbmFnZXIuZGlzcGF0Y2hFdmVudChrZXksIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGtleTphbnksIG1ldGhvZDpGdW5jdGlvbiwgY2FsbGVyOmFueSk6dm9pZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnVuOkZ1bmN0aW9uID0gdGhpcy5ldnRNYXBba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fZXZ0TWFwW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fX2V2dE1hcFtrZXldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpURXZlbnRNYW5hZ2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCBtZXRob2QsIGNhbGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHVibGljIHJlbW92ZUV2ZW50cygpIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGVyOmFueSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmV2dE1hcClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIHRoaXMuX19ldnRNYXBba2V5XSwgY2FsbGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19ldnRNYXAgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVnaXN0ZXJGdW5jdGlvbihrZXk6YW55LCBtZXRob2Q6RnVuY3Rpb24sIGNhbGxlcjphbnksIG9uY2U/OmJvb2xlYW4pOnZvaWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZ1bk1hcFtrZXldKS8v5Y+q5pyJ5Zyo5rOo5YaM55qE5pe25YCZ6LCD55SoZ2V05pa55rOV77yM5rOo5YWl5LqL5Lu255uR5ZCs5pe277yM5LqL5Lu2TUFQ5Lya5Li6bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2Z1bk1hcFtrZXldID0gbWV0aG9kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpURnVuY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyRnVuY3Rpb24oa2V5LCBtZXRob2QsIGNhbGxlciwgb25jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHVibGljIGV4ZWN1dGUoa2V5OmFueSwgYXJncz86YW55KTp2b2lkXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSBpbiB0aGlzLmZ1bk1hcCAmJiBKVEZ1bmN0aW9uTWFuYWdlci5leGVjdXRlKGtleSwgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHVibGljIHJlbW92ZUZ1bmN0aW9uKGtleTphbnksIG1ldGhvZDpGdW5jdGlvbiwgY2FsbGVyOmFueSk6dm9pZFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnVuOkZ1bmN0aW9uID0gdGhpcy5mdW5NYXBba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fZnVuTWFwW2tleV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fX2Z1bk1hcFtrZXldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEpURnVuY3Rpb25NYW5hZ2VyLnJlbW92ZUZ1bmN0aW9uKGtleSwgbWV0aG9kLCBjYWxsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHB1YmxpYyByZW1vdmVGdW5jdGlvbnMoKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxlcjphbnkgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5mdW5NYXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUZ1bmN0aW9uKGtleSwgdGhpcy5fX2Z1bk1hcFtrZXldLCBjYWxsZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2Z1bk1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgZ2V0IGV2dE1hcCgpOk9iamVjdFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX19ldnRNYXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fZXZ0TWFwID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZXZ0TWFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHB1YmxpYyBnZXQgZnVuTWFwKCk6T2JqZWN0XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fX2Z1bk1hcClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19mdW5NYXAgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19mdW5NYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgcG9vbCgpOkpUSVBvb2xcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5fcG9vbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvb2wgPSBKVFBvb2wuaW5zdGFuY2UoSlRFdmVudFNpZ25hbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2w7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgc3RhdGljIF9wb29sOkpUSVBvb2wgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTpKVEV2ZW50U2lnbmFsZXJcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2lnbmFsZXI6SlRFdmVudFNpZ25hbGVyID0gdGhpcy5wb29sLmdldCgpIGFzIEpURXZlbnRTaWduYWxlcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2lnbmFsZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgc3RhdGljIHB1dChzaWduYWxlcjpKVEV2ZW50U2lnbmFsZXIpOnZvaWRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvb2wucHV0KHNpZ25hbGVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbn1cclxuIl19