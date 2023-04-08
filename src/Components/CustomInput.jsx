import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";

export default function CustomInput(props) {
    const styles = {
        borderRadius: '50px',
        background: 'linear-gradient(90deg, #00000061, #00000075)',
        padding: '10px 20px',
        border: '2px solid #6c6c6c',


    }

    return (
        <input {...props} style={{...styles, ...props.sx}} />
    );
}


