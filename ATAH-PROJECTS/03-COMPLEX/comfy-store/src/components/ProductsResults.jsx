import styled from "styled-components"
import {View,GridView,ListView} from '../components'


const ProductsResults = () => {

  return <Wrapper>
      <View/>

      {false?<ListView/>: <GridView/>}
      
  </Wrapper>
}


const Wrapper=styled.div`
    

`

export default ProductsResults;