"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
///<reference path="../../events/JTEventDispatcher.ts"/>
var com;
(function (com) {
    class JTFuturePipeline extends com.JTEventDispatcher {
        constructor(totalCount) {
            super();
            this._counter = com.JTCounter.create();
            this._tasks = null;
            this._factroy = null;
            this._itemProvider = null;
            this._itemRender = null;
            this._counter.setTotalCount(totalCount);
        }
        /***
         *
         * */
        run() {
            return __awaiter(this, void 0, void 0, function* () {
                this._tasks = this.createTasks();
                while (this._tasks.length) {
                    let task = this._tasks.shift();
                    task.relevance(this._counter);
                    task.execute();
                    yield this._counter.lock();
                    this.dispatchEvent(com.JTTaskEvent.TASK_PROGRESS, this);
                    task.recycle();
                }
                if (this._counter.completed) {
                    this.dispatchEvent(com.JTTaskEvent.TASK_COMPLETE, this);
                }
            });
        }
        createTasks() {
            let taskList = [];
            let totalCount = this._counter.totalCount;
            if (this._itemRender) {
                for (let i = 0; i < totalCount; i++) {
                    let task = this._itemRender.run();
                    taskList.push(task);
                }
            }
            else if (this._itemProvider) {
                for (let i = 0; i < totalCount; i++) {
                    let task = this._itemProvider.runWith([i, totalCount]);
                    taskList.push(task);
                }
            }
            else if (this._factroy) {
                for (let i = 0; i < totalCount; i++) {
                    let task = this._factroy.produce();
                    taskList.push(task);
                }
            }
            return taskList;
        }
        set factory(value) {
            this._factroy = value;
        }
        set itemRender(value) {
            this._itemRender = value;
        }
        set itemProvider(value) {
            this._itemProvider = value;
        }
        get counter() {
            return this._counter;
        }
    }
    com.JTFuturePipeline = JTFuturePipeline;
})(com || (com = {}));
