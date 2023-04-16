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