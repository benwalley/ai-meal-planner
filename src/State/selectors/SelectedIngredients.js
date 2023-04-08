import {selector} from "recoil";
import {MealSuggestions} from "../atoms/MealSuggestions.js";
import {Ingredients} from "./Ingredients.js";
import {LikedIngredients} from "../atoms/LikedIngredients.js";
import {DislikedIngredients} from "../atoms/DislikedIngredients.js";


export const SelectedIngredients = selector({
    key: 'SelectedIngredients',
    get: ({get}) => {
        const liked = get(LikedIngredients)
        const disliked = get(DislikedIngredients);
        return [...disliked, ...liked];
    },
});
