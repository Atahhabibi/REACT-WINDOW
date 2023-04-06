import React from 'react'
import styled from 'styled-components'
import Person from './Person'

const List = ({data}) => {

 return <Wrapper>

         {
          data.map((item)=>{
            return <Person key={item.id} {...item}/>
          })
        }


 </Wrapper>
}



const Wrapper=styled.div`








`





export default List
