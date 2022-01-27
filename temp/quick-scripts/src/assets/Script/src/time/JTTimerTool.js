"use strict";
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