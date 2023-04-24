import styled from "styled-components"
import {HiOutlineViewGrid,HiOutlineViewList} from 'react-icons/hi'
import { useProductsContext } from "../context/productsContext"

const View = () => {

    const {filteredProducts,changeView,gridView,handleForm}=useProductsContext();



  return <Wrapper>

      <div className="btn-container">
          <button className={gridView?'active':null} onClick={changeView}><HiOutlineViewGrid/></button>
         <button className={ gridView?null:'active'} onClick={changeView}><HiOutlineViewList/></button>
      </div>


      <p className="found">{filteredProducts.length} Products found </p> 


      <div className="sort-container">

      <span className="sort-by">sort by</span>

      <select className="price-sort" onChange={handleForm} name="sort">

          <option value="Price(Lowest)">Price (Lowest)</option>
          <option value="Price(Highest)">Price (Highest)</option>
          <option value="Name(A-Z)">Name (A-Z)</option>
          <option value="Name(Z-A)">Name (Z-A)</option>

      </select>

      </div>
      
  </Wrapper>
}


const Wrapper=styled.div`


margin:2rem;
background-color: var(--primary-200);
padding:0.7rem;
display: flex;
justify-content: space-around;
align-items: center;
margin: 0 auto;
margin-top:2rem;
margin-bottom:2rem;
border-radius:5px;

.btn-container{
    button{
        font-size:1.5rem;
        margin-right:0.5rem;
        background-color: transparent;
        width:2rem;
        height:2rem;
        display: grid;
        place-items: center;
        border-radius:8px;
        display: inline;
        cursor: pointer;
    }

    .active{
        background-color:black;
        color: white;
    }
}

.found{
    color: var(--primary-700);
    font-size:1.1rem;
    display: none;
}

.price-sort{
    padding:0.5rem ;
    font-size:1.1rem;
    border-radius:4px;
    background:var(--primary-100);
}

.sort-by{
    text-transform: capitalize;
    font-size:1.3rem;
    margin-right:0.5rem; 
}

option{
    text-transform: capitalize;
}

@media screen and (min-width:800px) {

    .found{
        display:inline;
    }

    max-width:50rem;
    min-width:35rem;

    
}

@media screen and (min-width:800px) {

    .sort-by{
        display: inline;
    }
    
}


`

export default View;