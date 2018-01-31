(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./make", "./CheckBox", "./RadioButton"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const make_1 = require("./make");
    const CheckBox_1 = require("./CheckBox");
    const RadioButton_1 = require("./RadioButton");
    exports.makeCheckBox = make_1.make.bind(make_1.make, CheckBox_1.CheckBox);
    exports.makeRadioButton = make_1.make.bind(make_1.make, RadioButton_1.RadioButton);
});
//# sourceMappingURL=make-bind.js.map