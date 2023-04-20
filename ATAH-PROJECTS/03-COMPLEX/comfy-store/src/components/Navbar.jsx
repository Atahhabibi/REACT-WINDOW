import styled from "styled-components"
import logo from '../assets/logo.svg'
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { pageLinks } from "../utils/pageLinks"
import ButtonContainer from "./ButtonContainer"
import { useProductsContext } from "../context/productsContext"

const Navbar = () => {

    const {openSidebar}=useProductsContext();

  return <Wrapper className="section-center">

        <div className="nav-header">
              <img src={logo} alt="comfy-sloth"  className="logo"/>
             <button className="toggle-btn" onClick={openSidebar}><FaBars/></button>
        </div>

        <ul className="page-links">
          {
            pageLinks.map((item)=>{
                return <li key={item.id}><Link to={item.url}  className="link">{item.text}</Link></li>
            })
          }

          <li ><Link to='/checkout' className="link">checkout</Link></li>

        </ul>

        <div className="buttons-element">
            <ButtonContainer />
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

width: 95vw;
padding:0.5rem 0;

.nav-header{
 display: flex;
 align-items: center;
 justify-content: space-between;

.logo{
    width:10rem;
}

.toggle-btn{
    background:transparent;
    font-size:1.7rem;
    border: transparent;
    color:var(--primary-500);
    cursor: pointer;

  
}

}

.page-links{
    display: none;
}

.buttons-element{
    display: none;
}




@media screen and (min-width:800px){

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    padding: 1rem 0;

    .toggle-btn{
        display: none;
    }

    .page-links{
        display: flex;
        justify-content: space-between;;

        .link{
            margin: 0 1rem;
            text-transform: capitalize;
            font-size:1.1rem;
            transition:var(--transition);
            color:var(--grey-800);
            padding-bottom:0.3rem;

            &:hover{
                border-bottom:2px solid var(--primary-500);
            }

        }
    }



    .buttons-element{
        display: block;
    }


  
}
    
`

export default Navbar