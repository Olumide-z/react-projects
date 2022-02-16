import React, { useState } from 'react';
import data from './data';
import './styles.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = () => {
  const [questions, setQuestions] = useState(data);
  const [showAnswer, setShowAnswer] = useState(false);

  // const handleClick = () => {
  //   setShowAnswer(!showAnswer)
  // }

  return (
    <div className='container'>
      <div className='contentWrapper'>
        <h1>Questions And Answers About Login</h1>
        <div className='content'>
          {
            questions.map((question) => {
              const {id, title, info} = question;
              return(
                <div key={id} className='q-and-a'>
                  <div className='questions'>
                    <h4>{title}</h4>
                    <button onClick={() => setShowAnswer(!showAnswer)}>
                      {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                    </button> 
                  </div>
                  {showAnswer && <p>{info}</p>}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default Question;
