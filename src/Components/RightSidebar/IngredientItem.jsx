import React, {useEffect, useState} from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {IconButton} from "@mui/material";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {useRecoilState} from "recoil";
import {LikedIngredients} from "../../State/atoms/LikedIngredients.js";
import {DislikedIngredients} from "../../State/atoms/DislikedIngredients.js";
import {removeStringFromArray, toggleStringInArray} from "../../helpers/ArrayHelpers.js";

export default function IngredientItem(props) {
    const {name} = props
    const [liked, setLiked] = useRecoilState(LikedIngredients);
    const [disliked, setDisliked] = useRecoilState(DislikedIngredients);

    const backgroundColor = () => {
        if(isLiked()) return 'var(--theme-green)';
        if(isDisliked()) return 'var(--theme-red)';
        return 'white';
    }

    const containerStyles = {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: '10px',
        alignItems: 'center',
        background: backgroundColor(),
        borderRadius: '10px',
        boxShadow: 'var(--xs-shadow)',
        color: isLikedOrDisliked() ? 'white' : 'var(--text-color)',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
    }

    const checkButtonStyles = {
        background: 'var(--theme-green)',
        padding: '2px',
        width: '20px',
        height: '20px',
        'svg': {
            width: '15px',
            height: '15px'
        },
        ':hover': {
            background: 'var(--theme-green)'
        }
    }

    const xButtonStyles = {
        background: 'var(--theme-red)',
        padding: '2px',
        width: '20px',
        height: '20px',
        'svg': {
            width: '15px',
            height: '15px'
        },
        ':hover': {
            background: 'var(--theme-red)'
        }
    }

    function isLiked() {
        return liked.includes(name.toLowerCase());
    }

    function isDisliked() {
        return disliked.includes(name.toLowerCase());
    }

    function isLikedOrDisliked() {
        return isLiked() || isDisliked();
    }

    function handleNo() {
        const likedCopy = [...liked];
        const dislikedCopy = [...disliked];
        setDisliked(toggleStringInArray(dislikedCopy, name.toLowerCase()));
        setLiked(removeStringFromArray(likedCopy, name.toLowerCase()));
    }

    function handleYes() {
        const likedCopy = [...liked];
        const dislikedCopy = [...disliked];
        setLiked(toggleStringInArray(likedCopy, name.toLowerCase()));
        setDisliked(removeStringFromArray(dislikedCopy, name.toLowerCase()));
    }

    return (
        <div style={containerStyles}>
            <IconButton size={'small'} sx={xButtonStyles} onClick={handleNo} color="white" aria-label="I don't want to use this ingredient">
                <CloseRoundedIcon/>
            </IconButton>
            <span>{name}</span>
            <IconButton size={'small'} sx={checkButtonStyles} onClick={handleYes} color="white" aria-label="I want to use this ingredient">
                <CheckRoundedIcon/>
            </IconButton>
        </div>
    );
}

