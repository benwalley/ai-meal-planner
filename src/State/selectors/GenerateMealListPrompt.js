import {selector} from "recoil";
import {MealSuggestions} from "../atoms/MealSuggestions.js";
import {RecentGeneralRequests} from "../atoms/RecentGeneralRequests.js";
import {SelectedMealTypes} from "../atoms/SelectedMealTypes.js";
import {MealIdeaStructure} from "../atoms/MealIdeaStructure.js";
import {GeneralPromptInput} from "../atoms/GeneralPromptInput.js";
import {GenerateListSystemPrompt} from "../atoms/GenerateListSystemPrompt.js";
import {SelectedMaxTime} from "../atoms/SelectedMaxTime.js";
import {LikedIngredients} from "../atoms/LikedIngredients.js";
import {DislikedIngredients} from "../atoms/DislikedIngredients.js";

export const GenerateMealListPrompt = selector({
    key: 'GenerateMealListPrompt',
    get: ({get}) => {
        const currentSuggestions = get(MealSuggestions);
        const recent = get(RecentGeneralRequests);
        const mealTypes = get(SelectedMealTypes);
        const systemPrompt = get(GenerateListSystemPrompt);
        const structureExample = get(MealIdeaStructure);
        const currentPrompt = get(GeneralPromptInput);
        const maxTime = get(SelectedMaxTime);
        const liked = get(LikedIngredients);
        const disliked = get(DislikedIngredients);

        // Build prompt
        const response = [
            {"role": "system", content: systemPrompt}
        ]
        console.log(maxTime)
        if(mealTypes.length > 0) {
            response.push({
                role: 'system',
                content: `The recipes should be a mix of the following meal types: ${mealTypes.join(', ')} ` +
                    `and each recipe should take less than ${maxTime}. Here are some ingredients the user likes. ` +
                    `${liked.join(', ')}. Here are the ingredients ` +
                    `the user does not like, and you should avoid. ${disliked.join(', ')}.`
            });
        }
        for(const prompt of recent) {
            response.push({
                role: 'user',
                content: prompt
            });
        }

        response.push({
            role: 'user',
            content: `Generate a list of 10 meal ideas. The JSON format should be ${JSON.stringify(structureExample)} remember, you will respond with ONLY the json content in the structure provided.`
        })
        if(currentSuggestions && currentSuggestions.length > 0) {
            response.push({
                role: 'assistant',
                content: JSON.stringify(currentSuggestions)
            });
            response.push({
                role: 'user',
                content: currentPrompt
            });
            response.push({
                role: 'user',
                content: currentPrompt
            });

        }
        return response;
    },
});
