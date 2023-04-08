import React, {useEffect, useState} from 'react';
import SuggestionTile from "./SuggestionTile.jsx";
import {MealsLoading} from "../State/atoms/MealsLoading.js";
import {useRecoilValue} from "recoil";
import {MealIdeas} from "../State/selectors/MealIdeas.js";

const containerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    padding: 'var(--general-spacing)'
}

export default function SuggestionsDisplay(props) {
    const {} = props
    const loading = useRecoilValue(MealsLoading)
    const suggestions = useRecoilValue(MealIdeas)

    return (
        <div style={containerStyles}>
            {loading ? "Loading..." :
                suggestions && suggestions.map(response => {
                    return <SuggestionTile key={response.name} name={response.name} time={response.time}/>
                })
            }

        </div>
    );
}

