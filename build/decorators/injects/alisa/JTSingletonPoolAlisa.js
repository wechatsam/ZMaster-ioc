"use strict";
/*
* name;
*/
var com;
(function (com) {
    class JTSingletonPoolAlias extends com.JTClassAlias {
        constructor(cls, itemCls, destroyed = false) {
            super(cls);
            this._referenceMap = null;
            this._referenceCount = 0;
            this._destroyed = false;
            this._itemCls = null;
            this._itemCls = itemCls;
            this._referenceMap = {};
            this._destroyed = destroyed;
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
                this._instance = this._cls.instance(this._itemCls);
            }
            return this._instance;
        }
    }
    com.JTSingletonPoolAlias = JTSingletonPoolAlias;
})(com || (com = {}));
