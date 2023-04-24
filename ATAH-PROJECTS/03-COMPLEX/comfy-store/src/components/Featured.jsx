import styled from "styled-components"
import {Heading} from '../components'
import { Link } from "react-router-dom"
import { useProductsContext } from "../context/productsContext"
import Loading from "../utils/Loading"
import Error from "../utils/Error"
import SingleProduct from "./SingleProduct"

const Featured = () => {

    const {featuredProducts,isError,isLoading}=useProductsContext();


    if(isLoading){
       return <Loading/>
    }

    if(isError){
       return  <Error/>
    }


    let newFeatured=featuredProducts.slice(0,3);



  return <Wrapper>


    <div className="section-center">


    <Heading title="Featured products"/>

    <div className="featured-container">
        {
            newFeatured.map((item)=>{
                return <SingleProduct key={item.id} {...item}/>
            })
        }

    </div>

    <button className="btn-primary "><Link to='/products' className="Link-btn">All products</Link></button>


    </div>

  </Wrapper>
}

const Wrapper=styled.div`

padding:3rem 0;
background-color:var(--grey-200);


.featured-container{
    margin-bottom:2rem;
}

.btn-primary{
    display: block;
    margin:0 auto;
    margin-top:1rem;
}


@media screen and (min-width:600px){

    .featured-container{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        gap:2rem;
    }
    
    
  
}

@media screen and (min-width:900px){

    .featured-container{
        grid-template-columns: 1fr 1fr 1fr;
        margin:4rem 0;
    }
    

  
}

    
`

export default Featured