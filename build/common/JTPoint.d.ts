declare namespace com {
    /**
     * <code>Point</code> 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
     */
    class JTPoint implements JTIPoolObject {
        /**临时使用的公用对象。*/
        static TEMP: JTPoint;
        /**@private 全局空的point对象(x=0，y=0)，不允许修改此对象内容*/
        static EMPTY: JTPoint;
        /**该点的水平坐标。*/
        x: number;
        /**该点的垂直坐标。*/
        y: number;
        /**
         * 根据指定坐标，创建一个新的 <code>Point</code> 对象。
         * @param x	（可选）水平坐标。
         * @param y	（可选）垂直坐标。
         */
        constructor(x?: number, y?: number);
        recycle(): this;
        static get pool(): JTIPool;
        private static _pool;
        static create(): JTPoint;
        static put(point: JTPoint): void;
        /**
         * 将 <code>Point</code> 的成员设置为指定值。
         * @param	x 水平坐标。
         * @param	y 垂直坐标。
         * @return 当前 Point 对象。
         */
        setTo(x: number, y: number): JTPoint;
        /**
         * 计算当前点和目标点(x，y)的距离。
         * @param	x 水平坐标。
         * @param	y 垂直坐标。
         * @return	返回当前点和目标点之间的距离。
         */
        distance(x: number, y: number): number;
        /**返回包含 x 和 y 坐标的值的字符串。*/
        toString(): string;
        /**
         * 标准化向量。
         */
        normalize(): void;
        /**
         * copy point坐标
         * @param	point 需要被copy的point
         */
        copy(point: JTPoint): JTPoint;
    }
}
