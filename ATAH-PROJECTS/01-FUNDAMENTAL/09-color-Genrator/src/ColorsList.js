import React from 'react'
import styled from 'styled-components'
import Color from './Color'

const ColorsList = ({newArray}) => {


  return <Wrapper>

      {
          newArray.map((item,index)=>{
              return <Color {...item} key={index} index={index}/>
          })
      }



  </Wrapper>
}


const Wrapper=styled.div`

margin-top:3rem;

display: grid;
grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));



`




export default ColorsList
