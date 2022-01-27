
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/decorators/injects/JTDecoratorUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96419ypoANCIagSGsuEIscx', 'JTDecoratorUtils');
// Script/src/decorators/injects/JTDecoratorUtils.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTDecoratorUtils = (function () {
            function JTDecoratorUtils() {
            }
            JTDecoratorUtils.registerClassAlias = function (target, property) {
                var __lines = target[this.DECORATOR_KEY];
                if (!__lines) {
                    target[this.DECORATOR_KEY] = __lines = [];
                }
                __lines.push(property);
                var key = this.DECORATOR_KEY + property;
                return key;
            };
            JTDecoratorUtils.bind = function (cls, destroyed) {
                if (destroyed === void 0) { destroyed = false; }
                var name = cls.name;
                var __class = this._bindedMap[name];
                if (!__class) {
                    __class = new JTSingletonClassAlias(cls, destroyed);
                    this._bindedMap[name] = __class;
                }
                return __class;
            };
            JTDecoratorUtils.bindPool = function (poolCls, itemCls, parameters) {
                var name = itemCls.name;
                var __class = this._bindedMap[name];
                if (!__class) {
                    __class = new JTSingletonPoolAlias(poolCls, itemCls, parameters);
                    this._bindedMap[name] = __class;
                }
                return __class;
            };
            JTDecoratorUtils.bindTemplate = function (cls, parameters) {
                var name = cls.name;
                var __class = this._bindedMap[name];
                if (!__class) {
                    __class = new JTConfigurationAlisa(cls, parameters);
                    this._bindedMap[name] = __class;
                }
                return __class;
            };
            JTDecoratorUtils.getClassAlisa = function (cls) {
                var name = cls.name;
                var __class = this._bindedMap[name];
                return __class;
            };
            JTDecoratorUtils._bindedMap = {};
            JTDecoratorUtils.DECORATOR_KEY = "__c.decorator__";
            return JTDecoratorUtils;
        }());
        com.JTDecoratorUtils = JTDecoratorUtils;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXGRlY29yYXRvcnNcXGluamVjdHNcXEpURGVjb3JhdG9yVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHQSxJQUFPLEdBQUcsQ0E0RVQ7SUE1RUQsV0FBTyxHQUFHO1FBRVQ7WUFBQTtZQXlFQSxDQUFDO1lBNURjLG1DQUFrQixHQUFoQyxVQUFpQyxNQUFVLEVBQUUsUUFBZTtnQkFFMUQsSUFBSSxPQUFPLEdBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLE9BQU8sRUFDWjtvQkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7aUJBQ3pDO2dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksR0FBRyxHQUFVLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO2dCQUMvQyxPQUFPLEdBQUcsQ0FBQztZQUNaLENBQUM7WUFRYSxxQkFBSSxHQUFsQixVQUFtQixHQUFPLEVBQUUsU0FBeUI7Z0JBQXpCLDBCQUFBLEVBQUEsaUJBQXlCO2dCQUVwRCxJQUFJLElBQUksR0FBVSxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBc0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLE9BQU8sRUFDWjtvQkFDQyxPQUFPLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO2lCQUNoQztnQkFDRCxPQUFPLE9BQU8sQ0FBQztZQUNoQixDQUFDO1lBRWEseUJBQVEsR0FBdEIsVUFBdUIsT0FBVyxFQUFFLE9BQVcsRUFBRSxVQUFlO2dCQUUvRCxJQUFJLElBQUksR0FBVSxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUMvQixJQUFJLE9BQU8sR0FBc0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLE9BQU8sRUFDWjtvQkFDQyxPQUFPLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztpQkFDaEM7Z0JBQ0QsT0FBTyxPQUFPLENBQUM7WUFDaEIsQ0FBQztZQUVhLDZCQUFZLEdBQTFCLFVBQTJCLEdBQU8sRUFBRSxVQUFjO2dCQUVqRCxJQUFJLElBQUksR0FBVSxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBc0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLE9BQU8sRUFDWjtvQkFDQyxPQUFPLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO2lCQUNoQztnQkFDRCxPQUFPLE9BQU8sQ0FBQztZQUNoQixDQUFDO1lBRWEsOEJBQWEsR0FBM0IsVUFBNEIsR0FBTztnQkFFbEMsSUFBSSxJQUFJLEdBQVUsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDM0IsSUFBSSxPQUFPLEdBQXNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sT0FBTyxDQUFDO1lBQ2hCLENBQUM7WUF0RWMsMkJBQVUsR0FBd0MsRUFBRSxDQUFDO1lBR3RELDhCQUFhLEdBQVUsaUJBQWlCLENBQUM7WUFvRXhELHVCQUFDO1NBekVELEFBeUVDLElBQUE7UUF6RVksb0JBQWdCLG1CQXlFNUIsQ0FBQTtJQUNGLENBQUMsRUE1RU0sR0FBRyxLQUFILEdBQUcsUUE0RVQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIG5hbWU7XHJcbiovXHJcbm1vZHVsZSBjb20gXHJcbntcclxuXHRleHBvcnQgY2xhc3MgSlREZWNvcmF0b3JVdGlscyBcclxuXHR7XHJcblx0XHRwcml2YXRlIHN0YXRpYyBfYmluZGVkTWFwOntbbmFtZTpzdHJpbmddIDogSlRDbGFzc0luamVjdEFsaWFzfSA9IHt9O1xyXG5cdFx0Ly8gcHJpdmF0ZSBzdGF0aWMgX3NpbmdsZXRvbk1hcDp7W25hbWU6c3RyaW5nXSA6IEpUQ2xhc3NBbGlzYX0gPSB7fTtcclxuXHJcblx0XHRwdWJsaWMgc3RhdGljIERFQ09SQVRPUl9LRVk6c3RyaW5nID0gXCJfX2MuZGVjb3JhdG9yX19cIjtcclxuXHRcdC8qKlxyXG5cdFx0ICog5qCH6K6w5b2T5YmN5a+56LGh5ZOq5Lqb5bGe5oCn6L+b6KGM5LqG5rOo5YWlXHJcblx0XHQgKiBAcGFyYW0gY2xzIOazqOWFpeeahOexu+Wei1xyXG5cdFx0ICogQHBhcmFtIHRhcmdldCDms6jlhaXnmoTnsbtcclxuXHRcdCAqIEBwYXJhbSBwcm9wZXJ0eSDooqvms6jlhaXnmoTlsZ7mgKflkI1cclxuXHRcdCAqIEByZXR1cm5zIOi/lOWbnuazqOWFpeWFs+mUruWtlyvlsZ7mgKflkI0gX19jLmRlY29yYXRvcl9fXHJcblx0XHQgKi9cclxuXHRcdHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJDbGFzc0FsaWFzKHRhcmdldDphbnksIHByb3BlcnR5OnN0cmluZyk6c3RyaW5nIFxyXG5cdFx0e1xyXG5cdFx0XHQgbGV0IF9fbGluZXM6c3RyaW5nW10gPSB0YXJnZXRbdGhpcy5ERUNPUkFUT1JfS0VZXTtcclxuXHRcdFx0IGlmICghX19saW5lcylcclxuXHRcdFx0IHtcclxuXHRcdFx0XHR0YXJnZXRbdGhpcy5ERUNPUkFUT1JfS0VZXSA9IF9fbGluZXMgPSBbXTtcclxuXHRcdFx0IH1cclxuXHRcdFx0IF9fbGluZXMucHVzaChwcm9wZXJ0eSk7XHJcblx0XHRcdGxldCBrZXk6c3RyaW5nID0gdGhpcy5ERUNPUkFUT1JfS0VZICsgcHJvcGVydHk7XHJcblx0XHRcdHJldHVybiBrZXk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDlhajlsYDljZXkvostLeS4gOS4qumhueebruS4reWPquiDveWtmOWcqOS4gOS7veWunuS+i++8iOS7pWNsc+WBmuS4uuWPgueFp+Wvueixoe+8iVxyXG5cdFx0ICogQHBhcmFtIGNscyBcclxuXHRcdCAqIEBwYXJhbSBkZXN0cm95ZWQgXHJcblx0XHQgKiBAcmV0dXJucyBcclxuXHRcdCAqL1xyXG5cdFx0cHVibGljIHN0YXRpYyBiaW5kKGNsczphbnksIGRlc3Ryb3llZDpib29sZWFuID0gZmFsc2UpOkpUQ2xhc3NJbmplY3RBbGlhc1xyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmFtZTpzdHJpbmcgPSBjbHMubmFtZTtcclxuXHRcdFx0bGV0IF9fY2xhc3M6SlRDbGFzc0luamVjdEFsaWFzID0gdGhpcy5fYmluZGVkTWFwW25hbWVdO1xyXG5cdFx0XHRpZiAoIV9fY2xhc3MpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRfX2NsYXNzID0gbmV3IEpUU2luZ2xldG9uQ2xhc3NBbGlhcyhjbHMsIGRlc3Ryb3llZCk7XHJcblx0XHRcdFx0dGhpcy5fYmluZGVkTWFwW25hbWVdID0gX19jbGFzcztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gX19jbGFzcztcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgc3RhdGljIGJpbmRQb29sKHBvb2xDbHM6YW55LCBpdGVtQ2xzOmFueSwgcGFyYW1ldGVycz86YW55KTpKVENsYXNzSW5qZWN0QWxpYXNcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5hbWU6c3RyaW5nID0gaXRlbUNscy5uYW1lO1xyXG5cdFx0XHRsZXQgX19jbGFzczpKVENsYXNzSW5qZWN0QWxpYXMgPSB0aGlzLl9iaW5kZWRNYXBbbmFtZV07XHJcblx0XHRcdGlmICghX19jbGFzcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdF9fY2xhc3MgPSBuZXcgSlRTaW5nbGV0b25Qb29sQWxpYXMocG9vbENscywgaXRlbUNscywgcGFyYW1ldGVycyk7XHJcblx0XHRcdFx0dGhpcy5fYmluZGVkTWFwW25hbWVdID0gX19jbGFzcztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gX19jbGFzcztcclxuXHRcdH1cclxuXHJcblx0XHRwdWJsaWMgc3RhdGljIGJpbmRUZW1wbGF0ZShjbHM6YW55LCBwYXJhbWV0ZXJzOmFueSk6SlRDbGFzc0luamVjdEFsaWFzXHJcblx0XHR7XHJcblx0XHRcdGxldCBuYW1lOnN0cmluZyA9IGNscy5uYW1lO1xyXG5cdFx0XHRsZXQgX19jbGFzczpKVENsYXNzSW5qZWN0QWxpYXMgPSB0aGlzLl9iaW5kZWRNYXBbbmFtZV07XHJcblx0XHRcdGlmICghX19jbGFzcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdF9fY2xhc3MgPSBuZXcgSlRDb25maWd1cmF0aW9uQWxpc2EoY2xzLCBwYXJhbWV0ZXJzKTtcclxuXHRcdFx0XHR0aGlzLl9iaW5kZWRNYXBbbmFtZV0gPSBfX2NsYXNzO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBfX2NsYXNzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHB1YmxpYyBzdGF0aWMgZ2V0Q2xhc3NBbGlzYShjbHM6YW55KTpKVENsYXNzSW5qZWN0QWxpYXNcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5hbWU6c3RyaW5nID0gY2xzLm5hbWU7XHJcblx0XHRcdGxldCBfX2NsYXNzOkpUQ2xhc3NJbmplY3RBbGlhcyA9IHRoaXMuX2JpbmRlZE1hcFtuYW1lXTtcclxuXHRcdFx0cmV0dXJuIF9fY2xhc3M7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl19