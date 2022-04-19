import React from "react"
import { useState , useEffect} from "react";
import Button from '@mui/material/Button';

const Answers = (props) => {
  const ansArray = [];
  for(let i = 0; i < props.wrongAns.length; i++){
    ansArray[i] = props.wrongAns[i];
  }

  let swapIndex = parseInt((props.wrongAns.length + 1) * Math.random());
  if(swapIndex !== props.wrongAns.length){
      ansArray[props.wrongAns.length] =  ansArray[swapIndex];
  }
  ansArray[swapIndex] = props.rightAns;  

  const [style, setStyle] = useState("primary");
  
  let changeStyle = () => {
    setStyle("success");
    /*
    if(value === props.rightAns)
      setStyle("success");
    else{
      setStyle("error");
    }
    */
  };

  return (
    <>
      <div>
        {ansArray.map((item) => {
          return(
          <Button variant="contained" color={style} onClick={changeStyle}> 
            {item} 
          </Button>)
        })}
      </div>
    </>
  )
}

export default Answers;