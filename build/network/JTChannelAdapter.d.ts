/// <reference path="JTAbstractChannelAdapter.d.ts" />
declare namespace com {
    abstract class JTChannelAdapter extends JTAbstractChannelAdapter {
        static ENCODE: string;
        static DECODE: string;
        static IDLE: string;
        constructor();
    }
}
