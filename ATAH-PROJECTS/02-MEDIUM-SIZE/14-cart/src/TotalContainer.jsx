import styled from "styled-components"
import { useAppContext } from "./context";

const TotalContainer = () => {

  const {cart,clearCart,total} =useAppContext();



  return <Wrapper className="section-center" style={cart.length<1?{display:'none'}:{display:'block'}}>

     <div className="info-container">
        <h5 className="total">Total</h5>
        <h5 className="final-pay">${total}</h5>
     </div>

     <button className="default-btn clear-btn" onClick={clearCart}>Clear cart</button>
      
      
  </Wrapper>
}


const Wrapper=styled.div`

text-align: center;
background-color:var(--primary-200);
border-radius:5px;
border-top-right-radius:0;
border-top-left-radius:0;
padding: 1rem;

.info-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:1rem;
}

.total{
  font-size:1.7rem;
}

.final-pay{
  background:#cd6565;
  color: white;
  padding:0.5rem;
  border-radius:5px;
}



@media screen and (min-width:800px) {

  max-width:50rem;
  padding:1.5rem;

  .clear-btn{
    font-size: 1.5rem;
    letter-spacing: 3px;

    &:hover{
      background:#aa2c69;
    }

  }

  .total{
    font-size: 2rem;
    letter-spacing:3px;
  }

}




`

export default TotalContainer;