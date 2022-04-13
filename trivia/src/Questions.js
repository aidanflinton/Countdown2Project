import React from "react"
import { useState , useEffect} from "react"
import Answers from "./Answers.js"

const Questions = (props) => {
  return (
    <>
      <h4>{props.qstn}</h4>
      {<Answers rightAns={props.info.correct_answer} wrongAns={props.info.incorrect_answers}/>}
    </>
  )
}

export default Questions;

//<h1>{props.questions}</h1>