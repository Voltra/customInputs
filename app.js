/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const SelectableCustomInput_1 = __webpack_require__(1);
class CheckBox extends SelectableCustomInput_1.SelectableCustomInput {
    constructor(checkbox, classNames) {
        super(checkbox, `checkbox ${classNames}`);
    }
    getContent() {
        const container = document.createElement("DIV");
        const indicator = document.createElement("DIV");
        container.classList.add("container");
        indicator.classList.add("indicator");
        container.appendChild(indicator);
        return container;
    }
    addEventListeners(elem, custom) {
        super.addEventListeners(elem, custom);
        custom.addEventListener("click", () => {
            const currentState = this.getState();
            const states = SelectableCustomInput_1.SelectableCustomInput.classes;
            if (currentState === states.DISABLED) return;
            elem.checked = currentState === states.INDETERMINATE || currentState === states.NOT_SELECTED;
            if (elem.indeterminate) elem.indeterminate = false;
            this.adjustClass();
        });
        return this;
    }
}
exports.CheckBox = CheckBox;
//# sourceMappingURL=CheckBox.js.map
//# sourceMappingURL=CheckBox.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCustomInput_1 = __webpack_require__(6);
class SelectableCustomInput extends AbstractCustomInput_1.AbstractCustomInput {
    constructor(elem, classNames = "") {
        super(elem, classNames);
        this.addEventListeners(this.elem, this.custom);
    }
    getState() {
        if (this.elem.disabled) return SelectableCustomInput.classes.DISABLED;else if (this.elem.indeterminate) return SelectableCustomInput.classes.INDETERMINATE;else if (this.elem.checked) return SelectableCustomInput.classes.SELECTED;else return SelectableCustomInput.classes.NOT_SELECTED;
    }
    adjustClass() {
        const classes = Object.values(SelectableCustomInput.classes);
        const thisClasses = classes.filter(className => {
            return this.custom.classList.contains(className);
        });
        const state = this.getState();
        if (thisClasses.includes(state)) return this;
        const toRemove = thisClasses.filter(className => className !== state);
        toRemove.forEach(className => this.custom.classList.remove(className));
        this.custom.classList.add(state);
        return this;
    }
    addEventListeners(elem, custom) {
        elem.addEventListener("change", this.adjustClass.bind(this));
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
//# sourceMappingURL=SelectableCustomInput.js.map
//# sourceMappingURL=SelectableCustomInput.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
class CustomInputsHub {
    constructor() {
        this.inner = [];
    }
    get(elem) {
        return this.inner.find(custom => custom.getElem() === elem);
    }
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
        if (CustomInputsHub.instance === null) CustomInputsHub.instance = new CustomInputsHub();
        return CustomInputsHub.instance;
    }
}
CustomInputsHub.instance = null;
exports.CustomInputsHub = CustomInputsHub;
//# sourceMappingURL=CustomInputsHub.js.map
//# sourceMappingURL=CustomInputsHub.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const make_bind_1 = __webpack_require__(4);
const CustomInputsHub_1 = __webpack_require__(2);
function getInputs(type, data) {
    const startsWithData = /^data-/;
    let dataAttr = data;
    if (!startsWithData.test(dataAttr)) dataAttr = `data-${dataAttr}`;
    return Array.from(document.querySelectorAll(`input[type="${type}"][${dataAttr}]`)).map(e => e);
}
document.addEventListener("DOMContentLoaded", () => {
    const checkBoxes = getInputs("checkbox", "custom");
    const radioButtons = getInputs("radio", "custom");
    const checkBoxTicks = getInputs("checkbox", "custom-tick");
    const checkBoxToggles = getInputs("checkbox", "custom-toggle");
    const checkBoxToggleInners = getInputs("checkbox", "custom-toggle-inner");
    CustomInputsHub_1.CustomInputsHub.getInstance().mapAndAddAll(checkBoxes, make_bind_1.makeCheckBox).mapAndAddAll(radioButtons, make_bind_1.makeRadioButton).mapAndAddAll(checkBoxTicks, make_bind_1.makeCheckBoxTick).mapAndAddAll(checkBoxToggles, make_bind_1.makeCheckBoxToggle).mapAndAddAll(checkBoxToggleInners, make_bind_1.makeCheckBoxToggleInner);
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=app.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const make_1 = __webpack_require__(5);
const CheckBox_1 = __webpack_require__(0);
const RadioButton_1 = __webpack_require__(7);
const CheckBoxTick_1 = __webpack_require__(8);
const CheckBoxToggle_1 = __webpack_require__(9);
const CheckBoxToggleInner_1 = __webpack_require__(10);
exports.makeCheckBox = make_1.make.bind(make_1.make, CheckBox_1.CheckBox);
exports.makeRadioButton = make_1.make.bind(make_1.make, RadioButton_1.RadioButton);
exports.makeCheckBoxTick = make_1.make.bind(make_1.make, CheckBoxTick_1.CheckBoxTick);
exports.makeCheckBoxToggle = make_1.make.bind(make_1.make, CheckBoxToggle_1.CheckBoxToggle);
exports.makeCheckBoxToggleInner = make_1.make.bind(make_1.make, CheckBoxToggleInner_1.CheckBoxToggleInner);
//# sourceMappingURL=make-bind.js.map
//# sourceMappingURL=make-bind.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
function make(Class, ...args) {
    return new Class(...args);
}
exports.make = make;
//# sourceMappingURL=make.js.map
//# sourceMappingURL=make.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
        for (let key in this.elem.style) {
            const descriptor = Object.getOwnPropertyDescriptor(this.custom.style, key);
            if (descriptor && descriptor.writable) this.custom.style[key] = this.elem.style[key];
        }
        this.elem.style["display"] = "none";
        this.adjustClass();
    }
    getElem() {
        return this.elem;
    }
    getContent() {
        return document.createElement("SPAN");
    }
}
exports.AbstractCustomInput = AbstractCustomInput;
//# sourceMappingURL=AbstractCustomInput.js.map
//# sourceMappingURL=AbstractCustomInput.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const SelectableCustomInput_1 = __webpack_require__(1);
const CustomInputsHub_1 = __webpack_require__(2);
class RadioButton extends SelectableCustomInput_1.SelectableCustomInput {
    constructor(radioButton, classNames) {
        super(radioButton, `radio-button ${classNames}`);
        this.group = Array.from(document.querySelectorAll(`input[type="radio"][name="${this.elem.getAttribute("name")}"]`)).map(e => e).filter(e => e !== this.elem);
    }
    getContent() {
        const outerCircle = document.createElement("DIV");
        const innerDot = document.createElement("DIV");
        outerCircle.classList.add("outer");
        innerDot.classList.add("inner");
        outerCircle.appendChild(innerDot);
        return outerCircle;
    }
    addEventListeners(elem, custom) {
        super.addEventListeners(elem, custom);
        custom.addEventListener("click", () => {
            const currentState = this.getState();
            const states = SelectableCustomInput_1.SelectableCustomInput.classes;
            if (currentState === states.DISABLED || currentState === states.SELECTED) return;
            this.group.forEach(e => e.checked = false);
            this.group.map(e => CustomInputsHub_1.CustomInputsHub.getInstance().get(e)).forEach(c => c.adjustClass());
            elem.checked = currentState !== states.SELECTED;
            if (elem.indeterminate) elem.indeterminate = false;
            this.adjustClass();
        });
        return this;
    }
}
exports.RadioButton = RadioButton;
//# sourceMappingURL=RadioButton.js.map
//# sourceMappingURL=RadioButton.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const CheckBox_1 = __webpack_require__(0);
class CheckBoxTick extends CheckBox_1.CheckBox {
    constructor(elem, classNames) {
        super(elem, `check-tick ${classNames}`);
    }
    getContent() {
        const indicator = document.createElement("IMG");
        indicator.classList.add("indicator");
        indicator.classList.add("tick");
        indicator.src = "/blue-tick.svg";
        indicator.alt = "tick, symbolizes validation/selection";
        return indicator;
    }
}
exports.CheckBoxTick = CheckBoxTick;
//# sourceMappingURL=CheckBoxTick.js.map
//# sourceMappingURL=CheckBoxTick.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const CheckBox_1 = __webpack_require__(0);
class CheckBoxToggle extends CheckBox_1.CheckBox {
    constructor(elem, classNames) {
        super(elem, `check-toggle ${classNames}}`);
    }
    getContent() {
        const rail = document.createElement("DIV");
        const knob = document.createElement("DIV");
        rail.classList.add("rail");
        knob.classList.add("knob");
        rail.appendChild(knob);
        return rail;
    }
}
exports.CheckBoxToggle = CheckBoxToggle;
//# sourceMappingURL=CheckBoxToggle.js.map
//# sourceMappingURL=CheckBoxToggle.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const CheckBox_1 = __webpack_require__(0);
class CheckBoxToggleInner extends CheckBox_1.CheckBox {
    constructor(elem, classNames) {
        super(elem, `check-toggle-inner ${classNames}}`);
    }
    getContent() {
        const rail = document.createElement("DIV");
        const knob = document.createElement("DIV");
        rail.classList.add("rail");
        knob.classList.add("knob");
        rail.appendChild(knob);
        return rail;
    }
}
exports.CheckBoxToggleInner = CheckBoxToggleInner;
//# sourceMappingURL=CheckBoxToggleInner.js.map
//# sourceMappingURL=CheckBoxToggleInner.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map