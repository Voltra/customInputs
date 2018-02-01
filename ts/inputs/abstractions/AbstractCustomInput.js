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
    class AbstractCustomInput {
        constructor(elem, classNames) {
            this.elem = elem;
            const classes = classNames.split(/\s+/g).filter(str => str !== "");
            const div = document.createElement("DIV");
            div.classList.add("custom");
            classes.forEach(className => div.classList.add(className));
            const innerSpan = this.getContent();
            div.appendChild(innerSpan);
            this.custom = div;
            this.elem.parentNode.insertBefore(this.custom, this.elem.nextSibling);
            for (let key in this.elem.style)
                this.custom.style[key] = this.elem.style[key];
            this.elem.style["display"] = "none";
        }
        getContent() {
            return document.createElement("SPAN");
        }
    }
    exports.AbstractCustomInput = AbstractCustomInput;
});
//# sourceMappingURL=AbstractCustomInput.js.map