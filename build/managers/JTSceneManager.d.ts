declare namespace com {
    class JTSceneManager extends JTClassExtension {
        private static _stage;
        constructor();
        build(): void;
        static get stage(): fgui.GRoot;
    }
}
