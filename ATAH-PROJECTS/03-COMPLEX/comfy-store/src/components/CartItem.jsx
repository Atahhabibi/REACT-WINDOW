import styled from "styled-components"
import { IncDec } from ".";
import { useCartContext } from "../context/cartContext";
import formatPrice from "../utils/formatPrice";
import {AiFillDelete} from 'react-icons/ai'

const CartItem = ({name,image,amount,price,color,id}) => {

  const {handleCartItemAmount,removeItem}=useCartContext();


  return <Wrapper>

     <div className="image-container">
      <img src={image} alt={name} className="cart-img" />

      <div className="image-info">
        <h5 className="name">{name}</h5>
        <h5 className="color">color <span style={{background:color}}></span></h5>
        <h5 className="price">{formatPrice(price)}</h5>
      </div>

     </div>

     <h5 className="price-column">{formatPrice(price)}</h5>
     <h5 className="subtotal">{formatPrice(price*amount)}</h5>

     <IncDec handleAmount={handleCartItemAmount} itemAmount={amount} id={id}/>

     <button className="delete-btn" onClick={()=>removeItem(id)}><AiFillDelete/></button>

  </Wrapper>
}


const Wrapper=styled.article`

display: grid;
grid-template-columns:1fr 1fr 1fr ;
justify-items: center;
align-items: center;
margin-top:2rem;
column-gap:1rem;

.price-column{
  display: none;
}

.subtotal{
  display: none;
}

.cart-img{
  max-height:5rem;
  max-width:5rem;
  min-width:5rem;
  min-height:5rem;
  object-fit: cover;
  object-fit: cover;
  border-radius:5px;
}

.image-container{
  display:flex;
  column-gap:0.5rem;
  min-width:13rem;
  align-items: center;
}

.image-info{
  h5{
    font-size:0.8rem;
  }
}

.name{
  font-weight: bold;
  
}

.price{
  margin-top:0.5rem;
  color:var(--primary-600);
  font-weight: bold;
}




.color span{
  width:0.6rem;
  height:0.6rem;
  display: inline-block;
  border-radius:20%;
}

.delete-btn{
  display: grid;
  place-items: center;
  width:1.8rem;
  height:1.8rem;
  background:red;
  border-radius:5px;
  border: transparent;
  font-size:1.5rem;
  color: white;
  cursor: pointer;
}


.btn-container{
  .inc{
    font-size:1rem;
  }

  .dec{
    font-size:0.8rem;
  }

  .amount{
    font-size: 1.1rem;
  }

}


@media screen and (min-width:600px) {

  display: flex;
  justify-content: space-between;

  .cart-img{
    min-width:5rem;
    min-height:5rem;
  }

  .image-info{
    h5{
      font-size:0.9rem;
    }
  }


  .btn-container{
    .amount{
      font-size:1.5rem;
    }

    .inc{
      font-size:1.2rem;
    }

    .dec{
      font-size:1.1rem;
    }
    
  }


  .price{
    display: none;

  }

  .price-column{
    display: block;
  }


    
}



@media screen and (min-width:800px) {

 display: flex;
 justify-content: space-between;

  
  .price-column{
    display: block;
    color:var(--primary-600);
  }

  .subtotal{
    display: block;
    color:var(--grey-600);
  }


  .price{
    display: none;
  }

  .cart-img{
    min-width:6rem;
    min-height:6rem;
  }

  .image-info{
    h5{
      font-size:1rem;
    }
  }

  .image-container{
    min-width:20rem;

  }

  .btn-container{
    .amount{
      font-size:1.8rem;
    }
    
  }
    
}



    

`

export default CartItem;