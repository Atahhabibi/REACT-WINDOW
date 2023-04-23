import styled from "styled-components"
import { FaCheck } from "react-icons/fa"
import { useCartContext } from "../context/cartContext"



const Colors = ({colors}) => {

    const {handleMainColor,colorIndex}=useCartContext();


  return <Wrapper>

    <h5 className="title">Colors: </h5>

    <div className="colors-container">
      {
          colors.map((item,index)=>{
              return <button key={index} className={colorIndex===index?'color-btne active-color':'color-btne'} style={{background:item}} onClick={()=>handleMainColor(index)}><FaCheck/></button>
          })
      }

    </div>


  </Wrapper>
}


const Wrapper=styled.div`
display: grid;
grid-template-columns:50% 50%;
align-items: center;
margin:1.5rem 0;



.title{
    font-weight: bold;
}

.color-btne{
    height:1.5rem;
    width:1.5rem;
    border-radius:50%;
    border: transparent;
    margin-right:0.8rem;
    cursor: pointer;
    opacity:0.6;

    svg{
        visibility: hidden;
    }

}

svg{
    color: white;
    font-size:1.1rem;
}

.active-color{
    opacity:1;
    svg{
        visibility: visible;
    }
}

  

`

export default Colors;