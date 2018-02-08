import {makeCheckBox, makeRadioButton, makeCheckBoxTick, makeCheckBoxToggle, makeCheckBoxToggleInner} from "./make-bind"
import {CustomInputsHub} from "./inputs/CustomInputsHub"

function getInputs(type, data): Array<HTMLInputElement>{
    const startsWithData = /^data-/;
    let dataAttr = data;

    if(!startsWithData.test(dataAttr))
        dataAttr = `data-${dataAttr}`;

    return Array.from(
        document.querySelectorAll(`input[type="${type}"][${dataAttr}]`)
    ).map(e => (e as HTMLInputElement));
}

document.addEventListener("DOMContentLoaded", ()=>{
    const checkBoxes: Array<HTMLInputElement> = getInputs("checkbox", "custom")
    const radioButtons: Array<HTMLInputElement> = getInputs("radio", "custom");
    const checkBoxTicks: Array<HTMLInputElement> = getInputs("checkbox", "custom-tick");
    const checkBoxToggles: Array<HTMLInputElement> = getInputs("checkbox", "custom-toggle");
    const checkBoxToggleInners: Array<HTMLInputElement> = getInputs("checkbox", "custom-toggle-inner");
    
    CustomInputsHub.getInstance()
    .mapAndAddAll(checkBoxes, makeCheckBox)
    .mapAndAddAll(radioButtons, makeRadioButton)
    .mapAndAddAll(checkBoxTicks, makeCheckBoxTick)
    .mapAndAddAll(checkBoxToggles, makeCheckBoxToggle)
    .mapAndAddAll(checkBoxToggleInners, makeCheckBoxToggleInner);
});