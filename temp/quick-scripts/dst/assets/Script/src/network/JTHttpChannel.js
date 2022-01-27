
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/JTHttpChannel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbba1J0RC5HH5dwnMWoVSo/', 'JTHttpChannel');
// Script/src/network/JTHttpChannel.ts

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
        var JTHttpChannel = (function (_super) {
            __extends(JTHttpChannel, _super);
            function JTHttpChannel(cls) {
                return _super.call(this, cls) || this;
            }
            JTHttpChannel.prototype.flush = function () {
            };
            JTHttpChannel.prototype.send = function (data) {
            };
            return JTHttpChannel;
        }(JTChannel));
        com.JTHttpChannel = JTHttpChannel;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXEpUSHR0cENoYW5uZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0EsSUFBVSxHQUFHLENBbUJaO0lBbkJELFdBQVUsR0FBRztRQUVUO1lBQW1DLGlDQUFTO1lBRXhDLHVCQUFZLEdBQU87dUJBRWYsa0JBQU0sR0FBRyxDQUFDO1lBQ2QsQ0FBQztZQUVNLDZCQUFLLEdBQVo7WUFHQSxDQUFDO1lBRU0sNEJBQUksR0FBWCxVQUFZLElBQVE7WUFHcEIsQ0FBQztZQUNMLG9CQUFDO1FBQUQsQ0FoQkEsQUFnQkMsQ0FoQmtDLFNBQVMsR0FnQjNDO1FBaEJZLGlCQUFhLGdCQWdCekIsQ0FBQTtJQUNMLENBQUMsRUFuQlMsR0FBRyxLQUFILEdBQUcsUUFtQloiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCJKVENoYW5uZWwudHNcIi8+XHJcbm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBKVEh0dHBDaGFubmVsIGV4dGVuZHMgSlRDaGFubmVsXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoY2xzOmFueSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNscyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZmx1c2goKTp2b2lkIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2VuZChkYXRhOmFueSk6dm9pZCBcclxuICAgICAgICB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==