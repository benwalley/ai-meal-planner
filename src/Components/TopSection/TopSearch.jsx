import React, {useEffect, useState} from 'react';
import CustomInput from "../CustomInput.jsx";
import MicIcon from '@mui/icons-material/Mic';
import {IconButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {MealSuggestions} from "../../State/atoms/MealSuggestions.js";
import {MealsLoading} from "../../State/atoms/MealsLoading.js";
import {GeneralPromptInput} from "../../State/atoms/GeneralPromptInput.js";
import {GenerateMealListPrompt} from "../../State/selectors/GenerateMealListPrompt.js";

const API_URL = 'https://3v4k6po69h.execute-api.us-east-1.amazonaws.com/chatgpt_handler';

const formStyle = {
    position: 'relative',
}

const buttonStyles = {
    background: '#00000099',
    position: 'absolute',
    top: 0,
    right: 0,
}

export default function TopSearch(props) {
    const {updateMealList} = props
    const [inputValue, setInputValue] = useRecoilState(GeneralPromptInput)

    // useEffect(() => {
    //     updateMealList();
    // }, []);

    function submitText() {
        updateMealList();
    }

    function startVoice() {

    }

    function handleSubmit(e) {
        e.preventDefault();
        if(inputValue.length > 0) {
            submitText();
        } else {
            startVoice();
        }
    }

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <CustomInput value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)}
                         sx={{width: '100%'}}
                         placeholder={'Say what you’d like to change about these suggestions'}/>
            <IconButton sx={buttonStyles} onClick={handleSubmit} color="white" aria-label="Voice Search">
                {inputValue.length > 0 ? <SendIcon/> : <MicIcon /> }
            </IconButton>
        </form>
    );
}

