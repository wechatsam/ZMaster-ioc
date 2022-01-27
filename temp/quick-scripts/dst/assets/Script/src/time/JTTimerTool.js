
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/time/JTTimerTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ad2fQW6cBAn5KfdcovxU73', 'JTTimerTool');
// Script/src/time/JTTimerTool.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTTimerTool = (function () {
            function JTTimerTool() {
                this._pause = false;
                this._tasks = null;
                this._currentTime = 0;
                this._tasks = [];
            }
            JTTimerTool.launch = function (rate) {
                if (rate === void 0) { rate = "normal_rate"; }
                this.logicTimer = new JTTimerTool();
                this.defaultTimer = new JTTimerTool();
                this.animationTimer = new JTTimerTool();
                switch (rate) {
                    case this.FAST_RATE:
                        {
                            this._frameRate = this.FAST_FRAME_RATE;
                            break;
                        }
                    case this.NORMAL_RATE:
                        {
                            this._frameRate = this.NORMAL_FRAME_RATE;
                            break;
                        }
                    case this.SLOWY_RATE:
                        {
                            this._frameRate = this.SLOWY_FRAME_RATE;
                            break;
                        }
                }
            };
            Object.defineProperty(JTTimerTool, "frameRate", {
                get: function () {
                    return this._frameRate;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTTimerTool, "frameRateTime", {
                get: function () {
                    if (this._frameRateTime == 0) {
                        this._frameRateTime = 1000 / this._frameRate;
                    }
                    return this._frameRateTime;
                },
                enumerable: false,
                configurable: true
            });
            JTTimerTool.prototype.stop = function () {
                this._pause = true;
                this._currentTime = 0;
            };
            JTTimerTool.actives = function () {
                this.defaultTimer.active();
                this.animationTimer.active();
                this.logicTimer.active();
            };
            JTTimerTool.prototype.active = function () {
                if (this._currentTime == 0) {
                    this._currentTime = JTTimeUtils.runnbleTime;
                    return;
                }
                if (this._pause)
                    return;
                var nowTime = JTTimeUtils.runnbleTime;
                var tick = nowTime - this._currentTime;
                this.updateTicks(tick);
                this.updateTasks();
                this._currentTime = nowTime;
            };
            JTTimerTool.prototype.updateTicks = function (tick) {
                var total = this._tasks.length;
                for (var i = 0; i < total; i++) {
                    var task = this._tasks[i];
                    task.running && task.updateTick(tick);
                }
            };
            JTTimerTool.prototype.updateTasks = function () {
                for (var i = 0; i < this._tasks.length; i++) {
                    var task = this._tasks[i];
                    if (!task.running) {
                        this._tasks.splice(i, 1);
                        i--;
                    }
                }
            };
            JTTimerTool.prototype.addTask = function (task) {
                var index = this._tasks.indexOf(task);
                if (index != -1)
                    return;
                this._tasks.push(task);
            };
            JTTimerTool.prototype.removeTask = function (task) {
                var index = this._tasks.indexOf(task);
                if (index != -1)
                    return;
                this._tasks.splice(index, 1);
            };
            JTTimerTool.prototype.put = function (task) {
                var index = this._tasks.indexOf(task);
                if (index != -1)
                    return;
                this._tasks.splice(index, 1);
                JTPool.instance(task["constructor"]).put(task);
            };
            JTTimerTool.defaultTimer = null;
            JTTimerTool.animationTimer = null;
            JTTimerTool.logicTimer = null;
            JTTimerTool._frameRate = 0;
            JTTimerTool._frameRateTime = 0;
            JTTimerTool.FAST_RATE = "fast_rate";
            JTTimerTool.NORMAL_RATE = "normal_rate";
            JTTimerTool.SLOWY_RATE = "slowy_rate";
            JTTimerTool.FAST_FRAME_RATE = 120;
            JTTimerTool.NORMAL_FRAME_RATE = 60;
            JTTimerTool.SLOWY_FRAME_RATE = 30;
            return JTTimerTool;
        }());
        com.JTTimerTool = JTTimerTool;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXHRpbWVcXEpUVGltZXJUb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsSUFBVSxHQUFHLENBOElaO0lBOUlELFdBQVUsR0FBRztRQUVUO1lBbUJJO2dCQWRRLFdBQU0sR0FBVyxLQUFLLENBQUM7Z0JBQ3ZCLFdBQU0sR0FBa0IsSUFBSSxDQUFDO2dCQUM3QixpQkFBWSxHQUFVLENBQUMsQ0FBQztnQkFjNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQztZQUdhLGtCQUFNLEdBQXBCLFVBQXFCLElBQTJCO2dCQUEzQixxQkFBQSxFQUFBLG9CQUEyQjtnQkFFNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztnQkFDeEMsUUFBTyxJQUFJLEVBQ1g7b0JBQ0ksS0FBSyxJQUFJLENBQUMsU0FBUzt3QkFDbkI7NEJBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDOzRCQUN2QyxNQUFNO3lCQUNUO29CQUNELEtBQUssSUFBSSxDQUFDLFdBQVc7d0JBQ3JCOzRCQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzRCQUN6QyxNQUFNO3lCQUNUO29CQUNELEtBQUssSUFBSSxDQUFDLFVBQVU7d0JBQ3BCOzRCQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOzRCQUN4QyxNQUFNO3lCQUNUO2lCQUNKO1lBQ0wsQ0FBQztZQUVELHNCQUFrQix3QkFBUztxQkFBM0I7b0JBRUssT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUM1QixDQUFDOzs7ZUFBQTtZQUVELHNCQUFr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akMsQ0FBQztZQUVNLHlCQUFHLEdBQVYsVUFBVyxJQUFpQjtnQkFFeEIsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFBRSxPQUFPO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQVcsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUF4SWEsd0JBQVksR0FBZSxJQUFJLENBQUM7WUFDaEMsMEJBQWMsR0FBZSxJQUFJLENBQUM7WUFDbEMsc0JBQVUsR0FBZSxJQUFJLENBQUM7WUFJN0Isc0JBQVUsR0FBVSxDQUFDLENBQUM7WUFDdEIsMEJBQWMsR0FBVSxDQUFDLENBQUM7WUFFM0IscUJBQVMsR0FBVSxXQUFXLENBQUM7WUFDL0IsdUJBQVcsR0FBVSxhQUFhLENBQUM7WUFDbkMsc0JBQVUsR0FBVSxZQUFZLENBQUM7WUFFakMsMkJBQWUsR0FBVSxHQUFHLENBQUM7WUFDN0IsNkJBQWlCLEdBQVUsRUFBRSxDQUFDO1lBQzlCLDRCQUFnQixHQUFVLEVBQUUsQ0FBQztZQTBIL0Msa0JBQUM7U0EzSUQsQUEySUMsSUFBQTtRQTNJWSxlQUFXLGNBMkl2QixDQUFBO0lBQ0wsQ0FBQyxFQTlJUyxHQUFHLEtBQUgsR0FBRyxRQThJWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIGV4cG9ydCBjbGFzcyBKVFRpbWVyVG9vbFxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFRpbWVyOkpUVGltZXJUb29sID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFuaW1hdGlvblRpbWVyOkpUVGltZXJUb29sID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGxvZ2ljVGltZXI6SlRUaW1lclRvb2wgPSBudWxsO1xyXG4gICAgICAgIHByaXZhdGUgX3BhdXNlOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBwcml2YXRlIF90YXNrczpKVElUaW1lclRhc2tbXSA9IG51bGw7XHJcbiAgICAgICAgcHJpdmF0ZSBfY3VycmVudFRpbWU6bnVtYmVyID0gMDtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfZnJhbWVSYXRlOm51bWJlciA9IDA7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgX2ZyYW1lUmF0ZVRpbWU6bnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBGQVNUX1JBVEU6c3RyaW5nID0gXCJmYXN0X3JhdGVcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE5PUk1BTF9SQVRFOnN0cmluZyA9IFwibm9ybWFsX3JhdGVcIjtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIFNMT1dZX1JBVEU6c3RyaW5nID0gXCJzbG93eV9yYXRlXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgRkFTVF9GUkFNRV9SQVRFOm51bWJlciA9IDEyMDtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIE5PUk1BTF9GUkFNRV9SQVRFOm51bWJlciA9IDYwO1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgU0xPV1lfRlJBTUVfUkFURTpudW1iZXIgPSAzMDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFza3MgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGxhdW5jaChyYXRlOnN0cmluZyA9IFwibm9ybWFsX3JhdGVcIik6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpY1RpbWVyID0gbmV3IEpUVGltZXJUb29sKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRpbWVyID0gbmV3IEpUVGltZXJUb29sKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgPSBuZXcgSlRUaW1lclRvb2woKTtcclxuICAgICAgICAgICAgc3dpdGNoKHJhdGUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5GQVNUX1JBVEU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJhbWVSYXRlID0gdGhpcy5GQVNUX0ZSQU1FX1JBVEU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuTk9STUFMX1JBVEU6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZnJhbWVSYXRlID0gdGhpcy5OT1JNQUxfRlJBTUVfUkFURTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5TTE9XWV9SQVRFOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lUmF0ZSA9IHRoaXMuU0xPV1lfRlJBTUVfUkFURTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgZnJhbWVSYXRlKCk6bnVtYmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZyYW1lUmF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZyYW1lUmF0ZVRpbWUoKTpudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mcmFtZVJhdGVUaW1lID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZyYW1lUmF0ZVRpbWUgPSAxMDAwIC8gdGhpcy5fZnJhbWVSYXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcmFtZVJhdGVUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0b3AoKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXVzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgYWN0aXZlcygpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRpbWVyLmFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyLmFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2ljVGltZXIuYWN0aXZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlpoLmnpzopoHkvb/nlKjkvJjljJborqHml7blmajvvIzpnIDopoHlpJbpg6jorqHml7blmajlm57osIPlh73mlbDosIPnlKjmraTmlrnms5VcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgYWN0aXZlKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRUaW1lID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gSlRUaW1lVXRpbHMucnVubmJsZVRpbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhdXNlKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBub3dUaW1lOm51bWJlciA9IEpUVGltZVV0aWxzLnJ1bm5ibGVUaW1lO1xyXG4gICAgICAgICAgICBsZXQgdGljazpudW1iZXIgPSBub3dUaW1lIC0gdGhpcy5fY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGlja3ModGljayk7Ly/nu5/kuIDml7bpl7TvvIzmr4/kuIDorqHml7blmajku7vliqHmoLnmja7mg4XlhrXlgZrkuI3lkIznmoTkuotcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrcygpO1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IG5vd1RpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlVGlja3ModGljazpudW1iZXIpOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbDpudW1iZXIgPSB0aGlzLl90YXNrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk6bnVtYmVyID0gMDsgaSA8IHRvdGFsOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrOkpUSVRpbWVyVGFzayA9IHRoaXMuX3Rhc2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgdGFzay5ydW5uaW5nICYmIHRhc2sudXBkYXRlVGljayh0aWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZVRhc2tzKCk6dm9pZFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgdGhpcy5fdGFza3MubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrOkpUSVRpbWVyVGFzayA9IHRoaXMuX3Rhc2tzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrLnJ1bm5pbmcpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFza3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgLS1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGFkZFRhc2sodGFzazpKVElUaW1lclRhc2spOnZvaWRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDpudW1iZXIgPSB0aGlzLl90YXNrcy5pbmRleE9mKHRhc2spO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5fdGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZW1vdmVUYXNrKHRhc2s6SlRJVGltZXJUYXNrKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXg6bnVtYmVyID0gdGhpcy5fdGFza3MuaW5kZXhPZih0YXNrKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcHV0KHRhc2s6SlRJVGltZXJUYXNrKTp2b2lkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXg6bnVtYmVyID0gdGhpcy5fdGFza3MuaW5kZXhPZih0YXNrKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuX3Rhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIEpUUG9vbC5pbnN0YW5jZSh0YXNrW1wiY29uc3RydWN0b3JcIl0pLnB1dCh0YXNrIGFzIGFueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==