/// <reference path="../events/JTEventSignaler.d.ts" />
declare namespace com {
    abstract class JTClassExtension extends JTEventSignaler implements JTIClassExtension {
        constructor();
        abstract build(): void;
    }
}
