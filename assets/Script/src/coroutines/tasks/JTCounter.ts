module com 
{
    /**
     * 计数器
     */
    export class JTCounter extends JTLocker
    {
        /*
        *失败次数
        */
        protected _failCount:number = 0;
        /*
        *成功次数
        */
        protected _succeedCount:number = 0;
        /*
        *已经完成的次数
        */
        protected _lockedCount:number = 0;

        constructor()
        {
            super();
        }

        /**
         * 释放锁
         */
        public release():void
        {
            super.release();
            this._succeedCount ++;
            this._lockedCount ++;
        }

        /**
         * 强制性解锁--取消锁
         */
        public kill():void
        {
            super.kill();
            this._failCount ++;
            this._lockedCount ++;
        }

        /**
         * 成功的次数
         */
        public get succeedCount():number
        {
            return this._succeedCount;
        }
        /**
         * 失败的次数
         */
        public get failCount():number
        {
            return this._failCount;
        }

        public recycle() 
        {
            super.recycle();
            this._failCount = this._lockedCount = this._succeedCount = 0;
        }

        /**
         * 重置
         */
        public reset():void
        {
            this.recycle();
        }

        /**
         * 当前执行的次数
         */
        public get lockedCount():number
        {
            return this._lockedCount;
        }

        public static create():JTCounter
        {
            return JTPool.instance(JTCounter).get() as JTCounter;
        }
   
    }
}