import React, {useEffect, useState} from 'react';
import {MenuItem, Select} from "@mui/material";

const styles = {

}

export default function CustomSelect(props) {
    const {label, options} = props

    function labelAsId() {
        return label.replace(' ', '_').toLowerCase();
    }

    return (
        <div style={styles}>
            <label htmlFor={labelAsId()}>{label}</label>
            <Select name={label} id={labelAsId()}>
                {options.map(item => {
                    return <MenuItem key={item} value={item}>{item}</MenuItem>
                })}
            </Select>

        </div>
    );
}

