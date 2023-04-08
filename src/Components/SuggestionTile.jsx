import React, {useEffect, useState} from 'react';
import {Box, Paper, Typography} from "@mui/material";

const topSectionStyles = {
    height: '50px',
    background: '#000000a3',
    width: '100%',

}

const bottomSectionStyles = {
    height: '50px',
    background: '#000000a3',
    width: '100%',
    marginTop: 'auto',
    color: 'white',
}

export default function SuggestionTile(props) {
    const {name, time, img} = props

    const containerStyles = {
        cursor: 'pointer',
        backgroundImage: 'url(https://picsum.photos/500)',
        backgroundColor: '#cccccc',
        backgroundSize: 'cover',
        aspectRatio: '1/1',
        color: 'white',
        padding: 0,
        display: 'flex',
        flexDirection: 'column'

    }

    return (
        <Paper sx={containerStyles}>
            <div style={topSectionStyles}>

            </div>

            <Box style={bottomSectionStyles}>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    {time}
                </Typography>
            </Box>
        </Paper>
    );
}

