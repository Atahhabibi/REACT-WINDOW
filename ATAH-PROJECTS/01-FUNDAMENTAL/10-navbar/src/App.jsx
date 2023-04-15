import styled from 'styled-components'
import React,{useState} from 'react';
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
:root{
    --primary-100: #c5e5fc;
    --primary-200: #a5d5f8;
    --primary-300: #8bcbf9;
    --primary-400: #6ebef7;
    --primary-500: #49a6e9;
    --primary-600: #2d87c8;
    --primary-700: #1a6aa2;
    --primary-800: #104e7a;
    --primary-900: #063251;
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
    --black: #222;
    --white: #fff;
    --red-light: #f8d7da;
    --red-dark: #842029;
    --green-light: #d1e7dd;
    --green-dark: #0f5132;
    --small-text: .875rem;
    --extra-small-text: .7em;
    --backgroundColor: var(--grey-50);
    --textColor: var(--grey-900);
    --borderRadius: .25rem;
    --letterSpacing: 1px;
    --transition: .3s ease-in-out all;
    --max-width: 1120px;
    --fixed-width: 600px;
    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);
    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04);
}

.nav-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0.5rem 1rem;
  box-shadow:var(--shadow-1);
  background-color: var(--grey-300);
  
}

.nav-toggle{
  font-size:2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

}

.links{
  padding: 1rem 0;
}

.links-container{
  height: 0;
  overflow: hidden;
  background-color: var(--grey-200);
  transition: var(--transition);

.link a{
  display: block;
  text-transform: capitalize;
  font-size:1.5rem;
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

  .navbar{
    display: flex;
    justify-content: space-between;
    border: 2px solid red;
  }

  .nav-header{
   display:block;
   padding:0;
   box-shadow:none;
   background-color:transparent;
  }

.links-container{
    height: auto;
    overflow: visible;

.link a{
  display: block;
  text-transform: capitalize;
  font-size:1rem;
  margin-left:0rem;
  color:var(--primary-900);
  letter-spacing:1px;
  padding: 0.3rem 0;
}
  

    
  }


  



  .socials{
    display: block;
  }

  .nav-toggle{
    display: none;
  }
    
}





  




`

export default App
