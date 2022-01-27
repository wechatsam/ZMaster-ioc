"use strict";
var com;
(function (com) {
    class JTMapper {
        /***
         * 只支持简单数据类型的深度复制,复杂数据类型为引用关系
         * 如果想要深度复制复杂数据请重写此方法
         **/
        clone() {
            var dataInfo = new JTMapper();
            dataInfo.update(this);
            return this;
        }
        update(data) {
            var keys = Object.keys(data);
            var obj = this;
            var l = keys.length;
            for (var i = 0; i < l; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    this[key] = data[key];
                }
            }
            return this;
        }
        /***
         * 回收重写此方法
         */
        recycle() { }
        ;
    }
    com.JTMapper = JTMapper;
})(com || (com = {}));
