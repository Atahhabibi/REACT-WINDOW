import React, { useRef } from 'react'
import styled from 'styled-components'
import { useState,useEffect} from 'react'
import Values from 'values.js'
import ColorsList from './ColorsList'
import { toast } from 'react-toastify'

const Form = () => {
    
    const [color, setColor] = useState('#af4d31');
    const [ShadeArray, setShadeArray] = useState(new Values("#af4d31").all(10));

    



    const handleSubmit=(e)=>{
        e.preventDefault();

        if(color===""){
            toast.error('Please provie hex value')
        }else{

            setColor(color);
            let newValuesOfColors=new Values(color).all(10);
            setShadeArray(newValuesOfColors);
        }

        
      
    }

    let newArray=ShadeArray.map((item)=>{
        const {rgb,weight}=item;
        return {rgb,weight}
    })



 return <Wrapper>

     <form onSubmit={handleSubmit}>

         <label htmlFor="color">Color Generator: </label>
         <input type="color" name="color" id="color" value={color===''?'#f9b9a8':color} onChange={(e)=>setColor(e.target.value)} className='input-color'/>
         <input type="text" value={color}  placeholder='#f9b9a8'  onChange={(e)=>setColor(e.target.value)} className='input-text'/>
         <button type='submit'>submit</button>

     </form>

     <ColorsList newArray={newArray} />

     


 </Wrapper>
}

const Wrapper=styled.div`

padding:3rem 0;


form{
    align-items: center;
    display:grid;
    grid-template-columns:1fr auto 3fr auto;
    max-width:40rem;
    margin-left:2rem;
    margin: 0 auto;
}

label{
    font-size:1.3rem;
    grid-column:1/-1;
    text-align: center;

}

.input-text,button{

    font-size:1.1rem;
    border: none;
    padding: 0.6rem ;
}

.input-text{
    grid-column:-4/2;
    background: #e9f7f9;
}

.input-color{
    border: transparent;
    width:3.2rem;
    height:3.1rem;
    margin-left:0.4rem;
    cursor: pointer;
    border-radius: 4px;
    background: none;

}

button{
    color:black;
    text-transform: capitalize;
    cursor: pointer;
    border-radius: 4px;
    background:#c0c0c0 ;
}


@media screen and (min-width:700px) {

    form{
        display:flex;
        margin-left:2rem;
    }

    .input-text,button{

     font-size:1.4rem;
     padding: 0.9rem ;}

     label{
         font-size:1.8rem;
     }

     .input-color{
         height:4rem;
         width:4rem;
     }

    
    
}









`

export default Form
