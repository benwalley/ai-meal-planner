import {selector} from "recoil";
import {MealSuggestions} from "../atoms/MealSuggestions.js";


export const MealIdeas = selector({
    key: 'MealIdeas',
    get: ({get}) => {
        const suggestions = get(MealSuggestions);
        return suggestions?.recipes || [];
    },
});
