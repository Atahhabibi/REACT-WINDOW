import React from 'react'
import styled from 'styled-components'
import Categories from './Categories'
import Menu from './Menu'

import { useState } from 'react'

const MenuList = ({menu}) => {

     let catgeoriesItems=["all",...new Set(menu.map((item)=>item.category))];


    const[menuItems,setMenuItems]=useState(menu);
    const[activeBTN,setActiveBTN]=useState("all");

    const handleMenu=(item)=>{
       
        const newMenu=menu.filter((singleItem)=>singleItem.category===item);
        setActiveBTN(item)

        if(item==='all'){
            setMenuItems(menu)
            return;
        }

        setMenuItems(newMenu)
        
    }

    
   return <Wrapper>

    <div className="section-center">
        <h1 className='main-title'>Our menu</h1>
        <hr />

        <Categories categoriesItems={catgeoriesItems} handleMenu={handleMenu} activeBTN={activeBTN}/>

        <div className="menu-container">
        {
          menuItems.map((item)=>{
            return <Menu key={item.id} {...item}/>
          })
        }

        </div>


    </div>




   </Wrapper>
  
}



const Wrapper=styled.div`


padding:3rem 0;

.main-title{
    color: white;
    letter-spacing:4px;
    font-size:2rem;
    text-transform: uppercase;

}

.menu-container{
 margin-top:1rem;
   
}

@media screen and (min-width:600px){

 .main-title{
    font-size:3rem;
 }
  
}




@media screen and (min-width:1000px){

    .menu-container{
        display: grid;
        grid-template-columns:1fr 1fr;
        gap:2rem;
    }

  
}
@media screen and (min-width:1300px){

    .menu-container{
        grid-template-columns:1fr 1fr 1fr;
    }
  
}




`


export default MenuList
