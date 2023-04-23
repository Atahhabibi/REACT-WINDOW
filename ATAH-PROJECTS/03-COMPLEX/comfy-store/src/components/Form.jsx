import styled from "styled-components"
import formatPrice from "../utils/formatPrice"
import { useProductsContext } from "../context/productsContext"
import getUniqueValue from "../utils/getUniqueValue"
import {FaCheck} from 'react-icons/fa'

const Form = () => {

    const {products}=useProductsContext();

    let categories=products.map((item)=>item.category);
    let companies=products.map((item)=>item.company);
    let colors=products.map((item)=>item.colors);

    categories=getUniqueValue(categories,'category');
    companies=getUniqueValue(companies,'company');
    colors=getUniqueValue(colors,'colors');

    const {handleForm,filters:{maxPrice,price,search,category,shipping,color},clearFilters}=useProductsContext();


  return <Wrapper>

      <form  onSubmit={(e)=>{e.preventDefault()}}>

          <div className="form-control">
              <input type="text" placeholder="search" className="search-input" onChange={handleForm} name="search" value={search}/>
          </div>

          <div className="form-control">
             <h5 className="form-title">Category</h5>

             <div className="category-container">
                {
                categories.map((item)=>{
                    return <button className={category===item?`category-btn active-category`:'category-btn'} key={item} name="category" data-id={item} onClick={handleForm}>{item}</button>
                })
                }
             </div>

          </div>

          <div className="form-control">
             <h5 className="form-title">company</h5>

             <select className="company-container" onChange={handleForm} name="company">
                 {
                     companies.map((item)=>{
                         return <option value={item} className="company-option" key={item} >{item}</option>
                     })
                 }
               
             </select>

          </div>

          <div className="form-control">
             <h5 className="form-title">colors</h5>

             <div className="colors-container">
                 {
                     colors.map((item)=>{
                         if(item==='all'){
                             return <button key={item} className={item===color?'all-btn active-color':'all-btn'} name="color" onClick={handleForm} data-id="all">all</button>
                         }
                         return <button  className={color===item?'color-btn active-btn':'color-btn'} key={item} style={{background:item}} onClick={handleForm} name="color" data-id={item}>{color===item?<FaCheck />:null}</button>
                     })
                 }
               
             </div>

          </div>


          <div className="form-control">
             <h5 className="form-title">price</h5>

             <div className="price-container">
                  <h5 className="price-value">{formatPrice(price)}</h5>
                 <input type="range" name="price" id="range" max={maxPrice} min={0} onChange={handleForm} value={price}/>
             </div>

          </div>

          <div className="form-control">
             <h5 className="form-title">free shipping</h5>

             <div className="shipping-container">
                 <label htmlFor="shipping" className="shipping-label">Free shipping </label>
                 <input type="checkbox" id="shipping"  name="shipping"  onChange={handleForm}/>
             </div>

          </div>


      </form>

      <button className="clear-btn btn-block" onClick={clearFilters}>clear Filters</button>


      
  </Wrapper>
}


const Wrapper=styled.div`
:root {
    /* colors */
    --primary-100: #eee4df;
    --primary-200: #ddcabf;
    --primary-300: #cdaf9f;
    --primary-400: #bc957f;
    --primary-500: #ab7a5f;
    --primary-600: #89624c;
    --primary-700: #674939;
    --primary-800: #443126;
    --primary-900: #221813;

    /* grey */
    --grey-50: #dfe5ea;
    --grey-100: #c0cbd6;
    --grey-200: #e2e8f0;
    --grey-300: #a0b1c1;
    --grey-400: #8197ad;
    --grey-500: #617d98;
    --grey-600: #4e647a;
    --grey-700: #3a4b5b;
    --grey-800: #27323d;
    --grey-900: #13191e;
    /* rest of the colors */
    --black: #222;
    --white: #fff;
    --red-light: #f8d7da;
    --red-dark: #842029;
    --green-light: #d1e7dd;
    --green-dark: #0f5132;

    --small-text: 0.875rem;
    --extra-small-text: 0.7em;
    /* rest of the vars */
    --backgroundColor: var(--grey-50);
    --textColor: var(--grey-900);
    --borderRadius: 0.25rem;
    --letterSpacing: 1px;
    --transition: 0.3s ease-in-out all;
    --max-width: 1120px;
    --fixed-width: 600px;

    /* box shadow*/
    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
padding:2rem 1rem;
border: 3px solid white;
border-radius:4px;
max-width:30rem;
margin: 0 auto;
margin-top:2rem ;
margin-bottom:2rem;
height: fit-content;

background:var(--primary-400);

.search-input{
    padding:0.5rem;
    border-radius:8px;
    border: transparent;
    width: 100%;
    font-size:1.4rem;

    &::placeholder{
        font-size:1.2rem;
        letter-spacing: 2px;
        text-align: center;
        text-transform: capitalize;
    }
}

.form-title{
    text-align: center;
    font-weight: bold;
    letter-spacing:2px;
    margin-bottom:1rem;
    margin-top:2rem;
}

.category-container{
    display: grid;
    grid-template-columns:1fr 1fr;
    gap:1rem;
    max-width:40rem;
    margin: 0 auto;
}

.category-btn{
    text-transform: capitalize;
    border: transparent;
    background:white;
    padding:0.4rem;
    cursor: pointer;
    font-size:1.1rem;
    border-radius:8px;
    transition:var(--transition);
    &:hover{
        background:var(--primary-700);
        color: white;
    }
}

.active-category{
    background:var(--primary-700);
    color: white;
   
}


.company-container{
    text-align: center;
    text-transform: capitalize;
    margin: 0 auto;
    display: block;
    padding:0.5rem 1rem;
    border-radius:5px;
    cursor: pointer;
    font-size: 1.1rem;
}


.colors-container{
    display: flex;
    justify-content: space-around;
    max-width:20rem;
    margin: 0 auto;

    .all-btn{
        text-transform: capitalize;
        border: transparent;
        font-size: 1.2rem;
        cursor: pointer;
        background:transparent;
        color: white;
        
    }

    .active-color{
        border-bottom:3px solid var(--primary-900);
     }


    svg{
        font-size:1.3rem;
        color: white;
        opacity:1;
        
    }




    
}



.color-btn{
    width:1.5rem;
    height:1.5rem;
    border-radius:50%;
    border: transparent;
    cursor: pointer;
    opacity:0.4;
}

.active-btn{
    opacity: 1;
}

.price-container{
    text-align: center;
}

.shipping-container{
 text-align: center;
}

.shipping-label{
    font-size:1.1rem;
    margin-right:1rem;
    cursor: pointer;
    
}

.shipping-input{
  cursor: pointer;
}

.clear-btn{
    padding:0.5rem 1rem;
    margin-top:2rem;
    text-transform: capitalize;
    font-size:1.3rem;
    cursor: pointer;
    letter-spacing:2px;
    border-radius:5px;
    background-color: var(--red-dark);
    border: transparent;
    color: white;
    transition: var(--transition);

    &:hover{
        background:var(--primary-500);
    }
}


@media screen and (min-width:900px) {

    position:sticky;
    top:25px;

 
}



`

export default Form;