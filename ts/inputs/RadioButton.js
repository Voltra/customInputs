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
    class RadioButton extends SelectableCustomInput_1.SelectableCustomInput {
        constructor(radioButton, classNames) {
            super(radioButton, `radio-button ${classNames}`);
        }
    }
    exports.RadioButton = RadioButton;
});
//# sourceMappingURL=RadioButton.js.map