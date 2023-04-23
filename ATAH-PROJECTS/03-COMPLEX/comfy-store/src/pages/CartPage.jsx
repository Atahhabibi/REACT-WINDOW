import { Link } from "react-router-dom";
import styled from "styled-components"
import { CartItem, Heading, PageNavigate, TotalContainer} from '../components'
import { useCartContext } from "../context/cartContext"


const CartPage = () => {

  const {cart}=useCartContext();

  if(cart.length<1){

    return <Wrapper>
       <h2 className="empty-heading">your cart is empty</h2>
       <button className="btn-primary"><Link to='/products' className="Link-btn">fill it</Link></button>
    </Wrapper>
  }

  return <Wrapper>

         <PageNavigate title="cart"/>

        <div className="section-center">

          <div className="sub-title-container">

            <h5 className="subtitle">Item</h5>
            <h5 className="price">Price</h5>
            <h5 className="subtotal">Subtotal</h5>
            <h5 className="quantity">Quantity</h5>

          </div>

          <hr  className="hr-line"/>

          <div className="cart-item-container">
            {
              cart.map((item)=>{
                return <CartItem key={item.id} {...item}/>
              })
            }
          </div>

          <hr className="hr-bottom"/>

          <TotalContainer/>



        </div>


  </Wrapper>
}

const Wrapper=styled.div`
min-height:calc(100vh - 138px);
margin-bottom:3rem;

.empty-heading{
  text-align: center;
  margin:1rem 0;
}

.btn-primary{
  margin: 0 auto;
  display: block;
}

.sub-title-container{
  display: none;
}

.hr-line{
  display: none;
}

.hr-bottom{
  margin: 2rem 0;
  margin-bottom:1rem;
}



@media screen and (min-width:600px) {
  min-height:calc(100vh - 158px);
}


@media screen and (min-width:800px) {

  

  .sub-title-container{
     display: grid;
     grid-template-columns:auto 1fr auto 1fr;
     text-align: center;
     margin-top:2rem;
     margin-bottom:1rem;
     color: var(--grey-500);
  }

  .subtitle{
    min-width:15rem;

  }


  .hr-line{
    display: block;
  }


  .price{
    margin-left:6rem;
  }


  




}

@media screen and (min-width:900px) {

  min-height:calc(100vh - 174px);

}

    
`

export default CartPage