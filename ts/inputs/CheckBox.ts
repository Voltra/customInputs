import {SelectableCustomInput} from "./abstractions/SelectableCustomInput"
import { AbstractCustomInput } from "./abstractions/AbstractCustomInput";

export class CheckBox extends SelectableCustomInput{
	constructor(checkbox: HTMLInputElement, classNames: string){
  	super(checkbox, `checkbox ${classNames}`);
  }
  
  protected getContent(): HTMLElement{
  	const container = document.createElement("DIV") as HTMLElement;
    const indicator = document.createElement("DIV") as HTMLElement;
    
    container.classList.add("container");
    indicator.classList.add("indicator");
    
    container.appendChild(indicator);
  	return container;
  }

  protected addEventListeners(elem: HTMLInputElement, custom: HTMLElement): AbstractCustomInput{
    super.addEventListeners(elem, custom);
    custom.addEventListener("click", ()=>{
      const currentState = this.getState();
      const states = SelectableCustomInput.classes;
      if(currentState === states.DISABLED)
        return;

      elem.checked = (currentState === states.INDETERMINATE || currentState === states.NOT_SELECTED);

      if(elem.indeterminate)
        elem.indeterminate = false;
      
      this.adjustClass();
    });
    return this;
  }
}