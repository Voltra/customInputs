(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./inputs/SelectableCustomInput"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const SelectableCustomInput_1 = require("./inputs/SelectableCustomInput");
    class CheckBox extends SelectableCustomInput_1.SelectableCustomInput {
        constructor(checkbox, classNames) {
            super(checkbox, `checkbox ${classNames}`);
        }
        getContent() {
            const container = document.createElement("DIV");
            const indicator = document.createElement("DIV");
            container.classList.add("container");
            container.appendChild(indicator);
            return container;
        }
    }
    exports.CheckBox = CheckBox;
});
//# sourceMappingURL=CheckBox.js.map