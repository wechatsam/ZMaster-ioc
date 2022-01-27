
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/src/network/base/JTBuffer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bfe3/bs+hH6pfcku/8rJbS', 'JTBuffer');
// Script/src/network/base/JTBuffer.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        var JTBuffer = (function () {
            function JTBuffer(data) {
                if (data === void 0) { data = null; }
                this._xd_ = true;
                this._allocated_ = 8;
                this._pos_ = 0;
                this._length = 0;
                if (data) {
                    this._u8d_ = new Uint8Array(data);
                    this._d_ = new DataView(this._u8d_.buffer);
                    this._length = this._d_.byteLength;
                }
                else {
                    this._resizeBuffer(this._allocated_);
                }
            }
            JTBuffer.getSystemEndian = function () {
                if (!JTBuffer._sysEndian) {
                    var buffer = new ArrayBuffer(2);
                    new DataView(buffer).setInt16(0, 256, true);
                    JTBuffer._sysEndian = (new Int16Array(buffer))[0] === 256 ? JTBuffer.LITTLE_ENDIAN : JTBuffer.BIG_ENDIAN;
                }
                return JTBuffer._sysEndian;
            };
            Object.defineProperty(JTBuffer.prototype, "buffer", {
                get: function () {
                    var rstBuffer = this._d_.buffer;
                    if (rstBuffer.byteLength === this._length)
                        return rstBuffer;
                    return rstBuffer.slice(0, this._length);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTBuffer.prototype, "endian", {
                get: function () {
                    return this._xd_ ? JTBuffer.LITTLE_ENDIAN : JTBuffer.BIG_ENDIAN;
                },
                set: function (value) {
                    this._xd_ = (value === JTBuffer.LITTLE_ENDIAN);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTBuffer.prototype, "length", {
                get: function () {
                    return this._length;
                },
                set: function (value) {
                    if (this._allocated_ < value)
                        this._resizeBuffer(this._allocated_ = Math.floor(Math.max(value, this._allocated_ * 2)));
                    else if (this._allocated_ > value)
                        this._resizeBuffer(this._allocated_ = value);
                    this._length = value;
                },
                enumerable: false,
                configurable: true
            });
            JTBuffer.prototype._resizeBuffer = function (len) {
                try {
                    var newByteView = new Uint8Array(len);
                    if (this._u8d_ != null) {
                        if (this._u8d_.length <= len)
                            newByteView.set(this._u8d_);
                        else
                            newByteView.set(this._u8d_.subarray(0, len));
                    }
                    this._u8d_ = newByteView;
                    this._d_ = new DataView(newByteView.buffer);
                }
                catch (err) {
                    throw "Invalid typed array length:" + len;
                }
            };
            JTBuffer.prototype.getString = function () {
                return this.readString();
            };
            JTBuffer.prototype.readString = function () {
                return this._rUTF(this.getUint16());
            };
            JTBuffer.prototype.getFloat32Array = function (start, len) {
                return this.readFloat32Array(start, len);
            };
            JTBuffer.prototype.readFloat32Array = function (start, len) {
                var end = start + len;
                end = (end > this._length) ? this._length : end;
                var v = new Float32Array(this._d_.buffer.slice(start, end));
                this._pos_ = end;
                return v;
            };
            JTBuffer.prototype.getUint8Array = function (start, len) {
                return this.readUint8Array(start, len);
            };
            JTBuffer.prototype.readUint8Array = function (start, len) {
                var end = start + len;
                end = (end > this._length) ? this._length : end;
                var v = new Uint8Array(this._d_.buffer.slice(start, end));
                this._pos_ = end;
                return v;
            };
            JTBuffer.prototype.getInt16Array = function (start, len) {
                return this.readInt16Array(start, len);
            };
            JTBuffer.prototype.readInt16Array = function (start, len) {
                var end = start + len;
                end = (end > this._length) ? this._length : end;
                var v = new Int16Array(this._d_.buffer.slice(start, end));
                this._pos_ = end;
                return v;
            };
            JTBuffer.prototype.getFloat32 = function () {
                return this.readFloat32();
            };
            JTBuffer.prototype.readFloat32 = function () {
                if (this._pos_ + 4 > this._length)
                    throw "getFloat32 error - Out of bounds";
                var v = this._d_.getFloat32(this._pos_, this._xd_);
                this._pos_ += 4;
                return v;
            };
            JTBuffer.prototype.getFloat64 = function () {
                return this.readFloat64();
            };
            JTBuffer.prototype.readFloat64 = function () {
                if (this._pos_ + 8 > this._length)
                    throw "getFloat64 error - Out of bounds";
                var v = this._d_.getFloat64(this._pos_, this._xd_);
                this._pos_ += 8;
                return v;
            };
            JTBuffer.prototype.writeFloat32 = function (value) {
                this._ensureWrite(this._pos_ + 4);
                this._d_.setFloat32(this._pos_, value, this._xd_);
                this._pos_ += 4;
            };
            JTBuffer.prototype.writeFloat64 = function (value) {
                this._ensureWrite(this._pos_ + 8);
                this._d_.setFloat64(this._pos_, value, this._xd_);
                this._pos_ += 8;
            };
            JTBuffer.prototype.getInt32 = function () {
                return this.readInt32();
            };
            JTBuffer.prototype.readInt32 = function () {
                if (this._pos_ + 4 > this._length)
                    throw "getInt32 error - Out of bounds";
                var float = this._d_.getInt32(this._pos_, this._xd_);
                this._pos_ += 4;
                return float;
            };
            JTBuffer.prototype.getUint32 = function () {
                return this.readUint32();
            };
            JTBuffer.prototype.readUint32 = function () {
                if (this._pos_ + 4 > this._length)
                    throw "getUint32 error - Out of bounds";
                var v = this._d_.getUint32(this._pos_, this._xd_);
                this._pos_ += 4;
                return v;
            };
            JTBuffer.prototype.writeInt32 = function (value) {
                this._ensureWrite(this._pos_ + 4);
                this._d_.setInt32(this._pos_, value, this._xd_);
                this._pos_ += 4;
            };
            JTBuffer.prototype.writeUint32 = function (value) {
                this._ensureWrite(this._pos_ + 4);
                this._d_.setUint32(this._pos_, value, this._xd_);
                this._pos_ += 4;
            };
            JTBuffer.prototype.getInt16 = function () {
                return this.readInt16();
            };
            JTBuffer.prototype.readInt16 = function () {
                if (this._pos_ + 2 > this._length)
                    throw "getInt16 error - Out of bounds";
                var us = this._d_.getInt16(this._pos_, this._xd_);
                this._pos_ += 2;
                return us;
            };
            JTBuffer.prototype.getUint16 = function () {
                return this.readUint16();
            };
            JTBuffer.prototype.readUint16 = function () {
                if (this._pos_ + 2 > this._length)
                    throw "getUint16 error - Out of bounds";
                var us = this._d_.getUint16(this._pos_, this._xd_);
                this._pos_ += 2;
                return us;
            };
            JTBuffer.prototype.writeUint16 = function (value) {
                this._ensureWrite(this._pos_ + 2);
                this._d_.setUint16(this._pos_, value, this._xd_);
                this._pos_ += 2;
            };
            JTBuffer.prototype.writeInt16 = function (value) {
                this._ensureWrite(this._pos_ + 2);
                this._d_.setInt16(this._pos_, value, this._xd_);
                this._pos_ += 2;
            };
            JTBuffer.prototype.getUint8 = function () {
                return this.readUint8();
            };
            JTBuffer.prototype.readUint8 = function () {
                if (this._pos_ + 1 > this._length)
                    throw "getUint8 error - Out of bounds";
                return this._u8d_[this._pos_++];
            };
            JTBuffer.prototype.writeUint8 = function (value) {
                this._ensureWrite(this._pos_ + 1);
                this._d_.setUint8(this._pos_, value);
                this._pos_++;
            };
            JTBuffer.prototype._getUInt8 = function (pos) {
                return this._readUInt8(pos);
            };
            JTBuffer.prototype._readUInt8 = function (pos) {
                return this._d_.getUint8(pos);
            };
            JTBuffer.prototype._getUint16 = function (pos) {
                return this._readUint16(pos);
            };
            JTBuffer.prototype._readUint16 = function (pos) {
                return this._d_.getUint16(pos, this._xd_);
            };
            JTBuffer.prototype._getMatrix = function () {
                return this._readMatrix();
            };
            JTBuffer.prototype._readMatrix = function () {
                var rst = new JTMatrix(this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
                return rst;
            };
            JTBuffer.prototype._rUTF = function (len) {
                var v = "", max = this._pos_ + len, c, c2, c3, f = String.fromCharCode;
                var u = this._u8d_, i = 0;
                var strs = [];
                var n = 0;
                strs.length = 1000;
                while (this._pos_ < max) {
                    c = u[this._pos_++];
                    if (c < 0x80) {
                        if (c != 0)
                            strs[n++] = f(c);
                    }
                    else if (c < 0xE0) {
                        strs[n++] = f(((c & 0x3F) << 6) | (u[this._pos_++] & 0x7F));
                    }
                    else if (c < 0xF0) {
                        c2 = u[this._pos_++];
                        strs[n++] = f(((c & 0x1F) << 12) | ((c2 & 0x7F) << 6) | (u[this._pos_++] & 0x7F));
                    }
                    else {
                        c2 = u[this._pos_++];
                        c3 = u[this._pos_++];
                        var _code = ((c & 0x0F) << 18) | ((c2 & 0x7F) << 12) | ((c3 & 0x7F) << 6) | (u[this._pos_++] & 0x7F);
                        if (_code >= 0x10000) {
                            var _offset = _code - 0x10000;
                            var _lead = 0xd800 | (_offset >> 10);
                            var _trail = 0xdc00 | (_offset & 0x3ff);
                            strs[n++] = f(_lead);
                            strs[n++] = f(_trail);
                        }
                        else {
                            strs[n++] = f(_code);
                        }
                    }
                    i++;
                }
                strs.length = n;
                return strs.join('');
            };
            JTBuffer.prototype.getCustomString = function (len) {
                return this.readCustomString(len);
            };
            JTBuffer.prototype.readCustomString = function (len) {
                var v = "", ulen = 0, c, c2, f = String.fromCharCode;
                var u = this._u8d_, i = 0;
                while (len > 0) {
                    c = u[this._pos_];
                    if (c < 0x80) {
                        v += f(c);
                        this._pos_++;
                        len--;
                    }
                    else {
                        ulen = c - 0x80;
                        this._pos_++;
                        len -= ulen;
                        while (ulen > 0) {
                            c = u[this._pos_++];
                            c2 = u[this._pos_++];
                            v += f((c2 << 8) | c);
                            ulen--;
                        }
                    }
                }
                return v;
            };
            Object.defineProperty(JTBuffer.prototype, "pos", {
                get: function () {
                    return this._pos_;
                },
                set: function (value) {
                    this._pos_ = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(JTBuffer.prototype, "bytesAvailable", {
                get: function () {
                    return this._length - this._pos_;
                },
                enumerable: false,
                configurable: true
            });
            JTBuffer.prototype.clear = function () {
                this._pos_ = 0;
                this.length = 0;
            };
            JTBuffer.prototype.__getBuffer = function () {
                return this._d_.buffer;
            };
            JTBuffer.prototype.writeUTFBytes = function (value) {
                value = value + "";
                for (var i = 0, sz = value.length; i < sz; i++) {
                    var c = value.charCodeAt(i);
                    if (c <= 0x7F) {
                        this.writeByte(c);
                    }
                    else if (c <= 0x7FF) {
                        this._ensureWrite(this._pos_ + 2);
                        this._u8d_.set([0xC0 | (c >> 6), 0x80 | (c & 0x3F)], this._pos_);
                        this._pos_ += 2;
                    }
                    else if (c >= 0xD800 && c <= 0xDBFF) {
                        i++;
                        var c2 = value.charCodeAt(i);
                        if (!isNaN(c2) && c2 >= 0xDC00 && c2 <= 0xDFFF) {
                            var _p1 = (c & 0x3FF) + 0x40;
                            var _p2 = c2 & 0x3FF;
                            var _b1 = 0xF0 | ((_p1 >> 8) & 0x3F);
                            var _b2 = 0x80 | ((_p1 >> 2) & 0x3F);
                            var _b3 = 0x80 | ((_p1 & 0x3) << 4) | ((_p2 >> 6) & 0xF);
                            var _b4 = 0x80 | (_p2 & 0x3F);
                            this._ensureWrite(this._pos_ + 4);
                            this._u8d_.set([_b1, _b2, _b3, _b4], this._pos_);
                            this._pos_ += 4;
                        }
                    }
                    else if (c <= 0xFFFF) {
                        this._ensureWrite(this._pos_ + 3);
                        this._u8d_.set([0xE0 | (c >> 12), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)], this._pos_);
                        this._pos_ += 3;
                    }
                    else {
                        this._ensureWrite(this._pos_ + 4);
                        this._u8d_.set([0xF0 | (c >> 18), 0x80 | ((c >> 12) & 0x3F), 0x80 | ((c >> 6) & 0x3F), 0x80 | (c & 0x3F)], this._pos_);
                        this._pos_ += 4;
                    }
                }
            };
            JTBuffer.prototype.writeUTFString = function (value) {
                var tPos = this.pos;
                this.writeUint16(1);
                this.writeUTFBytes(value);
                var dPos = this.pos - tPos - 2;
                this._d_.setUint16(tPos, dPos, this._xd_);
            };
            JTBuffer.prototype.writeUTFString32 = function (value) {
                var tPos = this.pos;
                this.writeUint32(1);
                this.writeUTFBytes(value);
                var dPos = this.pos - tPos - 4;
                this._d_.setUint32(tPos, dPos, this._xd_);
            };
            JTBuffer.prototype.readUTFString = function () {
                return this.readUTFBytes(this.getUint16());
            };
            JTBuffer.prototype.readUTFString32 = function () {
                return this.readUTFBytes(this.getUint32());
            };
            JTBuffer.prototype.getUTFString = function () {
                return this.readUTFString();
            };
            JTBuffer.prototype.readUTFBytes = function (len) {
                if (len === void 0) { len = -1; }
                if (len === 0)
                    return "";
                var lastBytes = this.bytesAvailable;
                if (len > lastBytes)
                    throw "readUTFBytes error - Out of bounds";
                len = len > 0 ? len : lastBytes;
                return this._rUTF(len);
            };
            JTBuffer.prototype.getUTFBytes = function (len) {
                if (len === void 0) { len = -1; }
                return this.readUTFBytes(len);
            };
            JTBuffer.prototype.writeByte = function (value) {
                this._ensureWrite(this._pos_ + 1);
                this._d_.setInt8(this._pos_, value);
                this._pos_ += 1;
            };
            JTBuffer.prototype.readByte = function () {
                if (this._pos_ + 1 > this._length)
                    throw "readByte error - Out of bounds";
                return this._d_.getInt8(this._pos_++);
            };
            JTBuffer.prototype.getByte = function () {
                return this.readByte();
            };
            JTBuffer.prototype._ensureWrite = function (lengthToEnsure) {
                if (this._length < lengthToEnsure)
                    this._length = lengthToEnsure;
                if (this._allocated_ < lengthToEnsure)
                    this.length = lengthToEnsure;
            };
            JTBuffer.prototype.writeArrayBuffer = function (arraybuffer, offset, length) {
                if (offset === void 0) { offset = 0; }
                if (length === void 0) { length = 0; }
                if (offset < 0 || length < 0)
                    throw "writeArrayBuffer error - Out of bounds";
                if (length == 0)
                    length = arraybuffer.byteLength - offset;
                this._ensureWrite(this._pos_ + length);
                var uint8array = new Uint8Array(arraybuffer);
                this._u8d_.set(uint8array.subarray(offset, offset + length), this._pos_);
                this._pos_ += length;
            };
            JTBuffer.prototype.readArrayBuffer = function (length) {
                var rst;
                rst = this._u8d_.buffer.slice(this._pos_, this._pos_ + length);
                this._pos_ = this._pos_ + length;
                return rst;
            };
            JTBuffer.BIG_ENDIAN = "bigEndian";
            JTBuffer.LITTLE_ENDIAN = "littleEndian";
            JTBuffer._sysEndian = null;
            return JTBuffer;
        }());
        com.JTBuffer = JTBuffer;
    })(com || (com = {}));
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcmNcXG5ldHdvcmtcXGJhc2VcXEpUQnVmZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsSUFBVSxHQUFHLENBNnlCWjtJQTd5QkQsV0FBVSxHQUFHO1FBTVQ7WUFpREksa0JBQVksSUFBZ0I7Z0JBQWhCLHFCQUFBLEVBQUEsV0FBZ0I7Z0JBaENsQixTQUFJLEdBQVksSUFBSSxDQUFDO2dCQUV2QixnQkFBVyxHQUFXLENBQUMsQ0FBQztnQkFNdEIsVUFBSyxHQUFXLENBQUMsQ0FBQztnQkFFbEIsWUFBTyxHQUFXLENBQUMsQ0FBQztnQkF1QjFCLElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztpQkFDdEM7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3hDO1lBQ0wsQ0FBQztZQXJCTSx3QkFBZSxHQUF0QjtnQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFDdEIsSUFBSSxNQUFNLEdBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM1QyxRQUFRLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEs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Q0FBQztnQkFDekUsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7WUFDekIsQ0FBQztZQU9ELGtDQUFlLEdBQWYsVUFBZ0IsTUFBYztnQkFDMUIsSUFBSSxHQUFnQixDQUFDO2dCQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQTtnQkFDaEMsT0FBTyxHQUFHLENBQUM7WUFDZixDQUFDO1lBOXhCTSxtQkFBVSxHQUFXLFdBQVcsQ0FBQztZQU1qQyxzQkFBYSxHQUFXLGNBQWMsQ0FBQztZQUUvQixtQkFBVSxHQUFXLElBQUksQ0FBQztZQXV4QjdDLGVBQUM7U0F0eUJELEFBc3lCQyxJQUFBO1FBdHlCWSxZQUFRLFdBc3lCcEIsQ0FBQTtJQUNMLENBQUMsRUE3eUJTLEdBQUcsS0FBSCxHQUFHLFFBNnlCWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuXHJcbm5hbWVzcGFjZSBjb20gXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogPHA+IDxjb2RlPkJ5dGU8L2NvZGU+IOexu+aPkOS+m+eUqOS6juS8mOWMluivu+WPluOAgeWGmeWFpeS7peWPiuWkhOeQhuS6jOi/m+WItuaVsOaNrueahOaWueazleWSjOWxnuaAp+OAgjwvcD5cclxuICAgICAqIDxwPiA8Y29kZT5CeXRlPC9jb2RlPiDnsbvpgILnlKjkuo7pnIDopoHlnKjlrZfoioLlsYLorr/pl67mlbDmja7nmoTpq5jnuqflvIDlj5HkurrlkZjjgII8L3A+XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBKVEJ1ZmZlciB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIDxwPuS4u+acuuWtl+iKguW6j++8jOaYryBDUFUg5a2Y5pS+5pWw5o2u55qE5Lik56eN5LiN5ZCM6aG65bqP77yM5YyF5ous5bCP56uv5a2X6IqC5bqP5ZKM5aSn56uv5a2X6IqC5bqP44CC6YCa6L+HIDxjb2RlPmdldFN5c3RlbUVuZGlhbjwvY29kZT4g5Y+v5Lul6I635Y+W5b2T5YmN57O757uf55qE5a2X6IqC5bqP44CCPC9wPlxyXG4gICAgICAgICAqIDxwPiA8Y29kZT5CSUdfRU5ESUFOPC9jb2RlPiDvvJrlpKfnq6/lrZfoioLluo/vvIzlnLDlnYDkvY7kvY3lrZjlgqjlgLznmoTpq5jkvY3vvIzlnLDlnYDpq5jkvY3lrZjlgqjlgLznmoTkvY7kvY3jgILmnInml7bkuZ/np7DkuYvkuLrnvZHnu5zlrZfoioLluo/jgII8YnIvPlxyXG4gICAgICAgICAqIDxjb2RlPkxJVFRMRV9FTkRJQU48L2NvZGU+IO+8muWwj+err+Wtl+iKguW6j++8jOWcsOWdgOS9juS9jeWtmOWCqOWAvOeahOS9juS9je+8jOWcsOWdgOmrmOS9jeWtmOWCqOWAvOeahOmrmOS9jeOAgjwvcD5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzdGF0aWMgQklHX0VORElBTjogc3RyaW5nID0gXCJiaWdFbmRpYW5cIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7kuLvmnLrlrZfoioLluo/vvIzmmK8gQ1BVIOWtmOaUvuaVsOaNrueahOS4pOenjeS4jeWQjOmhuuW6j++8jOWMheaLrOWwj+err+Wtl+iKguW6j+WSjOWkp+err+Wtl+iKguW6j+OAgumAmui/hyA8Y29kZT5nZXRTeXN0ZW1FbmRpYW48L2NvZGU+IOWPr+S7peiOt+WPluW9k+WJjeezu+e7n+eahOWtl+iKguW6j+OAgjwvcD5cclxuICAgICAgICAgKiA8cD4gPGNvZGU+TElUVExFX0VORElBTjwvY29kZT4g77ya5bCP56uv5a2X6IqC5bqP77yM5Zyw5Z2A5L2O5L2N5a2Y5YKo5YC855qE5L2O5L2N77yM5Zyw5Z2A6auY5L2N5a2Y5YKo5YC855qE6auY5L2N44CCPGJyLz5cclxuICAgICAgICAgKiA8Y29kZT5CSUdfRU5ESUFOPC9jb2RlPiDvvJrlpKfnq6/lrZfoioLluo/vvIzlnLDlnYDkvY7kvY3lrZjlgqjlgLznmoTpq5jkvY3vvIzlnLDlnYDpq5jkvY3lrZjlgqjlgLznmoTkvY7kvY3jgILmnInml7bkuZ/np7DkuYvkuLrnvZHnu5zlrZfoioLluo/jgII8L3A+XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIExJVFRMRV9FTkRJQU46IHN0cmluZyA9IFwibGl0dGxlRW5kaWFuXCI7XHJcbiAgICAgICAgLyoqQHByaXZhdGUgKi9cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfc3lzRW5kaWFuOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIC8qKkBwcml2YXRlIOaYr+WQpuS4uuWwj+err+aVsOaNruOAgiovXHJcbiAgICAgICAgcHJvdGVjdGVkIF94ZF86IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIC8qKkBwcml2YXRlICovXHJcbiAgICAgICAgcHJpdmF0ZSBfYWxsb2NhdGVkXzogbnVtYmVyID0gODtcclxuICAgICAgICAvKipAcHJpdmF0ZSDljp/lp4vmlbDmja7jgIIqL1xyXG4gICAgICAgIHByb3RlY3RlZCBfZF86IGFueVxyXG4gICAgICAgIC8qKkBwcml2YXRlIERhdGFWaWV3Ki9cclxuICAgICAgICBwcm90ZWN0ZWQgX3U4ZF86IGFueTtcclxuICAgICAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBfcG9zXzogbnVtYmVyID0gMDtcclxuICAgICAgICAvKipAcHJpdmF0ZSAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBfbGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7ojrflj5blvZPliY3kuLvmnLrnmoTlrZfoioLluo/jgII8L3A+XHJcbiAgICAgICAgICogPHA+5Li75py65a2X6IqC5bqP77yM5pivIENQVSDlrZjmlL7mlbDmja7nmoTkuKTnp43kuI3lkIzpobrluo/vvIzljIXmi6zlsI/nq6/lrZfoioLluo/lkozlpKfnq6/lrZfoioLluo/jgII8L3A+XHJcbiAgICAgICAgICogPHA+IDxjb2RlPkJJR19FTkRJQU48L2NvZGU+IO+8muWkp+err+Wtl+iKguW6j++8jOWcsOWdgOS9juS9jeWtmOWCqOWAvOeahOmrmOS9je+8jOWcsOWdgOmrmOS9jeWtmOWCqOWAvOeahOS9juS9jeOAguacieaXtuS5n+ensOS5i+S4uue9kee7nOWtl+iKguW6j+OAgjxici8+XHJcbiAgICAgICAgICogPGNvZGU+TElUVExFX0VORElBTjwvY29kZT4g77ya5bCP56uv5a2X6IqC5bqP77yM5Zyw5Z2A5L2O5L2N5a2Y5YKo5YC855qE5L2O5L2N77yM5Zyw5Z2A6auY5L2N5a2Y5YKo5YC855qE6auY5L2N44CCPC9wPlxyXG4gICAgICAgICAqIEByZXR1cm4g5b2T5YmN57O757uf55qE5a2X6IqC5bqP44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc3RhdGljIGdldFN5c3RlbUVuZGlhbigpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAoIUpUQnVmZmVyLl9zeXNFbmRpYW4pIHtcclxuICAgICAgICAgICAgICAgIHZhciBidWZmZXI6IGFueSA9IG5ldyBBcnJheUJ1ZmZlcigyKTtcclxuICAgICAgICAgICAgICAgIG5ldyBEYXRhVmlldyhidWZmZXIpLnNldEludDE2KDAsIDI1NiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBKVEJ1ZmZlci5fc3lzRW5kaWFuID0gKG5ldyBJbnQxNkFycmF5KGJ1ZmZlcikpWzBdID09PSAyNTYgPyBKVEJ1ZmZlci5MSVRUTEVfRU5ESUFOIDogSlRCdWZmZXIuQklHX0VORElBTjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gSlRCdWZmZXIuX3N5c0VuZGlhbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIm+W7uuS4gOS4qiA8Y29kZT5CeXRlPC9jb2RlPiDnsbvnmoTlrp7kvovjgIJcclxuICAgICAgICAgKiBAcGFyYW1cdGRhdGFcdOeUqOS6juaMh+WumuWIneWni+WMlueahOWFg+e0oOaVsOebru+8jOaIluiAheeUqOS6juWIneWni+WMlueahFR5cGVkQXJyYXnlr7nosaHjgIFBcnJheUJ1ZmZlcuWvueixoeOAguWmguaenOS4uiBudWxsIO+8jOWImemihOWIhumFjeS4gOWumueahOWGheWtmOepuumXtO+8jOW9k+WPr+eUqOepuumXtOS4jei2s+aXtu+8jOS8mOWFiOS9v+eUqOi/memDqOWIhuWGheWtmO+8jOWmguaenOi/mOS4jeWkn++8jOWImemHjeaWsOWIhumFjeaJgOmcgOWGheWtmOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3U4ZF8gPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RfID0gbmV3IERhdGFWaWV3KHRoaXMuX3U4ZF8uYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xlbmd0aCA9IHRoaXMuX2RfLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVCdWZmZXIodGhpcy5fYWxsb2NhdGVkXyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPluatpOWvueixoeeahCBBcnJheUJ1ZmZlciDmlbDmja7vvIzmlbDmja7lj6rljIXlkKvmnInmlYjmlbDmja7pg6jliIbjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQgYnVmZmVyKCk6IEFycmF5QnVmZmVyIHtcclxuICAgICAgICAgICAgdmFyIHJzdEJ1ZmZlcjogQXJyYXlCdWZmZXIgPSB0aGlzLl9kXy5idWZmZXI7XHJcbiAgICAgICAgICAgIGlmIChyc3RCdWZmZXIuYnl0ZUxlbmd0aCA9PT0gdGhpcy5fbGVuZ3RoKSByZXR1cm4gcnN0QnVmZmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gcnN0QnVmZmVyLnNsaWNlKDAsIHRoaXMuX2xlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD4gPGNvZGU+Qnl0ZTwvY29kZT4g5a6e5L6L55qE5a2X6IqC5bqP44CC5Y+W5YC85Li677yaPGNvZGU+QklHX0VORElBTjwvY29kZT4g5oiWIDxjb2RlPkJJR19FTkRJQU48L2NvZGU+IOOAgjwvcD5cclxuICAgICAgICAgKiA8cD7kuLvmnLrlrZfoioLluo/vvIzmmK8gQ1BVIOWtmOaUvuaVsOaNrueahOS4pOenjeS4jeWQjOmhuuW6j++8jOWMheaLrOWwj+err+Wtl+iKguW6j+WSjOWkp+err+Wtl+iKguW6j+OAgumAmui/hyA8Y29kZT5nZXRTeXN0ZW1FbmRpYW48L2NvZGU+IOWPr+S7peiOt+WPluW9k+WJjeezu+e7n+eahOWtl+iKguW6j+OAgjwvcD5cclxuICAgICAgICAgKiA8cD4gPGNvZGU+QklHX0VORElBTjwvY29kZT4g77ya5aSn56uv5a2X6IqC5bqP77yM5Zyw5Z2A5L2O5L2N5a2Y5YKo5YC855qE6auY5L2N77yM5Zyw5Z2A6auY5L2N5a2Y5YKo5YC855qE5L2O5L2N44CC5pyJ5pe25Lmf56ew5LmL5Li6572R57uc5a2X6IqC5bqP44CCPGJyLz5cclxuICAgICAgICAgKiAgPGNvZGU+TElUVExFX0VORElBTjwvY29kZT4g77ya5bCP56uv5a2X6IqC5bqP77yM5Zyw5Z2A5L2O5L2N5a2Y5YKo5YC855qE5L2O5L2N77yM5Zyw5Z2A6auY5L2N5a2Y5YKo5YC855qE6auY5L2N44CCPC9wPlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldCBlbmRpYW4oKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3hkXyA/IEpUQnVmZmVyLkxJVFRMRV9FTkRJQU4gOiBKVEJ1ZmZlci5CSUdfRU5ESUFOO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IGVuZGlhbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3hkXyA9ICh2YWx1ZSA9PT0gSlRCdWZmZXIuTElUVExFX0VORElBTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD4gPGNvZGU+Qnl0ZTwvY29kZT4g5a+56LGh55qE6ZW/5bqm77yI5Lul5a2X6IqC5Li65Y2V5L2N77yJ44CCPC9wPlxyXG4gICAgICAgICAqIDxwPuWmguaenOWwhumVv+W6puiuvue9ruS4uuWkp+S6juW9k+WJjemVv+W6pueahOWAvO+8jOWImeeUqOmbtuWhq+WFheWtl+iKguaVsOe7hOeahOWPs+S+p++8m+WmguaenOWwhumVv+W6puiuvue9ruS4uuWwj+S6juW9k+WJjemVv+W6pueahOWAvO+8jOWwhuS8muaIquaWreivpeWtl+iKguaVsOe7hOOAgjwvcD5cclxuICAgICAgICAgKiA8cD7lpoLmnpzopoHorr7nva7nmoTplb/luqblpKfkuo7lvZPliY3lt7LliIbphY3nmoTlhoXlrZjnqbrpl7TnmoTlrZfoioLplb/luqbvvIzliJnph43mlrDliIbphY3lhoXlrZjnqbrpl7TvvIzlpKflsI/kuLrku6XkuIvkuKTogIXovoPlpKfogIXvvJropoHorr7nva7nmoTplb/luqbjgIHlvZPliY3lt7LliIbphY3nmoTplb/luqbnmoQy5YCN77yM5bm25bCG5Y6f5pyJ5pWw5o2u5ou36LSd5Yiw5paw55qE5YaF5a2Y56m66Ze05Lit77yb5aaC5p6c6KaB6K6+572u55qE6ZW/5bqm5bCP5LqO5b2T5YmN5bey5YiG6YWN55qE5YaF5a2Y56m66Ze055qE5a2X6IqC6ZW/5bqm77yM5Lmf5Lya6YeN5paw5YiG6YWN5YaF5a2Y56m66Ze077yM5aSn5bCP5Li66KaB6K6+572u55qE6ZW/5bqm77yM5bm25bCG5Y6f5pyJ5pWw5o2u5LuO5aS05oiq5pat5Li66KaB6K6+572u55qE6ZW/5bqm5a2Y5YWl5paw55qE5YaF5a2Y56m66Ze05Lit44CCPC9wPlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldCBsZW5ndGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYWxsb2NhdGVkXyA8IHZhbHVlKSB0aGlzLl9yZXNpemVCdWZmZXIodGhpcy5fYWxsb2NhdGVkXyA9IE1hdGguZmxvb3IoTWF0aC5tYXgodmFsdWUsIHRoaXMuX2FsbG9jYXRlZF8gKiAyKSkpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9hbGxvY2F0ZWRfID4gdmFsdWUpIHRoaXMuX3Jlc2l6ZUJ1ZmZlcih0aGlzLl9hbGxvY2F0ZWRfID0gdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9sZW5ndGggPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBsZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKkBwcml2YXRlICovXHJcbiAgICAgICAgcHJpdmF0ZSBfcmVzaXplQnVmZmVyKGxlbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3Qnl0ZVZpZXc6IGFueSA9IG5ldyBVaW50OEFycmF5KGxlbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdThkXyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3U4ZF8ubGVuZ3RoIDw9IGxlbikgbmV3Qnl0ZVZpZXcuc2V0KHRoaXMuX3U4ZF8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgbmV3Qnl0ZVZpZXcuc2V0KHRoaXMuX3U4ZF8uc3ViYXJyYXkoMCwgbGVuKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91OGRfID0gbmV3Qnl0ZVZpZXc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kXyA9IG5ldyBEYXRhVmlldyhuZXdCeXRlVmlldy5idWZmZXIpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IFwiSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGg6XCIgKyBsZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogPHA+5bi455So5LqO6Kej5p6Q5Zu65a6a5qC85byP55qE5a2X6IqC5rWB44CCPC9wPlxyXG4gICAgICAgICAqIDxwPuWFiOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+S9jee9ruWkhOivu+WPluS4gOS4qiA8Y29kZT5VaW50MTY8L2NvZGU+IOWAvO+8jOeEtuWQjuS7peatpOWAvOS4uumVv+W6pu+8jOivu+WPluatpOmVv+W6pueahOWtl+espuS4suOAgjwvcD5cclxuICAgICAgICAgKiBAcmV0dXJuIOivu+WPlueahOWtl+espuS4suOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7luLjnlKjkuo7op6PmnpDlm7rlrprmoLzlvI/nmoTlrZfoioLmtYHjgII8L3A+XHJcbiAgICAgICAgICogPHA+5YWI5LuO5a2X6IqC5rWB55qE5b2T5YmN5a2X6IqC5YGP56e75L2N572u5aSE6K+75Y+W5LiA5LiqIDxjb2RlPlVpbnQxNjwvY29kZT4g5YC877yM54S25ZCO5Lul5q2k5YC85Li66ZW/5bqm77yM6K+75Y+W5q2k6ZW/5bqm55qE5a2X56ym5Liy44CCPC9wPlxyXG4gICAgICAgICAqIEByZXR1cm4g6K+75Y+W55qE5a2X56ym5Liy44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVhZFN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fclVURih0aGlzLmdldFVpbnQxNigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogPHA+5LuO5a2X6IqC5rWB5LitIDxjb2RlPnN0YXJ0PC9jb2RlPiDlj4LmlbDmjIflrprnmoTkvY3nva7lvIDlp4vvvIzor7vlj5YgPGNvZGU+bGVuPC9jb2RlPiDlj4LmlbDmjIflrprnmoTlrZfoioLmlbDnmoTmlbDmja7vvIznlKjkuo7liJvlu7rkuIDkuKogPGNvZGU+RmxvYXQzMkFycmF5PC9jb2RlPiDlr7nosaHlubbov5Tlm57mraTlr7nosaHjgII8L3A+XHJcbiAgICAgICAgICogPHA+PGI+5rOo5oSP77yaPC9iPui/lOWbnueahCBGbG9hdDMyQXJyYXkg5a+56LGh77yM5ZyoIEphdmFTY3JpcHQg546v5aKD5LiL77yM5piv5Y6f55Sf55qEIEhUTUw1IEZsb2F0MzJBcnJheSDlr7nosaHvvIzlr7nmraTlr7nosaHnmoTor7vlj5bmk43kvZzpg73mmK/ln7rkuo7ov5DooYzmraTnqIvluo/nmoTlvZPliY3kuLvmnLrlrZfoioLluo/vvIzmraTpobrluo/lj6/og73kuI7lrp7pmYXmlbDmja7nmoTlrZfoioLluo/kuI3lkIzvvIzlpoLmnpzkvb/nlKjmraTlr7nosaHov5vooYzor7vlj5bvvIzpnIDopoHnlKjmiLfnn6XmmZPlrp7pmYXmlbDmja7nmoTlrZfoioLluo/lkozlvZPliY3kuLvmnLrlrZfoioLluo/vvIzlpoLmnpznm7jlkIzvvIzlj6/mraPluLjor7vlj5bvvIzlkKbliJnpnIDopoHnlKjmiLflr7nlrp7pmYXmlbDmja4oRmxvYXQzMkFycmF5LmJ1ZmZlcinljIXoo4XkuIDlsYIgRGF0YVZpZXcg77yM5L2/55SoIERhdGFWaWV3IOWvueixoeWPr+aMieeFp+aMh+WumueahOWtl+iKguW6j+i/m+ihjOivu+WPluOAgjwvcD5cclxuICAgICAgICAgKiBAcGFyYW1cdHN0YXJ0XHTlvIDlp4vkvY3nva7jgIJcclxuICAgICAgICAgKiBAcGFyYW1cdGxlblx0XHTpnIDopoHor7vlj5bnmoTlrZfoioLplb/luqbjgILlpoLmnpzopoHor7vlj5bnmoTplb/luqbotoXov4flj6/or7vlj5bojIPlm7TvvIzliJnlj6rov5Tlm57lj6/or7vojIPlm7TlhoXnmoTlgLzjgIJcclxuICAgICAgICAgKiBAcmV0dXJuICDor7vlj5bnmoQgRmxvYXQzMkFycmF5IOWvueixoeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEZsb2F0MzJBcnJheShzdGFydDogbnVtYmVyLCBsZW46IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRGbG9hdDMyQXJyYXkoc3RhcnQsIGxlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDku47lrZfoioLmtYHkuK0gPGNvZGU+c3RhcnQ8L2NvZGU+IOWPguaVsOaMh+WumueahOS9jee9ruW8gOWni++8jOivu+WPliA8Y29kZT5sZW48L2NvZGU+IOWPguaVsOaMh+WumueahOWtl+iKguaVsOeahOaVsOaNru+8jOeUqOS6juWIm+W7uuS4gOS4qiA8Y29kZT5GbG9hdDMyQXJyYXk8L2NvZGU+IOWvueixoeW5tui/lOWbnuatpOWvueixoeOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0c3RhcnRcdOW8gOWni+S9jee9ruOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0bGVuXHRcdOmcgOimgeivu+WPlueahOWtl+iKgumVv+W6puOAguWmguaenOimgeivu+WPlueahOmVv+W6pui2hei/h+WPr+ivu+WPluiMg+WbtO+8jOWImeWPqui/lOWbnuWPr+ivu+iMg+WbtOWGheeahOWAvOOAglxyXG4gICAgICAgICAqIEByZXR1cm4gIOivu+WPlueahCBGbG9hdDMyQXJyYXkg5a+56LGh44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVhZEZsb2F0MzJBcnJheShzdGFydDogbnVtYmVyLCBsZW46IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHZhciBlbmQ6IG51bWJlciA9IHN0YXJ0ICsgbGVuO1xyXG4gICAgICAgICAgICBlbmQgPSAoZW5kID4gdGhpcy5fbGVuZ3RoKSA/IHRoaXMuX2xlbmd0aCA6IGVuZDtcclxuICAgICAgICAgICAgdmFyIHY6IGFueSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5fZF8uYnVmZmVyLnNsaWNlKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyA9IGVuZDtcclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geS4rSA8Y29kZT5zdGFydDwvY29kZT4g5Y+C5pWw5oyH5a6a55qE5L2N572u5byA5aeL77yM6K+75Y+WIDxjb2RlPmxlbjwvY29kZT4g5Y+C5pWw5oyH5a6a55qE5a2X6IqC5pWw55qE5pWw5o2u77yM55So5LqO5Yib5bu65LiA5LiqIDxjb2RlPlVpbnQ4QXJyYXk8L2NvZGU+IOWvueixoeW5tui/lOWbnuatpOWvueixoeOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0c3RhcnRcdOW8gOWni+S9jee9ruOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0bGVuXHRcdOmcgOimgeivu+WPlueahOWtl+iKgumVv+W6puOAguWmguaenOimgeivu+WPlueahOmVv+W6pui2hei/h+WPr+ivu+WPluiMg+WbtO+8jOWImeWPqui/lOWbnuWPr+ivu+iMg+WbtOWGheeahOWAvOOAglxyXG4gICAgICAgICAqIEByZXR1cm4gIOivu+WPlueahCBVaW50OEFycmF5IOWvueixoeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFVpbnQ4QXJyYXkoc3RhcnQ6IG51bWJlciwgbGVuOiBudW1iZXIpOiBVaW50OEFycmF5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZFVpbnQ4QXJyYXkoc3RhcnQsIGxlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDku47lrZfoioLmtYHkuK0gPGNvZGU+c3RhcnQ8L2NvZGU+IOWPguaVsOaMh+WumueahOS9jee9ruW8gOWni++8jOivu+WPliA8Y29kZT5sZW48L2NvZGU+IOWPguaVsOaMh+WumueahOWtl+iKguaVsOeahOaVsOaNru+8jOeUqOS6juWIm+W7uuS4gOS4qiA8Y29kZT5VaW50OEFycmF5PC9jb2RlPiDlr7nosaHlubbov5Tlm57mraTlr7nosaHjgIJcclxuICAgICAgICAgKiBAcGFyYW1cdHN0YXJ0XHTlvIDlp4vkvY3nva7jgIJcclxuICAgICAgICAgKiBAcGFyYW1cdGxlblx0XHTpnIDopoHor7vlj5bnmoTlrZfoioLplb/luqbjgILlpoLmnpzopoHor7vlj5bnmoTplb/luqbotoXov4flj6/or7vlj5bojIPlm7TvvIzliJnlj6rov5Tlm57lj6/or7vojIPlm7TlhoXnmoTlgLzjgIJcclxuICAgICAgICAgKiBAcmV0dXJuICDor7vlj5bnmoQgVWludDhBcnJheSDlr7nosaHjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWFkVWludDhBcnJheShzdGFydDogbnVtYmVyLCBsZW46IG51bWJlcik6IFVpbnQ4QXJyYXkge1xyXG4gICAgICAgICAgICB2YXIgZW5kOiBudW1iZXIgPSBzdGFydCArIGxlbjtcclxuICAgICAgICAgICAgZW5kID0gKGVuZCA+IHRoaXMuX2xlbmd0aCkgPyB0aGlzLl9sZW5ndGggOiBlbmQ7XHJcbiAgICAgICAgICAgIHZhciB2OiBhbnkgPSBuZXcgVWludDhBcnJheSh0aGlzLl9kXy5idWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NfID0gZW5kO1xyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICogPHA+5LuO5a2X6IqC5rWB5LitIDxjb2RlPnN0YXJ0PC9jb2RlPiDlj4LmlbDmjIflrprnmoTkvY3nva7lvIDlp4vvvIzor7vlj5YgPGNvZGU+bGVuPC9jb2RlPiDlj4LmlbDmjIflrprnmoTlrZfoioLmlbDnmoTmlbDmja7vvIznlKjkuo7liJvlu7rkuIDkuKogPGNvZGU+SW50MTZBcnJheTwvY29kZT4g5a+56LGh5bm26L+U5Zue5q2k5a+56LGh44CCPC9wPlxyXG4gICAgICAgICAqIDxwPjxiPuazqOaEj++8mjwvYj7ov5Tlm57nmoQgSW50MTZBcnJheSDlr7nosaHvvIzlnKggSmF2YVNjcmlwdCDnjq/looPkuIvvvIzmmK/ljp/nlJ/nmoQgSFRNTDUgSW50MTZBcnJheSDlr7nosaHvvIzlr7nmraTlr7nosaHnmoTor7vlj5bmk43kvZzpg73mmK/ln7rkuo7ov5DooYzmraTnqIvluo/nmoTlvZPliY3kuLvmnLrlrZfoioLluo/vvIzmraTpobrluo/lj6/og73kuI7lrp7pmYXmlbDmja7nmoTlrZfoioLluo/kuI3lkIzvvIzlpoLmnpzkvb/nlKjmraTlr7nosaHov5vooYzor7vlj5bvvIzpnIDopoHnlKjmiLfnn6XmmZPlrp7pmYXmlbDmja7nmoTlrZfoioLluo/lkozlvZPliY3kuLvmnLrlrZfoioLluo/vvIzlpoLmnpznm7jlkIzvvIzlj6/mraPluLjor7vlj5bvvIzlkKbliJnpnIDopoHnlKjmiLflr7nlrp7pmYXmlbDmja4oSW50MTZBcnJheS5idWZmZXIp5YyF6KOF5LiA5bGCIERhdGFWaWV3IO+8jOS9v+eUqCBEYXRhVmlldyDlr7nosaHlj6/mjInnhafmjIflrprnmoTlrZfoioLluo/ov5vooYzor7vlj5bjgII8L3A+XHJcbiAgICAgICAgICogQHBhcmFtXHRzdGFydFx05byA5aeL6K+75Y+W55qE5a2X6IqC5YGP56e76YeP5L2N572u44CCXHJcbiAgICAgICAgICogQHBhcmFtXHRsZW5cdFx06ZyA6KaB6K+75Y+W55qE5a2X6IqC6ZW/5bqm44CC5aaC5p6c6KaB6K+75Y+W55qE6ZW/5bqm6LaF6L+H5Y+v6K+75Y+W6IyD5Zu077yM5YiZ5Y+q6L+U5Zue5Y+v6K+76IyD5Zu05YaF55qE5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiAg6K+75Y+W55qEIEludDE2QXJyYXkg5a+56LGh44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0SW50MTZBcnJheShzdGFydDogbnVtYmVyLCBsZW46IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRJbnQxNkFycmF5KHN0YXJ0LCBsZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5LuO5a2X6IqC5rWB5LitIDxjb2RlPnN0YXJ0PC9jb2RlPiDlj4LmlbDmjIflrprnmoTkvY3nva7lvIDlp4vvvIzor7vlj5YgPGNvZGU+bGVuPC9jb2RlPiDlj4LmlbDmjIflrprnmoTlrZfoioLmlbDnmoTmlbDmja7vvIznlKjkuo7liJvlu7rkuIDkuKogPGNvZGU+SW50MTZBcnJheTwvY29kZT4g5a+56LGh5bm26L+U5Zue5q2k5a+56LGh44CCXHJcbiAgICAgICAgICogQHBhcmFtXHRzdGFydFx05byA5aeL6K+75Y+W55qE5a2X6IqC5YGP56e76YeP5L2N572u44CCXHJcbiAgICAgICAgICogQHBhcmFtXHRsZW5cdFx06ZyA6KaB6K+75Y+W55qE5a2X6IqC6ZW/5bqm44CC5aaC5p6c6KaB6K+75Y+W55qE6ZW/5bqm6LaF6L+H5Y+v6K+75Y+W6IyD5Zu077yM5YiZ5Y+q6L+U5Zue5Y+v6K+76IyD5Zu05YaF55qE5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiAg6K+75Y+W55qEIFVpbnQ4QXJyYXkg5a+56LGh44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVhZEludDE2QXJyYXkoc3RhcnQ6IG51bWJlciwgbGVuOiBudW1iZXIpOiBhbnkge1xyXG4gICAgICAgICAgICB2YXIgZW5kOiBudW1iZXIgPSBzdGFydCArIGxlbjtcclxuICAgICAgICAgICAgZW5kID0gKGVuZCA+IHRoaXMuX2xlbmd0aCkgPyB0aGlzLl9sZW5ndGggOiBlbmQ7XHJcbiAgICAgICAgICAgIHZhciB2OiBhbnkgPSBuZXcgSW50MTZBcnJheSh0aGlzLl9kXy5idWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NfID0gZW5kO1xyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICog5LuO5a2X6IqC5rWB55qE5b2T5YmN5a2X6IqC5YGP56e75L2N572u5aSE6K+75Y+W5LiA5LiqIElFRUUgNzU0IOWNleeyvuW6pu+8iDMyIOS9je+8iea1rueCueaVsOOAglxyXG4gICAgICAgICAqIEByZXR1cm4g5Y2V57K+5bqm77yIMzIg5L2N77yJ5rWu54K55pWw44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0RmxvYXQzMigpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkRmxvYXQzMigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5LuO5a2X6IqC5rWB55qE5b2T5YmN5a2X6IqC5YGP56e75L2N572u5aSE6K+75Y+W5LiA5LiqIElFRUUgNzU0IOWNleeyvuW6pu+8iDMyIOS9je+8iea1rueCueaVsOOAglxyXG4gICAgICAgICAqIEByZXR1cm4g5Y2V57K+5bqm77yIMzIg5L2N77yJ5rWu54K55pWw44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVhZEZsb2F0MzIoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Bvc18gKyA0ID4gdGhpcy5fbGVuZ3RoKSB0aHJvdyBcImdldEZsb2F0MzIgZXJyb3IgLSBPdXQgb2YgYm91bmRzXCI7XHJcbiAgICAgICAgICAgIHZhciB2OiBudW1iZXIgPSB0aGlzLl9kXy5nZXRGbG9hdDMyKHRoaXMuX3Bvc18sIHRoaXMuX3hkXyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc18gKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBJRUVFIDc1NCDlj4znsr7luqbvvIg2NCDkvY3vvInmta7ngrnmlbDjgIJcclxuICAgICAgICAgKiBAcmV0dXJuIOWPjOeyvuW6pu+8iDY0IOS9je+8iea1rueCueaVsOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEZsb2F0NjQoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZEZsb2F0NjQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBJRUVFIDc1NCDlj4znsr7luqbvvIg2NCDkvY3vvInmta7ngrnmlbDjgIJcclxuICAgICAgICAgKiBAcmV0dXJuIOWPjOeyvuW6pu+8iDY0IOS9je+8iea1rueCueaVsOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlYWRGbG9hdDY0KCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wb3NfICsgOCA+IHRoaXMuX2xlbmd0aCkgdGhyb3cgXCJnZXRGbG9hdDY0IGVycm9yIC0gT3V0IG9mIGJvdW5kc1wiO1xyXG4gICAgICAgICAgICB2YXIgdjogbnVtYmVyID0gdGhpcy5fZF8uZ2V0RmxvYXQ2NCh0aGlzLl9wb3NfLCB0aGlzLl94ZF8pO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NfICs9IDg7XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Zyo5a2X6IqC5rWB55qE5b2T5YmN5a2X6IqC5YGP56e76YeP5L2N572u5aSE5YaZ5YWl5LiA5LiqIElFRUUgNzU0IOWNleeyvuW6pu+8iDMyIOS9je+8iea1rueCueaVsOOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0dmFsdWVcdOWNleeyvuW6pu+8iDMyIOS9je+8iea1rueCueaVsOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdyaXRlRmxvYXQzMih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVdyaXRlKHRoaXMuX3Bvc18gKyA0KTtcclxuICAgICAgICAgICAgdGhpcy5fZF8uc2V0RmxvYXQzMih0aGlzLl9wb3NfLCB2YWx1ZSwgdGhpcy5feGRfKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyArPSA0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Zyo5a2X6IqC5rWB55qE5b2T5YmN5a2X6IqC5YGP56e76YeP5L2N572u5aSE5YaZ5YWl5LiA5LiqIElFRUUgNzU0IOWPjOeyvuW6pu+8iDY0IOS9je+8iea1rueCueaVsOOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0dmFsdWVcdOWPjOeyvuW6pu+8iDY0IOS9je+8iea1rueCueaVsOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdyaXRlRmxvYXQ2NCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVdyaXRlKHRoaXMuX3Bvc18gKyA4KTtcclxuICAgICAgICAgICAgdGhpcy5fZF8uc2V0RmxvYXQ2NCh0aGlzLl9wb3NfLCB2YWx1ZSwgdGhpcy5feGRfKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyArPSA4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiDku47lrZfoioLmtYHnmoTlvZPliY3lrZfoioLlgY/np7vph4/kvY3nva7lpITor7vlj5bkuIDkuKogSW50MzIg5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiBJbnQzMiDlgLzjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRJbnQzMigpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkSW50MzIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBJbnQzMiDlgLzjgIJcclxuICAgICAgICAgKiBAcmV0dXJuIEludDMyIOWAvOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlYWRJbnQzMigpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9zXyArIDQgPiB0aGlzLl9sZW5ndGgpIHRocm93IFwiZ2V0SW50MzIgZXJyb3IgLSBPdXQgb2YgYm91bmRzXCI7XHJcbiAgICAgICAgICAgIHZhciBmbG9hdDogbnVtYmVyID0gdGhpcy5fZF8uZ2V0SW50MzIodGhpcy5fcG9zXywgdGhpcy5feGRfKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyArPSA0O1xyXG4gICAgICAgICAgICByZXR1cm4gZmxvYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBVaW50MzIg5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiBVaW50MzIg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0VWludDMyKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRVaW50MzIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBVaW50MzIg5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiBVaW50MzIg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVhZFVpbnQzMigpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9zXyArIDQgPiB0aGlzLl9sZW5ndGgpIHRocm93IFwiZ2V0VWludDMyIGVycm9yIC0gT3V0IG9mIGJvdW5kc1wiO1xyXG4gICAgICAgICAgICB2YXIgdjogbnVtYmVyID0gdGhpcy5fZF8uZ2V0VWludDMyKHRoaXMuX3Bvc18sIHRoaXMuX3hkXyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc18gKz0gNDtcclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlnKjlrZfoioLmtYHnmoTlvZPliY3lrZfoioLlgY/np7vph4/kvY3nva7lpITlhpnlhaXmjIflrprnmoQgSW50MzIg5YC844CCXHJcbiAgICAgICAgICogQHBhcmFtXHR2YWx1ZVx06ZyA6KaB5YaZ5YWl55qEIEludDMyIOWAvOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdyaXRlSW50MzIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9lbnN1cmVXcml0ZSh0aGlzLl9wb3NfICsgNCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RfLnNldEludDMyKHRoaXMuX3Bvc18sIHZhbHVlLCB0aGlzLl94ZF8pO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NfICs9IDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlnKjlrZfoioLmtYHnmoTlvZPliY3lrZfoioLlgY/np7vph4/kvY3nva7lpITlhpnlhaUgVWludDMyIOWAvOOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0dmFsdWVcdOmcgOimgeWGmeWFpeeahCBVaW50MzIg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgd3JpdGVVaW50MzIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9lbnN1cmVXcml0ZSh0aGlzLl9wb3NfICsgNCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RfLnNldFVpbnQzMih0aGlzLl9wb3NfLCB2YWx1ZSwgdGhpcy5feGRfKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyArPSA0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiDku47lrZfoioLmtYHnmoTlvZPliY3lrZfoioLlgY/np7vph4/kvY3nva7lpITor7vlj5bkuIDkuKogSW50MTYg5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiBJbnQxNiDlgLzjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRJbnQxNigpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkSW50MTYoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBJbnQxNiDlgLzjgIJcclxuICAgICAgICAgKiBAcmV0dXJuIEludDE2IOWAvOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlYWRJbnQxNigpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9zXyArIDIgPiB0aGlzLl9sZW5ndGgpIHRocm93IFwiZ2V0SW50MTYgZXJyb3IgLSBPdXQgb2YgYm91bmRzXCI7XHJcbiAgICAgICAgICAgIHZhciB1czogbnVtYmVyID0gdGhpcy5fZF8uZ2V0SW50MTYodGhpcy5fcG9zXywgdGhpcy5feGRfKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyArPSAyO1xyXG4gICAgICAgICAgICByZXR1cm4gdXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBVaW50MTYg5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiBVaW50MTYg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0VWludDE2KCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRVaW50MTYoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBVaW50MTYg5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiBVaW50MTYg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVhZFVpbnQxNigpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9zXyArIDIgPiB0aGlzLl9sZW5ndGgpIHRocm93IFwiZ2V0VWludDE2IGVycm9yIC0gT3V0IG9mIGJvdW5kc1wiO1xyXG4gICAgICAgICAgICB2YXIgdXM6IG51bWJlciA9IHRoaXMuX2RfLmdldFVpbnQxNih0aGlzLl9wb3NfLCB0aGlzLl94ZF8pO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3NfICs9IDI7XHJcbiAgICAgICAgICAgIHJldHVybiB1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWcqOWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOWGmeWFpeaMh+WumueahCBVaW50MTYg5YC844CCXHJcbiAgICAgICAgICogQHBhcmFtXHR2YWx1ZVx06ZyA6KaB5YaZ5YWl55qEVWludDE2IOWAvOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdyaXRlVWludDE2KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fZW5zdXJlV3JpdGUodGhpcy5fcG9zXyArIDIpO1xyXG4gICAgICAgICAgICB0aGlzLl9kXy5zZXRVaW50MTYodGhpcy5fcG9zXywgdmFsdWUsIHRoaXMuX3hkXyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc18gKz0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWcqOWtl+iKgua1geeahOW9k+WJjeWtl+iKguWBj+enu+mHj+S9jee9ruWkhOWGmeWFpeaMh+WumueahCBJbnQxNiDlgLzjgIJcclxuICAgICAgICAgKiBAcGFyYW1cdHZhbHVlXHTpnIDopoHlhpnlhaXnmoQgSW50MTYg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgd3JpdGVJbnQxNih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVdyaXRlKHRoaXMuX3Bvc18gKyAyKTtcclxuICAgICAgICAgICAgdGhpcy5fZF8uc2V0SW50MTYodGhpcy5fcG9zXywgdmFsdWUsIHRoaXMuX3hkXyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc18gKz0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICog5LuO5a2X6IqC5rWB55qE5b2T5YmN5a2X6IqC5YGP56e76YeP5L2N572u5aSE6K+75Y+W5LiA5LiqIFVpbnQ4IOWAvOOAglxyXG4gICAgICAgICAqIEByZXR1cm4gVWludDgg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0VWludDgoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZFVpbnQ4KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDku47lrZfoioLmtYHnmoTlvZPliY3lrZfoioLlgY/np7vph4/kvY3nva7lpITor7vlj5bkuIDkuKogVWludDgg5YC844CCXHJcbiAgICAgICAgICogQHJldHVybiBVaW50OCDlgLzjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWFkVWludDgoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Bvc18gKyAxID4gdGhpcy5fbGVuZ3RoKSB0aHJvdyBcImdldFVpbnQ4IGVycm9yIC0gT3V0IG9mIGJvdW5kc1wiO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdThkX1t0aGlzLl9wb3NfKytdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Zyo5a2X6IqC5rWB55qE5b2T5YmN5a2X6IqC5YGP56e76YeP5L2N572u5aSE5YaZ5YWl5oyH5a6a55qEIFVpbnQ4IOWAvOOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0dmFsdWVcdOmcgOimgeWGmeWFpeeahCBVaW50OCDlgLzjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICB3cml0ZVVpbnQ4KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fZW5zdXJlV3JpdGUodGhpcy5fcG9zXyArIDEpO1xyXG4gICAgICAgICAgICB0aGlzLl9kXy5zZXRVaW50OCh0aGlzLl9wb3NfLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc18rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geeahOaMh+WumuWtl+iKguWBj+enu+mHj+S9jee9ruWkhOivu+WPluS4gOS4qiBVaW50OCDlgLzjgIJcclxuICAgICAgICAgKiBAcGFyYW1cdHBvc1x05a2X6IqC6K+75Y+W5L2N572u44CCXHJcbiAgICAgICAgICogQHJldHVybiBVaW50OCDlgLzjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICAvL1RPRE86Y292ZXJhZ2VcclxuICAgICAgICBfZ2V0VUludDgocG9zOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZFVJbnQ4KHBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAaW50ZXJuYWxcclxuICAgICAgICAgKiDku47lrZfoioLmtYHnmoTmjIflrprlrZfoioLlgY/np7vph4/kvY3nva7lpITor7vlj5bkuIDkuKogVWludDgg5YC844CCXHJcbiAgICAgICAgICogQHBhcmFtXHRwb3NcdOWtl+iKguivu+WPluS9jee9ruOAglxyXG4gICAgICAgICAqIEByZXR1cm4gVWludDgg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy9UT0RPOmNvdmVyYWdlXHJcbiAgICAgICAgX3JlYWRVSW50OChwb3M6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kXy5nZXRVaW50OChwb3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQGludGVybmFsXHJcbiAgICAgICAgICog5LuO5a2X6IqC5rWB55qE5oyH5a6a5a2X6IqC5YGP56e76YeP5L2N572u5aSE6K+75Y+W5LiA5LiqIFVpbnQxNiDlgLzjgIJcclxuICAgICAgICAgKiBAcGFyYW1cdHBvc1x05a2X6IqC6K+75Y+W5L2N572u44CCXHJcbiAgICAgICAgICogQHJldHVybiBVaW50MTYg5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy9UT0RPOmNvdmVyYWdlXHJcbiAgICAgICAgX2dldFVpbnQxNihwb3M6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkVWludDE2KHBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAaW50ZXJuYWxcclxuICAgICAgICAgKiDku47lrZfoioLmtYHnmoTmjIflrprlrZfoioLlgY/np7vph4/kvY3nva7lpITor7vlj5bkuIDkuKogVWludDE2IOWAvOOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0cG9zXHTlrZfoioLor7vlj5bkvY3nva7jgIJcclxuICAgICAgICAgKiBAcmV0dXJuIFVpbnQxNiDlgLzjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICAvL1RPRE86Y292ZXJhZ2VcclxuICAgICAgICBfcmVhZFVpbnQxNihwb3M6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kXy5nZXRVaW50MTYocG9zLCB0aGlzLl94ZF8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQGludGVybmFsXHJcbiAgICAgICAgICog5L2/55SoIGdldEZsb2F0MzIoKSDor7vlj5Y25Liq5YC877yM55So5LqO5Yib5bu65bm26L+U5Zue5LiA5LiqIE1hdHJpeCDlr7nosaHjgIJcclxuICAgICAgICAgKiBAcmV0dXJuICBNYXRyaXgg5a+56LGh44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy9UT0RPOmNvdmVyYWdlXHJcbiAgICAgICAgX2dldE1hdHJpeCgpOiBKVE1hdHJpeCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkTWF0cml4KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAaW50ZXJuYWxcclxuICAgICAgICAgKiDkvb/nlKggZ2V0RmxvYXQzMigpIOivu+WPljbkuKrlgLzvvIznlKjkuo7liJvlu7rlubbov5Tlm57kuIDkuKogTWF0cml4IOWvueixoeOAglxyXG4gICAgICAgICAqIEByZXR1cm4gIE1hdHJpeCDlr7nosaHjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICAvL1RPRE86Y292ZXJhZ2VcclxuICAgICAgICBfcmVhZE1hdHJpeCgpOiBKVE1hdHJpeCB7XHJcbiAgICAgICAgICAgIHZhciByc3Q6IEpUTWF0cml4ID0gbmV3IEpUTWF0cml4KHRoaXMuZ2V0RmxvYXQzMigpLCB0aGlzLmdldEZsb2F0MzIoKSwgdGhpcy5nZXRGbG9hdDMyKCksIHRoaXMuZ2V0RmxvYXQzMigpLCB0aGlzLmdldEZsb2F0MzIoKSwgdGhpcy5nZXRGbG9hdDMyKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcnN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiDor7vlj5bmjIflrprplb/luqbnmoQgVVRGIOWei+Wtl+espuS4suOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0bGVuIOmcgOimgeivu+WPlueahOmVv+W6puOAglxyXG4gICAgICAgICAqIEByZXR1cm4g6K+75Y+W55qE5a2X56ym5Liy44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBfclVURihsZW46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHZhciB2OiBzdHJpbmcgPSBcIlwiLCBtYXg6IG51bWJlciA9IHRoaXMuX3Bvc18gKyBsZW4sIGM6IG51bWJlciwgYzI6IG51bWJlciwgYzM6IG51bWJlciwgZjogRnVuY3Rpb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xyXG4gICAgICAgICAgICB2YXIgdTogYW55ID0gdGhpcy5fdThkXywgaTogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgdmFyIHN0cnM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgIHZhciBuOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBzdHJzLmxlbmd0aCA9IDEwMDA7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wb3NfIDwgbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBjID0gdVt0aGlzLl9wb3NfKytdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgPCAweDgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy92ICs9IGYoYyk7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryc1tuKytdID0gZihjKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA8IDB4RTApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3YgKz0gZigoKGMgJiAweDNGKSA8PCA2KSB8ICh1W19wb3NfKytdICYgMHg3RikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cnNbbisrXSA9IGYoKChjICYgMHgzRikgPDwgNikgfCAodVt0aGlzLl9wb3NfKytdICYgMHg3RikpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjIDwgMHhGMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMyID0gdVt0aGlzLl9wb3NfKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdiArPSBmKCgoYyAmIDB4MUYpIDw8IDEyKSB8ICgoYzIgJiAweDdGKSA8PCA2KSB8ICh1W19wb3NfKytdICYgMHg3RikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cnNbbisrXSA9IGYoKChjICYgMHgxRikgPDwgMTIpIHwgKChjMiAmIDB4N0YpIDw8IDYpIHwgKHVbdGhpcy5fcG9zXysrXSAmIDB4N0YpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYzIgPSB1W3RoaXMuX3Bvc18rK107XHJcbiAgICAgICAgICAgICAgICAgICAgYzMgPSB1W3RoaXMuX3Bvc18rK107XHJcbiAgICAgICAgICAgICAgICAgICAgLy92ICs9IGYoKChjICYgMHgwRikgPDwgMTgpIHwgKChjMiAmIDB4N0YpIDw8IDEyKSB8ICgoYzMgPDwgNikgJiAweDdGKSB8ICh1W19wb3NfKytdICYgMHg3RikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IF9jb2RlID0gKChjICYgMHgwRik8PCAxOCl8ICgoYzIgJiAweDdGKTw8IDEyKXwgKChjMyAmIDB4N0YpPDwgNil8ICh1W3RoaXMuX3Bvc18rK10gJiAweDdGKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggX2NvZGUgPj0gMHgxMDAwMCApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfb2Zmc2V0ID0gX2NvZGUgLSAweDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfbGVhZCA9IDB4ZDgwMCB8IChfb2Zmc2V0ID4+IDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3RyYWlsID0gMHhkYzAwIHwgKF9vZmZzZXQgJiAweDNmZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cnNbbisrXT1mKF9sZWFkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryc1tuKytdPWYoX3RyYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryc1tuKytdPWYoX2NvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJzLmxlbmd0aCA9IG47XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJzLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAvL3JldHVybiB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiDor7vlj5YgPGNvZGU+bGVuPC9jb2RlPiDlj4LmlbDmjIflrprnmoTplb/luqbnmoTlrZfnrKbkuLLjgIJcclxuICAgICAgICAgKiBAcGFyYW1cdGxlblx06KaB6K+75Y+W55qE5a2X56ym5Liy55qE6ZW/5bqm44CCXHJcbiAgICAgICAgICogQHJldHVybiDmjIflrprplb/luqbnmoTlrZfnrKbkuLLjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICAvL1RPRE86Y292ZXJhZ2VcclxuICAgICAgICBnZXRDdXN0b21TdHJpbmcobGVuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkQ3VzdG9tU3RyaW5nKGxlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIOivu+WPliA8Y29kZT5sZW48L2NvZGU+IOWPguaVsOaMh+WumueahOmVv+W6pueahOWtl+espuS4suOAglxyXG4gICAgICAgICAqIEBwYXJhbVx0bGVuXHTopoHor7vlj5bnmoTlrZfnrKbkuLLnmoTplb/luqbjgIJcclxuICAgICAgICAgKiBAcmV0dXJuIOaMh+WumumVv+W6pueahOWtl+espuS4suOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vVE9ETzpjb3ZlcmFnZVxyXG4gICAgICAgIHJlYWRDdXN0b21TdHJpbmcobGVuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgdjogc3RyaW5nID0gXCJcIiwgdWxlbjogbnVtYmVyID0gMCwgYzogbnVtYmVyLCBjMjogbnVtYmVyLCBmOiBGdW5jdGlvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XHJcbiAgICAgICAgICAgIHZhciB1OiBhbnkgPSB0aGlzLl91OGRfLCBpOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAobGVuID4gMCkge1xyXG4gICAgICAgICAgICAgICAgYyA9IHVbdGhpcy5fcG9zX107XHJcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDB4ODApIHtcclxuICAgICAgICAgICAgICAgICAgICB2ICs9IGYoYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zXysrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlbi0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1bGVuID0gYyAtIDB4ODA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zXysrO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlbiAtPSB1bGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh1bGVuID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gdVt0aGlzLl9wb3NfKytdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjMiA9IHVbdGhpcy5fcG9zXysrXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdiArPSBmKChjMiA8PCA4KSB8IGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bGVuLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOenu+WKqOaIlui/lOWbniBCeXRlIOWvueixoeeahOivu+WGmeaMh+mSiOeahOW9k+WJjeS9jee9ru+8iOS7peWtl+iKguS4uuWNleS9je+8ieOAguS4i+S4gOasoeiwg+eUqOivu+WPluaWueazleaXtuWwhuWcqOatpOS9jee9ruW8gOWni+ivu+WPlu+8jOaIluiAheS4i+S4gOasoeiwg+eUqOWGmeWFpeaWueazleaXtuWwhuWcqOatpOS9jee9ruW8gOWni+WGmeWFpeOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldCBwb3MoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Bvc187XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgcG9zKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAvLyRNT0QgYnl0ZU9mZnNldOaYr+WPquivu+eahO+8jOi/memHjOi/m+ihjOi1i+WAvOayoeacieaEj+S5ieOAglxyXG4gICAgICAgICAgICAvL19kXy5ieXRlT2Zmc2V0ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj6/ku47lrZfoioLmtYHnmoTlvZPliY3kvY3nva7liLDmnKvlsL7or7vlj5bnmoTmlbDmja7nmoTlrZfoioLmlbDjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQgYnl0ZXNBdmFpbGFibGUoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aCAtIHRoaXMuX3Bvc187XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmuIXpmaTlrZfoioLmlbDnu4TnmoTlhoXlrrnvvIzlubblsIYgbGVuZ3RoIOWSjCBwb3Mg5bGe5oCn6YeN572u5Li6IDDjgILosIPnlKjmraTmlrnms5XlsIbph4rmlL4gQnl0ZSDlrp7kvovljaDnlKjnmoTlhoXlrZjjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGVhcigpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICAgICAqIOiOt+WPluatpOWvueixoeeahCBBcnJheUJ1ZmZlciDlvJXnlKjjgIJcclxuICAgICAgICAgKiBAcmV0dXJuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX19nZXRCdWZmZXIoKTogQXJyYXlCdWZmZXIge1xyXG4gICAgICAgICAgICAvL3RoaXMuX2RfLmJ1ZmZlci5ieXRlTGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kXy5idWZmZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7lsIYgVVRGLTgg5a2X56ym5Liy5YaZ5YWl5a2X6IqC5rWB44CC57G75Ly85LqOIHdyaXRlVVRGKCkg5pa55rOV77yM5L2GIHdyaXRlVVRGQnl0ZXMoKSDkuI3kvb/nlKggMTYg5L2N6ZW/5bqm55qE5a2X5Li65a2X56ym5Liy5re75Yqg5YmN57yA44CCPC9wPlxyXG4gICAgICAgICAqIDxwPuWvueW6lOeahOivu+WPluaWueazleS4uu+8miBnZXRVVEZCeXRlcyDjgII8L3A+XHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOimgeWGmeWFpeeahOWtl+espuS4suOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdyaXRlVVRGQnl0ZXModmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICAvLyB1dGY4LWRlY29kZVxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICsgXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgaTogbnVtYmVyID0gMCwgc3o6IG51bWJlciA9IHZhbHVlLmxlbmd0aDsgaSA8IHN6OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjOiBudW1iZXIgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjIDw9IDB4N0YpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShjKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA8PSAweDdGRikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5LyY5YyW5Li655u05o6l5YaZ5YWl5aSa5Liq5a2X6IqC77yM6ICM5LiN5b+F6YeN5aSN6LCD55Sod3JpdGVCeXRl77yM5YWN5Y676aKd5aSW55qE6LCD55So5ZKM6YC76L6R5byA6ZSA44CCXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5zdXJlV3JpdGUodGhpcy5fcG9zXyArIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3U4ZF8uc2V0KFsweEMwIHwgKGMgPj4gNiksIDB4ODAgfCAoYyAmIDB4M0YpXSwgdGhpcy5fcG9zXyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcG9zXyArPSAyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID49IDB4RDgwMCAmJiBjIDw9MHhEQkZGKXtcclxuICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYzI9dmFsdWUuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggIWlzTmFOKGMyKSAmJiBjMj49MHhEQzAwICYmIGMyPD0weERGRkYgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3AxID0gKGMgJiAweDNGRikgKyAweDQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfcDIgPSBjMiAmIDB4M0ZGO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2IxID0gMHhGMCB8ICgoX3AxPj44KSAmIDB4M0YpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfYjIgPSAweDgwIHwgKChfcDE+PjIpICYgMHgzRik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9iMyA9IDB4ODAgfCAoKF9wMSAmIDB4Myk8PDQpIHwgKChfcDI+PjYpICYgMHhGKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX2I0ID0gMHg4MCB8IChfcDIgJiAweDNGKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVdyaXRlKHRoaXMuX3Bvc18rNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3U4ZF8uc2V0KFtfYjEsIF9iMiwgX2IzLCBfYjRdLHRoaXMuX3Bvc18pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3NfKz00O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA8PSAweEZGRkYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbnN1cmVXcml0ZSh0aGlzLl9wb3NfICsgMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdThkXy5zZXQoWzB4RTAgfCAoYyA+PiAxMiksIDB4ODAgfCAoKGMgPj4gNikgJiAweDNGKSwgMHg4MCB8IChjICYgMHgzRildLCB0aGlzLl9wb3NfKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb3NfICs9IDM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVdyaXRlKHRoaXMuX3Bvc18gKyA0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91OGRfLnNldChbMHhGMCB8IChjID4+IDE4KSwgMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKSwgMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpLCAweDgwIHwgKGMgJiAweDNGKV0sIHRoaXMuX3Bvc18pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Bvc18gKz0gNDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPHA+5bCGIFVURi04IOWtl+espuS4suWGmeWFpeWtl+iKgua1geOAguWFiOWGmeWFpeS7peWtl+iKguihqOekuueahCBVVEYtOCDlrZfnrKbkuLLplb/luqbvvIjkvZzkuLogMTYg5L2N5pW05pWw77yJ77yM54S25ZCO5YaZ5YWl6KGo56S65a2X56ym5Liy5a2X56ym55qE5a2X6IqC44CCPC9wPlxyXG4gICAgICAgICAqIDxwPuWvueW6lOeahOivu+WPluaWueazleS4uu+8miBnZXRVVEZTdHJpbmcg44CCPC9wPlxyXG4gICAgICAgICAqIEBwYXJhbVx0dmFsdWUg6KaB5YaZ5YWl55qE5a2X56ym5Liy5YC844CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgd3JpdGVVVEZTdHJpbmcodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB2YXIgdFBvczogbnVtYmVyID0gdGhpcy5wb3M7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVaW50MTYoMSk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVVVEZCeXRlcyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBkUG9zOiBudW1iZXIgPSB0aGlzLnBvcyAtIHRQb3MgLSAyO1xyXG4gICAgICAgICAgICAvL3RyYWNlKFwid3JpdGVMZW46XCIsZFBvcyxcInBvczpcIix0UG9zKTtcclxuICAgICAgICAgICAgdGhpcy5fZF8uc2V0VWludDE2KHRQb3MsIGRQb3MsIHRoaXMuX3hkXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIDxwPuWwhiBVVEYtOCDlrZfnrKbkuLLlhpnlhaXlrZfoioLmtYHjgILlhYjlhpnlhaXku6XlrZfoioLooajnpLrnmoQgVVRGLTgg5a2X56ym5Liy6ZW/5bqm77yI5L2c5Li6IDMyIOS9jeaVtOaVsO+8ie+8jOeEtuWQjuWGmeWFpeihqOekuuWtl+espuS4suWtl+espueahOWtl+iKguOAgjwvcD5cclxuICAgICAgICAgKiBAcGFyYW1cdHZhbHVlIOimgeWGmeWFpeeahOWtl+espuS4suWAvOOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdyaXRlVVRGU3RyaW5nMzIodmFsdWU6c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICAgICAgdmFyIHRQb3MgPSB0aGlzLnBvcztcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVpbnQzMigxKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVVURkJ5dGVzKHZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIGRQb3MgPSB0aGlzLnBvcyAtIHRQb3MgLSA0O1xyXG4gICAgICAgICAgICAvL3RyYWNlKFwid3JpdGVMZW46XCIsZFBvcyxcInBvczpcIix0UG9zKTtcclxuICAgICAgICAgICAgdGhpcy5fZF8uc2V0VWludDMyKHRQb3MsIGRQb3MsIHRoaXMuX3hkXyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKiDor7vlj5YgVVRGLTgg5a2X56ym5Liy44CCXHJcbiAgICAgICAgICogQHJldHVybiDor7vlj5bnmoTlrZfnrKbkuLLjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWFkVVRGU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIC8vdmFyIHRQb3M6aW50ID0gcG9zO1xyXG4gICAgICAgICAgICAvL3ZhciBsZW46aW50ID0gZ2V0VWludDE2KCk7XHJcbiAgICAgICAgICAgIC8vLy90cmFjZShcInJlYWRMZW46XCIrbGVuLFwicG9zLFwiLHRQb3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkVVRGQnl0ZXModGhpcy5nZXRVaW50MTYoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlYWRVVEZTdHJpbmczMigpOnN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRVVEZCeXRlcyh0aGlzLmdldFVpbnQzMigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIDxwPuS7juWtl+iKgua1geS4reivu+WPluS4gOS4qiBVVEYtOCDlrZfnrKbkuLLjgILlgYflrprlrZfnrKbkuLLnmoTliY3nvIDmmK/kuIDkuKrml6DnrKblj7fnmoTnn63mlbTlnovvvIjku6XmraTlrZfoioLooajnpLropoHor7vlj5bnmoTplb/luqbvvInjgII8L3A+XHJcbiAgICAgICAgICogPHA+5a+55bqU55qE5YaZ5YWl5pa55rOV5Li677yaIHdyaXRlVVRGU3RyaW5nIOOAgjwvcD5cclxuICAgICAgICAgKiBAcmV0dXJuIOivu+WPlueahOWtl+espuS4suOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFVURlN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkVVRGU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIOivu+Wtl+espuS4su+8jOW/hemhu+aYryB3cml0ZVVURkJ5dGVzIOaWueazleWGmeWFpeeahOWtl+espuS4suOAglxyXG4gICAgICAgICAqIEBwYXJhbSBsZW5cdOimgeivu+eahGJ1ZmZlcumVv+W6pu+8jOm7mOiupOWwhuivu+WPlue8k+WGsuWMuuWFqOmDqOaVsOaNruOAglxyXG4gICAgICAgICAqIEByZXR1cm4g6K+75Y+W55qE5a2X56ym5Liy44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVhZFVURkJ5dGVzKGxlbjogbnVtYmVyID0gLTEpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICBpZiAobGVuID09PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgdmFyIGxhc3RCeXRlczogbnVtYmVyID0gdGhpcy5ieXRlc0F2YWlsYWJsZTtcclxuICAgICAgICAgICAgaWYgKGxlbiA+IGxhc3RCeXRlcykgdGhyb3cgXCJyZWFkVVRGQnl0ZXMgZXJyb3IgLSBPdXQgb2YgYm91bmRzXCI7XHJcbiAgICAgICAgICAgIGxlbiA9IGxlbiA+IDAgPyBsZW4gOiBsYXN0Qnl0ZXM7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yVVRGKGxlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7ku47lrZfoioLmtYHkuK3or7vlj5bkuIDkuKrnlLEgbGVuZ3RoIOWPguaVsOaMh+WumueahOmVv+W6pueahCBVVEYtOCDlrZfoioLluo/liJfvvIzlubbov5Tlm57kuIDkuKrlrZfnrKbkuLLjgII8L3A+XHJcbiAgICAgICAgICogPHA+5LiA6Iis6K+75Y+W55qE5piv55SxIHdyaXRlVVRGQnl0ZXMg5pa55rOV5YaZ5YWl55qE5a2X56ym5Liy44CCPC9wPlxyXG4gICAgICAgICAqIEBwYXJhbSBsZW5cdOimgeivu+eahGJ1ZmZlcumVv+W6pu+8jOm7mOiupOWwhuivu+WPlue8k+WGsuWMuuWFqOmDqOaVsOaNruOAglxyXG4gICAgICAgICAqIEByZXR1cm4g6K+75Y+W55qE5a2X56ym5Liy44CCXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0VVRGQnl0ZXMobGVuOiBudW1iZXIgPSAtMSk6IHN0cmluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWRVVEZCeXRlcyhsZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogPHA+5Zyo5a2X6IqC5rWB5Lit5YaZ5YWl5LiA5Liq5a2X6IqC44CCPC9wPlxyXG4gICAgICAgICAqIDxwPuS9v+eUqOWPguaVsOeahOS9jiA4IOS9jeOAguW/veeVpemrmCAyNCDkvY3jgII8L3A+XHJcbiAgICAgICAgICogQHBhcmFtXHR2YWx1ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdyaXRlQnl0ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVdyaXRlKHRoaXMuX3Bvc18gKyAxKTtcclxuICAgICAgICAgICAgdGhpcy5fZF8uc2V0SW50OCh0aGlzLl9wb3NfLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc18gKz0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIDxwPuS7juWtl+iKgua1geS4reivu+WPluW4puespuWPt+eahOWtl+iKguOAgjwvcD5cclxuICAgICAgICAgKiA8cD7ov5Tlm57lgLznmoTojIPlm7TmmK/ku44gLTEyOCDliLAgMTI344CCPC9wPlxyXG4gICAgICAgICAqIEByZXR1cm4g5LuL5LqOIC0xMjgg5ZKMIDEyNyDkuYvpl7TnmoTmlbTmlbDjgIJcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWFkQnl0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9zXyArIDEgPiB0aGlzLl9sZW5ndGgpIHRocm93IFwicmVhZEJ5dGUgZXJyb3IgLSBPdXQgb2YgYm91bmRzXCI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kXy5nZXRJbnQ4KHRoaXMuX3Bvc18rKyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqIOS7juWtl+iKgua1geS4reivu+WPluW4puespuWPt+eahOWtl+iKguOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEJ5dGUoKTogbnVtYmVyIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZEJ5dGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICAgICAqIDxwPuS/neivgeivpeWtl+iKgua1geeahOWPr+eUqOmVv+W6puS4jeWwj+S6jiA8Y29kZT5sZW5ndGhUb0Vuc3VyZTwvY29kZT4g5Y+C5pWw5oyH5a6a55qE5YC844CCPC9wPlxyXG4gICAgICAgICAqIEBwYXJhbVx0bGVuZ3RoVG9FbnN1cmVcdOaMh+WumueahOmVv+W6puOAglxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9lbnN1cmVXcml0ZShsZW5ndGhUb0Vuc3VyZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sZW5ndGggPCBsZW5ndGhUb0Vuc3VyZSkgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoVG9FbnN1cmU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbGxvY2F0ZWRfIDwgbGVuZ3RoVG9FbnN1cmUpIHRoaXMubGVuZ3RoID0gbGVuZ3RoVG9FbnN1cmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiA8cD7lsIbmjIflrpogYXJyYXlidWZmZXIg5a+56LGh5Lit55qE5LulIG9mZnNldCDkuLrotbflp4vlgY/np7vph4/vvIwgbGVuZ3RoIOS4uumVv+W6pueahOWtl+iKguW6j+WIl+WGmeWFpeWtl+iKgua1geOAgjwvcD5cclxuICAgICAgICAgKiA8cD7lpoLmnpznnIHnlaUgbGVuZ3RoIOWPguaVsO+8jOWImeS9v+eUqOm7mOiupOmVv+W6piAw77yM6K+l5pa55rOV5bCG5LuOIG9mZnNldCDlvIDlp4vlhpnlhaXmlbTkuKrnvJPlhrLljLrvvJvlpoLmnpzov5jnnIHnlaXkuoYgb2Zmc2V0IOWPguaVsO+8jOWImeWGmeWFpeaVtOS4que8k+WGsuWMuuOAgjwvcD5cclxuICAgICAgICAgKiA8cD7lpoLmnpwgb2Zmc2V0IOaIliBsZW5ndGgg5bCP5LqOMO+8jOacrOWHveaVsOWwhuaKm+WHuuW8guW4uOOAgjwvcD5cclxuICAgICAgICAgKiBAcGFyYW1cdGFycmF5YnVmZmVyXHTpnIDopoHlhpnlhaXnmoQgQXJyYXlidWZmZXIg5a+56LGh44CCXHJcbiAgICAgICAgICogQHBhcmFtXHRvZmZzZXRcdFx0QXJyYXlidWZmZXIg5a+56LGh55qE57Si5byV55qE5YGP56e76YeP77yI5Lul5a2X6IqC5Li65Y2V5L2N77yJXHJcbiAgICAgICAgICogQHBhcmFtXHRsZW5ndGhcdFx05LuOIEFycmF5YnVmZmVyIOWvueixoeWGmeWFpeWIsCBCeXRlIOWvueixoeeahOmVv+W6pu+8iOS7peWtl+iKguS4uuWNleS9je+8iVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHdyaXRlQXJyYXlCdWZmZXIoYXJyYXlidWZmZXI6IGFueSwgb2Zmc2V0OiBudW1iZXIgPSAwLCBsZW5ndGg6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgbGVuZ3RoIDwgMCkgdGhyb3cgXCJ3cml0ZUFycmF5QnVmZmVyIGVycm9yIC0gT3V0IG9mIGJvdW5kc1wiO1xyXG4gICAgICAgICAgICBpZiAobGVuZ3RoID09IDApIGxlbmd0aCA9IGFycmF5YnVmZmVyLmJ5dGVMZW5ndGggLSBvZmZzZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVdyaXRlKHRoaXMuX3Bvc18gKyBsZW5ndGgpO1xyXG4gICAgICAgICAgICB2YXIgdWludDhhcnJheTogYW55ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl91OGRfLnNldCh1aW50OGFycmF5LnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgbGVuZ3RoKSwgdGhpcy5fcG9zXyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc18gKz0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K+75Y+WQXJyYXlCdWZmZXLmlbDmja5cclxuICAgICAgICAgKiBAcGFyYW1cdGxlbmd0aFxyXG4gICAgICAgICAqIEByZXR1cm5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZWFkQXJyYXlCdWZmZXIobGVuZ3RoOiBudW1iZXIpOiBBcnJheUJ1ZmZlciB7XHJcbiAgICAgICAgICAgIHZhciByc3Q6IEFycmF5QnVmZmVyO1xyXG4gICAgICAgICAgICByc3QgPSB0aGlzLl91OGRfLmJ1ZmZlci5zbGljZSh0aGlzLl9wb3NfLCB0aGlzLl9wb3NfICsgbGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5fcG9zXyA9IHRoaXMuX3Bvc18gKyBsZW5ndGhcclxuICAgICAgICAgICAgcmV0dXJuIHJzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19