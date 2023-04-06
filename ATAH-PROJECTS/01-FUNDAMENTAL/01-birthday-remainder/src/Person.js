import React from 'react'
import styled from 'styled-components'

const Person = ({name,image,age}) => {
    
  return <Wrapper>

   <img src={image} alt={name}  />

   <div className="info-container">
    <h4 className='name'>{name}</h4>
    <h4 className='age'>{age} years</h4>
   </div>


  </Wrapper>
}


const Wrapper=styled.article`

display: grid;
grid-template-columns:auto 1fr;
align-items: center;
column-gap:1rem;
padding: 0.5rem 2rem;

img{
  width:6rem;
  height:6rem;
  object-fit: cover;
  border-radius:50%;
}

.age{
  color:grey;
  font-size:1rem;
}

.name{
  font-weight: bold;
}



`




export default Person
