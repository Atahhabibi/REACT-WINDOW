import styled from "styled-components"
import logo from '../assets/logo.svg'
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { pageLinks } from "../utils/pageLinks"
import ButtonContainer from "./ButtonContainer"
import { useProductsContext } from "../context/productsContext"
import { useUserContext } from "../context/userContext"

const Navbar = () => {

    const {openSidebar}=useProductsContext();
    const {user}=useUserContext();

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

          {
              user &&  <li ><Link to='/checkout' className="link">checkout</Link></li>
          }

         

        </ul>

        <div className="buttons-element">
            <ButtonContainer />
        </div>





  </Wrapper>
}

const Wrapper=styled.div`

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