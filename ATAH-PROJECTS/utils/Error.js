import React from 'react'
import styled from 'styled-components'
import errorImage from './images/page-not-found.svg'

const Error = () => {

  return <Wrapper>


     <img src={errorImage} alt="error" className='img' />
     <h2 className='error-title'>There was an Error...</h2>





  </Wrapper>
}



const Wrapper=styled.div`

text-align: center;


.img{
    width:6rem;
    margin: 0 auto;
}

h2{
    display: inline;
    font-size:1rem;
    font-weight: bold;
    font-size:1.4rem;
    letter-spacing:2px;

}



`

export default Error
