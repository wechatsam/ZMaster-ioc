
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/layout/JTLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b79bO5BJZPF5+gW5RyEWCJ', 'JTLayout');
// Script/src/layout/JTLayout.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTLayout = (function () {
            function JTLayout(_className, property, __layout) {
                this.__className = null;
                this.__property = null;
                this.__layout = null;
                this.settings(_className, property, __layout);
            }
            JTLayout.prototype.settings = function (__className, property, __layout) {
                this.__layout = __layout;
                this.__property = property;
                this.__className = __className;
            };
            JTLayout.prototype.update = function (child) {
                switch (this.__layout) {
                    case JTLayout.LAYOUT_VERTICAL:
                        {
                            JTLayoutManager.layoutVertical(child);
                            break;
                        }
                    case JTLayout.LAYOUT_HORIZONTAL:
                        {
                            JTLayoutManager.layoutHorzontal(child);
                            break;
                        }
                    case JTLayout.LAYOUT_AUTO_SWITCH:
                        {
                            JTLayoutManager.autoAdjustLayout(child);
                            break;
                        }
                }
            };
            JTLayout.LAYOUT_VERTICAL = "Vertical";
            JTLayout.LAYOUT_HORIZONTAL = "Horizontal";
            JTLayout.LAYOUT_AUTO_SWITCH = "Auto-Switch";
            return JTLayout;
        }());
        com.JTLayout = JTLayout;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGxheW91dFxcSlRMYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFVLEdBQUcsQ0ErQ1o7SUEvQ0QsV0FBVSxHQUFHO1FBRVQ7WUFTSSxrQkFBWSxVQUFjLEVBQUUsUUFBZSxFQUFFLFFBQWU7Z0JBSHJELGdCQUFXLEdBQU8sSUFBSSxDQUFDO2dCQUN2QixlQUFVLEdBQVUsSUFBSSxDQUFDO2dCQUN6QixhQUFRLEdBQVUsSUFBSSxDQUFDO2dCQUcxQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUVNLDJCQUFRLEdBQWYsVUFBZ0IsV0FBZSxFQUFFLFFBQWUsRUFBRSxRQUFlO2dCQUU3RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ25DLENBQUM7WUFFTSx5QkFBTSxHQUFiLFVBQWMsS0FBcUI7Z0JBRTlCLFFBQU8sSUFBSSxDQUFDLFFBQVEsRUFDcEI7b0JBQ0csS0FBSyxRQUFRLENBQUMsZUFBZTt3QkFDN0I7NEJBQ0ksZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDdEMsTUFBTTt5QkFDVDtvQkFDRCxLQUFLLFFBQVEsQ0FBQyxpQkFBaUI7d0JBQy9COzRCQUNJLGVBQWUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3ZDLE1BQU07eUJBQ1Q7b0JBQ0QsS0FBSyxRQUFRLENBQUMsa0JBQWtCO3dCQUNoQzs0QkFDSSxlQUFlLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3hDLE1BQU07eUJBQ1Q7aUJBQ0g7WUFDTixDQUFDO1lBdkNhLHdCQUFlLEdBQVUsVUFBVSxDQUFDO1lBQ3BDLDBCQUFpQixHQUFVLFlBQVksQ0FBQztZQUN4QywyQkFBa0IsR0FBVSxhQUFhLENBQUM7WUF3QzVELGVBQUM7U0E1Q0QsQUE0Q0MsSUFBQTtRQTVDWSxZQUFRLFdBNENwQixDQUFBO0lBQ0wsQ0FBQyxFQS9DUyxHQUFHLEtBQUgsR0FBRyxRQStDWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBKVExheW91dFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTEFZT1VUX1ZFUlRJQ0FMOnN0cmluZyA9IFwiVmVydGljYWxcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIExBWU9VVF9IT1JJWk9OVEFMOnN0cmluZyA9IFwiSG9yaXpvbnRhbFwiO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgTEFZT1VUX0FVVE9fU1dJVENIOnN0cmluZyA9IFwiQXV0by1Td2l0Y2hcIjtcclxuICAgICAgICBcclxuICAgICAgICBwdWJsaWMgX19jbGFzc05hbWU6YW55ID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgX19wcm9wZXJ0eTpzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBfX2xheW91dDpzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKF9jbGFzc05hbWU6YW55LCBwcm9wZXJ0eTpzdHJpbmcsIF9fbGF5b3V0OnN0cmluZylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MoX2NsYXNzTmFtZSwgcHJvcGVydHksIF9fbGF5b3V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzZXR0aW5ncyhfX2NsYXNzTmFtZTphbnksIHByb3BlcnR5OnN0cmluZywgX19sYXlvdXQ6c3RyaW5nKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9fbGF5b3V0ID0gX19sYXlvdXQ7XHJcbiAgICAgICAgICAgIHRoaXMuX19wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgICAgICAgICB0aGlzLl9fY2xhc3NOYW1lID0gX19jbGFzc05hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdXBkYXRlKGNoaWxkOmZndWkuR0NvbXBvbmVudCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgIHN3aXRjaCh0aGlzLl9fbGF5b3V0KVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBKVExheW91dC5MQVlPVVRfVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgSlRMYXlvdXRNYW5hZ2VyLmxheW91dFZlcnRpY2FsKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgSlRMYXlvdXQuTEFZT1VUX0hPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgSlRMYXlvdXRNYW5hZ2VyLmxheW91dEhvcnpvbnRhbChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIEpUTGF5b3V0LkxBWU9VVF9BVVRPX1NXSVRDSDpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBKVExheW91dE1hbmFnZXIuYXV0b0FkanVzdExheW91dChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcbn0iXX0=