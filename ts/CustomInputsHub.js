(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CustomInputsHub {
        constructor() { this.inner = []; }
        add(customInput) {
            this.inner.push(customInput);
            return this;
        }
        addAll(customInputs) {
            customInputs.forEach(this.add.bind(this));
            return this;
        }
        mapAndAdd(elem, mapper) {
            return this.add(mapper(elem));
        }
        mapAndAddAll(elems, mapper) {
            elems.map(mapper).forEach(this.add.bind(this));
            return this;
        }
        static getInstance() {
            if (CustomInputsHub.instance === null)
                CustomInputsHub.instance = new CustomInputsHub();
            return CustomInputsHub.instance;
        }
    }
    CustomInputsHub.instance = null;
    exports.CustomInputsHub = CustomInputsHub;
});
//# sourceMappingURL=CustomInputsHub.js.map