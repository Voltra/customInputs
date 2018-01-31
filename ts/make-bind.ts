import {make} from "./make"
import {CheckBox} from "./CheckBox"
import {RadioButton} from "./RadioButton"

export const makeCheckBox = make.bind(make, CheckBox);
export const makeRadioButton = make.bind(make, RadioButton);