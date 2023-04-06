import React from 'react'
import { useState } from 'react';
import data from './data';
import styled from 'styled-components';
import List from './List';


const App = () => {

  const[people,setPeople]=useState(data);
  
  return<>
  
  
  <Wrapper>

    <div className="section-center">

        <div className="main-container">
           <h1>{`${people.length<1?'No':people.length} birthdays Today`}</h1>
           <List data={people}/>
           <button type='button' className='btn btn-block' onClick={()=>{ people.length<1?setPeople(data):setPeople([])}}>{people.length<1?'reset birthdays':'clear all'}</button>
        </div>

    </div>


  </Wrapper>
  
  
  </> 
  



}
export default App;



const Wrapper=styled.div`


width: 100vw;
height: 100vh;
display: grid;
place-items: center;



.main-container{
    background:white;
    padding:0 0.5rem;

    h1{
        font-size:2rem;
        color:#3754b1;
        padding:1rem;
    }

    border-radius: 10px;

    button{
      text-transform: uppercase;
      padding:0.5rem 0;
      margin-bottom:1rem;
      background:violet;
      color: white;
      font-weight: bold;
      letter-spacing:var(--leterSpacing);
      border-radius:10px;
      border:none;
      transition: var(--transititon);
      cursor: pointer;
      margin-top:1rem;
      &:hover{
        color: black;

      }
     
    }
    
}


@media screen and (min-width:800px){

  .main-container{
    max-width:40rem;
    margin: 0 auto;
  }
  
}








`
