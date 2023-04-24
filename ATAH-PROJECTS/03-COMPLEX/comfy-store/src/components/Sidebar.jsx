import styled from "styled-components"
import logo from '../assets/logo.svg'
import {MdOutlineClose} from 'react-icons/md'
import { pageLinks } from "../utils/pageLinks"
import { Link } from "react-router-dom"
import ButtonContainer from "./ButtonContainer"
import { useProductsContext } from "../context/productsContext"
import { useUserContext } from "../context/userContext"



const Sidebar = () => {

    const{isSidebarOpen,closeSidebar}=useProductsContext();
    const {user}=useUserContext();


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

          {user &&  <li onClick={closeSidebar}><Link to='/checkout' className="link">checkout</Link></li>}



    </ul>


     <div className="button-elements">
         <ButtonContainer/>
     </div>


   

  </Wrapper>
}

const Wrapper=styled.div`

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