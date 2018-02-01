import {make} from "./make"
import {CheckBox} from "./inputs/CheckBox"
import {RadioButton} from "./inputs/RadioButton"

export const makeCheckBox = make.bind(make, CheckBox);
export const makeRadioButton = make.bind(make, RadioButton);