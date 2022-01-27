
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/datas/mappers/JTMapper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23592mMFLFNlYrtXOCvEXmM', 'JTMapper');
// Script/src/datas/mappers/JTMapper.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTMapper = (function () {
            function JTMapper() {
            }
            JTMapper.prototype.clone = function () {
                var dataInfo = new JTMapper();
                dataInfo.update(this);
                return this;
            };
            JTMapper.prototype.update = function (data) {
                var keys = Object.keys(data);
                var obj = this;
                var l = keys.length;
                for (var i = 0; i < l; i++) {
                    var key = keys[i];
                    if (obj.hasOwnProperty(key)) {
                        this[key] = data[key];
                    }
                }
                return this;
            };
            JTMapper.prototype.recycle = function () { };
            ;
            return JTMapper;
        }());
        com.JTMapper = JTMapper;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRhdGFzXFxtYXBwZXJzXFxKVE1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLElBQVUsR0FBRyxDQXFDWjtJQXJDRCxXQUFVLEdBQUc7UUFFVDtZQUFBO1lBa0NBLENBQUM7WUEzQlUsd0JBQUssR0FBWjtnQkFFSSxJQUFJLFFBQVEsR0FBWSxJQUFJLFFBQVEsRUFBRSxDQUFDO2dCQUN2QyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBRU0seUJBQU0sR0FBYixVQUFjLElBQVc7Z0JBRXJCLElBQUksSUFBSSxHQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksR0FBRyxHQUFVLElBQUksQ0FBRTtnQkFDdkIsSUFBSSxDQUFDLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFDakM7b0JBQ0ksSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQzNCO3dCQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3pCO2lCQUNKO2dCQUNELE9BQU8sSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFLTSwwQkFBTyxHQUFkLGNBQXNCLENBQUM7WUFBQSxDQUFDO1lBQzVCLGVBQUM7UUFBRCxDQWxDQSxBQWtDQyxJQUFBO1FBbENZLFlBQVEsV0FrQ3BCLENBQUE7SUFDTCxDQUFDLEVBckNTLEdBQUcsS0FBSCxHQUFHLFFBcUNaIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGNvbSBcclxue1xyXG4gICAgZXhwb3J0IGNsYXNzIEpUTWFwcGVyIGltcGxlbWVudHMgSlRJTWFwcGVyXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8qKipcclxuICAgICAgICAgKiDlj6rmlK/mjIHnroDljZXmlbDmja7nsbvlnovnmoTmt7HluqblpI3liLYs5aSN5p2C5pWw5o2u57G75Z6L5Li65byV55So5YWz57O7XHJcbiAgICAgICAgICog5aaC5p6c5oOz6KaB5rex5bqm5aSN5Yi25aSN5p2C5pWw5o2u6K+36YeN5YaZ5q2k5pa55rOVXHJcbiAgICAgICAgICoqL1xyXG4gICAgICAgIHB1YmxpYyBjbG9uZSgpOkpUTWFwcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZGF0YUluZm86SlRNYXBwZXIgPSBuZXcgSlRNYXBwZXIoKTtcclxuICAgICAgICAgICAgZGF0YUluZm8udXBkYXRlKHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB1cGRhdGUoZGF0YTpPYmplY3QpOkpUTWFwcGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIga2V5czpzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgb2JqOk9iamVjdCA9IHRoaXMgO1xyXG4gICAgICAgICAgICB2YXIgbDpudW1iZXIgPSBrZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaTpudW1iZXIgPSAwOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5OnN0cmluZyA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqKlxyXG4gICAgICAgICAqIOWbnuaUtumHjeWGmeatpOaWueazlVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyByZWN5Y2xlKCk6dm9pZHt9O1xyXG4gICAgfVxyXG59Il19