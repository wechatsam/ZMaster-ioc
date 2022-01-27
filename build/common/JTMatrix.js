"use strict";
var com;
(function (com) {
    /**
     * <p> <code>Matrix</code> 类表示一个转换矩阵，它确定如何将点从一个坐标空间映射到另一个坐标空间。</p>
     * <p>您可以对一个显示对象执行不同的图形转换，方法是设置 Matrix 对象的属性，将该 Matrix 对象应用于 Transform 对象的 matrix 属性，然后应用该 Transform 对象作为显示对象的 transform 属性。这些转换函数包括平移（x 和 y 重新定位）、旋转、缩放和倾斜。</p>
     */
    class JTMatrix {
        /**
         * 使用指定参数创建新的 <code>Matrix</code> 对象。
         * @param a		（可选）缩放或旋转图像时影响像素沿 x 轴定位的值。
         * @param b		（可选）旋转或倾斜图像时影响像素沿 y 轴定位的值。
         * @param c		（可选）旋转或倾斜图像时影响像素沿 x 轴定位的值。
         * @param d		（可选）缩放或旋转图像时影响像素沿 y 轴定位的值。
         * @param tx	（可选）沿 x 轴平移每个点的距离。
         * @param ty	（可选）沿 y 轴平移每个点的距离。
         */
        constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0, nums = 0) {
            /**@internal 是否有旋转缩放操作*/
            this._bTransform = false;
            if (JTMatrix._createFun != null) {
                return JTMatrix._createFun(a, b, c, d, tx, ty, nums);
            }
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
            this._checkTransform();
        }
        /**
         * 将本矩阵设置为单位矩阵。
         * @return 返回当前矩形。
         */
        identity() {
            this.a = this.d = 1;
            this.b = this.tx = this.ty = this.c = 0;
            this._bTransform = false;
            return this;
        }
        /**@internal */
        _checkTransform() {
            return this._bTransform = (this.a !== 1 || this.b !== 0 || this.c !== 0 || this.d !== 1);
        }
        /**
         * 设置沿 x 、y 轴平移每个点的距离。
         * @param	x 沿 x 轴平移每个点的距离。
         * @param	y 沿 y 轴平移每个点的距离。
         * @return	返回对象本身
         */
        setTranslate(x, y) {
            this.tx = x;
            this.ty = y;
            return this;
        }
        /**
         * 沿 x 和 y 轴平移矩阵，平移的变化量由 x 和 y 参数指定。
         * @param	x 沿 x 轴向右移动的量（以像素为单位）。
         * @param	y 沿 y 轴向下移动的量（以像素为单位）。
         * @return 返回此矩形对象。
         */
        translate(x, y) {
            this.tx += x;
            this.ty += y;
            return this;
        }
        /**
         * 对矩阵应用缩放转换。
         * @param	x 用于沿 x 轴缩放对象的乘数。
         * @param	y 用于沿 y 轴缩放对象的乘数。
         * @return	返回矩阵对象本身
         */
        scale(x, y) {
            this.a *= x;
            this.d *= y;
            this.c *= x;
            this.b *= y;
            this.tx *= x;
            this.ty *= y;
            this._bTransform = true;
            return this;
        }
        /**
         * 对 Matrix 对象应用旋转转换。
         * @param	angle 以弧度为单位的旋转角度。
         * @return	返回矩阵对象本身
         */
        rotate(angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var a1 = this.a;
            var c1 = this.c;
            var tx1 = this.tx;
            this.a = a1 * cos - this.b * sin;
            this.b = a1 * sin + this.b * cos;
            this.c = c1 * cos - this.d * sin;
            this.d = c1 * sin + this.d * cos;
            this.tx = tx1 * cos - this.ty * sin;
            this.ty = tx1 * sin + this.ty * cos;
            this._bTransform = true;
            return this;
        }
        /**
         * 对 Matrix 对象应用倾斜转换。
         * @param	x 沿着 X 轴的 2D 倾斜弧度。
         * @param	y 沿着 Y 轴的 2D 倾斜弧度。
         * @return 当前 Matrix 对象。
         */
        skew(x, y) {
            var tanX = Math.tan(x);
            var tanY = Math.tan(y);
            var a1 = this.a;
            var b1 = this.b;
            this.a += tanY * this.c;
            this.b += tanY * this.d;
            this.c += tanX * a1;
            this.d += tanX * b1;
            return this;
        }
        /**
         * 对指定的点应用当前矩阵的逆转化并返回此点。
         * @param	out 待转化的点 Point 对象。
         * @return	返回out
         */
        invertTransformPoint(out) {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;
            var a2 = d1 / n;
            var b2 = -b1 / n;
            var c2 = -c1 / n;
            var d2 = a1 / n;
            var tx2 = (c1 * this.ty - d1 * tx1) / n;
            var ty2 = -(a1 * this.ty - b1 * tx1) / n;
            return out.setTo(a2 * out.x + c2 * out.y + tx2, b2 * out.x + d2 * out.y + ty2);
        }
        /**
         * 将 Matrix 对象表示的几何转换应用于指定点。
         * @param	out 用来设定输出结果的点。
         * @return	返回out
         */
        transformPoint(out) {
            return out.setTo(this.a * out.x + this.c * out.y + this.tx, this.b * out.x + this.d * out.y + this.ty);
        }
        /**
         * 将 Matrix 对象表示的几何转换应用于指定点，忽略tx、ty。
         * @param	out 用来设定输出结果的点。
         * @return	返回out
         */
        transformPointN(out) {
            return out.setTo(this.a * out.x + this.c * out.y /*+ tx*/, this.b * out.x + this.d * out.y /*+ ty*/);
        }
        /**
         * 获取 X 轴缩放值。
         * @return  X 轴缩放值。
         */
        getScaleX() {
            return this.b === 0 ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
        }
        /**
         * 获取 Y 轴缩放值。
         * @return Y 轴缩放值。
         */
        getScaleY() {
            return this.c === 0 ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
        }
        /**
         * 执行原始矩阵的逆转换。
         * @return 当前矩阵对象。
         */
        invert() {
            var a1 = this.a;
            var b1 = this.b;
            var c1 = this.c;
            var d1 = this.d;
            var tx1 = this.tx;
            var n = a1 * d1 - b1 * c1;
            this.a = d1 / n;
            this.b = -b1 / n;
            this.c = -c1 / n;
            this.d = a1 / n;
            this.tx = (c1 * this.ty - d1 * tx1) / n;
            this.ty = -(a1 * this.ty - b1 * tx1) / n;
            return this;
        }
        /**
         *  将 Matrix 的成员设置为指定值。
         * @param	a 缩放或旋转图像时影响像素沿 x 轴定位的值。
         * @param	b 旋转或倾斜图像时影响像素沿 y 轴定位的值。
         * @param	c 旋转或倾斜图像时影响像素沿 x 轴定位的值。
         * @param	d 缩放或旋转图像时影响像素沿 y 轴定位的值。
         * @param	tx 沿 x 轴平移每个点的距离。
         * @param	ty 沿 y 轴平移每个点的距离。
         * @return 当前矩阵对象。
         */
        setTo(a, b, c, d, tx, ty) {
            this.a = a, this.b = b, this.c = c, this.d = d, this.tx = tx, this.ty = ty;
            return this;
        }
        /**
         * 将指定矩阵与当前矩阵连接，从而将这两个矩阵的几何效果有效地结合在一起。
         * @param	matrix 要连接到源矩阵的矩阵。
         * @return	当前矩阵。
         */
        concat(matrix) {
            var a = this.a;
            var c = this.c;
            var tx = this.tx;
            this.a = a * matrix.a + this.b * matrix.c;
            this.b = a * matrix.b + this.b * matrix.d;
            this.c = c * matrix.a + this.d * matrix.c;
            this.d = c * matrix.b + this.d * matrix.d;
            this.tx = tx * matrix.a + this.ty * matrix.c + matrix.tx;
            this.ty = tx * matrix.b + this.ty * matrix.d + matrix.ty;
            return this;
        }
        /**
         * 将指定的两个矩阵相乘后的结果赋值给指定的输出对象。
         * @param	m1 矩阵一。
         * @param	m2 矩阵二。
         * @param	out 输出对象。
         * @return	结果输出对象 out。
         */
        static mul(m1, m2, out) {
            var aa = m1.a, ab = m1.b, ac = m1.c, ad = m1.d, atx = m1.tx, aty = m1.ty;
            var ba = m2.a, bb = m2.b, bc = m2.c, bd = m2.d, btx = m2.tx, bty = m2.ty;
            if (bb !== 0 || bc !== 0) {
                out.a = aa * ba + ab * bc;
                out.b = aa * bb + ab * bd;
                out.c = ac * ba + ad * bc;
                out.d = ac * bb + ad * bd;
                out.tx = ba * atx + bc * aty + btx;
                out.ty = bb * atx + bd * aty + bty;
            }
            else {
                out.a = aa * ba;
                out.b = ab * bd;
                out.c = ac * ba;
                out.d = ad * bd;
                out.tx = ba * atx + btx;
                out.ty = bd * aty + bty;
            }
            return out;
        }
        /**
         * 将指定的两个矩阵相乘，结果赋值给指定的输出数组，长度为16。
         * @param m1	矩阵一。
         * @param m2	矩阵二。
         * @param out	输出对象Array。
         * @return 结果输出对象 out。
         */
        static mul16(m1, m2, out) {
            var aa = m1.a, ab = m1.b, ac = m1.c, ad = m1.d, atx = m1.tx, aty = m1.ty;
            var ba = m2.a, bb = m2.b, bc = m2.c, bd = m2.d, btx = m2.tx, bty = m2.ty;
            if (bb !== 0 || bc !== 0) {
                out[0] = aa * ba + ab * bc;
                out[1] = aa * bb + ab * bd;
                out[4] = ac * ba + ad * bc;
                out[5] = ac * bb + ad * bd;
                out[12] = ba * atx + bc * aty + btx;
                out[13] = bb * atx + bd * aty + bty;
            }
            else {
                out[0] = aa * ba;
                out[1] = ab * bd;
                out[4] = ac * ba;
                out[5] = ad * bd;
                out[12] = ba * atx + btx;
                out[13] = bd * aty + bty;
            }
            return out;
        }
        /**
         * @private
         * 对矩阵应用缩放转换。反向相乘
         * @param	x 用于沿 x 轴缩放对象的乘数。
         * @param	y 用于沿 y 轴缩放对象的乘数。
         */
        scaleEx(x, y) {
            var ba = this.a, bb = this.b, bc = this.c, bd = this.d;
            if (bb !== 0 || bc !== 0) {
                this.a = x * ba;
                this.b = x * bb;
                this.c = y * bc;
                this.d = y * bd;
            }
            else {
                this.a = x * ba;
                this.b = 0 * bd;
                this.c = 0 * ba;
                this.d = y * bd;
            }
            this._bTransform = true;
        }
        /**
         * @private
         * 对 Matrix 对象应用旋转转换。反向相乘
         * @param	angle 以弧度为单位的旋转角度。
         */
        rotateEx(angle) {
            var cos = Math.cos(angle);
            var sin = Math.sin(angle);
            var ba = this.a, bb = this.b, bc = this.c, bd = this.d;
            if (bb !== 0 || bc !== 0) {
                this.a = cos * ba + sin * bc;
                this.b = cos * bb + sin * bd;
                this.c = -sin * ba + cos * bc;
                this.d = -sin * bb + cos * bd;
            }
            else {
                this.a = cos * ba;
                this.b = sin * bd;
                this.c = -sin * ba;
                this.d = cos * bd;
            }
            this._bTransform = true;
        }
        /**
         * 返回此 Matrix 对象的副本。
         * @return 与原始实例具有完全相同的属性的新 Matrix 实例。
         */
        clone() {
            var dec = JTMatrix.create();
            dec.a = this.a;
            dec.b = this.b;
            dec.c = this.c;
            dec.d = this.d;
            dec.tx = this.tx;
            dec.ty = this.ty;
            dec._bTransform = this._bTransform;
            return dec;
        }
        /**
         * 将当前 Matrix 对象中的所有矩阵数据复制到指定的 Matrix 对象中。
         * @param	dec 要复制当前矩阵数据的 Matrix 对象。
         * @return	已复制当前矩阵数据的 Matrix 对象。
         */
        copyTo(dec) {
            dec.a = this.a;
            dec.b = this.b;
            dec.c = this.c;
            dec.d = this.d;
            dec.tx = this.tx;
            dec.ty = this.ty;
            dec._bTransform = this._bTransform;
            return dec;
        }
        /**
         * 返回列出该 Matrix 对象属性的文本值。
         * @return 一个字符串，它包含 Matrix 对象的属性值：a、b、c、d、tx 和 ty。
         */
        toString() {
            return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
        }
        /**
         * 销毁此对象。
         */
        destroy() {
            this.recycle();
        }
        recycle() {
            this.identity();
        }
        static get pool() {
            if (!this._pool) {
                this._pool = com.JTPool.instance(JTMatrix);
            }
            return this._pool;
        }
        static create() {
            return this.pool.get();
        }
        static put(point) {
            this.pool.put(point);
        }
    }
    /**@private 一个初始化的 <code>Matrix</code> 对象，不允许修改此对象内容。*/
    JTMatrix.EMPTY = new JTMatrix();
    /**用于中转使用的 <code>Matrix</code> 对象。*/
    JTMatrix.TEMP = new JTMatrix();
    /**@internal */
    JTMatrix._createFun = null;
    JTMatrix._pool = null;
    com.JTMatrix = JTMatrix;
})(com || (com = {}));
