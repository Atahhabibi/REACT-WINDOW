import React from 'react'
import styled from 'styled-components'
import {HiChevronDoubleRight} from 'react-icons/hi'
import { nanoid } from 'nanoid'


const Duties = ({duties}) => {

  return <Wrapper>
    {
      duties.map((item)=>{
        return <div key={nanoid()} className='duties-container'><HiChevronDoubleRight className='icon'></HiChevronDoubleRight><span className='text'>{item}</span></div>
      })
    }




  </Wrapper>
}

const Wrapper=styled.div`


margin-top:2rem;

.duties-container{
   display: grid;
   grid-template-columns:auto 1fr;
   align-items: center;
}

.text{
    margin-bottom:2rem;
    font-size:1rem;
}

.icon{
    font-size:1.1rem;
    margin-right:1rem;
    color: #504acc;
}


@media screen and (min-width:600px){

    .icon{
        font-size:1.3rem;
    }

    .text{
        font-size:1.2rem;
    }
  
}






`

export default Duties