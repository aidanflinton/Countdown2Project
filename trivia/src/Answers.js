import React from "react"
import { useState , useEffect} from "react"

const Answers = (props) => {
  return (
    <>
      <p>{props.rightAns + "," + props.wrongAns}</p>
    </>
  )
}

export default Answers;