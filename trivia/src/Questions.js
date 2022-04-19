import React from "react"
//import { useState , useEffect} from "react"
import Answers from "./Answers.js"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Questions = (props) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.qstn}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {<Answers rightAns={props.info.correct_answer} wrongAns={props.info.incorrect_answers}/>}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Questions;

//<h1>{props.questions}</h1>
//<h4>{props.qstn}</h4>
      //{<Answers rightAns={props.info.correct_answer} wrongAns={props.info.incorrect_answers}/>}