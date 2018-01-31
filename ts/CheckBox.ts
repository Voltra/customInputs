import {SelectableCustomInput} from "./inputs/SelectableCustomInput"

export class CheckBox extends SelectableCustomInput{
	constructor(checkbox: HTMLInputElement, classNames: string){
  	super(checkbox, `checkbox ${classNames}`);
  }
  
  protected getContent(): HTMLElement{
  	const container = document.createElement("DIV") as HTMLElement;
    const indicator = document.createElement("DIV") as HTMLElement;
    
    container.classList.add("container");
    
    container.appendChild(indicator);
  	return container;
  }
}