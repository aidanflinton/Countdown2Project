import React from "react"
import { useState , useEffect} from "react"
import './App.css';
import Questions from "./Questions.js"

function App() {
  const [trivia, setTrivia] = useState(null)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(data => setTrivia(data.results))
  },[]);

  return (
    <div className="App">
      {trivia.map((item) => <Questions ask={item}/>)}
    </div>
  );
}

export default App;