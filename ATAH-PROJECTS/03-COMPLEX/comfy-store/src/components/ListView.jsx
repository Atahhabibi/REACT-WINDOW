import styled from "styled-components"
import { useState } from "react"
import { useProductsContext } from "../context/productsContext"
import formatPrice from "../utils/formatPrice";

const ListView = () => {

    const {products}=useProductsContext();

  return <Wrapper>

      {
          products.map((item)=>{

              const {id,name,price,image,description}=item;
              
             return <article className="product" key={id}>
                 <img src={image} alt={name}  className="img"/>

                 <div className="product-info">
                     <h5 className="name">{name}</h5>
                     <h5 className="price">{formatPrice(price)}</h5>
                     <p className="prodcut-text">{description.slice(0,200)}</p>
                     <button className="btn-primary">Details</button>
                 </div>




             </article>
          })
      }
      
  </Wrapper>
}


const Wrapper=styled.div`
 :root {
    /* colors */
    --primary-100: #eee4df;
    --primary-200: #ddcabf;
    --primary-300: #cdaf9f;
    --primary-400: #bc957f;
    --primary-500: #ab7a5f;
    --primary-600: #89624c;
    --primary-700: #674939;
    --primary-800: #443126;
    --primary-900: #221813;

    /* grey */
    --grey-50: #dfe5ea;
    --grey-100: #c0cbd6;
    --grey-200: #e2e8f0;
    --grey-300: #a0b1c1;
    --grey-400: #8197ad;
    --grey-500: #617d98;
    --grey-600: #4e647a;
    --grey-700: #3a4b5b;
    --grey-800: #27323d;
    --grey-900: #13191e;
    /* rest of the colors */
    --black: #222;
    --white: #fff;
    --red-light: #f8d7da;
    --red-dark: #842029;
    --green-light: #d1e7dd;
    --green-dark: #0f5132;

    --small-text: 0.875rem;
    --extra-small-text: 0.7em;
    /* rest of the vars */
    --backgroundColor: var(--grey-50);
    --textColor: var(--grey-900);
    --borderRadius: 0.25rem;
    --letterSpacing: 1px;
    --transition: 0.3s ease-in-out all;
    --max-width: 1120px;
    --fixed-width: 600px;

    /* box shadow*/
    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
}  

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