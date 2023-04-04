import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";

export default function CustomInput(props) {
    const styles = {
        borderRadius: '50px'
    }

    return (
        <TextField {...props} sx={{...styles, ...props.sx}} />
    );
}


