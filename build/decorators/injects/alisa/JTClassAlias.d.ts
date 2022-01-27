declare module com {
    abstract class JTClassAlias {
        protected _cls: any;
        protected _instance: any;
        static CLASS_NAME: string;
        constructor(cls: any);
        recycle(): void;
        get instance(): any;
    }
}
