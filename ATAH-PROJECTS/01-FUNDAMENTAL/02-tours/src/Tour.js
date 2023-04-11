import React, { useState } from 'react';
import styled from 'styled-components';

const Tour = ({id,image,info,price,name,handleTours}) => {

  const[more,setMore]=useState(false);



  return <Wrapper>

    <div className="image-container">
      <img src={image} alt={name} className='img'/>
      <div className="price">${price}</div>
    </div>


    <div className="info-container">
      <h4 className="tour-title">{name}</h4>
      <p className="info">{more?info:`${info.slice(0,250)}......`}<button className='info-btn' onClick={()=>setMore(!more)}>{more?'show Less':'Read more'}</button></p>

    
      <button className="delete-btn" onClick={()=>handleTours(id)}>not interested</button>
    </div>









  </Wrapper>;
};




const Wrapper=styled.article`

:root {
  /* colors */
  --primary-100: #d1fae5;
  --primary-200: #a7f3d0;
  --primary-300: #6ee7b7;
  --primary-400: #34d399;
  --primary-500: #10b981;
  --primary-600: #059669;
  --primary-700: #047857;
  --primary-800: #065f46;
  --primary-900: #064e3b;

  /* grey */
  --grey-50: #f8fafc;
  --grey-100: #f1f5f9;
  --grey-200: #e2e8f0;
  --grey-300: #cbd5e1;
  --grey-400: #94a3b8;
  --grey-500: #64748b;
  --grey-600: #475569;
  --grey-700: #334155;
  --grey-800: #1e293b;
  --grey-900: #0f172a;
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

background:white;
margin-top:2rem;
box-shadow: var(--shadow-2);
border-radius:10px;
height: fit-content;

&:hover{
  box-shadow: var(--shadow-4);
}

img{
  height:15rem;
  object-fit: cover;
  width: 100%;
  border-top-right-radius:10px;
  border-top-left-radius: 10px;
}

.image-container{
  position: relative;
}

.price{
  position: absolute;
  top: 0;
  left:100%;
  transform: translate(-100%);
  background-color: var(--primary-500);
  padding:0.2rem 1rem;
  color: white;
  border-bottom-left-radius:1rem;
  border-top-right-radius:10px;

}

.info-container{
  padding:1.5rem;
  padding-top:0;
  padding-bottom:1rem;
  display: grid;
  grid-template-rows:5rem 2fr auto;
  
}

.tour-title{
  text-align: center;
  padding:1rem 0;
  font-weight: bold;
  font-size:1.2rem;
}

.info{
  font-size:0.8rem;
  text-align: justify;
}

.info-btn{
  border: transparent;
  background: transparent;
  color: var(--primary-600);
  font-weight: bold;
  text-transform: capitalize;
  margin-left:0.1rem;

}

.delete-btn{
  width: 100%;
  margin:1rem 0;
  margin-bottom:0;
  padding:0.2rem;
  text-transform: capitalize;
  background-color: white;
  border: 2px solid var(--primary-300);
  color: var(--primary-900);
  letter-spacing:2px;
  border-radius:7px;
  cursor: pointer;
  transition: var(--transition);

  &:hover{
    background:var(--primary-500);
    color: white;
  }
}

@media screen and (min-width:600px) {

  .img{
    height:18rem;
  }

  .tour-title{
    font-size:1.2rem;
  }

  .info{
    font-size:1rem;
    text-align: left;
  }

  .info-btn{
    font-size:1.1rem;
  }

  .delete-btn{
    font-size:1rem;
  }

  .price{
    font-size:1.3rem;
  }


  
}

@media screen and (min-width:1000px){
  margin-top: 0;
}


`





export default Tour;
