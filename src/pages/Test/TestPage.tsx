import React, {useState} from 'react';
import SuperButton from "../../components/SuperButton/SuperButton";
import SuperCheckbox from "../../components/SuperCheckbox/SuperCheckbox";
import SuperSelect from "../../components/SuperSelect/SuperSelect";
import SuperRadio from "../../components/SuperRadio/SuperRadio";
import SuperEditableSpan from "../../components/SuperEditableSpan/SuperEditableSpan";

export const TestPage = () => {
    const arr = ["x", "y", "z"];
    const [value, setValue] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(false);
    const [radioValue, onChangeOption] = useState(arr[1]);
    const alertHandle = () =>
        alert(`Input value is: ${value}\nCheckbox checked: ${checked}\nSelected radio/option: ${radioValue}`)
    return <>
        <h1>Here is the list of Super components:</h1>
        <div>
            <SuperButton onClick={alertHandle}>Check status</SuperButton>
        </div>
        <div>
            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            >
                Label for checkbox
            </SuperCheckbox>
        </div>
        <div>
            <SuperSelect
                options={arr}
                value={radioValue}
                onChangeOption={onChangeOption}
            />
        </div>
        <div>
            <SuperRadio
                name={"radio"}
                options={arr}
                value={radioValue}
                onChangeOption={onChangeOption}
            />
        </div>
        <div>
            <SuperEditableSpan
                value={value}
                onChangeText={setValue}
                spanProps={{children: value ? undefined : "Enter text..."}}/>
        </div>
    </>
}