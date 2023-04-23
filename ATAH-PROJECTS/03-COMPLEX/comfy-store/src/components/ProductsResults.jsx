import styled from "styled-components"
import {View,GridView,ListView} from '../components'
import { useProductsContext } from "../context/productsContext"


const ProductsResults = () => {

  const {gridView}=useProductsContext();

  return <Wrapper>
      <View/>

      {gridView?<GridView/>:<ListView/>}
      
  </Wrapper>
}


const Wrapper=styled.div`
    

`

export default ProductsResults;