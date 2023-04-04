import {atom} from "recoil";

export const MealIdeaStructure = atom({
    key: 'MealIdeaStructure',
    default: [
        {
            name: 'spaghetti and meatballs with garlic bread',
            time: '45min'
        },
        {
            name: 'steak and mashed potatoes and green beans',
            time: '1hr'
        }
    ]
});
