import {CheckBox} from "./CheckBox"

export class CheckBoxTick extends CheckBox{
    constructor(elem: HTMLInputElement, classNames: string){
        super(elem, `check-tick ${classNames}`);
    }

    protected getContent(): HTMLElement{
        const indicator = document.createElement("IMG") as HTMLImageElement;
        indicator.classList.add("indicator");
        indicator.classList.add("tick");

        // indicator.src = "/tick.svg";
        indicator.src = "/blue-tick.svg";
        // indicator.src = "/cross.png";
        indicator.alt = "tick, symbolizes validation/selection";

        return indicator;
    }
}