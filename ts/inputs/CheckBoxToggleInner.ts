import { CheckBox } from "./CheckBox";

export class CheckBoxToggleInner extends CheckBox{
    public constructor(elem: HTMLInputElement, classNames: string){
        super(elem, `check-toggle-inner ${classNames}}`);
    }

    protected getContent(): HTMLElement{
        const rail = document.createElement("DIV") as HTMLElement;
        const knob = document.createElement("DIV") as HTMLElement;

        rail.classList.add("rail");
        knob.classList.add("knob");

        rail.appendChild(knob);
        return rail;
    }
}