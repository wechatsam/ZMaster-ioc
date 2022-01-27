"use strict";
var com;
(function (com) {
    class JTTimerTool {
        constructor() {
            this._pause = false;
            this._tasks = null;
            this._currentTime = 0;
            this._tasks = [];
        }
        static launch(rate = "normal_rate") {
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
        }
        static get frameRate() {
            return this._frameRate;
        }
        static get frameRateTime() {
            if (this._frameRateTime == 0) {
                this._frameRateTime = 1000 / this._frameRate;
            }
            return this._frameRateTime;
        }
        stop() {
            this._pause = true;
            this._currentTime = 0;
        }
        static actives() {
            this.defaultTimer.active();
            this.animationTimer.active();
            this.logicTimer.active();
        }
        /**
         * 如果要使用优化计时器，需要外部计时器回调函数调用此方法
         */
        active() {
            if (this._currentTime == 0) {
                this._currentTime = com.JTTimeUtils.runnbleTime;
                return;
            }
            if (this._pause)
                return;
            let nowTime = com.JTTimeUtils.runnbleTime;
            let tick = nowTime - this._currentTime;
            this.syncTasksTick(tick);
            this.updateTasks();
            this._currentTime = nowTime;
        }
        syncTasksTick(tick) {
            let total = this._tasks.length;
            for (let i = 0; i < total; i++) {
                let task = this._tasks[i];
                task.running && task.updateTick(tick);
            }
        }
        updateTasks() {
            for (let i = 0; i < this._tasks.length; i++) {
                let task = this._tasks[i];
                if (!task.running) {
                    this._tasks.splice(i, 1);
                    i--;
                }
            }
        }
        addTask(task) {
            let index = this._tasks.indexOf(task);
            if (index != -1)
                return;
            this._tasks.push(task);
        }
        removeTask(task) {
            let index = this._tasks.indexOf(task);
            if (index != -1)
                return;
            this._tasks.splice(index, 1);
        }
        put(task) {
            let index = this._tasks.indexOf(task);
            if (index != -1)
                return;
            this._tasks.splice(index, 1);
            com.JTPool.instance(task["constructor"]).put(task);
        }
    }
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
    com.JTTimerTool = JTTimerTool;
})(com || (com = {}));
