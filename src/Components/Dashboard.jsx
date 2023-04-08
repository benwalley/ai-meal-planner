
import '../App.css'
import Calendar from "./Calendar/Calendar.jsx";
import TopSection from "./TopSection/TopSection.jsx";
import SuggestionsDisplay from "./SuggestionsDisplay.jsx";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {MealsLoading} from "../State/atoms/MealsLoading.js";
import {MealSuggestions} from "../State/atoms/MealSuggestions.js";
import RightSidebar from "./RightSidebar/RightSidebar.jsx";
import {GenerateMealListPrompt} from "../State/selectors/GenerateMealListPrompt.js";

const API_URL = 'https://3v4k6po69h.execute-api.us-east-1.amazonaws.com/chatgpt_handler';

const containerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
}

function Dashboard() {
    const [responses, setResponses] = useRecoilState(MealSuggestions)
    const [loading, setLoading] = useRecoilState(MealsLoading);
    const prompt = useRecoilValue(GenerateMealListPrompt)

    async function updateMealList() {
        // make API request.
        setLoading(true)
        let response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({messages: prompt})
        });
        setLoading(false);
        if(response.status !== 200) {
            console.log("error");
            //TODO: handle error
            return;
        }
        const responseData = await response.json();
        const content = responseData?.choices?.[0]?.message?.content
        const start = content.indexOf('{');
        const end = content.lastIndexOf('}');
        if (start > -1 && end > -1 && end > start) {
            const result = content.substring(start, end + 1);
            setResponses(JSON.parse(result));
        }
    }



  return (
    <div className="App" style={containerStyles}>
        <Calendar/>
        <TopSection updateMealList={updateMealList}/>
        <SuggestionsDisplay/>
        <RightSidebar/>
    </div>
  )
}

export default Dashboard
