import styled from "styled-components"
import logo from '../assets/logo.svg'
import {MdOutlineClose} from 'react-icons/md'
import { pageLinks } from "../utils/pageLinks"
import { Link } from "react-router-dom"
import ButtonContainer from "./ButtonContainer"
import { useProductsContext } from "../context/productsContext"



const Sidebar = () => {

    const{isSidebarOpen,closeSidebar}=useProductsContext();


  return <Wrapper style={isSidebarOpen?{transform:'translate(0)'}:null}>

   <div className="side-header">

    <img src={logo} alt="comfy-sloth" className="side-logo" />
    <button className="close-btn" onClick={closeSidebar}><MdOutlineClose/></button>

   </div>

    <ul className="page-links">

          {
            pageLinks.map((item)=>{
                return <li key={item.id} onClick={closeSidebar}><Link to={item.url}  className="link">{item.text}</Link></li>
            })
          }

          <li onClick={closeSidebar}><Link to='/checkout' className="link">checkout</Link></li>

    </ul>


     <div className="button-elements">
         <ButtonContainer/>
     </div>


   

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

position:fixed;
background:white;
width: 100vw;
height:100vh;
transition: var(--transition);
transform: translate(-100%);


.side-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

}

.side-logo{
    width:10rem;

}

.close-btn{
    font-size:2rem;
    border: transparent;
    background-color: transparent;
    color: red;
    cursor: pointer;
    transition: all 1s ease;

    &:hover{
        transform: rotate(-90deg);
        color: var(--primary-800);
    }

}

.page-links{
    margin:2rem 0;
}

.link{
    width: 100%;
    display:block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    text-transform: capitalize;
    color: var(--grey-700);
    transition:var(--transition);

    &:hover{
        background:var(--primary-200);
       
    }
}


.button-elements{
    text-align: center;
}

@media screen and (min-width:800px) {

    display: none;
    
}





    
`

export default Sidebar