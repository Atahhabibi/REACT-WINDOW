import React from 'react'
import styled from 'styled-components'
import rgbToHex from './rgbToHex';

const Color = (prop) => {

    let color=prop.rgb;
    let RGBcolor=prop.rgb;
    let weight=prop.weight;
    const index=prop.index;
    console.log(index);


    color=`rgb(${color[0]},${color[1]},${color[2]})`


  return <Wrapper style={{background:color}} >

      <h5 className="percent" style={{color:`${index>8?'white':"black"}`}}>{weight}%</h5>
      <h5 className="color-rgb" style={{color:`${index>8?'white':"black"}`}}>{rgbToHex(RGBcolor[0],RGBcolor[1],RGBcolor[2])}</h5>



  </Wrapper>
}


const Wrapper=styled.div`

padding: 1rem 2rem;

height:12rem;

h5{
    font-size:1rem;
    margin-top:0.5rem;
}


@media screen and (min-width:600px) {

 height:18rem;

 h5{
     font-size:1.1rem;
 }

    
}








`




export default Color
