import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {MealSuggestions} from "../../State/atoms/MealSuggestions.js";
import {MealsLoading} from "../../State/atoms/MealsLoading.js";
import IngredientItem from "./IngredientItem";
import {Ingredients} from "../../State/selectors/Ingredients.js";
import {SelectedIngredients} from "../../State/selectors/SelectedIngredients.js";
import {NonSelectedIngredients} from "../../State/selectors/NonSelectedIngredients.js";

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
}

export default function IngredientFilters(props) {
    const {} = props
    const ingredients = useRecoilValue(Ingredients)
    const loading = useRecoilValue(MealsLoading)
    const selected = useRecoilValue(SelectedIngredients);
    const nonSelected = useRecoilValue(NonSelectedIngredients);

    function list() {
        const fullList = [...selected, ...nonSelected];
        return fullList.map(ingredient => {
            return <IngredientItem name={ingredient} key={ingredient}/>
        })
    }

    return (
        <div style={containerStyle}>
            {loading ? 'Loading...' : list()}
        </div>
    );
}

