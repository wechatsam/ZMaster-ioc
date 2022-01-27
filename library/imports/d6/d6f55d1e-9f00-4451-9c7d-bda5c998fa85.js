"use strict";
cc._RF.push(module, 'd6f550enwBEUZx9vaXJmPqF', 'JTPoint');
// Script/src/common/JTPoint.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTPoint = (function () {
            function JTPoint(x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                this.x = x;
                this.y = y;
            }
            JTPoint.prototype.recycle = function () {
                this.x = this.y = 0;
                return this;
            };
            Object.defineProperty(JTPoint, "pool", {
                get: function () {
                    if (!this._pool) {
                        this._pool = JTPool.instance(JTPoint);
                    }
                    return this._pool;
                },
                enumerable: false,
                configurable: true
            });
            JTPoint.create = function () {
                return this.pool.get();
            };
            JTPoint.put = function (point) {
                this.pool.put(point);
            };
            JTPoint.prototype.setTo = function (x, y) {
                this.x = x;
                this.y = y;
                return this;
            };
            JTPoint.prototype.distance = function (x, y) {
                return Math.sqrt((this.x - x) * (this.x - x) + (this.y - y) * (this.y - y));
            };
            JTPoint.prototype.toString = function () {
                return this.x + "," + this.y;
            };
            JTPoint.prototype.normalize = function () {
                var d = Math.sqrt(this.x * this.x + this.y * this.y);
                if (d > 0) {
                    var id = 1.0 / d;
                    this.x *= id;
                    this.y *= id;
                }
            };
            JTPoint.prototype.copy = function (point) {
                return this.setTo(point.x, point.y);
            };
            JTPoint.TEMP = new JTPoint();
            JTPoint.EMPTY = new JTPoint();
            JTPoint._pool = null;
            return JTPoint;
        }());
        com.JTPoint = JTPoint;
    })(com || (com = {}));
});

cc._RF.pop();