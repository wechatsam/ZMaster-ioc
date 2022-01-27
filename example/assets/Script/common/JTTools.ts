export default class JTTools {

        public static alphabetNRegExp = new RegExp("^[A-Za-z0-9]+$");

        public static alaphabetNChineseRegExp = new RegExp("^[A-Za-z0-9\u4E00-\u9FFF]+$");

        public static repairRegInputText(inputText: fgui.GTextInput, reg: RegExp): void {
                inputText.on(fgui.Event.TEXT_CHANGE, onTextChnageHandler, this);

                function onTextChnageHandler(e): void {
                        let content: string = inputText.text;
                        let text = "";
                        for (let i = 0; i < content.length; i++) {
                                if (reg.test(content.charAt(i))) {
                                        text += content.charAt(i);
                                }
                        }
                        inputText.text = text;
                        inputText._editBox.focus();
                }
        }


        public static repairRegOnChangeInputText(inputText: fgui.GTextInput, reg: RegExp, onTextChanged: Function): void {
                inputText.on(fgui.Event.TEXT_CHANGE, onTextChnageHandler, this);

                function onTextChnageHandler(e): void {
                        let content: string = inputText.text;
                        let text = "";
                        for (let i = 0; i < content.length; i++) {
                                if (reg.test(content.charAt(i))) {
                                        text += content.charAt(i);
                                }
                        }
                        inputText.text = text;
                        inputText._editBox.focus();
                        onTextChanged(text);
                }
        }

}
