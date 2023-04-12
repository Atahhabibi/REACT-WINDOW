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
:root {
  /* colors */
  --primary-100: #cffafe;
  --primary-200: #a5f3fc;
  --primary-300: #67e8f9;
  --primary-400: #22d3ee;
  --primary-500: #06b6d4;
  --primary-600: #0891b2;
  --primary-700: #0e7490;
  --primary-800: #155e75;
  --primary-900: #164e63;

  /* grey */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;
  /* rest of the colors */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;

  --small-text: 0.875rem;
  --extra-small-text: 0.7em;
  /* rest of the vars */
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 600px;

  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

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
