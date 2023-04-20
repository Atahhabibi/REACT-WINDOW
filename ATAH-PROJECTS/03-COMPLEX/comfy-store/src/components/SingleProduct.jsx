import styled from "styled-components"
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";



const SingleProduct = ({id,name,price,image}) => {
  return <Wrapper>


    <div className="image-container">
        <img src={image} alt={name} className="img"/>
        <button className="search-btn"><Link to={`products/:${id}`} className="link"><AiOutlineSearch/></Link></button>
    </div>

    
    <div className="info-container">
        <h5 className="name">{name}</h5>
        <h5 className="price">{formatPrice(price)}</h5>
    </div>

  </Wrapper>
}

const Wrapper=styled.article`
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

.img{
    max-height:10rem;
    transition:var(--transition);
}

.search-btn{
 position: absolute;
 top:50%;
 left:50%;
 transform: translate(-50%,-70%);
 border: transparent;
 background:var(--primary-600);
 font-size:1.5rem;
 border-radius: 50%;
 height:2rem;
 width:2rem;

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

    .img{
        min-height:14rem;
    }

    .info-container{
        .name,.price{
            font-size:1.3rem;
        }
    }

    margin: 0;
  
}
    
`

export default SingleProduct