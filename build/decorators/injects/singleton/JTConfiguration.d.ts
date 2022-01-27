declare module com {
    /**
     * 注入装饰器
     * @param parameter
     * @param type JTTextLoader.LOAD_DEFAULT,{url:c:1.txt, JTConfigTemplate};
     * 			   JTTextLoader.LOAD_PARSE {type:JTTextLoader.PARSE_ZIP | JTTextLoader.PARSE_BINARY | JTTextLoader.PARSE_STRING, data:content, JTConfigTemplate};
     */
    function Configuration(cls: Function, parameters: object): Function;
    function loadConfiguration(cls: any, target: any, property: string, parameters: any): void;
}
