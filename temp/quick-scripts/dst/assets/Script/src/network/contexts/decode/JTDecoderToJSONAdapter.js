
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/contexts/decode/JTDecoderToJSONAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c14f0qWuW1OoLWdAuKfnoAu', 'JTDecoderToJSONAdapter');
// Script/src/network/contexts/decode/JTDecoderToJSONAdapter.ts

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
        var JTDecoderToJSONAdapter = (function (_super) {
            __extends(JTDecoderToJSONAdapter, _super);
            function JTDecoderToJSONAdapter() {
                return _super.call(this) || this;
            }
            JTDecoderToJSONAdapter.prototype.build = function () {
            };
            JTDecoderToJSONAdapter.prototype.decode = function (receiveMessage) {
                return JTReceivePackage.read(receiveMessage);
            };
            JTDecoderToJSONAdapter.prototype.readComplete = function (receivePackage) {
                _super.prototype.readComplete.call(this, receivePackage);
            };
            return JTDecoderToJSONAdapter;
        }(JTAbstractDecoderAdapter));
        com.JTDecoderToJSONAdapter = JTDecoderToJSONAdapter;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGNvbnRleHRzXFxkZWNvZGVcXEpURGVjb2RlclRvSlNPTkFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBMkJaO0lBM0JELFdBQVUsR0FBRztRQUVUO1lBQTRDLDBDQUF3QjtZQU1oRTt1QkFFSSxpQkFBTztZQUNYLENBQUM7WUFQTSxzQ0FBSyxHQUFaO1lBR0EsQ0FBQztZQU1NLHVDQUFNLEdBQWIsVUFBYyxjQUFrQjtnQkFNNUIsT0FBUSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUVNLDZDQUFZLEdBQW5CLFVBQW9CLGNBQWdDO2dCQUVoRCxpQkFBTSxZQUFZLFlBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNMLDZCQUFDO1FBQUQsQ0F4QkEsQUF3QkMsQ0F4QjJDLHdCQUF3QixHQXdCbkU7UUF4QlksMEJBQXNCLHlCQXdCbEMsQ0FBQTtJQUNMLENBQUMsRUEzQlMsR0FBRyxLQUFILEdBQUcsUUEyQloiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgY29tIFxyXG57XHJcbiAgICBleHBvcnQgY2xhc3MgSlREZWNvZGVyVG9KU09OQWRhcHRlciBleHRlbmRzIEpUQWJzdHJhY3REZWNvZGVyQWRhcHRlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBidWlsZCgpOiB2b2lkIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGRlY29kZShyZWNlaXZlTWVzc2FnZTphbnkpOmFueVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gbGV0IGRhdGE6YW55ID0gSlNPTi5wYXJzZShyZWNlaXZlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBwcm90b2NvbDpudW1iZXIgPSBkYXRhW1wicHJvdG9jb2xcIl07XHJcbiAgICAgICAgICAgIC8vIEpURnVuY3Rpb25NYW5hZ2VyLmV4ZWN1dGUocHJvdG9jb2wudG9TdHJpbmcoKSwgZGF0YVtcImNvbnRlbnRcIl0pO1xyXG4gICAgICAgICAgICAvLyBKVExvZ2dlci5pbmZvKFwiW1JlY2VpdmVNZXNzYWdlXSBwcm90b2NvbDogXCIgKyBwcm90b2NvbCwgIFwiICAgIGNvbnRlbnQ6ICBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJjb250ZW50XCJdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiAgSlRSZWNlaXZlUGFja2FnZS5yZWFkKHJlY2VpdmVNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZWFkQ29tcGxldGUocmVjZWl2ZVBhY2thZ2U6SlRJUmVjZWl2ZVBhY2thZ2UpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN1cGVyLnJlYWRDb21wbGV0ZShyZWNlaXZlUGFja2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==