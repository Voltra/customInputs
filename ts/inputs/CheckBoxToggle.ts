import { CheckBox } from "./CheckBox";

export class CheckBoxToggle extends CheckBox{
    public constructor(elem: HTMLInputElement, classNames: string){
        super(elem, `check-toggle ${classNames}}`);
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