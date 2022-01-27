/// <reference path="../../run/JTClassExtension.d.ts" />
declare namespace com {
    class JTResponseMapping extends JTClassExtension {
        build(): void;
        protected static mappingMap: {
            [protocol: number]: any;
        };
        registerToMapping<T extends JTClassMapper>(protocol: number, __mapper: T): void;
        registerMapper(protocol: number, _class: any, createFromPool?: boolean): void;
        getMapper<T extends JTClassMapper>(protocol: number): T;
        create(protocol: number, data: any): any;
    }
}
