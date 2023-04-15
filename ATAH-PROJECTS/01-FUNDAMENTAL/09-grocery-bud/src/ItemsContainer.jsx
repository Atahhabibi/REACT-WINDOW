import styled from "styled-components"
import { useGlobalContext } from "./globalContext"
import ItemComponent from "./ItemComponent";

const ItemsContainer = () => {
    const {items}=useGlobalContext();

    if(items.length===0)return ;
    
  return (
    <Wrapper>

        {
            items.map((singleItem)=>{
                return <ItemComponent key={singleItem.id} {...singleItem}/>
            })
    
        }


    </Wrapper>
  )
}

const Wrapper=styled.div`

margin-top:2rem;
margin-bottom:2rem;

padding:0rem 0.4rem;


@media screen and (min-width:600px) {

    padding:0 3rem;

}



`
export default ItemsContainer