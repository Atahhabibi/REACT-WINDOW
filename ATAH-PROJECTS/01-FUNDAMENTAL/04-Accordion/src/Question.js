import React, { useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({id,title,info,toggleQuestion,activeID}) => {



 

 let isActive=false;
 
 if(activeID===id){
   isActive=true;
 }


 const handleInfo=()=>{
  toggleQuestion(id)
 
 }




  return ( <Wrapper>

    <div className="info-title">
        <h5 className="title">{title}</h5>
        <button className='question-btn' onClick={handleInfo}>{isActive?<AiOutlineMinus className='minus-btn'/>:<AiOutlinePlus className='plus-btn'/>}</button>
    </div>

    {
        isActive && <p className="info">{info}</p>
    }

    








    </Wrapper>
  )
}

const Wrapper=styled.article`
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

margin-bottom:1rem;
box-shadow:var(--shadow-4);
border: 2px solid var(--grey-200);
padding:1rem;



.info-title{
    display: flex;
    justify-content:space-between;
    align-items: center;


    .question-btn{
        border: transparent;
        background:var(--primary-900);
        padding:0.1rem;
        border-radius:50%;
        display: grid;
        place-items: center;
        padding:0.5rem;
        cursor: pointer;
    }

    .plus-btn,.minus-btn{
        font-size:0.9rem;
        color: white;
    }


   
}

.title{
    font-size:1rem;
    font-weight: 600;
}

.info{
    font-size:0.8rem;
    padding-top:1rem;
    color:var(--grey-500);
     padding-bottom:1rem;
}



@media screen and (min-width:600px){

    .title{
        font-size:1.3rem;
    }
    .info{
        font-size:1.1rem;
        text-align:justify;
        padding-right:2.5rem;
        padding-bottom:1rem;
    }
  
}



`

export default Question