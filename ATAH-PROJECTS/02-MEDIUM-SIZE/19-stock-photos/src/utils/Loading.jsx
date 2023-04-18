import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return <Wrapper>
      <div className='loading'></div>
  </Wrapper>
}

const Wrapper=styled.div`
height: 100vh;
padding-top:4rem;

.loading{
    border: 5px solid grey;
    border-top-color:green;
    margin: 0 auto;
  
}


`


export default Loading