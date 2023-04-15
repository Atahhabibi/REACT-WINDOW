import styled from "styled-components"
import { useGlobalContext } from "./globalContext"


const ItemComponent = ({name,id,completed}) => {

  const {removeItem,checkComplete}=useGlobalContext();



  return <Wrapper>

      <div className="name-checkbox"> <input type="checkbox" onChange={()=>checkComplete(id)}/>

      <span style={completed?{textDecoration:'line-through'}:{textDecoration:null}}>{name}</span>
      
      </div>

      <button type="button" onClick={()=>removeItem(id)}>delete</button>


 </Wrapper>

}

const Wrapper=styled.div`


text-align: left;
display: flex;
justify-content: space-between;
padding:0.5rem;

.name-checkbox{
    text-transform: capitalize;
}

input{
    margin-right:0.6rem;
}

button{
    text-transform: capitalize;
    padding: 0.3rem 0.4rem;
    border-radius: 4px;
    border: transparent;
    background-color:black;
    color:red;
    cursor: pointer;
}


@media screen and (min-width:600px) {

 .name-checkbox,button{
     font-size:1.1rem;
 }

input{
     width:1.1rem;
     height:1.1rem;
     cursor: pointer;
 }

 .name-checkbox{
     display: flex;
     align-items: center;
 }


}


`




export default ItemComponent