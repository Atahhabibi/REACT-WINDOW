import styled from "styled-components"
import { useAppContext } from "./context"
import SingleItem from "./SingleItem";

const CartContainer = () => {

    const {cart}=useAppContext();

    if(cart.length<1){
  
      return <Wrapper className="section-center">
            <h5 className="empty">Your cart is currently empty</h5>
      </Wrapper>
    }
  


  return <Wrapper className="section-center">
      {
        cart.map((item)=>{
            return <SingleItem key={item.id} {...item}/>
        })
      }

  </Wrapper>
}


const Wrapper=styled.div`


background-color: var(--primary-300);
margin-top:3rem;
padding:1rem;
border-radius:5px;
border-bottom-right-radius:0;
border-bottom-left-radius:0;

.empty{
  text-align: center;
}

@media screen and (min-width:800px) {

    padding:2rem;
    max-width:50rem;
    .empty{
        font-size:2rem;
    }
    
}
 

`

export default CartContainer;