import styled from "styled-components"
import { useAppContext } from "./context"
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {

  const {amount}=useAppContext();

  return <Wrapper >


    <div className="nav-center section-center">

       <h3 className="cart-title">Your Cart</h3>
       <button className="cart-btn"><FaShoppingCart/><span className="num-items">{amount}</span></button>

    </div>

     
  </Wrapper>
}


const Wrapper=styled.div`

padding:1rem 2rem;
padding-left:1rem;
background:var(--primary-100);
box-shadow: var(--shadow-3);

.nav-center{
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width:50rem;
}

.cart-title{
  color: var(--primary-900);
}

.cart-btn{
  background-color: transparent;
  border: transparent;
  font-size:2.3rem;
  position: relative;
  cursor: pointer;
}

.num-items{
  position: absolute;
  top:-30%;
  left:60%;
  font-size:1.3rem;
  height:2rem;
  width:2rem;
  background-color:var(--primary-700);
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: white;
}

@media screen and (min-width:800px) {

  .cart-title{
    font-size:2.5rem;
  }
    
}



`

export default Navbar;