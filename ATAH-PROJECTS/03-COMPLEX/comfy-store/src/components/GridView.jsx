import styled from "styled-components"
import { useProductsContext } from "../context/productsContext";
import SingleProduct from "./SingleProduct";

const GridView = () => {

    const {filteredProducts,gridView}=useProductsContext();;


    if(filteredProducts.length<1){
        return <div>

            <h4 className="no-match" style={{textAlign:'center',fontSize:'2rem'}}>Sorry, no match found to your search</h4>

        </div>
    }

  return <Wrapper>

      {
          filteredProducts.map((item)=>{
              return <SingleProduct key={item.id} {...item}/>
          })
      }

      



  </Wrapper>
}


const Wrapper=styled.div`

.no-match{
    border: 2px solid red;
    text-align: center;
}



.img{
    min-height: 100%;
}

@media screen and (min-width:600px) {
   display: grid;
   grid-template-columns:1fr 1fr;
   gap:2rem;
}










`

export default GridView;