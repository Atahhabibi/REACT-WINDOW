import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const Categories = ({categoriesItems,handleMenu,activeBTN}) => {

  return <Wrapper>

    {
      categoriesItems.map((item)=>{
        return <button type='button' className={item===activeBTN?'active':null} key={nanoid()} onClick={()=>handleMenu(item)} >{item}</button>
      })
    }




  </Wrapper>;
};

const Wrapper=styled.div`


text-align: center;
margin-top:1rem;



button{
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  border-radius:4px;
  border: transparent;
  margin:0 6px;
  margin-bottom:0.5rem;
  background-color:var(--primary-200);
  box-shadow:var(--shadow-2);
  cursor: pointer;
  transition: var(--transition);

  &:hover{
    background: var(--primary-600);
    color: white;
  }

}

.active{
   background: var(--primary-600);
   color: white;
  }




@media screen and (min-width:600px){


  margin-top:2rem;

  button{
    font-size:1.1rem;
    letter-spacing:2px;
  }
  
}



`

export default Categories;
