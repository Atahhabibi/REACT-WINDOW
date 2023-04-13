import React from 'react'
import styled from 'styled-components'

const Companies = ({companies,handle,activeBTN}) => {
   
  return ( <Wrapper>

    {
        companies.map((item)=>{
            return <button key={item} className={activeBTN===item?'active':null} onClick={()=>handle(item)}>{item}</button>
        })
    }

     







    </Wrapper>
  )
}



const Wrapper=styled.div`


text-align: center;

button{
    padding: 0.2rem 0.3rem;
    background-color: transparent;
    border: transparent;
    color:var(--primary-900);
    margin: 0 0.3rem;
    transition:var(--transition);
    font-family: 'Times New Roman', Times, serif;
    cursor: pointer;
    font-size:1rem;

    &:hover{
        border-bottom:2px solid #11B894;
        color:#11B894;
    }
    
}

.active{
    border-bottom:2px solid #11B894;
    color:#11B894;
}


@media screen and (min-width:900px){

 display: flex;
 flex-direction:column;
 justify-items: center;
 row-gap:1rem;
 margin-right:3rem;
 padding-top:4rem;

 button{


    padding:0.2rem 1.5rem;
     &:hover{
        border-left:2px solid #11B894;
        border-bottom: none;
        color:#11B894;
    }
 }

.active{
    border-left:2px solid #11B894;
    border-bottom: none;
    color:#11B894;
}


  
}

@media screen and (min-width:600px){

 button{
    font-size:1.2rem;
 }
  
}




`

export default Companies