(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./AbstractCustomInput"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const AbstractCustomInput_1 = require("./AbstractCustomInput");
    class SelectableCustomInput extends AbstractCustomInput_1.AbstractCustomInput {
        constructor(elem, classNames = "") {
            super(elem, classNames);
            this.addEventListeners(this.elem, this.custom);
        }
        addEventListeners(elem, custom) {
            return this;
        }
        getState() {
            if (this.elem.disabled)
                return SelectableCustomInput.classes.DISABLED;
            else if (this.elem.indeterminate)
                return SelectableCustomInput.classes.INDETERMINATE;
            else if (this.elem.checked)
                return SelectableCustomInput.classes.SELECTED;
            else
                return SelectableCustomInput.classes.NOT_SELECTED;
        }
        adjustClass() {
            const classes = Object.values(SelectableCustomInput.classes);
            const thisClasses = classes.filter(className => {
                return this.custom.classList.contains(className);
            });
            const state = this.getState();
            if (thisClasses.includes(state))
                return this;
            const toRemove = thisClasses.filter(className => className !== state);
            toRemove.forEach(className => this.custom.classList.remove(className));
            this.custom.classList.add(state);
            return this;
        }
    }
    SelectableCustomInput.classes = {
        DISABLED: "disabled",
        SELECTED: "selected",
        INDETERMINATE: "indeterminate",
        NOT_SELECTED: "not-selected"
    };
    exports.SelectableCustomInput = SelectableCustomInput;
});
//# sourceMappingURL=SelectableCustomInput.js.map