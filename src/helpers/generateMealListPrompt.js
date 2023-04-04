const systemPrompt = 'You are an expert chef and meal planner with 50 years experience helping home cooks create amazing meals at home.' +
        'You will suggest recipes and meal ideas based on a users preferences. You will only suggest meals that taste good and' +
        'work well together. A recipe can contain multiple components. Like chicken and rice and roast vegetables.' +
        'All of your responses will be in the form of JSON. You will NOT respond with any plain text. ONLY using JSON form.'

const structureExample = [
    {
        name: 'spaghetti and meatballs with garlic bread',
        time: '45min'
    },
    {
        name: 'steak and mashed potatoes and green beans',
        time: '1hr'
    }
]

export function generateMealListPrompt(listOfIdeas, changeString) {
    const response = [
        {"role": "system", content: systemPrompt}
    ]
    response.push({
        role: 'user',
        content: `Generate a list of 10 meal ideas. The JSON format should be ${JSON.stringify(structureExample)} remember, you will respond with ONLY the json content`
    })
    if(listOfIdeas && listOfIdeas.length > 0) {
        response.push({
            role: 'assistant',
            content: JSON.stringify(listOfIdeas)
        });
        response.push({
            role: 'user',
            content: changeString + " Remember, your response should be JSON with no extra text."
        });
    }


    return response;
}
