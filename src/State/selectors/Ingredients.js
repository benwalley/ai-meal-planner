import {selector} from "recoil";
import {MealSuggestions} from "../atoms/MealSuggestions.js";


export const Ingredients = selector({
    key: 'Ingredients',
    get: ({get}) => {
        const suggestions = get(MealSuggestions);
        return suggestions?.ingredients || [];
    },
});
