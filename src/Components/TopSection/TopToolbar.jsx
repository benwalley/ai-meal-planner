import React, {useEffect, useState} from 'react';
import {Chip} from "@mui/material";
import MealTypes from "./MealTypes.jsx";
import MaxTimeSelector from "./MaxTimeSelector";
import NumberServings from "./NumberServings";

const toolbarStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
    gridColumn: '1 / -1',
}

export default function TopToolbar(props) {
    const {} = props

    return (
        <div style={toolbarStyles}>
            <MealTypes/>
            <MaxTimeSelector/>
            <NumberServings/>
        </div>
    );
}

