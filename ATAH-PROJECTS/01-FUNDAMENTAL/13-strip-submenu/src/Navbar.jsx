import React from 'react'
import { useState,useRef  } from 'react'
import styled from 'styled-components'
import logo from './assets/images/logo.svg'
import {FaBars} from 'react-icons/fa'
import Sidebar from './Sidebar'
import Sublinks from './Sublinks'



const Navbar = ({sublinks}) => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false)
    const [pageName, setPageName] = useState('');
    const [newSublink, setNewSublink] = useState([]);
    const navOverlay=useRef(null);
    const arrowRef=useRef(null);
    const linksContainerRef=useRef(null);

    const handlePage=(e)=>{

        setShowSubMenu(true);
        
        const pageValue=e.currentTarget.dataset.id;

        setPageName((oldPage)=>{
            const newPage=pageValue;
            const newArray=sublinks.filter((item)=>item.page===newPage);
            setNewSublink(newArray);
            return newPage;

        })

        arrowRef.current.style.display="block";
        navOverlay.current.style.padding='1rem';

        const buttonDOM=e.currentTarget;
        const left=buttonDOM.getBoundingClientRect().left;
        const right=buttonDOM.getBoundingClientRect().right;
        const bottom=buttonDOM.getBoundingClientRect().bottom;
        const center=(left + right)/2;

        navOverlay.current.style.left=`${center}px`;
        navOverlay.current.style.top=`${bottom + 12}px`;

      
    



    
    }



    

  return <div className='section-center'>

          <div className={`${showSubMenu?'nav-overlay show-overlay':'nav-overlay'}`} ref={navOverlay}>

              <span className='arrow-up' ref={arrowRef}></span>
              {
                  newSublink.map((item)=>{
                      return <Sublinks key={item.page} {...item} linksContainerRef={linksContainerRef}/>
                  })
              }
              
              
          </div>

      <Wrapper>

    
          <div className="nav-header">
              <img src={logo} alt="logo" />
              <button className='toggle-btn' onClick={()=>{setShowSidebar(!showSidebar)}}><FaBars/></button>
          </div>
    
          <ul className="links">
              {
                  sublinks.map((item)=>{
                      const {page}=item;
                      return <button key={page} data-id={page} onMouseEnter={handlePage} onMouseLeave={()=>setShowSubMenu(false)}><a href='#' >{page}</a></button>
                  })
              }
          </ul>
    
          <button className="sign-btn">sign in</button>
    
    
      </Wrapper>

      <Sidebar sublinks={sublinks} showSidebar={showSidebar} setShowSidebar={setShowSidebar} setPageName={setPageName}/>
    
  </div> 
}

const Wrapper=styled.div`

padding: 1rem 0;

.links{
    display: none;
    width: fit-content;
}

.sign-btn{
    display: none;
}

.nav-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.toggle-btn{
    font-size: 1.5rem;
    border: transparent;
    background:black;
    color: white;
    padding:0.4rem 0.7rem;
    display: grid;
    place-items: center;
    border-radius:8px;
    cursor: pointer;
}




@media screen and (min-width:800px) {

    display: grid;
    grid-template-columns: auto auto 5rem;
    position: relative;


    .toggle-btn{
        display: none;
    }

    .sign-btn{
        display: block;
        font-size:1.1rem;
        padding: 0.5rem;
        border-radius: 10px;
        background:black;
        color: white;
        border: none;
        text-transform: capitalize;

    }

    .links{
        display:flex;

        button{
            background: transparent;
            border: transparent;
        }
        
    }

    .links a{
        font-size:1.5rem;
        text-transform: capitalize;
        margin: 0 1rem;
        color: #892f5a;
    }



 
    
}



    



`

export default Navbar
