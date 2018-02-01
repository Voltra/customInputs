import {AbstractCustomInput} from "./AbstractCustomInput"

export abstract class SelectableCustomInput extends AbstractCustomInput{
	static classes = {
        DISABLED: "disabled",
        SELECTED: "selected",
        INDETERMINATE: "indeterminate",
        NOT_SELECTED: "not-selected"
    }
  
	constructor(elem: HTMLInputElement, classNames: string = ""){
  	super(elem, classNames);
    this.addEventListeners(this.elem, this.custom);
  }
  
  protected getState(): string{    
    if(this.elem.disabled)
    	return SelectableCustomInput.classes.DISABLED;
    else if(this.elem.indeterminate)
    	return SelectableCustomInput.classes.INDETERMINATE;
    else if(this.elem.checked)
    	return SelectableCustomInput.classes.SELECTED;
    else
    	return SelectableCustomInput.classes.NOT_SELECTED;
  }
  
  protected adjustClass(): SelectableCustomInput{
    
    const classes: Array<string> = (<any>Object).values(SelectableCustomInput.classes);
    const thisClasses: Array<string> = classes.filter(className => {
    	return this.custom.classList.contains(className);
    });
    
    const state: string = this.getState();
      
    if((<any>thisClasses).includes(state))
    	return this;
      
    const toRemove: Array<string> = thisClasses.filter(className => className!==state);
    
    toRemove.forEach(className => this.custom.classList.remove(className));
    this.custom.classList.add(state);
    return this;
  }

  protected addEventListeners(elem, custom): AbstractCustomInput{
    elem.addEventListener("change", this.adjustClass.bind(this));
    return this;
  }
}