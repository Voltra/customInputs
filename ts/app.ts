import {makeCheckBox, makeRadioButton, makeCheckBoxTick, makeCheckBoxToggle, makeCheckBoxToggleInner} from "./make-bind"
import {CustomInputsHub} from "./inputs/CustomInputsHub"

document.addEventListener("DOMContentLoaded", ()=>{
    const checkBoxes: Array<HTMLInputElement> = Array.from(
        document.querySelectorAll("input[type='checkbox'][data-custom]")
    ).map(e => (e as HTMLInputElement));
    
    const radioButtons: Array<HTMLInputElement> = Array.from(
        document.querySelectorAll("input[type='radio'][data-custom]")
    ).map(e => (e as HTMLInputElement));

    const checkBoxTicks: Array<HTMLInputElement> = Array.from(
        document.querySelectorAll("input[type='checkbox'][data-custom-tick]")
    ).map(e => (e as HTMLInputElement));

    const checkBoxToggles: Array<HTMLInputElement> = Array.from(
        document.querySelectorAll("input[type='checkbox'][data-custom-toggle]")
    ).map(e => (e as HTMLInputElement));

    const checkBoxToggleInners: Array<HTMLInputElement> = Array.from(
        document.querySelectorAll("input[type='checkbox'][data-custom-toggle-inner]")
    ).map(e => (e as HTMLInputElement));
    
    CustomInputsHub.getInstance()
    .mapAndAddAll(checkBoxes, makeCheckBox)
    .mapAndAddAll(radioButtons, makeRadioButton)
    .mapAndAddAll(checkBoxTicks, makeCheckBoxTick)
    .mapAndAddAll(checkBoxToggles, makeCheckBoxToggle)
    .mapAndAddAll(checkBoxToggleInners, makeCheckBoxToggleInner);
});