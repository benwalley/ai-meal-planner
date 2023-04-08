import React, {useEffect, useState} from 'react';
import {Chip, Stack} from "@mui/material";
import {useRecoilState} from "recoil";
import {SelectedMealTypes} from "../../State/atoms/SelectedMealTypes.js";

export default function MealTypes(props) {
    const {} = props
    const [selectedMealTypes, setSelectedMealTypes] = useRecoilState(SelectedMealTypes);
    const mealTypes = [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Snacks'
    ]

    function toggleSelected(name) {
        const selectedCopy = [...selectedMealTypes];
        const index = selectedCopy.indexOf(name);
        if(index > -1) {
            selectedCopy.splice(index, 1);
        } else {
            selectedCopy.push(name)
        }
        setSelectedMealTypes(selectedCopy)
    }

    return (
        <Stack direction='row' spacing={1}>
            {mealTypes.map(item => {
                return <Chip key={item} label={item} color={"primary"} variant={selectedMealTypes.includes(item) ? "filled" : 'outlined'} onClick={() => toggleSelected(item)}/>
            })}
        </Stack>
    );
}

