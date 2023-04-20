import styled from "styled-components"
import { Form, PageNavigate,View,ProductsResults } from "../components"


const ProductsPage = () => {
  return <Wrapper>

    <PageNavigate title='products'/>

    <div className="section-center">

      <div className="products-container">
         <Form/>
         <ProductsResults/>
      </div>


    </div>




  </Wrapper>
}

const Wrapper=styled.div`

margin-bottom:3rem;

@media screen and (min-width:900px) {

  .products-container{
    display: grid;
    grid-template-columns:auto 3fr;
    column-gap:2rem;
  }
    
}

    
`

export default ProductsPage