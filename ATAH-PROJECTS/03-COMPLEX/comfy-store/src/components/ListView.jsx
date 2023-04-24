import styled from "styled-components"
import { useProductsContext } from "../context/productsContext"
import formatPrice from "../utils/formatPrice";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const ListView = () => {

    const {filteredProducts}=useProductsContext();


    if(filteredProducts.length<1){
        return <Wrapper>

            <h3>Sorry,no match found your search</h3>

        </Wrapper>
    }
   

  return <Wrapper>

      {
          filteredProducts.map((item)=>{

              const {id,name,price,image,description}=item;
              const {getId}=useCartContext();
              
             return <article className="product" key={id}>
                 <img src={image} alt={name}  className="img"/>

                 <div className="product-info">
                     <h5 className="name">{name}</h5>
                     <h5 className="price">{formatPrice(price)}</h5>
                     <p className="prodcut-text">{description.slice(0,200)}</p>
                     <button className="btn-primary" onClick={()=>getId(id)}><Link to={`products/:${id}`} className="Link-btn">Detail</Link></button>
                 </div>




             </article>
          })
      }
      
  </Wrapper>
}


const Wrapper=styled.div`


margin:3rem 0;


.product{
    margin: 0 auto;
    margin-bottom:2rem;
    text-align: center;
    border: 2px solid white;
    border-radius:5px;
    outline:4px solid var(--primary-200);
    max-width:50rem;
}

.name{
    margin-top:1rem;
    font-weight: bold;
    letter-spacing:2px;
    margin-bottom:0.5rem;
}
.price{
    margin-bottom:1rem;
    color: var(--primary-600);
    font-weight: bold;
}

.img{
    height:14rem;
}

.prodcut-text{
    color:var(--grey-800);
    color: grey;
}

.btn-primary{
    margin:1rem 0;
}



@media screen and (min-width:1100px) {

    .product{
        display:grid;
        grid-template-columns: 1fr 2fr;
        column-gap:1rem;
        max-width: none;
        
    }

    .img{
        height:18rem;
        min-height: 100%;
        width:20rem;
    }
}





`

export default ListView;