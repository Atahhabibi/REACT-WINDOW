import styled from "styled-components"
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";
import { useCartContext } from "../context/cartContext";



const SingleProduct = ({id,name,price,image}) => {

    const {getId}=useCartContext();

  return <Wrapper>


    <div className="image-container">
        <img src={image} alt={name} className="img single-img"/>
        <button className="search-btn" onClick={()=>getId(id)}><Link to={`products/:${id}`} className="link"><AiOutlineSearch/></Link></button>
    </div>

    
    <div className="info-container">
        <h5 className="name">{name}</h5>
        <h5 className="price">{formatPrice(price)}</h5>
    </div>

  </Wrapper>
}

const Wrapper=styled.div`

max-height:25rem;

margin:2rem 0;
background:var(--primary-900);
border-radius:8px;
position: relative;
overflow: hidden;




.image-container{
    transition: var(--transition);
  
    &:hover{
        .search-btn{
            display: block;
            opacity: 1;
        }

        .img{
           opacity:0.5;
         }
    }
    
}

.single-img{
    max-height:14rem;
    min-height:16rem;
    transition:var(--transition);
}

.search-btn{
 position: absolute;
 top:50%;
 left:50%;
 transform: translate(-50%,-110%);
 border: transparent;
 background:var(--primary-600);
 font-size:1.5rem;
 border-radius: 50%;
 height:3rem;
 width:3rem;


 display: none;

 .link{
    color: white;
    display: grid;
    place-items: center;
 }


}



.info-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.8rem;
    background:var(--primary-300);
    min-height:5rem;
}

.info-container h5{
    font-size:1rem;
    color:var(--primary-900);
}

.price{
    background:var(--primary-200);
    padding:0.2rem 1rem;
    border-radius:8px;
    color: black;
}

@media screen and (min-width:600px){


    .info-container{
        .name,.price{
            font-size:1.3rem;
        }
    }

    margin: 0;
  
}
    
`

export default SingleProduct