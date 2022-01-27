"use strict";
cc._RF.push(module, '2ac8du0KvpFNJwEv04LRbt2', 'JTLayout');
// Script/src/decorators/injects/JTLayout.ts

define(["require", "exports"], function (require, exports) {
    "use strict";
    var com;
    (function (com) {
        function Layout(layout) {
            return function (target, property, descripter) {
                if (!property)
                    property = "layout";
                JTLayoutManager.addLayout(target.name, property, layout);
            };
        }
        com.Layout = Layout;
    })(com || (com = {}));
});

cc._RF.pop();