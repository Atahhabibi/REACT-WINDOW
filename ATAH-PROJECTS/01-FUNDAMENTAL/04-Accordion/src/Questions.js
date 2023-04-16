import React, { useState } from 'react';

import styled from 'styled-components';
import Question from './Question';
const Questions = ({questions}) => {

  const[activeID,setActiveID]=useState(null);

  
  const toggleQuestion=(id)=>{
    if(id===activeID){
      setActiveID(null)
    }else{
      setActiveID(id);
    }
  }


  return <Wrapper>

    <div className="section-center">

      <h1>Questions</h1>

      {
        questions.map((question)=>{
          return <Question {...question} key={question.id} toggleQuestion={toggleQuestion} activeID={activeID}/>
        })
      }

    </div>




  </Wrapper>;
};



const Wrapper=styled.section`

h1{
  color:var(--primary-500);
  font-weight:600;
  margin:2rem 0;
  letter-spacing:8px;
  font-size:2.4rem;
}


display: grid;
place-items: center;
height: 100vh;
background:var(--primary-100);



.section-center{
  background:white;
  padding: 1rem;
  border-radius:4px;
  box-shadow:var(--shadow-4);
}


@media screen and (min-width:600px){
  
  .section-center{
    max-width:50rem;
  }

  h1{
    font-size:3rem;
  }


  
}



`







export default Questions;
