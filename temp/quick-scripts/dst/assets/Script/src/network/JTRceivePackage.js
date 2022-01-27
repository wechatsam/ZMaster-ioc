
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/JTRceivePackage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54213ljU05LCrvTavEkDq5K', 'JTRceivePackage');
// Script/src/network/JTRceivePackage.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTReceivePackage = (function () {
            function JTReceivePackage() {
                this._content = null;
                this._data = null;
                this._protocol = 0;
                this._status = 0;
                this._errorCode = 0;
            }
            Object.defineProperty(JTReceivePackage.prototype, "content", {
                get: function () {
                    return this._content;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTReceivePackage.prototype, "protocol", {
                get: function () {
                    return this._protocol;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTReceivePackage.prototype, "status", {
                get: function () {
                    return this._status;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTReceivePackage.prototype, "errorCode", {
                get: function () {
                    return this._errorCode;
                },
                enumerable: false,
                configurable: true
            });
            JTReceivePackage.prototype.readPackage = function (data) {
                this._data = JSON.parse(data);
                this._status = this._data["status"];
                this._protocol = this._data["protocol"];
                if (this._status == JTProtocol.NORMAL) {
                    this._content = this._data["content"];
                }
                else {
                    this._errorCode = this._data["errorCode"];
                }
            };
            JTReceivePackage.prototype.recycle = function () {
                this._content = null;
                this._protocol = this._errorCode = this._status = 0;
                this._data = null;
            };
            Object.defineProperty(JTReceivePackage, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTReceivePackage);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTReceivePackage.read = function (data) {
                var receivePackage = this.pool.get();
                receivePackage.readPackage(data);
                return receivePackage;
            };
            JTReceivePackage.put = function (receivePackage) {
                this.pool.put(receivePackage);
            };
            JTReceivePackage._pool = null;
            return JTReceivePackage;
        }());
        com.JTReceivePackage = JTReceivePackage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXEpUUmNlaXZlUGFja2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUNBLElBQVUsR0FBRyxDQTZFWjtJQTdFRCxXQUFVLEdBQUc7UUFFVDtZQUFBO2dCQUVZLGFBQVEsR0FBVSxJQUFJLENBQUM7Z0JBQ3ZCLFVBQUssR0FBVSxJQUFJLENBQUM7Z0JBQ3BCLGNBQVMsR0FBVSxDQUFDLENBQUM7Z0JBRXJCLFlBQU8sR0FBVSxDQUFDLENBQUM7Z0JBQ25CLGVBQVUsR0FBVSxDQUFDLENBQUM7WUFtRWxDLENBQUM7WUEvREcsc0JBQVcscUNBQU87cUJBQWxCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekIsQ0FBQzs7O2VBQUE7WUFFRCxzQkFBVyxzQ0FBUTtxQkFBbkI7b0JBRUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMxQixDQUFDOzs7ZUFBQTtZQUVELHNCQUFXLG9DQUFNO3FCQUFqQjtvQkFFSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLENBQUM7OztlQUFBO1lBRUQsc0JBQVcsdUNBQVM7cUJBQXBCO29CQUVJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDM0IsQ0FBQzs7O2VBQUE7WUFFTSxzQ0FBVyxHQUFsQixVQUFtQixJQUFRO2dCQUV2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE1BQU0sRUFDckM7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN6QztxQkFFRDtvQkFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzdDO1lBQ0wsQ0FBQztZQUVNLGtDQUFPLEdBQWQ7Z0JBRUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUVELHNCQUFrQix3QkFBSTtxQkFBdEI7b0JBRUksSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2Q7d0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQ2xEO29CQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdEIsQ0FBQzs7O2VBQUE7WUFHYSxxQkFBSSxHQUFsQixVQUFtQixJQUFRO2dCQUV2QixJQUFJLGNBQWMsR0FBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQXNCLENBQUM7Z0JBQzFFLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ2hDLE9BQU8sY0FBYyxDQUFDO1lBQzFCLENBQUM7WUFFYSxvQkFBRyxHQUFqQixVQUFrQixjQUErQjtnQkFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBK0IsQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFaYyxzQkFBSyxHQUFXLElBQUksQ0FBQztZQWF4Qyx1QkFBQztTQTFFRCxBQTBFQyxJQUFBO1FBMUVZLG9CQUFnQixtQkEwRTVCLENBQUE7SUFDTCxDQUFDLEVBN0VTLEdBQUcsS0FBSCxHQUFHLFFBNkVaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG5uYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlRSZWNlaXZlUGFja2FnZSBpbXBsZW1lbnRzIEpUSVJlY2VpdmVQYWNrYWdlXHJcbiAgICB7XHJcbiAgICAgICAgcHJpdmF0ZSBfY29udGVudDpPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgX2RhdGE6T2JqZWN0ID0gbnVsbDtcclxuICAgICAgICBwcml2YXRlIF9wcm90b2NvbDpudW1iZXIgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgX3N0YXR1czpudW1iZXIgPSAwO1xyXG4gICAgICAgIHByaXZhdGUgX2Vycm9yQ29kZTpudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgY29udGVudCgpOk9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHByb3RvY29sKCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2w7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHN0YXR1cygpOm51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgZXJyb3JDb2RlKCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3JDb2RlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJlYWRQYWNrYWdlKGRhdGE6YW55KTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fZGF0YVtcInN0YXR1c1wiXTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvdG9jb2wgPSB0aGlzLl9kYXRhW1wicHJvdG9jb2xcIl07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0dXMgPT0gSlRQcm90b2NvbC5OT1JNQUwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQgPSB0aGlzLl9kYXRhW1wiY29udGVudFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yQ29kZSA9IHRoaXMuX2RhdGFbXCJlcnJvckNvZGVcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZWN5Y2xlKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb3RvY29sID0gdGhpcy5fZXJyb3JDb2RlID0gdGhpcy5fc3RhdHVzID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldCBwb29sKCk6SlRJUG9vbFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX3Bvb2wpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvb2wgPSBKVFBvb2wuaW5zdGFuY2UoSlRSZWNlaXZlUGFja2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvb2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIF9wb29sOkpUSVBvb2wgPSBudWxsO1xyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHJlYWQoZGF0YTphbnkpOkpUUmVjZWl2ZVBhY2thZ2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByZWNlaXZlUGFja2FnZTpKVFJlY2VpdmVQYWNrYWdlID0gdGhpcy5wb29sLmdldCgpIGFzIEpUUmVjZWl2ZVBhY2thZ2U7XHJcbiAgICAgICAgICAgIHJlY2VpdmVQYWNrYWdlLnJlYWRQYWNrYWdlKGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVybiByZWNlaXZlUGFja2FnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgcHV0KHJlY2VpdmVQYWNrYWdlOkpUUmVjZWl2ZVBhY2thZ2UpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbC5wdXQocmVjZWl2ZVBhY2thZ2UgYXMgSlRJUG9vbE9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==