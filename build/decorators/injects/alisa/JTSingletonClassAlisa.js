"use strict";
/*
* name;
*/
var com;
(function (com) {
    class JTSingletonClassAlias extends com.JTClassAlias {
        constructor(cls, destroyed = false) {
            super(cls);
            this._referenceMap = null;
            this._referenceCount = 0;
            this._destroyed = false;
            this._destroyed = destroyed;
            this._referenceMap = {};
        }
        recycle() {
            super.recycle();
        }
        // public bind(target:any, property:string):void
        // {
        // 	let __ClassName:string = target[JTSingletonClass.CLASS_NAME];
        // 	if (!__ClassName) target[JTSingletonClass.CLASS_NAME] = target.name;
        // 	if (!this._referenceMap[__ClassName])
        // 	{
        // 		this._referenceMap[__ClassName] = property;
        // 	}
        // }
        /**
         * 建立引用关系
         * @param target 引用的对象
         * @param property 引用对象属性名
         */
        relevance() {
        }
        get instance() {
            if (!this._instance) {
                this._instance = new this._cls();
            }
            return this._instance;
        }
    }
    com.JTSingletonClassAlias = JTSingletonClassAlias;
})(com || (com = {}));
