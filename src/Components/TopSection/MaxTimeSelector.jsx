import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {maxTimeOptions} from "../../State/values.js";
import {useRecoilState} from "recoil";
import {SelectedMaxTime} from "../../State/atoms/SelectedMaxTime.js";

export default function MaxTimeSelector(props) {
    const {} = props
    const [currentValue, setCurrentValue] = useRecoilState(SelectedMaxTime)

    function handleChange(e) {
        setCurrentValue(e.target.value)
    }


    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="max-time-selector-label">Max Time</InputLabel>
            <Select
                id="max-time-selector"
                value={currentValue}
                onChange={handleChange}
                label="Max Time"
            >
                {maxTimeOptions.map(option => {
                    return <MenuItem key={option} value={option}>{option}</MenuItem>
                })}
            </Select>
        </FormControl>

    );
}

