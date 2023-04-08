import React, {useEffect, useState} from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import {IconButton} from "@mui/material";

export default function Settings(props) {
    const {} = props
    return (
        <div>
            <IconButton color="black" aria-label="Settings" size={'large'}>
                <SettingsIcon />
            </IconButton>
        </div>
    );
}

