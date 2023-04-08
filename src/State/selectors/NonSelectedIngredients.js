import {selector} from "recoil";
import {MealSuggestions} from "../atoms/MealSuggestions.js";
import {Ingredients} from "./Ingredients.js";
import {LikedIngredients} from "../atoms/LikedIngredients.js";
import {DislikedIngredients} from "../atoms/DislikedIngredients.js";


export const NonSelectedIngredients = selector({
    key: 'NonSelectedIngredients',
    get: ({get}) => {
        const ingredients = get(Ingredients);
        const liked = get(LikedIngredients)
        const disliked = get(DislikedIngredients);
        return ingredients.filter(ingredient => {
            return (liked.indexOf(ingredient.toLowerCase()) === -1) && (disliked.indexOf(ingredient.toLowerCase()) === -1);
        })
    },
});
