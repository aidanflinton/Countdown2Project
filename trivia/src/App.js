import React from "react"
import { useState , useEffect} from "react"
import './App.css';
import Questions from "./Questions.js"

function App() {
    const [trivia, setTrivia] = useState(null);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10')
            .then(response => response.json())
            .then(data => setTrivia(data.results))
            .catch(error => console.log(error))
    }, []);

    console.log(trivia);

    return (
        <div className = "App">
            {trivia && trivia.map((item) => <Questions qstn={item.question} info={item}/>)}
        </div>
    );
}

export default App;

//{trivia.map((item) => <Questions question={item} info={item[trivia]}/>)}