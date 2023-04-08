import React, {useEffect, useState} from 'react';
import CustomInput from "../CustomInput.jsx";
import TopSearch from "./TopSearch.jsx";
import Settings from "./Settings.jsx";
import TopToolbar from "./TopToolbar.jsx";
import CachedIcon from '@mui/icons-material/Cached';
import {IconButton} from "@mui/material";

const topSectionStyles = {
    padding: 'var(--general-spacing)',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gridColumn: '1 / -1',
}

const refreshButtonStyles = {

}

export default function TopSection(props) {
    const {updateMealList} = props

    function handleRefetch() {
        updateMealList()
    }
    return (
        <div style={topSectionStyles}>
            <Settings/>
            <TopSearch updateMealList={updateMealList}/>
            <IconButton sx={refreshButtonStyles} onClick={handleRefetch} color="black" aria-label="Update Meal Ideas">
                <CachedIcon/>
            </IconButton>
            <TopToolbar/>
        </div>
    );
}

