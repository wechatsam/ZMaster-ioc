import JTLanguageTemplate from "../templates/JTLanguageTemplate";
// @c.LoadTemplate()
export default class JTTemplateManager extends c.JTAbstractTemplateManager
{
    buildComplete(): void 
    {
    }

    @c.SingletonClass(JTTemplateManager, true)
    public static instance:JTTemplateManager = null;

    @c.Configuration(JTLanguageTemplate, {"type":c.JTTextLoader.LOADED_PARSE, "name": "txt_language", "parseType":c.JTTextLoader.PARSE_STRING})
    public languageLoader:c.JTTextLoader = null;

    @c.Configuration(c.JTServerConfigTemplate, {"type":c.JTTextLoader.LOADED_PARSE, "name": "txt_server", "parseType":c.JTTextLoader.PARSE_STRING})
    public serverLoader:c.JTTextLoader = null;
    constructor()
    {
        super();
    }


    public updateConfigs(resources:cc.TextAsset[]):void
    {
        for (let i:number = 0; i < resources.length; i++)
        {
            let asset:cc.TextAsset = resources[i];
            this.put(asset.name, asset.text);
        }
    }
}
 
