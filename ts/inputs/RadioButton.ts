import {SelectableCustomInput} from "./abstractions/SelectableCustomInput"

export class RadioButton extends SelectableCustomInput{
	constructor(radioButton: HTMLInputElement, classNames: string){
  	super(radioButton, `radio-button ${classNames}`);
	}
}