import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";

const calendarContainer = {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'grid',
    gridTemplateColumns: '1fr repeat(7, minmax(100px, 1fr)) 1fr',
    background: 'white',
    width: '100%',
    boxSizing: 'border-box',
    color: 'black',
}

const calendarItem = {
    textAlign: 'center',
    border: '1px solid black',
}

export default function Calendar(props) {
    const {} = props
    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ]
    return (
        <Box sx={calendarContainer}>
            <div></div>
            {days.map(day => {
                return <Box sx={calendarItem} key={day}>
                    <span>{day}</span>
                    <span></span>
                </Box>
            })}
            <div></div>
        </Box>
    );
}

