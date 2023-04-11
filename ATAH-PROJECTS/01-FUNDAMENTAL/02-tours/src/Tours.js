import React from 'react';
import Tour from './Tour';
import styled from 'styled-components';
const Tours = ({tours,handleTours}) => {

  return <Wrapper>

    {
      tours.map((item)=>{
        return <Tour key={item.id} {...item} handleTours={handleTours}/>
      })
    }

  </Wrapper>;
};


const Wrapper=styled.div`


 @media screen and (min-width:900px) {

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:2rem;
  
  
 }

 @media screen and (min-width:1100px) {

  grid-template-columns: 1fr 1fr 1fr;

  
 }






`





export default Tours;
