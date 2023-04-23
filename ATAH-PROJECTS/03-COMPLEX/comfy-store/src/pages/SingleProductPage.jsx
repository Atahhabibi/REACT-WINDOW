
import styled from "styled-components"
import { useCartContext } from "../context/cartContext"
import Loading from "../utils/Loading";
import {IncDec, PageNavigate, Stars,Colors} from '../components'
import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";



const SingleProductsPage = () => {


  const {single_product,isError,isLoading,imageIndex,handleImg,handleCartItem,handleAmount,itemAmount}=useCartContext();

  if(isLoading){
    return <Loading/>
  }

  if(isError){
    return <isError/>
  }


  const {name,images,price,stock,colors,company,description,stars,id,reviews}=single_product;

  
  const mainImg=images[imageIndex].thumbnails.large.url;

  return <Wrapper>

    <PageNavigate title={name} isProduct={true}/>


    <div className="section-center main-center">

     <button className="btn-primary single-btn"><Link to='/products' className="Link-btn">back to products</Link></button>


    <div className="main-container">

    <div className="image-container">

      <div className="main-image">
        <img src={mainImg} alt={name}  className="img"/>
      </div>

      <div className="small-img-gallery">
        {
          images.map((item,index)=>{
            const {url}=item.thumbnails.large;
            return <img src={url} className={imageIndex===index?'small-img active-img':'small-img'} key={index} onClick={()=>handleImg(index)}/>
          })
        }
      </div>
    </div>


    <div className="single-info-container">
      <h5 className="name">{name}</h5>
      <Stars stars={stars} reviews={reviews}/>
     
      <h5 className="price">{formatPrice(price)}</h5>
      <p className="text">{description}</p>

      <div className="span-category">

        <div className="span-container">
           <h5 className="main-head"> Available: </h5><h5 className="title">{stock>0?'In Stock':'Out of Stock'}</h5>
        </div>

        <div className="span-container">
           <h5 className="main-head" > SKU: </h5><h5 className="title">{id}</h5>
        </div>

        <div className="span-container">
           <h5 className="main-head"> Brand: </h5><h5 className="title">{company}</h5>
        </div>

        
      </div>
      <hr />

      <Colors colors={colors} />


     {stock>0 && <IncDec handleAmount={handleAmount} itemAmount={itemAmount}/>}

     <button className=" btn-primary"><Link to="/cart" className="Link-btn" onClick={handleCartItem}>Add to cart</Link></button>

   
      

    </div>
    

    </div>


    </div>



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

min-height:calc(100vh - 138px);

.main-center{
  margin-top:1rem;
  margin-bottom:2rem;
}

.single-btn{
  margin-top:2rem;
  text-transform: uppercase;
}

.image-container{
  margin-top:2rem;
}

.main-image{
  border-radius:8px;
  overflow: hidden;

  .img{
    min-height:20rem;
  }
}


.small-img-gallery{
 display: flex;
 justify-content: space-between;
 margin-top:1rem;
 column-gap:1rem;
}


.small-img{
  height:2.5rem;
  object-fit: cover;
  border-radius:3px;
  cursor: pointer;
  transition:var(--transition);
}

.active-img{
  border:2px solid white;
  outline:3px solid var(--primary-600);
  scale:1.1;
}

/* single info container */

.name{
  font-size:2rem;
  font-weight: bold;
  letter-spacing:3px;
  margin-top:2rem;
}

.price{
  font-size:1rem;
  color:var(--primary-800);
  font-weight: bold;
  margin:0.5rem 0;
}

.text{
  text-align:justify;
  margin-bottom:1rem;
  color: var(--primary-800);
}

.span-category{
 margin:1rem 0;
}

.span-container{
  display: grid;
  grid-template-columns:50% 50%;
  margin:0.5rem 0;
  
  .main-head{
    font-weight: bold;
  }

  .title{
    color: var(--grey-600);
  }

}


@media screen and (min-width:500px) {
  .small-img{
    height:3.7rem;
  }
    
}




@media screen and (min-width:600px) {

  .small-img{
    height:4.2rem;
  }

  min-height:calc(100vh - 158px);

}


@media screen and (min-width:700px) {

  .small-img{
    height:5.2rem;
  }
    
}






@media screen and (min-width:900px) {

  min-height:calc(100vh - 174px);

  .image-container{
    height: fit-content;
  }
  .main-image{
    .img{
      height:28rem;
    }
  }

  .small-img{
    height:4.1rem;
  }

  .main-container{
    display: grid;
    grid-template-columns:1fr 1fr;
    column-gap:2rem ;
  }

  .single-info-container{
    margin-bottom:2rem;
  }

  .price{
    font-size:1.5rem;
  }

  

}

    
`

export default SingleProductsPage