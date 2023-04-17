import styled from "styled-components"
import {RiArrowUpSLine,RiArrowDownSLine} from 'react-icons/ri'
import { useAppContext } from "./context"

const SingleItem = ({id,title,price,img,amount}) => {

  const {removeItem,changeAmount}=useAppContext();

  return <Wrapper>


    <div className="info-container">

    <img src={img} alt={title} />

    <div>
      <h5 className="name">{title}</h5>
      <h5 className="price">${price}</h5>
      <button className="default-btn delete-btn" onClick={()=>removeItem(id)}>remove</button>
    </div>

    </div>

    <div className="number-container">
      <button className="increase-btn" onClick={()=>{changeAmount(id,'inc')}}><RiArrowUpSLine className="icon"/></button>
       <span className="amount">{amount}</span>
      <button className="decrease-btn" onClick={()=>{changeAmount(id,'dec')}}><RiArrowDownSLine className="icon"/></button>
    </div>



    

  </Wrapper>
}


const Wrapper=styled.article`

display: flex;
justify-content: space-between;
align-items: center;
margin-bottom:3rem;



.info-container{
  display: flex;
  align-items: center;
  margin-left:-1rem;

}

img{
  width:7rem;
}

.name,.price{
  font-size:1rem;
  font-weight: bold;
  margin-bottom:0.5rem;
}



.number-container{
  display: grid;
  justify-items: center;

  button{
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  .icon{
    font-size:2rem;
    color: var(--primary-1100);
    font-weight: bold;
  }

  span{
    font-size:1.5rem;
    color:black;
  }
}

@media screen and (min-width:800px) {

  margin-bottom:2rem;

  img{
    width:9rem;
  }

  .name,.price{
   font-size:1.1rem;
   margin-bottom:0.5rem;
  }

  .delete-btn{
    font-size:1.2rem;
    background:#d3788a;
  }



}

    

`

export default SingleItem;