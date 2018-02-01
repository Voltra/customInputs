import {makeCheckBox, makeRadioButton} from "./make-bind"
import {CustomInputsHub} from "./inputs/CustomInputsHub"

document.addEventListener("DOMContentLoaded", ()=>{
    const checkBoxes: Array<HTMLInputElement> = Array.from(
        document.querySelectorAll("input[type='checkbox'][data-custom]")
    ).map(e => (e as HTMLInputElement));
    
    const radioButtons: Array<HTMLInputElement> = Array.from(
        document.querySelectorAll("input[type='radio'][data-custom]")
    ).map(e => (e as HTMLInputElement));
    
    CustomInputsHub.getInstance().mapAndAddAll(checkBoxes, makeCheckBox)
    .mapAndAddAll(radioButtons, makeRadioButton);
});