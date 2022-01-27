"use strict";
var com;
(function (com) {
    /**
     * <code>Point</code> 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
     */
    class JTPoint {
        /**
         * 根据指定坐标，创建一个新的 <code>Point</code> 对象。
         * @param x	（可选）水平坐标。
         * @param y	（可选）垂直坐标。
         */
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
        recycle() {
            this.x = this.y = 0;
            return this;
        }
        static get pool() {
            if (!this._pool) {
                this._pool = com.JTPool.instance(JTPoint);
            }
            return this._pool;
        }
        static create() {
            return this.pool.get();
        }
        static put(point) {
            this.pool.put(point);
        }
        /**
         * 将 <code>Point</code> 的成员设置为指定值。
         * @param	x 水平坐标。
         * @param	y 垂直坐标。
         * @return 当前 Point 对象。
         */
        setTo(x, y) {
            this.x = x;
            this.y = y;
            return this;
        }
        /**
         * 计算当前点和目标点(x，y)的距离。
         * @param	x 水平坐标。
         * @param	y 垂直坐标。
         * @return	返回当前点和目标点之间的距离。
         */
        distance(x, y) {
            return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
        }
        /**返回包含 x 和 y 坐标的值的字符串。*/
        toString() {
            return this.x + "," + this.y;
        }
        /**
         * 标准化向量。
         */
        normalize() {
            var d = Math.sqrt(this.x * this.x + this.y * this.y);
            if (d > 0) {
                var id = 1.0 / d;
                this.x *= id;
                this.y *= id;
            }
        }
        /**
         * copy point坐标
         * @param	point 需要被copy的point
         */
        copy(point) {
            return this.setTo(point.x, point.y);
        }
    }
    /**临时使用的公用对象。*/
    JTPoint.TEMP = new JTPoint();
    /**@private 全局空的point对象(x=0，y=0)，不允许修改此对象内容*/
    JTPoint.EMPTY = new JTPoint();
    JTPoint._pool = null;
    com.JTPoint = JTPoint;
})(com || (com = {}));
