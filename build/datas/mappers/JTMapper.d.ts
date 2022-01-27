declare namespace com {
    class JTMapper implements JTIMapper {
        /***
         * 只支持简单数据类型的深度复制,复杂数据类型为引用关系
         * 如果想要深度复制复杂数据请重写此方法
         **/
        clone(): JTMapper;
        update(data: Object): JTMapper;
        /***
         * 回收重写此方法
         */
        recycle(): void;
    }
}
