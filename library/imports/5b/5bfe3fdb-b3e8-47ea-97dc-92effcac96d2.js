"use strict";
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