import { nanoid } from 'nanoid';
import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from './globalContext'

const Form = () => {

    const {singleItem,handleSubmit,addItem}=useGlobalContext();

return<Wrapper>

      <form onSubmit={handleSubmit}>

          <input type="text" value={singleItem} onChange={(e)=>addItem(e.target.value)}/>
          <button type='submit' >Add item</button>

      </form>


  </Wrapper>
}

const Wrapper=styled.div`


margin-bottom:1rem;
input,button{
    border: transparent;
    padding:0.5rem;
    border-radius:3px;
}

input{
    width: 70%;
}

button{
    background-color: var(--primary-500);
    color: white;
}

@media screen and (min-width:600px) {

 input,button{
     padding:0.8rem 1.1rem;
     font-size:1.1rem;
 }
    
}


`


export default Form
