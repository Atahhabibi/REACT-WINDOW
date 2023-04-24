import styled from "styled-components"
import { Form, PageNavigate,ProductsResults } from "../components"
import { useProductsContext } from "../context/productsContext"
import Error from "../utils/Error";
import Loading from "../utils/Loading";


const ProductsPage = () => {

  const {isError,isLoading}=useProductsContext();

  if(isLoading){
    return <Wrapper>
      <Loading/>
    </Wrapper>
  }

  if(isError){
    return <Wrapper>
      <Error/>
    </Wrapper>
  }



  return <Wrapper>

    <PageNavigate title='products'/>

    <div className="section-center products-center">

      <div className="products-container">
         <Form/>
         <ProductsResults/>
      </div>


    </div>




  </Wrapper>
}

const Wrapper=styled.div`
display: grid;
place-items:center;
min-height:80.25vh;

margin-bottom:3rem;


@media screen and (min-width:500px) {
  min-height:80.50vh;
    
}


@media screen and (min-width:900px) {

  min-height:77.1vh;

  .products-container{
    display: grid;
    grid-template-columns:auto 3fr;
    column-gap:2rem;
  }
    
}

    
`

export default ProductsPage