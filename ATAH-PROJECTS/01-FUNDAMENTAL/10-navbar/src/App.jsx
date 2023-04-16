import styled from 'styled-components'
import React,{useState,useEffect} from 'react';
import {links,social} from './data'
import logo from './assets/logo.svg';
import { FaBars, FaFacebook } from 'react-icons/fa';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  
  const handleNav=()=>{
    setIsOpen(!isOpen);

    const navLinkscontainerDOM=document.querySelector('.links-container');
    const navLinksDOM=document.querySelector('.links');
    const navLinksHeight=navLinksDOM.getBoundingClientRect().height;
    if(isOpen){
      navLinkscontainerDOM.style.height=`${navLinksHeight}px`
    }else{
      navLinkscontainerDOM.style.height=`0px`
    }

  }


  return <Wrapper>

    <nav className='navbar'>


      <div className="nav-header">
         <img src={logo} alt="logo" />
         <button className='nav-toggle' onClick={handleNav}><FaBars /></button>
      </div>


      <div className="links-container">

        <ul className="links">
          {
            links.map((link)=>{
              const {id,url,text}=link;
              return <li key={id} className='link'><a href={url}>{text}</a></li>
            })
          }
        </ul>

      </div>


      <ul className="socials">
          {
             social.map((link)=>{
              const {id,icon,url}=link;
              return <button className='social' key={id}><a href={url}>{icon}</a></button>
            })
          }
        </ul>





    </nav>



  </Wrapper>
}


const Wrapper=styled.section`

.nav-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0.7rem 1rem;
  box-shadow:var(--shadow-1);
  background-color: var(--grey-100);

  img{
    width:11rem;
  }
  
}

.nav-toggle{
  font-size:1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

}

.links{
  padding: 1rem 0;
}

.links-container{
  height:0;
  overflow: hidden;
  background-color: var(--grey-200);
  transition: var(--transition);

.link a{
  display: block;
  text-transform: capitalize;
  font-size:1.2rem;
  margin-left:0.8rem;
  color:var(--primary-900);
  letter-spacing:1px;
  padding: 0.3rem 0;
}

.link:hover{
  background-color: var(--primary-200);
  transition:var(--transition);
}

.link a:hover{
  margin-left: 1.8rem;
  transition: var(--transition);
}

}

.socials{
  display: none;
}

@media screen and (min-width:800px) {

  background-color: var(--grey-200);
  box-shadow: var(--shadow-4);


  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0.6rem 1rem;
  }


  .nav-header{
   display:block;
   padding:0;
   box-shadow:none;
   background-color:transparent;

  }

  img{
    width:12rem;
  }

.links-container{
   height:auto !important;
   overflow: visible;
   background-color: transparent;

 .links{
    padding: 0;
   }


 .link {
   display: inline-block;
   &:hover{
    background: transparent;
   }

 
  }


.link a{
  display:inline;
  font-size:1rem;
  letter-spacing:1px;
  color:var(--primary-900);
  transition: var(--transition);
 
  &:hover{
    background-color: none;
    margin-left:0.8rem;
    color:green;
    font-weight: bold;
  }


}
  
    
  }


  .socials{
    display:flex;
    column-gap:1.1rem;
  }

  .social{
    font-size:1.2rem;
    color:green;
    background-color:transparent;
    border: transparent;
    cursor: pointer;

    a{
      color: green;
    }
   
  }

  .nav-toggle{
    display: none;
  }
    
}





  




`

export default App
