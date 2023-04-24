
import styled from "styled-components"
import { useCartContext } from "../context/cartContext"
import Loading from "../utils/Loading";
import {IncDec, PageNavigate, Stars,Colors} from '../components'
import { Link } from "react-router-dom";
import formatPrice from "../utils/formatPrice";
import Error from "../utils/Error";



const SingleProductsPage = () => {


  const {single_product,isError,isLoading,imageIndex,handleImg,handleCartItem,handleAmount,itemAmount}=useCartContext();

  if(isLoading){
    return<Wrapper>
          <Loading/>
    </Wrapper>
  }

  if(isError){
    return <Wrapper>
        <Error/>
    </Wrapper> 
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