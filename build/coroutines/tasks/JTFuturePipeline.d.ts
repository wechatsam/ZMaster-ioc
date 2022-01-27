/// <reference path="../../events/JTEventDispatcher.d.ts" />
declare namespace com {
    class JTFuturePipeline extends JTEventDispatcher {
        protected _counter: JTCounter;
        protected _tasks: JTITaskExecutor[];
        protected _factroy: JTIFactory;
        protected _itemProvider: JTEvent;
        protected _itemRender: JTEvent;
        constructor(totalCount: number);
        /***
         *
         * */
        run(): Promise<any>;
        private createTasks;
        set factory(value: JTIFactory);
        set itemRender(value: JTEvent);
        set itemProvider(value: JTEvent);
        get counter(): JTCounter;
    }
}
