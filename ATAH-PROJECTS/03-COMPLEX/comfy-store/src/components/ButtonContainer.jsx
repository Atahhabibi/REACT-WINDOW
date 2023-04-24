import styled from "styled-components"
import {FaShoppingCart,FaUserPlus,FaUserMinus} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useCartContext } from "../context/cartContext"
import { useProductsContext } from "../context/productsContext"
import { useUserContext } from "../context/userContext"



const ButtonContainer = () => {

  const {totalItems}=useCartContext();
  const {closeSidebar}=useProductsContext();
  const {loginWithRedirect,isError,isLoading,user,logout}=useUserContext();

  if(isLoading){
      return <Wrapper>
      </Wrapper>
  }

  if(isError){
      return <Wrapper>
          <Error/>
      </Wrapper>
  }

 
  return <Wrapper>

    <button className="cart-btn" onClick={closeSidebar}><Link to='/cart' className="cart-link">cart <FaShoppingCart/></Link> <span className="items">{totalItems}</span></button>

    {user? <button onClick={()=>logout({logoutParams:{returnTo:window.location.origin}})}>Logout <FaUserMinus/></button>: <button onClick={loginWithRedirect} >Login <FaUserPlus/></button>}
   
   

       
  </Wrapper>
}

const Wrapper=styled.div`


button{
    padding: 0.5rem 1rem;
    border: transparent;
    background-color: transparent;
    font-size:1.2rem;
    text-transform: capitalize;
    /* font-weight:600; */
    cursor: pointer;
}

.cart-link{
    color:black;
}

.cart-btn{
    position: relative;
}

.items{
    position: absolute;
    top:-10%;
    right:0%;
    background:var(--primary-600);
    border-radius: 50%;
    width:1.4rem;
    height:1.4rem;
    display: grid;
    place-items: center;
    color: white;
    font-size:0.8rem;
    
}


`

export default ButtonContainer