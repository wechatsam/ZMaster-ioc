import JTTemplateManager from "../managers/JTTemplateManager";

export default class JTLanguageTemplate extends com.JTBaseTemplate
{
        public Thai:string = null;
        public English:string = null;
        public Vietnam:string = null;

        public static defaultLanguage:string = "id";

        public static CHINESE:string = "id";//默认的语言


        public static English:string = "English";//英语
        public static Thai:string = "Thai";//泰国
        public static Vietnam:string = "Vietnam";//越南
        constructor()
        {
                super();
        }

        public static getLanguage(text:string):string
        {
              let language:JTLanguageTemplate = JTTemplateManager.instance.languageLoader.toValue(text);
              return language[this.defaultLanguage];

        }

        public static registerAliasLanguage(language:string):void
        {
                this.defaultLanguage = language
        }
}
