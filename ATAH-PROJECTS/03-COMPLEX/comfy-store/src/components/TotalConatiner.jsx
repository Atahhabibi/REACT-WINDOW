import styled from "styled-components"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
import formatPrice from "../utils/formatPrice";
import { useUserContext } from "../context/userContext";

const TotalContainer = () => {

  const {totalOrder,clearCart}=useCartContext();
  const {loginWithRedirect,user}=useUserContext();

  return <Wrapper>
      <div className="clear-btn-container">
         <button className="btn-primary"><Link to='/products' className="Link-btn">continue shopping</Link></button>
         <button className="btn-primary clear-btn" onClick={clearCart}>clear cart</button>
      </div>

      <div className="total-info">
        <h5 className="subtotal"><span >Subtotal</span> <span>{formatPrice(totalOrder)}</span></h5>
        <h5 className="shipping"><span >shipping fee</span><span>${5.45}</span></h5>
        <hr />
        <h4 className="order-total"><span>order total</span><span>{formatPrice(totalOrder+ 534)}</span></h4>
     

       {
         user? <button className="btn-primary checkout-btn"><Link to='/checkout' className="Link-btn">proceed to checkout</Link></button>:<button onClick={loginWithRedirect} className="btn-primary checkout-btn">Login</button>
       }

       
 
      </div>

  </Wrapper>
}


const Wrapper=styled.div`



.clear-btn-container{


  .btn-primary{
    margin: 0;
    font-size:1rem;
  }

  display: flex;
  justify-content: space-between;
  column-gap:0.5rem;

}


.clear-btn{
  background:var(--primary-900);
  letter-spacing:1px;
  &:hover{
    background:var(--primary-300);
    color:var(--primary-900);
  }
}

.total-info{
  border: 2px solid var(--primary-300);
  padding:1rem;
  margin:2rem 0;
  max-width:30rem;

  h5,h4{
    display: flex;
    justify-content: space-between;
    margin-bottom:0.5rem;
    text-transform: capitalize;
    letter-spacing:1px;

  }
}

.subtotal{
  font-weight: bold;
}

.shipping{
  color: var(--grey-500);
}

.order-total{
  margin-top:1rem;
  font-weight: bold;
  margin-bottom:1rem;
}



.checkout-btn{
  text-transform:uppercase;
  font-size:1rem;
  margin: 0 auto;
  margin-top:2rem;
  
}

@media screen and (min-width:700px) {


  .btn-primary{
    font-size:1.3rem;
  }

  .total-info{
    margin-left:40%;
  }


}

@media screen and (min-width:1000px) {


  .total-info{
    margin-left:60%;
  }
    
}



`

export default TotalContainer;