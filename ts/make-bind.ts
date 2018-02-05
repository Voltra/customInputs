import {make} from "./make"
import {CheckBox} from "./inputs/CheckBox"
import {RadioButton} from "./inputs/RadioButton"
import {CheckBoxTick} from "./inputs/CheckBoxTick"
import {CheckBoxToggle} from "./inputs/CheckBoxToggle"
import {CheckBoxToggleInner} from "./inputs/CheckBoxToggleInner"

export const makeCheckBox = make.bind(make, CheckBox);
export const makeRadioButton = make.bind(make, RadioButton);
export const makeCheckBoxTick = make.bind(make, CheckBoxTick);
export const makeCheckBoxToggle = make.bind(make, CheckBoxToggle);
export const makeCheckBoxToggleInner = make.bind(make, CheckBoxToggleInner);