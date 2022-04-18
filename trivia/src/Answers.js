import React from "react"
import { useState , useEffect} from "react"

const Answers = (props) => {
  const ansArray = [];
  for(let i = 0; i < props.wrongAns.length; i++){
    ansArray[i] = props.wrongAns[i];
  }

  let swapIndex = parseInt((props.wrongAns.length) * Math.random());
  if(swapIndex !== props.wrongAns.length){
      ansArray[props.wrongAns.length] =  ansArray[swapIndex];
  }
  ansArray[swapIndex] = props.rightAns;  

  return (
    <>
      <div>
        {ansArray.map((item) => {
          return <button>{item}</button>
        })}
      </div>
    </>
  )
}

export default Answers;