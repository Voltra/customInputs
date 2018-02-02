import {SelectableCustomInput} from "./abstractions/SelectableCustomInput"
import { AbstractCustomInput } from "./abstractions/AbstractCustomInput";
import { CustomInputsHub } from "./CustomInputsHub";

export class RadioButton extends SelectableCustomInput{
	protected group: Array<HTMLInputElement>;

	constructor(radioButton: HTMLInputElement, classNames: string){
		super(radioButton, `radio-button ${classNames}`);
		this.group = Array.from(
			document.querySelectorAll(`input[type="radio"][name="${this.elem.getAttribute("name")}"]`)
		).map(e => e as HTMLInputElement)
		.filter(e => e!==this.elem);
	}

	protected getContent(): HTMLElement{
		const outerCircle = document.createElement("DIV") as HTMLElement;
		const innerDot = document.createElement("DIV") as HTMLElement;

		outerCircle.classList.add("outer");
		innerDot.classList.add("inner");

		outerCircle.appendChild(innerDot);

		return outerCircle;
	}

	protected addEventListeners(elem: HTMLInputElement, custom: HTMLElement): RadioButton{
		super.addEventListeners(elem, custom);

		custom.addEventListener("click", ()=>{
			const currentState: string = this.getState();
			const states = SelectableCustomInput.classes;

			if(currentState === states.DISABLED || currentState === states.SELECTED)
				return;

			this.group.forEach(e => e.checked=false);
			this.group
			.map(e => CustomInputsHub.getInstance().get(e) as SelectableCustomInput)
			.forEach(c => c.adjustClass());

			elem.checked = currentState !== states.SELECTED;

			if(elem.indeterminate)
				elem.indeterminate = false;

			this.adjustClass();
		});

		return this;
	}
}