"use strict";
var com;
(function (com) {
    /**
     * <p> <code>Socket</code> 封装了 HTML5 WebSocket ，允许服务器端与客户端进行全双工（full-duplex）的实时通信，并且允许跨域通信。在建立连接后，服务器和 Browser/Client Agent 都能主动的向对方发送或接收文本和二进制数据。</p>
     * <p>要使用 <code>Socket</code> 类的方法，请先使用构造函数 <code>new Socket</code> 创建一个 <code>Socket</code> 对象。 <code>Socket</code> 以异步方式传输和接收数据。</p>
     */
    class JTWebSocket extends com.JTEventDispatcher {
        /**
         * <p>创建新的 Socket 对象。默认字节序为 Socket.BIG_ENDIAN 。若未指定参数，将创建一个最初处于断开状态的套接字。若指定了有效参数，则尝试连接到指定的主机和端口。</p>
         * @param host		服务器地址。
         * @param port		服务器端口。
         * @param byteClass	用于接收和发送数据的 Byte 类。如果为 null ，则使用 Byte 类，也可传入 Byte 类的子类。
         * @param protocols	子协议名称。子协议名称字符串，或由多个子协议名称字符串构成的数组
         */
        constructor(host = null, port = 0, byteClass = null, protocols = null) {
            super();
            /**
             * 不再缓存服务端发来的数据，如果传输的数据为字符串格式，建议设置为true，减少二进制转换消耗。
             */
            this.disableInput = false;
            /**
             * <p>子协议名称。子协议名称字符串，或由多个子协议名称字符串构成的数组。必须在调用 connect 或者 connectByUrl 之前进行赋值，否则无效。</p>
             * <p>指定后，只有当服务器选择了其中的某个子协议，连接才能建立成功，否则建立失败，派发 Event.ERROR 事件。</p>
             */
            this.protocols = [];
            this._byteClass = byteClass ? byteClass : com.JTBuffer;
            this.protocols = protocols;
            this.endian = JTWebSocket.BIG_ENDIAN;
            if (host && port > 0 && port < 65535)
                this.connect(host, port);
        }
        /**
         * 缓存的服务端发来的数据。
         */
        get input() {
            return this._input;
        }
        /**
         * 表示需要发送至服务端的缓冲区中的数据。
         */
        get output() {
            return this._output;
        }
        /**
         * 表示此 Socket 对象目前是否已连接。
         */
        get connected() {
            return this._connected;
        }
        /**
         * <p>主机字节序，是 CPU 存放数据的两种不同顺序，包括小端字节序和大端字节序。</p>
         * <p> LITTLE_ENDIAN ：小端字节序，地址低位存储值的低位，地址高位存储值的高位。</p>
         * <p> BIG_ENDIAN ：大端字节序，地址低位存储值的高位，地址高位存储值的低位。</p>
         */
        get endian() {
            return this._endian;
        }
        set endian(value) {
            this._endian = value;
            if (this._input != null)
                this._input.endian = value;
            if (this._output != null)
                this._output.endian = value;
        }
        /**
         * <p>连接到指定的主机和端口。</p>
         * <p>连接成功派发 Event.OPEN 事件；连接失败派发 Event.ERROR 事件；连接被关闭派发 Event.CLOSE 事件；接收到数据派发 Event.MESSAGE 事件； 除了 Event.MESSAGE 事件参数为数据内容，其他事件参数都是原生的 HTML DOM Event 对象。</p>
         * @param host	服务器地址。
         * @param port	服务器端口。
         */
        connect(host, port) {
            var url = "ws://" + host + ":" + port;
            this.connectByUrl(url);
        }
        /**
         * <p>连接到指定的服务端 WebSocket URL。 URL 类似 ws://yourdomain:port。</p>
         * <p>连接成功派发 Event.OPEN 事件；连接失败派发 Event.ERROR 事件；连接被关闭派发 Event.CLOSE 事件；接收到数据派发 Event.MESSAGE 事件； 除了 Event.MESSAGE 事件参数为数据内容，其他事件参数都是原生的 HTML DOM Event 对象。</p>
         * @param url	要连接的服务端 WebSocket URL。 URL 类似 ws://yourdomain:port。
         */
        connectByUrl(url) {
            if (this._socket != null)
                this.close();
            this._socket && this.clean();
            if (!this.protocols || this.protocols.length == 0) {
                this._socket = new WebSocket(url);
            }
            else {
                this._socket = new WebSocket(url, this.protocols);
            }
            this._socket.binaryType = "arraybuffer";
            this._output = new this._byteClass();
            this._output.endian = this.endian;
            this._input = new this._byteClass();
            this._input.endian = this.endian;
            this._addInputPosition = 0;
            this._socket.onopen = (e) => {
                this._onOpen(e);
            };
            this._socket.onmessage = (msg) => {
                this._onMessage(msg);
            };
            this._socket.onclose = (e) => {
                this._onClose(e);
            };
            this._socket.onerror = (e) => {
                this._onError(e);
            };
        }
        /**
         * 清理Socket：关闭Socket链接，关闭事件监听，重置Socket
         */
        clean() {
            this.close();
            this._connected = false;
            this._socket.onopen = null;
            this._socket.onmessage = null;
            this._socket.onclose = null;
            this._socket.onerror = null;
            this._socket = null;
            this.removes();
        }
        /**
         * 关闭连接。
         */
        close() {
            if (this._socket != null) {
                try {
                    this._socket.close();
                }
                catch (e) {
                }
            }
        }
        /**
         * @private
         * 连接建立成功 。
         */
        _onOpen(e) {
            this._connected = true;
            this.dispatchEvent(JTWebSocket.OPEN, e);
        }
        /**
         * @private
         * 接收到数据处理方法。
         * @param msg 数据。
         */
        _onMessage(msg) {
            if (!msg || !msg.data)
                return;
            var data = msg.data;
            if (this.disableInput && data) {
                this.dispatchEvent(JTWebSocket.MESSAGE, data);
                return;
            }
            if (this._input.length > 0 && this._input.bytesAvailable < 1) {
                this._input.clear();
                this._addInputPosition = 0;
            }
            var pre = this._input.pos;
            !this._addInputPosition && (this._addInputPosition = 0);
            this._input.pos = this._addInputPosition;
            if (data) {
                if (typeof (data) == 'string') {
                    this._input.writeUTFBytes(data);
                }
                else {
                    this._input.writeArrayBuffer(data);
                }
                this._addInputPosition = this._input.pos;
                this._input.pos = pre;
            }
            this.dispatchEvent(JTWebSocket.MESSAGE, data);
        }
        /**
         * @private
         * 连接被关闭处理方法。
         */
        _onClose(e) {
            this._connected = false;
            this.dispatchEvent(JTWebSocket.CLOSE, e);
        }
        /**
         * @private
         * 出现异常处理方法。
         */
        _onError(e) {
            this.dispatchEvent(JTWebSocket.ERROR, e);
        }
        /**
         * 发送数据到服务器。
         * @param	data 需要发送的数据，可以是String或者ArrayBuffer。
         */
        send(data) {
            this._socket.send(data);
        }
        /**
         * 发送缓冲区中的数据到服务器。
         */
        flush() {
            if (this._output && this._output.length > 0) {
                var evt;
                try {
                    this._socket && this._socket.send(this._output.__getBuffer().slice(0, this._output.length));
                }
                catch (e) {
                    evt = e;
                }
                this._output.endian = this.endian;
                this._output.clear();
                if (evt)
                    this.dispatchEvent(JTWebSocket.ERROR, evt);
            }
        }
    }
    /**
     * <p>主机字节序，是 CPU 存放数据的两种不同顺序，包括小端字节序和大端字节序。</p>
     * <p> LITTLE_ENDIAN ：小端字节序，地址低位存储值的低位，地址高位存储值的高位。</p>
     * <p> BIG_ENDIAN ：大端字节序，地址低位存储值的高位，地址高位存储值的低位。有时也称之为网络字节序。</p>
     */
    JTWebSocket.LITTLE_ENDIAN = "littleEndian";
    /**
     * <p>主机字节序，是 CPU 存放数据的两种不同顺序，包括小端字节序和大端字节序。</p>
     * <p> BIG_ENDIAN ：大端字节序，地址低位存储值的高位，地址高位存储值的低位。有时也称之为网络字节序。</p>
     * <p> LITTLE_ENDIAN ：小端字节序，地址低位存储值的低位，地址高位存储值的高位。</p>
     */
    JTWebSocket.BIG_ENDIAN = "bigEndian";
    /** 定义 open 事件对象的 type 属性值。*/
    JTWebSocket.OPEN = "open";
    /** 定义 message 事件对象的 type 属性值。*/
    JTWebSocket.MESSAGE = "message";
    /** 定义 close 事件对象的 type 属性值。*/
    JTWebSocket.CLOSE = "close";
    /** 定义 error 事件对象的 type 属性值。*/
    JTWebSocket.ERROR = "error";
    com.JTWebSocket = JTWebSocket;
})(com || (com = {}));