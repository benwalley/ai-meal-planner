import React from 'react';
import {FormControl, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import {useRecoilState} from "recoil";
import {SelectedNumberServings} from "../../State/atoms/SelectedNumberServings.js";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const buttonStyles = {
    background: 'var(--theme-primary)'
}

export default function NumberServings(props) {
    const {} = props
    const [currentValue, setCurrentValue] = useRecoilState(SelectedNumberServings)

    function handleAdd() {
        setCurrentValue(currentValue + 1)
    }

    function handleSubtract() {
        setCurrentValue(Math.max(currentValue - 1, 1))
    }

    return (
        <div>
            <span>Servings</span>
            <IconButton size='small' sx={buttonStyles} onClick={handleSubtract} aria-label="minus">
                <RemoveIcon />
            </IconButton>
            <span>{currentValue}</span>
            <IconButton size='small' sx={buttonStyles} onClick={handleAdd} aria-label="plus">
                <AddIcon />
            </IconButton>
        </div>

    );
}

