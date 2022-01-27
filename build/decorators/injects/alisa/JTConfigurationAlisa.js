"use strict";
/*
* name;
*/
var com;
(function (com) {
    class JTConfigurationAlisa extends com.JTClassAlias {
        constructor(cls, parameters) {
            super(cls);
            this._referenceMap = null;
            this._referenceCount = 0;
            this._destroyed = false;
            this._parameter = null;
            this._parameter = parameters;
            this._referenceMap = {};
        }
        recycle() {
            super.recycle();
        }
        /**
         * 建立引用关系
         * @param target 引用的对象
         * @param property 引用对象属性名
         */
        relevance() {
        }
        get instance() {
            if (!this._instance) {
                let loader = this._instance = new com.JTTextLoader();
                let loadedType = this._parameter["type"];
                if (loadedType == com.JTTextLoader.LOAD_DEFAULT) {
                    //暂未实现
                }
                else if (loadedType == com.JTTextLoader.LOADED_PARSE) //已经加载完成，仅解析数据
                 {
                    let name = this._parameter["name"];
                    let templateManager = com.JTApplication.getExtendItem(com.JTApplication.TEMPLATE);
                    let data = templateManager.getValue(name);
                    let type = this._parameter["parseType"];
                    switch (type) {
                        case com.JTTextLoader.PARSE_BINARY:
                            {
                                loader.parseBinary(data, this._cls);
                                break;
                            }
                        case com.JTTextLoader.PARSE_STRING:
                            {
                                loader.parseStr(data, this._cls);
                                break;
                            }
                        case com.JTTextLoader.PARSE_ZIP:
                            {
                                loader.parseZip(data, this._cls);
                                break;
                            }
                    }
                }
            }
            return this._instance;
        }
    }
    com.JTConfigurationAlisa = JTConfigurationAlisa;
})(com || (com = {}));
