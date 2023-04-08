import {atom} from "recoil";

export const MealIdeaStructure = atom({
    key: 'MealIdeaStructure',
    default: {
        recipes: [
            {
                name: 'spaghetti and meatballs with garlic bread',
                time: '45min',
                imageDescription: 'detailed text description of an image of this dish'
            },
            {
                name: 'steak and mashed potatoes and green beans',
                time: '1hr',
                imageDescription: 'detailed description of an image of this dish'
            }
        ],
        ingredients: [
            'most important ingredient',
            'another individual ingredient',
            'least important ingredient'
        ]
    }
});
