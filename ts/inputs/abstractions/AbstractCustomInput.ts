export abstract class AbstractCustomInput{
    protected elem: HTMLInputElement;
  protected custom: HTMLElement;

	constructor(elem: HTMLInputElement, classNames: string){
  	//WHAT IS: initialize the elem field to keep a reference to the original <input>
  	this.elem = elem;
    
    //WHAT IS: Creates an array of class names from a string of the following pattern : "{className1}  {className2}  {className3} {className4}"
    const classes: Array<string> = classNames.split(/\s+/g).filter(str => str!=="");
    
    //WHAT IS: Creates the wrapping <div> and adds every class names to its class list
    const div: HTMLElement = document.createElement("DIV") as HTMLElement;
    div.classList.add("custom");
    classes.forEach(className => div.classList.add(className));
    //WHAT IS: Creates the inner <span> and adds it to the <div.custom>
    const innerSpan: HTMLElement = this.getContent();
    div.appendChild(innerSpan);
    
    //WHAT IS: Store a reference to the custom input in the custom field
    this.custom = div;
    
    //WHAT IS: Adds the custom element right after the original one
    this.elem.parentNode.insertBefore(this.custom, this.elem.nextSibling);
    
    //WHAT IS: Changes in style
    for(let key in this.elem.style){
      const descriptor = Object.getOwnPropertyDescriptor(this.custom.style, key);
      if(descriptor && descriptor.writable)
        this.custom.style[key] = this.elem.style[key];
    }

    this.elem.style["display"] = "none";
    this.adjustClass();
  }

  public getElem(): HTMLElement{ return this.elem; }
  
  protected abstract adjustClass(): AbstractCustomInput;
  
  protected getContent(): HTMLElement{
  	return document.createElement("SPAN") as HTMLElement;
  }

  protected abstract addEventListeners(elem: HTMLInputElement, custom: HTMLElement): AbstractCustomInput;
}