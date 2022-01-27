declare namespace com {
    class JTClassMapper {
        protected __class: any;
        /**
         * 是否由对象池创建 ---false为new,
         */
        protected _createFromPool: boolean;
        /**
         * 这个设计和通信的解码decoder、编码encoder有些重复
         * 数据类型 -- 对象
         *            序列化对象
         *            字符串
         *            二进制流
         */
        protected _dataFormat: string;
        protected _pool: JTIPool;
        constructor(_class: any, createFromPool?: boolean);
        get createFromPool(): boolean;
        get pool(): JTIPool;
        create(): JTIMapper;
    }
}
