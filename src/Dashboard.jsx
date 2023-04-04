
import './App.css'
import {useState} from "react";
import {Configuration, OpenAIApi} from 'openai';
import {generateMealListPrompt} from "./helpers/generateMealListPrompt.js";
import Calendar from "./Components/Calendar/Calendar.jsx";
import CustomInput from "./Components/CustomInput";

const API_URL = 'https://3v4k6po69h.execute-api.us-east-1.amazonaws.com/chatgpt_handler';

function Dashboard() {
    const [responses, setResponses] = useState([])
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');

    async function getMealList() {
        const query = generateMealListPrompt(responses, input);
        // make API request.
        setLoading(true)
        let response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({messages: query})
        });
        setLoading(false);
        const responseData = await response.json();
        const content = responseData?.choices?.[0]?.message?.content
        const start = content.indexOf('[');
        const end = content.lastIndexOf(']');
        if (start > -1 && end > -1 && end > start) {
            const result = content.substring(start, end + 1); // Include the character at the end index
            setResponses(JSON.parse(result)); // "[sample] string with [multiple] [sets] of [brackets]"
        }
    }


  return (
    <div className="App">
        <Calendar/>
        <CustomInput label={'test'} type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
        {loading && "loading..."}
        {responses.map(response => {
            return <div>{response.name}</div>
        })}
        <button onClick={getMealList}>get</button>
    </div>
  )
}

export default Dashboard
