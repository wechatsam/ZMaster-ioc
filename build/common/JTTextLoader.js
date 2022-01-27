"use strict";
var com;
(function (com) {
    class JTTextLoader {
        constructor(url, cls) {
            this._url = null;
            this._class = null;
            this._urlLoader = null;
            this._dataMap = {};
            this._values = [];
            this._datas = null;
            if (!url || !cls)
                return;
            this.load(url, cls);
        }
        load(url, cls) {
            this._url = url;
            this._class = cls;
            this._urlLoader = new com.JTURLLoader();
            this._urlLoader.addEventListener(com.JTURLLoader.ERROR, this.onloadError, this);
            this._urlLoader.addEventListener(com.JTURLLoader.COMPLETE, this.onloadComplete, this);
            this._urlLoader.send(url, null, "get", com.JTURLLoader.BUFFER);
        }
        parseZip(data, cls) {
            this._class = cls;
        }
        parseBinary(data, cls) {
            this._class = cls;
        }
        parseStr(data, cls) {
            this._datas = data;
            this._class = cls;
            let list = data.split('\n').join("").split("\r");
            let head = list.shift();
            let propertys = head.split('\t');
            let keys = null;
            for (let i = 0; i < list.length; i++) //赋值
             {
                let line = list[i];
                let values = line.split("\t");
                if (values.length < propertys.length)
                    continue; //清除尾部空白数据
                let template = new this._class();
                if (!keys)
                    keys = Object.keys(template);
                for (let j = 0; j < keys.length; j++) //验证属性值是否匹配
                 {
                    let property = propertys[j];
                    if (i == 0) {
                        let index = keys.indexOf(property);
                        if (index == -1) {
                            com.JTLogger.info("[JTTextLoader.parseStr] cls " + this._class + " template cant find the key:  " + property);
                            continue;
                        }
                    }
                    let value = values[j];
                    switch (true) {
                        case typeof template[property] == 'number': //支持数值类型
                            {
                                value = Number(value);
                                break;
                            }
                        case value.indexOf("{") != -1: //支持JSON类型
                            {
                                value = JSON.parse(value);
                                break;
                            }
                    }
                    template[property] = value;
                    if (property == "id") {
                        this._dataMap[value] = template;
                        this._values = value;
                    }
                }
                template.endFill();
            }
        }
        onloadComplete(data) {
            let buffer = new com.JTBuffer(data);
            buffer.pos = 0;
            let content = buffer.readUTFBytes(buffer.bytesAvailable);
            this.parseStr(content, this._class);
        }
        onloadError(data) {
            com.JTLogger.error("[JTTextLoader.load]  load text data error! the url : " + this._url);
        }
        toValues() {
            let list = [];
            let totalCount = this._values.length;
            for (let i = 0; i < totalCount; i++) {
                let template = this._values[i];
                list.push(template);
            }
            return list;
        }
        toValue(key) {
            return this._dataMap[key];
        }
    }
    JTTextLoader._dataMap = {};
    /**
     * 字符串解析方式
     */
    JTTextLoader.PARSE_STRING = "String";
    /**
      * 二进制流解析方式
      */
    JTTextLoader.PARSE_BINARY = "Binary";
    /**
      * ZIP包解析方式
      */
    JTTextLoader.PARSE_ZIP = "Zip";
    /**
     * 默认加载方法
     */
    JTTextLoader.LOAD_DEFAULT = "load";
    /**
     * 已加载完成-需要调用解析模式即可
     */
    JTTextLoader.LOADED_PARSE = "loaded";
    com.JTTextLoader = JTTextLoader;
})(com || (com = {}));
